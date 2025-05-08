import { default as React, ReactNode, MouseEvent, HTMLAttributes } from 'react';
import { VariantProps } from 'class-variance-authority';
export type HeaderTheme = 'enterprise' | 'techDark' | 'glass';
export type TransparentColor = 'white' | 'default';
declare const headerVariants: (props?: ({
    theme?: "techDark" | "glass" | "enterprise" | null | undefined;
    position?: "fixed" | "static" | "sticky" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
    width?: "full" | "contained" | null | undefined;
    variant?: "default" | "transparent" | "elevated" | "colored" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const navVariants: (props?: ({
    placement?: "center" | "end" | "start" | "between" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const navItemVariants: (props?: ({
    theme?: "techDark" | "glass" | "enterprise" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
    active?: boolean | null | undefined;
    variant?: "default" | "solid" | "subtle" | "pill" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
type HeaderVariantProps = VariantProps<typeof headerVariants>;
type NavVariantProps = VariantProps<typeof navVariants>;
type NavItemVariantProps = VariantProps<typeof navItemVariants>;
export interface HeaderProps extends Omit<HTMLAttributes<HTMLElement>, 'logo'>, HeaderVariantProps {
    /** Logo element or string URL to logo image */
    logo?: ReactNode | string;
    /** Function called when logo is clicked */
    onLogoClick?: (event: MouseEvent<HTMLElement>) => void;
    /** Whether to hide the header when scrolling down */
    hideOnScroll?: boolean;
    /** Scroll threshold in pixels to trigger header style changes */
    scrollThreshold?: number;
    /** Breakpoint at which to show the mobile menu */
    mobileMenuBreakpoint?: string;
    /** Whether to use a transparent header before scrolling */
    transparent?: boolean;
    /** Text color to use when header is transparent */
    transparentColor?: TransparentColor;
    /** ReactNode children */
    children?: ReactNode;
    /** Additional class names */
    className?: string;
}
export interface NavigationProps extends HTMLAttributes<HTMLElement>, NavVariantProps {
    /** ReactNode children */
    children: ReactNode;
    /** Additional class names */
    className?: string;
}
export interface NavItemProps extends HTMLAttributes<HTMLElement>, NavItemVariantProps {
    /** URL for anchor tag - if provided, renders as anchor, otherwise as button */
    href?: string;
    /** Click handler function */
    onClick?: (event: MouseEvent<HTMLElement>) => void;
    /** ReactNode children */
    children: ReactNode;
    /** Additional class names */
    className?: string;
}
export interface HeaderComponent extends React.ForwardRefExoticComponent<HeaderProps & React.RefAttributes<HTMLElement>> {
    Navigation: React.ForwardRefExoticComponent<NavigationProps & React.RefAttributes<HTMLElement>>;
    NavItem: React.ForwardRefExoticComponent<NavItemProps & React.RefAttributes<HTMLElement>>;
}
declare const Header: HeaderComponent;
export { Header, headerVariants, navVariants, navItemVariants };
//# sourceMappingURL=Header.d.ts.map