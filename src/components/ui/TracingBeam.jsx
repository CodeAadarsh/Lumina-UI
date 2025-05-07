import React, { useRef, useState, useEffect } from "react";
import { cva } from 'class-variance-authority';
import { useSafeTheme } from '../../hooks/useSafeTheme';
import { cn } from '../../utils/cn';

// Define the variants with class-variance-authority
const tracingBeamVariants = cva(
  "relative", // Base styles
  {
    variants: {
      // Theme variants
      theme: {
        enterprise: "text-gray-900",
        techDark: "text-white",
        glass: "text-white",
        neumorphicLight: "text-gray-800",
        glow: "text-white",
        '3d': "text-gray-900 dark:text-white",
      },
      // Size variants
      size: {
        sm: "space-y-4",
        md: "space-y-6",
        lg: "space-y-8",
      },
      // Beam position variants
      position: {
        left: "",
        right: "",
        center: "",
      },
      // Beam style variants
      beamStyle: {
        solid: "",
        gradient: "",
        dashed: "",
        dotted: "",
        glow: "",
      },
      // Beam marker variants
      marker: {
        none: "",
        circle: "",
        square: "",
        diamond: "",
        dual: "",
      },
    },
    // Compound variants for specific combinations
    compoundVariants: [
      // Position specifics
      {
        position: "left",
        className: "ml-12 md:ml-24",
      },
      {
        position: "right",
        className: "mr-12 md:mr-24",
      },
      {
        position: "center",
        className: "mx-auto",
      },
    ],
    // Default variant values
    defaultVariants: {
      theme: "enterprise",
      size: "md",
      position: "left",
      beamStyle: "gradient",
      marker: "dual",
    },
  }
);

// Define beam color variants
const getBeamGradient = (theme) => {
  const gradients = {
    enterprise: ["#3b82f6", "#1d4ed8"],
    techDark: ["#8b5cf6", "#4c1d95"],
    glass: ["#ffffff", "#93c5fd"],
    neumorphicLight: ["#3b82f6", "#1d4ed8"],
    glow: ["#60a5fa", "#3b82f6"],
    '3d': ["#3b82f6", "#8b5cf6"],
  };
  
  return gradients[theme] || gradients.enterprise;
};

// Define marker colors
const getMarkerColors = (theme) => {
  const colors = {
    enterprise: ["#3b82f6", "#1d4ed8"],
    techDark: ["#8b5cf6", "#4c1d95"],
    glass: ["#ffffff", "#93c5fd"],
    neumorphicLight: ["#3b82f6", "#1d4ed8"],
    glow: ["#60a5fa", "#3b82f6"],
    '3d': ["#3b82f6", "#8b5cf6"],
  };
  
  return colors[theme] || colors.enterprise;
};

