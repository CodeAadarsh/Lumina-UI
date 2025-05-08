import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ThemeToggle from './ThemeToggle';
import { ThemeProvider } from '../../providers/ThemeProvider';

const meta: Meta<typeof ThemeToggle> = {
  title: 'UI/ThemeToggle',
  component: ThemeToggle,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A toggle button that cycles between different theme options.'
      }
    }
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS class name',
    },
    showLabel: {
      control: 'boolean',
      description: 'Show theme name label next to the toggle',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the toggle button',
    }
  },
  decorators: [
    (Story) => (
      <div className="p-8 flex items-center justify-center">
        <Story />
      </div>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof ThemeToggle>;

/**
 * Default ThemeToggle with enterprise theme
 */
export const Default: Story = {
  render: (args) => (
    <ThemeProvider theme="enterprise">
      <ThemeToggle {...args} />
    </ThemeProvider>
  ),
  args: {
    size: 'md',
    showLabel: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Default theme toggle with the enterprise theme.'
      }
    }
  }
};

/**
 * ThemeToggle with tech dark theme
 */
export const TechDarkTheme: Story = {
  render: (args) => (
    <ThemeProvider theme="techDark">
      <div className="p-6 bg-gray-900 rounded-lg">
        <ThemeToggle {...args} />
      </div>
    </ThemeProvider>
  ),
  args: {
    size: 'md',
    showLabel: false,
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: 'Theme toggle with the tech dark theme.'
      }
    }
  }
};

/**
 * ThemeToggle with glass theme
 */
export const GlassTheme: Story = {
  render: (args) => (
    <ThemeProvider theme="glass">
      <div className="p-6 bg-gradient-to-br from-blue-600/30 to-purple-600/30 backdrop-blur-sm rounded-lg">
        <ThemeToggle {...args} />
      </div>
    </ThemeProvider>
  ),
  args: {
    size: 'md',
    showLabel: false,
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: 'Theme toggle with the glass theme on a gradient background.'
      }
    }
  }
};

/**
 * ThemeToggle with size variants
 */
export const Sizes: Story = {
  render: () => (
    <ThemeProvider theme="enterprise">
      <div className="flex items-center space-x-4">
        <ThemeToggle size="sm" />
        <ThemeToggle size="md" />
        <ThemeToggle size="lg" />
      </div>
    </ThemeProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different size variants of the ThemeToggle component.'
      }
    }
  }
};

/**
 * ThemeToggle with labels
 */
export const WithLabels: Story = {
  render: () => (
    <div className="space-y-4">
      <ThemeProvider theme="enterprise">
        <ThemeToggle showLabel size="md" />
      </ThemeProvider>
      
      <ThemeProvider theme="techDark">
        <div className="p-4 bg-gray-900 rounded-lg">
          <ThemeToggle showLabel size="md" />
        </div>
      </ThemeProvider>
      
      <ThemeProvider theme="glass">
        <div className="p-4 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-lg">
          <ThemeToggle showLabel size="md" />
        </div>
      </ThemeProvider>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'ThemeToggle with labels showing the current theme name.'
      }
    }
  }
};

/**
 * Interactive demo showing theme toggling
 */
export const InteractiveDemo: Story = {
  render: () => {
    // We need to use React.useState here since this is rendered as a component
    const [currentTheme, setCurrentTheme] = React.useState<'enterprise' | 'techDark' | 'glass'>('enterprise');
    
    // Simple theme toggle function for the demo
    const toggleTheme = () => {
      const themes = ['enterprise', 'techDark', 'glass'] as const;
      const currentIndex = themes.indexOf(currentTheme);
      const nextIndex = (currentIndex + 1) % themes.length;
      setCurrentTheme(themes[nextIndex]);
    };
    
    // Background styles based on theme
    const getBackgroundStyles = () => {
      switch(currentTheme) {
        case 'techDark':
          return 'bg-gray-900 text-white';
        case 'glass':
          return 'bg-gradient-to-br from-blue-600/30 to-purple-600/30 text-white backdrop-blur-sm';
        default:
          return 'bg-white text-gray-900 border border-gray-200';
      }
    };
    
    return (
      <ThemeProvider theme={currentTheme}>
        <div className={`p-6 rounded-lg transition-all duration-500 ${getBackgroundStyles()}`} style={{minWidth: '300px'}}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">Current Theme: {currentTheme}</h3>
            <button
              onClick={toggleTheme}
              className="bg-primary text-white px-3 py-1 rounded-md text-sm hover:bg-primary-dark"
            >
              Toggle Theme
            </button>
          </div>
          
          <div className="flex justify-center my-4">
            <ThemeToggle showLabel size="md" />
          </div>
          
          <p className="text-sm mt-4 opacity-80 text-center">
            Click the toggle button to cycle through themes
          </p>
        </div>
      </ThemeProvider>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive demonstration of the ThemeToggle component in action.'
      }
    }
  }
};

/**
 * ThemeToggle in a navbar context
 */
export const InNavbar: Story = {
  render: () => (
    <ThemeProvider theme="enterprise">
      <div className="w-full max-w-4xl mx-auto">
        {/* Simulated navbar */}
        <div className="bg-background-primary shadow-sm border-b border-border px-4 py-3 flex items-center justify-between">
          <div className="font-bold text-lg text-foreground-primary">Lumina UI</div>
          
          <div className="flex items-center space-x-6">
            <a href="#" className="text-foreground-secondary hover:text-foreground-primary">Home</a>
            <a href="#" className="text-foreground-secondary hover:text-foreground-primary">Features</a>
            <a href="#" className="text-foreground-secondary hover:text-foreground-primary">Docs</a>
            <ThemeToggle size="sm" />
          </div>
        </div>
        
        <div className="p-4 text-sm text-foreground-secondary">
          The ThemeToggle component shown in a navbar context
        </div>
      </div>
    </ThemeProvider>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'ThemeToggle in a navbar context, a common usage pattern.'
      }
    }
  }
};

/**
 * Custom styled ThemeToggle
 */
export const CustomStyling: Story = {
  render: () => (
    <ThemeProvider theme="enterprise">
      <div className="space-y-4">
        <ThemeToggle className="bg-primary text-white hover:bg-primary-dark shadow-md" />
        
        <ThemeToggle className="bg-gradient-to-r from-pink-500 to-purple-500 text-white border-none shadow-lg" />
        
        <ThemeToggle className="border-2 border-primary text-primary bg-white hover:bg-primary/10" />
      </div>
    </ThemeProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Examples of customizing the ThemeToggle with additional classes.'
      }
    }
  }
};