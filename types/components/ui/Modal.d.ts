import { default as React, ReactNode, RefObject } from 'react';
import { VariantProps } from 'class-variance-authority';
export type ModalTheme = 'enterprise' | 'techDark' | 'glass' | 'neumorphicLight' | 'glow' | '3d';
export type ModalSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
export type ModalPosition = 'center' | 'top' | 'bottom' | 'left' | 'right';
export type ModalDepth = 'flat' | 'shallow' | 'medium' | 'deep';
export type ModalAnimation = 'fade' | 'zoom' | 'slide' | 'flip' | 'rotate' | 'bounce' | 'elastic';
export type EffectIntensity = 'subtle' | 'medium' | 'strong';
declare const modalVariants: (props?: ({
    theme?: "techDark" | "glass" | "enterprise" | "glow" | "neumorphicLight" | "3d" | null | undefined;
    size?: "2xl" | "xs" | "sm" | "md" | "lg" | "xl" | "full" | null | undefined;
    position?: "center" | "left" | "right" | "bottom" | "top" | null | undefined;
    depth?: "flat" | "medium" | "shallow" | "deep" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type ModalVariantProps = VariantProps<typeof modalVariants>;
export interface ModalProps extends React.HTMLAttributes<HTMLDivElement>, Omit<ModalVariantProps, 'theme'> {
    /** Whether the modal is open */
    isOpen: boolean;
    /** Function to call when the modal is closed */
    onClose: () => void;
    /** Modal theme */
    theme?: ModalTheme;
    /** Animation type */
    animation?: ModalAnimation;
    /** Whether to close the modal when clicking outside */
    closeOnOutsideClick?: boolean;
    /** Whether to show the close button */
    showCloseButton?: boolean;
    /** ID of the element that labels the modal */
    ariaLabelledby?: string;
    /** ID of the element that describes the modal */
    ariaDescribedby?: string;
    /** Additional class name for the overlay */
    overlayClassName?: string;
    /** Additional class name for the modal body */
    bodyClassName?: string;
    /** Additional class name for the close button */
    closeButtonClassName?: string;
    /** Ref to the element to focus when the modal opens */
    initialFocus?: RefObject<HTMLElement>;
    /** Whether to lock scrolling on the body when the modal is open */
    lockScroll?: boolean;
    /** Target element to render the modal in */
    portalTarget?: HTMLElement | string;
    /** Whether to show a glare effect when moving the mouse (for 3D effect) */
    showGlareEffect?: boolean;
    /** Whether to show a 3D effect when moving the mouse */
    show3DEffect?: boolean;
    /** Intensity of the 3D/glare effect */
    effectIntensity?: EffectIntensity;
    /** React children */
    children: ReactNode;
}
export interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Modal theme */
    theme?: ModalTheme;
    /** React children */
    children: ReactNode;
    /** Additional class name */
    className?: string;
}
export interface ModalBodyProps extends React.HTMLAttributes<HTMLDivElement> {
    /** React children */
    children: ReactNode;
    /** Additional class name */
    className?: string;
}
export interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Modal theme */
    theme?: ModalTheme;
    /** React children */
    children: ReactNode;
    /** Additional class name */
    className?: string;
}
declare const Modal: React.NamedExoticComponent<ModalProps & React.RefAttributes<HTMLDivElement>>;
declare const ModalHeader: React.ForwardRefExoticComponent<ModalHeaderProps & React.RefAttributes<HTMLDivElement>>;
declare const ModalBody: React.ForwardRefExoticComponent<ModalBodyProps & React.RefAttributes<HTMLDivElement>>;
declare const ModalFooter: React.ForwardRefExoticComponent<ModalFooterProps & React.RefAttributes<HTMLDivElement>>;
export { Modal, ModalHeader, ModalBody, ModalFooter, modalVariants };
//# sourceMappingURL=Modal.d.ts.map