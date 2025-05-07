import React, { useRef, useState, useCallback, memo } from 'react';
import { useTheme } from '../../providers/ThemeProvider';
import { cn } from "@/lib/utils";

export const BentoGrid = memo(({
  className,
  children,
  cols = 3,
  gap = 4,
}) => {
  const { themeObject } = useTheme();
  
  // Get grid template columns based on cols
  const getGridCols = () => {
    return {
      'md:grid-cols-1': cols === 1,
      'md:grid-cols-2': cols === 2,
      'md:grid-cols-3': cols === 3,
      'md:grid-cols-4': cols === 4,
    };
  };
  
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 md:auto-rows-[18rem]",
        `gap-${gap}`,
        getGridCols(),
        className
      )}
    >
      {children}
    </div>
  );
});

BentoGrid.displayName = 'BentoGrid';

export const BentoGridItem = memo(({
  className,
  title,
  description,
  header,
  icon,
  hoverEffect = "magnet",
  intensity = 1,
}) => {
  const { themeObject, theme: themeName } = useTheme();
  const itemRef = useRef(null);
  const [transform, setTransform] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  
  // Memorize handlers to prevent unnecessary re-renders
  const handleMouseMove = useCallback((e) => {
    if (!itemRef.current || hoverEffect === "none") return;
    
    const rect = itemRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const moveX = (x - centerX) / centerX; // -1 to 1
    const moveY = (y - centerY) / centerY; // -1 to 1
    
    // Apply different effects based on the specified hover effect
    if (hoverEffect === "tilt") {
      // Tilt the card based on mouse position
      const tiltAmount = 10 * intensity;
      setTransform(`perspective(1000px) rotateX(${moveY * -tiltAmount}deg) rotateY(${moveX * tiltAmount}deg)`);
    } else if (hoverEffect === "float") {
      // Simple float effect on hover
      setTransform("translateY(-10px)");
    } else if (hoverEffect === "magnet") {
      // Magnetic effect that follows the cursor
      const magnetStrength = 12 * intensity;
      setTransform(`translate(${moveX * magnetStrength}px, ${moveY * magnetStrength}px)`);
    } else if (hoverEffect === "glow") {
      // Glow effect without moving the card
      setTransform("scale(1.02)");
    }
  }, [hoverEffect, intensity]);
  
  const handleMouseLeave = useCallback(() => {
    setTransform("");
    setIsHovered(false);
  }, []);
  
  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);
  
  // Get theme-based classes
  const getThemeClasses = () => {
    switch (themeName) {
      case "enterprise":
        return "bg-white border border-gray-200 shadow-lg";
      case "techDark":
        return "bg-gray-900 border border-gray-800 shadow-xl gradient-border-1";
      case "glass":
        return "glass-effect border border-white/30 backdrop-blur-lg";
      case "neumorphicLight":
        return "bg-[#e0e5ec] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] border-none";
      case "glow":
        return "bg-gray-900/90 border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.5),0_0_30px_rgba(59,130,246,0.3)]";
      case "3d":
        return "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transform-gpu shadow-xl";
      default:
        return "bg-white border border-gray-200 shadow-lg";
    }
  };
  
  // Get text color based on theme
  const getTextClasses = () => {
    switch (themeName) {
      case "enterprise":
      case "neumorphicLight":
      case "3d":
        return "text-gray-900 dark:text-white";
      default:
        return "text-white";
    }
  };
  
  // Get glow effect classes
  const getGlowClasses = () => {
    if (hoverEffect !== "glow") return "";
    
    switch (themeName) {
      case "enterprise":
        return "hover:shadow-blue-glow";
      case "techDark":
        return "hover:shadow-purple-glow";
      case "glass":
        return "hover:shadow-white-glow";
      case "neumorphicLight":
        return "hover:shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff]";
      case "glow":
        return "hover:shadow-multi-glow";
      case "3d":
        return "hover:shadow-blue-glow dark:hover:shadow-blue-glow";
      default:
        return "hover:shadow-lg";
    }
  };
  
  return (
    <div
      ref={itemRef}
      className={cn(
        "group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl p-4 transition-all duration-300 will-change-transform",
        getThemeClasses(),
        getTextClasses(),
        getGlowClasses(),
        className
      )}
      style={{
        transform,
        transition: isHovered ? "transform 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67)" : "transform 0.5s ease-out",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <div className="relative overflow-hidden rounded-lg bg-gray-900 dark:bg-black aspect-[2/1]">
        {header}
      </div>
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        <div className="mb-2 text-xs font-medium text-blue-500 dark:text-blue-400">
          {icon}
        </div>
        <div className="mb-2 font-sans text-lg font-bold text-neutral-600 dark:text-neutral-200">
          {title}
        </div>
        <div className="font-sans text-sm font-normal text-neutral-600 dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
});

BentoGridItem.displayName = 'BentoGridItem';