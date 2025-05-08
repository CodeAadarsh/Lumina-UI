import { default as React, ReactNode, CSSProperties } from 'react';
/**
 * Grid column configurations
 */
export type BentoGridCols = 1 | 2 | 3 | 4;
/**
 * Grid gap size options
 */
export type BentoGridGap = 2 | 4 | 6 | 8 | 12 | 16;
/**
 * Available hover effects for BentoGridItems
 */
export type BentoGridHoverEffect = 'none' | 'tilt' | 'float' | 'magnet' | 'glow';
/**
 * Intensity level for hover effects
 */
export type HoverEffectIntensity = 0.5 | 1 | 1.5 | 2;
/**
 * BentoGrid component props
 */
export interface BentoGridProps {
    /** Additional CSS classes to apply */
    className?: string;
    /** Grid child components */
    children: ReactNode;
    /** Number of columns in the grid */
    cols?: BentoGridCols;
    /** Gap between grid items */
    gap?: BentoGridGap;
    /** Maximum width of the grid container */
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '7xl' | 'none';
    /** Vertical rhythm for grid rows */
    rowHeight?: 'auto' | 'uniform';
}
/**
 * A responsive grid layout inspired by Bento box designs
 */
export declare const BentoGrid: React.NamedExoticComponent<BentoGridProps>;
/**
 * BentoGridItem component props
 */
export interface BentoGridItemProps {
    /** Additional CSS classes to apply */
    className?: string;
    /** Title displayed in the item */
    title?: ReactNode;
    /** Description text displayed in the item */
    description?: ReactNode;
    /** Component for the header section (usually an image) */
    header?: ReactNode;
    /** Icon component or content for the top section */
    icon?: ReactNode;
    /** Hover effect type */
    hoverEffect?: BentoGridHoverEffect;
    /** Intensity of the hover effect */
    intensity?: HoverEffectIntensity;
    /** Optional click handler */
    onClick?: () => void;
    /** Controls if the item spans multiple columns */
    colSpan?: 1 | 2;
    /** Controls if the item spans multiple rows */
    rowSpan?: 1 | 2;
    /** Additional style object to apply */
    style?: CSSProperties;
    /** Custom background content (for gradients, etc.) */
    backgroundContent?: ReactNode;
    /** Footer content */
    footer?: ReactNode;
}
/**
 * Individual item component for the BentoGrid
 */
export declare const BentoGridItem: React.NamedExoticComponent<BentoGridItemProps>;
//# sourceMappingURL=BentoGrid.d.ts.map