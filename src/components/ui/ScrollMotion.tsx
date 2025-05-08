import React, { useRef, useEffect, useState, forwardRef, ReactNode, CSSProperties, ElementType, RefObject } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { useTheme } from '../../providers/ThemeProvider';

// Types for animation options
export type AnimationType = 
  | 'none' 
  | 'fadeIn' 
  | 'fadeInUp' 
  | 'fadeInDown' 
  | 'fadeInLeft' 
  | 'fadeInRight'
  | 'scaleIn' 
  | 'scaleInUp' 
  | 'rotateIn' 
  | 'rotateInLeft' 
  | 'flipInX' 
  | 'flipInY' 
  | 'tiltIn'
  | 'bounceIn' 
  | 'blurIn' 
  | 'glowIn';

export type DurationType = 'faster' | 'fast' | 'normal' | 'slow' | 'slower';
export type DelayType = 'none' | 'small' | 'medium' | 'large' | 'extraLarge';
export type EasingType = 'linear' | 'ease' | 'easeIn' | 'easeOut' | 'easeInOut' | 'spring' | 'bounce';
export type StaggerType = 'none' | 'small' | 'medium' | 'large';
export type ThresholdType = 'default' | 'half' | 'most' | 'full';
export type OffsetType = 'none' | 'small' | 'medium' | 'large';
export type DirectionType = 'x' | 'y' | 'both';

// ScrollMotion container variants
const scrollMotionVariants = cva(
  // Base styles
  'relative transition-all',
  {
    variants: {
      // Animation variants
      animation: {
        // No animation
        none: '',
        
        // Fade animations
        fadeIn: 'opacity-0 motion-fade-in',
        fadeInUp: 'opacity-0 translate-y-10 motion-fade-in-up',
        fadeInDown: 'opacity-0 -translate-y-10 motion-fade-in-down',
        fadeInLeft: 'opacity-0 translate-x-10 motion-fade-in-left',
        fadeInRight: 'opacity-0 -translate-x-10 motion-fade-in-right',
        
        // Scale animations
        scaleIn: 'opacity-0 scale-95 motion-scale-in',
        scaleInUp: 'opacity-0 scale-95 translate-y-10 motion-scale-in-up',
        
        // Rotate animations
        rotateIn: 'opacity-0 rotate-12 motion-rotate-in',
        rotateInLeft: 'opacity-0 -rotate-12 motion-rotate-in-left',
        
        // 3D Animations
        flipInX: 'opacity-0 rotateX-90 motion-flip-in-x',
        flipInY: 'opacity-0 rotateY-90 motion-flip-in-y',
        tiltIn: 'opacity-0 perspective-1000 rotateX-10 motion-tilt-in',
        
        // Special animations
        bounceIn: 'opacity-0 scale-90 motion-bounce-in',
        blurIn: 'opacity-0 blur-sm motion-blur-in',
        glowIn: 'opacity-0 motion-glow-in',
      } as const,
      
      // Animation duration
      duration: {
        faster: 'motion-duration-300',
        fast: 'motion-duration-500',
        normal: 'motion-duration-700',
        slow: 'motion-duration-1000',
        slower: 'motion-duration-1500',
      } as const,
      
      // Animation delay
      delay: {
        none: 'motion-delay-0',
        small: 'motion-delay-100',
        medium: 'motion-delay-300',
        large: 'motion-delay-500',
        extraLarge: 'motion-delay-1000',
      } as const,
      
      // Animation easing
      easing: {
        linear: 'motion-easing-linear',
        ease: 'motion-easing-ease',
        easeIn: 'motion-easing-ease-in',
        easeOut: 'motion-easing-ease-out',
        easeInOut: 'motion-easing-ease-in-out',
        spring: 'motion-easing-spring',
        bounce: 'motion-easing-bounce',
      } as const,
      
      // Animation stagger (for children)
      stagger: {
        none: 'motion-stagger-none',
        small: 'motion-stagger-50',
        medium: 'motion-stagger-100',
        large: 'motion-stagger-200',
      } as const,
      
      // Animation once or every time in viewport
      once: {
        true: 'motion-once',
        false: '',
      } as const,
      
      // Animation threshold (when to start)
      threshold: {
        default: 'motion-threshold-default', // 0.1
        half: 'motion-threshold-half', // 0.5
        most: 'motion-threshold-most', // 0.8
        full: 'motion-threshold-full', // 1.0
      } as const,
      
      // Animation offset (start before fully in viewport)
      offset: {
        none: 'motion-offset-none',
        small: 'motion-offset-50',
        medium: 'motion-offset-100',
        large: 'motion-offset-200',
      } as const,
    },
    defaultVariants: {
      animation: 'fadeIn',
      duration: 'normal',
      delay: 'none',
      easing: 'easeOut',
      stagger: 'none',
      once: true,
      threshold: 'default',
      offset: 'none',
    },
  }
);

