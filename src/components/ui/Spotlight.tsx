import React, { useEffect, useRef, useState } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import { useSafeTheme } from '../../hooks/useSafeTheme';

// Define the variants with class-variance-authority
const spotlightVariants = cva(
  // Base styles for all Spotlight components
  "relative overflow-hidden",
  {
    variants: {
      // Theme variants
      theme: {
        enterprise: "bg-white text-gray-900",
        techDark: "bg-gray-950 text-white",
        glass: "backdrop-blur-lg text-white",
        neumorphicLight: "bg-[#e0e5ec] text-gray-800",
        glow: "bg-gray-950 text-white",
        '3d': "bg-white dark:bg-gray-900 text-gray-900 dark:text-white",
      },
      // Size variants
      size: {
        sm: "min-h-40",
        md: "min-h-64",
        lg: "min-h-96",
        full: "min-h-screen",
      },
      // Spotlight size variants
      spotSize: {
        sm: "", // small spotlight
        md: "", // medium spotlight
        lg: "", // large spotlight
      },
      // Spotlight intensity variants
      intensity: {
        low: "",
        medium: "",
        high: "",
      },
      // Animation variants
      animation: {
        none: "",
        pulse: "",
        breathe: "",
        rainbow: "",
      },
      // Spotlight color variants
      color: {
        blue: "",
        purple: "",
        cyan: "",
        pink: "",
        amber: "",
        multi: "",
      },
      // Spotlight type variants
      type: {
        radial: "",
        directional: "",
        beam: "",
      },
    },
    defaultVariants: {
      theme: "enterprise",
      size: "md",
      spotSize: "md",
      intensity: "medium",
      animation: "none",
      color: "blue",
      type: "radial",
    },
  }
);

// Get spotlight color based on color prop
const getSpotlightColor = (color, theme) => {
  // Base colors
  const colors = {
    blue: {
      enterprise: 'rgba(59, 130, 246, 0.15)',
      techDark: 'rgba(59, 130, 246, 0.2)',
      glass: 'rgba(59, 130, 246, 0.15)',
      neumorphicLight: 'rgba(59, 130, 246, 0.15)',
      glow: 'rgba(59, 130, 246, 0.25)',
      '3d': 'rgba(59, 130, 246, 0.15)',
    },
    purple: {
      enterprise: 'rgba(139, 92, 246, 0.15)',
      techDark: 'rgba(139, 92, 246, 0.2)',
      glass: 'rgba(139, 92, 246, 0.15)',
      neumorphicLight: 'rgba(139, 92, 246, 0.15)',
      glow: 'rgba(139, 92, 246, 0.25)',
      '3d': 'rgba(139, 92, 246, 0.15)',
    },
    cyan: {
      enterprise: 'rgba(6, 182, 212, 0.15)',
      techDark: 'rgba(6, 182, 212, 0.2)',
      glass: 'rgba(6, 182, 212, 0.15)',
      neumorphicLight: 'rgba(6, 182, 212, 0.15)',
      glow: 'rgba(6, 182, 212, 0.25)',
      '3d': 'rgba(6, 182, 212, 0.15)',
    },
    pink: {
      enterprise: 'rgba(236, 72, 153, 0.15)',
      techDark: 'rgba(236, 72, 153, 0.2)',
      glass: 'rgba(236, 72, 153, 0.15)',
      neumorphicLight: 'rgba(236, 72, 153, 0.15)',
      glow: 'rgba(236, 72, 153, 0.25)',
      '3d': 'rgba(236, 72, 153, 0.15)',
    },
    amber: {
      enterprise: 'rgba(245, 158, 11, 0.15)',
      techDark: 'rgba(245, 158, 11, 0.2)',
      glass: 'rgba(245, 158, 11, 0.15)',
      neumorphicLight: 'rgba(245, 158, 11, 0.15)',
      glow: 'rgba(245, 158, 11, 0.25)',
      '3d': 'rgba(245, 158, 11, 0.15)',
    },
  };
  
  // Special case for multi-color
  if (color === 'multi') {
    return 'multi';
  }
  
  return colors[color]?.[theme] || colors.blue[theme];
};

