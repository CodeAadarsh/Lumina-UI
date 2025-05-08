import { default as React, HTMLAttributes, CSSProperties, ReactNode } from 'react';
import { VariantProps } from 'class-variance-authority';
export type MotionCardVariant = 'default' | 'elevated' | 'glass' | 'glass-premium' | 'gradient' | 'dark' | 'neumorphic-light' | 'neumorphic-dark';
export type MotionCardIntensity = 'subtle' | 'medium' | 'strong';
export type MotionCardRounded = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
export type MotionCardGlow = 'none' | 'subtle' | 'medium' | 'strong';
export type MotionCardHighlight = 'none' | 'subtle' | 'medium' | 'strong';
export type MotionCardEffect = 'none' | 'float' | 'shimmer' | 'border' | 'multi-border';
declare const motionCardVariants: (props?: ({
    variant?: "default" | "glass" | "gradient" | "glass-premium" | "neumorphic-light" | "neumorphic-dark" | "dark" | "elevated" | null | undefined;
    intensity?: "medium" | "strong" | "subtle" | null | undefined;
    rounded?: "2xl" | "sm" | "md" | "lg" | "xl" | "none" | "full" | "3xl" | null | undefined;
    glow?: "none" | "medium" | "strong" | "subtle" | null | undefined;
    highlight?: "none" | "medium" | "strong" | "subtle" | null | undefined;
    effect?: "border" | "none" | "float" | "shimmer" | "multi-border" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type MotionCardVariantProps = VariantProps<typeof motionCardVariants>;
export interface MotionCardProps extends HTMLAttributes<HTMLDivElement>, MotionCardVariantProps {
    variant?: MotionCardVariant;
    intensity?: MotionCardIntensity;
    rounded?: MotionCardRounded;
    glow?: MotionCardGlow;
    highlight?: MotionCardHighlight;
    effect?: MotionCardEffect;
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
    resetOnLeave?: boolean;
    disableRotation?: boolean;
    disableScale?: boolean;
    disableGlow?: boolean;
    disableHighlight?: boolean;
    glowColor?: string;
}
/**
 * 3D Motion Card Component
 * A card component that responds to mouse movement with 3D rotation effects
 */
export declare const MotionCard: React.FC<MotionCardProps>;
export interface MotionCardContentProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: ReactNode;
}
export declare const MotionCardContent: React.FC<MotionCardContentProps>;
export interface MotionCardLayerProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: ReactNode;
    depth?: number;
    disableDepth?: boolean;
}
export declare const MotionCardLayer: React.FC<MotionCardLayerProps>;
export { motionCardVariants };
//# sourceMappingURL=MotionCard.d.ts.map