// Get variant props type from scrollMotionVariants
export type ScrollMotionVariantProps = VariantProps<typeof scrollMotionVariants>;

// ScrollMotion Component Props
export interface ScrollMotionProps extends Omit<React.HTMLAttributes<HTMLElement>, 'as'> {
  /** Animation type to apply */
  animation?: AnimationType;
  /** Animation duration preset */
  duration?: DurationType;
  /** Animation delay preset */
  delay?: DelayType;
  /** Animation easing function */
  easing?: EasingType;
  /** Stagger animation for children */
  stagger?: StaggerType;
  /** Whether to animate only once or on every scroll */
  once?: boolean;
  /** Viewport threshold to trigger animation */
  threshold?: ThresholdType;
  /** Offset to start animation before fully in viewport */
  offset?: OffsetType;
  /** HTML element type to render */
  as?: ElementType;
  /** React children */
  children: ReactNode;
  /** Additional class name */
  className?: string;
  /** Custom inline styles */
  style?: CSSProperties;
  /** 3D perspective value in pixels */
  perspective?: number;
  /** 3D depth value in pixels */
  depth?: number;
  /** Initial X rotation in degrees */
  rotateX?: number;
  /** Initial Y rotation in degrees */
  rotateY?: number;
  /** Initial Z rotation in degrees */
  rotateZ?: number;
}

// Utility to get numeric values for settings
const getDelayValue = (delay: DelayType | undefined): number => {
  switch (delay) {
    case 'small': return 100;
    case 'medium': return 300;
    case 'large': return 500;
    case 'extraLarge': return 1000;
    default: return 0;
  }
};

const getThresholdValue = (threshold: ThresholdType | undefined): number => {
  switch (threshold) {
    case 'half': return 0.5;
    case 'most': return 0.8;
    case 'full': return 1.0;
    default: return 0.1;
  }
};

const getOffsetValue = (offset: OffsetType | undefined): number => {
  switch (offset) {
    case 'small': return 50;
    case 'medium': return 100;
    case 'large': return 200;
    default: return 0;
  }
};

const getStaggerValue = (stagger: StaggerType | undefined): number => {
  switch (stagger) {
    case 'small': return 50;
    case 'medium': return 100;
    case 'large': return 200;
    default: return 0;
  }
};

const getDurationValue = (duration: DurationType | undefined): number => {
  switch (duration) {
    case 'faster': return 300;
    case 'fast': return 500;
    case 'slow': return 1000;
    case 'slower': return 1500;
    default: return 700; // normal
  }
};

/**
 * ScrollMotion Component
 * Triggers animations based on scroll position
 */
