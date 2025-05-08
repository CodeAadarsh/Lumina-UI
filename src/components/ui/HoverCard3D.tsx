import React, { forwardRef, useState, useRef, useEffect, memo, CSSProperties, MouseEvent } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { ThemeProvider, useTheme } from '../../providers/ThemeProvider';
import { cn } from '../../utils/cn';
import { ThemeName } from '../../providers/ThemeProvider';

// Theme types
export type HoverCardTheme = 'enterprise' | 'techDark' | 'glass';
export type HoverCardSize = 'sm' | 'md' | 'lg';
export type HoverCardIntensity = 'subtle' | 'medium' | 'strong';
export type HoverCardEffect = 'glow' | 'shimmer' | 'lift' | 'none';

// Define the variants with class-variance-authority
const hoverCard3DVariants = cva(
  // Base styles for all HoverCard3D components
  "relative overflow-hidden transition-all duration-300 perspective-1000 transform-gpu",
  {
    variants: {
      // Theme variants
      theme: {
        enterprise: "bg-background-primary border border-border shadow-md rounded-lg",
        techDark: "bg-background-primary border border-transparent gradient-border-1 shadow-lg rounded-xl",
        glass: "glass-effect border border-border backdrop-blur-md rounded-xl",
      } as const,
      // Size variants
      size: {
        sm: "p-4 max-w-sm",
        md: "p-6 max-w-md",
        lg: "p-8 max-w-lg",
      } as const,
      // Intensity of the 3D effect
      intensity: {
        subtle: "", // CSS variables will control the intensity
        medium: "",
        strong: "",
      } as const,
      // Additional hover effects
      hoverEffect: {
        glow: "",
        shimmer: "overflow-hidden",
        lift: "",
        none: "",
      } as const,
    },
    // Compound variants for specific combinations
    compoundVariants: [
      // Enterprise theme specifics
      {
        theme: "enterprise",
        hoverEffect: "glow",
        className: "hover:shadow-lg transition-shadow",
      },
      // Tech Dark theme specifics
      {
        theme: "techDark",
        hoverEffect: "glow",
        className: "hover:shadow-blue-glow transition-all",
      },
      {
        theme: "techDark",
        hoverEffect: "shimmer",
        className: "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-100%] hover:before:animate-shimmer",
      },
      // Glass theme specifics
      {
        theme: "glass",
        hoverEffect: "glow",
        className: "hover:shadow-white-glow transition-all border-opacity-30",
      },
    ],
    // Default variant values
    defaultVariants: {
      theme: "enterprise",
      size: "md",
      intensity: "medium",
      hoverEffect: "none",
    },
  }
);

// Extract variant props type from hoverCard3DVariants
export type HoverCard3DVariantProps = VariantProps<typeof hoverCard3DVariants>;

// Interface for safety theme hook result
interface SafeThemeResult {
  theme: ThemeName;
  [key: string]: any;
}

// Safe version of useTheme that provides a default if not in context
const useSafeTheme = (): SafeThemeResult => {
  try {
    // Try to use the theme context
    return useTheme();
  } catch (error) {
    // If context is not available, return a default theme object
    console.warn('ThemeProvider not found, using default theme');
    return { theme: 'enterprise' };
  }
};

// Type definitions for intensity values
interface IntensityValues {
  maxRotation: number;
  perspective: number;
}

// Interface for glare styling
interface GlareStyle extends CSSProperties {
  position: 'absolute';
  top: 0;
  left: 0;
  width: '100%';
  height: '100%';
  pointerEvents: 'none';
  background: string;
  transform: string;
  opacity: number;
  transition: string;
}

// HoverCard3D Props interface
export interface HoverCard3DProps extends React.HTMLAttributes<HTMLDivElement>, 
  Omit<HoverCard3DVariantProps, 'theme'> {
  /** Theme to use for the card */
  theme?: HoverCardTheme;
  /** Size variant of the card */
  size?: HoverCardSize;
  /** Intensity of the 3D effect */
  intensity?: HoverCardIntensity;
  /** Additional hover effect for the card */
  hoverEffect?: HoverCardEffect;
  /** Whether to enable the glare effect */
  glareEnabled?: boolean;
  /** Whether to reverse the rotation direction */
  rotateReverse?: boolean;
  /** Opacity of the glare effect (0-1) */
  glareOpacity?: number;
  /** Color of the glare (RGB format) */
  glareColor?: string;
  /** Maximum rotation in degrees */
  maxRotation?: number;
  /** Perspective value in pixels */
  perspective?: number;
  /** React children */
  children: React.ReactNode;
  /** Additional class names */
  className?: string;
}

