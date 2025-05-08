import { default as React, ButtonHTMLAttributes, ReactNode } from 'react';
import { VariantProps } from 'class-variance-authority';
declare const buttonVariants: (props?: ({
    variant?: "glass" | "gradient" | "primary" | "secondary" | "outline" | "ghost" | "destructive" | "glass-dark" | "glass-frost" | "glass-deep" | "glass-premium" | "glass-gradient" | "gradient-blue-purple" | "gradient-cyan-blue" | "gradient-emerald-cyan" | "gradient-amber-orange" | "accent-blue" | "accent-purple" | "accent-cyan" | "accent-pink" | "accent-amber" | "accent-emerald" | "glow-blue" | "glow-purple" | "glow-cyan" | "glow-emerald" | "glow-amber" | "glow-pink" | "glow-white" | "premium-dark" | "premium-light" | "premium-blue" | "premium-purple" | "neumorphic-light" | "neumorphic-dark" | "shimmer-light" | "shimmer-dark" | "shimmer-blue" | "shimmer-purple" | null | undefined;
    size?: "2xl" | "xs" | "sm" | "md" | "lg" | "xl" | "icon" | "icon-sm" | "icon-lg" | null | undefined;
    rounded?: "2xl" | "sm" | "md" | "lg" | "xl" | "none" | "full" | null | undefined;
    effect?: "none" | "glow" | "glow-sm" | "glow-lg" | "glow-pulse" | "float" | "shimmer" | "shimmer-fast" | "shimmer-subtle" | "gradientBorder" | "rainbowBorder" | "glassBorder" | "glassBorder-strong" | "scaleUp" | "scaleDown" | "magnetic" | "highlight" | "highlight-subtle" | null | undefined;
    animation?: "none" | "float" | "pulse" | "pulse-slow" | "float-slow" | "fadeIn" | "slideUp" | "slideDown" | "slideIn" | "slideRight" | "zoomIn" | "blurIn" | null | undefined;
    mode?: "none" | "light-only" | "dark-only" | "light-optimized" | "dark-optimized" | null | undefined;
    fullWidth?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
type ButtonVariantProps = VariantProps<typeof buttonVariants>;
export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>, ButtonVariantProps {
    /** Additional class names to apply to the button */
    className?: string;
    /** Content to display inside the button */
    children: ReactNode;
    /** Whether the button is disabled */
    disabled?: boolean;
    /** Whether the button is in a loading state */
    loading?: boolean;
    /** Make the button take up the full width of its container */
    fullWidth?: boolean;
    /** Icon to display on the left side of the button text */
    leftIcon?: ReactNode;
    /** Icon to display on the right side of the button text */
    rightIcon?: ReactNode;
}
declare const Button: React.NamedExoticComponent<ButtonProps>;
export default Button;
//# sourceMappingURL=Button.d.ts.map