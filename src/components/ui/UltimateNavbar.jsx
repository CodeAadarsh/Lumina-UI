import React, { useState, useEffect, forwardRef, memo, useRef, useCallback } from 'react';
import { cva } from 'class-variance-authority';
import { useSafeTheme } from '../../hooks/useSafeTheme';
import { cn } from '../../utils/cn';
import { motion, AnimatePresence } from 'framer-motion';

// Define the variants with class-variance-authority
const navbarVariants = cva(
  // Base styles for all Navbar components
  "flex items-center w-full transition-all duration-500",
  {
    variants: {
      // Theme variants
      theme: {
        enterprise: "bg-background-primary text-foreground-primary border-border",
        techDark: "bg-gray-900 text-gray-100 border-gray-700",
        glass: "text-foreground-primary backdrop-blur-md",
        neumorphic: "bg-neutral-100 text-gray-800",
      },
      // Display mode variants
      display: {
        default: "", // Shows both text and icons
        iconsOnly: "",
        textOnly: "",
      },
      // Orientation of the navbar
      orientation: {
        horizontal: "flex-row",
        vertical: "flex-col items-start",
      },
      // Size of the navbar items
      size: {
        xs: "gap-1 text-xs",
        sm: "gap-2 text-sm",
        md: "gap-4 text-base",
        lg: "gap-6 text-lg",
      },
      // Alignment of items
      alignment: {
        start: "justify-start",
        center: "justify-center",
        end: "justify-end",
        between: "justify-between",
        around: "justify-around",
        evenly: "justify-evenly",
      },
      // Padding
      padding: {
        none: "p-0",
        xs: "px-1 py-1",
        sm: "px-2 py-2",
        md: "px-4 py-3",
        lg: "px-6 py-4",
      },
      // Border styles
      border: {
        none: "border-0",
        bottom: "border-b",
        top: "border-t",
        left: "border-l",
        right: "border-r",
        all: "border",
      },
      // Shadow styles
      shadow: {
        none: "shadow-none",
        sm: "shadow-sm",
        md: "shadow-md",
        lg: "shadow-lg",
        inner: "shadow-inner",
      },
      // Rounded corners
      rounded: {
        none: "rounded-none",
        xs: "rounded-xs",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
      },
      // Animation style
      animation: {
        none: "",
        slide: "transition-all duration-500 ease-in-out",
        fade: "transition-opacity duration-500 ease-in-out",
        scale: "transition-transform duration-500 ease-in-out",
        bounce: "transition-transform duration-500",
        elastic: "transition-all duration-700 ease-elastic",
        spring: "transition-all duration-700 ease-spring",
      },
      // Visual style 
      visualStyle: {
        default: "",
        floating: "shadow-lg",
        pill: "rounded-full",
        minimal: "bg-transparent",
        outlined: "bg-transparent border",
        gradient: "bg-gradient-to-r",
        glowing: "shadow-glow transition-all duration-500",
        neumorphicFlat: "transition-all duration-500",
        neumorphicPressed: "transition-all duration-500",
        neumorphicConvex: "bg-gradient-to-br from-white to-neutral-200 transition-all duration-500",
        glassmorphism: "backdrop-blur-md bg-opacity-70 transition-all duration-500",
        frosted: "backdrop-blur-lg bg-opacity-40 transition-all duration-500",
      },
      // Density
      density: {
        default: "",
        compact: "",
        comfortable: "",
      },
    },
    compoundVariants: [
      // Specific orientation-based styling
      {
        orientation: "vertical",
        className: "flex-col w-auto h-full",
      },
      // Density variants
      {
        density: "compact",
        size: "md",
        className: "gap-2",
      },
      {
        density: "comfortable",
        size: "md",
        className: "gap-6",
      },
      // Enterprise theme specifics
      {
        theme: "enterprise",
        shadow: "md",
        className: "border-b border-border shadow-sm",
      },
      // Tech Dark theme specifics
      {
        theme: "techDark",
        shadow: "md",
        className: "border-b border-gray-700 shadow-md bg-gray-900 text-gray-100",
      },
      {
        theme: "techDark",
        visualStyle: "floating",
        className: "bg-gray-900 text-gray-100 shadow-lg",
      },
      {
        theme: "techDark",
        visualStyle: "gradient",
        className: "bg-gradient-to-r from-gray-900 to-gray-800 text-gray-100",
      },
      {
        theme: "techDark",
        visualStyle: "glowing",
        className: "bg-gray-900 text-gray-100 shadow-[0_0_20px_rgba(139,92,246,0.5)]",
      },
      // Glass theme specifics
      {
        theme: "glass",
        className: "bg-white/30 backdrop-blur-md border-white/20",
      },
      // Glass visual style variations
      {
        theme: "glass",
        visualStyle: "floating",
        className: "bg-white/20 backdrop-blur-xl shadow-lg border border-white/20",
      },
      {
        theme: "glass",
        visualStyle: "pill",
        className: "bg-white/20 backdrop-blur-md rounded-full border border-white/20",
      },
      {
        theme: "glass",
        visualStyle: "glowing",
        className: "bg-white/20 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.5)]",
      },
      {
        theme: "glass",
        visualStyle: "gradient",
        className: "bg-gradient-to-r from-white/30 to-white/10 backdrop-blur-md",
      },
      {
        theme: "glass",
        visualStyle: "glassmorphism",
        className: "bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg",
      },
      {
        theme: "glass",
        visualStyle: "frosted",
        className: "bg-white/5 backdrop-blur-2xl border border-white/10 shadow-lg",
      },
      // Neumorphic theme specifics - Enhanced
      {
        theme: "neumorphic",
        rounded: "lg",
        className: "rounded-lg",
      },
      {
        theme: "neumorphic",
        visualStyle: "neumorphicFlat",
        className: "shadow-[5px_5px_10px_#d9d9d9,-5px_-5px_10px_#ffffff]",
      },
      {
        theme: "neumorphic",
        visualStyle: "neumorphicPressed",
        className: "shadow-[inset_5px_5px_10px_#d9d9d9,inset_-5px_-5px_10px_#ffffff]",
      },
      {
        theme: "neumorphic",
        visualStyle: "neumorphicConvex",
        className: "shadow-[5px_5px_10px_#d9d9d9,-5px_-5px_10px_#ffffff]",
      },
      {
        theme: "neumorphic",
        visualStyle: "glowing",
        className: "shadow-[0_0_20px_rgba(59,130,246,0.5),5px_5px_10px_#d9d9d9,-5px_-5px_10px_#ffffff]",
      },
      {
        theme: "neumorphic",
        visualStyle: "pill",
        className: "rounded-full shadow-[5px_5px_10px_#d9d9d9,-5px_-5px_10px_#ffffff]",
      },
      {
        theme: "neumorphic",
        visualStyle: "gradient",
        className: "bg-gradient-to-r from-blue-50 to-white shadow-[5px_5px_10px_#d9d9d9,-5px_-5px_10px_#ffffff]",
      },
      // Animation variants
      {
        animation: "slide",
        orientation: "horizontal",
        className: "transition-transform duration-500 ease-in-out",
      },
      {
        animation: "slide",
        orientation: "vertical",
        className: "transition-transform duration-500 ease-in-out",
      },
      {
        animation: "bounce",
        className: "hover:[&>*]:animate-bounce-gentle",
      },
      {
        animation: "elastic",
        className: "hover:[&>*]:animate-elastic",
      },
      {
        animation: "spring",
        className: "hover:[&>*]:animate-spring",
      },
      // Visual style variants - Enterprise
      {
        visualStyle: "gradient",
        theme: "enterprise",
        className: "from-primary-light to-primary text-primary-foreground",
      },
      {
        visualStyle: "glowing",
        theme: "enterprise",
        className: "shadow-[0_0_20px_rgba(59,130,246,0.5)]",
      },
    ],
    defaultVariants: {
      theme: "enterprise",
      display: "default",
      orientation: "horizontal",
      size: "md",
      alignment: "start",
      padding: "md",
      border: "none",
      shadow: "none",
      rounded: "lg",
      animation: "fade",
      visualStyle: "default",
      density: "default",
    }
  }
);

