import type { Meta, StoryObj } from '@storybook/react';
import { HeroGrid } from './HeroGrid';

const meta: Meta<typeof HeroGrid> = {
  title: 'Components/Layout/HeroGrid',
  component: HeroGrid,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    theme: {
      control: 'select',
      options: ['enterprise', 'techDark', 'glass'],
      description: 'Visual theme for the hero section',
    },
    layout: {
      control: 'select',
      options: ['classic', 'centered', 'asymmetric', 'feature'],
      description: 'Layout structure for the grid',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'full'],
      description: 'Maximum width of the container',
    },
    spacing: {
      control: 'select',
      options: ['compact', 'normal', 'relaxed', 'spacious'],
      description: 'Padding amount around the content',
    },
    background: {
      control: 'select',
      options: ['solid', 'gradient', 'image', 'pattern'],
      description: 'Background style',
    },
    alignment: {
      control: 'select',
      options: ['start', 'center', 'end'],
      description: 'Content alignment',
    },
    backgroundImage: {
      control: 'text',
      description: 'URL for background image (if background is set to "image")',
    },
    backgroundOverlay: {
      control: 'boolean',
      description: 'Whether to show a dark overlay on background images',
    },
    accentColor: {
      control: 'color',
      description: 'Accent color for the hero section (CSS variable)',
    },
  },
  args: {
    theme: 'enterprise',
    layout: 'classic',
    size: 'lg',
    spacing: 'normal',
    background: 'solid',
    alignment: 'start',
    backgroundOverlay: true,
  },
};

export default meta;
type Story = StoryObj<typeof HeroGrid>;

// Basic Hero Section with Classic Layout
export const Classic: Story = {
  args: {
    layout: 'classic',
  },
  render: (args) => (
    <HeroGrid {...args}>
      <HeroGrid.Content>
        <HeroGrid.Title>
          Build beautiful UIs with Lumina Components
        </HeroGrid.Title>
        <HeroGrid.Subtitle>
          A modern, flexible component library that makes creating stunning interfaces simple and enjoyable.
        </HeroGrid.Subtitle>
        <p className="mb-6">
          Lumina provides a comprehensive set of customizable, accessible components built on modern best practices. 
          From simple buttons to complex data visualizations, we've got you covered.
        </p>
        <HeroGrid.Actions>
          <button className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors">
            Get Started
          </button>
          <button className="px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary-light/10 transition-colors">
            View Docs
          </button>
        </HeroGrid.Actions>
      </HeroGrid.Content>
      <HeroGrid.Media 
        imageUrl="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
        alt="Developer working on code"
      />
    </HeroGrid>
  ),
};

// Centered Layout
export const Centered: Story = {
  args: {
    layout: 'centered',
    spacing: 'spacious',
  },
  render: (args) => (
    <HeroGrid {...args}>
      <HeroGrid.Content>
        <HeroGrid.Title>
          One Platform, Unlimited Possibilities
        </HeroGrid.Title>
        <HeroGrid.Subtitle>
          Everything you need to build modern web applications
        </HeroGrid.Subtitle>
        <p className="max-w-2xl mx-auto mb-6">
          Lumina UI provides a comprehensive set of React components that work seamlessly together 
          to help you build stunning, responsive web applications faster than ever before.
        </p>
        <HeroGrid.Actions className="justify-center">
          <button className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors">
            Get Started
          </button>
          <button className="px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary-light/10 transition-colors">
            View Examples
          </button>
        </HeroGrid.Actions>
      </HeroGrid.Content>
    </HeroGrid>
  ),
};

