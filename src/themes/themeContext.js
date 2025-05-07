// src/components/Card/Card.jsx
import React, { useMemo } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import { useTheme } from '../../theme/themeContext';

// Card variants using class-variance-authority
const cardVariants = cva(
  // Base styles
  'rounded transition-all duration-200',
  {
    variants: {
      // Card variants
      variant: {
        // Default card
        default: 'bg-background-secondary border border-border',
        
        // Elevated card with shadow
        elevated: 'bg-background-secondary border border-border shadow-md',
        
        // Glass effect card
        glass: 'backdrop-blur-md bg-white/10 border border-white/20',
        
        // Outline card (border only)
        outline: 'border border-border bg-transparent',
        
        // Solid card with stronger background
        solid: 'bg-background-tertiary border border-border',
        
        // Gradient card
        gradient: 'bg-gradient-to-br from-primary-light/20 to-accent-purple/20 border border-border',
        
        // AI-themed card
        ai: 'bg-background-secondary border border-primary-base/40 shadow-blue-glow',
      },
      
      // Card padding
      padding: {
        none: '',
        xs: 'p-2',
        sm: 'p-3',
        md: 'p-5',
        lg: 'p-7',
        xl: 'p-9',
      },
      
      // Card roundedness
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        '2xl': 'rounded-2xl',
        full: 'rounded-3xl',
      },
      
      // Special effects
      effect: {
        none: '',
        hover: 'hover:shadow-lg hover:-translate-y-1',
        glow: 'shadow-blue-glow',
        'purple-glow': 'shadow-purple-glow',
        'multi-glow': 'shadow-multi-glow',
        gradientBorder: 'gradient-border-1',
        rainbowBorder: 'rainbow-border-1',
        float: 'animate-float',
        shimmer: 'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent',
      },
      
      // Border styles
      border: {
        none: 'border-0',
        thin: 'border border-border/50',
        default: 'border border-border',
        strong: 'border-2 border-border-strong',
        focus: 'border border-border-focus',
      },
    },
    compoundVariants: [
      // Glass variant-specific styles for different themes
      {
        variant: 'glass',
        effect: 'glow',
        className: 'shadow-blue-glow'
      },
      {
        variant: 'elevated',
        effect: 'hover',
        className: 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1'
      },
      {
        variant: 'ai',
        effect: 'shimmer',
        className: 'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:via-primary-light/10 before:to-transparent'
      },
    ],
    defaultVariants: {
      variant: 'default',
      padding: 'md',
      rounded: 'lg',
      effect: 'none',
      border: 'default',
    },
  }
);

// Main Card Component
const Card = React.forwardRef(({
  variant,
  padding,
  rounded,
  effect,
  border,
  className = '',
  children,
  ...props
}, ref) => {
  const { themeValues, currentTheme, isDarkMode } = useTheme();
  
  // Use theme-aware defaults via memoization for better performance
  const themeAwareProps = useMemo(() => {
    let effectiveVariant = variant;
    let effectiveRounded = rounded;
    let effectiveEffect = effect;
    let effectiveBorder = border;
    
    // Apply theme-specific defaults if props not explicitly provided
    if (currentTheme === 'techDark') {
      if (!variant) effectiveVariant = 'solid';
      if (!rounded) effectiveRounded = 'lg';
      if (!effect && variant === 'elevated') effectiveEffect = 'glow';
      if (!border) effectiveBorder = 'default';
    } 
    else if (currentTheme === 'glass') {
      if (!variant) effectiveVariant = 'glass';
      if (!rounded) effectiveRounded = 'xl';
      if (!effect) effectiveEffect = isDarkMode ? 'glow' : 'hover';
      if (!border) effectiveBorder = 'thin';
    }
    else if (currentTheme === 'enterprise') {
      if (!variant) effectiveVariant = 'default';
      if (!rounded) effectiveRounded = 'md';
      if (!effect && variant === 'elevated') effectiveEffect = 'hover';
      if (!border) effectiveBorder = 'default';
    }

    return {
      variant: effectiveVariant,
      rounded: effectiveRounded,
      effect: effectiveEffect,
      border: effectiveBorder,
      padding
    };
  }, [variant, padding, rounded, effect, border, currentTheme, isDarkMode]);
  
  // Compute classes
  const cardClasses = cn(
    cardVariants({
      variant: themeAwareProps.variant,
      padding: themeAwareProps.padding,
      rounded: themeAwareProps.rounded,
      effect: themeAwareProps.effect,
      border: themeAwareProps.border,
    }),
    className
  );
  
  return (
    <div
      ref={ref}
      className={cardClasses}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';

// Card Header Component
const CardHeader = React.forwardRef(({
  className = '',
  children,
  ...props
}, ref) => {
  const { currentTheme } = useTheme();
  
  // Theme-aware border styles
  const borderStyle = useMemo(() => {
    if (currentTheme === 'glass') return 'border-b border-white/10';
    return 'border-b border-border';
  }, [currentTheme]);

  return (
    <div
      ref={ref}
      className={cn('px-5 py-4', borderStyle, className)}
      {...props}
    >
      {children}
    </div>
  );
});

CardHeader.displayName = 'CardHeader';

// Card Title Component
const CardTitle = React.forwardRef(({
  className = '',
  children,
  ...props
}, ref) => {
  return (
    <h3
      ref={ref}
      className={cn('text-xl font-semibold text-foreground-primary', className)}
      {...props}
    >
      {children}
    </h3>
  );
});

CardTitle.displayName = 'CardTitle';

// Card Description Component
const CardDescription = React.forwardRef(({
  className = '',
  children,
  ...props
}, ref) => {
  return (
    <p
      ref={ref}
      className={cn('mt-1 text-sm text-foreground-tertiary', className)}
      {...props}
    >
      {children}
    </p>
  );
});

CardDescription.displayName = 'CardDescription';

// Card Content Component
const CardContent = React.forwardRef(({
  className = '',
  children,
  ...props
}, ref) => {
  // If no padding class is explicitly provided in className, use default padding
  const hasPaddingClass = /p[xytlrb]?-\d+/.test(className);
  const defaultPadding = hasPaddingClass ? '' : 'p-5';
  
  return (
    <div
      ref={ref}
      className={cn(defaultPadding, className)}
      {...props}
    >
      {children}
    </div>
  );
});

CardContent.displayName = 'CardContent';

// Card Footer Component
const CardFooter = React.forwardRef(({
  className = '',
  children,
  ...props
}, ref) => {
  const { currentTheme } = useTheme();
  
  // Theme-aware border styles
  const borderStyle = useMemo(() => {
    if (currentTheme === 'glass') return 'border-t border-white/10';
    return 'border-t border-border';
  }, [currentTheme]);

  return (
    <div
      ref={ref}
      className={cn('px-5 py-4', borderStyle, className)}
      {...props}
    >
      {children}
    </div>
  );
});

CardFooter.displayName = 'CardFooter';

// Create a utility function for className merging if not already present
// utils/cn.js
// import { clsx } from 'clsx';
// import { twMerge } from 'tailwind-merge';
// export function cn(...inputs) {
//   return twMerge(clsx(inputs));
// }

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };