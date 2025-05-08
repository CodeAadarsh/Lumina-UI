import { default as React } from 'react';
export interface SwitchProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'gradient';
    label?: string;
}
export declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=Switch.d.ts.map