const TracingBeam = ({
  children,
  className,
  contentClassName,
  theme: themeProp,
  size,
  position,
  beamStyle,
  marker,
  beamWidth = 4,
  markerSize = 'md',
  ...props
}) => {
  // Get the current theme from context
  const { theme: contextTheme } = useSafeTheme();
  
  // Use prop theme or fall back to context
  const activeTheme = themeProp || contextTheme;
  
  // Refs
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  
  // State
  const [svgHeight, setSvgHeight] = useState(0);
  const [scrollYProgress, setScrollYProgress] = useState(0);
  const [y1, setY1] = useState(50);
  const [y2, setY2] = useState(50);
  
  // Set up scrolling effects
  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;
    
    // Get the height of the content
    setSvgHeight(contentRef.current.offsetHeight);
    
    // Set up intersection observer to track progress
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Track scroll progress
            const scrollHandler = () => {
              const rect = containerRef.current.getBoundingClientRect();
              const total = window.innerHeight - rect.height;
              const progress = Math.min(Math.max((window.innerHeight - rect.top) / total, 0), 1);
              setScrollYProgress(progress);
            };
            
            window.addEventListener('scroll', scrollHandler);
            scrollHandler(); // Initial call
            
            return () => {
              window.removeEventListener('scroll', scrollHandler);
            };
          }
        });
      },
      { threshold: 0.1 }
    );
    
    observer.observe(containerRef.current);
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  // Update beam position based on scroll progress
  useEffect(() => {
    if (svgHeight <= 0) return;
    
    const y1Target = 50 + (svgHeight - 100) * Math.min(scrollYProgress * 1.25, 0.8);
    const y2Target = 50 + (svgHeight - 100) * scrollYProgress;
    
    // Simple spring animation
    const animateSpring = () => {
      setY1(prev => prev + (y1Target - prev) * 0.1);
      setY2(prev => prev + (y2Target - prev) * 0.1);
      
      if (
        Math.abs(y1 - y1Target) > 0.1 ||
        Math.abs(y2 - y2Target) > 0.1
      ) {
        requestAnimationFrame(animateSpring);
      }
    };
    
    requestAnimationFrame(animateSpring);
  }, [scrollYProgress, svgHeight]);
  
  // Get beam colors
  const beamGradient = getBeamGradient(activeTheme);
  const markerColors = getMarkerColors(activeTheme);
  
  // Get beam stroke style
  const getBeamStrokeStyle = () => {
    switch (beamStyle) {
      case 'solid':
        return {
          stroke: beamGradient[0],
          strokeDasharray: 'none',
        };
      case 'dashed':
        return {
          stroke: beamGradient[0],
          strokeDasharray: '8 4',
        };
      case 'dotted':
        return {
          stroke: beamGradient[0],
          strokeDasharray: '2 4',
        };
      case 'glow':
        return {
          stroke: beamGradient[0],
          filter: 'drop-shadow(0 0 4px ' + beamGradient[0] + ')',
        };
      case 'gradient':
      default:
        return {
          stroke: 'url(#gradient)',
          strokeDasharray: 'none',
        };
    }
  };
  
  // Get marker style
  const getMarkerStyle = (index) => {
    const baseSize = markerSize === 'sm' ? 4 : markerSize === 'lg' ? 8 : 6;
    
    switch (marker) {
      case 'none':
        return { display: 'none' };
      case 'square':
        return {
          width: baseSize,
          height: baseSize,
          borderRadius: '0',
          backgroundColor: markerColors[index % markerColors.length],
        };
      case 'diamond':
        return {
          width: baseSize,
          height: baseSize,
          borderRadius: '0',
          transform: `translateY(${index === 0 ? y1 : y2}px) translateX(10px) rotate(45deg)`,
          backgroundColor: markerColors[index % markerColors.length],
        };
      case 'circle':
      case 'dual':
      default:
        return {
          width: baseSize,
          height: baseSize,
          borderRadius: '50%',
          backgroundColor: markerColors[index % markerColors.length],
        };
    }
  };
  
  // Get container position styles
  const getPositionStyles = () => {
    if (position === "right") {
      return { right: '-4rem' };
    } else if (position === "center") {
      return { left: '50%', transform: 'translateX(-50%)' };
    }
    return { left: '-4rem' }; // default left
  };
  
  // Get content position class
  const getContentPositionClass = () => {
    if (position === "right") {
      return "mr-12 md:mr-24";
    } else if (position === "center") {
      return "mx-auto px-12 md:px-24";
    }
    return "ml-12 md:ml-24"; // default left
  };
  
  // Main component classes
  const containerClasses = tracingBeamVariants({
    theme: activeTheme,
    size,
    position,
    beamStyle,
    marker,
    className,
  });
  
  return (
    <div
      ref={containerRef}
      className={cn(containerClasses)}
      {...props}
    >
      <div 
        className="absolute top-0 bottom-0 w-20"
        style={getPositionStyles()}
      >
        <svg
          className="h-full w-full overflow-visible"
          width="50"
          height={svgHeight || 100}
          viewBox={`0 0 50 ${svgHeight || 100}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d={`M 25 ${y1} L 25 ${y2}`}
            strokeWidth={beamWidth}
            strokeLinecap="round"
            style={getBeamStrokeStyle()}
          />
          
          <defs>
            <linearGradient
              id="gradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor={beamGradient[0]} />
              <stop offset="1" stopColor={beamGradient[1]} />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Markers */}
        {marker !== 'none' && (
          <div className="absolute top-0 left-0 h-full w-full">
            {/* First marker */}
            <div
              className="absolute top-0 left-0"
              style={{
                ...getMarkerStyle(0),
                transform: `translateY(${y1}px) translateX(10px)`,
              }}
            />
            
            {/* Second marker (if dual or not specified) */}
            {(marker === 'dual' || marker === undefined) && (
              <div
                className="absolute top-0 left-0"
                style={{
                  ...getMarkerStyle(1),
                  transform: `translateY(${y2}px) translateX(10px)`,
                }}
              />
            )}
          </div>
        )}
      </div>
      
      <div 
        ref={contentRef} 
        className={cn(getContentPositionClass(), contentClassName)}
      >
        {children}
      </div>
    </div>
  );
};

export { TracingBeam, tracingBeamVariants };