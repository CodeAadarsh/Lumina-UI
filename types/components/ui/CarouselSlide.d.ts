import { ReactNode, CSSProperties, HTMLAttributes } from 'react';
import { VariantProps } from 'class-variance-authority';
declare const carouselContainerVariants: (props?: ({
    variant?: "default" | "glass" | "glass-premium" | "dark" | "elevated" | null | undefined;
    size?: "sm" | "md" | "lg" | "xl" | "full" | null | undefined;
    rounded?: "2xl" | "sm" | "md" | "lg" | "xl" | "none" | null | undefined;
    padding?: "sm" | "md" | "lg" | "none" | null | undefined;
    effect?: "purple-glow" | "multi-glow" | "none" | "glow" | "float" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const navButtonVariants: (props?: ({
    variant?: "default" | "glass" | "glass-premium" | "dark" | "elevated" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
    position?: "next" | "prev" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
type CarouselContainerVariantProps = VariantProps<typeof carouselContainerVariants>;
type NavButtonVariantProps = VariantProps<typeof navButtonVariants>;
/**
 * Carousel Component Props
 * @interface CarouselProps
 */
export interface CarouselProps extends HTMLAttributes<HTMLDivElement>, CarouselContainerVariantProps {
    /** Content to display inside the carousel */
    children: ReactNode;
    /** Whether to automatically cycle through slides */
    autoPlay?: boolean;
    /** Time between slide transitions when autoPlay is true (in ms) */
    autoPlayInterval?: number;
    /** Whether to show navigation arrows */
    showArrows?: boolean;
    /** Whether to show pagination indicators */
    showIndicators?: boolean;
    /** Whether the carousel should loop back to the start after reaching the end */
    loop?: boolean;
    /** Initial slide index (0-based) */
    initialIndex?: number;
    /** Size of the navigation buttons */
    navButtonSize?: NavButtonVariantProps['size'];
    /** Gap between slides in pixels */
    gap?: number;
    /** Additional class names to apply to the carousel */
    className?: string;
    /** Additional inline styles to apply to the carousel */
    style?: CSSProperties;
}
/**
 * Carousel Component
 * A responsive carousel/slider with navigation controls and indicators
 */
declare const Carousel: ({ variant, size, rounded, padding, effect, className, style, children, autoPlay, autoPlayInterval, showArrows, showIndicators, loop, initialIndex, navButtonSize, gap, ...props }: CarouselProps) => import("react/jsx-runtime").JSX.Element;
/**
 * Carousel Slide Component Props
 * @interface CarouselSlideProps
 */
export interface CarouselSlideProps extends HTMLAttributes<HTMLDivElement> {
    /** Content to display inside the carousel slide */
    children: ReactNode;
    /** Additional class names to apply to the carousel slide */
    className?: string;
}
/**
 * Carousel Slide Component
 * Individual slide container for the Carousel
 */
declare const CarouselSlide: ({ className, children, ...props }: CarouselSlideProps) => import("react/jsx-runtime").JSX.Element;
/**
 * Position options for the caption
 */
export type CaptionPosition = 'bottom' | 'top' | 'center' | 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
/**
 * Carousel Caption Component Props
 * @interface CarouselCaptionProps
 */
export interface CarouselCaptionProps extends HTMLAttributes<HTMLDivElement> {
    /** Content to display inside the carousel caption */
    children: ReactNode;
    /** Additional class names to apply to the carousel caption */
    className?: string;
    /** Position of the caption within the slide */
    position?: CaptionPosition;
}
/**
 * Carousel Caption Component
 * For adding captions or content overlays to carousel slides
 */
declare const CarouselCaption: ({ className, position, children, ...props }: CarouselCaptionProps) => import("react/jsx-runtime").JSX.Element;
export { Carousel, CarouselSlide, CarouselCaption };
//# sourceMappingURL=CarouselSlide.d.ts.map