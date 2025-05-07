import React, { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook for tracking mouse position relative to an element
 * @param {React.RefObject} elementRef - Reference to the DOM element
 * @param {boolean} active - Whether tracking is active
 * @returns {Object} - Normalized mouse position and element dimensions
 */
export const useMousePosition = (elementRef, active = true) => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
    elWidth: 0,
    elHeight: 0,
    normX: 0,
    normY: 0,
  });

  const updatePosition = useCallback(
    (e) => {
      if (!elementRef.current || !active) return;
      
      const rect = elementRef.current.getBoundingClientRect();
      const elWidth = rect.width;
      const elHeight = rect.height;
      
      // Get position relative to element
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Normalized position from -1 to 1
      const normX = (x / elWidth) * 2 - 1;
      const normY = (y / elHeight) * 2 - 1;
      
      setPosition({ x, y, elWidth, elHeight, normX, normY });
    },
    [elementRef, active]
  );

  // Add and remove event listeners
  useEffect(() => {
    if (!active) return;
    
    const element = elementRef.current;
    if (!element) return;
    
    element.addEventListener('mousemove', updatePosition);
    
    return () => {
      element.removeEventListener('mousemove', updatePosition);
    };
  }, [elementRef, updatePosition, active]);

  return position;
};

/**
 * Custom hook for implementing magnetic effects on hover
 * @param {React.RefObject} elementRef - Reference to the DOM element
 * @param {Object} options - Configuration options
 * @returns {Object} - Style and event handler props
 */
export const useMagneticEffect = (elementRef, {
  strength = 30,
  radius = 150,
  active = true
} = {}) => {
  const [magneticStyle, setMagneticStyle] = useState({
    transform: '',
    transition: 'transform 0.5s ease-out',
  });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = useCallback(
    (e) => {
      if (!elementRef.current || !active) return;
      
      const rect = elementRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
      
      // Apply magnetic effect only within radius
      if (distance < radius) {
        const magneticPower = 1 - Math.min(distance / radius, 1);
        const moveX = distanceX * magneticPower * strength / 10;
        const moveY = distanceY * magneticPower * strength / 10;
        
        setMagneticStyle({
          transform: `translate(${moveX}px, ${moveY}px)`,
          transition: isHovering ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
        });
      } else {
        setMagneticStyle({
          transform: '',
          transition: 'transform 0.5s ease-out',
        });
      }
    },
    [elementRef, strength, radius, active, isHovering]
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    setMagneticStyle({
      transform: '',
      transition: 'transform 0.5s ease-out',
    });
  }, []);

  useEffect(() => {
    if (!active) return;
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove, active]);

  return {
    style: magneticStyle,
    handlers: {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    },
  };
};

/**
 * Custom hook for parallax effects on mouse move
 * @param {React.RefObject} containerRef - Reference to the container
 * @param {Object} options - Configuration options for parallax effect
 * @returns {Function} - Function to generate style for each layer
 */
export const useParallaxEffect = (containerRef, {
  active = true,
  dampingFactor = 0.1,
} = {}) => {
  const mousePosition = useMousePosition(containerRef, active);
  
  // Generate style for a specific parallax layer
  const getLayerStyle = useCallback(
    (depth = 1) => {
      if (!active || !mousePosition.elWidth) {
        return { transform: 'translate3d(0, 0, 0)' };
      }
      
      // Calculate movement based on normalized position and depth
      const moveX = mousePosition.normX * -depth * 20 * dampingFactor;
      const moveY = mousePosition.normY * -depth * 20 * dampingFactor;
      
      return {
        transform: `translate3d(${moveX}px, ${moveY}px, 0)`,
        transition: 'transform 0.1s ease-out',
      };
    },
    [mousePosition, active, dampingFactor]
  );
  
  return getLayerStyle;
};

/**
 * Custom hook for glare effect on elements
 * @param {React.RefObject} elementRef - Reference to the element
 * @param {Object} options - Configuration options for glare effect
 * @returns {Object} - Style object for the glare element
 */
export const useGlareEffect = (elementRef, {
  opacity = 0.2,
  color = '255, 255, 255',
  active = true,
} = {}) => {
  const mousePosition = useMousePosition(elementRef, active);
  
  const glareStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: 1,
    opacity: active ? opacity : 0,
    background: `radial-gradient(
      circle at ${50 + mousePosition.normX * 50}% ${50 + mousePosition.normY * 50}%, 
      rgba(${color}, ${opacity}), 
      transparent 80%
    )`,
    transition: 'opacity 0.3s ease',
  };
  
  return glareStyle;
};

/**
 * Utility to create a floating animation style with customizable parameters
 * @param {Object} options - Configuration options for floating animation
 * @returns {Object} - Style object with animation properties
 */
export const createFloatingAnimation = ({
  yOffset = 10,
  duration = 2,
  delay = 0,
  easing = 'ease-in-out',
  iteration = 'infinite',
} = {}) => {
  return {
    animation: `float ${duration}s ${easing} ${delay}s ${iteration}`,
    '@keyframes float': {
      '0%, 100%': { transform: 'translateY(0)' },
      '50%': { transform: `translateY(${-yOffset}px)` },
    },
  };
};

/**
 * Custom hook to implement tilt effect on any element
 * @param {React.RefObject} elementRef - Reference to the DOM element
 * @param {Object} options - Configuration options for tilt effect
 * @returns {Object} - Style object and event handlers
 */
