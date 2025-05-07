import React from 'react';
import { HeroGrid } from './HeroGrid';
import { ThemeProvider } from '../../providers/ThemeProvider';

export default {
  title: 'Lumina UI/HeroGrid',
  component: HeroGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A versatile grid-based hero section component for Lumina UI with theme support.',
      },
    },
  },
  argTypes: {
    theme: {
      control: 'select',
      options: ['enterprise', 'techDark', 'glass'],
      description: 'Theme style for the hero section',
      defaultValue: 'enterprise',
    },
    layout: {
      control: 'select',
      options: ['classic', 'centered', 'asymmetric', 'feature'],
      description: 'Layout arrangement of the grid',
      defaultValue: 'classic',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'full'],
      description: 'Size of the container',
      defaultValue: 'lg',
    },
    spacing: {
      control: 'select',
      options: ['compact', 'normal', 'relaxed', 'spacious'],
      description: 'Spacing of the container',
      defaultValue: 'normal',
    },
    background: {
      control: 'select',
      options: ['solid', 'gradient', 'image', 'pattern'],
      description: 'Background style',
      defaultValue: 'solid',
    },
    alignment: {
      control: 'select',
      options: ['start', 'center', 'end'],
      description: 'Text and content alignment',
      defaultValue: 'start',
    },
    backgroundImage: {
      control: 'text',
      description: 'URL for background image (when background is set to "image")',
    },
  },
};

// Placeholder image URLs for demo purposes
const placeholderImageUrl = '/api/placeholder/600/400';
const placeholderBgUrl = '/api/placeholder/1920/1080';

// Template for basic hero section
const Template = (args) => (
  <ThemeProvider theme={args.theme}>
    <HeroGrid {...args}>
      <HeroGrid.Content>
        <HeroGrid.Title>
          Build beautiful interfaces with Lumina UI
        </HeroGrid.Title>
        <HeroGrid.Subtitle>
          A modern, themeable component library for React applications
        </HeroGrid.Subtitle>
        <p className="text-foreground-secondary max-w-xl">
          Lumina UI provides a comprehensive set of accessible, customizable, and themeable components
          to help you build stunning user interfaces for the web.
        </p>
        <HeroGrid.Actions>
          <button className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary-dark transition-colors">
            Get Started
          </button>
          <button className="px-6 py-3 bg-transparent border border-border text-foreground-primary rounded-md font-medium hover:bg-background-secondary transition-colors">
            Documentation
          </button>
        </HeroGrid.Actions>
      </HeroGrid.Content>
      <HeroGrid.Media imageUrl={placeholderImageUrl} alt="Lumina UI components" />
    </HeroGrid>
  </ThemeProvider>
);

// Basic example with default args
export const Default = Template.bind({});
Default.args = {
  theme: 'enterprise',
  layout: 'classic',
  size: 'lg',
  spacing: 'normal',
  background: 'solid',
  alignment: 'start',
};

// Enterprise theme with gradient background
export const EnterpriseGradient = Template.bind({});
EnterpriseGradient.args = {
  theme: 'enterprise',
  layout: 'classic',
  size: 'lg',
  spacing: 'relaxed',
  background: 'gradient',
  alignment: 'start',
};
EnterpriseGradient.parameters = {
  backgrounds: { default: 'light' },
  docs: {
    description: {
      story: 'Enterprise theme with a gradient background for a professional look.',
    },
  },
};

// Tech Dark theme with background image
export const TechDarkImage = Template.bind({});
TechDarkImage.args = {
  theme: 'techDark',
  layout: 'asymmetric',
  size: 'full',
  spacing: 'spacious',
  background: 'image',
  alignment: 'start',
  backgroundImage: placeholderBgUrl,
};
TechDarkImage.parameters = {
  backgrounds: { default: 'dark' },
  docs: {
    description: {
      story: 'Tech Dark theme with a background image and asymmetric layout.',
    },
  },
};

// Glass theme with centered layout
export const GlassCentered = Template.bind({});
GlassCentered.args = {
  theme: 'glass',
  layout: 'centered',
  size: 'lg',
  spacing: 'relaxed',
  background: 'gradient',
  alignment: 'center',
};
GlassCentered.parameters = {
  backgrounds: { default: 'dark' },
  docs: {
    description: {
      story: 'Glass theme with centered layout and content.',
    },
  },
};

