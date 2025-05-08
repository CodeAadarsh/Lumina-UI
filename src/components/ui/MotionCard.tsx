import React, { useState, useRef, useEffect, HTMLAttributes, CSSProperties, ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { useTheme } from '../../providers/ThemeProvider';

// Define types for variant options
export type MotionCardVariant = 
  | 'default'
  | 'elevated'
  | 'glass'
  | 'glass-premium'
  | 'gradient'
  | 'dark'
  | 'neumorphic-light'
  | 'neumorphic-dark';

export type MotionCardIntensity = 'subtle' | 'medium' | 'strong';
export type MotionCardRounded = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
export type MotionCardGlow = 'none' | 'subtle' | 'medium' | 'strong';
export type MotionCardHighlight = 'none' | 'subtle' | 'medium' | 'strong';
export type MotionCardEffect = 'none' | 'float' | 'shimmer' | 'border' | 'multi-border';

// Interface for mouse position
interface Position {
  x: number;
  y: number;
}

// Motion Card variants using cva
const motionCardVariants = cva(
  // Base styles
  'relative transition-transform duration-200 transform-gpu will-change-transform bg-background-secondary overflow-hidden',
  {
    variants: {
      // Card variants
      variant: {
        // Default card
        default: 'border border-border',
        
        // Elevated card with shadow
        elevated: 'border border-border shadow-lg',
        
        // Glass effect card
        glass: 'backdrop-blur-md bg-white/10 border border-white/20',
        
        // Premium glass card
        'glass-premium': 'backdrop-blur-xl bg-white/5 border border-white/10 shadow-lg',
        
        // Gradient card
        gradient: 'bg-gradient-to-br from-primary-light/10 to-accent-purple/10 border border-white/10',
        
        // Dark card
        dark: 'bg-gray-900 border border-gray-800 shadow-xl',
        
        // Neumorphic light
        'neumorphic-light': 'bg-[#e0e5ec] text-gray-700 border-none shadow-[5px_5px_15px_#b8b9be,-5px_-5px_15px_#ffffff]',
        
        // Neumorphic dark
        'neumorphic-dark': 'bg-[#2a2d3e] text-gray-100 border-none shadow-[5px_5px_15px_#1e2030,-5px_-5px_15px_#363b50]',
      },
      
      // Card intensity - controls the strength of 3D effect
      intensity: {
        subtle: 'motion-intensity-subtle', // Custom class for JS manipulation
        medium: 'motion-intensity-medium', // Custom class for JS manipulation
        strong: 'motion-intensity-strong', // Custom class for JS manipulation
      },
      
      // Card roundedness
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        '2xl': 'rounded-2xl',
        '3xl': 'rounded-3xl',
        full: 'rounded-[28px]',
      },
      
      // Card glow effect
      glow: {
        none: '',
        subtle: 'motion-card-glow-subtle', // Custom class for JS manipulation
        medium: 'motion-card-glow-medium', // Custom class for JS manipulation
        strong: 'motion-card-glow-strong', // Custom class for JS manipulation
      },
      
      // Card highlight effect (shine)
      highlight: {
        none: '',
        subtle: 'motion-card-highlight-subtle', // Custom class for JS manipulation
        medium: 'motion-card-highlight-medium', // Custom class for JS manipulation
        strong: 'motion-card-highlight-strong', // Custom class for JS manipulation
      },
      
      // Additional effects
      effect: {
        none: '',
        float: 'animate-float',
        shimmer: 'before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent overflow-hidden',
        border: 'motion-card-border', // Custom class for JS manipulation
        'multi-border': 'motion-card-multi-border', // Custom class for JS manipulation
      },
    },
    defaultVariants: {
      variant: 'default',
      intensity: 'medium',
      rounded: 'lg',
      glow: 'none',
      highlight: 'none',
      effect: 'none',
    },
  }
);

// Extract variant props from cva
export type MotionCardVariantProps = VariantProps<typeof motionCardVariants>;

// Theme defaults object type
interface ThemeDefaults {
  variant: MotionCardVariant;
  intensity: MotionCardIntensity;
  rounded: MotionCardRounded;
  glow: MotionCardGlow;
  highlight: MotionCardHighlight;
  effect: MotionCardEffect;
}

