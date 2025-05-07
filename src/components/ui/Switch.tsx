import React from 'react';
import { cn } from '@/lib/utils';

export interface SwitchProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'gradient';
  label?: string;
}

export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({ 
    className, 
    checked = false, 
    onCheckedChange, 
    size = 'md',
    variant = 'default',
    label,
    disabled,
    ...props 
  }, ref) => {
    const toggleSwitch = () => {
      if (!disabled) {
        onCheckedChange?.(!checked);
      }
    };

    const sizeStyles = {
      sm: {
        switch: 'h-4 w-8',
        thumb: 'h-3 w-3 translate-x-0.5',
        thumbChecked: 'translate-x-[18px]',
      },
      md: {
        switch: 'h-6 w-11',
        thumb: 'h-5 w-5 translate-x-0.5',
        thumbChecked: 'translate-x-5',
      },
      lg: {
        switch: 'h-8 w-14',
        thumb: 'h-7 w-7 translate-x-0.5',
        thumbChecked: 'translate-x-6',
      },
    };

    const variantStyles = {
      default: checked ? 'bg-primary' : 'bg-input',
      gradient: checked ? 'bg-gradient-to-r from-blue-500 to-purple-600' : 'bg-input',
    };

    const content = (
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        className={cn(
          'peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50',
          sizeStyles[size].switch,
          variantStyles[variant],
          className
        )}
        onClick={toggleSwitch}
        ref={ref}
        {...props}
      >
        <span
          className={cn(
            'pointer-events-none block rounded-full bg-background shadow-lg ring-0 transition-transform',
            sizeStyles[size].thumb,
            checked ? sizeStyles[size].thumbChecked : ''
          )}
        />
      </button>
    );

    if (label) {
      return (
        <label className="flex items-center gap-2 cursor-pointer">
          {content}
          <span className="text-sm font-medium text-foreground">{label}</span>
        </label>
      );
    }

    return content;
  }
);

Switch.displayName = 'Switch';