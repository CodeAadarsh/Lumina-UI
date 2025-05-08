import React, { forwardRef, useState, useRef, memo, useEffect, FC, ChangeEvent, FocusEvent } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { useTheme } from '../../providers/ThemeProvider';
import { Eye, EyeOff, X, Check } from 'lucide-react';

// Define theme type
interface ThemeState {
  theme: string;
  themeObject: Record<string, any>;
}

// Input wrapper variants
const inputWrapperVariants = cva(
  'relative transition-all duration-200',
  {
    variants: {
      fullWidth: {
        true: 'w-full',
        false: 'w-auto',
      },
    },
    defaultVariants: {
      fullWidth: true,
    },
  }
);

// Label variants
const labelVariants = cva(
  'block text-sm font-medium transition-all duration-200',
  {
    variants: {
      state: {
        default: 'text-foreground-secondary',
        error: 'text-red-500',
        success: 'text-green-500',
        focused: 'text-primary-base',
      },
      effect: {
        none: 'mb-1.5',
        float: 'transform origin-top-left absolute left-0 top-0',
      },
      variant: {
        default: '',
        filled: '',
        outline: '',
        underline: '',
        glass: 'text-foreground-secondary',
        'glass-premium': 'text-foreground-primary',
        'glass-frost': 'text-foreground-primary/90',
      }
    },
    defaultVariants: {
      state: 'default',
      effect: 'none',
      variant: 'default',
    },
  }
);

