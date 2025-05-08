import React, { useRef, useState, useCallback, memo, ReactNode, CSSProperties } from 'react';
import { useTheme } from '../../providers/ThemeProvider';
import { cn } from "@/lib/utils";

/**
 * Grid column configurations
 */
export type BentoGridCols = 1 | 2 | 3 | 4;

/**
 * Grid gap size options
 */
export type BentoGridGap = 2 | 4 | 6 | 8 | 12 | 16;

/**
 * Available hover effects for BentoGridItems
 */
export type BentoGridHoverEffect = 'none' | 'tilt' | 'float' | 'magnet' | 'glow';

/**
 * Intensity level for hover effects
 */
export type HoverEffectIntensity = 0.5 | 1 | 1.5 | 2;

/**
 * BentoGrid component props
 */
export interface BentoGridProps {
  /** Additional CSS classes to apply */
  className?: string;
  /** Grid child components */
  children: ReactNode;
  /** Number of columns in the grid */
  cols?: BentoGridCols;
  /** Gap between grid items */
  gap?: BentoGridGap;
  /** Maximum width of the grid container */
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '7xl' | 'none';
  /** Vertical rhythm for grid rows */
  rowHeight?: 'auto' | 'uniform';
}

/**
 * A responsive grid layout inspired by Bento box designs
 */
export const BentoGrid = memo<BentoGridProps>(({
  className,
  children,
  cols = 3,
  gap = 4,
  maxWidth = '7xl',
  rowHeight = 'uniform',
}) => {
  const { themeObject } = useTheme();
  
  // Get grid template columns based on cols
  const getGridCols = (): string => {
    const colsMap: Record<BentoGridCols, string> = {
      1: 'md:grid-cols-1',
      2: 'md:grid-cols-2',
      3: 'md:grid-cols-3',
      4: 'md:grid-cols-4'
    };
    
    return colsMap[cols] || 'md:grid-cols-3';
  };

  // Get max width class based on maxWidth prop
  const getMaxWidthClass = (): string => {
    const maxWidthMap: Record<NonNullable<BentoGridProps['maxWidth']>, string> = {
      'sm': 'max-w-sm',
      'md': 'max-w-md',
      'lg': 'max-w-lg',
      'xl': 'max-w-xl',
      '2xl': 'max-w-2xl',
      '7xl': 'max-w-7xl',
      'none': 'max-w-none'
    };
    
    return maxWidthMap[maxWidth] || 'max-w-7xl';
  };
  
  return (
    <div
      className={cn(
        "mx-auto grid grid-cols-1",
        rowHeight === 'uniform' ? "md:auto-rows-[18rem]" : "",
        `gap-${gap}`,
        getGridCols(),
        getMaxWidthClass(),
        className
      )}
    >
      {children}
    </div>
  );
});

BentoGrid.displayName = 'BentoGrid';

/**
 * BentoGridItem component props
 */
export interface BentoGridItemProps {
  /** Additional CSS classes to apply */
  className?: string;
  /** Title displayed in the item */
  title?: ReactNode;
  /** Description text displayed in the item */
  description?: ReactNode;
  /** Component for the header section (usually an image) */
  header?: ReactNode;
  /** Icon component or content for the top section */
  icon?: ReactNode;
  /** Hover effect type */
  hoverEffect?: BentoGridHoverEffect;
  /** Intensity of the hover effect */
  intensity?: HoverEffectIntensity;
  /** Optional click handler */
  onClick?: () => void;
  /** Controls if the item spans multiple columns */
  colSpan?: 1 | 2;
  /** Controls if the item spans multiple rows */
  rowSpan?: 1 | 2;
  /** Additional style object to apply */
  style?: CSSProperties;
  /** Custom background content (for gradients, etc.) */
  backgroundContent?: ReactNode;
  /** Footer content */
  footer?: ReactNode;
}

/**
 * Individual item component for the BentoGrid
 */
