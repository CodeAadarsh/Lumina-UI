import { useContext } from 'react';
import { ThemeProvider } from '../providers/ThemeProvider';

/**
 * A safe version of useTheme that provides a default if the context is not available
 * @returns {Object} Theme context or default theme object
 */
export const useSafeTheme = () => {
  try {
    // Try to use the theme context
    const context = useContext(ThemeProvider);
    
    if (context === undefined) {
      console.warn('ThemeProvider not found, using default theme');
      return { theme: 'enterprise' };
    }
    
    return context;
  } catch (error) {
    // If context is not available, return a default theme object
    console.warn('Error accessing ThemeProvider, using default theme');
    return { theme: 'enterprise' };
  }
};