// Define variants for the navbar item
const navbarItemVariants = cva(
  "relative flex items-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-1 whitespace-nowrap",
  {
    variants: {
      // Theme variants
      theme: {
        enterprise: "text-foreground-secondary hover:text-foreground-primary focus:ring-primary",
        techDark: "text-gray-300 hover:text-white focus:ring-purple-500",
        glass: "text-foreground-secondary hover:text-foreground-primary focus:ring-white",
        neumorphic: "text-gray-700 hover:text-gray-900 focus:ring-blue-500",
      },
      // Display mode variants
      display: {
        default: "",
        iconsOnly: "p-2 justify-center",
        textOnly: "",
      },
      // Size of the navbar items
      size: {
        xs: "px-1 py-0.5 text-xs",
        sm: "px-2 py-1 text-sm",
        md: "px-3 py-2 text-base",
        lg: "px-4 py-3 text-lg",
      },
      // Whether item is active
      active: {
        true: "",
        false: "",
      },
      // Visual style of the item
      variant: {
        text: "",
        filled: "",
        outlined: "border",
        underlined: "border-b-2 border-transparent",
        minimal: "",
        neumorphic: "transition-all duration-300",
        neumorphicInset: "transition-all duration-300",
        neumorphicConvex: "transition-all duration-300",
        glassy: "backdrop-blur-sm transition-all duration-300",
        pill: "rounded-full",
        floating: "shadow-md",
        glowing: "transition-all duration-300",
        gradient: "bg-gradient-to-r",
      },
      // Item position
      position: {
        auto: "", // Will align based on parent orientation
        inline: "inline-flex",
        block: "block w-full",
      },
      // Disabled state
      disabled: {
        true: "opacity-50 cursor-not-allowed pointer-events-none",
        false: "",
      },
      // Rounded corners
      rounded: {
        none: "rounded-none",
        xs: "rounded-xs",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
      },
      // Hover effects
      hoverEffect: {
        none: "",
        fade: "transition-opacity duration-300 hover:opacity-80",
        grow: "transition-transform duration-300 hover:scale-105",
        shrink: "transition-transform duration-300 hover:scale-95",
        glow: "transition-shadow duration-300",
        slide: "overflow-hidden relative",
        underline: "hover:underline",
        lift: "transition-all duration-300 hover:-translate-y-1",
        press: "transition-all duration-100 active:translate-y-0.5",
        tilt: "transition-transform duration-300 hover:[transform:perspective(1000px)_rotateX(2deg)_rotateY(2deg)]",
      },
      // Animation effects
      animation: {
        none: "",
        bounce: "hover:animate-bounce-gentle",
        pulse: "hover:animate-pulse",
        spin: "hover:animate-spin",
        shimmer: "overflow-hidden",
        wobble: "hover:animate-wobble",
        elastic: "hover:animate-elastic",
        blink: "hover:animate-blink",
        spring: "hover:animate-spring",
      },
    },
    compoundVariants: [
      // Display mode specifics
      {
        display: "iconsOnly",
        className: "w-10 h-10 p-0",
      },
      // Active states for different themes
      {
        theme: "enterprise",
        active: true,
        className: "text-primary font-medium",
      },
      {
        theme: "techDark",
        active: true,
        className: "text-purple-400 font-medium",
      },
      {
        theme: "glass",
        active: true,
        className: "text-white font-medium",
      },
      {
        theme: "neumorphic",
        active: true,
        className: "text-blue-600 font-medium",
      },
      // Active states for different variants
      {
        variant: "filled",
        active: true,
        theme: "enterprise",
        className: "bg-primary text-primary-foreground",
      },
      {
        variant: "filled",
        active: true,
        theme: "techDark",
        className: "bg-purple-600 text-white",
      },
      {
        variant: "filled",
        active: false,
        theme: "enterprise",
        className: "bg-background-secondary hover:bg-background-tertiary",
      },
      {
        variant: "filled",
        active: false,
        theme: "techDark",
        className: "bg-gray-800 hover:bg-gray-700",
      },
      {
        variant: "outlined",
        active: true,
        theme: "enterprise",
        className: "border-primary",
      },
      {
        variant: "outlined",
        active: true,
        theme: "techDark",
        className: "border-purple-500",
      },
      {
        variant: "outlined",
        active: false,
        theme: "enterprise",
        className: "border-border hover:border-primary",
      },
      {
        variant: "outlined",
        active: false,
        theme: "techDark",
        className: "border-gray-700 hover:border-purple-500",
      },
      {
        variant: "underlined",
        active: true,
        theme: "enterprise",
        className: "border-primary",
      },
      {
        variant: "underlined",
        active: true,
        theme: "techDark",
        className: "border-purple-500",
      },
      {
        variant: "underlined",
        active: false,
        theme: "enterprise",
        className: "border-transparent hover:border-border",
      },
      {
        variant: "underlined",
        active: false,
        theme: "techDark",
        className: "border-transparent hover:border-gray-700",
      },
      {
        variant: "minimal",
        active: true,
        className: "font-medium",
      },
      {
        variant: "pill",
        active: true,
        theme: "enterprise",
        className: "bg-primary text-primary-foreground",
      },
      {
        variant: "pill",
        active: true,
        theme: "techDark",
        className: "bg-purple-600 text-white",
      },
      {
        variant: "pill",
        active: false,
        theme: "enterprise",
        className: "hover:bg-background-secondary",
      },
      {
        variant: "pill",
        active: false,
        theme: "techDark",
        className: "hover:bg-gray-800",
      },
      {
        variant: "floating",
        active: true,
        theme: "enterprise",
        className: "shadow-md bg-primary text-primary-foreground",
      },
      {
        variant: "floating",
        active: true,
        theme: "techDark",
        className: "shadow-md bg-purple-600 text-white",
      },
      {
        variant: "floating",
        active: false,
        theme: "enterprise",
        className: "shadow-md hover:shadow-lg hover:bg-background-secondary",
      },
      {
        variant: "floating",
        active: false,
        theme: "techDark",
        className: "shadow-md hover:shadow-lg hover:bg-gray-800",
      },
      // Neumorphic variants - Enhanced with more refined shadows and transitions
      {
        variant: "neumorphic",
        theme: "neumorphic",
        className: "bg-neutral-100 shadow-[3px_3px_6px_#d1d1d1,-3px_-3px_6px_#ffffff] hover:shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff]",
      },
      {
        variant: "neumorphic",
        active: true,
        theme: "neumorphic",
        className: "bg-neutral-100 shadow-[3px_3px_6px_#d1d1d1,-3px_-3px_6px_#ffffff] text-blue-600 font-medium",
      },
      {
        variant: "neumorphicInset",
        theme: "neumorphic",
        className: "bg-neutral-100 shadow-[inset_3px_3px_6px_#d1d1d1,inset_-3px_-3px_6px_#ffffff] hover:shadow-[inset_4px_4px_8px_#d1d1d1,inset_-4px_-4px_8px_#ffffff]",
      },
      {
        variant: "neumorphicInset",
        active: true,
        theme: "neumorphic",
        className: "bg-neutral-100 shadow-[inset_3px_3px_6px_#d1d1d1,inset_-3px_-3px_6px_#ffffff] text-blue-600 font-medium",
      },
      {
        variant: "neumorphicConvex",
        theme: "neumorphic",
        className: "bg-gradient-to-br from-white to-neutral-200 shadow-[3px_3px_6px_#d1d1d1,-3px_-3px_6px_#ffffff]",
      },
      {
        variant: "neumorphicConvex",
        active: true,
        theme: "neumorphic",
        className: "bg-gradient-to-br from-white to-neutral-200 shadow-[3px_3px_6px_#d1d1d1,-3px_-3px_6px_#ffffff] text-blue-600",
      },
      // Glass effects
      {
        variant: "glassy",
        theme: "glass",
        className: "bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10",
      },
      {
        variant: "glassy",
        active: true,
        theme: "glass",
        className: "bg-white/20 backdrop-blur-md border border-white/20 text-white font-medium",
      },
      {
        theme: "glass",
        variant: "filled",
        className: "bg-white/10 hover:bg-white/20 backdrop-blur-sm",
      },
      {
        theme: "glass",
        variant: "outlined",
        className: "border-white/20 hover:border-white/40 backdrop-blur-sm",
      },
      {
        theme: "glass",
        variant: "floating",
        className: "bg-white/10 hover:bg-white/20 backdrop-blur-sm shadow-lg",
      },
      // Tech Dark glass effects
      {
        variant: "glassy",
        theme: "techDark",
        className: "bg-gray-800/60 hover:bg-gray-700/60 backdrop-blur-md border border-gray-600/30",
      },
      {
        variant: "glassy",
        active: true,
        theme: "techDark",
        className: "bg-purple-900/40 backdrop-blur-md border border-purple-500/30 text-purple-300 font-medium",
      },
      // Hover effect variations - Enhanced
      {
        hoverEffect: "glow",
        theme: "enterprise",
        className: "hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]",
      },
      {
        hoverEffect: "glow",
        theme: "techDark",
        className: "hover:shadow-[0_0_15px_rgba(139,92,246,0.5)]",
      },
      {
        hoverEffect: "glow",
        theme: "glass",
        className: "hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]",
      },
      {
        hoverEffect: "glow",
        theme: "neumorphic",
        className: "hover:shadow-[0_0_15px_rgba(59,130,246,0.3),3px_3px_6px_#d1d1d1,-3px_-3px_6px_#ffffff]",
      },
      {
        hoverEffect: "slide",
        className: "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-100%] hover:before:animate-shimmer",
      },
      {
        hoverEffect: "tilt",
        theme: "glass",
        className: "transform-gpu",
      },
      {
        hoverEffect: "tilt",
        theme: "neumorphic",
        className: "transform-gpu",
      },
      // Animation effect variations
      {
        animation: "shimmer",
        className: "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-100%] hover:before:animate-shimmer",
      },
      {
        animation: "wobble",
        className: "transform-gpu",
      },
      {
        animation: "elastic",
        className: "transform-gpu",
      },
      {
        animation: "spring",
        className: "transform-gpu",
      },
      {
        animation: "blink",
        className: "transform-gpu",
      },
      // Gradient effects
      {
        variant: "gradient",
        theme: "enterprise",
        className: "from-primary-light to-primary text-primary-foreground",
      },
      {
        variant: "gradient",
        theme: "techDark",
        className: "from-purple-900 to-purple-600 text-white",
      },
      {
        variant: "gradient",
        theme: "glass",
        className: "from-white/10 to-white/20 backdrop-blur-sm",
      },
      {
        variant: "gradient",
        theme: "neumorphic",
        className: "from-blue-400 to-blue-600 text-white shadow-[3px_3px_6px_#d1d1d1,-3px_-3px_6px_#ffffff]",
      },
      // Display mode and icon adjustments
      {
        display: "iconsOnly",
        size: "md",
        className: "w-10 h-10 p-0",
      },
      {
        display: "iconsOnly",
        size: "sm",
        className: "w-8 h-8 p-0",
      },
      {
        display: "iconsOnly",
        size: "lg", 
        className: "w-12 h-12 p-0",
      },
      {
        display: "iconsOnly",
        size: "xs",
        className: "w-6 h-6 p-0",
      },
    ],
    defaultVariants: {
      theme: "enterprise",
      display: "default",
      size: "md",
      active: false,
      variant: "text",
      position: "auto",
      disabled: false,
      rounded: "md",
      hoverEffect: "none",
      animation: "none",
    }
  }
);

