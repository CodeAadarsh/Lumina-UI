import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';
export type TestimonialTheme = 'enterprise' | 'techDark' | 'glass' | 'neumorphicLight' | 'glow' | '3d';
export type TestimonialPosition = 'front' | 'middle' | 'back' | 'hidden';
export interface TestimonialItem {
    name: string;
    title?: string;
    quote: string;
    image?: string;
}
declare const testimonialSliderVariants: (props?: ({
    theme?: "techDark" | "glass" | "enterprise" | "glow" | "neumorphicLight" | "3d" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const testimonialImageCardVariants: (props?: ({
    theme?: "techDark" | "glass" | "enterprise" | "glow" | "neumorphicLight" | "3d" | null | undefined;
    position?: "hidden" | "middle" | "front" | "back" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type TestimonialSliderVariantsProps = VariantProps<typeof testimonialSliderVariants>;
export type TestimonialImageCardVariantsProps = VariantProps<typeof testimonialImageCardVariants>;
export interface AnimatedTestimonialSliderProps extends React.HTMLAttributes<HTMLDivElement>, TestimonialSliderVariantsProps {
    testimonials: TestimonialItem[];
    autoplay?: boolean;
    autoplaySpeed?: number;
}
export declare const AnimatedTestimonialSlider: React.FC<AnimatedTestimonialSliderProps>;
export { testimonialSliderVariants };
//# sourceMappingURL=AnimatedTestimonialSlider.d.ts.map