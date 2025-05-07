import React, { forwardRef, useState, useRef, useEffect, memo } from 'react';
import { createPortal } from 'react-dom';
import { cva } from 'class-variance-authority';
import { useSafeTheme } from '../../hooks/useSafeTheme';
import { cn } from '../../utils/cn';

// Define the variants with class-variance-authority
const modalVariants = cva(
  // Base styles for all Modal components
  "fixed z-50 max-h-[calc(100vh-2rem)] overflow-auto perspective-1000 transform-gpu",
  {
    variants: {
      // Theme variants
      theme: {
        enterprise: "bg-background-primary border border-border shadow-lg rounded-lg text-foreground-primary",
        techDark: "bg-background-primary border border-transparent gradient-border-1 shadow-xl rounded-xl text-white",
        glass: "glass-effect border border-border backdrop-blur-lg rounded-xl text-white",
        neumorphicLight: "bg-[#e0e5ec] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] border-none rounded-2xl text-gray-700",
        glow: "bg-gray-900/90 border border-transparent rounded-xl text-white shadow-[0_0_15px_rgba(59,130,246,0.5),0_0_30px_rgba(59,130,246,0.3)]",
        '3d': "bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white transform-gpu shadow-xl",
      },
      // Size variants
      size: {
        xs: "w-full max-w-xs",
        sm: "w-full max-w-sm",
        md: "w-full max-w-md",
        lg: "w-full max-w-lg",
        xl: "w-full max-w-xl",
        '2xl': "w-full max-w-2xl",
        'full': "w-full h-full max-w-full",
      },
      // Position variants
      position: {
        center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
        top: "top-4 left-1/2 -translate-x-1/2",
        bottom: "bottom-4 left-1/2 -translate-x-1/2",
        left: "left-4 top-1/2 -translate-y-1/2",
        right: "right-4 top-1/2 -translate-y-1/2",
      },
      // Depth effect (3D)
      depth: {
        flat: "",
        shallow: "transform-gpu shadow-lg",
        medium: "transform-gpu shadow-xl",
        deep: "transform-gpu shadow-2xl",
      },
    },
    // Compound variants for specific combinations
    compoundVariants: [
      // Enterprise theme specifics
      {
        theme: "enterprise",
        className: "border-gray-200",
      },
      // Tech Dark theme specifics
      {
        theme: "techDark",
        className: "bg-gray-900/90 text-gray-100",
      },
      // Glass theme specifics
      {
        theme: "glass",
        className: "bg-white/20 border-white/30",
      },
      // Neumorphic Light theme specifics
      {
        theme: "neumorphicLight",
        className: "text-gray-700",
      },
      // Glow theme specifics
      {
        theme: "glow",
        className: "glow-effect bg-gray-900/95 text-white",
      },
      // 3D theme specifics
      {
        theme: "3d",
        depth: "deep",
        className: "transform-style-3d",
      },
    ],
    // Default variant values
    defaultVariants: {
      theme: "enterprise",
      size: "md",
      position: "center",
      depth: "medium",
    },
  }
);

// Overlay variants
const overlayVariants = cva(
  "fixed inset-0 z-40 transition-opacity",
  {
    variants: {
      theme: {
        enterprise: "bg-black/50",
        techDark: "bg-black/70",
        glass: "backdrop-blur-sm bg-black/30",
        neumorphicLight: "bg-gray-900/20 backdrop-blur-sm",
        glow: "bg-black/80 backdrop-blur-sm",
        '3d': "bg-black/60",
      },
    },
    defaultVariants: {
      theme: "enterprise",
    },
  }
);

