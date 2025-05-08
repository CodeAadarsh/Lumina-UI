import React, { forwardRef, memo, ReactNode, HTMLAttributes, ComponentType } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { useSafeTheme } from '../../hooks/useSafeTheme';
import { cn } from '../../utils/cn';

// Theme type
export type HeroGridTheme = 'enterprise' | 'techDark' | 'glass';

// Layout type
export type HeroGridLayout = 'classic' | 'centered' | 'asymmetric' | 'feature';

// Size type
export type HeroGridSize = 'sm' | 'md' | 'lg' | 'full';

// Spacing type
export type HeroGridSpacing = 'compact' | 'normal' | 'relaxed' | 'spacious';

// Background type
export type HeroGridBackground = 'solid' | 'gradient' | 'image' | 'pattern';

// Alignment type
export type HeroGridAlignment = 'start' | 'center' | 'end';

// Define the variants with class-variance-authority
const heroGridVariants = cva(
  // Base styles for all HeroGrid components
  "relative grid gap-4 w-full mx-auto",
  {
    variants: {
      // Theme variants
      theme: {
        enterprise: "bg-background-primary text-foreground-primary",
        techDark: "bg-background-primary text-foreground-primary",
        glass: "text-foreground-primary backdrop-blur-md",
      },
      // Layout variants
      layout: {
        classic: "grid-cols-1 md:grid-cols-2 items-center",
        centered: "grid-cols-1 text-center items-center justify-items-center",
        asymmetric: "grid-cols-1 md:grid-cols-12 items-center",
        feature: "grid-cols-1 md:grid-cols-3 gap-8",
      },
      // Container size variants
      size: {
        sm: "max-w-4xl",
        md: "max-w-5xl",
        lg: "max-w-6xl",
        full: "max-w-full",
      },
      // Spacing variants
      spacing: {
        compact: "py-8 px-4",
        normal: "py-12 px-6",
        relaxed: "py-16 px-8",
        spacious: "py-24 px-8",
      },
      // Background style variants
      background: {
        solid: "",
        gradient: "",
        image: "bg-no-repeat bg-cover bg-center",
        pattern: "bg-repeat",
      },
      // Content alignment variants
      alignment: {
        start: "text-left justify-items-start",
        center: "text-center justify-items-center",
        end: "text-right justify-items-end",
      },
    },
    // Compound variants for specific combinations
    compoundVariants: [
      // Enterprise theme specifics
      {
        theme: "enterprise",
        background: "gradient",
        className: "bg-gradient-to-r from-primary-light to-primary",
      },
      // Tech Dark theme specifics
      {
        theme: "techDark",
        background: "gradient",
        className: "bg-gradient-to-r from-background-secondary to-background-primary border-b border-border-strong",
      },
      // Glass theme specifics
      {
        theme: "glass",
        background: "gradient",
        className: "bg-gradient-to-r from-background-primary/70 to-background-secondary/70 backdrop-blur-lg",
      },
      // Layout specifics
      {
        layout: "asymmetric",
        className: "[&>*:first-child]:md:col-span-7 [&>*:last-child]:md:col-span-5",
      },
      // Background image + overlay for each theme
      {
        theme: "enterprise",
        background: "image",
        className: "after:absolute after:inset-0 after:bg-primary-darker/30 after:z-0 [&>*]:relative [&>*]:z-10",
      },
      {
        theme: "techDark",
        background: "image",
        className: "after:absolute after:inset-0 after:bg-gradient-to-r after:from-background-primary/90 after:to-background-primary/70 after:z-0 [&>*]:relative [&>*]:z-10",
      },
      {
        theme: "glass",
        background: "image",
        className: "after:absolute after:inset-0 after:backdrop-blur-xl after:bg-background-primary/40 after:z-0 [&>*]:relative [&>*]:z-10",
      },
    ],
    // Default variant values
    defaultVariants: {
      theme: "enterprise",
      layout: "classic",
      size: "lg",
      spacing: "normal",
      background: "solid",
      alignment: "start",
    },
  }
);

// Extract variant props from cva
export type HeroGridVariantProps = VariantProps<typeof heroGridVariants>;

// Props interface for the HeroGrid component
export interface HeroGridProps extends HTMLAttributes<HTMLElement>, HeroGridVariantProps {
  children?: ReactNode;
  theme?: HeroGridTheme;
  backgroundImage?: string;
  backgroundOverlay?: boolean;
  accentColor?: string;
  containerClassName?: string;
}

