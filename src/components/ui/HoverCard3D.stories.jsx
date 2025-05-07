import React from 'react';
import { HoverCard3D, HoverCard3DWithTheme } from './HoverCard3D';
import { ThemeProvider } from '../../providers/ThemeProvider';

export default {
  title: 'Lumina UI/HoverCard3D',
  component: HoverCard3DWithTheme, // Use the wrapped version for stories
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '3D hover card component with mouse tracking effects for Lumina UI.',
      },
    },
  },
  argTypes: {
    theme: {
      control: 'select',
      options: ['enterprise', 'techDark', 'glass'],
      description: 'Theme style for the card',
      defaultValue: 'enterprise',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the card',
      defaultValue: 'md',
    },
    intensity: {
      control: 'select',
      options: ['subtle', 'medium', 'strong'],
      description: 'Intensity of the 3D effect',
      defaultValue: 'medium',
    },
    hoverEffect: {
      control: 'select',
      options: ['none', 'glow', 'shimmer', 'lift'],
      description: 'Additional hover effect',
      defaultValue: 'none',
    },
    glareEnabled: {
      control: 'boolean',
      description: 'Enable or disable the glare effect',
      defaultValue: true,
    },
    rotateReverse: {
      control: 'boolean',
      description: 'Reverse the rotation direction',
      defaultValue: false,
    },
    glareOpacity: {
      control: 'range',
      min: 0,
      max: 1,
      step: 0.1,
      description: 'Opacity of the glare effect',
      defaultValue: 0.1,
    },
    maxRotation: {
      control: 'range',
      min: 5,
      max: 45,
      step: 1,
      description: 'Maximum rotation in degrees',
      defaultValue: 20,
    },
    perspective: {
      control: 'range',
      min: 500,
      max: 2000,
      step: 100,
      description: 'Perspective value',
      defaultValue: 1000,
    },
  },
};

// Template for basic card story - using HoverCard3DWithTheme for safety
const Template = (args) => (
  <HoverCard3DWithTheme {...args}>
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-foreground-primary">Lumina UI Card</h3>
      <p className="text-foreground-secondary">
        This is a 3D card with interactive hover effects. Move your cursor over the card to see the effect in action.
      </p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-sm text-foreground-tertiary">Hover to interact</span>
        <button className="px-4 py-2 bg-primary text-primary-foreground rounded">Action</button>
      </div>
    </div>
  </HoverCard3DWithTheme>
);

// Basic story with default args
export const Default = Template.bind({});
Default.args = {
  theme: 'enterprise',
  size: 'md',
  intensity: 'medium',
  hoverEffect: 'none',
};

// Enterprise theme variant
export const EnterpriseTheme = Template.bind({});
EnterpriseTheme.args = {
  theme: 'enterprise',
  size: 'md',
  intensity: 'medium',
  hoverEffect: 'glow',
  glareEnabled: true,
};
EnterpriseTheme.parameters = {
  backgrounds: { default: 'light' },
  docs: {
    description: {
      story: 'Enterprise theme variant with professional styling and subtle glow effect.',
    },
  },
};

// Tech Dark theme variant
export const TechDarkTheme = Template.bind({});
TechDarkTheme.args = {
  theme: 'techDark',
  size: 'md',
  intensity: 'strong',
  hoverEffect: 'shimmer',
  glareEnabled: true,
  glareOpacity: 0.15,
  maxRotation: 25,
};
TechDarkTheme.parameters = {
  backgrounds: { default: 'dark' },
  docs: {
    description: {
      story: 'Tech Dark theme with enhanced effects, including shimmer animation and strong 3D rotation.',
    },
  },
};

// Glass theme variant
export const GlassTheme = Template.bind({});
GlassTheme.args = {
  theme: 'glass',
  size: 'md',
  intensity: 'medium',
  hoverEffect: 'glow',
  glareEnabled: true,
  glareOpacity: 0.2,
};
GlassTheme.parameters = {
  backgrounds: { default: 'gray' },
  docs: {
    description: {
      story: 'Glass theme with blur effects, translucency, and elegant glow on hover.',
    },
  },
};

// Dark/Light Mode Comparison
// For this, we'll create a special story layout with two cards side by side
export const DarkLightComparison = () => {
  return (
    <div className="grid grid-cols-2 gap-8 w-full max-w-3xl">
      <div className="bg-white p-8 rounded-lg">
        <h4 className="text-gray-800 mb-4 text-center">Light Mode</h4>
        <HoverCard3DWithTheme
          theme="enterprise"
          size="md"
          intensity="medium"
          hoverEffect="glow"
          glareEnabled={true}
        >
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Light Variant</h3>
            <p>3D card with light mode styling. Move your cursor to see the effect.</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-sm opacity-70">Hover to interact</span>
              <button className="px-4 py-2 bg-blue-500 text-white rounded">Action</button>
            </div>
          </div>
        </HoverCard3DWithTheme>
      </div>
      
      <div className="bg-gray-900 p-8 rounded-lg">
        <h4 className="text-white mb-4 text-center">Dark Mode</h4>
        <HoverCard3DWithTheme
          theme="techDark"
          size="md"
          intensity="medium"
          hoverEffect="glow"
          glareEnabled={true}
          glareOpacity={0.15}
        >
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Dark Variant</h3>
            <p>3D card with dark mode styling. Move your cursor to see the effect.</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-sm opacity-70">Hover to interact</span>
              <button className="px-4 py-2 bg-blue-500 text-white rounded">Action</button>
            </div>
          </div>
        </HoverCard3DWithTheme>
      </div>
    </div>
  );
};
DarkLightComparison.parameters = {
  layout: 'fullscreen',
  docs: {
    description: {
      story: 'Side-by-side comparison of the 3D card in light and dark modes.',
    },
  },
};

