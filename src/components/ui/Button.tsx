import React, { useRef, useState, useEffect, memo, ButtonHTMLAttributes, ReactNode } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { useTheme } from '../../providers/ThemeProvider';

// Define theme types
type ThemeName = 'default' | 'techDark' | 'glass' | 'enterprise';
interface ThemeObject {
  name: ThemeName;
  // Add other theme properties as needed
}

// Performance-optimized button styles with variants
const buttonVariants = cva(
  // Base styles
  'relative inline-flex items-center justify-center font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background-primary disabled:pointer-events-none disabled:opacity-50 will-change-transform',
  {
    variants: {
      // Button variants
      variant: {
        // Base button variants
        primary: 'bg-primary text-primary-foreground hover:bg-primary-dark active:bg-primary-darker',
        secondary: 'bg-background-secondary text-foreground-primary hover:bg-background-tertiary active:scale-[0.98]',
        outline: 'border border-border bg-transparent hover:bg-background-secondary active:bg-background-tertiary',
        ghost: 'bg-transparent text-foreground-primary hover:bg-background-secondary active:bg-background-tertiary',
        destructive: 'bg-red-500 text-white hover:bg-red-600 active:bg-red-700',
        
        // Glassmorphic button variants
        glass: 'backdrop-blur-md bg-white/10 border border-white/20 text-foreground-primary hover:bg-white/15 active:bg-white/20',
        'glass-dark': 'backdrop-blur-md bg-black/30 border border-white/10 text-white hover:bg-black/40 active:bg-black/50',
        'glass-frost': 'backdrop-blur-xl bg-white/20 border border-white/40 text-foreground-primary hover:bg-white/25 active:bg-white/30 shadow-sm',
        'glass-deep': 'backdrop-blur-xl bg-black/40 border border-white/5 text-white hover:bg-black/50 active:bg-black/60 shadow-md',
        'glass-premium': 'backdrop-blur-xl bg-gradient-to-br from-white/20 to-white/5 border border-white/30 text-white hover:from-white/25 hover:to-white/10 active:from-white/15 active:to-white/5',
        'glass-gradient': 'backdrop-blur-md bg-gradient-to-br from-primary/20 to-accent-purple/20 border border-primary/20 text-white hover:from-primary/30 hover:to-accent-purple/30',
        
        // Gradient button variants
        gradient: 'bg-gradient-to-br from-primary to-accent-purple text-white hover:brightness-110 active:brightness-90',
        'gradient-blue-purple': 'bg-gradient-to-br from-blue-600 to-purple-600 text-white hover:brightness-110 active:brightness-90',
        'gradient-cyan-blue': 'bg-gradient-to-br from-cyan-400 to-blue-600 text-white hover:brightness-110 active:brightness-90',
        'gradient-emerald-cyan': 'bg-gradient-to-br from-emerald-500 to-cyan-500 text-white hover:brightness-110 active:brightness-90',
        'gradient-amber-orange': 'bg-gradient-to-br from-amber-500 to-orange-500 text-white hover:brightness-110 active:brightness-90',
        
        // Accent button variants
        'accent-blue': 'bg-accent-blue text-white hover:brightness-110 active:brightness-90',
        'accent-purple': 'bg-accent-purple text-white hover:brightness-110 active:brightness-90',
        'accent-cyan': 'bg-accent-cyan text-white hover:brightness-110 active:brightness-90',
        'accent-pink': 'bg-accent-pink text-white hover:brightness-110 active:brightness-90',
        'accent-amber': 'bg-amber-500 text-white hover:brightness-110 active:brightness-90',
        'accent-emerald': 'bg-emerald-500 text-white hover:brightness-110 active:brightness-90',
        
        // Glowing button variants
        'glow-blue': 'bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.7)] active:shadow-[0_0_15px_rgba(59,130,246,0.6)]',
        'glow-purple': 'bg-purple-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:shadow-[0_0_25px_rgba(139,92,246,0.7)] active:shadow-[0_0_15px_rgba(139,92,246,0.6)]',
        'glow-cyan': 'bg-cyan-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:shadow-[0_0_25px_rgba(6,182,212,0.7)] active:shadow-[0_0_15px_rgba(6,182,212,0.6)]',
        'glow-emerald': 'bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.5)] hover:shadow-[0_0_25px_rgba(16,185,129,0.7)] active:shadow-[0_0_15px_rgba(16,185,129,0.6)]',
        'glow-amber': 'bg-amber-500 text-white shadow-[0_0_20px_rgba(245,158,11,0.5)] hover:shadow-[0_0_25px_rgba(245,158,11,0.7)] active:shadow-[0_0_15px_rgba(245,158,11,0.6)]',
        'glow-pink': 'bg-pink-500 text-white shadow-[0_0_20px_rgba(236,72,153,0.5)] hover:shadow-[0_0_25px_rgba(236,72,153,0.7)] active:shadow-[0_0_15px_rgba(236,72,153,0.6)]',
        'glow-white': 'bg-white text-gray-900 shadow-[0_0_20px_rgba(255,255,255,0.5)] hover:shadow-[0_0_25px_rgba(255,255,255,0.7)] active:shadow-[0_0_15px_rgba(255,255,255,0.6)]',
        
        // Premium button variants
        'premium-dark': 'bg-gray-900 text-white border border-gray-700 hover:bg-gray-800 active:bg-gray-700',
        'premium-light': 'bg-white text-gray-900 border border-gray-200 shadow-sm hover:bg-gray-50 active:bg-gray-100',
        'premium-blue': 'bg-blue-900 text-white border border-blue-700 hover:bg-blue-800 active:bg-blue-700',
        'premium-purple': 'bg-purple-900 text-white border border-purple-700 hover:bg-purple-800 active:bg-purple-700',
        
        // Neumorphic button variants
        'neumorphic-light': 'bg-[#e0e5ec] text-gray-700 shadow-[6px_6px_12px_#b8bec7,_-6px_-6px_12px_#ffffff] hover:shadow-[4px_4px_8px_#b8bec7,_-4px_-4px_8px_#ffffff] active:shadow-[inset_4px_4px_8px_#b8bec7,_inset_-4px_-4px_8px_#ffffff] dark:bg-[#2d3748] dark:text-gray-100 dark:shadow-[5px_5px_10px_#1e2533,_-5px_-5px_10px_#3c495d] dark:hover:shadow-[3px_3px_6px_#1e2533,_-3px_-3px_6px_#3c495d] dark:active:shadow-[inset_3px_3px_6px_#1e2533,_inset_-3px_-3px_6px_#3c495d]',
        'neumorphic-dark': 'bg-[#2a2d3e] text-gray-100 shadow-[6px_6px_12px_#1e2030,_-6px_-6px_12px_#363b50] hover:shadow-[4px_4px_8px_#1e2030,_-4px_-4px_8px_#363b50] active:shadow-[inset_4px_4px_8px_#1e2030,_inset_-4px_-4px_8px_#363b50] dark:bg-[#2a2d3e] dark:text-gray-100 dark:shadow-[5px_5px_10px_#1e2030,_-5px_-5px_10px_#363b50] dark:hover:shadow-[3px_3px_6px_#1e2030,_-3px_-3px_6px_#363b50] dark:active:shadow-[inset_3px_3px_6px_#1e2030,_inset_-3px_-3px_6px_#363b50]',
        
        // Shimmer button variants
        'shimmer-light': 'bg-white text-gray-900 border border-gray-200 shadow-sm overflow-hidden',
        'shimmer-dark': 'bg-gray-900 text-white border border-gray-800 shadow-sm overflow-hidden',
        'shimmer-blue': 'bg-blue-600 text-white overflow-hidden',
        'shimmer-purple': 'bg-purple-600 text-white overflow-hidden',
      } as const,
      
      // Button sizes
      size: {
        xs: 'h-7 px-2.5 text-xs',
        sm: 'h-9 px-3 text-sm',
        md: 'h-10 px-4 text-sm',
        lg: 'h-11 px-5 text-base',
        xl: 'h-12 px-6 text-lg',
        '2xl': 'h-14 px-8 text-xl',
        icon: 'h-10 w-10 p-0',
        'icon-sm': 'h-8 w-8 p-0',
        'icon-lg': 'h-12 w-12 p-0',
      } as const,
      
      // Button roundedness
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        '2xl': 'rounded-2xl',
        full: 'rounded-full',
      } as const,
      
      // Special effects
      effect: {
        none: '',
        // Glow effects
        glow: 'shadow-blue-glow hover:shadow-purple-glow',
        'glow-sm': 'shadow-[0_0_10px_rgba(59,130,246,0.3)] hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]',
        'glow-lg': 'shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)]',
        'glow-pulse': 'animate-[glow-pulse_2s_ease-in-out_infinite]',
        
        // Animation effects
        float: 'animate-float',
        
        // Shimmer effects
        shimmer: 'before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent',
        'shimmer-fast': 'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent',
        'shimmer-subtle': 'before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent',
        
        // Border effects
        gradientBorder: 'gradient-border-1',
        rainbowBorder: 'rainbow-border-1',
        
        // Glass effects
        glassBorder: 'border border-white/20 backdrop-filter backdrop-blur-sm',
        'glassBorder-strong': 'border-2 border-white/30 backdrop-filter backdrop-blur-md',
        
        // Scale effects
        scaleUp: 'hover:scale-105 transition-transform duration-300',
        scaleDown: 'hover:scale-95 transition-transform duration-300',
        
        // Magnetic effect (requires JS implementation)
        magnetic: 'transition-transform duration-200',
        
        // Highlight effects
        highlight: 'before:absolute before:inset-0 before:translate-x-[-100%] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent hover:before:translate-x-[100%] before:transition-transform before:duration-500',
        'highlight-subtle': 'before:absolute before:inset-0 before:translate-x-[-100%] before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent hover:before:translate-x-[100%] before:transition-transform before:duration-700',
      } as const,
      
      // Animation variants
      animation: {
        none: '',
        pulse: 'animate-pulse',
        'pulse-slow': 'animate-[pulse_3s_ease-in-out_infinite]',
        float: 'animate-float',
        'float-slow': 'animate-[float_5s_ease-in-out_infinite]',
        fadeIn: 'animate-[fadeIn_0.5s_ease-out]',
        slideUp: 'animate-[slideUp_0.5s_ease-out]',
        slideDown: 'animate-[slideDown_0.5s_ease-out]',
        slideIn: 'animate-[slideIn_0.5s_ease-out]',
        slideRight: 'animate-[slideRight_0.5s_ease-out]',
        zoomIn: 'animate-[zoomIn_0.5s_ease-out]',
        blurIn: 'animate-[blurIn_0.5s_ease-out]',
      } as const,
      
      // Light and dark mode specific variants
      mode: {
        none: '',
        'light-only': 'dark:hidden',
        'dark-only': 'hidden dark:block',
        'light-optimized': 'dark:opacity-90 dark:hover:opacity-100',
        'dark-optimized': 'opacity-90 hover:opacity-100 dark:opacity-100',
      } as const,
      
      // Full width button
      fullWidth: {
        true: 'w-full',
      },
    },
    compoundVariants: [
      // Glass specific shimmer variants
      {
        variant: ['glass', 'glass-frost', 'glass-premium'],
        effect: 'shimmer',
        className: 'before:via-white/20',
      },
      
      // Light mode specific shimmer adjustments
      {
        variant: 'shimmer-light',
        effect: 'shimmer',
        className: 'before:via-black/5',
      },
      
      // Handle shimmer on different color gradients
      {
        variant: ['gradient-blue-purple', 'gradient-cyan-blue'],
        effect: 'shimmer',
        className: 'before:via-white/20',
      },
      
      // Neumorphic hover states
      {
        variant: 'neumorphic-light',
        effect: 'scaleDown',
        className: 'hover:shadow-[3px_3px_6px_#b8bec7,_-3px_-3px_6px_#ffffff]',
      },
      
      // Focus ring adjustments for dark backgrounds
      {
        variant: ['primary', 'accent-blue', 'accent-purple', 'accent-cyan', 'accent-pink', 'glow-blue', 'glow-purple'],
        className: 'focus-visible:ring-white',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      rounded: 'md',
      effect: 'none',
      animation: 'none',
      mode: 'none',
    },
  }
);

