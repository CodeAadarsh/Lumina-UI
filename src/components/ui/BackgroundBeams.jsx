import React, { useEffect, useRef, useState } from "react";
import { cva } from 'class-variance-authority';
import { useSafeTheme } from '../../hooks/useSafeTheme';
import { cn } from '../../utils/cn';

// Define the variants with class-variance-authority
const backgroundBeamsVariants = cva(
  "relative overflow-hidden",
  {
    variants: {
      theme: {
        enterprise: "bg-white",
        techDark: "bg-gray-950",
        glass: "bg-gray-900/80 backdrop-blur-lg",
        neumorphicLight: "bg-[#e0e5ec]",
        glow: "bg-gray-950",
        '3d': "bg-white dark:bg-gray-900",
      },
      size: {
        sm: "min-h-40",
        md: "min-h-64",
        lg: "min-h-96",
        full: "min-h-screen",
      },
      density: {
        low: "",
        medium: "",
        high: "",
      },
      beamSize: {
        thin: "",
        medium: "",
        thick: "",
      },
      cursorGlow: {
        none: "",
        subtle: "",
        medium: "",
        strong: "",
      },
      colorScheme: {
        blue: "",
        purple: "",
        cyan: "",
        pink: "",
        amber: "",
        multi: "",
      },
    },
    defaultVariants: {
      theme: "techDark",
      size: "full",
      density: "medium",
      beamSize: "medium",
      cursorGlow: "medium",
      colorScheme: "blue",
    },
  }
);

// Define beam colors based on theme and colorScheme
const getBeamColors = (colorScheme, theme) => {
  const colorMaps = {
    blue: {
      enterprise: ['rgba(59, 130, 246, 0.6)', 'rgba(37, 99, 235, 0.5)'],
      techDark: ['rgba(59, 130, 246, 0.6)', 'rgba(37, 99, 235, 0.5)'],
      glass: ['rgba(59, 130, 246, 0.4)', 'rgba(37, 99, 235, 0.3)'],
      neumorphicLight: ['rgba(59, 130, 246, 0.4)', 'rgba(37, 99, 235, 0.3)'],
      glow: ['rgba(59, 130, 246, 0.7)', 'rgba(37, 99, 235, 0.6)'],
      '3d': ['rgba(59, 130, 246, 0.6)', 'rgba(37, 99, 235, 0.5)'],
    },
    purple: {
      enterprise: ['rgba(139, 92, 246, 0.6)', 'rgba(124, 58, 237, 0.5)'],
      techDark: ['rgba(139, 92, 246, 0.6)', 'rgba(124, 58, 237, 0.5)'],
      glass: ['rgba(139, 92, 246, 0.4)', 'rgba(124, 58, 237, 0.3)'],
      neumorphicLight: ['rgba(139, 92, 246, 0.4)', 'rgba(124, 58, 237, 0.3)'],
      glow: ['rgba(139, 92, 246, 0.7)', 'rgba(124, 58, 237, 0.6)'],
      '3d': ['rgba(139, 92, 246, 0.6)', 'rgba(124, 58, 237, 0.5)'],
    },
    cyan: {
      enterprise: ['rgba(6, 182, 212, 0.6)', 'rgba(8, 145, 178, 0.5)'],
      techDark: ['rgba(6, 182, 212, 0.6)', 'rgba(8, 145, 178, 0.5)'],
      glass: ['rgba(6, 182, 212, 0.4)', 'rgba(8, 145, 178, 0.3)'],
      neumorphicLight: ['rgba(6, 182, 212, 0.4)', 'rgba(8, 145, 178, 0.3)'],
      glow: ['rgba(6, 182, 212, 0.7)', 'rgba(8, 145, 178, 0.6)'],
      '3d': ['rgba(6, 182, 212, 0.6)', 'rgba(8, 145, 178, 0.5)'],
    },
    pink: {
      enterprise: ['rgba(236, 72, 153, 0.6)', 'rgba(219, 39, 119, 0.5)'],
      techDark: ['rgba(236, 72, 153, 0.6)', 'rgba(219, 39, 119, 0.5)'],
      glass: ['rgba(236, 72, 153, 0.4)', 'rgba(219, 39, 119, 0.3)'],
      neumorphicLight: ['rgba(236, 72, 153, 0.4)', 'rgba(219, 39, 119, 0.3)'],
      glow: ['rgba(236, 72, 153, 0.7)', 'rgba(219, 39, 119, 0.6)'],
      '3d': ['rgba(236, 72, 153, 0.6)', 'rgba(219, 39, 119, 0.5)'],
    },
    amber: {
      enterprise: ['rgba(245, 158, 11, 0.6)', 'rgba(217, 119, 6, 0.5)'],
      techDark: ['rgba(245, 158, 11, 0.6)', 'rgba(217, 119, 6, 0.5)'],
      glass: ['rgba(245, 158, 11, 0.4)', 'rgba(217, 119, 6, 0.3)'],
      neumorphicLight: ['rgba(245, 158, 11, 0.4)', 'rgba(217, 119, 6, 0.3)'],
      glow: ['rgba(245, 158, 11, 0.7)', 'rgba(217, 119, 6, 0.6)'],
      '3d': ['rgba(245, 158, 11, 0.6)', 'rgba(217, 119, 6, 0.5)'],
    },
    multi: {
      enterprise: [
        'rgba(59, 130, 246, 0.6)', 'rgba(139, 92, 246, 0.5)', 
        'rgba(236, 72, 153, 0.6)', 'rgba(6, 182, 212, 0.5)'
      ],
      techDark: [
        'rgba(59, 130, 246, 0.6)', 'rgba(139, 92, 246, 0.5)', 
        'rgba(236, 72, 153, 0.6)', 'rgba(6, 182, 212, 0.5)'
      ],
      glass: [
        'rgba(59, 130, 246, 0.4)', 'rgba(139, 92, 246, 0.3)', 
        'rgba(236, 72, 153, 0.4)', 'rgba(6, 182, 212, 0.3)'
      ],
      neumorphicLight: [
        'rgba(59, 130, 246, 0.4)', 'rgba(139, 92, 246, 0.3)', 
        'rgba(236, 72, 153, 0.4)', 'rgba(6, 182, 212, 0.3)'
      ],
      glow: [
        'rgba(59, 130, 246, 0.7)', 'rgba(139, 92, 246, 0.6)', 
        'rgba(236, 72, 153, 0.7)', 'rgba(6, 182, 212, 0.6)'
      ],
      '3d': [
        'rgba(59, 130, 246, 0.6)', 'rgba(139, 92, 246, 0.5)', 
        'rgba(236, 72, 153, 0.6)', 'rgba(6, 182, 212, 0.5)'
      ],
    }
  };

  return colorMaps[colorScheme]?.[theme] || colorMaps.blue[theme];
};