const ScrollMotion = forwardRef<HTMLElement, ScrollMotionProps>(({
  // Animation props
  animation,
  duration,
  delay,
  easing,
  stagger,
  once = true,
  threshold,
  offset,
  
  // Component props
  children,
  as = 'div',
  className = '',
  style = {},
  
  // Special 3D props
  perspective = 1000,
  depth = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  
  // Other props
  ...props
}, ref) => {
  const { theme } = useTheme();
  const localRef = useRef<HTMLElement>(null);
  const combinedRef = (ref || localRef) as RefObject<HTMLElement>;
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isAnimated, setIsAnimated] = useState<boolean>(false);
  
  // Store child elements for staggered animations
  const [childElements, setChildElements] = useState<HTMLElement[]>([]);
  const [childAnimationIndex, setChildAnimationIndex] = useState<number>(0);
  
  // Get motion classes
  const motionClasses = scrollMotionVariants({
    animation,
    duration,
    delay,
    easing,
    stagger,
    once,
    threshold,
    offset,
    className,
  });
  
  // Check if element is in viewport
  const checkVisibility = (): void => {
    if (!combinedRef.current) return;
    
    const element = combinedRef.current;
    const rect = element.getBoundingClientRect();
    
    // Get threshold and offset values
    const thresholdValue = getThresholdValue(threshold);
    const offsetValue = getOffsetValue(offset);
    
    // Check if element is in viewport with threshold and offset
    const inView = 
      rect.top + offsetValue <= (window.innerHeight * thresholdValue) &&
      rect.bottom >= 0 &&
      rect.left <= window.innerWidth &&
      rect.right >= 0;
      
    // Update visibility state
    if (inView) {
      setIsVisible(true);
      
      // If animation should only happen once, track that it's been animated
      if (once) {
        setIsAnimated(true);
      }
    } else if (!once) {
      setIsVisible(false);
    }
  };
  
  // Set up intersection observer for staggered child animations
  useEffect(() => {
    if (!combinedRef.current || stagger === 'none') return;
    
    // Get direct child elements
    const children = Array.from(combinedRef.current.children) as HTMLElement[];
    setChildElements(children);
    
    // Add initial invisible class to children
    children.forEach(child => {
      child.classList.add('opacity-0');
      child.style.transition = `opacity ${getDurationValue(duration)}ms, transform ${getDurationValue(duration)}ms ${easing || 'ease-out'}`;
    });
    
    // Reset animation index when component mounts or children change
    setChildAnimationIndex(0);
    
  }, [stagger, duration, easing, children]);
  
  // Handle staggered animation of children
  useEffect(() => {
    if (!isVisible || stagger === 'none' || childElements.length === 0) return;
    
    // Get stagger delay value
    const staggerDelay = getStaggerValue(stagger);
    
    // Calculate initial delay based on the component's delay prop
    const initialDelay = getDelayValue(delay);
    
    // Staggered animation for children
    const animateNextChild = (index: number): void => {
      if (index < childElements.length) {
        const child = childElements[index];
        
        // Add visible class and remove invisible class
        child.classList.remove('opacity-0');
        child.classList.add('opacity-100');
        
        // Add transform based on animation type
        if (animation?.includes('Up')) {
          child.style.transform = 'translateY(0)';
        } else if (animation?.includes('Down')) {
          child.style.transform = 'translateY(0)';
        } else if (animation?.includes('Left')) {
          child.style.transform = 'translateX(0)';
        } else if (animation?.includes('Right')) {
          child.style.transform = 'translateX(0)';
        } else if (animation?.includes('scale')) {
          child.style.transform = 'scale(1)';
        } else if (animation?.includes('rotate')) {
          child.style.transform = 'rotate(0)';
        }
        
        // Schedule the next child animation
        setTimeout(() => {
          setChildAnimationIndex(index + 1);
          animateNextChild(index + 1);
        }, staggerDelay);
      }
    };
    
    // Start animation with initial delay only when first becoming visible
    if (childAnimationIndex === 0) {
      setTimeout(() => {
        animateNextChild(0);
      }, initialDelay);
    }
    
  }, [isVisible, childElements, childAnimationIndex, stagger, animation, delay]);
  
  // Apply 3D transforms when in view
  useEffect(() => {
    if (!combinedRef.current) return;
    
    const element = combinedRef.current;
    
    if (isVisible) {
      // Apply 3D transforms
      element.style.transform = `
        perspective(${perspective}px) 
        translateZ(${depth}px) 
        rotateX(0deg) 
        rotateY(0deg) 
        rotateZ(0deg)
        scale(1)
      `;
      element.style.opacity = '1';
    } else {
      // Reset 3D transforms when not visible (unless once is true and already animated)
      if (!(once && isAnimated)) {
        // Only apply initial rotation values if they exist
        const initialRotateX = animation?.includes('flipInX') ? '90deg' : 
                              animation?.includes('tiltIn') ? '10deg' : 
                              rotateX ? `${rotateX}deg` : '0deg';
                              
        const initialRotateY = animation?.includes('flipInY') ? '90deg' : 
                              rotateY ? `${rotateY}deg` : '0deg';
                              
        const initialRotateZ = rotateZ ? `${rotateZ}deg` : '0deg';
        
        // Apply scale based on animation
        const initialScale = animation?.includes('scale') || animation?.includes('bounce') ? '0.95' : '1';
        
        element.style.transform = `
          perspective(${perspective}px) 
          translateZ(${depth}px) 
          rotateX(${initialRotateX}) 
          rotateY(${initialRotateY}) 
          rotateZ(${initialRotateZ})
          scale(${initialScale})
        `;
        element.style.opacity = '0';
      }
    }
  }, [isVisible, isAnimated, once, perspective, depth, rotateX, rotateY, rotateZ, animation]);
  
  // Set up scroll event listener
  useEffect(() => {
    // Check visibility on initial render
    checkVisibility();
    
    // Add scroll event listener
    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', checkVisibility);
      window.removeEventListener('resize', checkVisibility);
    };
  }, [once, threshold, offset]);
  
  // Create the element
  const Component = as;
  
  // Prepare styles
  const combinedStyles: CSSProperties = {
    transformStyle: 'preserve-3d',
    willChange: 'transform, opacity',
    ...style,
  };
  
  return (
    <Component
      ref={combinedRef}
      className={motionClasses}
      style={combinedStyles}
      {...props}
    >
      {children}
    </Component>
  );
});

