import { default as React, ReactNode } from 'react';
import { VariantProps } from 'class-variance-authority';
export type TestimonialTheme = 'enterprise' | 'techDark' | 'glass' | 'neumorphicLight' | 'glow' | '3d';
export type TestimonialSize = 'sm' | 'md' | 'lg';
export type TestimonialLayout = 'default' | 'horizontal' | 'stacked';
export type TestimonialAnimation = 'none' | 'float' | 'pulse' | 'tilt' | 'glow' | 'shimmer';
export type TestimonialHoverEffect = 'none' | 'lift' | 'border' | 'background';
export type AvatarShape = 'circle' | 'square' | 'hexagon';
declare const testimonialVariants: (props?: ({
    theme?: "techDark" | "glass" | "enterprise" | "glow" | "neumorphicLight" | "3d" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
    layout?: "default" | "horizontal" | "stacked" | null | undefined;
    animation?: "none" | "glow" | "float" | "shimmer" | "pulse" | "tilt" | null | undefined;
    hoverEffect?: "border" | "none" | "lift" | "background" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const quoteIconVariants: (props?: ({
    theme?: "techDark" | "glass" | "enterprise" | "glow" | "neumorphicLight" | "3d" | null | undefined;
    position?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const ratingVariants: (props?: ({
    theme?: "techDark" | "glass" | "enterprise" | "glow" | "neumorphicLight" | "3d" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const avatarVariants: (props?: ({
    theme?: "techDark" | "glass" | "enterprise" | "glow" | "neumorphicLight" | "3d" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
    shape?: "circle" | "square" | "hexagon" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type TestimonialVariantProps = VariantProps<typeof testimonialVariants>;
export type QuoteIconVariantProps = VariantProps<typeof quoteIconVariants>;
export type RatingVariantProps = VariantProps<typeof ratingVariants>;
export type AvatarVariantProps = VariantProps<typeof avatarVariants>;
export interface TestimonialProps extends React.HTMLAttributes<HTMLDivElement>, Omit<TestimonialVariantProps, 'theme'> {
    /** Custom className to apply to the component */
    className?: string;
    /** Theme to apply to the testimonial */
    theme?: TestimonialTheme;
    /** Size of the testimonial component */
    size?: TestimonialSize;
    /** Layout style for the testimonial */
    layout?: TestimonialLayout;
    /** Animation effect to apply */
    animation?: TestimonialAnimation;
    /** Hover effect to apply */
    hoverEffect?: TestimonialHoverEffect;
    /** URL of the avatar image */
    avatarUrl?: string;
    /** Alt text for the avatar image */
    avatarAlt?: string;
    /** Size of the avatar */
    avatarSize?: TestimonialSize;
    /** Shape of the avatar */
    avatarShape?: AvatarShape;
    /** Name of the testimonial author */
    authorName?: string;
    /** Title or position of the testimonial author */
    authorTitle?: string;
    /** Rating value (0-5) */
    rating?: number;
    /** Quote text content */
    quote?: string;
    /** Whether to show quote icons */
    showQuoteIcons?: boolean;
    /** Whether to enable 3D animation effect */
    animated3D?: boolean;
    /** Children elements to render inside the testimonial */
    children?: ReactNode;
}
/**
 * 3D Testimonial Component - Displays a rich testimonial with avatar, quote, and rating
 */
declare const Testimonial3D: React.FC<TestimonialProps>;
declare const Testimonial: React.FC<TestimonialProps>;
export { Testimonial, Testimonial3D, testimonialVariants };
//# sourceMappingURL=Testimonial3D.d.ts.map