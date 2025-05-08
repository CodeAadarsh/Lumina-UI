import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';
declare const inputWrapperVariants: (props?: ({
    fullWidth?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const inputVariants: (props?: ({
    variant?: "default" | "glass" | "outline" | "glass-dark" | "glass-frost" | "glass-premium" | "glass-gradient" | "neumorphic-light" | "neumorphic-dark" | "solid" | "underline" | "filled" | "modern" | "material" | null | undefined;
    padding?: "xs" | "sm" | "md" | "lg" | "xl" | null | undefined;
    rounded?: "2xl" | "xs" | "sm" | "md" | "lg" | "xl" | "none" | "full" | null | undefined;
    effect?: "purple-glow" | "multi-glow" | "none" | "glow" | "float" | "shimmer" | "gradientBorder" | "rainbowBorder" | "cyan-glow" | "scale" | "focus-ring" | null | undefined;
    state?: "default" | "error" | "success" | "focused" | null | undefined;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
type InputWrapperVariantProps = VariantProps<typeof inputWrapperVariants>;
type InputVariantProps = VariantProps<typeof inputVariants>;
type InputType = 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'time' | 'datetime-local' | 'month' | 'week' | 'color';
interface BaseInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    variant?: InputVariantProps['variant'];
    padding?: InputVariantProps['padding'];
    rounded?: InputVariantProps['rounded'];
    effect?: InputVariantProps['effect'];
    size?: InputVariantProps['size'];
    type?: InputType;
    error?: string;
    success?: string;
    label?: string;
    helperText?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    prefix?: string;
    suffix?: string;
    fullWidth?: InputWrapperVariantProps['fullWidth'];
    floatingLabel?: boolean;
    clearable?: boolean;
    showPasswordToggle?: boolean;
    className?: string;
    wrapperClassName?: string;
    labelClassName?: string;
    helperTextClassName?: string;
    animated?: boolean;
}
export interface InputProps extends BaseInputProps {
}
export type InputRef = HTMLInputElement;
declare const Input: React.NamedExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export default Input;
//# sourceMappingURL=Input.d.ts.map