// Define animation variants
const animationVariants = {
  fade: {
    enter: "transition-opacity ease-out duration-300",
    enterFrom: "opacity-0",
    enterTo: "opacity-100",
    leave: "transition-opacity ease-in duration-200",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0",
  },
  zoom: {
    enter: "transition-all ease-out duration-300",
    enterFrom: "opacity-0 scale-95",
    enterTo: "opacity-100 scale-100",
    leave: "transition-all ease-in duration-200",
    leaveFrom: "opacity-100 scale-100",
    leaveTo: "opacity-0 scale-95",
  },
  slide: {
    top: {
      enter: "transition-all ease-out duration-300",
      enterFrom: "opacity-0 -translate-y-8",
      enterTo: "opacity-100 translate-y-0",
      leave: "transition-all ease-in duration-200",
      leaveFrom: "opacity-100 translate-y-0",
      leaveTo: "opacity-0 -translate-y-8",
    },
    bottom: {
      enter: "transition-all ease-out duration-300",
      enterFrom: "opacity-0 translate-y-8",
      enterTo: "opacity-100 translate-y-0",
      leave: "transition-all ease-in duration-200",
      leaveFrom: "opacity-100 translate-y-0",
      leaveTo: "opacity-0 translate-y-8",
    },
    left: {
      enter: "transition-all ease-out duration-300",
      enterFrom: "opacity-0 -translate-x-8",
      enterTo: "opacity-100 translate-x-0",
      leave: "transition-all ease-in duration-200",
      leaveFrom: "opacity-100 translate-x-0",
      leaveTo: "opacity-0 -translate-x-8",
    },
    right: {
      enter: "transition-all ease-out duration-300",
      enterFrom: "opacity-0 translate-x-8",
      enterTo: "opacity-100 translate-x-0",
      leave: "transition-all ease-in duration-200",
      leaveFrom: "opacity-100 translate-x-0",
      leaveTo: "opacity-0 translate-x-8",
    },
  },
  flip: {
    enter: "transition-all ease-out duration-300 perspective-1000",
    enterFrom: "opacity-0 rotateX(-20deg)",
    enterTo: "opacity-100 rotateX(0)",
    leave: "transition-all ease-in duration-200 perspective-1000",
    leaveFrom: "opacity-100 rotateX(0)",
    leaveTo: "opacity-0 rotateX(20deg)",
  },
  rotate: {
    enter: "transition-all ease-out duration-300 perspective-1000",
    enterFrom: "opacity-0 rotate-12",
    enterTo: "opacity-100 rotate-0",
    leave: "transition-all ease-in duration-200 perspective-1000",
    leaveFrom: "opacity-100 rotate-0",
    leaveTo: "opacity-0 -rotate-12",
  },
  bounce: {
    enter: "transition-all ease-out duration-300",
    enterFrom: "opacity-0 translate-y-12",
    enterTo: "opacity-100 translate-y-0 animate-bounce-gentle",
    leave: "transition-all ease-in duration-200",
    leaveFrom: "opacity-100 translate-y-0",
    leaveTo: "opacity-0 translate-y-12",
  },
  elastic: {
    enter: "transition-all ease-elastic duration-500",
    enterFrom: "opacity-0 scale-75",
    enterTo: "opacity-100 scale-100",
    leave: "transition-all ease-in duration-200",
    leaveFrom: "opacity-100 scale-100",
    leaveTo: "opacity-0 scale-75",
  },
};

