import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary text-primary-foreground',
        secondary: 'border-transparent bg-secondary text-secondary-foreground',
        destructive: 'border-transparent bg-destructive text-destructive-foreground',
        outline: 'text-foreground',
        gradient: 'border-transparent bg-gradient-to-r from-blue-500 to-purple-600 text-white',
        pulse: 'border-transparent bg-primary text-primary-foreground animate-bounce-gentle',
      },
      size: {
        sm: 'px-1.5 text-xs',
        md: 'px-2.5 text-xs',
        lg: 'px-3 text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export interface BadgeProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  dismissible?: boolean;
  onDismiss?: () => void;
  dot?: boolean;
  pulse?: boolean;
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, size, dismissible, onDismiss, dot, pulse, children, ...props }, ref) => {
    return (
      <div 
        ref={ref}
        className={cn(
          badgeVariants({ variant, size }),
          pulse && 'animate-bounce-gentle',
          className
        )} 
        {...props}
      >
        {dot && (
          <span className={cn(
            'mr-1.5 h-1.5 w-1.5 rounded-full',
            pulse ? 'animate-pulse' : '',
            variant === 'default' ? 'bg-primary-foreground' :
            variant === 'destructive' ? 'bg-white' :
            variant === 'gradient' ? 'bg-white' :
            'bg-foreground'
          )} />
        )}
        {children}
        {dismissible && (
          <button
            onClick={onDismiss}
            className="ml-1.5 inline-flex items-center justify-center rounded-full hover:bg-white/20 focus:outline-none"
          >
            <X className="h-3 w-3" />
          </button>
        )}
      </div>
    );
  }
);

Badge.displayName = 'Badge';