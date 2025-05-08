import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { 
  HoverCard3D, 
  HoverCard3DWithTheme, 
  HoverCard3DProps, 
  HoverCardTheme 
} from './HoverCard3D';
import { ThemeProvider } from '../../providers/ThemeProvider';

const meta: Meta<typeof HoverCard3D> = {
  title: 'UI/HoverCard3D',
  component: HoverCard3D,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A card component with interactive 3D hover effects'
      }
    }
  },
  argTypes: {
    theme: {
      control: 'select',
      options: ['enterprise', 'techDark', 'glass'],
      description: 'Visual theme for the card'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the card'
    },
    intensity: {
      control: 'select',
      options: ['subtle', 'medium', 'strong'],
      description: 'Intensity of the 3D hover effect'
    },
    hoverEffect: {
      control: 'select',
      options: ['none', 'glow', 'shimmer', 'lift'],
      description: 'Additional hover effect'
    },
    glareEnabled: {
      control: 'boolean',
      description: 'Enable glare effect'
    },
    rotateReverse: {
      control: 'boolean',
      description: 'Reverse the rotation direction'
    },
    glareOpacity: {
      control: 'range',
      min: 0,
      max: 1,
      step: 0.05,
      description: 'Opacity of the glare effect'
    },
    glareColor: {
      control: 'text',
      description: 'Color of the glare in RGB format (e.g., "255, 255, 255")'
    },
    maxRotation: {
      control: 'range',
      min: 0,
      max: 45,
      step: 1,
      description: 'Maximum rotation in degrees'
    },
    perspective: {
      control: 'range',
      min: 500,
      max: 2000,
      step: 100,
      description: 'Perspective value for 3D effect'
    }
  }
};

export default meta;
type Story = StoryObj<typeof HoverCard3D>;

