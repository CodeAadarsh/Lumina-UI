import React, { useState, useEffect, forwardRef, memo } from 'react';
import { cva } from 'class-variance-authority';
import { useSafeTheme } from '../../hooks/useSafeTheme';
import { cn } from '../../utils/cn';

// Define the variants with class-variance-authority
const headerVariants = cva(
  // Base styles for all Header components
  "w-full py-4 px-4 md:px-6 transition-all",
  {
    variants: {
      // Theme variants
      theme: {
        enterprise: "bg-background-primary border-b border-border shadow-sm",
        techDark: "bg-background-primary border-b border-border",
        glass: "backdrop-blur-md border-b border-border/30",
      },
      // Position variants
      position: {
        static: "relative",
        sticky: "sticky top-0 z-50",
        fixed: "fixed top-0 left-0 right-0 z-50",
      },
      // Size variants
      size: {
        sm: "py-2",
        md: "py-4",
        lg: "py-6",
      },
      // Container width
      width: {
        full: "w-full",
        contained: "w-full max-w-7xl mx-auto",
      },
      // Extra visual styles
      variant: {
        default: "",
        transparent: "bg-transparent border-transparent",
        colored: "",
        elevated: "shadow-md",
      },
    },
    compoundVariants: [
      // Enterprise theme specifics
      {
        theme: "enterprise",
        variant: "colored",
        className: "bg-primary text-primary-foreground",
      },
      // Tech Dark theme specifics
      {
        theme: "techDark",
        variant: "elevated",
        className: "shadow-lg bg-background-primary/90 backdrop-blur-sm"
      },
      // Glass theme specifics
      {
        theme: "glass",
        variant: "default",
        className: "bg-background-primary/70 backdrop-blur-md"
      },
      {
        theme: "glass",
        variant: "transparent",
        className: "bg-transparent backdrop-blur-md"
      },
      {
        theme: "glass",
        variant: "colored",
        className: "bg-primary/80 text-primary-foreground backdrop-blur-md"
      },
    ],
    defaultVariants: {
      theme: "enterprise",
      position: "static",
      size: "md",
      width: "full",
      variant: "default",
    }
  }
);

// Define variants for the navigation container
const navVariants = cva(
  "hidden md:flex items-center space-x-1",
  {
    variants: {
      placement: {
        center: "justify-center",
        end: "justify-end",
        start: "justify-start",
        between: "justify-between",
      },
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      placement: "end",
      size: "md",
    }
  }
);

// Define variants for the navigation items
const navItemVariants = cva(
  "relative transition-colors duration-200 font-medium hover:text-foreground-primary focus:outline-none focus:ring-2 focus:ring-primary/50 rounded",
  {
    variants: {
      theme: {
        enterprise: "text-foreground-secondary hover:text-foreground-primary",
        techDark: "text-foreground-secondary hover:text-foreground-primary",
        glass: "text-foreground-secondary hover:text-foreground-primary",
      },
      size: {
        sm: "px-2 py-1 text-sm",
        md: "px-3 py-2",
        lg: "px-4 py-3 text-lg",
      },
      active: {
        true: "",
        false: "",
      },
      variant: {
        default: "",
        subtle: "hover:bg-background-secondary/50",
        solid: "hover:bg-background-secondary",
        pill: "rounded-full",
      },
    },
    compoundVariants: [
      // Active state for enterprise theme
      {
        theme: "enterprise",
        active: true,
        className: "text-primary font-semibold",
      },
      // Active state for tech dark theme
      {
        theme: "techDark",
        active: true,
        className: "text-primary font-semibold",
      },
      // Active state for glass theme
      {
        theme: "glass",
        active: true,
        className: "text-foreground-primary font-semibold",
      },
      // Pill variant active states
      {
        variant: "pill",
        active: true,
        className: "bg-background-secondary",
      },
      // Solid variant active states
      {
        variant: "solid",
        active: true,
        className: "bg-background-secondary",
      },
    ],
    defaultVariants: {
      theme: "enterprise",
      size: "md",
      active: false,
      variant: "default",
    }
  }
);

// Mobile menu button variant
const mobileMenuButtonVariants = cva(
  "md:hidden inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary",
  {
    variants: {
      theme: {
        enterprise: "text-foreground-secondary hover:text-foreground-primary hover:bg-background-secondary",
        techDark: "text-foreground-secondary hover:text-foreground-primary hover:bg-background-secondary/50",
        glass: "text-foreground-secondary hover:text-foreground-primary hover:bg-white/10",
      },
      open: {
        true: "",
        false: "",
      }
    },
    compoundVariants: [
      {
        theme: "enterprise",
        open: true,
        className: "text-foreground-primary bg-background-secondary",
      },
      {
        theme: "techDark",
        open: true,
        className: "text-foreground-primary bg-background-secondary/50",
      },
      {
        theme: "glass",
        open: true,
        className: "text-foreground-primary bg-white/10",
      }
    ],
    defaultVariants: {
      theme: "enterprise",
      open: false,
    }
  }
);

