import type { Meta, StoryObj } from '@storybook/react';
import { MotionCard, MotionCardContent, MotionCardLayer } from './MotionCard';
import { ThemeProvider } from '../../providers/ThemeProvider';

const meta: Meta<typeof MotionCard> = {
  title: 'UI/MotionCard',
  component: MotionCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'elevated', 'glass', 'glass-premium', 'gradient', 'dark', 'neumorphic-light', 'neumorphic-dark'],
      description: 'Visual style of the card',
    },
    intensity: {
      control: 'select',
      options: ['subtle', 'medium', 'strong'],
      description: 'Intensity of the 3D effect',
    },
    rounded: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full'],
      description: 'Border radius of the card',
    },
    glow: {
      control: 'select',
      options: ['none', 'subtle', 'medium', 'strong'],
      description: 'Glow effect intensity',
    },
    highlight: {
      control: 'select',
      options: ['none', 'subtle', 'medium', 'strong'],
      description: 'Highlight effect intensity',
    },
    effect: {
      control: 'select',
      options: ['none', 'float', 'shimmer', 'border', 'multi-border'],
      description: 'Additional effects',
    },
    resetOnLeave: {
      control: 'boolean',
      description: 'Reset card position when mouse leaves',
    },
    disableRotation: {
      control: 'boolean',
      description: 'Disable the rotation effect',
    },
    disableScale: {
      control: 'boolean',
      description: 'Disable the scaling effect on hover',
    },
    disableGlow: {
      control: 'boolean',
      description: 'Disable the glow effect',
    },
    disableHighlight: {
      control: 'boolean',
      description: 'Disable the highlight effect',
    },
    glowColor: {
      control: 'color',
      description: 'Color of the glow effect',
    },
  },
  args: {
    variant: 'default',
    intensity: 'medium',
    rounded: 'lg',
    glow: 'none',
    highlight: 'none',
    effect: 'none',
    resetOnLeave: true,
    disableRotation: false,
    disableScale: false,
    disableGlow: false,
    disableHighlight: false,
    glowColor: 'rgba(100, 130, 255, 0.4)',
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div style={{ width: '350px', height: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof MotionCard>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
  render: (args) => (
    <MotionCard {...args}>
      <MotionCardContent>
        <h3 className="text-xl font-semibold mb-2">Motion Card</h3>
        <p className="text-foreground-secondary">Hover over this card to see the 3D motion effect. Move your cursor around to see how it responds.</p>
      </MotionCardContent>
    </MotionCard>
  ),
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    glow: 'subtle',
  },
  render: (args) => (
    <MotionCard {...args}>
      <MotionCardContent>
        <h3 className="text-xl font-semibold mb-2">Elevated Card</h3>
        <p className="text-foreground-secondary">This card has elevation and a subtle glow effect when you hover over it.</p>
      </MotionCardContent>
    </MotionCard>
  ),
};

export const GlassEffect: Story = {
  args: {
    variant: 'glass',
    glow: 'medium',
    highlight: 'medium',
    rounded: 'xl',
  },
  decorators: [
    (Story) => (
      <ThemeProvider initialTheme="glass">
        <div style={{ 
          width: '350px', 
          height: '350px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '24px',
          borderRadius: '12px' 
        }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  render: (args) => (
    <MotionCard {...args}>
      <MotionCardContent>
        <h3 className="text-xl font-semibold mb-2 text-white">Glass Card</h3>
        <p className="text-white/80">This card uses a glass morphism effect with glow and highlight.</p>
      </MotionCardContent>
    </MotionCard>
  ),
};

export const GlassPremium: Story = {
  args: {
    variant: 'glass-premium',
    glow: 'strong',
    highlight: 'medium',
    rounded: '2xl',
  },
  decorators: [
    (Story) => (
      <ThemeProvider initialTheme="glass">
        <div style={{ 
          width: '350px', 
          height: '350px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)',
          padding: '24px',
          borderRadius: '12px' 
        }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  render: (args) => (
    <MotionCard {...args}>
      <MotionCardContent>
        <h3 className="text-xl font-semibold mb-2 text-white">Premium Glass</h3>
        <p className="text-white/80">This premium glass card has stronger blur and glow effects.</p>
      </MotionCardContent>
    </MotionCard>
  ),
};

export const GradientCard: Story = {
  args: {
    variant: 'gradient',
    glow: 'medium',
    highlight: 'medium',
    rounded: 'xl',
  },
  render: (args) => (
    <MotionCard {...args}>
      <MotionCardContent>
        <h3 className="text-xl font-semibold mb-2">Gradient Card</h3>
        <p className="text-foreground-secondary">This card uses a subtle gradient background with glow and highlight effects.</p>
      </MotionCardContent>
    </MotionCard>
  ),
};

export const DarkCard: Story = {
  args: {
    variant: 'dark',
    glow: 'medium',
    highlight: 'subtle',
    rounded: 'lg',
  },
  decorators: [
    (Story) => (
      <ThemeProvider initialTheme="techDark">
        <div style={{ 
          width: '350px', 
          height: '350px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          background: '#1a202c',
          padding: '24px',
          borderRadius: '12px' 
        }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  render: (args) => (
    <MotionCard {...args}>
      <MotionCardContent>
        <h3 className="text-xl font-semibold mb-2 text-white">Dark Card</h3>
        <p className="text-gray-300">This dark card is perfect for dark mode interfaces.</p>
      </MotionCardContent>
    </MotionCard>
  ),
};

export const NeumorphicLight: Story = {
  args: {
    variant: 'neumorphic-light',
    rounded: 'xl',
    intensity: 'subtle',
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div style={{ 
          width: '350px', 
          height: '350px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          background: '#e0e5ec',
          padding: '24px',
          borderRadius: '12px' 
        }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  render: (args) => (
    <MotionCard {...args}>
      <MotionCardContent>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">Neumorphic Light</h3>
        <p className="text-gray-600">This card uses a light neumorphic design style.</p>
      </MotionCardContent>
    </MotionCard>
  ),
};

export const NeumorphicDark: Story = {
  args: {
    variant: 'neumorphic-dark',
    rounded: 'xl',
    intensity: 'subtle',
  },
  decorators: [
    (Story) => (
      <ThemeProvider initialTheme="dark">
        <div style={{ 
          width: '350px', 
          height: '350px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          background: '#2a2d3e',
          padding: '24px',
          borderRadius: '12px' 
        }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  render: (args) => (
    <MotionCard {...args}>
      <MotionCardContent>
        <h3 className="text-xl font-semibold mb-2 text-gray-100">Neumorphic Dark</h3>
        <p className="text-gray-300">This card uses a dark neumorphic design style.</p>
      </MotionCardContent>
    </MotionCard>
  ),
};

export const WithLayers: Story = {
  args: {
    variant: 'elevated',
    glow: 'medium',
    highlight: 'subtle',
    rounded: 'xl',
  },
  render: (args) => (
    <MotionCard {...args}>
      <MotionCardContent className="flex flex-col items-center space-y-4">
        <MotionCardLayer depth={40}>
          <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center">
            <span className="text-white text-xl font-bold">3D</span>
          </div>
        </MotionCardLayer>
        
        <MotionCardLayer depth={20}>
          <h3 className="text-xl font-semibold">Layered Content</h3>
        </MotionCardLayer>
        
        <MotionCardLayer depth={10}>
          <p className="text-foreground-secondary text-center">
            This card uses multiple layers at different depths to create a more pronounced 3D effect.
          </p>
        </MotionCardLayer>
      </MotionCardContent>
    </MotionCard>
  ),
};

export const StrongEffect: Story = {
  args: {
    variant: 'elevated',
    intensity: 'strong',
    glow: 'medium',
    highlight: 'medium',
    rounded: 'xl',
  },
  render: (args) => (
    <MotionCard {...args}>
      <MotionCardContent>
        <h3 className="text-xl font-semibold mb-2">Strong Effect</h3>
        <p className="text-foreground-secondary">This card has a strong intensity setting which creates a more dramatic 3D effect when you move your cursor.</p>
      </MotionCardContent>
    </MotionCard>
  ),
};