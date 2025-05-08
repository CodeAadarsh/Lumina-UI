import { ThemeName, ThemeConfig } from './providers/ThemeProvider';

// Define the return type for the getTheme function
type GetThemeReturnType = 
  | ThemeConfig 
  | Record<string, ThemeConfig> // When 'all' is passed
  | undefined;

/**
 * Get theme configuration by name
 * @param name The name of the theme or 'all' to get all themes
 * @returns Theme configuration object or record of all themes
 */
export function getTheme(name: ThemeName | 'all'): GetThemeReturnType;

/**
 * Default theme name
 */
export const defaultTheme: ThemeName;

/**
 * Type for all available themes
 */
export interface ThemeRegistry {
  default: ThemeConfig;
  techDark: ThemeConfig;
  glass: ThemeConfig;
  enterprise: ThemeConfig;
  [key: string]: ThemeConfig; // Allow for additional themes
}