import { default as React, ReactNode, HTMLAttributes } from 'react';
import { VariantProps } from 'class-variance-authority';
export type HeroGridTheme = 'enterprise' | 'techDark' | 'glass';
export type HeroGridLayout = 'classic' | 'centered' | 'asymmetric' | 'feature';
export type HeroGridSize = 'sm' | 'md' | 'lg' | 'full';
export type HeroGridSpacing = 'compact' | 'normal' | 'relaxed' | 'spacious';
export type HeroGridBackground = 'solid' | 'gradient' | 'image' | 'pattern';
export type HeroGridAlignment = 'start' | 'center' | 'end';
declare const heroGridVariants: (props?: ({
    theme?: "techDark" | "glass" | "enterprise" | null | undefined;
    layout?: "classic" | "centered" | "asymmetric" | "feature" | null | undefined;
    size?: "sm" | "md" | "lg" | "full" | null | undefined;
    spacing?: "normal" | "compact" | "relaxed" | "spacious" | null | undefined;
    background?: "gradient" | "solid" | "pattern" | "image" | null | undefined;
    alignment?: "center" | "end" | "start" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type HeroGridVariantProps = VariantProps<typeof heroGridVariants>;
export interface HeroGridProps extends HTMLAttributes<HTMLElement>, HeroGridVariantProps {
    children?: ReactNode;
    theme?: HeroGridTheme;
    backgroundImage?: string;
    backgroundOverlay?: boolean;
    accentColor?: string;
    containerClassName?: string;
}
declare const HeroGrid: React.NamedExoticComponent<HeroGridProps & React.RefAttributes<HTMLElement>>;
export { HeroGrid, heroGridVariants };
//# sourceMappingURL=HeroGrid.d.ts.map