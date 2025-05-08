import { default as React } from 'react';
export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
    value?: number;
    max?: number;
    variant?: 'default' | 'gradient' | 'striped';
    size?: 'sm' | 'md' | 'lg';
    color?: 'primary' | 'secondary' | 'accent' | 'destructive';
    animate?: boolean;
}
export declare const Progress: React.ForwardRefExoticComponent<ProgressProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Progress.d.ts.map