// Tech Dark Theme with Gradient Background
export const TechDark: Story = {
  args: {
    theme: 'techDark',
    layout: 'asymmetric',
    background: 'gradient',
    spacing: 'relaxed',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
  render: (args) => (
    <HeroGrid {...args}>
      <HeroGrid.Content>
        <HeroGrid.Title className="text-white">
          Build with confidence
        </HeroGrid.Title>
        <HeroGrid.Subtitle className="text-gray-300">
          Powerful components for modern web development
        </HeroGrid.Subtitle>
        <p className="text-gray-300 mb-6">
          Our components are designed to be flexible, accessible, and performant right out of the box.
          Each component is built with real-world use cases in mind.
        </p>
        <HeroGrid.Actions>
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors">
            Explore Components
          </button>
          <button className="px-6 py-3 border border-gray-500 text-gray-300 rounded-lg font-medium hover:bg-white/5 transition-colors">
            View GitHub
          </button>
        </HeroGrid.Actions>
      </HeroGrid.Content>
      <HeroGrid.Media 
        imageUrl="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
        alt="Developer working on code"
      />
    </HeroGrid>
  ),
};

// Glass Theme with Background Image
export const GlassWithImage: Story = {
  args: {
    theme: 'glass',
    layout: 'classic',
    background: 'image',
    backgroundImage: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=2026&auto=format&fit=crop',
    spacing: 'spacious',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
  render: (args) => (
    <HeroGrid {...args}>
      <HeroGrid.Content>
        <HeroGrid.Title className="text-white">
          Glass Morphism UI
        </HeroGrid.Title>
        <HeroGrid.Subtitle className="text-white/80">
          Create modern, translucent interfaces with our glass components
        </HeroGrid.Subtitle>
        <p className="text-white/70 mb-6">
          Our glass components provide a modern aesthetic with depth and context. 
          Perfect for creating immersive user experiences that feel contemporary and elegant.
        </p>
        <HeroGrid.Actions>
          <button className="px-6 py-3 bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-lg font-medium hover:bg-white/30 transition-colors">
            Explore Glass UI
          </button>
          <button className="px-6 py-3 bg-white/10 backdrop-blur-md text-white/80 rounded-lg font-medium hover:bg-white/20 transition-colors">
            View Examples
          </button>
        </HeroGrid.Actions>
      </HeroGrid.Content>
      <div className="backdrop-blur-md bg-white/10 border border-white/20 p-8 rounded-xl shadow-xl">
        <h3 className="text-white text-xl font-medium mb-4">Glass Card Example</h3>
        <p className="text-white/70">
          This card demonstrates how glass morphism can be applied to create depth and hierarchy in your interfaces.
        </p>
      </div>
    </HeroGrid>
  ),
};

// Feature Grid Layout
export const FeatureGrid: Story = {
  args: {
    layout: 'feature',
    spacing: 'relaxed',
  },
  render: (args) => (
    <HeroGrid {...args}>
      <div className="md:col-span-3 mb-8 text-center">
        <HeroGrid.Title>
          Everything you need
        </HeroGrid.Title>
        <HeroGrid.Subtitle>
          A complete toolkit for modern web development
        </HeroGrid.Subtitle>
      </div>
      
      {/* Feature 1 */}
      <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
            <path d="m15 5 4 4"></path>
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Customizable</h3>
        <p className="text-foreground-secondary">
          Every component can be easily customized to match your brand and design system.
        </p>
      </div>
      
      {/* Feature 2 */}
      <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10z"></path>
            <path d="M12 18c3.3 0 6-2.7 6-6s-2.7-6-6-6-6 2.7-6 6 2.7 6 6 6z"></path>
            <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Accessible</h3>
        <p className="text-foreground-secondary">
          Built with accessibility in mind, ensuring your application works for everyone.
        </p>
      </div>
      
      {/* Feature 3 */}
      <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.9 18.55A2 2 0 0 0 20 17H4a2 2 0 0 0-1.59.9"></path>
            <path d="M4 17V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10"></path>
            <path d="M12 15v-5"></path>
            <path d="M8 10v5"></path>
            <path d="m16 12-1.5-1.5"></path>
            <path d="M18 10v2"></path>
            <path d="M12.7 21a1.99 1.99 0 0 1-1.4 0"></path>
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Responsive</h3>
        <p className="text-foreground-secondary">
          Components are designed to work beautifully on any device or screen size.
        </p>
      </div>
    </HeroGrid>
  ),
};