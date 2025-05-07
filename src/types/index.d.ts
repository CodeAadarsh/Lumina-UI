// types/index.d.ts
declare module 'lumina-ui-react' {
    import { ReactNode, ComponentProps, ComponentType } from 'react';
  
    // ThemeProvider
    export interface ThemeProviderProps {
      children: ReactNode;
      theme?: 'enterprise' | 'techDark' | 'glass' | 'neumorphic';
      storageKey?: string;
    }
    export const ThemeProvider: ComponentType<ThemeProviderProps>;
    export const useTheme: () => { 
      theme: string; 
      setTheme: (theme: string) => void;
      themes: string[];
      themeObject: any;
    };
  
    // UltimateNavbar
    export interface UltimateNavbarProps extends ComponentProps<'nav'> {
      theme?: 'enterprise' | 'techDark' | 'glass' | 'neumorphic';
      display?: 'default' | 'iconsOnly' | 'textOnly';
      orientation?: 'horizontal' | 'vertical';
      size?: 'xs' | 'sm' | 'md' | 'lg';
      alignment?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
      padding?: 'none' | 'xs' | 'sm' | 'md' | 'lg';
      border?: 'none' | 'bottom' | 'top' | 'left' | 'right' | 'all';
      shadow?: 'none' | 'sm' | 'md' | 'lg' | 'inner';
      rounded?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
      animation?: 'none' | 'slide' | 'fade' | 'scale' | 'bounce' | 'elastic' | 'spring';
      visualStyle?: 'default' | 'floating' | 'pill' | 'minimal' | 'outlined' | 'gradient' | 'glowing';
      density?: 'default' | 'compact' | 'comfortable';
      dividers?: boolean;
      responsive?: boolean;
      collapseBreakpoint?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
      collapsible?: boolean;
      tooltipsEnabled?: boolean;
      themeToggle?: boolean;
      glowOnHover?: boolean;
      sticky?: boolean;
      backdrop?: boolean;
    }
  
    // UltimateNavbar.Item
    export interface UltimateNavbarItemProps extends ComponentProps<'button'> {
      theme?: 'enterprise' | 'techDark' | 'glass' | 'neumorphic';
      display?: 'default' | 'iconsOnly' | 'textOnly';
      size?: 'xs' | 'sm' | 'md' | 'lg';
      active?: boolean;
      variant?: 'text' | 'filled' | 'outlined' | 'underlined' | 'minimal' | 'neumorphic' | 'neumorphicInset' | 'neumorphicConvex' | 'glassy' | 'pill' | 'floating' | 'glowing' | 'gradient';
      position?: 'auto' | 'inline' | 'block';
      disabled?: boolean;
      rounded?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
      hoverEffect?: 'none' | 'fade' | 'grow' | 'shrink' | 'glow' | 'slide' | 'underline' | 'lift' | 'press' | 'tilt';
      animation?: 'none' | 'bounce' | 'pulse' | 'spin' | 'shimmer' | 'wobble' | 'elastic' | 'blink' | 'spring';
      icon?: ReactNode;
      href?: string;
      tooltip?: string;
      tooltipEnabled?: boolean;
      tooltipPosition?: 'top' | 'bottom' | 'left' | 'right';
      badge?: boolean;
      badgeContent?: string | number;
      badgeColor?: 'primary' | 'success' | 'warning' | 'danger';
      iconAnimation?: string;
      showRipple?: boolean;
    }
  
    // Define UltimateNavbar with its subcomponents
    export const UltimateNavbar: ComponentType<UltimateNavbarProps> & {
      Item: ComponentType<UltimateNavbarItemProps>;
      Section: ComponentType<any>;
      Divider: ComponentType<any>;
      Logo: ComponentType<any>;
      Search: ComponentType<any>;
    };
  
    // Add more component definitions...
    
    // Define styles export
    export const navbarVariants: any;
    export const navbarItemVariants: any;
  }