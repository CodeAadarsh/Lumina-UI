import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Header, HeaderProps, HeaderTheme } from './Header';
import { ThemeProvider } from '../../providers/ThemeProvider';

// Define the meta for the Header component
const meta: Meta<HeaderProps> = {
  title: 'UI/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Header component with responsive navigation for Lumina UI.',
      },
    },
  },
  argTypes: {
    theme: {
      control: 'select',
      options: ['enterprise', 'techDark', 'glass'],
      description: 'Theme style for the header',
      defaultValue: 'enterprise',
    },
    position: {
      control: 'select',
      options: ['static', 'sticky', 'fixed'],
      description: 'Positioning of the header',
      defaultValue: 'static',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the header',
      defaultValue: 'md',
    },
    width: {
      control: 'select',
      options: ['full', 'contained'],
      description: 'Width of the header content',
      defaultValue: 'full',
    },
    variant: {
      control: 'select',
      options: ['default', 'transparent', 'colored', 'elevated'],
      description: 'Visual variant of the header',
      defaultValue: 'default',
    },
    hideOnScroll: {
      control: 'boolean',
      description: 'Whether to hide header on scroll',
      defaultValue: false,
    },
    transparent: {
      control: 'boolean',
      description: 'Whether header should be transparent at top of page',
      defaultValue: false,
    },
    logo: {
      control: 'text',
      description: 'Logo image URL or component',
    },
  },
};

export default meta;
type Story = StoryObj<HeaderProps>;

// Mock logo component
const MockLogo: React.FC = () => (
  <div className="flex items-center">
    <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center text-white font-bold mr-2">
      L
    </div>
    <span className="font-bold text-lg">Lumina</span>
  </div>
);

// Template for basic header
const Template = (args: HeaderProps) => {
  const [activeItem, setActiveItem] = useState<string>('home');
  
  const handleNavItemClick = (item: string) => {
    setActiveItem(item);
  };
  
  return (
    <ThemeProvider theme={args.theme as HeaderTheme}>
      <div className="min-h-screen bg-background-primary">
        <Header {...args}>
          <Header.NavItem 
            active={activeItem === 'home'} 
            onClick={() => handleNavItemClick('home')} 
            href="#home"
          >
            Home
          </Header.NavItem>
          <Header.NavItem 
            active={activeItem === 'features'} 
            onClick={() => handleNavItemClick('features')} 
            href="#features"
          >
            Features
          </Header.NavItem>
          <Header.NavItem 
            active={activeItem === 'pricing'} 
            onClick={() => handleNavItemClick('pricing')} 
            href="#pricing"
          >
            Pricing
          </Header.NavItem>
          <Header.NavItem 
            active={activeItem === 'blog'} 
            onClick={() => handleNavItemClick('blog')}
            href="#blog"
          >
            Blog
          </Header.NavItem>
          <Header.NavItem 
            href="#contact"
            className="ml-4 bg-primary text-primary-foreground hover:bg-primary-dark"
          >
            Contact Us
          </Header.NavItem>
        </Header>
        
        {/* Content placeholder */}
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-4">Content Area</h1>
          <p className="mb-4">Scroll down to see header behavior.</p>
          <div className="h-[200vh]"></div>
        </div>
      </div>
    </ThemeProvider>
  );
};

// Basic example with default args
export const Default: Story = {
  render: Template,
  args: {
    theme: 'enterprise',
    position: 'static',
    size: 'md',
    width: 'full',
    variant: 'default',
    logo: <MockLogo />,
  },
};

// Sticky header example
export const StickyHeader: Story = {
  render: Template,
  args: {
    theme: 'enterprise',
    position: 'sticky',
    size: 'md',
    width: 'contained',
    variant: 'default',
    logo: <MockLogo />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Header that sticks to the top of the viewport when scrolling.',
      },
    },
  },
};

// Tech Dark theme example
export const TechDarkTheme: Story = {
  render: Template,
  args: {
    theme: 'techDark',
    position: 'sticky',
    size: 'md',
    width: 'full',
    variant: 'elevated',
    logo: <MockLogo />,
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: 'Tech Dark theme with elevated style for modern applications.',
      },
    },
  },
};

// Glass theme example
export const GlassTheme: Story = {
  render: Template,
  args: {
    theme: 'glass',
    position: 'sticky',
    size: 'md',
    width: 'contained',
    variant: 'default',
    logo: <MockLogo />,
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: 'Glass theme with blur effect for modern interfaces.',
      },
    },
  },
};