// Get spotlight size based on spotSize prop
const getSpotlightSize = (spotSize) => {
  switch (spotSize) {
    case 'sm': return 200;
    case 'lg': return 600;
    default: return 400; // medium
  }
};

// Get spotlight intensity based on intensity prop
const getSpotlightIntensity = (intensity, theme) => {
  // Base multiplier
  const baseMultiplier = {
    low: 0.7,
    medium: 1,
    high: 1.5,
  }[intensity] || 1;
  
  // Theme-specific adjustments
  const themeMultiplier = {
    enterprise: 1,
    techDark: 1.2,
    glass: 0.8,
    neumorphicLight: 0.9,
    glow: 1.5,
    '3d': 1.1,
  }[theme] || 1;
  
  return baseMultiplier * themeMultiplier;
};

const Spotlight = ({
  children,
  className,
  theme: themeProp,
  size,
  spotSize,
  intensity,
  animation,
  color,
  type,
  ...props
}) => {
  // Get the current theme from context
  const { theme: contextTheme } = useSafeTheme();
  
  // Use prop theme or fall back to context
  const activeTheme = themeProp || contextTheme;
  
  // Refs for container and animation
  const containerRef = useRef(null);
  const spotlightRef = useRef(null);
  const rafRef = useRef(null);
  const multiColorIndex = useRef(0);
  
  // State for mouse position and animation
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const [isVisible, setIsVisible] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(0);
  
  // Classes based on variants
  const containerClasses = spotlightVariants({
    theme: activeTheme,
    size,
    spotSize,
    intensity,
    animation,
    color,
    type,
    className,
  });
  
  // Get configuration based on props
  const spotlightColor = getSpotlightColor(color, activeTheme);
  const spotlightSizePx = getSpotlightSize(spotSize);
  const intensityValue = getSpotlightIntensity(intensity, activeTheme);
  
  // Handle mouse move
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
    setIsVisible(true);
    
    // Apply 3D parallax effect to content
    if (containerRef.current.querySelector('.spotlight-content')) {
      const content = containerRef.current.querySelector('.spotlight-content');
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const moveX = (x - centerX) / rect.width * 10; // max 10px movement
      const moveY = (y - centerY) / rect.height * 10;
      
      content.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
    }
  };
  
  const handleMouseLeave = () => {
    // Fade out spotlight gradually
    setIsVisible(false);
    
    // Reset content position
    if (containerRef.current?.querySelector('.spotlight-content')) {
      const content = containerRef.current.querySelector('.spotlight-content');
      content.style.transform = 'translate3d(0, 0, 0)';
    }
  };
  
  // Animation loop for special effects
  useEffect(() => {
    if (animation === 'none') return;
    
    let startTime = Date.now();
    
    const animateSpotlight = () => {
      if (!spotlightRef.current) {
        rafRef.current = requestAnimationFrame(animateSpotlight);
        return;
      }
      
      const elapsed = Date.now() - startTime;
      
      if (animation === 'pulse') {
        // Pulse animation - change size
        const scale = 1 + Math.sin(elapsed / 1000) * 0.2;
        spotlightRef.current.style.transform = `translate(-50%, -50%) scale(${scale})`;
      } else if (animation === 'breathe') {
        // Breathe animation - change opacity
        const opacity = 0.5 + Math.sin(elapsed / 1500) * 0.3;
        spotlightRef.current.style.opacity = opacity;
      } else if (animation === 'rainbow' && color === 'multi') {
        // Rainbow animation - cycle through colors
        const hue = (elapsed / 50) % 360;
        
        if (type === 'radial') {
          spotlightRef.current.style.background = `radial-gradient(circle at center, 
            hsla(${hue}, 100%, 60%, 0.25), 
            transparent 70%)`;
        } else if (type === 'directional') {
          spotlightRef.current.style.background = `linear-gradient(45deg, 
            hsla(${hue}, 100%, 60%, 0.25), 
            hsla(${hue + 60}, 100%, 60%, 0.1))`;
        } else if (type === 'beam') {
          spotlightRef.current.style.background = `linear-gradient(90deg, 
            transparent, 
            hsla(${hue}, 100%, 60%, 0.25), 
            transparent)`;
        }
      }
      
      // Continue animation
      rafRef.current = requestAnimationFrame(animateSpotlight);
      
      // Update animation phase for component re-renders
      if (elapsed > 1000) {
        setAnimationPhase(prev => (prev + 1) % 1000);
        startTime = Date.now();
      }
    };
    
    // Start animation
    rafRef.current = requestAnimationFrame(animateSpotlight);
    
    // Cleanup
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [animation, type, color, animationPhase]);
  
  // Create spotlight styles based on configuration
  const getSpotlightStyles = () => {
    const baseStyles = {
      position: 'absolute',
      top: `${mousePosition.y}px`,
      left: `${mousePosition.x}px`,
      width: `${spotlightSizePx}px`,
      height: `${spotlightSizePx}px`,
      transform: 'translate(-50%, -50%)',
      pointerEvents: 'none',
      opacity: isVisible ? 1 : 0,
      transition: 'opacity 0.3s ease',
    };
    
    // For multi-color but not rainbow animation
    if (color === 'multi' && animation !== 'rainbow') {
      const multiColors = [
        getSpotlightColor('blue', activeTheme),
        getSpotlightColor('purple', activeTheme),
        getSpotlightColor('cyan', activeTheme),
        getSpotlightColor('pink', activeTheme),
      ];
      
      const currentColor = multiColors[multiColorIndex.current % multiColors.length];
      
      // Auto-cycle colors during mouse movement
      if (isVisible) {
        setTimeout(() => {
          multiColorIndex.current += 1;
        }, 2000);
      }
      
      if (type === 'radial') {
        baseStyles.background = `radial-gradient(circle at center, ${currentColor}, transparent 70%)`;
      } else if (type === 'directional') {
        baseStyles.background = `linear-gradient(45deg, ${currentColor}, rgba(255, 255, 255, 0) 80%)`;
      } else if (type === 'beam') {
        baseStyles.width = '100%';
        baseStyles.height = '200px';
        baseStyles.background = `linear-gradient(90deg, transparent, ${currentColor}, transparent)`;
      }
    } else if (color === 'multi' && animation === 'rainbow') {
      // Rainbow animation styles are handled in the animation loop
      if (type === 'radial') {
        baseStyles.background = 'radial-gradient(circle at center, rgba(59, 130, 246, 0.2), transparent 70%)';
      } else if (type === 'directional') {
        baseStyles.background = 'linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.1))';
      } else if (type === 'beam') {
        baseStyles.width = '100%';
        baseStyles.height = '200px';
        baseStyles.background = 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.2), transparent)';
      }
    } else {
      // Single color spotlight
      if (type === 'radial') {
        baseStyles.background = `radial-gradient(circle at center, ${spotlightColor}, transparent 70%)`;
      } else if (type === 'directional') {
        baseStyles.background = `linear-gradient(45deg, ${spotlightColor}, rgba(255, 255, 255, 0) 80%)`;
      } else if (type === 'beam') {
        baseStyles.width = '100%';
        baseStyles.height = '200px';
        baseStyles.background = `linear-gradient(90deg, transparent, ${spotlightColor}, transparent)`;
      }
    }
    
    // Apply intensity multiplier
    if (intensityValue !== 1) {
      // Extract current values and apply intensity
      const adjustOpacity = (cssValue) => {
        const opacityMatch = cssValue.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/);
        if (opacityMatch) {
          const r = opacityMatch[1];
          const g = opacityMatch[2];
          const b = opacityMatch[3];
          const a = parseFloat(opacityMatch[4]) * intensityValue;
          return `rgba(${r}, ${g}, ${b}, ${a})`;
        }
        return cssValue;
      };
      
      if (baseStyles.background.includes('radial-gradient')) {
        baseStyles.background = baseStyles.background.replace(/rgba\([^)]+\)/, adjustOpacity);
      } else if (baseStyles.background.includes('linear-gradient')) {
        baseStyles.background = baseStyles.background.replace(/rgba\([^)]+\)/, adjustOpacity);
      }
    }
    
    return baseStyles;
  };
  
  return (
    <div 
      ref={containerRef}
      className={cn(containerClasses)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <div 
        ref={spotlightRef}
        style={getSpotlightStyles()}
      />
      <div className="relative z-10 spotlight-content transition-transform duration-200">
        {children}
      </div>
    </div>
  );
};

export { Spotlight, spotlightVariants };