// Showcase with different sizes
export const SizesShowcase = () => {
  return (
    <div className="flex flex-col space-y-8 w-full max-w-4xl">
      <HoverCard3DWithTheme
        theme="enterprise"
        size="sm"
        intensity="medium"
        hoverEffect="glow"
      >
        <h3 className="text-lg font-semibold">Small Card</h3>
        <p className="text-sm mt-2">Compact version for limited spaces.</p>
      </HoverCard3DWithTheme>
      
      <HoverCard3DWithTheme
        theme="enterprise"
        size="md"
        intensity="medium"
        hoverEffect="glow"
      >
        <h3 className="text-xl font-semibold">Medium Card</h3>
        <p className="mt-2">Standard size for most use cases.</p>
        <div className="mt-4">
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded">Action</button>
        </div>
      </HoverCard3DWithTheme>
      
      <HoverCard3DWithTheme
        theme="enterprise"
        size="lg"
        intensity="medium"
        hoverEffect="glow"
      >
        <h3 className="text-2xl font-semibold">Large Card</h3>
        <p className="mt-2">Expanded version for more content and emphasis.</p>
        <div className="mt-6 flex space-x-4">
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded">Primary</button>
          <button className="px-4 py-2 bg-background-secondary text-foreground-primary border border-border rounded">Secondary</button>
        </div>
      </HoverCard3DWithTheme>
    </div>
  );
};
SizesShowcase.parameters = {
  layout: 'fullscreen',
  docs: {
    description: {
      story: 'Showcase of different card sizes (small, medium, large).',
    },
  },
};

// Effects Showcase
export const EffectsShowcase = () => {
  return (
    <div className="grid grid-cols-2 gap-6 w-full max-w-4xl">
      <HoverCard3DWithTheme
        theme="techDark"
        size="md"
        intensity="medium"
        hoverEffect="glow"
        glareEnabled={true}
      >
        <h3 className="text-xl font-semibold mb-4">Glow Effect</h3>
        <p>Card with glowing border effect on hover.</p>
      </HoverCard3DWithTheme>
      
      <HoverCard3DWithTheme
        theme="techDark"
        size="md"
        intensity="medium"
        hoverEffect="shimmer"
        glareEnabled={true}
      >
        <h3 className="text-xl font-semibold mb-4">Shimmer Effect</h3>
        <p>Card with animated shimmer effect on hover.</p>
      </HoverCard3DWithTheme>
      
      <HoverCard3DWithTheme
        theme="glass"
        size="md"
        intensity="medium"
        hoverEffect="glow"
        glareEnabled={false}
      >
        <h3 className="text-xl font-semibold mb-4">No Glare</h3>
        <p>Card with 3D rotation but no glare effect.</p>
      </HoverCard3DWithTheme>
      
      <HoverCard3DWithTheme
        theme="glass"
        size="md"
        intensity="strong"
        hoverEffect="glow"
        glareEnabled={true}
        maxRotation={30}
      >
        <h3 className="text-xl font-semibold mb-4">Strong Intensity</h3>
        <p>Card with stronger rotation effect on hover.</p>
      </HoverCard3DWithTheme>
    </div>
  );
};
EffectsShowcase.parameters = {
  backgrounds: { default: 'dark' },
  docs: {
    description: {
      story: 'Showcase of different hover effects and intensity settings.',
    },
  },
};

// Example with proper ThemeProvider usage
export const WithThemeProvider = () => {
  return (
    <div className="space-y-8">
      <div className="p-8 bg-gray-100 rounded-lg">
        <ThemeProvider theme="enterprise">
          <h3 className="text-center mb-4 text-gray-800">Enterprise Theme</h3>
          {/* Use the regular HoverCard3D here since we have a ThemeProvider */}
          <HoverCard3D 
            size="md"
            intensity="medium"
            hoverEffect="glow"
          >
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Theme Aware Card</h3>
              <p>This card inherits the Enterprise theme from ThemeProvider.</p>
            </div>
          </HoverCard3D>
        </ThemeProvider>
      </div>
      
      <div className="p-8 bg-gray-900 rounded-lg">
        <ThemeProvider theme="techDark">
          <h3 className="text-center mb-4 text-gray-100">Tech Dark Theme</h3>
          <HoverCard3D 
            size="md"
            intensity="medium"
            hoverEffect="shimmer"
          >
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Theme Aware Card</h3>
              <p>This card inherits the Tech Dark theme from ThemeProvider.</p>
            </div>
          </HoverCard3D>
        </ThemeProvider>
      </div>
      
      <div className="p-8 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-lg">
        <ThemeProvider theme="glass">
          <h3 className="text-center mb-4 text-white">Glass Theme</h3>
          <HoverCard3D 
            size="md"
            intensity="medium"
            hoverEffect="glow"
          >
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Theme Aware Card</h3>
              <p>This card inherits the Glass theme from ThemeProvider.</p>
            </div>
          </HoverCard3D>
        </ThemeProvider>
      </div>
    </div>
  );
};
WithThemeProvider.parameters = {
  layout: 'fullscreen',
  docs: {
    description: {
      story: 'Example showing how the component works with ThemeProvider context.',
    },
  },
};