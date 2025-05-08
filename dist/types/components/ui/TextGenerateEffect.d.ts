import { default as React, HTMLAttributes } from 'react';
import { VariantProps } from 'class-variance-authority';
export type TextGenerateTheme = 'enterprise' | 'techDark' | 'glass' | 'neumorphicLight' | 'glow' | '3d';
export type CursorType = 'bar' | 'block' | 'underscore' | 'none';
export type EffectType = 'none' | 'glow' | 'gradient' | 'shadow';
export type SpeedType = 'slow' | 'normal' | 'fast';
declare const textGenerateVariants: (props?: ({
    theme?: "techDark" | "glass" | "enterprise" | "glow" | "neumorphicLight" | "3d" | null | undefined;
    size?: "2xl" | "xs" | "sm" | "md" | "lg" | "xl" | "3xl" | "4xl" | "5xl" | null | undefined;
    weight?: "bold" | "normal" | "medium" | "light" | "semibold" | null | undefined;
    cursor?: "none" | "bar" | "block" | "underscore" | null | undefined;
    effect?: "gradient" | "none" | "glow" | "shadow" | null | undefined;
    speed?: "normal" | "slow" | "fast" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const cursorVariants: (props?: ({
    theme?: "techDark" | "glass" | "enterprise" | "glow" | "neumorphicLight" | "3d" | null | undefined;
    cursor?: "none" | "bar" | "block" | "underscore" | null | undefined;
    effect?: "gradient" | "none" | "glow" | "shadow" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type TextGenerateVariantProps = VariantProps<typeof textGenerateVariants>;
export type CursorVariantProps = VariantProps<typeof cursorVariants>;
export interface TextGenerateEffectProps extends HTMLAttributes<HTMLSpanElement>, TextGenerateVariantProps {
    words: string;
    onComplete?: () => void;
    loop?: boolean;
    delay?: number;
    typingDelay?: number;
    theme?: TextGenerateTheme;
}
declare const TextGenerateEffect: React.FC<TextGenerateEffectProps>;
export { TextGenerateEffect, textGenerateVariants };
//# sourceMappingURL=TextGenerateEffect.d.ts.map