export const useTiltEffect = (elementRef, {
  max = 15, // max tilt rotation (degrees)
  perspective = 1000, // perspective value
  scale = 1.05, // scale on hover
  speed = 300, // transition speed (ms)
  easing = 'cubic-bezier(.03,.98,.52,.99)', // easing function
  active = true, // whether effect is active
  glare = false, // enable glare effect
  glareOpacity = 0.3, // opacity of glare
  gyroscope = false, // enable gyroscope effect on mobile
  gyroscopeMinAngleX = -45, // min gyroscope angle (degrees)
  gyroscopeMaxAngleX = 45, // max gyroscope angle (degrees)
  gyroscopeMinAngleY = -45, // min gyroscope angle (degrees)
  gyroscopeMaxAngleY = 45, // max gyroscope angle (degrees)
} = {}) => {
  const [tiltStyle, setTiltStyle] = useState({
    transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
    transition: `transform ${speed}ms ${easing}`,
  });
  
  const [glareStyle, setGlareStyle] = useState({
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    backgroundImage: 'linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)',
    transform: 'rotate(180deg)',
    opacity: '0',
    transition: `opacity ${speed}ms ${easing}`,
  });
  
  const [isHovering, setIsHovering] = useState(false);
  
  const handleMouseMove = useCallback((e) => {
    if (!elementRef.current || !active || !isHovering) return;
    
    const rect = elementRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const centerX = rect.left + width / 2;
    const centerY = rect.top + height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // Calculate rotation based on mouse position
    const tiltX = -((mouseY / height) * max * 2).toFixed(2);
    const tiltY = ((mouseX / width) * max * 2).toFixed(2);
    
    // Update tilt style
    setTiltStyle({
      transform: `perspective(${perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(${scale}, ${scale}, ${scale})`,
      transition: isHovering ? `transform ${speed}ms ${easing}` : `transform ${speed * 2}ms ${easing}`,
    });
    
    // Update glare position if enabled
    if (glare) {
      const glareX = (mouseX / width) * 100;
      const glareY = (mouseY / height) * 100;
      
      setGlareStyle({
        ...glareStyle,
        backgroundImage: `linear-gradient(${Math.atan2(mouseY, mouseX) * (180 / Math.PI) - 90}deg, rgba(255,255,255,${glareOpacity}) 0%, rgba(255,255,255,0) 80%)`,
        opacity: glareOpacity,
      });
    }
  }, [elementRef, max, perspective, scale, speed, easing, active, isHovering, glare, glareStyle, glareOpacity]);
  
  const handleMouseEnter = useCallback(() => {
    if (!active) return;
    setIsHovering(true);
  }, [active]);
  
  const handleMouseLeave = useCallback(() => {
    if (!active) return;
    setIsHovering(false);
    
    // Reset tilt
    setTiltStyle({
      transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      transition: `transform ${speed * 2}ms ${easing}`,
    });
    
    // Reset glare
    if (glare) {
      setGlareStyle({
        ...glareStyle,
        opacity: '0',
      });
    }
  }, [active, perspective, speed, easing, glare, glareStyle]);
  
  // Handle device orientation for gyroscope effect
  useEffect(() => {
    if (!gyroscope || !active || typeof window === 'undefined') return;
    
    const handleDeviceOrientation = (e) => {
      if (!elementRef.current || !isHovering) return;
      
      const beta = Math.min(Math.max(e.beta, gyroscopeMinAngleX), gyroscopeMaxAngleX);
      const gamma = Math.min(Math.max(e.gamma, gyroscopeMinAngleY), gyroscopeMaxAngleY);
      
      // Scale gyroscope values
      const tiltX = (beta / gyroscopeMaxAngleX) * max;
      const tiltY = (gamma / gyroscopeMaxAngleY) * max;
      
      setTiltStyle({
        transform: `perspective(${perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(${scale}, ${scale}, ${scale})`,
        transition: `transform ${speed}ms ${easing}`,
      });
    };
    
    window.addEventListener('deviceorientation', handleDeviceOrientation);
    
    return () => {
      window.removeEventListener('deviceorientation', handleDeviceOrientation);
    };
  }, [elementRef, gyroscope, active, isHovering, max, perspective, scale, speed, easing, 
      gyroscopeMinAngleX, gyroscopeMaxAngleX, gyroscopeMinAngleY, gyroscopeMaxAngleY]);
  
  // Add and remove mouse event listeners
  useEffect(() => {
    if (!active) return;
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove, active]);
  
  return {
    tiltStyle,
    glareStyle,
    handlers: {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    },
    isHovering,
  };
};

/**
 * Custom hook for creating scrolling parallax effects
 * @param {Object} options - Configuration options
 * @returns {Object} - Style generator function and scroll position
 */
export const useScrollParallax = ({
  speed = 0.5,
  direction = 'vertical',
  active = true,
} = {}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    if (!active) return;
    
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [active]);
  
  const getParallaxStyle = useCallback((depth = 1) => {
    if (!active) return {};
    
    const offset = scrollPosition * speed * depth;
    
    return {
      transform: direction === 'vertical'
        ? `translateY(${offset}px)`
        : `translateX(${offset}px)`,
      transition: 'transform 0.1s ease-out',
    };
  }, [scrollPosition, speed, direction, active]);
  
  return {
    getParallaxStyle,
    scrollPosition,
  };
};