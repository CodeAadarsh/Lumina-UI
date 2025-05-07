import React, { useState, useRef, useEffect } from 'react';
import { cva } from 'class-variance-authority';
import { useSafeTheme } from '../../hooks/useSafeTheme';
import { cn } from '../../utils/cn';

// Define the variants with class-variance-authority
const testimonialVariants = cva(
  // Base styles for all Testimonial components
  "relative overflow-hidden transition-all duration-300 perspective-1000 transform-gpu",
  {
    variants: {
      // Theme variants
      theme: {
        enterprise: "bg-white border border-gray-200 shadow-lg rounded-lg text-gray-800",
        techDark: "bg-gray-900 border border-transparent gradient-border-1 shadow-xl rounded-xl text-white",
        glass: "glass-effect border border-white/30 backdrop-blur-lg rounded-xl text-white",
        neumorphicLight: "bg-[#e0e5ec] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] border-none rounded-2xl text-gray-700",
        glow: "bg-gray-900/90 border border-blue-500/30 rounded-xl text-white shadow-[0_0_15px_rgba(59,130,246,0.5),0_0_30px_rgba(59,130,246,0.3)]",
        '3d': "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white transform-gpu shadow-xl",
      },
      // Size variants
      size: {
        sm: "p-4 max-w-sm",
        md: "p-6 max-w-md",
        lg: "p-8 max-w-lg",
      },
      // Layout variants
      layout: {
        default: "flex flex-col",
        horizontal: "flex flex-col md:flex-row md:items-center",
        stacked: "flex flex-col",
      },
      // Animation variants
      animation: {
        none: "",
        float: "hover:translate-y-[-8px]",
        pulse: "hover:scale-[1.03]",
        tilt: "",
        glow: "",
        shimmer: "overflow-hidden",
      },
      // Hover effect variants
      hoverEffect: {
        none: "",
        lift: "hover:shadow-xl transition-shadow duration-300",
        border: "",
        background: "",
      },
    },
    // Compound variants for specific combinations
    compoundVariants: [
      // Animation specifics
      {
        animation: "glow",
        theme: "enterprise",
        className: "hover:shadow-blue-glow",
      },
      {
        animation: "glow",
        theme: "techDark",
        className: "hover:shadow-purple-glow",
      },
      {
        animation: "glow",
        theme: "glass",
        className: "hover:shadow-white-glow",
      },
      {
        animation: "glow",
        theme: "glow",
        className: "hover:shadow-[0_0_20px_rgba(59,130,246,0.7),0_0_40px_rgba(59,130,246,0.4)]",
      },
      {
        animation: "shimmer",
        className: "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-100%] hover:before:animate-shimmer",
      },
      // Border effect specifics
      {
        hoverEffect: "border",
        theme: "enterprise",
        className: "border-2 border-transparent hover:border-blue-500/50 transition-colors duration-300",
      },
      {
        hoverEffect: "border",
        theme: "techDark",
        className: "border-2 border-transparent hover:border-purple-500/50 transition-colors duration-300",
      },
      {
        hoverEffect: "border",
        theme: "glass",
        className: "border-2 border-white/20 hover:border-white/60 transition-colors duration-300",
      },
      {
        hoverEffect: "border",
        theme: "neumorphicLight",
        className: "border-2 border-transparent hover:border-blue-500/20 transition-colors duration-300",
      },
      {
        hoverEffect: "border",
        theme: "glow",
        className: "border-2 border-blue-500/30 hover:border-blue-500/80 transition-colors duration-300",
      },
      // Background effect specifics
      {
        hoverEffect: "background",
        theme: "enterprise",
        className: "hover:bg-blue-50 transition-colors duration-300",
      },
      {
        hoverEffect: "background",
        theme: "techDark",
        className: "hover:bg-purple-900/20 transition-colors duration-300",
      },
      {
        hoverEffect: "background",
        theme: "glass",
        className: "hover:bg-white/30 transition-colors duration-300",
      },
      {
        hoverEffect: "background",
        theme: "neumorphicLight",
        className: "hover:bg-[#e5eaf1] transition-colors duration-300",
      },
      {
        hoverEffect: "background",
        theme: "glow",
        className: "hover:bg-blue-900/30 transition-colors duration-300",
      },
    ],
    // Default variant values
    defaultVariants: {
      theme: "enterprise",
      size: "md",
      layout: "default",
      animation: "none",
      hoverEffect: "none",
    },
  }
);

// Quote icon variants
const quoteIconVariants = cva(
  "absolute opacity-20",
  {
    variants: {
      theme: {
        enterprise: "text-blue-300",
        techDark: "text-purple-500",
        glass: "text-white",
        neumorphicLight: "text-blue-300",
        glow: "text-blue-500",
        '3d': "text-blue-300 dark:text-blue-700",
      },
      position: {
        topLeft: "top-4 left-4 transform -scale-x-100",
        topRight: "top-4 right-4",
        bottomLeft: "bottom-4 left-4 -scale-x-100 -scale-y-100",
        bottomRight: "bottom-4 right-4 -scale-y-100",
      },
    },
    defaultVariants: {
      theme: "enterprise",
      position: "topLeft",
    },
  }
);