// Extract variant props type from the buttonVariants
type ButtonVariantProps = VariantProps<typeof buttonVariants>;

// Define the type for magnetic position state
interface MagneticPosition {
  x: number;
  y: number;
}

// Define theme-related default props
interface ThemeDefaults {
  variant: ButtonVariantProps['variant'];
  rounded: ButtonVariantProps['rounded'];
  effect: ButtonVariantProps['effect'];
  animation: ButtonVariantProps['animation'];
  mode: ButtonVariantProps['mode'];
}

// Helper function to get default button properties based on the theme
const getThemeDefaults = (
  theme: ThemeName,
  variant?: ButtonVariantProps['variant'],
  rounded?: ButtonVariantProps['rounded'],
  effect?: ButtonVariantProps['effect'],
  animation?: ButtonVariantProps['animation'],
  mode?: ButtonVariantProps['mode']
): ThemeDefaults => {
  let effectiveVariant = variant;
  let effectiveBorderRadius = rounded;
  let effectiveEffect = effect;
  let effectiveAnimation = animation;
  let effectiveMode = mode;
  
  // Adjust styles based on active theme
  if (theme === 'techDark' && !variant) {
    // Default for tech dark theme is a slightly different primary
    effectiveVariant = 'accent-blue';
    // Default border radius is slightly sharper
    if (!rounded) effectiveBorderRadius = 'md';
    // Add subtle glow effect if not specified
    if (!effect) effectiveEffect = 'glow';
    // Mode optimization for dark theme
    if (!mode) effectiveMode = 'dark-optimized';
  } 
  else if (theme === 'glass' && !variant) {
    // Default for glass theme is glass effect
    effectiveVariant = 'glass-premium';
    // More rounded by default
    if (!rounded) effectiveBorderRadius = 'xl';
    // Add subtle glow if no effect specified
    if (!effect) effectiveEffect = 'glow';
  }
  else if (theme === 'enterprise' && !variant) {
    // Default for enterprise theme
    if (!mode) effectiveMode = 'light-optimized';
  }
  
  return {
    variant: effectiveVariant,
    rounded: effectiveBorderRadius,
    effect: effectiveEffect,
    animation: effectiveAnimation,
    mode: effectiveMode,
  };
};

