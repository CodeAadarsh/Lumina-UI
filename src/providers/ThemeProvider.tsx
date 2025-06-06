import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getTheme, defaultTheme } from '../themes/themes';

// Define available themes
export type ThemeName = 'default' | 'techDark' | 'glass' | 'enterprise';

// Theme configuration interface
export interface ThemeConfig {
  name: ThemeName;
  colors: {
    background: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    foreground: {
      primary: string;
      secondary: string;
      tertiary: string;
      quaternary: string;
    };
    border: {
      default: string;
      strong: string;
      focus: string;
    };
    primary: {
      lighter: string;
      light: string;
      base: string;
      dark: string;
      darker: string;
      foreground: string;
    };
    accent?: {
      purple?: {
        base: string;
      };
      blue?: {
        base: string;
      };
      cyan?: {
        base: string;
      };
      pink?: {
        base: string;
      };
    };
  };
  shadows: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    'blue-glow'?: string;
    'purple-glow'?: string;
    'white-glow'?: string;
    'multi-glow'?: string;
  };
  radii: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    full: string;
  };
  effects?: {
    backdrop?: {
      blur: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
      };
    };
    border?: {
      gradient?: {
        primary: string;
        rainbow: string;
      };
    };
  };
  typography: {
    fontFamily: {
      sans: string;
      mono: string;
    };
  };
  animations: {
    durations: {
      normal: string;
    };
    easings: {
      easeInOut: string;
    };
  };
}

// Theme context interface
export interface ThemeContextType {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  themes: string[];
  themeObject: ThemeConfig;
}

// Theme provider props interface
export interface ThemeProviderProps {
  children: ReactNode;
  theme?: ThemeName;
  storageKey?: string;
}