// Rating stars variants
const ratingVariants = cva(
  "flex",
  {
    variants: {
      theme: {
        enterprise: "text-yellow-400",
        techDark: "text-purple-500",
        glass: "text-yellow-300",
        neumorphicLight: "text-amber-500",
        glow: "text-blue-400",
        '3d': "text-yellow-500 dark:text-yellow-400",
      },
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      theme: "enterprise",
      size: "md",
    },
  }
);

// Avatar variants
const avatarVariants = cva(
  "overflow-hidden flex-shrink-0",
  {
    variants: {
      theme: {
        enterprise: "border-2 border-white ring-2 ring-gray-200",
        techDark: "border-2 border-gray-800 ring-2 ring-purple-500/30",
        glass: "border-2 border-white/50 ring-1 ring-white/20",
        neumorphicLight: "border-2 border-white shadow-[3px_3px_6px_#b8b9be,-3px_-3px_6px_#ffffff]",
        glow: "border-2 border-blue-500/50 shadow-[0_0_10px_rgba(59,130,246,0.5)]",
        '3d': "border-2 border-white dark:border-gray-700 shadow-md",
      },
      size: {
        sm: "w-12 h-12 rounded-full",
        md: "w-16 h-16 rounded-full",
        lg: "w-20 h-20 rounded-full",
      },
      shape: {
        circle: "rounded-full",
        square: "rounded-lg",
        hexagon: "clip-path-hex",
      },
    },
    defaultVariants: {
      theme: "enterprise",
      size: "md",
      shape: "circle",
    },
  }
);