// Define beam count based on density
const getBeamCount = (density) => {
  const densityMap = {
    low: 10,
    medium: 20,
    high: 30,
  };
  
  return densityMap[density] || densityMap.medium;
};

// Define beam size range based on beamSize prop
const getBeamSizeRange = (beamSize) => {
  const sizeMap = {
    thin: { min: 2, max: 4, lengthMin: 100, lengthMax: 200 },
    medium: { min: 4, max: 8, lengthMin: 150, lengthMax: 300 },
    thick: { min: 6, max: 12, lengthMin: 200, lengthMax: 400 },
  };
  
  return sizeMap[beamSize] || sizeMap.medium;
};

// Define cursor glow settings
const getCursorGlowSettings = (cursorGlow, theme) => {
  const baseSettings = {
    size: 200,
    opacity: 0.6,
    blur: '3xl',
  };
  
  // Adjust based on cursor glow intensity
  if (cursorGlow === 'subtle') {
    baseSettings.opacity = 0.3;
    baseSettings.blur = 'xl';
  } else if (cursorGlow === 'strong') {
    baseSettings.opacity = 0.8;
    baseSettings.size = 300;
    baseSettings.blur = '3xl';
  }
  
  // Adjust based on theme
  if (theme === 'glass') {
    baseSettings.opacity *= 0.7;
  } else if (theme === 'glow') {
    baseSettings.opacity *= 1.3;
    baseSettings.size *= 1.2;
  } else if (theme === 'neumorphicLight') {
    baseSettings.opacity *= 0.5;
  }
  
  return baseSettings;
};