// Add custom CSS keyframes for animations in the global scope
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes bounce-gentle {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-6px); }
    }
    @keyframes wobble {
      0%, 100% { transform: translateX(0); }
      15% { transform: translateX(-6px) rotate(-5deg); }
      30% { transform: translateX(5px) rotate(3deg); }
      45% { transform: translateX(-5px) rotate(-3deg); }
      60% { transform: translateX(3px) rotate(2deg); }
      75% { transform: translateX(-2px) rotate(-1deg); }
      85% { transform: translateX(2px) rotate(1deg); }
    }
    @keyframes elastic {
      0% { transform: scale(1); }
      25% { transform: scale(1.1); }
      50% { transform: scale(0.9); }
      75% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }
    @keyframes spring {
      0% { transform: translateY(0); }
      40% { transform: translateY(-8px); }
      60% { transform: translateY(4px); }
      80% { transform: translateY(-2px); }
      100% { transform: translateY(0); }
    }
    @keyframes shimmer {
      100% { transform: translateX(100%); }
    }
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.7; }
    }
    .ease-elastic {
      transition-timing-function: cubic-bezier(0.68, -0.6, 0.32, 1.6);
    }
    .ease-spring {
      transition-timing-function: cubic-bezier(0.68, -0.45, 0.265, 1.55);
    }
    .shadow-glow {
      box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
    }
    .shadow-white-glow {
      box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
    }
    .shadow-purple-glow {
      box-shadow: 0 0 15px rgba(139, 92, 246, 0.5);
    }
    .shadow-blue-glow {
      box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
    }
    .animate-bounce-gentle {
      animation: bounce-gentle 2s ease infinite;
    }
    .animate-wobble {
      animation: wobble 1s ease;
    }
    .animate-elastic {
      animation: elastic 0.5s cubic-bezier(0.68, -0.6, 0.32, 1.6);
    }
    .animate-spring {
      animation: spring 0.8s cubic-bezier(0.68, -0.45, 0.265, 1.55);
    }
    .animate-shimmer {
      animation: shimmer 2s forwards;
    }
    .animate-blink {
      animation: blink 1s ease-in-out infinite;
    }
  `;
  document.head.appendChild(style);
}

// UltimateNavbar Component
const UltimateNavbar = memo(forwardRef(({
  children,
  className,
  theme: themeProp,
  display,
  orientation,
  size,
  alignment,
  padding,
  border,
  shadow,
  rounded,
  animation,
  visualStyle,
  density,
  dividers = false,
  responsive = false,
  collapseBreakpoint = 'md',
  collapsible = false,
  collapseIcon,
  expandIcon,
  tooltipsEnabled = false,
  themeToggle = false,
  glowOnHover = false,
  sticky = false,
  backdrop = false,
  ...props
}, ref) => {
  const { theme: contextTheme } = useSafeTheme();
  const [activeTheme, setActiveTheme] = useState(themeProp || contextTheme || 'enterprise');
  
  const [isCollapsed, setIsCollapsed] = useState(collapsible);
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarRef = useRef(null);
  
  // Handle screen size changes for responsive behavior
  useEffect(() => {
    if (!responsive) return;
    
    const checkScreenSize = () => {
      // Convert collapseBreakpoint to pixel value
      const breakpoints = {
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        '2xl': 1536,
      };
      
      const breakpointValue = breakpoints[collapseBreakpoint] || 768;
      setIsMobile(window.innerWidth < breakpointValue);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, [responsive, collapseBreakpoint]);
  
  // Handle scroll effects for sticky navbar
  useEffect(() => {
    if (!sticky) return;
    
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sticky]);
  
  // Toggle collapsed state
  const toggleCollapse = useCallback(() => {
    setIsCollapsed(prev => !prev);
  }, []);
  
  // Toggle theme
  const toggleTheme = useCallback(() => {
    setActiveTheme(theme => {
      if (theme === 'enterprise') return 'techDark';
      if (theme === 'techDark') return 'glass';
      if (theme === 'glass') return 'neumorphic';
      return 'enterprise';
    });
  }, []);
  
  // Determine the current state - collapsed or not
  const currentlyCollapsed = collapsible && isCollapsed;
  
  // Determine orientation based on responsive settings
  const effectiveOrientation = (responsive && isMobile) ? 'vertical' : orientation;
  
  // Build navbar classes
  const navbarClasses = navbarVariants({
    theme: activeTheme,
    display,
    orientation: effectiveOrientation,
    size,
    alignment,
    padding,
    border,
    shadow: scrollPosition > 50 ? 'md' : shadow, // Add shadow when scrolling
    rounded,
    animation,
    visualStyle,
    density,
    className,
  });
  
  // Add divider styling to children if needed
  const childrenWithDividers = React.Children.map(children, (child, index) => {
    if (!child || index === 0 || !dividers) return child;
    
    // Add divider styling based on orientation
    const dividerClass = effectiveOrientation === 'horizontal' 
      ? 'border-l border-opacity-30 mx-2 h-6' 
      : 'border-t border-opacity-30 w-full my-1';
    
    const dividerColorClass = activeTheme === 'enterprise' ? 'border-border' : 
                             activeTheme === 'techDark' ? 'border-gray-700' :
                             activeTheme === 'glass' ? 'border-white/30' : 'border-gray-300';
    
    return (
      <>
        <div className={`${dividerClass} ${dividerColorClass}`} />
        {child}
      </>
    );
  });
  
  // Apply display mode to children if needed
  const processedChildren = React.Children.map(childrenWithDividers, (child) => {
    if (!child) return null;
    
    // Pass down display mode to child items
    if (child.type && (child.type.displayName === 'NavbarItem' || child.type.displayName === 'UltimateNavbarItem')) {
      return React.cloneElement(child, {
        display: display || child.props.display,
        tooltipEnabled: tooltipsEnabled && display === 'iconsOnly',
        theme: activeTheme,
      });
    }
    
    return child;
  });
  
  // Apply animation effects
  const getAnimationStyles = () => {
    if (animation === 'slide' && currentlyCollapsed) {
      return effectiveOrientation === 'horizontal' 
        ? { transform: 'translateX(-100%)' } 
        : { transform: 'translateY(-100%)' };
    }
    if (animation === 'fade' && currentlyCollapsed) {
      return { opacity: 0 };
    }
    if (animation === 'scale' && currentlyCollapsed) {
      return { transform: 'scale(0.95)', opacity: 0 };
    }
    
    return {};
  };

  // Handle hover effects for glow
  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);
  
  // Get additional shadow for hover effect
  const getHoverStyle = () => {
    if (!glowOnHover) return {};
    
    if (isHovered) {
      if (activeTheme === 'enterprise') {
        return { boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' };
      }
      if (activeTheme === 'techDark') {
        return { boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)' };
      }
      if (activeTheme === 'glass') {
        return { boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)' };
      }
      if (activeTheme === 'neumorphic') {
        return { boxShadow: '0 0 20px rgba(59, 130, 246, 0.3), 7px 7px 14px #d1d1d1, -7px -7px 14px #ffffff' };
      }
    }
    return {};
  };
  
  // Get sticky styles
  const getStickyStyles = () => {
    if (!sticky) return {};
    
    return {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      transition: 'all 0.3s ease-in-out',
      ...(scrollPosition > 50 && { backdropFilter: 'blur(10px)' }),
    };
  };
  
  // Framer motion animations
  const containerVariants = {
    hidden: { 
      opacity: 0, 
      y: effectiveOrientation === 'horizontal' ? -20 : 0,
      x: effectiveOrientation === 'vertical' ? -20 : 0,
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0,
      transition: { 
        duration: 0.5, 
        ease: [0.45, 0, 0.55, 1],
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };
  
  return (
    <motion.nav
      ref={navbarRef || ref}
      className={cn(
        navbarClasses,
        (responsive && isMobile) && "flex-col items-start",
        currentlyCollapsed && "h-10 overflow-hidden",
        "transition-all duration-500",
        backdrop && "backdrop-blur-md",
      )}
      style={{
        ...getAnimationStyles(),
        ...getHoverStyle(),
        ...getStickyStyles(),
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      {...props}
    >
      {/* Collapse toggle button when needed */}
      {(collapsible || (responsive && isMobile)) && (
        <button
          type="button"
          className={cn(
            "p-2 rounded-md mb-2 transition-all duration-300",
            activeTheme === 'enterprise' && "text-foreground-secondary hover:text-foreground-primary hover:bg-background-secondary", 
            activeTheme === 'techDark' && "text-gray-400 hover:text-white hover:bg-gray-800",
            activeTheme === 'glass' && "text-white/80 hover:text-white hover:bg-white/10",
            activeTheme === 'neumorphic' && "shadow-[3px_3px_6px_#d1d1d1,-3px_-3px_6px_#ffffff] bg-neutral-100 text-gray-700 hover:text-gray-900 hover:shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff]"
          )}
          onClick={toggleCollapse}
          aria-expanded={!isCollapsed}
        >
          <span className="sr-only">
            {isCollapsed ? 'Expand navigation' : 'Collapse navigation'}
          </span>
          {isCollapsed ? (
            expandIcon || (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )
          ) : (
            collapseIcon || (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )
          )}
        </button>
      )}
      
      {/* Theme toggle button */}
      {themeToggle && (
        <button
          type="button"
          className={cn(
            "p-2 rounded-md ml-auto transition-all duration-300",
            activeTheme === 'enterprise' && "text-foreground-secondary hover:text-foreground-primary hover:bg-background-secondary", 
            activeTheme === 'techDark' && "text-gray-400 hover:text-white hover:bg-gray-800",
            activeTheme === 'glass' && "text-white/80 hover:text-white hover:bg-white/10",
            activeTheme === 'neumorphic' && "shadow-[3px_3px_6px_#d1d1d1,-3px_-3px_6px_#ffffff] bg-neutral-100 text-gray-700 hover:text-gray-900 hover:shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff]"
          )}
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {activeTheme === 'enterprise' && (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
          {activeTheme === 'techDark' && (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          )}
          {activeTheme === 'glass' && (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          )}
          {activeTheme === 'neumorphic' && (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          )}
        </button>
      )}
      
      {/* If collapsed, don't render the children */}
      <AnimatePresence>
        {!currentlyCollapsed && (
          <motion.div 
            className="flex items-center w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {processedChildren}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}));

// UltimateNavbarItem Component
const UltimateNavbarItem = memo(forwardRef(({
  children,
  className,
  theme: themeProp,
  display,
  size,
  active,
  variant,
  position,
  disabled,
  rounded,
  hoverEffect,
  animation,
  icon,
  href,
  onClick,
  tooltip,
  tooltipEnabled = false,
  tooltipPosition = 'bottom',
  badge,
  badgeContent,
  badgeColor = 'primary',
  iconAnimation,
  showRipple = false,
  ...props
}, ref) => {
  const { theme: contextTheme } = useSafeTheme();
  const [activeTheme, setActiveTheme] = useState(themeProp || contextTheme || 'enterprise');
  
  // State for tooltip visibility
  const [showTooltip, setShowTooltip] = useState(false);
  // State for hover/active effects
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  // State for ripple effect
  const [ripples, setRipples] = useState([]);
  
  // Build navbar item classes
  const itemClasses = navbarItemVariants({
    theme: activeTheme,
    display,
    size,
    active,
    variant,
    position,
    disabled,
    rounded,
    hoverEffect,
    animation,
    className,
  });
  
  // Enhanced hover/press effect styles
  const getEnhancedStyles = () => {
    // Return different styles based on component state and variant
    if (disabled) return {};
    
    if (variant === 'neumorphic' || variant === 'neumorphicConvex') {
      if (isPressed) {
        return { 
          boxShadow: 'inset 3px 3px 6px #d1d1d1, inset -3px -3px 6px #ffffff',
          transform: 'translateY(1px)'
        };
      }
      if (isHovered) {
        return { 
          boxShadow: '5px 5px 10px #d1d1d1, -5px -5px 10px #ffffff',
        };
      }
    }
    
    if (variant === 'neumorphicInset') {
      if (isHovered && !isPressed) {
        return { 
          boxShadow: 'inset 4px 4px 8px #d1d1d1, inset -4px -4px 8px #ffffff',
        };
      }
    }
    
    if (hoverEffect === 'glow' && isHovered) {
      if (activeTheme === 'neumorphic') {
        return { 
          boxShadow: '0 0 15px rgba(59, 130, 246, 0.4), 3px 3px 6px #d1d1d1, -3px -3px 6px #ffffff',
        };
      }
      if (activeTheme === 'enterprise') {
        return { boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)' };
      }
      if (activeTheme === 'techDark') {
        return { boxShadow: '0 0 15px rgba(139, 92, 246, 0.5)' };
      }
      if (activeTheme === 'glass') {
        return { boxShadow: '0 0 15px rgba(255, 255, 255, 0.5)' };
      }
    }
    
    return {};
  };
  
  // Handle ripple effect
  const addRipple = useCallback((e) => {
    if (!showRipple) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const ripple = {
      x,
      y,
      size: Math.max(rect.width, rect.height) * 2,
      id: Date.now(),
    };
    
    setRipples((prevRipples) => [...prevRipples, ripple]);
    
    // Clean up ripple after animation
    setTimeout(() => {
      setRipples((prevRipples) => prevRipples.filter((r) => r.id !== ripple.id));
    }, 1000);
  }, [showRipple]);
  
  // Get badge color
  const getBadgeColorClass = () => {
    if (activeTheme === 'enterprise') {
      if (badgeColor === 'primary') return "bg-primary text-primary-foreground";
      if (badgeColor === 'success') return "bg-green-500 text-white";
      if (badgeColor === 'warning') return "bg-yellow-500 text-white";
      if (badgeColor === 'danger') return "bg-red-500 text-white";
      return "bg-gray-500 text-white";
    }
    
    if (activeTheme === 'techDark') {
      if (badgeColor === 'primary') return "bg-purple-600 text-white";
      if (badgeColor === 'success') return "bg-green-400 text-black";
      if (badgeColor === 'warning') return "bg-yellow-400 text-black";
      if (badgeColor === 'danger') return "bg-red-400 text-white";
      return "bg-gray-500 text-white";
    }
    
    if (activeTheme === 'glass') {
      if (badgeColor === 'primary') return "bg-white/20 backdrop-blur-sm text-white border border-white/40";
      if (badgeColor === 'success') return "bg-green-500/70 backdrop-blur-sm text-white";
      if (badgeColor === 'warning') return "bg-yellow-500/70 backdrop-blur-sm text-white";
      if (badgeColor === 'danger') return "bg-red-500/70 backdrop-blur-sm text-white";
      return "bg-white/40 backdrop-blur-sm text-white";
    }
    
    if (activeTheme === 'neumorphic') {
      if (badgeColor === 'primary') return "bg-blue-500 text-white shadow-[1px_1px_2px_#d1d1d1,-1px_-1px_2px_#ffffff]";
      if (badgeColor === 'success') return "bg-green-500 text-white shadow-[1px_1px_2px_#d1d1d1,-1px_-1px_2px_#ffffff]";
      if (badgeColor === 'warning') return "bg-yellow-500 text-white shadow-[1px_1px_2px_#d1d1d1,-1px_-1px_2px_#ffffff]";
      if (badgeColor === 'danger') return "bg-red-500 text-white shadow-[1px_1px_2px_#d1d1d1,-1px_-1px_2px_#ffffff]";
      return "bg-gray-500 text-white shadow-[1px_1px_2px_#d1d1d1,-1px_-1px_2px_#ffffff]";
    }
    
    return "bg-gray-500 text-white";
  };
  
  // Handle icon placement with animations
  const getIconContent = () => {
    if (!icon) return null;
    
    // Apply animation classes
    const iconAnimClass = iconAnimation === 'spin' ? "hover:animate-spin" :
                          iconAnimation === 'pulse' ? "hover:animate-pulse" :
                          iconAnimation === 'bounce' ? "hover:animate-bounce-gentle" :
                          iconAnimation === 'shake' ? "hover:animate-wobble" :
                          iconAnimation === 'elastic' ? "hover:animate-elastic" :
                          iconAnimation === 'blink' ? "hover:animate-blink" :
                          iconAnimation === 'spring' ? "hover:animate-spring" : "";
    
    return (
      <motion.span 
        className={cn(
          display === 'default' ? "mr-2" : "",
          "flex items-center justify-center transition-transform duration-300",
          iconAnimClass
        )}
        initial={{ scale: 1 }}
        animate={{ 
          scale: animation === 'elastic' && isHovered ? [1, 1.1, 0.9, 1.05, 1] : 1,
          y: animation === 'bounce' && isHovered ? [0, -6, 0] : 0
        }}
        transition={{ 
          duration: 0.5,
          ease: "easeInOut",
          times: [0, 0.25, 0.5, 0.75, 1]
        }}
      >
        {icon}
      </motion.span>
    );
  };
  
  // Handle icon placement
  const content = (
    <>
      {getIconContent()}
      {(display === 'default' || display === 'textOnly') && children}
      
      {/* Badge */}
      {badge && (
        <motion.span 
          className={cn(
            "absolute -top-1 -right-1 flex items-center justify-center text-xs font-bold",
            getBadgeColorClass(),
            "rounded-full min-w-5 h-5 px-1"
          )}
          initial={{ scale: 1 }}
          animate={{ 
            scale: isHovered ? 1.1 : 1,
            y: animation === 'bounce' && isHovered ? [0, -3, 0] : 0
          }}
          transition={{ 
            duration: 0.5,
            ease: "easeInOut"
          }}
        >
          {badgeContent}
        </motion.span>
      )}
      
      {/* Tooltip */}
      <AnimatePresence>
        {tooltipEnabled && tooltip && showTooltip && (
          <motion.div 
            className={cn(
              "absolute z-50 px-2 py-1 text-xs rounded-md shadow-md",
              activeTheme === 'enterprise' && "bg-background-secondary text-foreground-primary",
              activeTheme === 'techDark' && "bg-gray-800 text-gray-100",
              activeTheme === 'glass' && "bg-white/10 backdrop-blur-lg text-white border border-white/20",
              activeTheme === 'neumorphic' && "bg-white shadow-[2px_2px_4px_#d1d1d1,-2px_-2px_4px_#ffffff] text-gray-800",
              tooltipPosition === 'top' && "bottom-full mb-2 left-1/2 transform -translate-x-1/2",
              tooltipPosition === 'bottom' && "top-full mt-2 left-1/2 transform -translate-x-1/2",
              tooltipPosition === 'left' && "right-full mr-2 top-1/2 transform -translate-y-1/2",
              tooltipPosition === 'right' && "left-full ml-2 top-1/2 transform -translate-y-1/2",
            )}
            initial={{ opacity: 0, y: tooltipPosition === 'top' ? 5 : tooltipPosition === 'bottom' ? -5 : 0, x: tooltipPosition === 'left' ? 5 : tooltipPosition === 'right' ? -5 : 0 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: tooltipPosition === 'top' ? 5 : tooltipPosition === 'bottom' ? -5 : 0, x: tooltipPosition === 'left' ? 5 : tooltipPosition === 'right' ? -5 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {tooltip || children}
            <div className={cn(
              "absolute w-2 h-2 rotate-45",
              activeTheme === 'enterprise' && "bg-background-secondary",
              activeTheme === 'techDark' && "bg-gray-800",
              activeTheme === 'glass' && "bg-white/10",
              activeTheme === 'neumorphic' && "bg-white",
              tooltipPosition === 'top' && "bottom-0 mb-[-4px] left-1/2 ml-[-4px]",
              tooltipPosition === 'bottom' && "top-0 mt-[-4px] left-1/2 ml-[-4px]",
              tooltipPosition === 'left' && "right-0 mr-[-4px] top-1/2 mt-[-4px]",
              tooltipPosition === 'right' && "left-0 ml-[-4px] top-1/2 mt-[-4px]",
            )}></div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Ripple effect */}
      {showRipple && ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-white/20 pointer-events-none animate-ripple"
          style={{
            left: ripple.x - ripple.size / 2,
            top: ripple.y - ripple.size / 2,
            width: ripple.size,
            height: ripple.size,
          }}
        />
      ))}
    </>
  );
  
  // Extended handlers for enhanced effects
  const handleMouseEnter = () => {
    setIsHovered(true);
    if (tooltipEnabled) {
      setShowTooltip(true);
    }
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsPressed(false);
    if (tooltipEnabled) {
      setShowTooltip(false);
    }
  };
  
  const handleMouseDown = (e) => {
    setIsPressed(true);
    if (showRipple) {
      addRipple(e);
    }
  };
  
  const handleMouseUp = () => {
    setIsPressed(false);
  };
  
  // Motion variants for animations
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: hoverEffect === 'grow' ? 1.05 : 
             hoverEffect === 'shrink' ? 0.95 : 1,
      y: hoverEffect === 'lift' ? -4 : 0,
      boxShadow: hoverEffect === 'glow' ? '0 0 15px rgba(59, 130, 246, 0.5)' : '',
      transition: { duration: 0.3 }
    },
    pressed: { 
      scale: 0.98, 
      y: 1,
      transition: { duration: 0.1 }
    }
  };
  
  // Render as link or button
  if (href && !disabled) {
    return (
      <motion.a
        ref={ref}
        href={href}
        className={itemClasses}
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        style={getEnhancedStyles()}
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        whileTap="pressed"
        {...props}
      >
        {content}
      </motion.a>
    );
  }
  
  return (
    <motion.button
      ref={ref}
      type="button"
      className={itemClasses}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      style={getEnhancedStyles()}
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
      whileTap="pressed"
      {...props}
    >
      {content}
    </motion.button>
  );
}));

// UltimateNavbarSection Component for grouping items
const UltimateNavbarSection = memo(forwardRef(({
  children,
  className,
  title,
  collapsible = false,
  defaultCollapsed = false,
  theme: themeProp,
  icon,
  rounded = "md",
  shadow = "none",
  animation = "fade",
  hoverEffect = false,
  divider = false,
  ...props
}, ref) => {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  const [isHovered, setIsHovered] = useState(false);
  const { theme: contextTheme } = useSafeTheme();
  const activeTheme = themeProp || contextTheme || 'enterprise';
  
  // Toggle collapsed state
  const toggleCollapse = useCallback(() => {
    setIsCollapsed(prev => !prev);
  }, []);
  
  // Handle mouse enter/leave for hover effects
  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);
  
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);
  
  // Get enhanced styles for the section
  const getSectionStyles = useCallback(() => {
    if (!hoverEffect) return {};
    
    if (activeTheme === 'neumorphic' && isHovered) {
      return { boxShadow: '3px 3px 6px #d9d9d9, -3px -3px 6px #ffffff' };
    }
    
    if (activeTheme === 'enterprise' && isHovered) {
      return { backgroundColor: 'rgba(0, 0, 0, 0.03)' };
    }
    
    if (activeTheme === 'techDark' && isHovered) {
      return { backgroundColor: 'rgba(255, 255, 255, 0.05)' };
    }
    
    if (activeTheme === 'glass' && isHovered) {
      return { backgroundColor: 'rgba(255, 255, 255, 0.1)' };
    }
    
    return {};
  }, [activeTheme, isHovered, hoverEffect]);
  
  // Motion variants
  const sectionVariants = {
    collapsed: { 
      height: 0, 
      opacity: 0,
      transition: { 
        height: { duration: 0.3, ease: "easeInOut" },
        opacity: { duration: 0.2, ease: "easeOut" }
      }
    },
    expanded: { 
      height: "auto", 
      opacity: 1,
      transition: { 
        height: { duration: 0.3, ease: "easeInOut" },
        opacity: { duration: 0.3, delay: 0.1, ease: "easeIn" }
      }
    }
  };
  
  // Get divider styles
  const getDividerClass = () => {
    if (!divider) return "";
    
    const baseClass = "border-t my-2";
    if (activeTheme === 'enterprise') return `${baseClass} border-border/30`;
    if (activeTheme === 'techDark') return `${baseClass} border-gray-700/30`;
    if (activeTheme === 'glass') return `${baseClass} border-white/20`;
    if (activeTheme === 'neumorphic') return `${baseClass} border-gray-300/30`;
    
    return `${baseClass} border-gray-300/30`;
  };
  
  return (
    <div
      ref={ref}
      className={cn(
        "w-full transition-all duration-300",
        animation === 'fade' && "transition-opacity",
        animation === 'slide' && "transition-transform",
        rounded === "none" ? "" : `rounded-${rounded}`,
        shadow === "none" ? "" : `shadow-${shadow}`,
        divider && getDividerClass(),
        className
      )}
      {...props}
    >
      {title && (
        <motion.div 
          className={cn(
            "flex items-center text-sm font-semibold py-2 px-3",
            collapsible && "cursor-pointer",
            rounded === "none" ? "" : `rounded-${rounded}`,
            activeTheme === 'enterprise' && "text-foreground-secondary",
            activeTheme === 'techDark' && "text-gray-400",
            activeTheme === 'glass' && "text-white/80 backdrop-blur-sm",
            activeTheme === 'neumorphic' && "text-gray-700 transition-all duration-300",
            isHovered && activeTheme === 'enterprise' && "bg-background-secondary/20",
            isHovered && activeTheme === 'techDark' && "bg-gray-800/50",
            isHovered && activeTheme === 'glass' && "bg-white/10",
            isHovered && activeTheme === 'neumorphic' && "bg-neutral-50",
          )}
          onClick={collapsible ? toggleCollapse : undefined}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={getSectionStyles()}
          initial={{ backgroundColor: "transparent" }}
          whileHover={collapsible ? { 
            backgroundColor: activeTheme === 'enterprise' ? "rgba(0, 0, 0, 0.03)" : 
                             activeTheme === 'techDark' ? "rgba(255, 255, 255, 0.05)" :
                             activeTheme === 'glass' ? "rgba(255, 255, 255, 0.1)" :
                             activeTheme === 'neumorphic' ? "rgba(245, 245, 245, 1)" : "transparent"
          } : {}}
        >
          {icon && (
            <motion.span 
              className="mr-2 flex items-center"
              initial={{ rotate: 0 }}
              animate={collapsible && isHovered ? { rotate: [0, -5, 5, 0] } : {}}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {icon}
            </motion.span>
          )}
          {title}
          {collapsible && (
            <motion.svg
              className="ml-auto h-4 w-4 transform transition-transform duration-300"
              initial={{ rotate: isCollapsed ? -90 : 0 }}
              animate={{ rotate: isCollapsed ? -90 : 0 }}
              fill="none"
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </motion.svg>
          )}
        </motion.div>
      )}
      <AnimatePresence initial={false}>
        {!isCollapsed && (
          <motion.div
            variants={sectionVariants}
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            className="overflow-hidden"
          >
            <div className="py-1">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}));

// UltimateNavbarDivider Component for custom dividers
const UltimateNavbarDivider = memo(forwardRef(({
  className,
  orientation = 'horizontal',
  theme: themeProp,
  glow = false,
  width = 'normal',
  style = 'solid',
  gradient = false,
  animate = false,
  ...props
}, ref) => {
  const { theme: contextTheme } = useSafeTheme();
  const activeTheme = themeProp || contextTheme || 'enterprise';
  const [isHovered, setIsHovered] = useState(false);
  
  // Handle hover effects
  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);
  
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);
  
  // Get divider color class
  const getDividerColorClass = () => {
    if (activeTheme === 'enterprise') return "border-border";
    if (activeTheme === 'techDark') return "border-gray-700";
    if (activeTheme === 'glass') return "border-white/30";
    if (activeTheme === 'neumorphic') return "border-gray-300";
    
    return "border-gray-300";
  };
  
  // Motion variants
  const dividerVariants = {
    initial: { 
      width: orientation === 'horizontal' ? "100%" : "1px",
      height: orientation === 'vertical' ? "100%" : "1px",
    },
    hover: { 
      width: orientation === 'horizontal' && animate ? ["100%", "95%", "100%"] : "100%",
      height: orientation === 'vertical' && animate ? ["100%", "95%", "100%"] : "100%",
      transition: { 
        duration: 1.5, 
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };
  
  return (
    <motion.div
      ref={ref}
      className={cn(
        "transition-all duration-300",
        // Width variations
        width === 'thin' && orientation === 'horizontal' && "border-t",
        width === 'thin' && orientation === 'vertical' && "border-l",
        width === 'normal' && orientation === 'horizontal' && "border-t-2",
        width === 'normal' && orientation === 'vertical' && "border-l-2",
        width === 'thick' && orientation === 'horizontal' && "border-t-4",
        width === 'thick' && orientation === 'vertical' && "border-l-4",
        // Style variations
        style === 'solid' && "border-solid",
        style === 'dashed' && "border-dashed",
        style === 'dotted' && "border-dotted",
        // Gradient/glow specific styles
        !gradient && getDividerColorClass(),
        // Neumorphic specific style
        activeTheme === 'neumorphic' && orientation === 'horizontal' && !gradient && "h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent",
        activeTheme === 'neumorphic' && orientation === 'vertical' && !gradient && "w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent",
        // Glowing effect
        glow && activeTheme === 'neumorphic' && "shadow-[0_0_5px_rgba(59,130,246,0.3)]",
        glow && activeTheme === 'enterprise' && "shadow-[0_0_5px_rgba(59,130,246,0.5)]",
        glow && activeTheme === 'techDark' && "shadow-[0_0_5px_rgba(139,92,246,0.5)]",
        glow && activeTheme === 'glass' && "shadow-[0_0_5px_rgba(255,255,255,0.5)]",
        className
      )}
      style={{
        background: gradient ? (
          orientation === 'horizontal' ? 
            (activeTheme === 'enterprise' ? 'linear-gradient(to right, transparent, rgba(59, 130, 246, 0.5), transparent)' :
             activeTheme === 'techDark' ? 'linear-gradient(to right, transparent, rgba(139, 92, 246, 0.5), transparent)' :
             activeTheme === 'glass' ? 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.5), transparent)' :
             'linear-gradient(to right, transparent, rgba(59, 130, 246, 0.3), transparent)') :
            (activeTheme === 'enterprise' ? 'linear-gradient(to bottom, transparent, rgba(59, 130, 246, 0.5), transparent)' :
             activeTheme === 'techDark' ? 'linear-gradient(to bottom, transparent, rgba(139, 92, 246, 0.5), transparent)' :
             activeTheme === 'glass' ? 'linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.5), transparent)' :
             'linear-gradient(to bottom, transparent, rgba(59, 130, 246, 0.3), transparent)')
        ) : '',
        height: orientation === 'horizontal' ? (width === 'thin' ? '1px' : width === 'normal' ? '2px' : '4px') : '100%',
        width: orientation === 'vertical' ? (width === 'thin' ? '1px' : width === 'normal' ? '2px' : '4px') : '100%',
      }}
      variants={dividerVariants}
      initial="initial"
      animate={animate && isHovered ? "hover" : "initial"}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    />
  );
}));

// UltimateNavbarLogo Component for adding a logo
const UltimateNavbarLogo = memo(forwardRef(({
  className,
  src,
  alt = "Logo",
  width = 32,
  height = 32,
  text,
  textPosition = 'right',
  theme: themeProp,
  glow = false,
  animate = false,
  textStyle = 'default',
  onClick,
  href,
  ...props
}, ref) => {
  const { theme: contextTheme } = useSafeTheme();
  const activeTheme = themeProp || contextTheme || 'enterprise';
  const [isHovered, setIsHovered] = useState(false);
  
  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);
  
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);
  
  // Get text color based on theme and style
  const getTextClass = () => {
    let baseClass = "font-semibold transition-all duration-300";
    
    if (textStyle === 'gradient') {
      if (activeTheme === 'enterprise') return `${baseClass} bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400`;
      if (activeTheme === 'techDark') return `${baseClass} bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600`;
      if (activeTheme === 'glass') return `${baseClass} bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300`;
      if (activeTheme === 'neumorphic') return `${baseClass} bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700`;
    }
    
    if (activeTheme === 'enterprise') return `${baseClass} text-foreground-primary`;
    if (activeTheme === 'techDark') return `${baseClass} text-white`;
    if (activeTheme === 'glass') return `${baseClass} text-white`;
    if (activeTheme === 'neumorphic') return `${baseClass} text-gray-800`;
    
    return baseClass;
  };
  
  // Get glow style
  const getGlowStyle = () => {
    if (!glow || !isHovered) return {};
    
    if (activeTheme === 'neumorphic') {
      return { filter: 'drop-shadow(0 0 4px rgba(59, 130, 246, 0.4))' };
    }
    
    if (activeTheme === 'enterprise') {
      return { filter: 'drop-shadow(0 0 4px rgba(59, 130, 246, 0.5))' };
    }
    
    if (activeTheme === 'techDark') {
      return { filter: 'drop-shadow(0 0 4px rgba(139, 92, 246, 0.5))' };
    }
    
    if (activeTheme === 'glass') {
      return { filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.6))' };
    }
    
    return {};
  };
  
  // Wrapper component (link or div)
  const WrapperComponent = href ? 
    ({ children }) => <a href={href} className="outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary rounded-md" onClick={onClick}>{children}</a> :
    ({ children }) => <div onClick={onClick}>{children}</div>;
  
  return (
    <WrapperComponent>
      <motion.div
        ref={ref}
        className={cn(
          "flex items-center transition-all duration-300",
          textPosition === 'right' && "flex-row",
          textPosition === 'left' && "flex-row-reverse",
          textPosition === 'top' && "flex-col-reverse",
          textPosition === 'bottom' && "flex-col",
          onClick && "cursor-pointer",
          className
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileHover={animate ? { scale: 1.05 } : {}}
        {...props}
      >
        {src && (
          <motion.img 
            src={src} 
            alt={alt} 
            width={width} 
            height={height} 
            className={cn(
              "object-contain transition-transform duration-300",
              textPosition === 'right' && "mr-2",
              textPosition === 'left' && "ml-2",
              textPosition === 'top' && "mb-1",
              textPosition === 'bottom' && "mt-1",
            )}
            style={getGlowStyle()}
            animate={animate && isHovered ? { 
              rotate: [0, -3, 3, 0],
              scale: [1, 1.1, 1],
            } : {}}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        )}
        {text && (
          <motion.span 
            className={getTextClass()}
            animate={animate && isHovered ? { 
              y: [0, -2, 0],
              scale: textStyle === 'gradient' ? [1, 1.03, 1] : 1,
            } : {}}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {text}
          </motion.span>
        )}
      </motion.div>
    </WrapperComponent>
  );
}));

// UltimateNavbarSearch Component
const UltimateNavbarSearch = memo(forwardRef(({
  className,
  placeholder = "Search...",
  theme: themeProp,
  rounded = "md",
  size = "md",
  icon,
  variant = "default",
  onChange,
  value,
  onSearch,
  ...props
}, ref) => {
  const { theme: contextTheme } = useSafeTheme();
  const activeTheme = themeProp || contextTheme || 'enterprise';
  const [isFocused, setIsFocused] = useState(false);
  const [searchValue, setSearchValue] = useState(value || "");
  
  // Update internal state when value prop changes
  useEffect(() => {
    if (value !== undefined) {
      setSearchValue(value);
    }
  }, [value]);
  
  // Handle focus state
  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);
  
  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);
  
  // Handle input change
  const handleChange = useCallback((e) => {
    const newValue = e.target.value;
    setSearchValue(newValue);
    if (onChange) {
      onChange(e);
    }
  }, [onChange]);
  
  // Handle search submission
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter' && onSearch) {
      onSearch(searchValue);
    }
  }, [searchValue, onSearch]);
  
  // Get container classes
  const getContainerClass = () => {
    const baseClass = "relative flex items-center w-full transition-all duration-300";
    
    // Size variants
    const sizeClass = size === 'sm' ? "h-8" : 
                      size === 'md' ? "h-10" :
                      size === 'lg' ? "h-12" : "h-10";
    
    // Rounded variants
    const roundedClass = rounded === 'none' ? "rounded-none" :
                         rounded === 'sm' ? "rounded-sm" :
                         rounded === 'md' ? "rounded-md" :
                         rounded === 'lg' ? "rounded-lg" :
                         rounded === 'xl' ? "rounded-xl" :
                         rounded === 'full' ? "rounded-full" : "rounded-md";
    
    // Theme/variant specific styles
    let themeClass = "";
    
    if (activeTheme === 'enterprise') {
      if (variant === 'default') {
        themeClass = "bg-background-secondary border border-border focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/30";
      } else if (variant === 'outlined') {
        themeClass = "bg-transparent border border-border focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/30";
      } else if (variant === 'filled') {
        themeClass = "bg-background-tertiary border-none focus-within:bg-background-secondary";
      }
    } else if (activeTheme === 'techDark') {
      if (variant === 'default') {
        themeClass = "bg-gray-800 border border-gray-700 focus-within:border-purple-500 focus-within:ring-1 focus-within:ring-purple-500/30";
      } else if (variant === 'outlined') {
        themeClass = "bg-transparent border border-gray-700 focus-within:border-purple-500 focus-within:ring-1 focus-within:ring-purple-500/30";
      } else if (variant === 'filled') {
        themeClass = "bg-gray-900 border-none focus-within:bg-gray-800";
      }
    } else if (activeTheme === 'glass') {
      if (variant === 'default') {
        themeClass = "bg-white/10 backdrop-blur-md border border-white/20 focus-within:border-white/50 focus-within:ring-1 focus-within:ring-white/20";
      } else if (variant === 'outlined') {
        themeClass = "bg-transparent backdrop-blur-sm border border-white/20 focus-within:border-white/50 focus-within:ring-1 focus-within:ring-white/20";
      } else if (variant === 'filled') {
        themeClass = "bg-white/20 backdrop-blur-md border-none focus-within:bg-white/30";
      }
    } else if (activeTheme === 'neumorphic') {
      if (variant === 'default') {
        themeClass = "bg-white shadow-[inset_2px_2px_5px_#d1d1d1,inset_-2px_-2px_5px_#ffffff] focus-within:shadow-[inset_3px_3px_6px_#d1d1d1,inset_-3px_-3px_6px_#ffffff]";
      } else if (variant === 'outlined') {
        themeClass = "bg-white border border-gray-300 shadow-sm focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500/30";
      } else if (variant === 'filled') {
        themeClass = "bg-neutral-100 shadow-[inset_2px_2px_5px_#d1d1d1,inset_-2px_-2px_5px_#ffffff] focus-within:shadow-[inset_3px_3px_6px_#d1d1d1,inset_-3px_-3px_6px_#ffffff]";
      }
    }
    
    return `${baseClass} ${sizeClass} ${roundedClass} ${themeClass}`;
  };
  
  // Get input classes
  const getInputClass = () => {
    const baseClass = "w-full h-full bg-transparent border-none focus:outline-none focus:ring-0 placeholder-opacity-70";
    
    // Size variants
    const sizeClass = size === 'sm' ? "text-sm px-3" : 
                      size === 'md' ? "text-base px-4" :
                      size === 'lg' ? "text-lg px-5" : "text-base px-4";
    
    // Theme specific styles
    let themeClass = "";
    
    if (activeTheme === 'enterprise') {
      themeClass = "text-foreground-primary placeholder-foreground-secondary/70";
    } else if (activeTheme === 'techDark') {
      themeClass = "text-white placeholder-gray-400";
    } else if (activeTheme === 'glass') {
      themeClass = "text-white placeholder-white/70";
    } else if (activeTheme === 'neumorphic') {
      themeClass = "text-gray-800 placeholder-gray-500";
    }
    
    // Icon padding
    const iconPadClass = icon ? "pl-10" : "";
    
    return `${baseClass} ${sizeClass} ${themeClass} ${iconPadClass}`;
  };
  
  // Get icon class
  const getIconClass = () => {
    const baseClass = "absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none transition-opacity duration-300";
    
    // Theme specific styles
    let themeClass = "";
    
    if (activeTheme === 'enterprise') {
      themeClass = "text-foreground-secondary";
    } else if (activeTheme === 'techDark') {
      themeClass = "text-gray-400";
    } else if (activeTheme === 'glass') {
      themeClass = "text-white/70";
    } else if (activeTheme === 'neumorphic') {
      themeClass = "text-gray-500";
    }
    
    // Focus styling
    const focusClass = isFocused ? "opacity-100" : "opacity-70";
    
    return `${baseClass} ${themeClass} ${focusClass}`;
  };
  
  return (
    <div className={cn(getContainerClass(), className)} {...props}>
      {icon && (
        <motion.div 
          className={getIconClass()}
          animate={isFocused ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 0.3 }}
        >
          {icon}
        </motion.div>
      )}
      <input
        ref={ref}
        type="text"
        className={getInputClass()}
        placeholder={placeholder}
        value={searchValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
      />
      {searchValue && (
        <motion.button
          type="button"
          className={cn(
            "absolute right-3 opacity-70 hover:opacity-100 transition-opacity duration-300",
            activeTheme === 'enterprise' && "text-foreground-secondary",
            activeTheme === 'techDark' && "text-gray-400",
            activeTheme === 'glass' && "text-white/70",
            activeTheme === 'neumorphic' && "text-gray-500"
          )}
          onClick={() => {
            setSearchValue("");
            if (onChange) {
              // Create a synthetic event
              const event = { target: { value: "" } };
              onChange(event);
            }
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </motion.button>
      )}
    </div>
  );
}));

// Set display names for debugging
UltimateNavbar.displayName = 'UltimateNavbar';
UltimateNavbarItem.displayName = 'UltimateNavbarItem';
UltimateNavbarSection.displayName = 'UltimateNavbarSection';
UltimateNavbarDivider.displayName = 'UltimateNavbarDivider';
UltimateNavbarLogo.displayName = 'UltimateNavbarLogo';
UltimateNavbarSearch.displayName = 'UltimateNavbarSearch';

// Add sub-components to UltimateNavbar
UltimateNavbar.Item = UltimateNavbarItem;
UltimateNavbar.Section = UltimateNavbarSection;
UltimateNavbar.Divider = UltimateNavbarDivider;
UltimateNavbar.Logo = UltimateNavbarLogo;
UltimateNavbar.Search = UltimateNavbarSearch;

export { UltimateNavbar, navbarVariants, navbarItemVariants };