// 3D Testimonial Component
const Testimonial3D = ({
  children,
  className,
  theme: themeProp,
  size,
  layout,
  animation,
  hoverEffect,
  avatarUrl,
  avatarAlt = "Testimonial author",
  avatarSize,
  avatarShape = "circle",
  authorName,
  authorTitle,
  rating = 0,
  quote,
  showQuoteIcons = true,
  animated3D = false,
  ...props
}) => {
  // Get the current theme from context
  const { theme: contextTheme } = useSafeTheme();
  
  // Use prop theme or fall back to context
  const activeTheme = themeProp || contextTheme;
  
  // State for 3D effect
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  
  // Refs
  const cardRef = useRef(null);
  
  // Handle 3D effect on mouse move
  const handle3DEffect = (e) => {
    if (!animated3D || !cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate normalized position (-1 to 1)
    const normalizedX = (e.clientX - centerX) / (rect.width / 2);
    const normalizedY = (e.clientY - centerY) / (rect.height / 2);
    
    // Calculate rotation values based on the animation intensity
    const rotX = normalizedY * -5; // Invert Y axis
    const rotY = normalizedX * 5;
    
    // Update state
    setRotateX(rotX);
    setRotateY(rotY);
  };
  
  // Reset 3D effect on mouse leave
  const resetEffects = () => {
    setRotateX(0);
    setRotateY(0);
  };
  
  // Generate 3D transform style
  const get3DStyle = () => {
    if (!animated3D) return {};
    
    return {
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      transition: 'transform 0.1s ease-out',
    };
  };
  
  // Generate stars for rating
  const renderStars = (rating) => {
    const stars = [];
    const maxStars = 5;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    const starClass = ratingVariants({
      theme: activeTheme,
      size,
    });
    
    for (let i = 0; i < maxStars; i++) {
      if (i < fullStars) {
        stars.push(
          <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <defs>
              <linearGradient id="halfStarGradient">
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="rgba(203, 213, 225, 0.4)" />
              </linearGradient>
            </defs>
            <path fill="url(#halfStarGradient)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      } else {
        stars.push(
          <svg key={i} className="w-5 h-5 text-gray-300 dark:text-gray-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      }
    }
    
    return <div className={starClass}>{stars}</div>;
  };
  
  // Calculate additional animation classes for the avatar
  const getAvatarAnimationClass = () => {
    if (animation === 'float') return 'hover:animate-float';
    if (animation === 'pulse') return 'hover:animate-pulse';
    return '';
  };
  
  // Generate testimonial layouts
  const renderContent = () => {
    const avatarClasses = avatarVariants({
      theme: activeTheme,
      size: avatarSize || size,
      shape: avatarShape,
    });

    const quoteIconClasses = showQuoteIcons ? quoteIconVariants({
      theme: activeTheme,
      position: 'topLeft',
    }) : '';
    
    const quoteIconClasses2 = showQuoteIcons ? quoteIconVariants({
      theme: activeTheme,
      position: 'bottomRight',
    }) : '';
    
    switch (layout) {
      case 'horizontal':
        return (
          <>
            {showQuoteIcons && (
              <>
                <svg className={quoteIconClasses} width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 11H8.5C8.5 9 9.5 8 11 8V7C9.15 7 7 8.15 7 11.5V16H11.5V11.5H10V11ZM17 11H15.5C15.5 9 16.5 8 18 8V7C16.15 7 14 8.15 14 11.5V16H18.5V11.5H17V11Z" fill="currentColor"/>
                </svg>
                <svg className={quoteIconClasses2} width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 11H8.5C8.5 9 9.5 8 11 8V7C9.15 7 7 8.15 7 11.5V16H11.5V11.5H10V11ZM17 11H15.5C15.5 9 16.5 8 18 8V7C16.15 7 14 8.15 14 11.5V16H18.5V11.5H17V11Z" fill="currentColor"/>
                </svg>
              </>
            )}
            <div className="flex flex-col md:flex-row gap-6 items-center">
              {avatarUrl && (
                <div className={`${getAvatarAnimationClass()}`}>
                  <img src={avatarUrl} alt={avatarAlt} className={avatarClasses} />
                </div>
              )}
              <div className="flex-1">
                {rating > 0 && renderStars(rating)}
                {quote && <p className="italic my-3">{quote}</p>}
                {children}
                {(authorName || authorTitle) && (
                  <div className="mt-4">
                    {authorName && <div className="font-semibold">{authorName}</div>}
                    {authorTitle && <div className="text-sm opacity-75">{authorTitle}</div>}
                  </div>
                )}
              </div>
            </div>
          </>
        );
      
      case 'stacked':
        return (
          <>
            {showQuoteIcons && (
              <>
                <svg className={quoteIconClasses} width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 11H8.5C8.5 9 9.5 8 11 8V7C9.15 7 7 8.15 7 11.5V16H11.5V11.5H10V11ZM17 11H15.5C15.5 9 16.5 8 18 8V7C16.15 7 14 8.15 14 11.5V16H18.5V11.5H17V11Z" fill="currentColor"/>
                </svg>
                <svg className={quoteIconClasses2} width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 11H8.5C8.5 9 9.5 8 11 8V7C9.15 7 7 8.15 7 11.5V16H11.5V11.5H10V11ZM17 11H15.5C15.5 9 16.5 8 18 8V7C16.15 7 14 8.15 14 11.5V16H18.5V11.5H17V11Z" fill="currentColor"/>
                </svg>
              </>
            )}
            <div className="flex flex-col items-center text-center">
              {rating > 0 && renderStars(rating)}
              {quote && <p className="italic my-4">{quote}</p>}
              {children}
              <div className="mt-6 mb-4">
                {avatarUrl && (
                  <div className={`${getAvatarAnimationClass()} mx-auto`}>
                    <img src={avatarUrl} alt={avatarAlt} className={avatarClasses} />
                  </div>
                )}
              </div>
              {(authorName || authorTitle) && (
                <div className="mt-2">
                  {authorName && <div className="font-semibold">{authorName}</div>}
                  {authorTitle && <div className="text-sm opacity-75">{authorTitle}</div>}
                </div>
              )}
            </div>
          </>
        );
      
      default: // default layout
        return (
          <>
            {showQuoteIcons && (
              <>
                <svg className={quoteIconClasses} width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 11H8.5C8.5 9 9.5 8 11 8V7C9.15 7 7 8.15 7 11.5V16H11.5V11.5H10V11ZM17 11H15.5C15.5 9 16.5 8 18 8V7C16.15 7 14 8.15 14 11.5V16H18.5V11.5H17V11Z" fill="currentColor"/>
                </svg>
                <svg className={quoteIconClasses2} width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 11H8.5C8.5 9 9.5 8 11 8V7C9.15 7 7 8.15 7 11.5V16H11.5V11.5H10V11ZM17 11H15.5C15.5 9 16.5 8 18 8V7C16.15 7 14 8.15 14 11.5V16H18.5V11.5H17V11Z" fill="currentColor"/>
                </svg>
              </>
            )}
            {rating > 0 && renderStars(rating)}
            {quote && <p className="italic my-4">{quote}</p>}
            {children}
            <div className="flex items-center mt-4">
              {avatarUrl && (
                <div className={`mr-4 ${getAvatarAnimationClass()}`}>
                  <img src={avatarUrl} alt={avatarAlt} className={avatarClasses} />
                </div>
              )}
              {(authorName || authorTitle) && (
                <div>
                  {authorName && <div className="font-semibold">{authorName}</div>}
                  {authorTitle && <div className="text-sm opacity-75">{authorTitle}</div>}
                </div>
              )}
            </div>
          </>
        );
    }
  };
  
  // Get appropriate theme-based classes
  const classes = testimonialVariants({
    theme: activeTheme,
    size,
    layout,
    animation,
    hoverEffect,
    className,
  });
  
  // Get animation class for entry
  const getEntryAnimationClass = () => {
    const entranceAnimations = {
      float: "animate-float",
      pulse: "animate-pulse",
      glow: "animate-glow",
      shimmer: "animate-shimmer",
    };
    
    return entranceAnimations[animation] || '';
  };
  
  return (
    <div
      ref={cardRef}
      className={cn(classes, getEntryAnimationClass())}
      style={get3DStyle()}
      onMouseMove={handle3DEffect}
      onMouseLeave={resetEffects}
      {...props}
    >
      {renderContent()}
    </div>
  );
};

// For easier usage
const Testimonial = Testimonial3D;

export { Testimonial, Testimonial3D, testimonialVariants };