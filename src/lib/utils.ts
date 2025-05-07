import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getThemeStyles(theme: 'light' | 'dark' | 'pearl') {
  const baseStyles = {
    transition: 'background-color 0.3s ease, color 0.3s ease',
  };

  switch (theme) {
    case 'dark':
      return {
        ...baseStyles,
        backgroundColor: 'hsl(var(--background))',
        color: 'hsl(var(--foreground))',
      };
    case 'pearl':
      return {
        ...baseStyles,
        backgroundColor: 'hsl(var(--background))',
        color: 'hsl(var(--foreground))',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)',
      };
    default:
      return {
        ...baseStyles,
        backgroundColor: 'hsl(var(--background))',
        color: 'hsl(var(--foreground))',
      };
  }
}