// Hide on scroll example
export const HideOnScroll: Story = {
  render: Template,
  args: {
    theme: 'enterprise',
    position: 'sticky',
    size: 'md',
    width: 'full',
    variant: 'default',
    hideOnScroll: true,
    logo: <MockLogo />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Header that hides when scrolling down and reappears when scrolling up.',
      },
    },
  },
};

// Transparent header example
export const TransparentHeader: StoryObj<HeaderProps> = {
  render: (args) => {
    const [activeItem, setActiveItem] = useState<string>('home');
    
    const handleNavItemClick = (item: string) => {
      setActiveItem(item);
    };
    
    return (
      <ThemeProvider theme={args.theme as HeaderTheme}>
        <div className="min-h-screen bg-background-primary">
          <div 
            className="h-[70vh] bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center" 
            style={{ backgroundImage: "url('/api/placeholder/1920/1080')", backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <Header {...args}>
              <Header.NavItem 
                active={activeItem === 'home'} 
                onClick={() => handleNavItemClick('home')} 
                href="#home"
              >
                Home
              </Header.NavItem>
              <Header.NavItem 
                active={activeItem === 'features'} 
                onClick={() => handleNavItemClick('features')} 
                href="#features"
              >
                Features
              </Header.NavItem>
              <Header.NavItem 
                active={activeItem === 'pricing'} 
                onClick={() => handleNavItemClick('pricing')} 
                href="#pricing"
              >
                Pricing
              </Header.NavItem>
              <Header.NavItem 
                active={activeItem === 'blog'} 
                onClick={() => handleNavItemClick('blog')}
                href="#blog"
              >
                Blog
              </Header.NavItem>
              <Header.NavItem 
                href="#contact"
                className="ml-4 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
              >
                Contact Us
              </Header.NavItem>
            </Header>
            
            <div className="text-center text-white px-4">
              <h1 className="text-5xl font-bold mb-4">Welcome to Lumina UI</h1>
              <p className="text-xl max-w-2xl mx-auto">
                A modern, themeable component library for React applications.
              </p>
            </div>
          </div>
          
          <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Content Area</h1>
            <p>Scroll up and down to see the header transition from transparent to solid.</p>
            <div className="h-[100vh]"></div>
          </div>
        </div>
      </ThemeProvider>
    );
  },
  args: {
    theme: 'glass',
    position: 'fixed',
    size: 'md',
    width: 'full',
    variant: 'default',
    transparent: true,
    transparentColor: 'white',
    logo: <div className="text-2xl font-bold text-white">Lumina</div>,
  },
  parameters: {
    docs: {
      description: {
        story: 'Transparent header that becomes solid on scroll, useful for landing pages with hero images.',
      },
    },
  },
};

// Navigation variants example
export const NavigationVariants: StoryObj = {
  render: () => {
    const [activeItem, setActiveItem] = useState<string>('home');
    
    const handleNavItemClick = (item: string) => {
      setActiveItem(item);
    };
    
    return (
      <div className="space-y-16 p-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Default Navigation</h2>
          <ThemeProvider theme="enterprise">
            <Header size="md" width="contained" className="border rounded-lg">
              <Header.NavItem 
                active={activeItem === 'home'} 
                onClick={() => handleNavItemClick('home')} 
              >
                Home
              </Header.NavItem>
              <Header.NavItem 
                active={activeItem === 'features'} 
                onClick={() => handleNavItemClick('features')}
              >
                Features
              </Header.NavItem>
              <Header.NavItem 
                active={activeItem === 'pricing'} 
                onClick={() => handleNavItemClick('pricing')}
              >
                Pricing
              </Header.NavItem>
              <Header.NavItem 
                className="ml-2 bg-primary text-primary-foreground hover:bg-primary-dark"
              >
                Get Started
              </Header.NavItem>
            </Header>
          </ThemeProvider>
        </div>
        
        <div className="bg-gradient-to-r from-purple-500/30 to-blue-500/30 p-8 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-white">Glass Theme Navigation</h2>
          <ThemeProvider theme="glass">
            <Header size="md" width="contained">
              <Header.NavItem 
                variant="pill"
                active={activeItem === 'home'} 
                onClick={() => handleNavItemClick('home')} 
              >
                Home
              </Header.NavItem>
              <Header.NavItem 
                variant="pill"
                active={activeItem === 'features'} 
                onClick={() => handleNavItemClick('features')}
              >
                Features
              </Header.NavItem>
              <Header.NavItem 
                variant="pill"
                active={activeItem === 'pricing'} 
                onClick={() => handleNavItemClick('pricing')}
              >
                Pricing
              </Header.NavItem>
              <Header.NavItem 
                className="ml-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
              >
                Get Started
              </Header.NavItem>
            </Header>
          </ThemeProvider>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Different navigation styles for different use cases.',
      },
    },
  },
};

// Full Featured Header Example
export const FullFeatured: StoryObj = {
  render: () => {
    const [activeItem, setActiveItem] = useState<string>('home');
    
    const handleNavItemClick = (item: string) => {
      setActiveItem(item);
    };
    
    return (
      <ThemeProvider theme="techDark">
        <div className="min-h-screen bg-background-primary">
          <Header 
            position="sticky" 
            size="md" 
            width="contained" 
            variant="elevated"
            logo={
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center text-white font-bold mr-2">
                  L
                </div>
                <span className="font-bold text-lg">Lumina</span>
              </div>
            }
          >
            <Header.NavItem 
              variant="subtle"
              active={activeItem === 'home'} 
              onClick={() => handleNavItemClick('home')} 
            >
              Home
            </Header.NavItem>
            
            <Header.NavItem 
              variant="subtle"
              active={activeItem === 'features'} 
              onClick={() => handleNavItemClick('features')}
            >
              Features
            </Header.NavItem>
            
            <Header.NavItem 
              variant="subtle"
              active={activeItem === 'docs'} 
              onClick={() => handleNavItemClick('docs')}
            >
              Documentation
            </Header.NavItem>
            
            <Header.NavItem 
              variant="subtle"
              active={activeItem === 'pricing'} 
              onClick={() => handleNavItemClick('pricing')}
            >
              Pricing
            </Header.NavItem>
            
            <Header.NavItem 
              variant="subtle"
              active={activeItem === 'blog'} 
              onClick={() => handleNavItemClick('blog')}
            >
              Blog
            </Header.NavItem>
            
            <div className="ml-4 md:ml-8 flex space-x-2">
              <Header.NavItem className="text-foreground-primary border border-border hover:bg-background-secondary">
                Sign In
              </Header.NavItem>
              <Header.NavItem className="bg-primary text-primary-foreground hover:bg-primary-dark">
                Sign Up
              </Header.NavItem>
            </div>
          </Header>
          
          {/* Hero Section */}
          <div className="py-16 px-8 max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
              Build modern UIs with Lumina
            </h1>
            <p className="text-xl text-foreground-secondary max-w-2xl mb-8">
              A complete design system with accessible components, multiple themes, and powerful customization options.
            </p>
            <div className="flex space-x-4">
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary-dark transition-colors">
                Get Started
              </button>
              <button className="px-6 py-3 border border-border bg-background-secondary rounded-md hover:bg-background-tertiary transition-colors">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: 'Full-featured header with advanced navigation, sign-in buttons, and mobile responsiveness.',
      },
    },
  },
};

