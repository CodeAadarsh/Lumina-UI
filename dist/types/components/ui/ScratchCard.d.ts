import { default as React, ReactNode } from 'react';
export type ScratchCardTheme = 'default' | 'enterprise' | 'techDark' | 'glass' | 'neumorphic' | 'glow';
export type ScratchCardVariant = 'default' | 'prize' | 'ticket' | 'coupon';
export interface ScratchCardProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Custom class name for the component */
    className?: string;
    /** Width of the scratch card in pixels */
    width?: number;
    /** Height of the scratch card in pixels */
    height?: number;
    /** Size of the scratching brush in pixels */
    brushSize?: number;
    /** URL of the image to show on cover (before scratching) */
    coverImage?: string;
    /** Background color of the cover layer */
    coverColor?: string;
    /** URL of the image to reveal after scratching */
    revealImage?: string;
    /** Content to reveal after scratching (JSX) */
    revealContent?: ReactNode;
    /** Percentage threshold at which the card is considered fully revealed (0-100) */
    completionThreshold?: number;
    /** Callback function triggered when scratching reaches the completion threshold */
    onComplete?: () => void;
    /** Whether the scratch card is disabled */
    disabled?: boolean;
    /** Whether to immediately reveal the entire card */
    revealAll?: boolean;
    /** Theme to apply to the scratch card */
    theme?: ScratchCardTheme;
    /** Visual variant of the scratch card */
    variant?: ScratchCardVariant;
}
export declare const ScratchCard: React.FC<ScratchCardProps>;
export default ScratchCard;
//# sourceMappingURL=ScratchCard.d.ts.map