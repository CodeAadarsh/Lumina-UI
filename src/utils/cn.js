// src/utils/cn.js
/**
 * A simple utility function to conditionally join class names together
 * @param  {...string} classes - Class names to join
 * @returns {string} - Joined class names
 */
export function cn(...classes) {
    return classes.filter(Boolean).join(' ');
  }
  
  /**
   * Alternative implementation using clsx and tailwind-merge if available
   * If you have these packages installed, you can replace the above implementation with this:
   */
  /*
  import { clsx } from 'clsx';
  import { twMerge } from 'tailwind-merge';
  
  export function cn(...inputs) {
    return twMerge(clsx(inputs));
  }
  */