import { ReactNode } from 'react';
export type ThemeName = 'default' | 'techDark' | 'glass' | 'enterprise';
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
export interface ThemeContextType {
    theme: ThemeName;
    setTheme: (theme: ThemeName) => void;
    themes: string[];
    themeObject: ThemeConfig;
}
export interface ThemeProviderProps {
    children: ReactNode;
    theme?: ThemeName;
    storageKey?: string;
}
export declare const ThemeProvider: ({ children, theme: initialTheme, storageKey, }: ThemeProviderProps) => import("react/jsx-runtime").JSX.Element;
export declare const useTheme: () => ThemeContextType;
//# sourceMappingURL=ThemeProvider.d.ts.map