// Responsive Mobile Showcase
export const ResponsiveMobile: StoryObj = {
  render: () => {
    return (
      <div className="bg-gray-100 p-4">
        <div className="max-w-sm mx-auto border border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white">
          <div className="text-center p-4 bg-gray-200 text-gray-700 font-medium">
            Mobile View (Resize browser window to see)
          </div>
          
          <ThemeProvider theme="enterprise">
            <Header 
              size="sm" 
              position="static" 
              width="full"
              logo={
                <div className="flex items-center">
                  <div className="h-6 w-6 rounded-md bg-primary flex items-center justify-center text-white font-bold mr-2">
                    L
                  </div>
                  <span className="font-bold text-base">Lumina</span>
                </div>
              }
            >
              <Header.NavItem>Home</Header.NavItem>
              <Header.NavItem>Products</Header.NavItem>
              <Header.NavItem>Pricing</Header.NavItem>
              <Header.NavItem>Contact</Header.NavItem>
              <Header.NavItem className="bg-primary text-primary-foreground hover:bg-primary-dark">
                Sign Up
              </Header.NavItem>
            </Header>
          </ThemeProvider>
          
          <div className="p-4 text-center text-gray-500">
            <p>Click the hamburger menu to see the mobile navigation</p>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Mobile responsive header with hamburger menu.',
      },
    },
  },
};