// Define the ButtonProps interface
export interface ButtonProps extends 
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>, 
  ButtonVariantProps {
  /** Additional class names to apply to the button */
  className?: string;
  /** Content to display inside the button */
  children: ReactNode;
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Whether the button is in a loading state */
  loading?: boolean;
  /** Make the button take up the full width of its container */
  fullWidth?: boolean;
  /** Icon to display on the left side of the button text */
  leftIcon?: ReactNode;
  /** Icon to display on the right side of the button text */
  rightIcon?: ReactNode;
}

// Performance-optimized button component using memo
const Button = memo<ButtonProps>(({
  variant,
  size,
  rounded,
  effect,
  animation,
  mode,
  className = '',
  children,
  disabled = false,
  loading = false,
  fullWidth,
  leftIcon,
  rightIcon,
  ...props
}) => {
  const { theme, themeObject } = useTheme() as { theme: ThemeName; themeObject: ThemeObject };
  const [magneticPosition, setMagneticPosition] = useState<MagneticPosition>({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  // Get theme-specific defaults
  const {
    variant: effectiveVariant,
    rounded: effectiveBorderRadius,
    effect: effectiveEffect,
    animation: effectiveAnimation,
    mode: effectiveMode,
  } = getThemeDefaults(theme, variant, rounded, effect, animation, mode);
  
  // Load/disabled state
  const isDisabled = disabled || loading;
  
  // Button classes
  const buttonClasses = buttonVariants({
    variant: effectiveVariant || 'primary',
    size,
    rounded: effectiveBorderRadius,
    effect: effectiveEffect,
    animation: effectiveAnimation,
    mode: effectiveMode,
    fullWidth,
    className,
  });
  
  // Handle magnetic effect - with performance optimization
  useEffect(() => {
    if (effectiveEffect === 'magnetic' && buttonRef.current) {
      const button = buttonRef.current;
      
      const handleMouseMove = (e: MouseEvent) => {
        // Use requestAnimationFrame for smoother performance
        requestAnimationFrame(() => {
          const rect = button.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          
          // Apply magnetic effect
          setMagneticPosition({
            x: x * 0.2, // Adjust the strength of the magnetic effect
            y: y * 0.2,
          });
        });
      };
      
      const handleMouseLeave = () => {
        // Reset position when mouse leaves
        setMagneticPosition({ x: 0, y: 0 });
      };
      
      button.addEventListener('mousemove', handleMouseMove);
      button.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        button.removeEventListener('mousemove', handleMouseMove);
        button.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [effectiveEffect]);
  
  // Apply magnetic transform style if needed using css variables for better performance
  const buttonStyle = effectiveEffect === 'magnetic' 
    ? { 
        '--magnetic-x': `${magneticPosition.x}px`,
        '--magnetic-y': `${magneticPosition.y}px`,
        transform: `translate(var(--magnetic-x), var(--magnetic-y))`
      } as React.CSSProperties
    : {};
    
  // Dark mode aware text color contrast
  const textColorContrast = theme === 'techDark' || theme === 'glass' ? 'text-opacity-90 hover:text-opacity-100' : '';
  
  return (
    <button
      ref={buttonRef}
      className={buttonClasses}
      disabled={isDisabled}
      style={buttonStyle}
      {...props}
    >
      {loading && (
        <svg 
          className="mr-2 h-4 w-4 animate-spin" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24"
        >
          <circle 
            className="opacity-25" 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="4"
          ></circle>
          <path 
            className="opacity-75" 
            fill="currentColor" 
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      
      {!loading && leftIcon && (
        <span className="mr-2">{leftIcon}</span>
      )}
      
      <span className={textColorContrast}>{children}</span>
      
      {!loading && rightIcon && (
        <span className="ml-2">{rightIcon}</span>
      )}
    </button>
  );
});

// Display name for React DevTools
Button.displayName = 'Button';

// Add custom animation keyframes to the component for reference
Button.animationKeyframes = `
@keyframes glow-pulse {
  0%, 100% { box-shadow: 0 0 15px rgba(59, 130, 246, 0.3); }
  50% { box-shadow: 0 0 25px rgba(59, 130, 246, 0.5); }
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

@keyframes slideUp {
  0% { transform: translateY(10px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

@keyframes slideDown {
  0% { transform: translateY(-10px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

@keyframes slideIn {
  0% { transform: translateX(-10px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}

@keyframes slideRight {
  0% { transform: translateX(10px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}

@keyframes zoomIn {
  0% { transform: scale(0.95); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}

@keyframes blurIn {
  0% { filter: blur(5px); opacity: 0; }
  100% { filter: blur(0); opacity: 1; }
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

/* Tailwind doesn't include these by default, add them to your tailwind.config.js */
@keyframes wiggle {
  0%, 100% { transform: rotate(-3deg); }
  50% { transform: rotate(3deg); }
}

@keyframes shake {
  10%, 90% { transform: translate3d(-1px, 0, 0); }
  20%, 80% { transform: translate3d(2px, 0, 0); }
  30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
  40%, 60% { transform: translate3d(4px, 0, 0); }
}

@keyframes breathe {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}
`;

export default Button;