declare const spotlightVariants: (props?: ({
    theme?: "techDark" | "glass" | "enterprise" | "glow" | "neumorphicLight" | "3d" | null | undefined;
    size?: "sm" | "md" | "lg" | "full" | null | undefined;
    spotSize?: "sm" | "md" | "lg" | null | undefined;
    intensity?: "medium" | "low" | "high" | null | undefined;
    animation?: "none" | "pulse" | "breathe" | "rainbow" | null | undefined;
    color?: "purple" | "blue" | "cyan" | "pink" | "amber" | "multi" | null | undefined;
    type?: "radial" | "directional" | "beam" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const Spotlight: ({ children, className, theme: themeProp, size, spotSize, intensity, animation, color, type, ...props }: {
    [x: string]: any;
    children: any;
    className: any;
    theme: any;
    size: any;
    spotSize: any;
    intensity: any;
    animation: any;
    color: any;
    type: any;
}) => import("react/jsx-runtime").JSX.Element;
export { Spotlight, spotlightVariants };
//# sourceMappingURL=Spotlight.d.ts.map