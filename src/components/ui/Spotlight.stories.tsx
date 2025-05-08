import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Spotlight } from './Spotlight';
import { ThemeProvider } from '../../providers/ThemeProvider';

const meta: Meta<typeof Spotlight> = {
  title: 'Components/Effects/Spotlight',
  component: Spotlight,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A spotlight effect component that follows cursor movement to create interactive light effects.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: 'select',
      options: ['enterprise', 'techDark', 'glass', 'neumorphicLight', 'glow', '3d'],
      description: 'Visual theme of the spotlight component',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'full'],
      description: 'Size of the container',
    },
    spotSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the spotlight effect',
    },
    intensity: {
      control: 'select',
      options: ['low', 'medium', 'high'],
      description: 'Intensity of the spotlight effect',
    },
    animation: {
      control: 'select',
      options: ['none', 'pulse', 'breathe', 'rainbow'],
      description: 'Animation applied to the spotlight',
    },
    color: {
      control: 'select',
      options: ['blue', 'purple', 'cyan', 'pink', 'amber', 'multi'],
      description: 'Color of the spotlight effect',
    },
    type: {
      control: 'select',
      options: ['radial', 'directional', 'beam'],
      description: 'Type of spotlight effect',
    },
  },
  args: {
    theme: 'enterprise',
    size: 'md',
    spotSize: 'md',
    intensity: 'medium',
    animation: 'none',
    color: 'blue',
    type: 'radial',
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Spotlight>;

// Default spotlight with radial effect
export const Default: Story = {
  args: {
    size: 'md',
    type: 'radial',
    color: 'blue',
  },
  render: (args) => (
    <Spotlight {...args} className="flex items-center justify-center p-8" style={{ minHeight: '400px' }}>
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold mb-4">Interactive Spotlight Effect</h1>
        <p className="text-lg mb-6">
          Move your mouse around to see the spotlight follow your cursor. 
          This creates an engaging and interactive experience for users.
        </p>
        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors">
          Try Me
        </button>
      </div>
    </Spotlight>
  ),
};

// Glass theme with purple spotlight
export const GlassTheme: Story = {
  args: {
    theme: 'glass',
    size: 'md',
    spotSize: 'lg',
    intensity: 'medium',
    color: 'purple',
    type: 'radial',
  },
  decorators: [
    (Story) => (
      <ThemeProvider initialTheme="glass">
        <div style={{ 
          background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
          minHeight: '400px',
        }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  render: (args) => (
    <Spotlight {...args} className="flex items-center justify-center p-8" style={{ minHeight: '400px' }}>
      <div className="max-w-2xl text-center">
        <h1 className="text-3xl font-bold mb-4 text-white">Glass Theme Spotlight</h1>
        <p className="text-white/80 mb-6">
          This spotlight uses the glass theme with a purple highlight. 
          Notice how it creates a subtle glassmorphism effect as you move your cursor.
        </p>
        <button className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors">
          Explore
        </button>
      </div>
    </Spotlight>
  ),
};

// Tech dark theme with cyan beam
export const TechDarkBeam: Story = {
  args: {
    theme: 'techDark',
    size: 'md',
    intensity: 'high',
    color: 'cyan',
    type: 'beam',
  },
  decorators: [
    (Story) => (
      <ThemeProvider initialTheme="techDark">
        <div style={{ 
          background: '#0f172a',
          minHeight: '400px',
        }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  render: (args) => (
    <Spotlight {...args} className="flex items-center justify-center p-8" style={{ minHeight: '400px' }}>
      <div className="max-w-2xl text-center">
        <h1 className="text-3xl font-bold mb-4 text-white">Tech Dark Beam Effect</h1>
        <p className="text-cyan-200 mb-6">
          This spotlight uses a horizontal beam effect that follows your cursor's vertical position.
          Perfect for futuristic or tech-inspired interfaces.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <button className="px-6 py-3 bg-cyan-600 text-white rounded-lg font-medium hover:bg-cyan-700 transition-colors">
            Features
          </button>
          <button className="px-6 py-3 border border-cyan-500 text-cyan-400 rounded-lg font-medium hover:bg-cyan-900/30 transition-colors">
            Documentation
          </button>
        </div>
      </div>
    </Spotlight>
  ),
};

// Rainbow animation with multi-color
export const RainbowAnimation: Story = {
  args: {
    theme: 'enterprise',
    size: 'md',
    spotSize: 'lg',
    intensity: 'medium',
    animation: 'rainbow',
    color: 'multi',
    type: 'radial',
  },
  render: (args) => (
    <Spotlight {...args} className="flex items-center justify-center p-8" style={{ minHeight: '400px' }}>
      <div className="max-w-2xl text-center">
        <h1 className="text-3xl font-bold mb-4">Rainbow Animation</h1>
        <p className="text-gray-600 mb-6">
          This spotlight uses the rainbow animation with multiple colors.
          The colors cycle automatically, creating a vibrant and dynamic effect.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </Spotlight>
  ),
};

// Neumorphic Light theme with directional spotlight
export const NeumorphicDirectional: Story = {
  args: {
    theme: 'neumorphicLight',
    size: 'md',
    spotSize: 'lg',
    intensity: 'low',
    color: 'blue',
    type: 'directional',
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div style={{ 
          background: '#e0e5ec',
          minHeight: '400px',
        }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  render: (args) => (
    <Spotlight {...args} className="flex items-center justify-center p-8" style={{ minHeight: '400px' }}>
      <div className="max-w-2xl text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Neumorphic Design</h1>
        <p className="text-gray-600 mb-6">
          This spotlight uses a directional effect with the neumorphic light theme.
          The soft shadows and highlights create a subtle 3D appearance.
        </p>
        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium shadow-[5px_5px_10px_#b8b9be,-5px_-5px_10px_#ffffff] hover:bg-blue-600 transition-colors">
          Learn More
        </button>
      </div>
    </Spotlight>
  ),
};

// Glow theme with pulse animation
export const GlowPulse: Story = {
  args: {
    theme: 'glow',
    size: 'md',
    spotSize: 'lg',
    intensity: 'high',
    animation: 'pulse',
    color: 'pink',
    type: 'radial',
  },
  decorators: [
    (Story) => (
      <ThemeProvider initialTheme="dark">
        <div style={{ 
          background: '#0a0a0a',
          minHeight: '400px',
        }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  render: (args) => (
    <Spotlight {...args} className="flex items-center justify-center p-8" style={{ minHeight: '400px' }}>
      <div className="max-w-2xl text-center">
        <h1 className="text-3xl font-bold mb-4 text-white">Pulsing Glow Effect</h1>
        <p className="text-pink-200 mb-6">
          This spotlight uses a pulsing animation with the glow theme.
          The size of the spotlight grows and shrinks to create a breathing effect.
        </p>
        <button className="px-6 py-3 bg-pink-600 text-white rounded-lg font-medium hover:bg-pink-700 transition-colors">
          Discover
        </button>
      </div>
    </Spotlight>
  ),
};

// Breathe animation example
export const BreathingSpotlight: Story = {
  args: {
    theme: 'techDark',
    size: 'md',
    spotSize: 'lg',
    intensity: 'medium',
    animation: 'breathe',
    color: 'amber',
    type: 'radial',
  },
  decorators: [
    (Story) => (
      <ThemeProvider initialTheme="techDark">
        <div style={{ 
          background: '#111827',
          minHeight: '400px',
        }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  render: (args) => (
    <Spotlight {...args} className="flex items-center justify-center p-8" style={{ minHeight: '400px' }}>
      <div className="max-w-2xl text-center">
        <h1 className="text-3xl font-bold mb-4 text-white">Breathing Effect</h1>
        <p className="text-amber-200 mb-6">
          This spotlight uses a breathing animation that changes opacity.
          The effect creates a calming, pulsating glow that follows your cursor.
        </p>
        <button className="px-6 py-3 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700 transition-colors">
          Experience
        </button>
      </div>
    </Spotlight>
  ),
};

// Card layout with spotlight
export const SpotlightCards: Story = {
  args: {
    theme: 'enterprise',
    size: 'md',
    spotSize: 'sm',
    intensity: 'medium',
    color: 'blue',
    type: 'radial',
  },
  render: (args) => (
    <div className="p-8 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6 text-center">Feature Cards with Spotlight</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {['blue', 'purple', 'cyan'].map((color, index) => (
          <Spotlight 
            key={index}
            {...args}
            color={color as any}
            className="border rounded-xl p-6 shadow-sm"
            style={{ height: '250px' }}
          >
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-blue-500 mx-auto mb-4 flex items-center justify-center text-white">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-2">Feature {index + 1}</h3>
              <p className="text-gray-600">
                This card uses a spotlight effect that follows your cursor.
                Try hovering over different areas.
              </p>
            </div>
          </Spotlight>
        ))}
      </div>
    </div>
  ),
};

// Full screen hero section with spotlight
export const HeroSection: Story = {
  args: {
    theme: 'glass',
    size: 'full',
    spotSize: 'lg',
    intensity: 'medium',
    color: 'multi',
    type: 'radial',
  },
  decorators: [
    (Story) => (
      <ThemeProvider initialTheme="glass">
        <div style={{ 
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          height: '100vh',
        }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
  render: (args) => (
    <Spotlight {...args} className="flex flex-col items-center justify-center p-8 h-screen">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold mb-6 text-white">Spotlight Hero Section</h1>
        <p className="text-xl text-white/80 mb-8">
          Create stunning, interactive hero sections with the Spotlight component.
          The spotlight follows the user's cursor, creating an engaging experience.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-lg font-medium hover:bg-white/20 transition-colors">
            Get Started
          </button>
          <button className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white/80 rounded-lg font-medium hover:bg-white/10 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </Spotlight>
  ),
};

// Different spotlight colors
export const SpotlightColors: Story = {
  args: {
    theme: 'enterprise',
    size: 'md',
    spotSize: 'md',
    intensity: 'medium',
    type: 'radial',
  },
  render: () => (
    <div className="p-8 bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center">Spotlight Colors</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {['blue', 'purple', 'cyan', 'pink', 'amber', 'multi'].map((color) => (
          <Spotlight 
            key={color}
            theme="enterprise"
            size="md"
            spotSize="md"
            intensity="medium"
            type="radial"
            color={color as any}
            className="border rounded-xl p-6 shadow-sm"
            style={{ height: '200px' }}
          >
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2 capitalize">{color} Spotlight</h3>
              <p className="text-gray-600">
                This demonstrates the {color} color option for the spotlight effect.
              </p>
            </div>
          </Spotlight>
        ))}
      </div>
    </div>
  ),
};

// Spotlight intensity comparison
export const SpotlightIntensity: Story = {
  args: {
    theme: 'techDark',
    size: 'md',
    spotSize: 'md',
    color: 'blue',
    type: 'radial',
  },
  decorators: [
    (Story) => (
      <ThemeProvider initialTheme="techDark">
        <div style={{ 
          background: '#0f172a',
          minHeight: '400px',
        }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  render: () => (
    <div className="p-8" style={{ background: '#0f172a' }}>
      <h2 className="text-2xl font-bold mb-6 text-center text-white">Spotlight Intensity</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {['low', 'medium', 'high'].map((intensity) => (
          <Spotlight 
            key={intensity}
            theme="techDark"
            size="md"
            spotSize="md"
            intensity={intensity as any}
            color="blue"
            type="radial"
            className="border border-gray-800 rounded-xl p-6"
            style={{ height: '200px' }}
          >
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2 text-white capitalize">{intensity} Intensity</h3>
              <p className="text-gray-400">
                This demonstrates the {intensity} intensity setting for the spotlight effect.
              </p>
            </div>
          </Spotlight>
        ))}
      </div>
    </div>
  ),
};

// Spotlight types comparison
export const SpotlightTypes: Story = {
  args: {
    theme: 'enterprise',
    size: 'md',
    spotSize: 'md',
    intensity: 'medium',
    color: 'purple',
  },
  render: () => (
    <div className="p-8 bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center">Spotlight Types</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {['radial', 'directional', 'beam'].map((type) => (
          <Spotlight 
            key={type}
            theme="enterprise"
            size="md"
            spotSize="md"
            intensity="medium"
            color="purple"
            type={type as any}
            className="border rounded-xl p-6 shadow-sm"
            style={{ height: '200px' }}
          >
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2 capitalize">{type} Type</h3>
              <p className="text-gray-600">
                This demonstrates the {type} type option for the spotlight effect.
              </p>
            </div>
          </Spotlight>
        ))}
      </div>
    </div>
  ),
};

// Multi-layered interactive sections
export const MultiLayered: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <div>
      {/* First section */}
      <Spotlight 
        theme="enterprise"
        size="lg"
        spotSize="lg"
        intensity="medium"
        color="blue"
        type="radial"
        className="flex items-center justify-center p-8 border-b"
        style={{ minHeight: '50vh' }}
      >
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">Main Section</h1>
          <p className="text-lg text-gray-600 mb-6">
            This spotlight section uses a blue radial effect. Try moving your mouse around
            to see how it creates depth and interactivity.
          </p>
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors">
            Learn More
          </button>
        </div>
      </Spotlight>
      
      {/* Second section */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <Spotlight 
          theme="techDark"
          size="md"
          spotSize="md"
          intensity="medium"
          color="purple"
          type="directional"
          className="flex items-center justify-center p-8 bg-gray-900"
          style={{ minHeight: '50vh' }}
        >
          <div className="max-w-lg text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Left Panel</h2>
            <p className="text-gray-300 mb-6">
              This section uses a purple directional spotlight effect on a dark background.
            </p>
            <button className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors">
              Explore
            </button>
          </div>
        </Spotlight>
        
        <Spotlight 
          theme="neumorphicLight"
          size="md"
          spotSize="md"
          intensity="low"
          color="cyan"
          type="radial"
          className="flex items-center justify-center p-8 bg-[#e0e5ec]"
          style={{ minHeight: '50vh' }}
        >
          <div className="max-w-lg text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Right Panel</h2>
            <p className="text-gray-600 mb-6">
              This section uses a cyan radial spotlight effect on a light neumorphic background.
            </p>
            <button className="px-6 py-3 bg-cyan-500 text-white rounded-lg font-medium hover:bg-cyan-600 transition-colors shadow-[3px_3px_6px_#b8b9be,-3px_-3px_6px_#ffffff]">
              Discover
            </button>
          </div>
        </Spotlight>
      </div>
    </div>
  ),
};

// Animation comparison
export const AnimationComparison: Story = {
  args: {
    theme: 'glass',
    size: 'md',
    spotSize: 'md',
    intensity: 'medium',
    color: 'multi',
    type: 'radial',
  },
  decorators: [
    (Story) => (
      <ThemeProvider initialTheme="glass">
        <div style={{ 
          background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
          minHeight: '600px',
        }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  render: () => (
    <div className="p-8" style={{ background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)' }}>
      <h2 className="text-2xl font-bold mb-6 text-center text-white">Spotlight Animations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {['none', 'pulse', 'breathe', 'rainbow'].map((animation) => (
          <Spotlight 
            key={animation}
            theme="glass"
            size="md"
            spotSize="md"
            intensity="medium"
            color="multi"
            animation={animation as any}
            type="radial"
            className="border border-white/10 rounded-xl p-6 backdrop-blur-sm"
            style={{ height: '250px' }}
          >
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2 text-white capitalize">{animation} Animation</h3>
              <p className="text-white/80">
                {animation === 'none' ? 
                  'No animation - just the basic spotlight effect that follows your cursor.' :
                  `This demonstrates the ${animation} animation for the spotlight effect.`
                }
              </p>
            </div>
          </Spotlight>
        ))}
      </div>
    </div>
  ),
};

// Interactive playground
export const InteractivePlayground: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A fully interactive playground where you can test different combinations of props.'
      }
    }
  },
  render: (args) => (
    <Spotlight 
      {...args} 
      className="flex items-center justify-center p-8" 
      style={{ minHeight: '400px' }}
    >
      <div className="max-w-2xl text-center">
        <h1 className="text-3xl font-bold mb-4">Spotlight Playground</h1>
        <p className="mb-6">
          This is an interactive playground. Use the controls below to adjust the spotlight properties and see how they affect the appearance and behavior.
        </p>
        <p className="text-sm opacity-70 mb-6">
          Try changing theme, size, color, intensity, animation, and type in the Controls panel.
        </p>
        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors">
          Experiment
        </button>
      </div>
    </Spotlight>
  ),
};