// Feature grid layout
export const FeatureGrid = (args) => (
  <ThemeProvider theme={args.theme}>
    <HeroGrid {...args}>
      <div className="col-span-full mb-8 text-center">
        <HeroGrid.Title className="text-center">Key Features</HeroGrid.Title>
        <HeroGrid.Subtitle className="text-center max-w-2xl mx-auto">
          Everything you need to build stunning user interfaces
        </HeroGrid.Subtitle>
      </div>
      
      <div className="flex flex-col items-center text-center p-6 border border-border rounded-xl bg-background-secondary">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
          <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Themeable</h3>
        <p className="text-foreground-secondary">Easily switch between different themes or create your own.</p>
      </div>
      
      <div className="flex flex-col items-center text-center p-6 border border-border rounded-xl bg-background-secondary">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
          <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Customizable</h3>
        <p className="text-foreground-secondary">Tailor components to your specific design requirements.</p>
      </div>
      
      <div className="flex flex-col items-center text-center p-6 border border-border rounded-xl bg-background-secondary">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
          <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Fast</h3>
        <p className="text-foreground-secondary">Optimized performance with React.memo and optimized renders.</p>
      </div>
    </HeroGrid>
  </ThemeProvider>
);

FeatureGrid.args = {
  theme: 'techDark',
  layout: 'feature',
  size: 'lg',
  spacing: 'relaxed',
  background: 'solid',
  alignment: 'center',
};

FeatureGrid.parameters = {
  docs: {
    description: {
      story: 'Feature grid layout for showcasing features or services.',
    },
  },
};

// Dark/Light Mode Comparison
export const ThemeComparison = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white">
        <ThemeProvider theme="enterprise">
          <HeroGrid 
            layout="classic" 
            size="lg" 
            spacing="normal" 
            background="solid"
          >
            <HeroGrid.Content>
              <h3 className="text-sm uppercase tracking-wider text-primary font-semibold mb-2">Enterprise Theme</h3>
              <HeroGrid.Title>Clean, professional design for business applications</HeroGrid.Title>
              <p className="text-foreground-secondary max-w-xl">
                Perfect for dashboards, admin panels, and enterprise software interfaces.
              </p>
              <HeroGrid.Actions>
                <button className="px-5 py-2 bg-primary text-primary-foreground rounded-md font-medium">
                  Learn More
                </button>
              </HeroGrid.Actions>
            </HeroGrid.Content>
            <HeroGrid.Media imageUrl={placeholderImageUrl} alt="Enterprise UI" />
          </HeroGrid>
        </ThemeProvider>
      </div>
      
      <div className="bg-gray-900">
        <ThemeProvider theme="techDark">
          <HeroGrid 
            layout="classic" 
            size="lg" 
            spacing="normal" 
            background="solid"
          >
            <HeroGrid.Content>
              <h3 className="text-sm uppercase tracking-wider text-accent-blue font-semibold mb-2">Tech Dark Theme</h3>
              <HeroGrid.Title>Modern, dark interface for tech products</HeroGrid.Title>
              <p className="text-foreground-secondary max-w-xl">
                Ideal for developer tools, code editors, and modern web applications.
              </p>
              <HeroGrid.Actions>
                <button className="px-5 py-2 bg-primary text-primary-foreground rounded-md font-medium">
                  Learn More
                </button>
              </HeroGrid.Actions>
            </HeroGrid.Content>
            <HeroGrid.Media imageUrl={placeholderImageUrl} alt="Tech Dark UI" />
          </HeroGrid>
        </ThemeProvider>
      </div>
      
      <div className="bg-gradient-to-r from-purple-500/30 to-blue-500/30">
        <ThemeProvider theme="glass">
          <HeroGrid 
            layout="classic" 
            size="lg" 
            spacing="normal" 
            background="solid"
          >
            <HeroGrid.Content>
              <h3 className="text-sm uppercase tracking-wider text-white font-semibold mb-2">Glass Theme</h3>
              <HeroGrid.Title>Elegant glassmorphism design for modern interfaces</HeroGrid.Title>
              <p className="text-foreground-secondary max-w-xl">
                Perfect for creative applications, portfolios, and modern web experiences.
              </p>
              <HeroGrid.Actions>
                <button className="px-5 py-2 bg-primary text-primary-foreground rounded-md font-medium">
                  Learn More
                </button>
              </HeroGrid.Actions>
            </HeroGrid.Content>
            <HeroGrid.Media imageUrl={placeholderImageUrl} alt="Glass UI" />
          </HeroGrid>
        </ThemeProvider>
      </div>
    </div>
  );
};

