import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';
export type HoverCardTheme = 'enterprise' | 'techDark' | 'glass';
export type HoverCardSize = 'sm' | 'md' | 'lg';
export type HoverCardIntensity = 'subtle' | 'medium' | 'strong';
export type HoverCardEffect = 'glow' | 'shimmer' | 'lift' | 'none';
declare const hoverCard3DVariants: (props?: ({
    theme?: "techDark" | "glass" | "enterprise" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
    intensity?: "medium" | "strong" | "subtle" | null | undefined;
    hoverEffect?: "none" | "glow" | "shimmer" | "lift" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type HoverCard3DVariantProps = VariantProps<typeof hoverCard3DVariants>;
export interface HoverCard3DProps extends React.HTMLAttributes<HTMLDivElement>, Omit<HoverCard3DVariantProps, 'theme'> {
    /** Theme to use for the card */
    theme?: HoverCardTheme;
    /** Size variant of the card */
    size?: HoverCardSize;
    /** Intensity of the 3D effect */
    intensity?: HoverCardIntensity;
    /** Additional hover effect for the card */
    hoverEffect?: HoverCardEffect;
    /** Whether to enable the glare effect */
    glareEnabled?: boolean;
    /** Whether to reverse the rotation direction */
    rotateReverse?: boolean;
    /** Opacity of the glare effect (0-1) */
    glareOpacity?: number;
    /** Color of the glare (RGB format) */
    glareColor?: string;
    /** Maximum rotation in degrees */
    maxRotation?: number;
    /** Perspective value in pixels */
    perspective?: number;
    /** React children */
    children: React.ReactNode;
    /** Additional class names */
    className?: string;
}
declare const HoverCard3D: React.NamedExoticComponent<HoverCard3DProps & React.RefAttributes<HTMLDivElement>>;
export interface HoverCard3DWithThemeProps extends HoverCard3DProps {
    theme?: HoverCardTheme;
}
declare const HoverCard3DWithTheme: React.NamedExoticComponent<HoverCard3DWithThemeProps & React.RefAttributes<HTMLDivElement>>;
export { HoverCard3D, HoverCard3DWithTheme, hoverCard3DVariants };
//# sourceMappingURL=HoverCard3D.d.ts.map