const BackgroundBeams = ({
  children,
  className,
  theme: themeProp,
  size,
  density,
  beamSize,
  cursorGlow,
  colorScheme,
  ...props
}) => {
  // Get the current theme from context
  const { theme: contextTheme } = useSafeTheme();
  
  // Use prop theme or fall back to context
  const activeTheme = themeProp || contextTheme;
  
  // State for mouse position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const [beams, setBeams] = useState([]);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  
  // Generate random beams on component mount
  useEffect(() => {
    if (!containerRef.current) return;
    
    const generateBeams = () => {
      const count = getBeamCount(density);
      const sizeRange = getBeamSizeRange(beamSize);
      const colors = getBeamColors(colorScheme, activeTheme);
      
      const newBeams = Array.from({ length: count }, (_, i) => {
        const width = Math.random() * (sizeRange.max - sizeRange.min) + sizeRange.min;
        const height = Math.random() * (sizeRange.lengthMax - sizeRange.lengthMin) + sizeRange.lengthMin;
        
        return {
          id: i,
          width: `${width}px`,
          height: `${height}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          rotate: `${Math.random() * 360}deg`,
          color: colors[Math.floor(Math.random() * colors.length)],
          duration: Math.random() * 5 + 10,
          delay: Math.random() * 5,
        };
      });
      
      setBeams(newBeams);
    };
    
    // Update container size and regenerate beams on resize
    const updateSize = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      setContainerSize({ width: rect.width, height: rect.height });
      generateBeams();
    };
    
    updateSize();
    
    const resizeObserver = new ResizeObserver(updateSize);
    resizeObserver.observe(containerRef.current);
    
    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, [density, beamSize, colorScheme, activeTheme]);
  
  // Track mouse position
  useEffect(() => {
    const updateMousePosition = (ev) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = ev;
      const { left, top } = containerRef.current.getBoundingClientRect();
      const x = clientX - left;
      const y = clientY - top;
      
      setMousePosition({ x, y });
    };
    
    window.addEventListener("mousemove", updateMousePosition);
    
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  
  // Get container classes
  const containerClasses = backgroundBeamsVariants({
    theme: activeTheme,
    size,
    density,
    beamSize,
    cursorGlow,
    colorScheme,
    className,
  });
  
  // Get cursor glow styles
  const cursorGlowStyles = () => {
    if (cursorGlow === 'none') return { display: 'none' };
    
    const { size, opacity, blur } = getCursorGlowSettings(cursorGlow, activeTheme);
    const colors = getBeamColors(colorScheme, activeTheme);
    
    let gradientColors;
    if (colorScheme === 'multi') {
      gradientColors = `linear-gradient(135deg, ${colors.join(', ')})`;
    } else {
      gradientColors = `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`;
    }
    
    return {
      width: size,
      height: size,
      left: mousePosition.x - size / 2,
      top: mousePosition.y - size / 2,
      opacity: opacity,
      background: gradientColors,
    };
  };
  
  return (
    <div
      ref={containerRef}
      className={cn(containerClasses)}
      {...props}
    >
      {beams.map((beam) => (
        <div
          key={beam.id}
          className="absolute"
          style={{
            width: beam.width,
            height: beam.height,
            left: beam.left,
            top: beam.top,
            transform: `rotate(${beam.rotate})`,
            background: beam.color,
            opacity: 0.2,
            animation: `beam-animation ${beam.duration}s infinite alternate ease-in-out ${beam.delay}s`,
          }}
        />
      ))}
      
      {cursorGlow !== 'none' && (
        <div
          className={`absolute rounded-full blur-${cursorGlow === 'subtle' ? 'xl' : cursorGlow === 'strong' ? '3xl' : '2xl'} transition-opacity duration-300`}
          style={cursorGlowStyles()}
        />
      )}
      
      <div className="relative z-10">{children}</div>
      
      <style jsx global>{`
        @keyframes beam-animation {
          0% {
            opacity: 0.1;
            transform: rotate(${Math.random() * 360}deg) scale(1);
          }
          50% {
            opacity: 0.3;
            transform: rotate(${Math.random() * 360}deg) scale(1.1);
          }
          100% {
            opacity: 0.1;
            transform: rotate(${Math.random() * 360}deg) scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export { BackgroundBeams, backgroundBeamsVariants };