// HeroGrid Component
const HeroGrid = memo(forwardRef<HTMLElement, HeroGridProps>(({
  children,
  className,
  theme: themeProp,
  layout,
  size,
  spacing,
  background,
  alignment,
  backgroundImage,
  backgroundOverlay = true,
  accentColor,
  containerClassName,
  ...props
}, ref) => {
  // Get the current theme from context (safely)
  const { theme: contextTheme } = useSafeTheme();
  
  // Use prop theme or fall back to context or default
  const activeTheme = themeProp || contextTheme || 'enterprise';
  
  // Generate styles for the component
  const heroClasses = heroGridVariants({
    theme: activeTheme as HeroGridTheme,
    layout,
    size,
    spacing,
    background,
    alignment,
    className,
  });
  
  // Additional styles based on props
  const style: React.CSSProperties = {
    ...(backgroundImage && { backgroundImage: `url(${backgroundImage})` }),
    ...(accentColor && { '--accent-color': accentColor } as React.CSSProperties),
  };

  return (
    <section
      ref={ref}
      className={heroClasses}
      style={style}
      {...props}
    >
      <div className={cn(
        "container mx-auto h-full", 
        containerClassName,
        { "relative z-10": backgroundOverlay && background === "image" }
      )}>
        {children}
      </div>
    </section>
  );
}));

// Display name for debugging
HeroGrid.displayName = 'HeroGrid';

// Props interfaces for subcomponents
interface HeroTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children?: ReactNode;
  as?: keyof JSX.IntrinsicElements | ComponentType<any>;
}

interface HeroSubtitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children?: ReactNode;
  as?: keyof JSX.IntrinsicElements | ComponentType<any>;
}

interface HeroContentProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

interface HeroMediaProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  imageUrl?: string;
  videoUrl?: string;
  alt?: string;
}

interface HeroActionsProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

// Optional content components for the Hero Grid
const HeroTitle: React.FC<HeroTitleProps> = ({ 
  children, 
  className, 
  as: Component = 'h1', 
  ...props 
}) => (
  <Component 
    className={cn("text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4", className)} 
    {...props}
  >
    {children}
  </Component>
);

const HeroSubtitle: React.FC<HeroSubtitleProps> = ({ 
  children, 
  className, 
  as: Component = 'h2', 
  ...props 
}) => (
  <Component 
    className={cn("text-xl md:text-2xl text-foreground-secondary font-medium mb-6", className)} 
    {...props}
  >
    {children}
  </Component>
);

const HeroContent: React.FC<HeroContentProps> = ({ 
  children, 
  className, 
  ...props 
}) => (
  <div 
    className={cn("flex flex-col space-y-4", className)} 
    {...props}
  >
    {children}
  </div>
);

const HeroMedia: React.FC<HeroMediaProps> = ({ 
  children, 
  className, 
  imageUrl, 
  videoUrl, 
  alt = "", 
  ...props 
}) => (
  <div 
    className={cn("relative w-full h-full min-h-[200px]", className)} 
    {...props}
  >
    {imageUrl && !videoUrl && (
      <img 
        src={imageUrl} 
        alt={alt} 
        className="w-full h-auto object-cover rounded-lg shadow-lg"
      />
    )}
    {videoUrl && (
      <video 
        src={videoUrl}
        className="w-full h-auto object-cover rounded-lg shadow-lg"
        controls={false}
        autoPlay
        muted
        loop
        playsInline
      />
    )}
    {!imageUrl && !videoUrl && children}
  </div>
);

const HeroActions: React.FC<HeroActionsProps> = ({ 
  children, 
  className, 
  ...props 
}) => (
  <div 
    className={cn("flex flex-wrap gap-4 mt-8", className)} 
    {...props}
  >
    {children}
  </div>
);

// Type definition for the HeroGrid component with subcomponents
interface HeroGridComponent extends React.ForwardRefExoticComponent<HeroGridProps & React.RefAttributes<HTMLElement>> {
  Title: typeof HeroTitle;
  Subtitle: typeof HeroSubtitle;
  Content: typeof HeroContent;
  Media: typeof HeroMedia;
  Actions: typeof HeroActions;
}

// Assign subcomponents to the HeroGrid
(HeroGrid as HeroGridComponent).Title = HeroTitle;
(HeroGrid as HeroGridComponent).Subtitle = HeroSubtitle;
(HeroGrid as HeroGridComponent).Content = HeroContent;
(HeroGrid as HeroGridComponent).Media = HeroMedia;
(HeroGrid as HeroGridComponent).Actions = HeroActions;

export { HeroGrid, heroGridVariants };