ScrollMotion.displayName = 'ScrollMotion';

// ScrollMotionItem Component Props
export interface ScrollMotionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /** React children */
  children: ReactNode;
  /** Additional class name */
  className?: string;
  /** Custom inline styles */
  style?: CSSProperties;
}

/**
 * ScrollMotionItem Component
 * For use inside ScrollMotion when using staggered animations
 */
const ScrollMotionItem = forwardRef<HTMLDivElement, ScrollMotionItemProps>(({
  children,
  className = '',
  style = {},
  ...props
}, ref) => {
  const combinedClasses = `transition-all ${className}`;
  
  return (
    <div
      ref={ref}
      className={combinedClasses}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
});

ScrollMotionItem.displayName = 'ScrollMotionItem';

// ScrollMotion3D Component Props
export interface ScrollMotion3DProps extends ScrollMotionProps {
  /** 3D perspective value in pixels */
  perspective?: number;
  /** 3D depth value in pixels */
  depth?: number;
  /** Initial X rotation in degrees */
  rotateX?: number;
  /** Initial Y rotation in degrees */
  rotateY?: number;
  /** Initial Z rotation in degrees */
  rotateZ?: number;
}

/**
 * ScrollMotion3D Component
 * Enhanced ScrollMotion specifically for 3D motion effects
 */
const ScrollMotion3D = forwardRef<HTMLElement, ScrollMotion3DProps>(({
  // 3D specific props
  perspective = 1000,
  depth = 50,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  
  // Animation props with 3D defaults
  animation = 'tiltIn',
  duration = 'normal',
  easing = 'spring',
  
  // Other props
  ...props
}, ref) => {
  return (
    <ScrollMotion
      ref={ref}
      animation={animation}
      duration={duration}
      easing={easing}
      perspective={perspective}
      depth={depth}
      rotateX={rotateX}
      rotateY={rotateY}
      rotateZ={rotateZ}
      {...props}
    />
  );
});

ScrollMotion3D.displayName = 'ScrollMotion3D';

// ParallaxScrollItem Component Props
export interface ParallaxScrollItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Parallax speed multiplier (0-1 for normal, negative for opposite direction) */
  speed?: number;
  /** Direction of parallax effect */
  direction?: DirectionType;
  /** React children */
  children: ReactNode;
  /** Additional class name */
  className?: string;
  /** Custom inline styles */
  style?: CSSProperties;
}