// Create theme context with proper typing
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Theme provider component
export const ThemeProvider = ({
  children,
  theme: initialTheme = defaultTheme,
  storageKey = 'lumina-ui-theme',
}: ThemeProviderProps) => {
  // Get initial theme from localStorage or use the default
  const [themeName, setThemeName] = useState<ThemeName>(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem(storageKey);
      return (storedTheme as ThemeName) || initialTheme;
    }
    return initialTheme;
  });
  
  // Get the complete theme object
  const theme = getTheme(themeName);
  
  // Update localStorage and apply theme CSS variables whenever theme changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(storageKey, themeName);
      applyTheme(theme);
    }
  }, [themeName, theme, storageKey]);
  
  // Helper function to update CSS variables based on current theme
  const applyTheme = (theme: ThemeConfig): void => {
    const root = document.documentElement;
    
    // Remove previous theme classes
    root.classList.remove('theme-enterprise', 'theme-techDark', 'theme-glass');
    // Add current theme class
    root.classList.add(`theme-${themeName}`);
    
    // Apply color variables
    // Background colors
    root.style.setProperty('--background-primary', theme.colors.background.primary);
    root.style.setProperty('--background-secondary', theme.colors.background.secondary);
    root.style.setProperty('--background-tertiary', theme.colors.background.tertiary);
    
    // Foreground colors
    root.style.setProperty('--foreground-primary', theme.colors.foreground.primary);
    root.style.setProperty('--foreground-secondary', theme.colors.foreground.secondary);
    root.style.setProperty('--foreground-tertiary', theme.colors.foreground.tertiary);
    root.style.setProperty('--foreground-quaternary', theme.colors.foreground.quaternary);
    
    // Border colors
    root.style.setProperty('--border-default', theme.colors.border.default);
    root.style.setProperty('--border-strong', theme.colors.border.strong);
    root.style.setProperty('--border-focus', theme.colors.border.focus);
    
    // Primary colors
    root.style.setProperty('--primary-lighter', theme.colors.primary.lighter);
    root.style.setProperty('--primary-light', theme.colors.primary.light);
    root.style.setProperty('--primary-base', theme.colors.primary.base);
    root.style.setProperty('--primary-dark', theme.colors.primary.dark);
    root.style.setProperty('--primary-darker', theme.colors.primary.darker);
    root.style.setProperty('--primary-foreground', theme.colors.primary.foreground);
    
    // Shadows
    root.style.setProperty('--shadow-xs', theme.shadows.xs);
    root.style.setProperty('--shadow-sm', theme.shadows.sm);
    root.style.setProperty('--shadow-md', theme.shadows.md);
    root.style.setProperty('--shadow-lg', theme.shadows.lg);
    root.style.setProperty('--shadow-xl', theme.shadows.xl);
    root.style.setProperty('--shadow-2xl', theme.shadows['2xl']);
    
    // Radii
    root.style.setProperty('--radius-xs', theme.radii.xs);
    root.style.setProperty('--radius-sm', theme.radii.sm);
    root.style.setProperty('--radius-md', theme.radii.md);
    root.style.setProperty('--radius-lg', theme.radii.lg);
    root.style.setProperty('--radius-xl', theme.radii.xl);
    root.style.setProperty('--radius-2xl', theme.radii['2xl']);
    root.style.setProperty('--radius-full', theme.radii.full);
    
    // Apply special variables for Glass theme
    if (themeName === 'glass' && theme.effects?.backdrop && theme.effects.border?.gradient) {
      // Backdrop blur values
      root.style.setProperty('--backdrop-blur-sm', theme.effects.backdrop.blur.sm);
      root.style.setProperty('--backdrop-blur-md', theme.effects.backdrop.blur.md);
      root.style.setProperty('--backdrop-blur-lg', theme.effects.backdrop.blur.lg);
      root.style.setProperty('--backdrop-blur-xl', theme.effects.backdrop.blur.xl);
      
      // Glow shadows
      if (theme.shadows['blue-glow']) {
        root.style.setProperty('--shadow-blue-glow', theme.shadows['blue-glow']);
      }
      if (theme.shadows['purple-glow']) {
        root.style.setProperty('--shadow-purple-glow', theme.shadows['purple-glow']);
      }
      if (theme.shadows['white-glow']) {
        root.style.setProperty('--shadow-white-glow', theme.shadows['white-glow']);
      }
      if (theme.shadows['multi-glow']) {
        root.style.setProperty('--shadow-multi-glow', theme.shadows['multi-glow']);
      }
      
      // Gradient borders
      root.style.setProperty('--border-gradient-primary', theme.effects.border.gradient.primary);
      root.style.setProperty('--border-gradient-rainbow', theme.effects.border.gradient.rainbow);
    }
    
    // Apply special variables for Tech Dark theme
    if (themeName === 'techDark' && theme.colors.accent) {
      // Accent colors
      if (theme.colors.accent.purple) {
        root.style.setProperty('--accent-purple', theme.colors.accent.purple.base);
      }
      if (theme.colors.accent.blue) {
        root.style.setProperty('--accent-blue', theme.colors.accent.blue.base);
      }
      if (theme.colors.accent.cyan) {
        root.style.setProperty('--accent-cyan', theme.colors.accent.cyan.base);
      }
      if (theme.colors.accent.pink) {
        root.style.setProperty('--accent-pink', theme.colors.accent.pink.base);
      }
      
      // Glow shadows
      if (theme.shadows['blue-glow']) {
        root.style.setProperty('--shadow-blue-glow', theme.shadows['blue-glow']);
      }
      if (theme.shadows['purple-glow']) {
        root.style.setProperty('--shadow-purple-glow', theme.shadows['purple-glow']);
      }
      if (theme.shadows['multi-glow']) {
        root.style.setProperty('--shadow-multi-glow', theme.shadows['multi-glow']);
      }
      
      // Gradient borders
      if (theme.effects?.border?.gradient) {
        root.style.setProperty('--border-gradient-primary', theme.effects.border.gradient.primary);
        root.style.setProperty('--border-gradient-rainbow', theme.effects.border.gradient.rainbow);
      }
    }
    
    // Set font family
    root.style.setProperty('--font-sans', theme.typography.fontFamily.sans);
    root.style.setProperty('--font-mono', theme.typography.fontFamily.mono);
    
    // Set animations
    root.style.setProperty('--duration-normal', theme.animations.durations.normal);
    root.style.setProperty('--ease-in-out', theme.animations.easings.easeInOut);
  };
  
  // Create a function to change the theme
  const setTheme = (newTheme: ThemeName): void => {
    if (typeof newTheme === 'string' && getTheme(newTheme)) {
      setThemeName(newTheme);
    }
  };
  
  // Context value
  const value: ThemeContextType = {
    theme: themeName,
    setTheme,
    themes: Object.keys(getTheme('all') || {}),
    themeObject: theme,
  };
  
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
};