// Input variants with enhanced options
const inputVariants = cva(
  // Base styles - improved focus handling and transitions
  'w-full transition-all duration-200 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60 placeholder:opacity-60',
  {
    variants: {
      // Input variants with enhanced glassmorphism options
      variant: {
        // Default input
        default: 'bg-background-secondary border border-border focus:border-border-focus text-foreground-primary',
        
        // Filled input with improved hover/focus states
        filled: 'bg-background-tertiary border border-transparent hover:bg-background-secondary focus:bg-background-secondary focus:border-border-focus text-foreground-primary',
        
        // Outline input with transparent background
        outline: 'bg-transparent border border-border focus:border-border-focus text-foreground-primary',
        
        // Underline input (only bottom border)
        underline: 'bg-transparent border-0 border-b-2 border-border rounded-none focus:border-border-focus text-foreground-primary',
        
        // Glass effect input - standard
        glass: 'backdrop-blur-md bg-white/10 border border-white/10 focus:border-white/30 text-foreground-primary placeholder:text-foreground-secondary/70',
        
        // Premium glass effect - enhanced blur and better borders
        'glass-premium': 'backdrop-blur-xl bg-white/5 border border-white/20 focus:border-white/40 text-white placeholder:text-white/60',
        
        // Frosted glass effect - more opacity
        'glass-frost': 'backdrop-blur-xl bg-white/10 border-t border-l border-white/30 border-r border-b border-white/10 text-white placeholder:text-white/60',
        
        // Dark glass effect - darker background
        'glass-dark': 'backdrop-blur-md bg-black/40 border border-white/10 focus:border-white/30 text-white placeholder:text-white/60',
        
        // Gradient glass effect
        'glass-gradient': 'backdrop-blur-md bg-gradient-to-br from-primary/10 to-accent-purple/10 border border-white/20 focus:border-white/40 text-white placeholder:text-white/60',
        
        // Solid input
        solid: 'bg-background-tertiary border border-border focus:border-border-focus text-foreground-primary',
        
        // Modern minimalist style
        'modern': 'bg-background-secondary/50 border-none shadow-sm focus:shadow-md text-foreground-primary',
        
        // Material design inspired
        'material': 'bg-transparent border-b-2 border-border px-0 focus:border-primary text-foreground-primary',
        
        // Neumorphic light
        'neumorphic-light': 'bg-[#e0e5ec] text-gray-700 border-none shadow-[inset_2px_2px_5px_#b8b9be,inset_-3px_-3px_7px_#fff] focus:shadow-[inset_1px_1px_2px_#b8b9be,inset_-1px_-1px_2px_#fff]',
        
        // Neumorphic dark
        'neumorphic-dark': 'bg-[#2a2d3e] text-gray-100 border-none shadow-[inset_2px_2px_5px_#1e2030,inset_-3px_-3px_7px_#363b50] focus:shadow-[inset_1px_1px_2px_#1e2030,inset_-1px_-1px_2px_#363b50]',
      },
      
      // Input padding with more options
      padding: {
        xs: 'px-2 py-1 text-xs',
        sm: 'px-2.5 py-1.5 text-sm',
        md: 'px-3 py-2 text-base',
        lg: 'px-4 py-2.5 text-lg',
        xl: 'px-5 py-3 text-xl',
      },
      
      // Input roundedness with more options
      rounded: {
        none: 'rounded-none',
        xs: 'rounded-sm',
        sm: 'rounded',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        '2xl': 'rounded-2xl',
        full: 'rounded-full',
      },
      
      // Enhanced special effects
      effect: {
        none: '',
        glow: 'focus:shadow-blue-glow focus:border-primary/70',
        'purple-glow': 'focus:shadow-purple-glow focus:border-purple-500/70',
        'cyan-glow': 'focus:shadow-[0_0_15px_rgba(6,182,212,0.5)] focus:border-cyan-500/70',
        'multi-glow': 'focus:shadow-multi-glow',
        gradientBorder: 'gradient-border-1',
        rainbowBorder: 'rainbow-border-1',
        shimmer: 'overflow-hidden after:absolute after:inset-0 after:w-full after:h-full after:-translate-x-full focus:after:animate-shimmer-contained after:bg-gradient-to-r after:from-transparent after:via-white/10 after:to-transparent',
        float: 'focus:-translate-y-1 focus:shadow-md',
        scale: 'focus:scale-[1.02] origin-center',
        'focus-ring': 'focus:ring-2 focus:ring-offset-2 focus:ring-primary',
      },
      
      // Input state - combined with variant
      state: {
        default: '',
        error: 'border-red-500/70 focus:border-red-500 focus:ring-red-500/50',
        success: 'border-green-500/70 focus:border-green-500 focus:ring-green-500/50',
        focused: 'border-primary-base',
      },
      
      // Input size - height control for better vertical alignment
      size: {
        xs: 'h-7',
        sm: 'h-8',
        md: 'h-10',
        lg: 'h-12',
        xl: 'h-14',
      },
    },
    compoundVariants: [
      // Glass effect with glow combinations
      {
        variant: 'glass',
        effect: 'glow',
        className: 'focus:shadow-blue-glow focus:border-blue-400/50'
      },
      {
        variant: 'glass-premium',
        effect: 'glow',
        className: 'focus:shadow-blue-glow focus:border-blue-400/50'
      },
      {
        variant: 'glass-frost',
        effect: 'purple-glow',
        className: 'focus:shadow-purple-glow focus:border-purple-400/50'
      },
      {
        variant: 'glass-dark',
        effect: 'glow',
        className: 'focus:shadow-[0_0_20px_rgba(255,255,255,0.2)]'
      },
      
      // Error states with appropriate focus colors
      {
        state: 'error',
        effect: 'glow',
        className: 'focus:shadow-[0_0_15px_rgba(239,68,68,0.5)]'
      },
      {
        state: 'success',
        effect: 'glow',
        className: 'focus:shadow-[0_0_15px_rgba(34,197,94,0.5)]'
      },
      
      // Specific variants for material design
      {
        variant: 'material',
        state: 'focused',
        className: 'border-b-primary-base'
      },
      
      // Neumorphic with state combos
      {
        variant: ['neumorphic-light', 'neumorphic-dark'],
        state: 'error',
        className: 'shadow-[inset_0_0_5px_rgba(239,68,68,0.5)]'
      },
      {
        variant: ['neumorphic-light', 'neumorphic-dark'],
        state: 'success',
        className: 'shadow-[inset_0_0_5px_rgba(34,197,94,0.5)]'
      },
    ],
    defaultVariants: {
      variant: 'default',
      padding: 'md',
      rounded: 'md',
      effect: 'none',
      state: 'default',
      size: 'md',
    },
  }
);

// Helper text variants for different states
const helperTextVariants = cva(
  'mt-1.5 text-sm transition-all',
  {
    variants: {
      state: {
        default: 'text-foreground-tertiary',
        error: 'text-red-500',
        success: 'text-green-500',
      },
    },
    defaultVariants: {
      state: 'default',
    },
  }
);

// Extract variant props from CVA functions
type InputWrapperVariantProps = VariantProps<typeof inputWrapperVariants>;
type LabelVariantProps = VariantProps<typeof labelVariants>;
type InputVariantProps = VariantProps<typeof inputVariants>;
type HelperTextVariantProps = VariantProps<typeof helperTextVariants>;

// Define all possible input types for better intellisense
type InputType = 
  | 'text'
  | 'password'
  | 'email'
  | 'number'
  | 'tel'
  | 'url'
  | 'search'
  | 'date'
  | 'time'
  | 'datetime-local'
  | 'month'
  | 'week'
  | 'color';

