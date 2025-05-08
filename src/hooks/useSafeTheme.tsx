import { useTheme } from '../providers/ThemeProvider';
import { ThemeName, ThemeConfig } from '../providers/ThemeProvider';

/**
 * A safe wrapper around useTheme that returns default values if 
 * ThemeProvider is not in the component tree
 */
export interface UseSafeThemeReturn {
  /** The current theme name */
  theme: ThemeName;
  /** Complete theme configuration object */
  themeObject: ThemeConfig;
  /** Function to set the current theme */
  setTheme: (theme: ThemeName) => void;
  /** List of available themes */
  themes: string[];
}

/**
 * Hook that safely accesses theme context
 * Falls back to default values if used outside of ThemeProvider
 */
export function useSafeTheme(): UseSafeThemeReturn {
  try {
    return useTheme();
  } catch (error) {
    // Return a fallback when used outside ThemeProvider
    return {
      theme: 'default',
      themeObject: {} as ThemeConfig, // Empty fallback
      setTheme: () => {
        console.warn('ThemeProvider not found in component tree. Theme cannot be changed.');
      },
      themes: ['default'],
    };
  }
}