// HoverCard3D Component with React.memo for optimization
const HoverCard3D = memo(forwardRef<HTMLDivElement, HoverCard3DProps>(({
  children,
  className,
  theme: themeProp,
  size,
  intensity,
  hoverEffect,
  glareEnabled = true,
  rotateReverse = false,
  glareOpacity = 0.1,
  glareColor = "255, 255, 255",
  maxRotation = 20, // Maximum rotation in degrees
  perspective = 1000, // Perspective value
  ...props
}, ref) => {
  // Get the current theme from context (safely)
  const { theme: contextTheme } = useSafeTheme();
  
  // Use prop theme or fall back to context or default
  const activeTheme = (themeProp || contextTheme || 'enterprise') as HoverCardTheme;
  
  // State for tracking mouse position
  const [rotateX, setRotateX] = useState<number>(0);
  const [rotateY, setRotateY] = useState<number>(0);
  const [posX, setPosX] = useState<number>(50);
  const [posY, setPosY] = useState<number>(50);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  
  // References
  const cardRef = useRef<HTMLDivElement | null>(null);
  const glareRef = useRef<HTMLDivElement | null>(null);
  
  // Set intensity values based on the intensity prop
  const getIntensityValues = (): IntensityValues => {
    switch (intensity) {
      case 'subtle':
        return { maxRotation: maxRotation * 0.5, perspective: perspective * 1.2 };
      case 'medium':
        return { maxRotation, perspective };
      case 'strong':
        return { maxRotation: maxRotation * 1.5, perspective: perspective * 0.8 };
      default:
        return { maxRotation, perspective };
    }
  };
  
  const { maxRotation: actualMaxRotation, perspective: actualPerspective } = getIntensityValues();
  
  // Handle mouse movement over the card
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>): void => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate normalized position (-1 to 1)
    const normalizedX = (e.clientX - centerX) / (rect.width / 2);
    const normalizedY = (e.clientY - centerY) / (rect.height / 2);
    
    // Apply rotation (optionally reversed)
    const directionMod = rotateReverse ? -1 : 1;
    const rotX = normalizedY * actualMaxRotation * directionMod;
    const rotY = normalizedX * -actualMaxRotation * directionMod;
    
    // Update state for rotation
    setRotateX(rotX);
    setRotateY(rotY);
    
    // Update glare position if enabled
    if (glareEnabled && glareRef.current) {
      const glareX = (normalizedX + 1) * 50; // Convert to percentage (0-100)
      const glareY = (normalizedY + 1) * 50;
      setPosX(glareX);
      setPosY(glareY);
    }
  };
  
  // Handle mouse enter/leave
  const handleMouseEnter = (): void => setIsHovering(true);
  const handleMouseLeave = (): void => {
    setIsHovering(false);
    setRotateX(0);
    setRotateY(0);
  };
  
  // Generate styles for the card and glare
  const cardStyle: CSSProperties = {
    transform: isHovering ? `perspective(${actualPerspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)` : '',
    transition: isHovering ? 'transform 0.1s ease' : 'transform 0.5s ease-out',
  };
  
  const glareStyle: GlareStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    background: `radial-gradient(circle at ${posX}% ${posY}%, rgba(${glareColor}, ${glareOpacity}), transparent)`,
    transform: `translateZ(1px)`,
    opacity: isHovering ? 1 : 0,
    transition: 'opacity 0.5s ease-out',
  };
  
  // Get appropriate theme-based classes
  const classes = hoverCard3DVariants({
    theme: activeTheme,
    size,
    intensity,
    hoverEffect,
    className,
  });
  
  return (
    <div
      ref={(node) => {
        // Handle both the forwarded ref and the internal ref
        if (ref) {
          if (typeof ref === 'function') ref(node);
          else if (ref.current !== undefined) ref.current = node;
        }
        cardRef.current = node;
      }}
      className={cn(classes)}
      style={cardStyle}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
      {glareEnabled && <div ref={glareRef} style={glareStyle} />}
    </div>
  );
}));

// Display name for debugging
HoverCard3D.displayName = 'HoverCard3D';

// Interface for the themed version
export interface HoverCard3DWithThemeProps extends HoverCard3DProps {
  theme?: HoverCardTheme;
}

// Wrapped component with ThemeProvider for standalone usage
const HoverCard3DWithTheme = memo(forwardRef<HTMLDivElement, HoverCard3DWithThemeProps>(({
  theme = 'enterprise',
  children,
  ...props
}, ref) => {
  // Check if we're already within a ThemeProvider
  let isInsideThemeProvider = false;
  try {
    useTheme();
    isInsideThemeProvider = true;
  } catch (error) {
    isInsideThemeProvider = false;
  }

  // If already in a ThemeProvider, just render the component
  if (isInsideThemeProvider) {
    return <HoverCard3D ref={ref} theme={theme} {...props}>{children}</HoverCard3D>;
  }

  // Otherwise, wrap it in a ThemeProvider
  return (
    <ThemeProvider theme={theme}>
      <HoverCard3D ref={ref} theme={theme} {...props}>{children}</HoverCard3D>
    </ThemeProvider>
  );
}));

HoverCard3DWithTheme.displayName = 'HoverCard3DWithTheme';

export { HoverCard3D, HoverCard3DWithTheme, hoverCard3DVariants };