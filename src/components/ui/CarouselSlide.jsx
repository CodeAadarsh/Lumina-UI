import React, { useState, useRef, useEffect } from 'react';
import { cva } from 'class-variance-authority';
import { useTheme } from '../../providers/ThemeProvider';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Carousel container variants
const carouselContainerVariants = cva(
  // Base styles
  'relative overflow-hidden',
  {
    variants: {
      // Carousel variants
      variant: {
        // Default carousel
        default: 'bg-background-primary',
        
        // Elevated carousel
        elevated: 'bg-background-primary shadow-lg rounded-lg',
        
        // Glass effect carousel
        glass: 'backdrop-blur-md bg-white/10 rounded-lg border border-white/20',
        
        // Glass premium carousel
        'glass-premium': 'backdrop-blur-xl bg-white/5 rounded-lg border border-white/10 shadow-lg',
        
        // Dark mode carousel
        dark: 'bg-gray-900 rounded-lg border border-gray-800',
      },
      
      // Sizes for the carousel
      size: {
        sm: 'max-w-md',
        md: 'max-w-2xl',
        lg: 'max-w-4xl',
        xl: 'max-w-6xl',
        full: 'w-full',
      },
      
      // Rounded corners
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        '2xl': 'rounded-2xl',
      },
      
      // Padding options
      padding: {
        none: 'p-0',
        sm: 'p-1',
        md: 'p-2',
        lg: 'p-4',
      },
      
      // Special effects
      effect: {
        none: '',
        glow: 'shadow-blue-glow',
        'purple-glow': 'shadow-purple-glow',
        'multi-glow': 'shadow-multi-glow',
        float: 'animate-float',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      rounded: 'lg',
      padding: 'none',
      effect: 'none',
    },
  }
);

