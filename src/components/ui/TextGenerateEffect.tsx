import React, { useEffect, useState, useRef, HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { useSafeTheme } from '../../hooks/useSafeTheme';
import { cn } from '../../utils/cn';

// Theme types
export type TextGenerateTheme = 
  | 'enterprise' 
  | 'techDark' 
  | 'glass' 
  | 'neumorphicLight' 
  | 'glow' 
  | '3d';

// Cursor types
export type CursorType = 'bar' | 'block' | 'underscore' | 'none';

// Effect types
export type EffectType = 'none' | 'glow' | 'gradient' | 'shadow';

// Speed types
export type SpeedType = 'slow' | 'normal' | 'fast';

// Define the variants with class-variance-authority
const textGenerateVariants = cva(
  "relative inline-block", // Base styles
  {
    variants: {
      // Theme variants
      theme: {
        enterprise: "text-gray-900",
        techDark: "text-white",
        glass: "text-white",
        neumorphicLight: "text-gray-800",
        glow: "text-white",
        '3d': "text-gray-900 dark:text-white",
      },
      // Size variants
      size: {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
        xl: "text-xl",
        "2xl": "text-2xl",
        "3xl": "text-3xl",
        "4xl": "text-4xl",
        "5xl": "text-5xl",
      },
      // Weight variants
      weight: {
        light: "font-light",
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
      },
      // Cursor variants
      cursor: {
        bar: "",
        block: "",
        underscore: "",
        none: "",
      },
      // Additional effect variants
      effect: {
        none: "",
        glow: "",
        gradient: "",
        shadow: "",
      },
      // Speed variants
      speed: {
        slow: "",
        normal: "",
        fast: "",
      },
    },
    // Compound variants
    compoundVariants: [
      // Effect specifics for different themes
      {
        effect: "glow",
        theme: "enterprise",
        className: "text-shadow-blue",
      },
      {
        effect: "glow",
        theme: "techDark",
        className: "text-shadow-purple",
      },
      {
        effect: "glow",
        theme: "glass",
        className: "text-shadow-white",
      },
      {
        effect: "glow",
        theme: "neumorphicLight",
        className: "text-shadow-blue-light",
      },
      {
        effect: "glow",
        theme: "glow",
        className: "text-shadow-blue-strong",
      },
      {
        effect: "gradient",
        theme: "enterprise",
        className: "bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text",
      },
      {
        effect: "gradient",
        theme: "techDark",
        className: "bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text",
      },
      {
        effect: "gradient",
        theme: "glass",
        className: "bg-gradient-to-r from-white to-blue-200 text-transparent bg-clip-text",
      },
      {
        effect: "gradient",
        theme: "neumorphicLight",
        className: "bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text",
      },
      {
        effect: "gradient",
        theme: "glow",
        className: "bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text",
      },
      {
        effect: "shadow",
        theme: "enterprise",
        className: "drop-shadow-md",
      },
      {
        effect: "shadow",
        theme: "techDark",
        className: "drop-shadow-lg",
      },
      {
        effect: "shadow",
        theme: "glass",
        className: "drop-shadow-xl",
      },
    ],
    // Default variant values
    defaultVariants: {
      theme: "enterprise",
      size: "md",
      weight: "normal",
      cursor: "bar",
      effect: "none",
      speed: "normal",
    },
  }
);

// Cursor component variants
const cursorVariants = cva(
  "inline-block", // Base styles
  {
    variants: {
      theme: {
        enterprise: "bg-blue-500",
        techDark: "bg-purple-500",
        glass: "bg-white",
        neumorphicLight: "bg-blue-500",
        glow: "bg-blue-500",
        '3d': "bg-blue-500 dark:bg-blue-400",
      },
      cursor: {
        bar: "h-4 w-1",
        block: "h-4 w-3",
        underscore: "h-1 w-4 align-bottom mb-0.5",
        none: "hidden",
      },
      effect: {
        none: "",
        glow: "shadow-glow",
        gradient: "",
        shadow: "",
      },
    },
    compoundVariants: [
      {
        effect: "glow",
        theme: "enterprise",
        className: "shadow-blue-glow",
      },
      {
        effect: "glow",
        theme: "techDark",
        className: "shadow-purple-glow",
      },
      {
        effect: "glow",
        theme: "glass",
        className: "shadow-white-glow",
      },
      {
        effect: "glow",
        theme: "glow",
        className: "shadow-blue-glow-strong",
      },
    ],
    defaultVariants: {
      theme: "enterprise",
      cursor: "bar",
      effect: "none",
    },
  }
);

// Extract variant props types from the CVA functions
export type TextGenerateVariantProps = VariantProps<typeof textGenerateVariants>;
export type CursorVariantProps = VariantProps<typeof cursorVariants>;

// Define the props interface for the component
export interface TextGenerateEffectProps extends HTMLAttributes<HTMLSpanElement>, TextGenerateVariantProps {
  words: string;
  onComplete?: () => void;
  loop?: boolean;
  delay?: number;
  typingDelay?: number;
  theme?: TextGenerateTheme;
}

const TextGenerateEffect: React.FC<TextGenerateEffectProps> = ({
  words,
  className,
  theme: themeProp,
  size,
  weight,
  cursor,
  effect,
  speed,
  onComplete,
  loop = false,
  delay = 0,
  typingDelay,
  ...props
}) => {
  // Get the current theme from context
  const { theme: contextTheme } = useSafeTheme();
  
  // Use prop theme or fall back to context
  const activeTheme = themeProp || contextTheme;
  
  // State
  const [wordArray, setWordArray] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const timeoutRef = useRef<number | null>(null);
  const intervalRef = useRef<number | null>(null);
  
  // Get typing speed based on the speed prop
  const getTypingDelay = (): number => {
    if (typingDelay !== undefined) return typingDelay;
    
    const speedMap: Record<SpeedType, number> = {
      slow: 80,
      normal: 30,
      fast: 10,
    };
    
    return speedMap[speed as SpeedType] || speedMap.normal;
  };
  
  // Generate text effect
  useEffect(() => {
    if (!isPlaying) return;
    
    // Reset if words change
    setWordArray([]);
    setIsComplete(false);
    
    // Clear any existing timeouts/intervals
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    // Initial delay before starting
    timeoutRef.current = window.setTimeout(() => {
      // Split the words into an array of characters
      const chars = words.split('');
      
      let index = -1;
      
      // Add each character to the array one by one with a delay
      intervalRef.current = window.setInterval(() => {
        index++;
        setWordArray((prev) => [...prev, chars[index]]);
        
        if (index === chars.length - 1) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setIsComplete(true);
          
          if (onComplete) {
            onComplete();
          }
          
          // If looping is enabled, reset after a delay
          if (loop) {
            timeoutRef.current = window.setTimeout(() => {
              setWordArray([]);
              setIsComplete(false);
            }, 2000); // Pause before restarting
          }
        }
      }, getTypingDelay());
    }, delay);
    
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [words, isPlaying, loop, delay, speed, onComplete, typingDelay]);
  
  // Get main text classes
  const textClasses = textGenerateVariants({
    theme: activeTheme as TextGenerateTheme,
    size,
    weight,
    cursor,
    effect,
    speed,
    className,
  });
  
  // Get cursor classes
  const cursorClasses = cursorVariants({
    theme: activeTheme as TextGenerateTheme,
    cursor,
    effect,
  });
  
  // Pause/resume functionality
  const togglePlayPause = (): void => {
    setIsPlaying(!isPlaying);
  };
  
  return (
    <span className={cn(textClasses)} onClick={togglePlayPause} {...props}>
      {wordArray.join('')}
      {!isComplete && (
        <span 
          className={cn(cursorClasses, "ml-1 animate-blink")}
          style={{
            animation: "blink 0.8s infinite",
          }}
        />
      )}
      <style jsx global>{`
        @keyframes blink {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        .text-shadow-blue {
          text-shadow: 0 0 8px rgba(59, 130, 246, 0.5);
        }
        .text-shadow-purple {
          text-shadow: 0 0 8px rgba(139, 92, 246, 0.5);
        }
        .text-shadow-white {
          text-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
        }
        .text-shadow-blue-light {
          text-shadow: 0 0 5px rgba(59, 130, 246, 0.3);
        }
        .text-shadow-blue-strong {
          text-shadow: 0 0 12px rgba(59, 130, 246, 0.8);
        }
        .shadow-blue-glow {
          box-shadow: 0 0 5px rgba(59, 130, 246, 0.5);
        }
        .shadow-purple-glow {
          box-shadow: 0 0 5px rgba(139, 92, 246, 0.5);
        }
        .shadow-white-glow {
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
        }
        .shadow-blue-glow-strong {
          box-shadow: 0 0 8px rgba(59, 130, 246, 0.8);
        }
      `}</style>
    </span>
  );
};

export { TextGenerateEffect, textGenerateVariants };