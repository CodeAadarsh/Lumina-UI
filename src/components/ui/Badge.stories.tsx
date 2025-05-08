import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';
import { CircleCheck, Heart, Star, Flame, Bell, Clock } from 'lucide-react';

/**
 * Badges are small status descriptors used to highlight information, show counts, or indicate status.
 * This Badge component supports different variants, sizes, and optional features like dismissible badges and status dots.
 */
const meta: Meta<typeof Badge> = {
  title: 'UI/Badge',
  component: Badge,
  parameters: {
    docs: {
      description: {
        component: 'Badges are used to highlight information, show counts, or indicate status in your interface.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline', 'gradient', 'pulse'],
      description: 'Controls the visual style of the badge',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Sets the size of the badge',
    },
    dismissible: {
      control: 'boolean',
      description: 'Makes the badge dismissible with an X button',
    },
    onDismiss: {
      description: 'Function called when the badge is dismissed',
      action: 'dismissed',
    },
    dot: {
      control: 'boolean',
      description: 'Shows a status dot before the badge text',
    },
    pulse: {
      control: 'boolean',
      description: 'Adds a pulsing animation to the badge',
    },
    children: {
      control: 'text',
      description: 'Badge content',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

/**
 * Default badge with primary styling. This is the most common badge variation.
 */
export const Default: Story = {
  args: {
    children: 'Badge',
    variant: 'default',
    size: 'md',
  },
};

/**
 * A collection of all available badge variants.
 */
export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="gradient">Gradient</Badge>
      <Badge variant="pulse">Pulse</Badge>
    </div>
  ),
};

/**
 * Badges in different sizes: small, medium (default), and large.
 */
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
};

/**
 * Badges with different types of content, including icons.
 */
export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge className="gap-1">
        <Star className="h-3 w-3 fill-current" /> 
        Featured
      </Badge>
      <Badge variant="secondary" className="gap-1">
        <Heart className="h-3 w-3 fill-current" /> 
        Liked
      </Badge>
      <Badge variant="destructive" className="gap-1">
        <Flame className="h-3 w-3" /> 
        Hot
      </Badge>
      <Badge variant="outline" className="gap-1">
        <CircleCheck className="h-3 w-3" /> 
        Verified
      </Badge>
      <Badge variant="gradient" className="gap-1">
        <Bell className="h-3 w-3" /> 
        New
      </Badge>
    </div>
  ),
};

/**
 * Badges with a status dot that can be used to indicate states.
 */
export const WithStatusDot: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge dot>Active</Badge>
      <Badge variant="secondary" dot>Pending</Badge>
      <Badge variant="destructive" dot>Failed</Badge>
      <Badge variant="outline" dot>Draft</Badge>
      <Badge variant="gradient" dot>Premium</Badge>
    </div>
  ),
};

/**
 * Dismissible badges with an X button that triggers the onDismiss callback.
 */
export const Dismissible: Story = {
  render: () => {
    const [badges, setBadges] = React.useState([
      { id: 1, text: 'React', variant: 'default' as const },
      { id: 2, text: 'TypeScript', variant: 'secondary' as const },
      { id: 3, text: 'TailwindCSS', variant: 'gradient' as const },
      { id: 4, text: 'Next.js', variant: 'outline' as const },
    ]);

    const handleDismiss = (id: number) => {
      setBadges(badges.filter(badge => badge.id !== id));
    };

    return (
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {badges.map(badge => (
            <Badge 
              key={badge.id} 
              variant={badge.variant} 
              dismissible 
              onDismiss={() => handleDismiss(badge.id)}
            >
              {badge.text}
            </Badge>
          ))}
        </div>
        
        {badges.length === 0 && (
          <p className="text-sm text-gray-500">All badges have been dismissed</p>
        )}
        
        {badges.length < 4 && (
          <button 
            className="text-sm text-primary hover:underline"
            onClick={() => setBadges([
              { id: 1, text: 'React', variant: 'default' },
              { id: 2, text: 'TypeScript', variant: 'secondary' },
              { id: 3, text: 'TailwindCSS', variant: 'gradient' },
              { id: 4, text: 'Next.js', variant: 'outline' },
            ])}
          >
            Reset badges
          </button>
        )}
      </div>
    );
  },
};

/**
 * Animated badges with pulse or bounce effects.
 */
export const Animated: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge pulse>New Message</Badge>
      <Badge variant="secondary" pulse>Processing</Badge>
      <Badge variant="destructive" pulse>Alert</Badge>
      <Badge variant="outline" pulse className="gap-1">
        <Clock className="h-3 w-3" /> 
        Updating
      </Badge>
      <Badge variant="gradient" pulse>Live</Badge>
    </div>
  ),
};

