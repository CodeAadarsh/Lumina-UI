import type { Meta, StoryObj } from '@storybook/react';
import { TextGenerateEffect } from './TextGenerateEffect';

const meta: Meta<typeof TextGenerateEffect> = {
  title: 'Components/TextGenerateEffect',
  component: TextGenerateEffect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: { type: 'select' },
      options: ['enterprise', 'techDark', 'glass', 'neumorphicLight', 'glow', '3d'],
      description: 'Visual theme for the text',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'],
      description: 'Text size',
    },
    weight: {
      control: { type: 'select' },
      options: ['light', 'normal', 'medium', 'semibold', 'bold'],
      description: 'Font weight',
    },
    cursor: {
      control: { type: 'select' },
      options: ['bar', 'block', 'underscore', 'none'],
      description: 'Cursor style',
    },
    effect: {
      control: { type: 'select' },
      options: ['none', 'glow', 'gradient', 'shadow'],
      description: 'Text effect',
    },
    speed: {
      control: { type: 'select' },
      options: ['slow', 'normal', 'fast'],
      description: 'Typing speed',
    },
    words: {
      control: 'text',
      description: 'Text to animate',
    },
    loop: {
      control: 'boolean',
      description: 'Whether to loop the animation',
    },
    delay: {
      control: { type: 'number', min: 0, max: 5000, step: 100 },
      description: 'Delay before starting the animation (ms)',
    },
    typingDelay: {
      control: { type: 'number', min: 10, max: 500, step: 10 },
      description: 'Delay between each character (ms)',
    },
    onComplete: { action: 'completed' }
  },
  args: {
    words: 'Welcome to Lumina UI, a modern React component library!',
    theme: 'enterprise',
    size: 'lg',
    weight: 'normal',
    cursor: 'bar',
    effect: 'none',
    speed: 'normal',
    loop: false,
    delay: 0,
  },
};

export default meta;
type Story = StoryObj<typeof TextGenerateEffect>;

export const Default: Story = {
  args: {},
};

export const WithGlowEffect: Story = {
  args: {
    effect: 'glow',
    words: 'Text with a subtle glow effect.',
  },
};

export const WithGradientEffect: Story = {
  args: {
    effect: 'gradient',
    words: 'Text with a gradient color effect.',
    size: 'xl',
    weight: 'bold',
  },
};

export const TechDarkTheme: Story = {
  args: {
    theme: 'techDark',
    words: 'Text with a tech dark theme.',
    effect: 'gradient',
    cursor: 'block',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const GlassTheme: Story = {
  args: {
    theme: 'glass',
    words: 'Text with a glass theme and underscore cursor.',
    effect: 'glow',
    cursor: 'underscore',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const LargeHeading: Story = {
  args: {
    words: 'Large Heading Text',
    size: '4xl',
    weight: 'bold',
    effect: 'gradient',
    speed: 'slow',
  },
};

export const FastTyping: Story = {
  args: {
    words: 'This text types really fast! Almost like instant rendering.',
    speed: 'fast',
  },
};

export const Looping: Story = {
  args: {
    words: 'This text will loop continuously.',
    loop: true,
    speed: 'normal',
  },
};

export const WithDelay: Story = {
  args: {
    words: 'This text starts after a 2 second delay.',
    delay: 2000,
  },
};

export const CustomTypingDelay: Story = {
  args: {
    words: 'Custom... typing... delay...',
    typingDelay: 200,
  },
};