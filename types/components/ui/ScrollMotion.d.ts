import { default as React, ReactNode, CSSProperties, ElementType } from 'react';
import { VariantProps } from 'class-variance-authority';
export type AnimationType = 'none' | 'fadeIn' | 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'scaleInUp' | 'rotateIn' | 'rotateInLeft' | 'flipInX' | 'flipInY' | 'tiltIn' | 'bounceIn' | 'blurIn' | 'glowIn';
export type DurationType = 'faster' | 'fast' | 'normal' | 'slow' | 'slower';
export type DelayType = 'none' | 'small' | 'medium' | 'large' | 'extraLarge';
export type EasingType = 'linear' | 'ease' | 'easeIn' | 'easeOut' | 'easeInOut' | 'spring' | 'bounce';
export type StaggerType = 'none' | 'small' | 'medium' | 'large';
export type ThresholdType = 'default' | 'half' | 'most' | 'full';
export type OffsetType = 'none' | 'small' | 'medium' | 'large';
export type DirectionType = 'x' | 'y' | 'both';
declare const scrollMotionVariants: (props?: ({
    animation?: "none" | "fadeIn" | "blurIn" | "fadeInUp" | "fadeInDown" | "fadeInLeft" | "fadeInRight" | "scaleIn" | "scaleInUp" | "rotateIn" | "rotateInLeft" | "flipInX" | "flipInY" | "tiltIn" | "bounceIn" | "glowIn" | null | undefined;
    duration?: "normal" | "slow" | "fast" | "faster" | "slower" | null | undefined;
    delay?: "small" | "none" | "medium" | "large" | "extraLarge" | null | undefined;
    easing?: "ease" | "linear" | "bounce" | "easeIn" | "easeOut" | "easeInOut" | "spring" | null | undefined;
    stagger?: "small" | "none" | "medium" | "large" | null | undefined;
    once?: boolean | null | undefined;
    threshold?: "default" | "full" | "half" | "most" | null | undefined;
    offset?: "small" | "none" | "medium" | "large" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type ScrollMotionVariantProps = VariantProps<typeof scrollMotionVariants>;
export interface ScrollMotionProps extends Omit<React.HTMLAttributes<HTMLElement>, 'as'> {
    /** Animation type to apply */
    animation?: AnimationType;
    /** Animation duration preset */
    duration?: DurationType;
    /** Animation delay preset */
    delay?: DelayType;
    /** Animation easing function */
    easing?: EasingType;
    /** Stagger animation for children */
    stagger?: StaggerType;
    /** Whether to animate only once or on every scroll */
    once?: boolean;
    /** Viewport threshold to trigger animation */
    threshold?: ThresholdType;
    /** Offset to start animation before fully in viewport */
    offset?: OffsetType;
    /** HTML element type to render */
    as?: ElementType;
    /** React children */
    children: ReactNode;
    /** Additional class name */
    className?: string;
    /** Custom inline styles */
    style?: CSSProperties;
    /** 3D perspective value in pixels */
    perspective?: number;
    /** 3D depth value in pixels */
    depth?: number;
    /** Initial X rotation in degrees */
    rotateX?: number;
    /** Initial Y rotation in degrees */
    rotateY?: number;
    /** Initial Z rotation in degrees */
    rotateZ?: number;
}
/**
 * ScrollMotion Component
 * Triggers animations based on scroll position
 */
declare const ScrollMotion: React.ForwardRefExoticComponent<ScrollMotionProps & React.RefAttributes<HTMLElement>>;
export interface ScrollMotionItemProps extends React.HTMLAttributes<HTMLDivElement> {
    /** React children */
    children: ReactNode;
    /** Additional class name */
    className?: string;
    /** Custom inline styles */
    style?: CSSProperties;
}
/**
 * ScrollMotionItem Component
 * For use inside ScrollMotion when using staggered animations
 */
declare const ScrollMotionItem: React.ForwardRefExoticComponent<ScrollMotionItemProps & React.RefAttributes<HTMLDivElement>>;
export interface ScrollMotion3DProps extends ScrollMotionProps {
    /** 3D perspective value in pixels */
    perspective?: number;
    /** 3D depth value in pixels */
    depth?: number;
    /** Initial X rotation in degrees */
    rotateX?: number;
    /** Initial Y rotation in degrees */
    rotateY?: number;
    /** Initial Z rotation in degrees */
    rotateZ?: number;
}
/**
 * ScrollMotion3D Component
 * Enhanced ScrollMotion specifically for 3D motion effects
 */
declare const ScrollMotion3D: React.ForwardRefExoticComponent<ScrollMotion3DProps & React.RefAttributes<HTMLElement>>;
export interface ParallaxScrollItemProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Parallax speed multiplier (0-1 for normal, negative for opposite direction) */
    speed?: number;
    /** Direction of parallax effect */
    direction?: DirectionType;
    /** React children */
    children: ReactNode;
    /** Additional class name */
    className?: string;
    /** Custom inline styles */
    style?: CSSProperties;
}
/**
 * ParallaxScrollItem Component
 * Creates a parallax effect on scroll
 */
declare const ParallaxScrollItem: React.ForwardRefExoticComponent<ParallaxScrollItemProps & React.RefAttributes<HTMLDivElement>>;
declare const scrollMotionStyles = "\n/* ScrollMotion Animation Classes */\n.motion-fade-in.opacity-0 {\n  transition-property: opacity, transform;\n}\n.motion-fade-in.opacity-100 {\n  opacity: 1;\n}\n\n.motion-fade-in-up.opacity-0 {\n  transform: translateY(40px);\n  transition-property: opacity, transform;\n}\n.motion-fade-in-up.opacity-100 {\n  opacity: 1;\n  transform: translateY(0);\n}\n\n.motion-fade-in-down.opacity-0 {\n  transform: translateY(-40px);\n  transition-property: opacity, transform;\n}\n.motion-fade-in-down.opacity-100 {\n  opacity: 1;\n  transform: translateY(0);\n}\n\n.motion-fade-in-left.opacity-0 {\n  transform: translateX(40px);\n  transition-property: opacity, transform;\n}\n.motion-fade-in-left.opacity-100 {\n  opacity: 1;\n  transform: translateX(0);\n}\n\n.motion-fade-in-right.opacity-0 {\n  transform: translateX(-40px);\n  transition-property: opacity, transform;\n}\n.motion-fade-in-right.opacity-100 {\n  opacity: 1;\n  transform: translateX(0);\n}\n\n.motion-scale-in.opacity-0 {\n  transform: scale(0.95);\n  transition-property: opacity, transform;\n}\n.motion-scale-in.opacity-100 {\n  opacity: 1;\n  transform: scale(1);\n}\n\n.motion-scale-in-up.opacity-0 {\n  transform: scale(0.95) translateY(40px);\n  transition-property: opacity, transform;\n}\n.motion-scale-in-up.opacity-100 {\n  opacity: 1;\n  transform: scale(1) translateY(0);\n}\n\n.motion-rotate-in.opacity-0 {\n  transform: rotate(12deg);\n  transition-property: opacity, transform;\n}\n.motion-rotate-in.opacity-100 {\n  opacity: 1;\n  transform: rotate(0);\n}\n\n.motion-rotate-in-left.opacity-0 {\n  transform: rotate(-12deg);\n  transition-property: opacity, transform;\n}\n.motion-rotate-in-left.opacity-100 {\n  opacity: 1;\n  transform: rotate(0);\n}\n\n.motion-flip-in-x.opacity-0 {\n  transform: perspective(1000px) rotateX(90deg);\n  transition-property: opacity, transform;\n}\n.motion-flip-in-x.opacity-100 {\n  opacity: 1;\n  transform: perspective(1000px) rotateX(0);\n}\n\n.motion-flip-in-y.opacity-0 {\n  transform: perspective(1000px) rotateY(90deg);\n  transition-property: opacity, transform;\n}\n.motion-flip-in-y.opacity-100 {\n  opacity: 1;\n  transform: perspective(1000px) rotateY(0);\n}\n\n.motion-tilt-in.opacity-0 {\n  transform: perspective(1000px) rotateX(10deg);\n  transition-property: opacity, transform;\n}\n.motion-tilt-in.opacity-100 {\n  opacity: 1;\n  transform: perspective(1000px) rotateX(0);\n}\n\n.motion-bounce-in.opacity-0 {\n  transform: scale(0.9);\n  transition-property: opacity, transform;\n}\n.motion-bounce-in.opacity-100 {\n  opacity: 1;\n  transform: scale(1);\n}\n\n.motion-blur-in.opacity-0 {\n  filter: blur(10px);\n  transition-property: opacity, filter;\n}\n.motion-blur-in.opacity-100 {\n  opacity: 1;\n  filter: blur(0);\n}\n\n.motion-glow-in.opacity-0 {\n  box-shadow: 0 0 0 rgba(59, 130, 246, 0);\n  transition-property: opacity, box-shadow;\n}\n.motion-glow-in.opacity-100 {\n  opacity: 1;\n  box-shadow: 0 0 40px rgba(59, 130, 246, 0.5);\n}\n\n/* Duration Classes */\n.motion-duration-300 {\n  transition-duration: 300ms;\n}\n.motion-duration-500 {\n  transition-duration: 500ms;\n}\n.motion-duration-700 {\n  transition-duration: 700ms;\n}\n.motion-duration-1000 {\n  transition-duration: 1000ms;\n}\n.motion-duration-1500 {\n  transition-duration: 1500ms;\n}\n\n/* Delay Classes */\n.motion-delay-0 {\n  transition-delay: 0ms;\n}\n.motion-delay-100 {\n  transition-delay: 100ms;\n}\n.motion-delay-300 {\n  transition-delay: 300ms;\n}\n.motion-delay-500 {\n  transition-delay: 500ms;\n}\n.motion-delay-1000 {\n  transition-delay: 1000ms;\n}\n\n/* Easing Classes */\n.motion-easing-linear {\n  transition-timing-function: linear;\n}\n.motion-easing-ease {\n  transition-timing-function: ease;\n}\n.motion-easing-ease-in {\n  transition-timing-function: ease-in;\n}\n.motion-easing-ease-out {\n  transition-timing-function: ease-out;\n}\n.motion-easing-ease-in-out {\n  transition-timing-function: ease-in-out;\n}\n.motion-easing-spring {\n  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\n.motion-easing-bounce {\n  transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n";
export { ScrollMotion, ScrollMotionItem, ScrollMotion3D, ParallaxScrollItem, scrollMotionStyles };
//# sourceMappingURL=ScrollMotion.d.ts.map