/**
 * ParallaxScrollItem Component
 * Creates a parallax effect on scroll
 */
const ParallaxScrollItem = forwardRef<HTMLDivElement, ParallaxScrollItemProps>(({
  // Parallax specific props
  speed = 0.5, // 0-1 for normal, negative for opposite direction
  direction = 'y', // 'x', 'y', or 'both'
  
  // Component props
  children,
  className = '',
  style = {},
  ...props
}, ref) => {
  const localRef = useRef<HTMLDivElement>(null);
  const combinedRef = (ref || localRef) as RefObject<HTMLDivElement>;
  const [offset, setOffset] = useState<number>(0);
  
  // Calculate parallax effect
  const calculateParallax = (): void => {
    if (!combinedRef.current) return;
    
    const scrollY = window.scrollY;
    const element = combinedRef.current;
    const rect = element.getBoundingClientRect();
    const elementTop = rect.top + scrollY;
    const elementCenter = elementTop + (rect.height / 2);
    const windowCenter = scrollY + (window.innerHeight / 2);
    const distance = windowCenter - elementCenter;
    
    // Calculate offset with speed factor
    setOffset(distance * speed);
  };
  
  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', calculateParallax);
    
    // Initial calculation
    calculateParallax();
    
    return () => {
      window.removeEventListener('scroll', calculateParallax);
    };
  }, [speed, direction]);
  
  // Apply parallax transform
  const parallaxStyle: CSSProperties = {
    transform: direction === 'x' 
      ? `translateX(${offset}px)` 
      : direction === 'y' 
        ? `translateY(${offset}px)`
        : `translate(${offset}px, ${offset}px)`,
    transition: 'transform 0.1s linear',
    willChange: 'transform',
    ...style,
  };
  
  return (
    <div
      ref={combinedRef}
      className={className}
      style={parallaxStyle}
      {...props}
    >
      {children}
    </div>
  );
});

ParallaxScrollItem.displayName = 'ParallaxScrollItem';