// Navigation button variants
const navButtonVariants = cva(
  // Base styles
  'absolute top-1/2 -translate-y-1/2 z-10 flex items-center justify-center rounded-full transition-all',
  {
    variants: {
      // Button variants based on parent carousel variant
      variant: {
        // Default buttons
        default: 'bg-background-secondary hover:bg-background-tertiary text-foreground-primary',
        
        // Elevated buttons
        elevated: 'bg-background-secondary hover:bg-background-tertiary text-foreground-primary shadow-md',
        
        // Glass effect buttons
        glass: 'backdrop-blur-md bg-white/20 hover:bg-white/30 text-white border border-white/20',
        
        // Glass premium buttons
        'glass-premium': 'backdrop-blur-xl bg-white/10 hover:bg-white/20 text-white border border-white/10',
        
        // Dark mode buttons
        dark: 'bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-700',
      },
      
      // Button sizes
      size: {
        sm: 'w-8 h-8',
        md: 'w-10 h-10',
        lg: 'w-12 h-12',
      },
      
      // Position: prev or next
      position: {
        prev: 'left-2',
        next: 'right-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      position: 'prev',
    },
  }
);

// Pagination indicator variants
const paginationVariants = cva(
  // Base styles
  'absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex gap-1.5 p-1.5 rounded-full',
  {
    variants: {
      // Container variants based on parent carousel variant
      variant: {
        // Default container
        default: 'bg-background-secondary/80',
        
        // Elevated container
        elevated: 'bg-background-secondary/80 shadow-sm',
        
        // Glass effect container
        glass: 'backdrop-blur-md bg-white/10 border border-white/20',
        
        // Glass premium container
        'glass-premium': 'backdrop-blur-xl bg-white/10 border border-white/10',
        
        // Dark mode container
        dark: 'bg-gray-800/80',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

// Indicator dot variants
const indicatorVariants = cva(
  // Base styles
  'w-2 h-2 rounded-full transition-all',
  {
    variants: {
      // Indicator variants based on parent carousel variant
      variant: {
        // Default indicator
        default: 'bg-foreground-tertiary',
        
        // Elevated indicator
        elevated: 'bg-foreground-tertiary',
        
        // Glass effect indicator
        glass: 'bg-white/50',
        
        // Glass premium indicator
        'glass-premium': 'bg-white/50',
        
        // Dark mode indicator
        dark: 'bg-gray-500',
      },
      
      // Active state
      active: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      // Active state for each variant
      { variant: 'default', active: true, className: 'bg-primary w-4' },
      { variant: 'elevated', active: true, className: 'bg-primary w-4' },
      { variant: 'glass', active: true, className: 'bg-white w-4' },
      { variant: 'glass-premium', active: true, className: 'bg-white w-4' },
      { variant: 'dark', active: true, className: 'bg-gray-200 w-4' },
    ],
    defaultVariants: {
      variant: 'default',
      active: false,
    },
  }
);

// Helper function to get default carousel properties based on the theme
const getThemeDefaults = (theme, variant, size, rounded, padding, effect) => {
  let effectiveVariant = variant;
  let effectiveSize = size;
  let effectiveRounded = rounded;
  let effectivePadding = padding;
  let effectiveEffect = effect;
  
  // Adjust styles based on active theme
  if (theme === 'techDark' && !variant) {
    // Default for tech dark theme
    effectiveVariant = 'dark';
    if (!rounded) effectiveRounded = 'xl';
    if (!effect) effectiveEffect = 'none';
  } 
  else if (theme === 'glass' && !variant) {
    // Default for glass theme
    effectiveVariant = 'glass-premium';
    if (!rounded) effectiveRounded = 'xl';
    if (!padding) effectivePadding = 'sm';
    if (!effect) effectiveEffect = 'glow';
  }
  
  return {
    variant: effectiveVariant,
    size: effectiveSize,
    rounded: effectiveRounded,
    padding: effectivePadding,
    effect: effectiveEffect,
  };
};

/**
 * Carousel Component
 * A responsive carousel/slider with navigation controls and indicators
 */
const Carousel = ({
  // Carousel appearance props
  variant,
  size,
  rounded,
  padding,
  effect,
  className = '',
  style = {},
  
  // Carousel configuration props
  children,
  autoPlay = false,
  autoPlayInterval = 5000,
  showArrows = true,
  showIndicators = true,
  loop = true,
  initialIndex = 0,
  navButtonSize = 'md',
  gap = 0,
  
  // Other props
  ...props
}) => {
  const { theme } = useTheme();
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [slideWidth, setSlideWidth] = useState(0);
  const [slideCount, setSlideCount] = useState(0);
  const trackRef = useRef(null);
  const carouselRef = useRef(null);
  
  // Get theme-specific defaults
  const {
    variant: effectiveVariant,
    size: effectiveSize,
    rounded: effectiveRounded,
    padding: effectivePadding,
    effect: effectiveEffect,
  } = getThemeDefaults(theme, variant, size, rounded, padding, effect);
  
  // Get child slides and count them
  useEffect(() => {
    if (!trackRef.current) return;
    
    // Get direct child elements
    const slides = Array.from(trackRef.current.children);
    setSlideCount(slides.length);
    
    // Calculate slide width based on first slide if available
    if (slides.length > 0 && carouselRef.current) {
      const carouselWidth = carouselRef.current.offsetWidth;
      setSlideWidth(carouselWidth);
      
      // Apply width to all slides
      slides.forEach(slide => {
        slide.style.minWidth = `${carouselWidth}px`;
        slide.style.maxWidth = `${carouselWidth}px`;
      });
    }
    
    // Handle initial position
    if (initialIndex > 0 && initialIndex < slides.length) {
      setActiveIndex(initialIndex);
    }
  }, [children, initialIndex]);
  
  // Update slide positions when width or active index changes
  useEffect(() => {
    if (!trackRef.current || slideWidth === 0) return;
    
    const offset = -activeIndex * (slideWidth + gap);
    trackRef.current.style.transform = `translateX(${offset}px)`;
  }, [activeIndex, slideWidth, gap]);
  
  // Auto play functionality
  useEffect(() => {
    if (!autoPlay || slideCount <= 1) return;
    
    const interval = setInterval(() => {
      goToNext();
    }, autoPlayInterval);
    
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, activeIndex, slideCount]);
  
  // Handle window resize to adjust slide dimensions
  useEffect(() => {
    const handleResize = () => {
      if (!carouselRef.current || !trackRef.current) return;
      
      const newWidth = carouselRef.current.offsetWidth;
      setSlideWidth(newWidth);
      
      // Resize all slides
      const slides = Array.from(trackRef.current.children);
      slides.forEach(slide => {
        slide.style.minWidth = `${newWidth}px`;
        slide.style.maxWidth = `${newWidth}px`;
      });
      
      // Adjust position
      const offset = -activeIndex * (newWidth + gap);
      trackRef.current.style.transform = `translateX(${offset}px)`;
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeIndex, gap]);
  
  // Navigation functions
  const goToPrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else if (loop && slideCount > 0) {
      setActiveIndex(slideCount - 1);
    }
  };
  
  const goToNext = () => {
    if (activeIndex < slideCount - 1) {
      setActiveIndex(activeIndex + 1);
    } else if (loop && slideCount > 0) {
      setActiveIndex(0);
    }
  };
  
  const goToSlide = (index) => {
    if (index >= 0 && index < slideCount) {
      setActiveIndex(index);
    }
  };
  
  // Carousel container classes
  const containerClasses = carouselContainerVariants({
    variant: effectiveVariant,
    size: effectiveSize,
    rounded: effectiveRounded,
    padding: effectivePadding,
    effect: effectiveEffect,
    className,
  });
  
  // Navigation button classes
  const prevButtonClasses = navButtonVariants({
    variant: effectiveVariant,
    size: navButtonSize,
    position: 'prev',
  });
  
  const nextButtonClasses = navButtonVariants({
    variant: effectiveVariant,
    size: navButtonSize,
    position: 'next',
  });
  
  // Pagination container classes
  const paginationClasses = paginationVariants({
    variant: effectiveVariant,
  });
  
  return (
    <div
      ref={carouselRef}
      className={containerClasses}
      style={style}
      {...props}
    >
      {/* Navigation arrows */}
      {showArrows && slideCount > 1 && (
        <>
          <button
            className={prevButtonClasses}
            onClick={goToPrev}
            aria-label="Previous slide"
          >
            <ChevronLeft />
          </button>
          
          <button
            className={nextButtonClasses}
            onClick={goToNext}
            aria-label="Next slide"
          >
            <ChevronRight />
          </button>
        </>
      )}
      
      {/* Slides track */}
      <div 
        ref={trackRef}
        className="flex transition-transform duration-300 ease-in-out"
        style={{ gap: `${gap}px` }}
      >
        {children}
      </div>
      
      {/* Pagination indicators */}
      {showIndicators && slideCount > 1 && (
        <div className={paginationClasses}>
          {Array.from({ length: slideCount }).map((_, index) => (
            <button
              key={index}
              className={indicatorVariants({
                variant: effectiveVariant,
                active: index === activeIndex,
              })}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === activeIndex ? 'true' : 'false'}
            />
          ))}
        </div>
      )}
    </div>
  );
};

/**
 * Carousel Slide Component
 * Individual slide container for the Carousel
 */
const CarouselSlide = ({ 
  className = '', 
  children, 
  ...props 
}) => {
  const combinedClasses = `relative h-full flex-shrink-0 ${className}`;
  
  return (
    <div className={combinedClasses} {...props}>
      {children}
    </div>
  );
};

/**
 * Carousel Caption Component
 * For adding captions or content overlays to carousel slides
 */
const CarouselCaption = ({
  className = '',
  position = 'bottom',
  children,
  ...props
}) => {
  // Position classes
  const positionClasses = {
    bottom: 'bottom-0 left-0 right-0',
    top: 'top-0 left-0 right-0',
    center: 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
    'bottom-left': 'bottom-0 left-0',
    'bottom-right': 'bottom-0 right-0',
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0'
  };
  
  const combinedClasses = `absolute ${positionClasses[position]} p-4 ${className}`;
  
  return (
    <div className={combinedClasses} {...props}>
      {children}
    </div>
  );
};

export { Carousel, CarouselSlide, CarouselCaption };