// Main Modal Component with React.memo for optimization
const Modal = memo(forwardRef(({
  children,
  isOpen,
  onClose,
  className,
  theme: themeProp,
  size,
  position,
  depth = 'medium',
  animation = 'zoom',
  closeOnOutsideClick = true,
  showCloseButton = true,
  ariaLabelledby,
  ariaDescribedby,
  overlayClassName,
  bodyClassName,
  closeButtonClassName,
  initialFocus,
  lockScroll = true,
  portalTarget,
  showGlareEffect = false,
  show3DEffect = false,
  effectIntensity = 'medium',
  ...props
}, ref) => {
  // Get the current theme from context
  const { theme: contextTheme } = useSafeTheme();
  
  // Use prop theme or fall back to context
  const activeTheme = themeProp || contextTheme;
  
  // Closing state for animations
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  // State for 3D effect
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  
  // Refs
  const modalRef = useRef(null);
  const overlayRef = useRef(null);
  const prevActiveElement = useRef(null);
  
  // Handle close with animation
  const handleClose = () => {
    setIsClosing(true);
    // Wait for animation to complete
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 200); // Match this with animation duration
  };
  
  // Handle outside click
  const handleOverlayClick = (e) => {
    if (
      closeOnOutsideClick && 
      overlayRef.current === e.target
    ) {
      handleClose();
    }
  };
  
  // Handle escape key
  const handleEscapeKey = (e) => {
    if (e.key === 'Escape') {
      handleClose();
    }
  };
  
  // Get animation classes based on animation prop and position
  const getAnimationClasses = () => {
    if (animation === 'slide') {
      const slidePosition = position || 'center';
      const slideDirection = 
        slidePosition === 'top' ? 'top' :
        slidePosition === 'bottom' ? 'bottom' :
        slidePosition === 'left' ? 'left' :
        slidePosition === 'right' ? 'right' : 'top';
      
      return {
        enter: animationVariants.slide[slideDirection].enter,
        enterFrom: animationVariants.slide[slideDirection].enterFrom,
        enterTo: animationVariants.slide[slideDirection].enterTo,
        leave: animationVariants.slide[slideDirection].leave,
        leaveFrom: animationVariants.slide[slideDirection].leaveFrom,
        leaveTo: animationVariants.slide[slideDirection].leaveTo,
      };
    }
    
    return animationVariants[animation] || animationVariants.fade;
  };
  
  const animClasses = getAnimationClasses();
  
  // Calculate 3D effect intensity
  const getEffectIntensity = () => {
    switch (effectIntensity) {
      case 'subtle':
        return { maxRotation: 3, glareOpacity: 0.05 };
      case 'medium':
        return { maxRotation: 5, glareOpacity: 0.1 };
      case 'strong':
        return { maxRotation: 10, glareOpacity: 0.15 };
      default:
        return { maxRotation: 5, glareOpacity: 0.1 };
    }
  };
  
  const { maxRotation, glareOpacity } = getEffectIntensity();
  
  // Handle 3D effect on mouse move
  const handle3DEffect = (e) => {
    if (!show3DEffect || !modalRef.current) return;
    
    const rect = modalRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate normalized position (-1 to 1)
    const normalizedX = (e.clientX - centerX) / (rect.width / 2);
    const normalizedY = (e.clientY - centerY) / (rect.height / 2);
    
    // Calculate rotation values
    const rotX = normalizedY * -maxRotation; // Invert Y axis
    const rotY = normalizedX * maxRotation;
    
    // Update state
    setRotateX(rotX);
    setRotateY(rotY);
    
    // Update glare position if enabled
    if (showGlareEffect) {
      const glareX = (normalizedX + 1) * 50; // Convert to percentage (0-100)
      const glareY = (normalizedY + 1) * 50;
      setGlarePosition({ x: glareX, y: glareY });
    }
  };
  
  // Reset 3D effect on mouse leave
  const resetEffects = () => {
    setRotateX(0);
    setRotateY(0);
  };
  
  // Manage focus and scroll lock
  useEffect(() => {
    if (isOpen && !isMounted) {
      setIsMounted(true);
      prevActiveElement.current = document.activeElement;
      
      // Focus the modal or a specific element
      setTimeout(() => {
        if (initialFocus && initialFocus.current) {
          initialFocus.current.focus();
        } else if (modalRef.current) {
          modalRef.current.focus();
        }
      }, 0);
      
      // Lock body scroll
      if (lockScroll) {
        document.body.style.overflow = 'hidden';
      }
      
      // Add escape key event listener
      document.addEventListener('keydown', handleEscapeKey);
    }
    
    return () => {
      if (isOpen || isMounted) {
        // Restore focus
        if (prevActiveElement.current) {
          prevActiveElement.current.focus();
        }
        
        // Restore scroll
        if (lockScroll) {
          document.body.style.overflow = '';
        }
        
        // Remove event listener
        document.removeEventListener('keydown', handleEscapeKey);
        
        if (isMounted) {
          setIsMounted(false);
        }
      }
    };
  }, [isOpen, initialFocus, lockScroll]);
  
  // Don't render anything if the modal is not open
  if (!isOpen && !isClosing) {
    return null;
  }
  
  // Get the portal target element
  const target = typeof portalTarget === 'string' 
    ? document.querySelector(portalTarget) 
    : portalTarget || document.body;
  
  // Get appropriate theme-based classes
  const modalClasses = modalVariants({
    theme: activeTheme,
    size,
    position,
    depth,
    className,
  });
  
  const overlayClasses = cn(
    overlayVariants({ theme: activeTheme }),
    isClosing ? animClasses.leave : animClasses.enter,
    isClosing ? animClasses.leaveTo : animClasses.enterTo,
    !isMounted ? animClasses.enterFrom : '',
    overlayClassName
  );
  
  // Define close button styles based on theme
  const closeButtonStyles = cn(
    "absolute top-3 right-3 p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary z-10",
    activeTheme === 'enterprise' && "text-gray-500 hover:text-gray-700 hover:bg-gray-100",
    activeTheme === 'techDark' && "text-gray-400 hover:text-gray-200 hover:bg-gray-800/50",
    activeTheme === 'glass' && "text-white/70 hover:text-white hover:bg-white/20",
    activeTheme === 'neumorphicLight' && "text-gray-500 hover:text-gray-700 hover:shadow-[inset_2px_2px_5px_#b8b9be,inset_-3px_-3px_7px_#ffffff]",
    activeTheme === 'glow' && "text-white/80 hover:text-white hover:bg-white/10",
    activeTheme === '3d' && "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800/50",
    closeButtonClassName
  );
  
  // Generate 3D transform style
  const get3DStyle = () => {
    if (!show3DEffect) return {};
    
    return {
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      transition: 'transform 0.1s ease-out',
    };
  };
  
  // Generate glare effect style
  const getGlareStyle = () => {
    if (!showGlareEffect) return {};
    
    return {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      backgroundImage: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, ${glareOpacity}), transparent 80%)`,
      borderRadius: 'inherit',
      zIndex: 0,
    };
  };
  
  // Calculate styles based on effects
  const modal3DStyle = get3DStyle();
  const glareStyle = getGlareStyle();
  
  // Create modal content
  const modalContent = (
    <div
      ref={overlayRef}
      className={overlayClasses}
      onClick={handleOverlayClick}
      aria-hidden="true"
    >
      <div
        ref={(node) => {
          // Handle both the forwarded ref and the internal ref
          if (ref) {
            if (typeof ref === 'function') ref(node);
            else ref.current = node;
          }
          modalRef.current = node;
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby={ariaLabelledby}
        aria-describedby={ariaDescribedby}
        className={cn(
          modalClasses,
          isClosing ? animClasses.leave : animClasses.enter,
          isClosing ? animClasses.leaveTo : animClasses.enterTo,
          !isMounted ? animClasses.enterFrom : '',
          activeTheme === 'glow' && 'animate-glow',
        )}
        style={modal3DStyle}
        onMouseMove={handle3DEffect}
        onMouseLeave={resetEffects}
        tabIndex={-1}
        {...props}
      >
        {showGlareEffect && <div style={glareStyle} />}
        
        {showCloseButton && (
          <button
            type="button"
            className={closeButtonStyles}
            onClick={handleClose}
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        )}
        
        <div className={cn("p-6 relative z-1", bodyClassName)}>
          {children}
        </div>
      </div>
    </div>
  );
  
  // Render the modal through a portal
  return createPortal(modalContent, target);
}));

// Display name for debugging
Modal.displayName = 'Modal';

// Modal Header Component
const ModalHeader = forwardRef(({ 
  className, 
  theme: themeProp, 
  children, 
  ...props 
}, ref) => {
  const { theme: contextTheme } = useSafeTheme();
  const activeTheme = themeProp || contextTheme;
  
  const headerClasses = cn(
    "mb-4 pb-3 text-xl font-semibold leading-6",
    activeTheme === 'enterprise' && "border-b border-gray-200 text-gray-900",
    activeTheme === 'techDark' && "border-b border-gray-700 text-white",
    activeTheme === 'glass' && "border-b border-white/20 text-white",
    activeTheme === 'neumorphicLight' && "border-b border-gray-200 text-gray-700",
    activeTheme === 'glow' && "border-b border-blue-500/30 text-white",
    activeTheme === '3d' && "border-b border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white",
    className
  );
  
  return (
    <header ref={ref} className={headerClasses} {...props}>
      {children}
    </header>
  );
});

ModalHeader.displayName = 'ModalHeader';

// Modal Body Component
const ModalBody = forwardRef(({ 
  className, 
  ...props 
}, ref) => {
  return (
    <div ref={ref} className={cn("py-2", className)} {...props} />
  );
});

ModalBody.displayName = 'ModalBody';

// Modal Footer Component
const ModalFooter = forwardRef(({ 
  className, 
  theme: themeProp, 
  children, 
  ...props 
}, ref) => {
  const { theme: contextTheme } = useSafeTheme();
  const activeTheme = themeProp || contextTheme;
  
  const footerClasses = cn(
    "mt-6 pt-3 flex justify-end space-x-3",
    activeTheme === 'enterprise' && "border-t border-gray-200",
    activeTheme === 'techDark' && "border-t border-gray-700",
    activeTheme === 'glass' && "border-t border-white/20",
    activeTheme === 'neumorphicLight' && "border-t border-gray-200",
    activeTheme === 'glow' && "border-t border-blue-500/30",
    activeTheme === '3d' && "border-t border-gray-200 dark:border-gray-700",
    className
  );
  
  return (
    <footer ref={ref} className={footerClasses} {...props}>
      {children}
    </footer>
  );
});

ModalFooter.displayName = 'ModalFooter';

export { Modal, ModalHeader, ModalBody, ModalFooter, modalVariants };