// Sample card content component for consistency across examples
const CardContent: React.FC<{ theme?: HoverCardTheme }> = ({ theme }) => {
  const isDark = theme === 'techDark' || theme === 'glass';
  
  return (
    <div>
      <div className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>
        Interactive 3D Card
      </div>
      <p className={`text-sm mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
        Hover over this card to see the 3D effect in action. Move your cursor around to see how the card responds to your movement.
      </p>
      <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
        Try different settings to customize the behavior and appearance of the effect.
      </div>
    </div>
  );
};

// Basic example with default props
export const Default: Story = {
  args: {
    theme: 'enterprise',
    size: 'md',
    intensity: 'medium',
    hoverEffect: 'none',
    glareEnabled: true,
    rotateReverse: false,
    glareOpacity: 0.1,
    glareColor: '255, 255, 255',
    maxRotation: 20,
    perspective: 1000,
    children: <CardContent theme="enterprise" />
  }
};

// Enterprise theme with glow effect
export const EnterpriseGlow: Story = {
  args: {
    theme: 'enterprise',
    size: 'md',
    intensity: 'medium',
    hoverEffect: 'glow',
    glareEnabled: true,
    children: <CardContent theme="enterprise" />
  },
  parameters: {
    backgrounds: { default: 'light' },
    docs: {
      description: {
        story: 'Enterprise theme with glow effect on hover.'
      }
    }
  }
};

// Tech Dark theme with shimmer effect
export const TechDarkShimmer: Story = {
  args: {
    theme: 'techDark',
    size: 'md',
    intensity: 'medium',
    hoverEffect: 'shimmer',
    glareEnabled: true,
    children: <CardContent theme="techDark" />
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: 'Tech Dark theme with shimmer effect on hover.'
      }
    }
  }
};

// Glass theme with glow effect
export const GlassGlow: Story = {
  args: {
    theme: 'glass',
    size: 'md',
    intensity: 'medium',
    hoverEffect: 'glow',
    glareEnabled: true,
    rotateReverse: false,
    glareColor: '200, 220, 255',
    glareOpacity: 0.15,
    children: <CardContent theme="glass" />
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: 'Glass theme with glow effect and custom glare color.'
      }
    }
  }
};

// Intensity Variants
export const IntensityVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-sm font-medium mb-2">Subtle Intensity</p>
        <HoverCard3D theme="enterprise" intensity="subtle" size="sm">
          <CardContent theme="enterprise" />
        </HoverCard3D>
      </div>
      
      <div>
        <p className="text-sm font-medium mb-2">Medium Intensity (Default)</p>
        <HoverCard3D theme="enterprise" intensity="medium" size="sm">
          <CardContent theme="enterprise" />
        </HoverCard3D>
      </div>
      
      <div>
        <p className="text-sm font-medium mb-2">Strong Intensity</p>
        <HoverCard3D theme="enterprise" intensity="strong" size="sm">
          <CardContent theme="enterprise" />
        </HoverCard3D>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different intensity variants for the 3D effect.'
      }
    }
  }
};

// Size Variants
export const SizeVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-sm font-medium mb-2">Small Size</p>
        <HoverCard3D theme="enterprise" size="sm">
          <CardContent theme="enterprise" />
        </HoverCard3D>
      </div>
      
      <div>
        <p className="text-sm font-medium mb-2">Medium Size (Default)</p>
        <HoverCard3D theme="enterprise" size="md">
          <CardContent theme="enterprise" />
        </HoverCard3D>
      </div>
      
      <div>
        <p className="text-sm font-medium mb-2">Large Size</p>
        <HoverCard3D theme="enterprise" size="lg">
          <CardContent theme="enterprise" />
        </HoverCard3D>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different size variants for the card.'
      }
    }
  }
};

// Hover Effect Variants
export const HoverEffectVariants: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <p className="text-sm font-medium mb-2">No Effect</p>
        <HoverCard3D theme="enterprise" hoverEffect="none" size="sm">
          <CardContent theme="enterprise" />
        </HoverCard3D>
      </div>
      
      <div>
        <p className="text-sm font-medium mb-2">Glow Effect</p>
        <HoverCard3D theme="enterprise" hoverEffect="glow" size="sm">
          <CardContent theme="enterprise" />
        </HoverCard3D>
      </div>
      
      <div>
        <p className="text-sm font-medium mb-2">Shimmer Effect</p>
        <HoverCard3D theme="enterprise" hoverEffect="shimmer" size="sm">
          <CardContent theme="enterprise" />
        </HoverCard3D>
      </div>
      
      <div>
        <p className="text-sm font-medium mb-2">Lift Effect</p>
        <HoverCard3D theme="enterprise" hoverEffect="lift" size="sm">
          <CardContent theme="enterprise" />
        </HoverCard3D>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different hover effect variants for the card.'
      }
    }
  }
};

// Theme Variants
export const ThemeVariants: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-8">
      <div className="p-6 bg-white rounded-lg">
        <p className="text-sm font-medium mb-3">Enterprise Theme</p>
        <HoverCard3D theme="enterprise" hoverEffect="glow" glareEnabled={true}>
          <CardContent theme="enterprise" />
        </HoverCard3D>
      </div>
      
      <div className="p-6 bg-gray-900 rounded-lg">
        <p className="text-sm font-medium text-white mb-3">Tech Dark Theme</p>
        <HoverCard3D theme="techDark" hoverEffect="shimmer" glareEnabled={true}>
          <CardContent theme="techDark" />
        </HoverCard3D>
      </div>
      
      <div className="p-6 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-lg">
        <p className="text-sm font-medium text-white mb-3">Glass Theme</p>
        <HoverCard3D theme="glass" hoverEffect="glow" glareEnabled={true}>
          <CardContent theme="glass" />
        </HoverCard3D>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Different theme variants for the card.'
      }
    }
  }
};

// With ThemeProvider
export const WithThemeProvider: Story = {
  render: () => (
    <div className="space-y-8">
      <ThemeProvider theme="techDark">
        <div className="p-6 bg-gray-900 rounded-lg">
          <p className="text-sm font-medium text-white mb-3">Card using ThemeProvider context</p>
          <HoverCard3D hoverEffect="glow" glareEnabled={true}>
            <CardContent theme="techDark" />
          </HoverCard3D>
        </div>
      </ThemeProvider>
      
      <div className="p-6 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-lg">
        <p className="text-sm font-medium text-white mb-3">Card with self-contained ThemeProvider</p>
        <HoverCard3DWithTheme theme="glass" hoverEffect="glow" glareEnabled={true}>
          <CardContent theme="glass" />
        </HoverCard3DWithTheme>
      </div>
    </div>
  ),
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: 'Example showing how the component works with ThemeProvider context.'
      }
    }
  }
};

// Custom Glare Effect
export const CustomGlareEffect: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
      <div>
        <p className="text-sm font-medium mb-2">Blue Glare (High Intensity)</p>
        <HoverCard3D 
          theme="techDark" 
          glareEnabled={true} 
          glareColor="0, 100, 255"
          glareOpacity={0.3}
          intensity="strong"
        >
          <CardContent theme="techDark" />
        </HoverCard3D>
      </div>
      
      <div>
        <p className="text-sm font-medium mb-2">Golden Glare</p>
        <HoverCard3D 
          theme="techDark" 
          glareEnabled={true} 
          glareColor="255, 215, 0"
          glareOpacity={0.2}
        >
          <CardContent theme="techDark" />
        </HoverCard3D>
      </div>
      
      <div>
        <p className="text-sm font-medium mb-2">Green Glare (Subtle)</p>
        <HoverCard3D 
          theme="techDark" 
          glareEnabled={true} 
          glareColor="0, 255, 100"
          glareOpacity={0.1}
          intensity="subtle"
        >
          <CardContent theme="techDark" />
        </HoverCard3D>
      </div>
      
      <div>
        <p className="text-sm font-medium mb-2">Purple Glare (Reversed)</p>
        <HoverCard3D 
          theme="techDark" 
          glareEnabled={true} 
          glareColor="180, 0, 255"
          glareOpacity={0.2}
          rotateReverse={true}
        >
          <CardContent theme="techDark" />
        </HoverCard3D>
      </div>
    </div>
  ),
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: 'Customizing the glare effect with different colors and intensities.'
      }
    }
  }
};

// Product Card Example
export const ProductCardExample: Story = {
  render: () => (
    <HoverCard3D
      theme="techDark"
      size="md"
      hoverEffect="glow"
      intensity="medium"
      glareEnabled={true}
      glareColor="100, 200, 255"
      glareOpacity={0.15}
      className="w-full max-w-xs"
    >
      <div className="relative">
        <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
          NEW
        </div>
        <img 
          src="https://via.placeholder.com/300x180" 
          alt="Product" 
          className="w-full h-48 object-cover rounded-t-lg mb-4"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold text-white mb-2">Premium Widget Pro</h3>
          <div className="flex items-center mb-2">
            <div className="text-yellow-400 flex">
              {"★★★★☆"}
            </div>
            <span className="text-gray-400 text-sm ml-1">(4.2)</span>
          </div>
          <p className="text-gray-300 text-sm mb-4">
            The ultimate widget with advanced features and premium build quality.
          </p>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-white">$149.99</span>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </HoverCard3D>
  ),
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: 'Example of using HoverCard3D for a product card UI.'
      }
    }
  }
};

// Image Gallery Example
export const ImageGalleryExample: Story = {
  render: () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
      {[
        { src: 'https://via.placeholder.com/400x300/3b82f6/ffffff?text=Image+1', caption: 'Mountain Vista' },
        { src: 'https://via.placeholder.com/400x300/8b5cf6/ffffff?text=Image+2', caption: 'Ocean Sunset' },
        { src: 'https://via.placeholder.com/400x300/ec4899/ffffff?text=Image+3', caption: 'Desert Oasis' },
        { src: 'https://via.placeholder.com/400x300/10b981/ffffff?text=Image+4', caption: 'Forest Pathway' },
      ].map((image, index) => (
        <HoverCard3D
          key={index}
          theme="glass"
          hoverEffect="glow"
          intensity="medium"
          glareEnabled={true}
          glareOpacity={0.2}
          maxRotation={15}
          className="overflow-hidden"
        >
          <div className="relative h-full">
            <img 
              src={image.src} 
              alt={image.caption}
              className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-3">
              <h3 className="text-white text-lg font-medium">{image.caption}</h3>
            </div>
          </div>
        </HoverCard3D>
      ))}
    </div>
  ),
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: 'Example of using HoverCard3D for an image gallery.'
      }
    }
  }
};

// Feature Card Grid Example
export const FeatureCardGridExample: Story = {
  render: () => {
    const features = [
      {
        icon: '⚡',
        title: 'Lightning Fast',
        description: 'Optimized for speed and performance'
      },
      {
        icon: '🔒',
        title: 'Secure',
        description: 'Enterprise-grade security features'
      },
      {
        icon: '📱',
        title: 'Responsive',
        description: 'Works on any device, any screen size'
      },
      {
        icon: '🔄',
        title: 'Scalable',
        description: 'Grows with your business needs'
      }
    ];
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
        {features.map((feature, index) => (
          <HoverCard3D
            key={index}
            theme="enterprise"
            hoverEffect={index % 2 === 0 ? 'glow' : 'shimmer'}
            intensity="medium"
            glareEnabled={true}
            maxRotation={10}
          >
            <div className="p-2">
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </HoverCard3D>
        ))}
      </div>
    );
  },
  parameters: {
    backgrounds: { default: 'light' },
    docs: {
      description: {
        story: 'Example of using HoverCard3D for feature cards in a grid layout.'
      }
    }
  }
};

// Interactive Configuration Example
export const InteractiveConfigExample: Story = {
  render: () => {
    // This is a simulated example to show how the component might be configured in a real app
    // In a real application, you would use React state here
    return (
      <div className="max-w-3xl mx-auto">
        <div className="p-6 bg-white rounded-lg shadow mb-6">
          <h2 className="text-xl font-bold mb-4">Interactive HoverCard3D Demo</h2>
          <p className="text-gray-600 mb-4">
            The HoverCard3D component can be easily configured through props. Below are examples of
            different configurations that you could apply in your own projects.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <HoverCard3D
              theme="techDark"
              hoverEffect="glow"
              intensity="medium"
              glareEnabled={true}
              glareColor="0, 150, 255"
              className="h-64"
            >
              <div className="flex flex-col items-center justify-center h-full text-center p-4">
                <h3 className="text-xl font-bold text-white mb-2">Tech Dark Theme</h3>
                <p className="text-gray-300 text-sm">
                  With blue glow effect and medium intensity
                </p>
              </div>
            </HoverCard3D>
            
            <HoverCard3D
              theme="glass"
              hoverEffect="shimmer"
              intensity="strong"
              glareEnabled={false}
              className="h-64"
            >
              <div className="flex flex-col items-center justify-center h-full text-center p-4">
                <h3 className="text-xl font-bold text-white mb-2">Glass Theme</h3>
                <p className="text-gray-200 text-sm">
                  With shimmer effect, strong intensity, and no glare
                </p>
              </div>
            </HoverCard3D>
            
            <HoverCard3D
              theme="enterprise"
              hoverEffect="lift"
              intensity="subtle"
              glareEnabled={true}
              glareOpacity={0.05}
              maxRotation={5}
              className="h-64"
            >
              <div className="flex flex-col items-center justify-center h-full text-center p-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Enterprise Theme</h3>
                <p className="text-gray-600 text-sm">
                  With lift effect, subtle intensity, and minimal rotation
                </p>
              </div>
            </HoverCard3D>
            
            <HoverCard3D
              theme="techDark"
              hoverEffect="none"
              intensity="medium"
              glareEnabled={true}
              rotateReverse={true}
              glareColor="255, 100, 0"
              className="h-64"
            >
              <div className="flex flex-col items-center justify-center h-full text-center p-4">
                <h3 className="text-xl font-bold text-white mb-2">Reversed Rotation</h3>
                <p className="text-gray-300 text-sm">
                  With orange glare and reverse rotation direction
                </p>
              </div>
            </HoverCard3D>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Interactive example showing different configuration options.'
      }
    }
  }
};