// CSS keyframes and custom properties for ScrollMotion
const scrollMotionStyles = `
/* ScrollMotion Animation Classes */
.motion-fade-in.opacity-0 {
  transition-property: opacity, transform;
}
.motion-fade-in.opacity-100 {
  opacity: 1;
}

.motion-fade-in-up.opacity-0 {
  transform: translateY(40px);
  transition-property: opacity, transform;
}
.motion-fade-in-up.opacity-100 {
  opacity: 1;
  transform: translateY(0);
}

.motion-fade-in-down.opacity-0 {
  transform: translateY(-40px);
  transition-property: opacity, transform;
}
.motion-fade-in-down.opacity-100 {
  opacity: 1;
  transform: translateY(0);
}

.motion-fade-in-left.opacity-0 {
  transform: translateX(40px);
  transition-property: opacity, transform;
}
.motion-fade-in-left.opacity-100 {
  opacity: 1;
  transform: translateX(0);
}

.motion-fade-in-right.opacity-0 {
  transform: translateX(-40px);
  transition-property: opacity, transform;
}
.motion-fade-in-right.opacity-100 {
  opacity: 1;
  transform: translateX(0);
}

.motion-scale-in.opacity-0 {
  transform: scale(0.95);
  transition-property: opacity, transform;
}
.motion-scale-in.opacity-100 {
  opacity: 1;
  transform: scale(1);
}

.motion-scale-in-up.opacity-0 {
  transform: scale(0.95) translateY(40px);
  transition-property: opacity, transform;
}
.motion-scale-in-up.opacity-100 {
  opacity: 1;
  transform: scale(1) translateY(0);
}

.motion-rotate-in.opacity-0 {
  transform: rotate(12deg);
  transition-property: opacity, transform;
}
.motion-rotate-in.opacity-100 {
  opacity: 1;
  transform: rotate(0);
}

.motion-rotate-in-left.opacity-0 {
  transform: rotate(-12deg);
  transition-property: opacity, transform;
}
.motion-rotate-in-left.opacity-100 {
  opacity: 1;
  transform: rotate(0);
}

.motion-flip-in-x.opacity-0 {
  transform: perspective(1000px) rotateX(90deg);
  transition-property: opacity, transform;
}
.motion-flip-in-x.opacity-100 {
  opacity: 1;
  transform: perspective(1000px) rotateX(0);
}

.motion-flip-in-y.opacity-0 {
  transform: perspective(1000px) rotateY(90deg);
  transition-property: opacity, transform;
}
.motion-flip-in-y.opacity-100 {
  opacity: 1;
  transform: perspective(1000px) rotateY(0);
}

.motion-tilt-in.opacity-0 {
  transform: perspective(1000px) rotateX(10deg);
  transition-property: opacity, transform;
}
.motion-tilt-in.opacity-100 {
  opacity: 1;
  transform: perspective(1000px) rotateX(0);
}

.motion-bounce-in.opacity-0 {
  transform: scale(0.9);
  transition-property: opacity, transform;
}
.motion-bounce-in.opacity-100 {
  opacity: 1;
  transform: scale(1);
}

.motion-blur-in.opacity-0 {
  filter: blur(10px);
  transition-property: opacity, filter;
}
.motion-blur-in.opacity-100 {
  opacity: 1;
  filter: blur(0);
}

.motion-glow-in.opacity-0 {
  box-shadow: 0 0 0 rgba(59, 130, 246, 0);
  transition-property: opacity, box-shadow;
}
.motion-glow-in.opacity-100 {
  opacity: 1;
  box-shadow: 0 0 40px rgba(59, 130, 246, 0.5);
}

/* Duration Classes */
.motion-duration-300 {
  transition-duration: 300ms;
}
.motion-duration-500 {
  transition-duration: 500ms;
}
.motion-duration-700 {
  transition-duration: 700ms;
}
.motion-duration-1000 {
  transition-duration: 1000ms;
}
.motion-duration-1500 {
  transition-duration: 1500ms;
}

/* Delay Classes */
.motion-delay-0 {
  transition-delay: 0ms;
}
.motion-delay-100 {
  transition-delay: 100ms;
}
.motion-delay-300 {
  transition-delay: 300ms;
}
.motion-delay-500 {
  transition-delay: 500ms;
}
.motion-delay-1000 {
  transition-delay: 1000ms;
}

/* Easing Classes */
.motion-easing-linear {
  transition-timing-function: linear;
}
.motion-easing-ease {
  transition-timing-function: ease;
}
.motion-easing-ease-in {
  transition-timing-function: ease-in;
}
.motion-easing-ease-out {
  transition-timing-function: ease-out;
}
.motion-easing-ease-in-out {
  transition-timing-function: ease-in-out;
}
.motion-easing-spring {
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.motion-easing-bounce {
  transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
}
`;

export { 
  ScrollMotion, 
  ScrollMotionItem, 
  ScrollMotion3D, 
  ParallaxScrollItem,
  scrollMotionStyles 
};