ThemeComparison.parameters = {
  docs: {
    description: {
      story: 'Comparison of different themes applied to the same hero layout.',
    },
  },
};

// Example with actual content showcase
export const ProductShowcase = () => (
  <ThemeProvider theme="techDark">
    <HeroGrid 
      layout="asymmetric" 
      size="full" 
      spacing="spacious" 
      background="gradient"
      className="min-h-[80vh]"
    >
      <div>
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
          <span className="mr-2">✨</span> Introducing Lumina UI v2.0
        </div>
        <HeroGrid.Title>
          Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple">stunning interfaces</span> in minutes
        </HeroGrid.Title>
        <p className="text-foreground-secondary text-lg max-w-xl mb-6">
          Lumina UI provides enterprise-grade components with a focus on accessibility, 
          customization, and developer experience.
        </p>
        
        <div className="space-y-4 mb-8">
          <div className="flex items-start">
            <div className="mr-3 mt-1 text-primary">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h4 className="font-medium">Theme-Aware Components</h4>
              <p className="text-foreground-tertiary">All components adapt to your selected theme automatically</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="mr-3 mt-1 text-primary">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h4 className="font-medium">Fully Responsive</h4>
              <p className="text-foreground-tertiary">Designed for all screen sizes from mobile to desktop</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="mr-3 mt-1 text-primary">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h4 className="font-medium">Accessible by Default</h4>
              <p className="text-foreground-tertiary">WCAG 2.1 AA compliant components out of the box</p>
            </div>
          </div>
        </div>
        
        <HeroGrid.Actions className="space-x-4">
          <button className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary-dark transition-colors shadow-md hover:shadow-lg">
            Get Started
          </button>
          <button className="px-6 py-3 group flex items-center">
            <span className="mr-2">Watch Demo</span>
            <span className="h-8 w-8 rounded-full bg-background-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </span>
          </button>
        </HeroGrid.Actions>
      </div>
      
      <HeroGrid.Media className="relative md:h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 gradient-border-1 rounded-lg opacity-50"></div>
        <div className="w-full h-full p-2">
          <div className="w-full h-full bg-background-secondary rounded-lg overflow-hidden border border-border p-4 shadow-xl">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="text-xs text-foreground-tertiary ml-2">Lumina UI Demo</div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 h-[90%] w-full">
              <div className="border border-border rounded-md p-3 bg-background-primary">
                <div className="h-6 w-2/3 bg-background-tertiary rounded mb-3"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-background-tertiary rounded w-full"></div>
                  <div className="h-4 bg-background-tertiary rounded w-5/6"></div>
                  <div className="h-4 bg-background-tertiary rounded w-4/5"></div>
                </div>
              </div>
              
              <div className="border border-border rounded-md p-3 bg-background-primary">
                <div className="h-6 w-2/3 bg-background-tertiary rounded mb-3"></div>
                <div className="flex space-x-2 mb-3">
                  <div className="h-8 bg-primary rounded w-1/4"></div>
                  <div className="h-8 bg-background-tertiary rounded w-1/4"></div>
                  <div className="h-8 bg-background-tertiary rounded w-1/4"></div>
                </div>
                <div className="h-[60%] bg-background-tertiary rounded w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </HeroGrid.Media>
    </HeroGrid>
  </ThemeProvider>
);

ProductShowcase.parameters = {
  docs: {
    description: {
      story: 'Product showcase with detailed feature highlights and interactive demo preview.',
    },
  },
};