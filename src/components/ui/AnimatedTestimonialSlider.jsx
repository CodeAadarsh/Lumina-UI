import React, { useState, useRef, useEffect } from 'react';
import { cva } from 'class-variance-authority';
import { useSafeTheme } from '../../hooks/useSafeTheme';
import { cn } from '../../utils/cn';

// Define the variants with class-variance-authority
const testimonialSliderVariants = cva(
  // Base styles for all Testimonial components
  "relative w-full max-w-screen-xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-12 px-4 py-12",
  {
    variants: {
      // Theme variants
      theme: {
        enterprise: "text-gray-800",
        techDark: "text-white",
        glass: "text-white",
        neumorphicLight: "text-gray-700",
        glow: "text-white",
        '3d': "text-gray-900 dark:text-white",
      },
    },
    defaultVariants: {
      theme: 'techDark',
    },
  }
);

// Content container variants
const contentContainerVariants = cva(
  "w-full md:w-3/5 flex flex-col justify-center md:pr-8",
  {
    variants: {
      theme: {
        enterprise: "text-gray-800",
        techDark: "text-white",
        glass: "text-white",
        neumorphicLight: "text-gray-700",
        glow: "text-white",
        '3d': "text-gray-900 dark:text-white",
      },
    },
    defaultVariants: {
      theme: 'techDark',
    },
  }
);

// Image stack container variants
const imageStackContainerVariants = cva(
  "relative w-full md:w-2/5 flex items-center justify-center py-8",
  {
    variants: {
      theme: {
        enterprise: "",
        techDark: "",
        glass: "",
        neumorphicLight: "",
        glow: "",
        '3d': "",
      },
    },
    defaultVariants: {
      theme: 'techDark',
    },
  }
);

// Testimonial image card variants
const testimonialImageCardVariants = cva(
  "absolute overflow-hidden transition-all duration-900 ease-out transform-gpu rounded-3xl shadow-lg",
  {
    variants: {
      // Theme variants
      theme: {
        enterprise: "bg-white border border-gray-200 shadow-xl",
        techDark: "bg-gray-900 border border-gray-800 shadow-2xl",
        glass: "glass-effect border border-white/30 shadow-xl backdrop-blur-lg",
        neumorphicLight: "bg-[#e0e5ec] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] border-none",
        glow: "bg-gray-900/90 border border-blue-500/30 shadow-2xl shadow-[0_0_15px_rgba(59,130,246,0.5),0_0_30px_rgba(59,130,246,0.3)]",
        '3d': "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-xl",
      },
      // Card position variants
      position: {
        front: "z-30 rotate-0 translate-y-0 translate-x-0 scale-100 opacity-100",
        middle: "z-20 rotate-[-8deg] translate-y-[8%] translate-x-[-8%] scale-[0.9] opacity-75",
        back: "z-10 rotate-[-16deg] translate-y-[16%] translate-x-[-16%] scale-[0.8] opacity-50",
        hidden: "opacity-0 translate-x-[60%] scale-[0.7] z-0",
      },
    },
    compoundVariants: [
      // Special styling for front card in each theme
      {
        theme: "enterprise",
        position: "front",
        className: "shadow-2xl", 
      },
      {
        theme: "techDark",
        position: "front",
        className: "shadow-purple-glow", 
      },
      {
        theme: "glass",
        position: "front",
        className: "shadow-white-glow border-white/50", 
      },
      {
        theme: "neumorphicLight",
        position: "front",
        className: "shadow-[30px_30px_80px_#bebebe,-30px_-30px_80px_#ffffff]", 
      },
      {
        theme: "glow",
        position: "front",
        className: "animate-glow border-blue-500/50", 
      },
      {
        theme: "3d",
        position: "front",
        className: "shadow-2xl", 
      },
    ],
    defaultVariants: {
      theme: 'techDark',
      position: 'front',
    },
  }
);

// Quote container variants
const quoteContainerVariants = cva(
  "mb-8 p-6 rounded-lg",
  {
    variants: {
      theme: {
        enterprise: "bg-white/5 border border-gray-200/20",
        techDark: "bg-gray-800/30 border border-gray-700/30",
        glass: "bg-white/10 backdrop-blur-sm border border-white/10",
        neumorphicLight: "bg-[#e0e5ec] shadow-[inset_3px_3px_6px_#b8b9be,inset_-3px_-3px_6px_#ffffff]",
        glow: "bg-gray-800/40 border border-blue-500/20",
        '3d': "bg-white/10 dark:bg-gray-800/40 border border-gray-200/20 dark:border-gray-700/30",
      },
    },
    defaultVariants: {
      theme: 'techDark',
    },
  }
);

