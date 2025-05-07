import React from 'react';
import { cn } from '@/lib/utils';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  variant?: 'default' | 'gradient' | 'bordered';
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ 
    className, 
    src, 
    alt = '',
    fallback = '',
    size = 'md',
    rounded = 'full',
    variant = 'default',
    ...props 
  }, ref) => {
    const [hasError, setHasError] = React.useState(!src);
    const [loading, setLoading] = React.useState(true);

    const sizeStyles = {
      xs: 'h-6 w-6 text-xs',
      sm: 'h-8 w-8 text-sm',
      md: 'h-10 w-10 text-base',
      lg: 'h-12 w-12 text-lg',
      xl: 'h-16 w-16 text-xl',
    };

    const roundedStyles = {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded-full',
    };

    const variantStyles = {
      default: 'bg-secondary',
      gradient: 'bg-gradient-to-br from-blue-500 to-purple-600 text-white',
      bordered: 'border-2 border-primary',
    };

    React.useEffect(() => {
      if (src) {
        const img = new Image();
        img.src = src;
        img.onload = () => setLoading(false);
        img.onerror = () => {
          setHasError(true);
          setLoading(false);
        };
      }
    }, [src]);

    const shouldRenderFallback = hasError || !src || loading;

    return (
      <div
        ref={ref}
        className={cn(
          'relative flex shrink-0 overflow-hidden',
          sizeStyles[size],
          roundedStyles[rounded],
          shouldRenderFallback && variantStyles[variant],
          className
        )}
        {...props}
      >
        {!hasError && src && (
          <img
            src={src}
            alt={alt}
            className={cn(
              'aspect-square h-full w-full',
              roundedStyles[rounded],
              loading && 'opacity-0'
            )}
            onError={() => setHasError(true)}
          />
        )}
        {shouldRenderFallback && (
          <div 
            className={cn(
              'flex h-full w-full items-center justify-center font-semibold uppercase',
              loading && 'animate-pulse',
              !loading && 'animate-none'
            )}
          >
            {loading ? '' : fallback.slice(0, 2) || '😊'}
          </div>
        )}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';