export const BentoGridItem = memo<BentoGridItemProps>(({
  className,
  title,
  description,
  header,
  icon,
  hoverEffect = "magnet",
  intensity = 1,
  onClick,
  colSpan = 1,
  rowSpan = 1,
  style,
  backgroundContent,
  footer,
}) => {
  const { themeObject, theme: themeName } = useTheme();
  const itemRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState<string>("");
  const [isHovered, setIsHovered] = useState<boolean>(false);
  
  // Memorize handlers to prevent unnecessary re-renders
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
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
  const getThemeClasses = (): string => {
    type ThemeClassMap = Record<string, string>;
    
    const themeClasses: ThemeClassMap = {
      "enterprise": "bg-white border border-gray-200 shadow-lg",
      "techDark": "bg-gray-900 border border-gray-800 shadow-xl gradient-border-1",
      "glass": "glass-effect border border-white/30 backdrop-blur-lg",
      "neumorphicLight": "bg-[#e0e5ec] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] border-none",
      "glow": "bg-gray-900/90 border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.5),0_0_30px_rgba(59,130,246,0.3)]",
      "3d": "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transform-gpu shadow-xl",
    };
    
    return themeClasses[themeName as string] || "bg-white border border-gray-200 shadow-lg";
  };
  
  // Get text color based on theme
  const getTextClasses = (): string => {
    const lightThemes = ["enterprise", "neumorphicLight", "3d"];
    return lightThemes.includes(themeName as string) 
      ? "text-gray-900 dark:text-white" 
      : "text-white";
  };
  
  // Get glow effect classes
  const getGlowClasses = (): string => {
    if (hoverEffect !== "glow") return "";
    
    type GlowClassMap = Record<string, string>;
    
    const glowClasses: GlowClassMap = {
      "enterprise": "hover:shadow-blue-glow",
      "techDark": "hover:shadow-purple-glow",
      "glass": "hover:shadow-white-glow",
      "neumorphicLight": "hover:shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff]",
      "glow": "hover:shadow-multi-glow",
      "3d": "hover:shadow-blue-glow dark:hover:shadow-blue-glow",
    };
    
    return glowClasses[themeName as string] || "hover:shadow-lg";
  };
  
  // Get grid span classes
  const getSpanClasses = (): string => {
    const colSpanClasses: Record<NonNullable<BentoGridItemProps['colSpan']>, string> = {
      1: '',
      2: 'md:col-span-2'
    };
    
    const rowSpanClasses: Record<NonNullable<BentoGridItemProps['rowSpan']>, string> = {
      1: '',
      2: 'md:row-span-2'
    };
    
    return cn(colSpanClasses[colSpan], rowSpanClasses[rowSpan]);
  };
  
  return (
    <div
      ref={itemRef}
      className={cn(
        "group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl p-4 transition-all duration-300 will-change-transform",
        getThemeClasses(),
        getTextClasses(),
        getGlowClasses(),
        getSpanClasses(),
        onClick && "cursor-pointer",
        className
      )}
      style={{
        transform,
        transition: isHovered ? "transform 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67)" : "transform 0.5s ease-out",
        ...style,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onClick={onClick}
    >
      {backgroundContent && (
        <div className="absolute inset-0 overflow-hidden rounded-xl">
          {backgroundContent}
        </div>
      )}
      
      {header && (
        <div className="relative overflow-hidden rounded-lg bg-gray-900 dark:bg-black aspect-[2/1]">
          {header}
        </div>
      )}
      
      <div className="transition duration-200 group-hover/bento:translate-x-2 z-10">
        {icon && (
          <div className="mb-2 text-xs font-medium text-blue-500 dark:text-blue-400">
            {icon}
          </div>
        )}
        
        {title && (
          <div className="mb-2 font-sans text-lg font-bold text-neutral-600 dark:text-neutral-200">
            {title}
          </div>
        )}
        
        {description && (
          <div className="font-sans text-sm font-normal text-neutral-600 dark:text-neutral-300">
            {description}
          </div>
        )}
      </div>
      
      {footer && (
        <div className="mt-auto pt-2">
          {footer}
        </div>
      )}
    </div>
  );
});

BentoGridItem.displayName = 'BentoGridItem';