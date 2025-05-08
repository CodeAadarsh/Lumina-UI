import { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';
/**
 * Badges are small status descriptors used to highlight information, show counts, or indicate status.
 * This Badge component supports different variants, sizes, and optional features like dismissible badges and status dots.
 */
declare const meta: Meta<typeof Badge>;
export default meta;
type Story = StoryObj<typeof Badge>;
/**
 * Default badge with primary styling. This is the most common badge variation.
 */
export declare const Default: Story;
/**
 * A collection of all available badge variants.
 */
export declare const Variants: Story;
/**
 * Badges in different sizes: small, medium (default), and large.
 */
export declare const Sizes: Story;
/**
 * Badges with different types of content, including icons.
 */
export declare const WithIcons: Story;
/**
 * Badges with a status dot that can be used to indicate states.
 */
export declare const WithStatusDot: Story;
/**
 * Dismissible badges with an X button that triggers the onDismiss callback.
 */
export declare const Dismissible: Story;
/**
 * Animated badges with pulse or bounce effects.
 */
export declare const Animated: Story;
/**
 * Different use cases and contexts for badges.
 */
export declare const UseCases: Story;
/**
 * Badges with custom styling using the className prop.
 */
export declare const CustomStyling: Story;
/**
 * Example showing how badges can be used in combination with other components.
 */
export declare const InContext: Story;
//# sourceMappingURL=Badge.stories.d.ts.map