// Mobile menu variant
const mobileMenuVariants = cva(
  "md:hidden absolute left-0 right-0 z-20 p-4 transition-all duration-300 transform origin-top shadow-lg border-t border-border",
  {
    variants: {
      theme: {
        enterprise: "bg-background-primary",
        techDark: "bg-background-primary",
        glass: "bg-background-primary/90 backdrop-blur-md",
      },
      open: {
        true: "translate-y-0 opacity-100 visible",
        false: "-translate-y-4 opacity-0 invisible",
      }
    },
    defaultVariants: {
      theme: "enterprise",
      open: false,
    }
  }
);

// Header Component
const Header = memo(forwardRef(({
  children,
  className,
  theme: themeProp,
  position,
  size,
  width,
  variant,
  logo,
  onLogoClick,
  hideOnScroll = false,
  scrollThreshold = 50,
  mobileMenuBreakpoint = 'md',
  transparent = false,
  transparentColor = 'white',
  ...props
}, ref) => {
  const { theme: contextTheme } = useSafeTheme();
  const activeTheme = themeProp || contextTheme || 'enterprise';
  
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(prev => !prev);
  
  // Close menu on larger screens
  useEffect(() => {
    const handleResize = () => {
      const mdBreakpoint = 768; // Standard Tailwind md breakpoint
      if (window.innerWidth >= mdBreakpoint) {
        setIsOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if scrolled past threshold
      if (currentScrollY > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Hide header on scroll down if enabled
      if (hideOnScroll) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsHidden(true);
        } else {
          setIsHidden(false);
        }
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hideOnScroll, lastScrollY, scrollThreshold]);
  
  // Determine if we should use transparent style
  const useTransparent = transparent && !isScrolled;
  
  // Set component classes
  const headerClasses = headerVariants({
    theme: activeTheme,
    position,
    size,
    width,
    variant: useTransparent ? 'transparent' : variant,
    className: cn(className, {
      'translate-y-0': !isHidden,
      '-translate-y-full': isHidden,
    }),
  });
  
  return (
    <header
      ref={ref}
      className={headerClasses}
      style={{
        transition: 'transform 0.3s ease',
        ...(useTransparent && {
          '--transparent-color': transparentColor === 'white' ? 'white' : 'var(--foreground-primary)',
        }),
      }}
      {...props}
    >
      <div className={cn(
        "flex items-center justify-between w-full",
        width === 'contained' && "max-w-7xl mx-auto px-4"
      )}>
        {/* Logo area */}
        <div className="flex items-center">
          {typeof logo === 'string' ? (
            <a 
              href="/" 
              onClick={onLogoClick}
              className="focus:outline-none"
            >
              <img 
                src={logo} 
                alt="Logo" 
                className="h-8 w-auto"
              />
            </a>
          ) : logo ? (
            <div onClick={onLogoClick}>
              {logo}
            </div>
          ) : (
            <a 
              href="/" 
              onClick={onLogoClick}
              className={cn(
                "text-xl font-bold",
                useTransparent ? "text-[var(--transparent-color)]" : "text-foreground-primary"
              )}
            >
              Lumina UI
            </a>
          )}
        </div>
        
        {/* Navigation for larger screens */}
        <div className="hidden md:flex items-center space-x-4">
          {children}
        </div>
        
        {/* Mobile menu button */}
        <button
          type="button"
          className={mobileMenuButtonVariants({ theme: activeTheme, open: isOpen })}
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">Toggle menu</span>
          {isOpen ? (
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile menu */}
      <div className={mobileMenuVariants({ theme: activeTheme, open: isOpen })}>
        <nav className="flex flex-col space-y-2 py-2">
          {children}
        </nav>
      </div>
    </header>
  );
}));

// Navigation Component
const Navigation = memo(forwardRef(({
  children,
  className,
  placement,
  size,
  ...props
}, ref) => {
  const navClasses = navVariants({
    placement,
    size,
    className,
  });
  
  return (
    <nav
      ref={ref}
      className={navClasses}
      {...props}
    >
      {children}
    </nav>
  );
}));

// NavItem Component
const NavItem = memo(forwardRef(({
  children,
  className,
  theme: themeProp,
  size,
  active,
  variant,
  href,
  onClick,
  ...props
}, ref) => {
  const { theme: contextTheme } = useSafeTheme();
  const activeTheme = themeProp || contextTheme || 'enterprise';
  
  const navItemClasses = navItemVariants({
    theme: activeTheme,
    size,
    active,
    variant,
    className,
  });
  
  // If href is provided, render as an anchor tag
  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        className={navItemClasses}
        onClick={onClick}
        {...props}
      >
        {children}
      </a>
    );
  }
  
  // Otherwise render as a button
  return (
    <button
      ref={ref}
      type="button"
      className={navItemClasses}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}));

// Set display names for debugging
Header.displayName = 'Header';
Navigation.displayName = 'Navigation';
NavItem.displayName = 'NavItem';

// Add sub-components to Header
Header.Navigation = Navigation;
Header.NavItem = NavItem;

export { Header, headerVariants, navVariants, navItemVariants };