// Helper function to get default card properties based on the theme
const getThemeDefaults = (
  theme: string,
  variant?: MotionCardVariant,
  intensity?: MotionCardIntensity,
  rounded?: MotionCardRounded,
  glow?: MotionCardGlow,
  highlight?: MotionCardHighlight,
  effect?: MotionCardEffect
): ThemeDefaults => {
  let effectiveVariant: MotionCardVariant = variant || 'default';
  let effectiveIntensity: MotionCardIntensity = intensity || 'medium';
  let effectiveRounded: MotionCardRounded = rounded || 'lg';
  let effectiveGlow: MotionCardGlow = glow || 'none';
  let effectiveHighlight: MotionCardHighlight = highlight || 'none';
  let effectiveEffect: MotionCardEffect = effect || 'none';
  
  // Adjust styles based on active theme
  if (theme === 'techDark' && !variant) {
    // Default for tech dark theme
    effectiveVariant = 'dark';
    if (!intensity) effectiveIntensity = 'medium';
    if (!rounded) effectiveRounded = 'xl';
    if (!glow) effectiveGlow = 'medium';
    if (!highlight) effectiveHighlight = 'subtle';
    if (!effect) effectiveEffect = 'none';
  } 
  else if (theme === 'glass' && !variant) {
    // Default for glass theme
    effectiveVariant = 'glass-premium';
    if (!intensity) effectiveIntensity = 'medium';
    if (!rounded) effectiveRounded = 'xl';
    if (!glow) effectiveGlow = 'subtle';
    if (!highlight) effectiveHighlight = 'medium';
    if (!effect) effectiveEffect = 'none';
  }
  
  return {
    variant: effectiveVariant,
    intensity: effectiveIntensity,
    rounded: effectiveRounded,
    glow: effectiveGlow,
    highlight: effectiveHighlight,
    effect: effectiveEffect,
  };
};

// Get intensity factor based on the intensity prop
const getIntensityFactor = (intensity: MotionCardIntensity | undefined): number => {
  switch (intensity) {
    case 'subtle': return 10;
    case 'medium': return 20;
    case 'strong': return 35;
    default: return 20;
  }
};

// Get glow intensity based on the glow prop
const getGlowIntensity = (glow: MotionCardGlow | undefined): number => {
  switch (glow) {
    case 'subtle': return 0.5;
    case 'medium': return 1;
    case 'strong': return 1.5;
    default: return 0;
  }
};

// Get highlight intensity based on the highlight prop
const getHighlightIntensity = (highlight: MotionCardHighlight | undefined): number => {
  switch (highlight) {
    case 'subtle': return 0.1;
    case 'medium': return 0.2;
    case 'strong': return 0.3;
    default: return 0;
  }
};

// Props interface for the MotionCard component
export interface MotionCardProps extends HTMLAttributes<HTMLDivElement>, MotionCardVariantProps {
  // Card appearance props
  variant?: MotionCardVariant;
  intensity?: MotionCardIntensity;
  rounded?: MotionCardRounded;
  glow?: MotionCardGlow;
  highlight?: MotionCardHighlight;
  effect?: MotionCardEffect;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  
  // Card behavior props
  resetOnLeave?: boolean;
  disableRotation?: boolean;
  disableScale?: boolean;
  disableGlow?: boolean;
  disableHighlight?: boolean;
  glowColor?: string;
}

/**
 * 3D Motion Card Component
 * A card component that responds to mouse movement with 3D rotation effects
 */
