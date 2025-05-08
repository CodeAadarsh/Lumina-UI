import type { Meta, StoryObj } from '@storybook/react';
import { Testimonial } from './Testimonial3D';

/**
 * The Testimonial component displays user testimonials with various styling options,
 * layouts, and animations. It supports avatars, ratings, quotes, and 3D effects.
 */
const meta: Meta<typeof Testimonial> = {
  title: 'UI/Testimonial',
  component: Testimonial,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile testimonial component that supports multiple themes, layouts, and animations.'
      }
    },
  },
  tags: ['autodocs'],
  argTypes: {
    theme: {
      description: 'Visual theme of the testimonial',
      control: 'select',
      options: ['enterprise', 'techDark', 'glass', 'neumorphicLight', 'glow', '3d'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'enterprise' },
      },
    },
    size: {
      description: 'Size of the testimonial component',
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    layout: {
      description: 'Layout arrangement of the testimonial content',
      control: 'radio',
      options: ['default', 'horizontal', 'stacked'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    animation: {
      description: 'Animation effect when interacting with the testimonial',
      control: 'select',
      options: ['none', 'float', 'pulse', 'tilt', 'glow', 'shimmer'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'none' },
      },
    },
    hoverEffect: {
      description: 'Effect applied on hover',
      control: 'select',
      options: ['none', 'lift', 'border', 'background'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'none' },
      },
    },
    avatarShape: {
      description: 'Shape of the avatar image',
      control: 'radio',
      options: ['circle', 'square', 'hexagon'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'circle' },
      },
    },
    rating: {
      description: 'Star rating (0-5)',
      control: { type: 'range', min: 0, max: 5, step: 0.5 },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0 },
      },
    },
    showQuoteIcons: {
      description: 'Show decorative quote icons',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    },
    animated3D: {
      description: 'Enable 3D tilt effect on mouse movement',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    children: {
      control: 'text',
      description: 'Main content of the testimonial',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Testimonial>;

// Sample avatar URLs
const avatars = {
  male: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces',
  female: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces',
  company: 'https://images.unsplash.com/photo-1549924231-f129b911e442?w=150&h=150&fit=crop&crop=entropy',
};

/**
 * Default testimonial with enterprise theme
 */
export const Default: Story = {
  args: {
    theme: 'enterprise',
    size: 'md',
    layout: 'default',
    animation: 'none',
    hoverEffect: 'none',
    avatarUrl: avatars.male,
    avatarAlt: 'John Doe',
    authorName: 'John Doe',
    authorTitle: 'CEO, TechCorp',
    rating: 5,
    quote: 'This product has completely transformed our workflow. The intuitive interface and powerful features make it a joy to use every day.',
    showQuoteIcons: true,
    animated3D: false,
    children: (
      <p className="text-base mb-2">
        I've been using this tool for over a year now and I'm extremely impressed with the results. 
        The customer support team is also exceptional and always ready to help.
      </p>
    ),
  },
};

/**
 * Testimonial with tech dark theme and glow effect
 */
export const TechDarkGlow: Story = {
  args: {
    ...Default.args,
    theme: 'techDark',
    animation: 'glow',
    hoverEffect: 'border',
    avatarUrl: avatars.female,
    avatarAlt: 'Sarah Johnson',
    authorName: 'Sarah Johnson',
    authorTitle: 'Lead Developer, InnovateTech',
    rating: 4.5,
  },
};

/**
 * Testimonial with glass theme and float animation
 */
export const GlassFloat: Story = {
  args: {
    ...Default.args,
    theme: 'glass',
    animation: 'float',
    hoverEffect: 'background',
    avatarUrl: avatars.male,
    authorName: 'Michael Chen',
    authorTitle: 'Product Designer',
    rating: 5,
  },
};

/**
 * Testimonial with horizontal layout
 */
export const HorizontalLayout: Story = {
  args: {
    ...Default.args,
    layout: 'horizontal',
    theme: 'enterprise',
    hoverEffect: 'lift',
    showQuoteIcons: true,
  },
};

/**
 * Testimonial with stacked layout
 */
export const StackedLayout: Story = {
  args: {
    ...Default.args,
    layout: 'stacked',
    theme: 'neumorphicLight',
    animation: 'pulse',
    avatarShape: 'square',
    showQuoteIcons: true,
  },
};

/**
 * Testimonial with 3D animation effect
 */
export const Animated3D: Story = {
  args: {
    ...Default.args,
    theme: '3d',
    animation: 'tilt',
    hoverEffect: 'lift',
    animated3D: true,
    avatarUrl: avatars.company,
    avatarAlt: 'Company Logo',
    avatarShape: 'hexagon',
    authorName: 'TechInnovate Inc.',
    authorTitle: 'Enterprise Client',
  },
};

/**
 * Testimonial with shimmer effect
 */
export const ShimmerEffect: Story = {
  args: {
    ...Default.args,
    theme: 'glow',
    animation: 'shimmer',
    hoverEffect: 'background',
    showQuoteIcons: false,
  },
};

/**
 * Small minimal testimonial
 */
export const MinimalSmall: Story = {
  args: {
    theme: 'enterprise',
    size: 'sm',
    layout: 'default',
    animation: 'none',
    hoverEffect: 'none',
    avatarUrl: avatars.male,
    authorName: 'Alex Turner',
    authorTitle: 'Customer',
    rating: 0,
    quote: '',
    showQuoteIcons: false,
    children: (
      <p className="text-sm mb-2">
        Great product, exactly what I needed!
      </p>
    ),
  },
};

/**
 * Large testimonial with all features
 */
export const FullFeatured: Story = {
  args: {
    theme: 'techDark',
    size: 'lg',
    layout: 'horizontal',
    animation: 'float',
    hoverEffect: 'border',
    avatarUrl: avatars.female,
    avatarAlt: 'Jennifer Lewis',
    avatarSize: 'lg',
    avatarShape: 'circle',
    authorName: 'Jennifer Lewis',
    authorTitle: 'Marketing Director, Global Brands',
    rating: 5,
    quote: `The best solution we've found after years of searching.`,
    showQuoteIcons: true,
    animated3D: true,
    children: (
      <div className="space-y-3">
        <p>
          After evaluating dozens of solutions, this platform stands out for its exceptional 
          performance and intuitive design. Implementation was seamless, and our team's productivity 
          increased by 35% within the first month.
        </p>
        <p>
          The advanced analytics and customization options are precisely what we needed to scale 
          our operations efficiently.
        </p>
      </div>
    ),
  },
};