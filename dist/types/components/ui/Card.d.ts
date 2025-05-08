import { HTMLAttributes, ReactNode } from 'react';
import { VariantProps } from 'class-variance-authority';
declare const cardVariants: (props?: ({
    variant?: "default" | "glass" | "outline" | "glass-dark" | "glass-frost" | "glass-premium" | "gradient-blue-purple" | "gradient-cyan-blue" | "gradient-emerald-cyan" | "gradient-amber-orange" | "glow-blue" | "glow-purple" | "glow-cyan" | "glow-emerald" | "glow-amber" | "glow-pink" | "premium-blue" | "premium-purple" | "neumorphic-light" | "neumorphic-dark" | "shimmer-light" | "shimmer-dark" | "solid" | "elevated" | "gradient-subtle" | "gradient-blue" | "gradient-purple" | "gradient-cyan" | "gradient-emerald" | "dark-elevated" | "dark-glass" | "dark-gradient" | "premium-cyan" | "premium-emerald" | null | undefined;
    padding?: "xs" | "sm" | "md" | "lg" | "xl" | "none" | null | undefined;
    rounded?: "2xl" | "sm" | "md" | "lg" | "xl" | "none" | "full" | "3xl" | null | undefined;
    effect?: "purple-glow" | "multi-glow" | "none" | "glow" | "glow-sm" | "glow-lg" | "glow-pulse" | "float" | "shimmer" | "shimmer-fast" | "shimmer-subtle" | "gradientBorder" | "rainbowBorder" | "glassBorder" | "glassBorder-strong" | "scaleUp" | "scaleDown" | "highlight" | "highlight-subtle" | "hover" | "hover-subtle" | "hover-glow" | "pulseBorder" | "tilt-3d" | null | undefined;
    animation?: "none" | "float" | "pulse" | "pulse-slow" | "float-slow" | "fadeIn" | "slideUp" | "slideDown" | "slideIn" | "slideRight" | "zoomIn" | "blurIn" | null | undefined;
    border?: "default" | "none" | "bottom" | "top" | "thin" | "focus" | "strong" | "accent" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
type CardVariantProps = VariantProps<typeof cardVariants>;
export interface CardProps extends HTMLAttributes<HTMLDivElement>, CardVariantProps {
    /** Additional class names to apply to the card */
    className?: string;
    /** Content to display inside the card */
    children: ReactNode;
}
declare const Card: {
    ({ variant, padding, rounded, effect, animation, border, className, children, ...props }: CardProps): import("react/jsx-runtime").JSX.Element;
    animationKeyframes: string;
};
export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
    /** Additional class names to apply to the card header */
    className?: string;
    /** Content to display inside the card header */
    children: ReactNode;
}
declare const CardHeader: ({ className, children, ...props }: CardHeaderProps) => import("react/jsx-runtime").JSX.Element;
export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
    /** Additional class names to apply to the card title */
    className?: string;
    /** Content to display inside the card title */
    children: ReactNode;
}
declare const CardTitle: ({ className, children, ...props }: CardTitleProps) => import("react/jsx-runtime").JSX.Element;
export interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
    /** Additional class names to apply to the card description */
    className?: string;
    /** Content to display inside the card description */
    children: ReactNode;
}
declare const CardDescription: ({ className, children, ...props }: CardDescriptionProps) => import("react/jsx-runtime").JSX.Element;
export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
    /** Additional class names to apply to the card content */
    className?: string;
    /** Content to display inside the card content */
    children: ReactNode;
}
declare const CardContent: ({ className, children, ...props }: CardContentProps) => import("react/jsx-runtime").JSX.Element;
export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
    /** Additional class names to apply to the card footer */
    className?: string;
    /** Content to display inside the card footer */
    children: ReactNode;
}
declare const CardFooter: ({ className, children, ...props }: CardFooterProps) => import("react/jsx-runtime").JSX.Element;
export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
//# sourceMappingURL=Card.d.ts.map