export const MotionCard: React.FC<MotionCardProps> = ({
  // Card appearance props
  variant,
  intensity,
  rounded,
  glow,
  highlight,
  effect,
  className = '',
  style = {},
  children,
  
  // Card behavior props
  resetOnLeave = true,
  disableRotation = false,
  disableScale = false,
  disableGlow = false,
  disableHighlight = false,
  glowColor = 'rgba(100, 130, 255, 0.4)',
  
  // Other props
  ...props
}) => {
  // Get theme context
  interface ThemeContext {
    theme: string;
    [key: string]: any;
  }
  
  const { theme } = useTheme() as ThemeContext;
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState<boolean>(false);
  
  // Get theme-specific defaults
  const {
    variant: effectiveVariant,
    intensity: effectiveIntensity,
    rounded: effectiveRounded,
    glow: effectiveGlow,
    highlight: effectiveHighlight,
    effect: effectiveEffect,
  } = getThemeDefaults(theme, variant, intensity, rounded, glow, highlight, effect);
  
  // Get intensity factors
  const intensityFactor = getIntensityFactor(effectiveIntensity);
  const glowIntensity = getGlowIntensity(effectiveGlow);
  const highlightIntensity = getHighlightIntensity(effectiveHighlight);
  
  // Card classes
  const cardClasses = motionCardVariants({
    variant: effectiveVariant,
    intensity: effectiveIntensity,
    rounded: effectiveRounded,
    glow: disableGlow ? 'none' : effectiveGlow,
    highlight: disableHighlight ? 'none' : effectiveHighlight,
    effect: effectiveEffect,
    className,
  });
  
  // Update card transform based on mouse position
  const updateCardTransform = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (!cardRef.current || disableRotation) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Calculate cursor position within the card (from -0.5 to 0.5)
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    // Set the position for rendering
    setPosition({ x, y });
  };
  
  // Reset card transform when mouse leaves
  const resetCardTransform = (): void => {
    if (resetOnLeave) {
      setPosition({ x: 0, y: 0 });
    }
    setIsHovered(false);
  };
  
  // Handle mouse enter
  const handleMouseEnter = (): void => {
    setIsHovered(true);
  };
  
  // Update card transform on mouse move or position change
  useEffect(() => {
    if (!cardRef.current) return;
    
    const { x, y } = position;
    const card = cardRef.current;
    
    // Calculate rotation based on intensity
    const rotateY = disableRotation ? 0 : x * intensityFactor;
    const rotateX = disableRotation ? 0 : -y * intensityFactor;
    
    // Calculate scale based on hover state
    const scale = isHovered && !disableScale ? 1.02 : 1;
    
    // Apply transformations
    card.style.transform = `
      perspective(1000px) 
      rotateX(${rotateX}deg) 
      rotateY(${rotateY}deg)
      scale(${scale})
    `;
    
    // Update glow effect
    if (glowRef.current && !disableGlow && glowIntensity > 0) {
      const glow = glowRef.current;
      const glowX = 50 + x * 50; // 0-100%
      const glowY = 50 + y * 50; // 0-100%
      
      glow.style.background = `radial-gradient(
        circle at ${glowX}% ${glowY}%, 
        ${glowColor}, 
        transparent ${60 / glowIntensity}%
      )`;
      
      glow.style.opacity = isHovered ? glowIntensity.toString() : '0';
    }
    
    // Update highlight effect
    if (highlightRef.current && !disableHighlight && highlightIntensity > 0) {
      const highlight = highlightRef.current;
      const highlightX = 50 + x * 100; // -50% to 150%
      const highlightY = 50 + y * 100; // -50% to 150%
      
      highlight.style.background = `radial-gradient(
        circle at ${highlightX}% ${highlightY}%, 
        rgba(255, 255, 255, ${highlightIntensity}), 
        transparent 25%
      )`;
      
      highlight.style.opacity = isHovered ? '1' : '0';
    }
  }, [position, isHovered, intensityFactor, glowIntensity, highlightIntensity, disableRotation, disableScale, disableGlow, disableHighlight, glowColor]);
  
  return (
    <div
      ref={cardRef}
      className={`${cardClasses} transform-gpu`}
      onMouseMove={updateCardTransform}
      onMouseLeave={resetCardTransform}
      onMouseEnter={handleMouseEnter}
      style={{
        transformStyle: 'preserve-3d',
        ...style
      }}
      {...props}
    >
      {/* Glow effect overlay */}
      {!disableGlow && glowIntensity > 0 && (
        <div 
          ref={glowRef}
          className="absolute inset-0 opacity-0 transition-opacity duration-300 rounded-inherit z-[-1]"
          style={{ borderRadius: 'inherit' }}
        />
      )}
      
      {/* Highlight effect overlay */}
      {!disableHighlight && highlightIntensity > 0 && (
        <div 
          ref={highlightRef}
          className="absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none mix-blend-overlay"
          style={{ borderRadius: 'inherit' }}
        />
      )}
      
      {/* Content - giving it a subtle transform to enhance 3D effect */}
      <div 
        className="relative z-10 motion-card-content"
        style={{ 
          transform: disableRotation ? 'none' : 'translateZ(20px)',
          transformStyle: 'preserve-3d'
        }}
      >
        {children}
      </div>
    </div>
  );
};

// Props interface for the MotionCardContent component
export interface MotionCardContentProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
}

// Content area for the motion card
export const MotionCardContent: React.FC<MotionCardContentProps> = ({ 
  className = '', 
  children, 
  ...props 
}) => {
  const contentClasses = `p-5 ${className}`;
  
  return (
    <div className={contentClasses} {...props}>
      {children}
    </div>
  );
};

// Props interface for the MotionCardLayer component
export interface MotionCardLayerProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
  depth?: number;
  disableDepth?: boolean;
}

// For creating layered 3D content inside the card
export const MotionCardLayer: React.FC<MotionCardLayerProps> = ({ 
  className = '', 
  children, 
  depth = 20, 
  disableDepth = false,
  ...props 
}) => {
  return (
    <div 
      className={`relative ${className}`}
      style={{ 
        transform: disableDepth ? 'none' : `translateZ(${depth}px)`,
        transformStyle: 'preserve-3d'
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export { motionCardVariants };