// Navigation button variants
const navButtonVariants = cva(
  "flex items-center justify-center w-10 h-10 rounded-full focus:outline-none transition-all duration-300",
  {
    variants: {
      // Theme variants
      theme: {
        enterprise: "bg-white text-gray-800 border border-gray-200 shadow-md hover:shadow-lg hover:bg-gray-50",
        techDark: "bg-gray-800 text-white border border-gray-700 hover:bg-gray-700",
        glass: "bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30",
        neumorphicLight: "bg-[#e0e5ec] text-gray-700 shadow-[3px_3px_6px_#b8b9be,-3px_-3px_6px_#ffffff] hover:shadow-[inset_3px_3px_6px_#b8b9be,inset_-3px_-3px_6px_#ffffff]",
        glow: "bg-gray-900 text-white border border-blue-500/30 shadow-[0_0_10px_rgba(59,130,246,0.3)] hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]",
        '3d': "bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg",
      },
    },
    defaultVariants: {
      theme: 'techDark',
    },
  }
);

const AnimatedTestimonialSlider = ({
  testimonials,
  className,
  theme: themeProp,
  autoplay = true,
  autoplaySpeed = 5000,
  ...props
}) => {
  // Get the current theme from context
  const { theme: contextTheme } = useSafeTheme();
  
  // Use prop theme or fall back to context
  const activeTheme = themeProp || contextTheme;
  
  // State for current testimonial
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const autoplayTimerRef = useRef(null);
  
  // Function to go to next testimonial
  const nextTestimonial = () => {
    if (animating) return;
    
    setAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    
    setTimeout(() => {
      setAnimating(false);
    }, 900); // Match this with animation duration
  };
  
  // Function to go to previous testimonial
  const prevTestimonial = () => {
    if (animating) return;
    
    setAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    
    setTimeout(() => {
      setAnimating(false);
    }, 900); // Match this with animation duration
  };
  
  // Setup autoplay
  useEffect(() => {
    if (autoplay) {
      autoplayTimerRef.current = setInterval(() => {
        nextTestimonial();
      }, autoplaySpeed);
    }
    
    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [autoplay, autoplaySpeed, currentIndex, animating]);
  
  // Reset autoplay timer when manually changing slides
  const resetAutoplayTimer = () => {
    if (autoplay && autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
      autoplayTimerRef.current = setInterval(() => {
        nextTestimonial();
      }, autoplaySpeed);
    }
  };
  
  // Determine card position for each testimonial
  const getCardPosition = (index) => {
    const totalCount = testimonials.length;
    
    if (index === currentIndex) return 'front';
    if (index === (currentIndex + 1) % totalCount) return 'middle';
    if (index === (currentIndex + 2) % totalCount) return 'back';
    return 'hidden';
  };
  
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prevTestimonial();
        resetAutoplayTimer();
      } else if (e.key === 'ArrowRight') {
        nextTestimonial();
        resetAutoplayTimer();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, animating]);
  
  // Get container classes
  const containerClasses = testimonialSliderVariants({
    theme: activeTheme,
    className,
  });
  
  // Get content container classes
  const contentClasses = contentContainerVariants({
    theme: activeTheme,
  });
  
  // Get image stack container classes
  const imageStackClasses = imageStackContainerVariants({
    theme: activeTheme,
  });
  
  // Get quote container classes
  const quoteClasses = quoteContainerVariants({
    theme: activeTheme,
  });
  
  // Get navigation button classes
  const prevButtonClasses = navButtonVariants({
    theme: activeTheme,
  });
  
  const nextButtonClasses = navButtonVariants({
    theme: activeTheme,
  });
  
  // Current testimonial
  const currentTestimonial = testimonials[currentIndex];
  
  return (
    <div className={containerClasses} {...props}>
      {/* Left side - Content and Navigation */}
      <div className={contentClasses}>
        {/* Testimonial Content */}
        <div>
          <h2 className="text-4xl font-bold mb-2">{currentTestimonial.name}</h2>
          <p className="text-xl opacity-80 mb-6">{currentTestimonial.title}</p>
          
          <div className={quoteClasses}>
            <p className="text-2xl leading-relaxed">
              {currentTestimonial.quote}
            </p>
          </div>
        </div>
        
        {/* Navigation */}
        <div className="flex space-x-4">
          <button 
            className={prevButtonClasses} 
            onClick={() => {
              prevTestimonial();
              resetAutoplayTimer();
            }}
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          
          <button 
            className={nextButtonClasses}
            onClick={() => {
              nextTestimonial();
              resetAutoplayTimer();
            }}
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Right side - Stacked Image Cards */}
      <div className={imageStackClasses}>
        <div className="relative w-full max-w-[350px] aspect-square">
          {testimonials.map((testimonial, index) => {
            const position = getCardPosition(index);
            
            // Get image card classes
            const imageCardClasses = testimonialImageCardVariants({
              theme: activeTheme,
              position,
            });
            
            // Don't render hidden cards for performance
            if (position === 'hidden') return null;
            
            return (
              <div
                key={index}
                className={cn(imageCardClasses)}
                style={{
                  width: '100%',
                  height: '100%',
                  transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1)',
                  transformOrigin: 'bottom left',
                }}
              >
                {/* Person Image */}
                {testimonial.image && (
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { AnimatedTestimonialSlider, testimonialSliderVariants };