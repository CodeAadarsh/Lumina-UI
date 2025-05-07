import React from 'react';
import { cn } from '@/lib/utils';

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
  variant?: 'default' | 'gradient' | 'striped';
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'accent' | 'destructive';
  animate?: boolean;
}

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ 
    className, 
    value = 0, 
    max = 100, 
    variant = 'default',
    size = 'md',
    color = 'primary',
    animate = false,
    ...props 
  }, ref) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
    
    const sizeStyles = {
      sm: 'h-1',
      md: 'h-2',
      lg: 'h-3',
    };

    const colorStyles = {
      primary: 'bg-primary',
      secondary: 'bg-secondary',
      accent: 'bg-accent',
      destructive: 'bg-destructive',
    };

    const variantStyles = {
      default: colorStyles[color],
      gradient: 'bg-gradient-to-r from-blue-500 to-purple-600',
      striped: `${colorStyles[color]} bg-[length:1rem_1rem] bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)]`,
    };

    const animationClass = animate ? 'animate-bounce-gentle' : '';

    return (
      <div 
        ref={ref}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        className={cn(
          'relative w-full overflow-hidden rounded-full bg-secondary',
          sizeStyles[size],
          className
        )}
        {...props}
      >
        <div
          className={cn(
            'h-full rounded-full transition-all duration-500 ease-in-out',
            variantStyles[variant],
            animationClass
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    );
  }
);

Progress.displayName = 'Progress';