/**
 * Different use cases and contexts for badges.
 */
export const UseCases: Story = {
  render: () => (
    <div className="space-y-8">
      {/* Notification indicator */}
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">Notification indicator:</p>
        <div className="relative inline-flex">
          <Bell className="h-6 w-6" />
          <Badge size="sm" className="absolute -top-1 -right-2">3</Badge>
        </div>
      </div>
      
      {/* Status indicators */}
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">Status indicators:</p>
        <div className="flex gap-4">
          <Badge variant="default" dot>Active</Badge>
          <Badge variant="secondary" dot>Idle</Badge>
          <Badge variant="destructive" dot>Offline</Badge>
        </div>
      </div>
      
      {/* Feature tags */}
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">Feature tags:</p>
        <div className="relative max-w-sm rounded-lg border p-4 shadow-sm">
          <div className="absolute -top-2 right-4">
            <Badge variant="gradient" size="sm">New</Badge>
          </div>
          <h3 className="font-medium">Advanced Analytics Dashboard</h3>
          <p className="text-sm text-gray-500">Track your performance with our new analytics tools</p>
        </div>
      </div>
      
      {/* Tags list */}
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">Tags list:</p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" dismissible>Design</Badge>
          <Badge variant="outline" dismissible>Development</Badge>
          <Badge variant="outline" dismissible>Marketing</Badge>
          <Badge variant="outline" dismissible>Product</Badge>
        </div>
      </div>
      
      {/* Version indicator */}
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">Version indicator:</p>
        <div className="flex items-center gap-2">
          <h3 className="font-medium">Lumina UI</h3>
          <Badge size="sm" variant="secondary">v1.0.0</Badge>
        </div>
      </div>
    </div>
  ),
};

/**
 * Badges with custom styling using the className prop.
 */
export const CustomStyling: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge className="bg-amber-500 hover:bg-amber-600">Custom Color</Badge>
      <Badge className="rounded-md">Square Corners</Badge>
      <Badge className="px-4 py-1">Extra Padding</Badge>
      <Badge className="border-2 border-blue-500 bg-transparent text-blue-500">Custom Border</Badge>
      <Badge className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white">Custom Gradient</Badge>
      <Badge className="shadow-lg shadow-blue-500/50">With Shadow</Badge>
    </div>
  ),
};

/**
 * Example showing how badges can be used in combination with other components.
 */
export const InContext: Story = {
  render: () => (
    <div className="space-y-6">
      {/* With avatar */}
      <div className="flex items-center gap-2">
        <div className="h-10 w-10 rounded-full bg-gray-200"></div>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-medium">Jane Smith</span>
            <Badge size="sm" variant="gradient">Pro</Badge>
          </div>
          <span className="text-sm text-gray-500">Product Designer</span>
        </div>
      </div>
      
      {/* In a card */}
      <div className="max-w-sm rounded-lg border p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <h3 className="font-medium">Project Starlight</h3>
          <Badge variant="secondary" size="sm">In Progress</Badge>
        </div>
        <p className="mt-2 text-sm text-gray-500">Redesigning the entire user experience for our mobile app</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Badge variant="outline" size="sm">UX</Badge>
          <Badge variant="outline" size="sm">Mobile</Badge>
          <Badge variant="outline" size="sm">Design System</Badge>
        </div>
      </div>
      
      {/* In a table */}
      <div className="rounded-lg border shadow-sm">
        <table className="min-w-full divide-y">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3 text-left text-sm font-medium text-gray-500">Task</th>
              <th className="p-3 text-left text-sm font-medium text-gray-500">Status</th>
              <th className="p-3 text-left text-sm font-medium text-gray-500">Priority</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr>
              <td className="p-3 text-sm">Implement authentication</td>
              <td className="p-3"><Badge size="sm" variant="default" dot>Completed</Badge></td>
              <td className="p-3"><Badge size="sm" variant="destructive">High</Badge></td>
            </tr>
            <tr>
              <td className="p-3 text-sm">Design dashboard</td>
              <td className="p-3"><Badge size="sm" variant="secondary" dot>In Progress</Badge></td>
              <td className="p-3"><Badge size="sm" variant="secondary">Medium</Badge></td>
            </tr>
            <tr>
              <td className="p-3 text-sm">API integration</td>
              <td className="p-3"><Badge size="sm" variant="outline" dot>Pending</Badge></td>
              <td className="p-3"><Badge size="sm" variant="outline">Low</Badge></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  ),
};