// Base props interface that extends HTML input props
interface BaseInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  // Appearance props from variants
  variant?: InputVariantProps['variant'];
  padding?: InputVariantProps['padding'];
  rounded?: InputVariantProps['rounded'];
  effect?: InputVariantProps['effect'];
  size?: InputVariantProps['size'];
  
  // Input functionality props
  type?: InputType;
  error?: string;
  success?: string;
  label?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  prefix?: string;
  suffix?: string;
  fullWidth?: InputWrapperVariantProps['fullWidth'];
  floatingLabel?: boolean;
  clearable?: boolean;
  showPasswordToggle?: boolean;
  
  // Class names for styling
  className?: string;
  wrapperClassName?: string;
  labelClassName?: string;
  helperTextClassName?: string;
  
  // Animation related props
  animated?: boolean;
}

// Exported interface for documentation and external usage
export interface InputProps extends BaseInputProps {}

// Type definition for the forwarded ref
export type InputRef = HTMLInputElement;

// Enhanced Input Component with performance optimizations
const Input = memo(forwardRef<InputRef, InputProps>(({
  // Input appearance props
  variant,
  padding,
  rounded,
  effect,
  size,
  className = '',
  wrapperClassName = '',
  labelClassName = '',
  helperTextClassName = '',
  
  // Input functionality props
  type = 'text',
  error,
  success,
  label,
  helperText,
  leftIcon,
  rightIcon,
  prefix,
  suffix,
  fullWidth = true,
  floatingLabel = false,
  clearable = false,
  showPasswordToggle = true,
  
  // Animation related props
  animated = true,
  
  // Event handlers with performance optimizations
  onChange,
  onFocus,
  onBlur,
  
  // Other props
  ...props
}, ref) => {
  // Use internal ref if none provided
  const inputRef = useRef<HTMLInputElement>(null);
  const combinedRef = (ref || inputRef) as React.RefObject<HTMLInputElement>;
  
  // Component state
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [hasValue, setHasValue] = useState<boolean>(!!props.value || !!props.defaultValue);
  const { theme, themeObject } = useTheme() as ThemeState;
  
  // Apply theme-specific styles
  let effectiveVariant = variant;
  let effectiveRounded = rounded;
  let effectiveEffect = effect;
  let effectiveSize = size;
  
  // Adjust styles based on active theme
  if (theme === 'techDark' && !variant) {
    // Default for tech dark theme
    effectiveVariant = 'filled';
    if (!rounded) effectiveRounded = 'md';
    if (!effect) effectiveEffect = 'none';
  } 
  else if (theme === 'glass' && !variant) {
    // Default for glass theme
    effectiveVariant = 'glass-premium';
    if (!rounded) effectiveRounded = 'lg';
    if (!effect) effectiveEffect = 'glow';
  }
  
  // Determine input type (handle password visibility)
  const inputType = type === 'password' && showPassword ? 'text' : type;
  
  // Determine input state for styling
  const inputState: InputVariantProps['state'] = error 
    ? 'error' 
    : success 
    ? 'success' 
    : isFocused 
    ? 'focused' 
    : 'default';
  
  // Handle floating label animation
  const labelState: LabelVariantProps['state'] = inputState;
  const labelEffect: LabelVariantProps['effect'] = floatingLabel ? 'float' : 'none';
  const floatingLabelClass = floatingLabel 
    ? `${hasValue || isFocused ? 'text-xs transform -translate-y-7' : 'text-base transform translate-y-2'} pointer-events-none absolute left-3 transition-all duration-200` 
    : '';
  
  // Padding adjustments for icons or affixes
  const paddingLeftClass = leftIcon || prefix ? 'pl-10' : '';
  const paddingRightClass = type === 'password' || rightIcon || suffix || (clearable && hasValue) ? 'pr-10' : '';
  
  // Optimized input classes
  const inputClasses = inputVariants({
    variant: effectiveVariant,
    padding,
    rounded: effectiveRounded,
    effect: effectiveEffect,
    state: inputState,
    size: effectiveSize,
    className: `${paddingLeftClass} ${paddingRightClass} ${className}`,
  });
  
  // Wrapper classes
  const wrapperClasses = inputWrapperVariants({
    fullWidth,
    className: wrapperClassName,
  });
  
  // Label classes
  const labelClasses = labelVariants({
    state: labelState, 
    effect: labelEffect,
    variant: effectiveVariant,
    className: `${floatingLabelClass} ${labelClassName}`,
  });
  
  // Helper text classes
  const helperTextClasses = helperTextVariants({
    state: error ? 'error' : success ? 'success' : 'default',
    className: helperTextClassName,
  });
  
  // Toggle password visibility
  const togglePasswordVisibility = (): void => {
    setShowPassword(prev => !prev);
  };
  
  // Track input value for floating label and clearable functionality
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setHasValue(!!e.target.value);
    if (onChange) onChange(e);
  };
  
  // Handle focus with custom handler
  const handleFocus = (e: FocusEvent<HTMLInputElement>): void => {
    setIsFocused(true);
    if (onFocus) onFocus(e);
  };
  
  // Handle blur with custom handler
  const handleBlur = (e: FocusEvent<HTMLInputElement>): void => {
    setIsFocused(false);
    if (onBlur) onBlur(e);
  };
  
  // Handle input clearing
  const handleClear = (): void => {
    // Reset input value
    if (combinedRef.current) {
      combinedRef.current.value = '';
      
      // Trigger synthetic change event
      const event = new Event('change', { bubbles: true });
      combinedRef.current.dispatchEvent(event);
      
      // Set focus back to input
      combinedRef.current.focus();
      
      // Update state
      setHasValue(false);
      
      // Call onChange if provided
      if (onChange) {
        const syntheticEvent = { target: combinedRef.current } as ChangeEvent<HTMLInputElement>;
        onChange(syntheticEvent);
      }
    }
  };
  
  // Update hasValue when value changes externally
  useEffect(() => {
    setHasValue(!!props.value);
  }, [props.value]);
  
  // Check if we need to show validation icons
  const showSuccessIcon = success && !rightIcon && !suffix && type !== 'password';
  const showErrorIcon = error && !rightIcon && !suffix && type !== 'password';
  
  return (
    <div className={wrapperClasses}>
      {/* Non-floating label */}
      {label && !floatingLabel && (
        <label 
          htmlFor={props.id} 
          className={labelClasses}
        >
          {label}
        </label>
      )}
      
      {/* Input container */}
      <div className="relative">
        {/* Floating label */}
        {label && floatingLabel && (
          <label 
            htmlFor={props.id} 
            className={labelClasses}
          >
            {label}
          </label>
        )}
        
        {/* Left icon or prefix */}
        {leftIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-foreground-tertiary">
            {leftIcon}
          </div>
        )}
        
        {prefix && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-foreground-tertiary">
            <span className="text-sm">{prefix}</span>
          </div>
        )}
        
        {/* Input element */}
        <input
          ref={combinedRef}
          type={inputType}
          className={inputClasses}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
        
        {/* Right icon, suffix, password toggle, or clear button */}
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center gap-2">
          {/* Success icon */}
          {showSuccessIcon && (
            <Check className="h-4 w-4 text-green-500" />
          )}
          
          {/* Error icon */}
          {showErrorIcon && (
            <div className="text-red-500">!</div>
          )}
          
          {/* Clear button */}
          {clearable && hasValue && !showSuccessIcon && !showErrorIcon && (
            <button
              type="button"
              onClick={handleClear}
              className="text-foreground-tertiary hover:text-foreground-secondary transition-colors"
              tabIndex={-1}
            >
              <X size={16} />
            </button>
          )}
          
          {/* Password toggle */}
          {type === 'password' && showPasswordToggle && (
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="text-foreground-tertiary hover:text-foreground-secondary transition-colors"
              tabIndex={-1}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          )}
          
          {/* Right icon */}
          {type !== 'password' && rightIcon && (
            <span className="pointer-events-none text-foreground-tertiary">
              {rightIcon}
            </span>
          )}
          
          {/* Suffix */}
          {type !== 'password' && suffix && !rightIcon && (
            <span className="pointer-events-none text-foreground-tertiary text-sm">
              {suffix}
            </span>
          )}
        </div>
      </div>
      
      {/* Helper text, error or success message */}
      {(error || success || helperText) && (
        <p className={helperTextClasses}>
          {error || success || helperText}
        </p>
      )}
    </div>
  );
}));

// Add JSDoc comments for better intellisense
/**
 * Input component with extensive styling options and features.
 * 
 * @example
 * // Basic usage
 * <Input label="Email" placeholder="Enter your email" />
 * 
 * @example
 * // Password input with toggle
 * <Input 
 *   type="password" 
 *   label="Password" 
 *   placeholder="Enter your password"
 *   showPasswordToggle
 * />
 * 
 * @example
 * // Styled input with effects
 * <Input 
 *   variant="glass-premium"
 *   effect="glow"
 *   rounded="lg"
 *   label="Username"
 *   placeholder="Choose a username"
 * />
 */
// Display name for dev tools
Input.displayName = 'Input';

export default Input;