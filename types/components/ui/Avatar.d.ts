import { default as React } from 'react';
export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
    src?: string;
    alt?: string;
    fallback?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
    variant?: 'default' | 'gradient' | 'bordered';
}
export declare const Avatar: React.ForwardRefExoticComponent<AvatarProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Avatar.d.ts.map