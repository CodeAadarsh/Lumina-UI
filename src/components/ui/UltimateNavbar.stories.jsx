import React from 'react';
import { UltimateNavbar } from './UltimateNavbar';
import { Home, User, Settings, Bell, Menu, Search, ShoppingCart, Heart, LogOut, Info, Bookmark, Mail, Layers, Globe, Calendar, PieChart, FileText, Users, HelpCircle, Star, Coffee } from 'lucide-react';

export default {
  title: 'Navigation/UltimateNavbar',
  component: UltimateNavbar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A highly customizable navbar component with multiple themes, animations, and styles.'
      },
    }
  },
  argTypes: {
    theme: {
      control: 'select',
      options: ['enterprise', 'techDark', 'glass', 'neumorphic'],
      description: 'The visual theme of the navbar',
      table: {
        category: 'Appearance',
        type: { summary: 'string' },
        defaultValue: { summary: 'enterprise' },
      }
    },
    display: {
      control: 'select',
      options: ['default', 'iconsOnly', 'textOnly'],
      description: 'Display mode of navbar items',
      table: {
        category: 'Appearance',
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      }
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Layout orientation of the navbar',
      table: {
        category: 'Layout',
        type: { summary: 'string' },
        defaultValue: { summary: 'horizontal' },
      }
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Size of navbar items',
      table: {
        category: 'Appearance',
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      }
    },
    alignment: {
      control: 'select',
      options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
      description: 'Alignment of navbar items',
      table: {
        category: 'Layout',
        type: { summary: 'string' },
        defaultValue: { summary: 'start' },
      }
    },
    padding: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg'],
      description: 'Padding around navbar',
      table: {
        category: 'Layout',
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      }
    },
    border: {
      control: 'select',
      options: ['none', 'bottom', 'top', 'left', 'right', 'all'],
      description: 'Border style of navbar',
      table: {
        category: 'Appearance',
        type: { summary: 'string' },
        defaultValue: { summary: 'none' },
      }
    },
    shadow: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'inner'],
      description: 'Shadow style of navbar',
      table: {
        category: 'Appearance',
        type: { summary: 'string' },
        defaultValue: { summary: 'none' },
      }
    },
    rounded: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', 'full'],
      description: 'Border radius of navbar',
      table: {
        category: 'Appearance',
        type: { summary: 'string' },
        defaultValue: { summary: 'lg' },
      }
    },
    animation: {
      control: 'select',
      options: ['none', 'slide', 'fade', 'scale', 'bounce', 'elastic', 'spring'],
      description: 'Animation effect for navbar',
      table: {
        category: 'Animation',
        type: { summary: 'string' },
        defaultValue: { summary: 'fade' },
      }
    },
    visualStyle: {
      control: 'select',
      options: [
        'default', 'floating', 'pill', 'minimal', 'outlined', 'gradient', 
        'glowing', 'neumorphicFlat', 'neumorphicPressed', 'neumorphicConvex',
        'glassmorphism', 'frosted'
      ],
      description: 'Visual style variant of navbar',
      table: {
        category: 'Appearance',
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      }
    },
    density: {
      control: 'select',
      options: ['default', 'compact', 'comfortable'],
      description: 'Spacing density between navbar items',
      table: {
        category: 'Layout',
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      }
    },
    dividers: {
      control: 'boolean',
      description: 'Show dividers between navbar items',
      table: {
        category: 'Appearance',
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      }
    },
    responsive: {
      control: 'boolean',
      description: 'Enable responsive behavior',
      table: {
        category: 'Behavior',
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      }
    },
    collapseBreakpoint: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Breakpoint for responsive collapse',
      table: {
        category: 'Behavior',
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      }
    },
    collapsible: {
      control: 'boolean',
      description: 'Enable manual collapse functionality',
      table: {
        category: 'Behavior',
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      }
    },
    tooltipsEnabled: {
      control: 'boolean',
      description: 'Enable tooltips for navbar items',
      table: {
        category: 'Behavior',
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      }
    },
    themeToggle: {
      control: 'boolean',
      description: 'Show theme toggle button',
      table: {
        category: 'Features',
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      }
    },
    glowOnHover: {
      control: 'boolean',
      description: 'Apply glow effect on hover',
      table: {
        category: 'Animation',
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      }
    },
    sticky: {
      control: 'boolean',
      description: 'Make navbar sticky',
      table: {
        category: 'Behavior',
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      }
    },
    backdrop: {
      control: 'boolean',
      description: 'Apply backdrop blur effect',
      table: {
        category: 'Appearance',
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      }
    }
  },
  decorators: [
    (Story, context) => {
      // Apply different background colors based on theme
      const theme = context.args.theme || 'enterprise';
      const bgColors = {
        enterprise: 'bg-gray-50',
        techDark: 'bg-gray-900',
        glass: 'bg-gradient-to-br from-purple-600 to-blue-700',
        neumorphic: 'bg-neutral-100'
      };
      
      return (
        <div className={`${bgColors[theme]} min-h-screen p-6`}>
          <Story />
        </div>
      );
    },
  ],
};

// Base story with default props - Enterprise theme
export const Enterprise = {
  args: {
    theme: 'enterprise',
    display: 'default',
    orientation: 'horizontal',
    size: 'md',
    alignment: 'start',
    padding: 'md',
    border: 'bottom',
    shadow: 'sm',
    rounded: 'none',
    animation: 'fade',
    visualStyle: 'default',
    density: 'default',
    dividers: false,
    responsive: true,
    collapsible: false,
    tooltipsEnabled: false,
    themeToggle: false,
    glowOnHover: false,
    sticky: false,
    backdrop: false,
  },
  render: (args) => (
    <UltimateNavbar {...args}>
      <UltimateNavbar.Logo 
        src="https://via.placeholder.com/32" 
        alt="Logo" 
        text="Enterprise UI" 
      />
      
      <UltimateNavbar.Item icon={<Home size={18} />} active>Home</UltimateNavbar.Item>
      <UltimateNavbar.Item icon={<PieChart size={18} />}>Dashboard</UltimateNavbar.Item>
      <UltimateNavbar.Item icon={<FileText size={18} />}>Reports</UltimateNavbar.Item>
      <UltimateNavbar.Item icon={<Users size={18} />}>Team</UltimateNavbar.Item>
      
      <div className="ml-auto flex items-center">
        <UltimateNavbar.Search placeholder="Search..." />
        
        <UltimateNavbar.Divider orientation="vertical" />
        
        <UltimateNavbar.Item icon={<Bell size={18} />} badge badgeContent="5" badgeColor="primary">
          Notifications
        </UltimateNavbar.Item>
        
        <UltimateNavbar.Item icon={<User size={18} />}>
          Profile
        </UltimateNavbar.Item>
      </div>
    </UltimateNavbar>
  ),
};

// Tech Dark theme
export const TechDark = {
  args: {
    theme: 'techDark',
    display: 'default',
    orientation: 'horizontal',
    size: 'md',
    alignment: 'start',
    padding: 'md',
    border: 'none',
    shadow: 'md',
    rounded: 'md',
    animation: 'fade',
    visualStyle: 'gradient',
    density: 'default',
    dividers: false,
    responsive: true,
    collapsible: false,
    tooltipsEnabled: false,
    themeToggle: false,
    glowOnHover: true,
    sticky: false,
    backdrop: false,
  },
  render: (args) => (
    <UltimateNavbar {...args}>
      <UltimateNavbar.Logo 
        src="https://via.placeholder.com/32" 
        alt="Logo" 
        text="TechDark" 
        glow
      />
      
      <UltimateNavbar.Item icon={<Home size={18} />} variant="glassy" active animation="elastic" hoverEffect="glow">
        Home
      </UltimateNavbar.Item>
      <UltimateNavbar.Item icon={<Code size={18} />} variant="glassy" animation="elastic" hoverEffect="glow">
        Dev Tools
      </UltimateNavbar.Item>
      <UltimateNavbar.Item icon={<Globe size={18} />} variant="glassy" animation="elastic" hoverEffect="glow">
        Network
      </UltimateNavbar.Item>
      <UltimateNavbar.Item icon={<Layers size={18} />} variant="glassy" animation="elastic" hoverEffect="glow">
        Systems
      </UltimateNavbar.Item>
      
      <div className="ml-auto flex items-center gap-2">
        <UltimateNavbar.Search variant="outlined" placeholder="Search..." />
        
        <UltimateNavbar.Item icon={<Bell size={18} />} variant="glassy" animation="elastic" hoverEffect="glow" badge badgeContent="3" badgeColor="primary">
          Alerts
        </UltimateNavbar.Item>
        
        <UltimateNavbar.Item icon={<User size={18} />} variant="glassy" animation="elastic" hoverEffect="glow">
          Profile
        </UltimateNavbar.Item>
      </div>
    </UltimateNavbar>
  ),
};

// Glass theme
export const Glass = {
  args: {
    theme: 'glass',
    display: 'default',
    orientation: 'horizontal',
    size: 'md',
    alignment: 'start', 
    padding: 'md',
    border: 'none',
    shadow: 'none',
    rounded: 'lg',
    animation: 'fade',
    visualStyle: 'glassmorphism',
    density: 'default',
    dividers: false,
    responsive: true,
    collapsible: false,
    tooltipsEnabled: false,
    themeToggle: false,
    glowOnHover: true,
    sticky: true,
    backdrop: true,
  },
  render: (args) => (
    <UltimateNavbar {...args}>
      <UltimateNavbar.Logo 
        src="https://via.placeholder.com/32" 
        alt="Logo" 
        text="Glass UI" 
        glow
        textStyle="gradient"
      />
      
      <UltimateNavbar.Item icon={<Home size={18} />} variant="glassy" active animation="spring" hoverEffect="glow">
        Home
      </UltimateNavbar.Item>
      <UltimateNavbar.Item icon={<Star size={18} />} variant="glassy" animation="spring" hoverEffect="glow">
        Features
      </UltimateNavbar.Item>
      <UltimateNavbar.Item icon={<Users size={18} />} variant="glassy" animation="spring" hoverEffect="glow">
        Team
      </UltimateNavbar.Item>
      <UltimateNavbar.Item icon={<Calendar size={18} />} variant="glassy" animation="spring" hoverEffect="glow">
        Events
      </UltimateNavbar.Item>
      
      <div className="ml-auto flex items-center gap-2">
        <UltimateNavbar.Search variant="glassy" placeholder="Search..." />
        
        <UltimateNavbar.Item icon={<Bell size={18} />} variant="glassy" animation="bounce" hoverEffect="glow" badge badgeContent="2" badgeColor="primary">
          Notifications
        </UltimateNavbar.Item>
        
        <UltimateNavbar.Item icon={<User size={18} />} variant="glassy" animation="spring" hoverEffect="glow">
          Profile
        </UltimateNavbar.Item>
        
        <UltimateNavbar.Divider orientation="vertical" gradient animate />
        
        <UltimateNavbar.Item icon={<LogOut size={18} />} variant="gradient" hoverEffect="lift">
          Sign Out
        </UltimateNavbar.Item>
      </div>
    </UltimateNavbar>
  ),
};

// Neumorphic theme
export const Neumorphic = {
  args: {
    theme: 'neumorphic',
    display: 'default',
    orientation: 'horizontal',
    size: 'md',
    alignment: 'start',
    padding: 'md',
    border: 'none',
    shadow: 'none',
    rounded: 'lg',
    animation: 'elastic',
    visualStyle: 'neumorphicFlat',
    density: 'default',
    dividers: false,
    responsive: true,
    collapsible: false,
    tooltipsEnabled: false,
    themeToggle: false,
    glowOnHover: false,
    sticky: false,
    backdrop: false,
  },
  render: (args) => (
    <UltimateNavbar {...args}>
      <UltimateNavbar.Logo 
        src="https://via.placeholder.com/32" 
        alt="Logo" 
        text="Neumorphic UI" 
        glow
      />
      
      <UltimateNavbar.Divider orientation="vertical" />
      
      <UltimateNavbar.Item icon={<Home size={18} />} variant="neumorphic" active animation="elastic" hoverEffect="glow">
        Home
      </UltimateNavbar.Item>
      <UltimateNavbar.Item icon={<PieChart size={18} />} variant="neumorphic" animation="elastic" hoverEffect="glow">
        Dashboard
      </UltimateNavbar.Item>
      <UltimateNavbar.Item icon={<Calendar size={18} />} variant="neumorphic" animation="elastic" hoverEffect="glow">
        Calendar
      </UltimateNavbar.Item>
      <UltimateNavbar.Item icon={<Mail size={18} />} variant="neumorphic" animation="elastic" hoverEffect="glow" badge badgeContent="9+" badgeColor="primary">
        Messages
      </UltimateNavbar.Item>
      
      <div className="ml-auto flex items-center gap-2">
        <UltimateNavbar.Search />
        
        <UltimateNavbar.Item icon={<Bell size={18} />} variant="neumorphic" animation="elastic" hoverEffect="glow" badge badgeContent="3" badgeColor="primary">
          Notifications
        </UltimateNavbar.Item>
        
        <UltimateNavbar.Item icon={<User size={18} />} variant="neumorphic" animation="elastic" hoverEffect="glow">
          Profile
        </UltimateNavbar.Item>
        
        <UltimateNavbar.Item icon={<Settings size={18} />} variant="neumorphic" animation="elastic" hoverEffect="glow">
          Settings
        </UltimateNavbar.Item>
      </div>
    </UltimateNavbar>
  ),
};

// Show Icons Only mode
export const IconsOnly = {
  args: {
    theme: 'neumorphic',
    display: 'iconsOnly',
    orientation: 'horizontal',
    size: 'md',
    alignment: 'start',
    padding: 'md',
    border: 'none',
    shadow: 'none',
    rounded: 'lg',
    animation: 'elastic',
    visualStyle: 'neumorphicFlat',
    density: 'default',
    dividers: true,
    responsive: false,
    collapsible: false,
    tooltipsEnabled: true,
    themeToggle: false,
    glowOnHover: true,
    sticky: false,
    backdrop: false,
  },
  render: (args) => (
    <UltimateNavbar {...args}>
      <UltimateNavbar.Logo 
        src="https://via.placeholder.com/32" 
        alt="Logo" 
      />
      
      <UltimateNavbar.Item icon={<Home size={18} />} variant="neumorphic" active animation="elastic" hoverEffect="glow" tooltip="Home">
        Home
      </UltimateNavbar.Item>
      <UltimateNavbar.Item icon={<PieChart size={18} />} variant="neumorphic" animation="elastic" hoverEffect="glow" tooltip="Dashboard">
        Dashboard
      </UltimateNavbar.Item>
      <UltimateNavbar.Item icon={<Calendar size={18} />} variant="neumorphic" animation="elastic" hoverEffect="glow" tooltip="Calendar">
        Calendar
      </UltimateNavbar.Item>
      <UltimateNavbar.Item icon={<Mail size={18} />} variant="neumorphic" animation="elastic" hoverEffect="glow" badge badgeContent="9+" badgeColor="primary" tooltip="Messages">
        Messages
      </UltimateNavbar.Item>
      
      <div className="ml-auto flex items-center gap-2">
        <UltimateNavbar.Item icon={<Search size={18} />} variant="neumorphic" animation="elastic" hoverEffect="glow" tooltip="Search">
          Search
        </UltimateNavbar.Item>
        <UltimateNavbar.Item icon={<Bell size={18} />} variant="neumorphic" animation="elastic" hoverEffect="glow" badge badgeContent="3" badgeColor="primary" tooltip="Notifications">
          Notifications
        </UltimateNavbar.Item>
        <UltimateNavbar.Item icon={<User size={18} />} variant="neumorphic" animation="elastic" hoverEffect="glow" tooltip="Profile">
          Profile
        </UltimateNavbar.Item>
        <UltimateNavbar.Item icon={<Settings size={18} />} variant="neumorphic" animation="elastic" hoverEffect="glow" tooltip="Settings">
          Settings
        </UltimateNavbar.Item>
      </div>
    </UltimateNavbar>
  ),
};

// Vertical Orientation
export const VerticalNavbar = {
  args: {
    theme: 'neumorphic',
    display: 'default',
    orientation: 'vertical',
    size: 'md',
    alignment: 'start',
    padding: 'md',
    border: 'none',
    shadow: 'none',
    rounded: 'lg',
    animation: 'elastic',
    visualStyle: 'neumorphicFlat',
    density: 'default',
    dividers: false,
    responsive: false,
    collapsible: false,
    tooltipsEnabled: false,
    themeToggle: false,
    glowOnHover: true,
    sticky: false,
    backdrop: false,
  },
  render: (args) => (
    <div className="flex h-screen">
      <UltimateNavbar {...args} className="h-full">
        <UltimateNavbar.Logo 
          src="https://via.placeholder.com/32" 
          alt="Logo" 
          text="Side Nav" 
          glow
        />
        
        <UltimateNavbar.Divider orientation="horizontal" glow />
        
        <UltimateNavbar.Section title="Main Menu" icon={<Home size={16} />} collapsible={false}>
          <UltimateNavbar.Item icon={<Home size={18} />} variant="neumorphic" active animation="elastic" hoverEffect="glow">
            Home
          </UltimateNavbar.Item>
          <UltimateNavbar.Item icon={<PieChart size={18} />} variant="neumorphic" animation="elastic" hoverEffect="glow">
            Dashboard
          </UltimateNavbar.Item>
          <UltimateNavbar.Item icon={<FileText size={18} />} variant="neumorphic" animation="elastic" hoverEffect="glow">
            Reports
          </UltimateNavbar.Item>
          <UltimateNavbar.Item icon={<Calendar size={18} />} variant="neumorphic" animation="elastic" hoverEffect="glow">
            Calendar
          </UltimateNavbar.Item>
        </UltimateNavbar.Section>
        
        <UltimateNavbar.Divider orientation="horizontal" glow />
        
        <UltimateNavbar.Section title="Communication" icon={<Mail size={16} />} collapsible defaultCollapsed={false}>
          <UltimateNavbar.Item icon={<Mail size={18} />} variant="neumorphic" animation="elastic" hoverEffect="glow" badge badgeContent="9+" badgeColor="primary">
            Messages
          </UltimateNavbar.Item>
          <UltimateNavbar.Item icon={<Users size={18} />} variant="neumorphic" animation="elastic" hoverEffect="glow">
            Team Chat
          </UltimateNavbar.Item>
          <UltimateNavbar.Item icon={<Bell size={18} />} variant="neumorphic" animation="elastic" hoverEffect="glow" badge badgeContent="3" badgeColor="primary">
            Notifications
          </UltimateNavbar.Item>
        </UltimateNavbar.Section>
        
        <UltimateNavbar.Divider orientation="horizontal" glow />
        
        <UltimateNavbar.Section title="User" icon={<User size={16} />} collapsible defaultCollapsed={true}>
          <UltimateNavbar.Item icon={<User size={18} />} variant="neumorphic" animation="elastic" hoverEffect="glow">
            Profile
          </UltimateNavbar.Item>
          <UltimateNavbar.Item icon={<Settings size={18} />} variant="neumorphic" animation="elastic" hoverEffect="glow">
            Settings
          </UltimateNavbar.Item>
          <UltimateNavbar.Item icon={<HelpCircle size={18} />} variant="neumorphic" animation="elastic" hoverEffect="glow">
            Help
          </UltimateNavbar.Item>
        </UltimateNavbar.Section>
        
        <div className="mt-auto">
          <UltimateNavbar.Divider orientation="horizontal" glow />
          <UltimateNavbar.Item icon={<LogOut size={18} />} variant="neumorphic" hoverEffect="glow">
            Log Out
          </UltimateNavbar.Item>
        </div>
      </UltimateNavbar>
      
      <div className="flex-1 p-6 bg-gray-50">
        <h1 className="text-2xl font-bold mb-4">Main Content Area</h1>
        <p className="text-gray-600">This is where your main content would go. The vertical navbar provides navigation while this area displays the relevant content.</p>
      </div>
    </div>
  ),
};

// Interactive Demo with Theme Toggle
export const InteractiveDemo = {
  args: {
    theme: 'enterprise',
    display: 'default',
    orientation: 'horizontal',
    size: 'md',
    alignment: 'between',
    padding: 'md',
    border: 'none',
    shadow: 'md',
    rounded: 'lg',
    animation: 'elastic',
    visualStyle: 'floating',
    density: 'default',
    dividers: false,
    responsive: true,
    collapseBreakpoint: 'lg',
    collapsible: false,
    tooltipsEnabled: false,
    themeToggle: true,
    glowOnHover: true,
    sticky: true,
    backdrop: true,
  },
  render: (args) => (
    <div className="space-y-4">
      <UltimateNavbar {...args}>
        <div className="flex items-center">
          <UltimateNavbar.Logo 
            src="https://via.placeholder.com/32" 
            alt="Logo" 
            text="Ultimate UI" 
            glow
            animate
          />
        </div>
        
        <div className="flex items-center gap-2">
          <UltimateNavbar.Item icon={<Home size={18} />} active animation="elastic" hoverEffect="glow">
            Home
          </UltimateNavbar.Item>
          <UltimateNavbar.Item icon={<Layers size={18} />} animation="elastic" hoverEffect="glow">
            Dashboard
          </UltimateNavbar.Item>
          <UltimateNavbar.Item icon={<Globe size={18} />} animation="elastic" hoverEffect="glow">
            Explore
          </UltimateNavbar.Item>
          <UltimateNavbar.Item icon={<Coffee size={18} />} animation="elastic" hoverEffect="glow">
            Relax
          </UltimateNavbar.Item>
        </div>
        
        <div className="flex items-center gap-2">
          <UltimateNavbar.Search placeholder="Search..." />
        </div>
        
        <div className="flex items-center gap-2">
          <UltimateNavbar.Item icon={<ShoppingCart size={18} />} badge badgeContent="2" badgeColor="primary" animation="bounce">
            Cart
          </UltimateNavbar.Item>
          <UltimateNavbar.Item icon={<Heart size={18} />} animation="pulse">
            Favorites
          </UltimateNavbar.Item>
          <UltimateNavbar.Item icon={<Bell size={18} />} badge badgeContent="3" badgeColor="danger" animation="wobble">
            Alerts
          </UltimateNavbar.Item>
          <UltimateNavbar.Item icon={<User size={18} />} animation="elastic" hoverEffect="glow">
            Account
          </UltimateNavbar.Item>
        </div>
      </UltimateNavbar>
      
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Interactive Navbar Demo</h2>
        <p className="mb-4">
          This demo showcases an interactive navbar with theme toggling capability. Click the theme toggle button in the navbar to cycle through different themes.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>The navbar is sticky and will stay at the top when scrolling</li>
          <li>Theme toggle button allows switching between themes</li>
          <li>Responsive design adapts to different screen sizes</li>
          <li>Items feature advanced animations on hover</li>
          <li>Backdrop blur effect is applied when scrolling</li>
        </ul>
      </div>
    </div>
  ),
};

// Mobile Responsive Demo
export const MobileResponsive = {
  args: {
    theme: 'techDark',
    display: 'default',
    orientation: 'horizontal',
    size: 'md',
    alignment: 'between',
    padding: 'md',
    border: 'none',
    shadow: 'lg',
    rounded: 'lg',
    animation: 'fade',
    visualStyle: 'gradient',
    density: 'default',
    dividers: false,
    responsive: true,
    collapseBreakpoint: 'md',
    collapsible: true,
    tooltipsEnabled: false,
    themeToggle: false,
    glowOnHover: true,
    sticky: true,
    truesticky: true,
    backdrop: true,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  render: (args) => (
    <div className="space-y-4">
      <UltimateNavbar {...args}>
        <div className="flex items-center">
          <UltimateNavbar.Logo 
            src="https://via.placeholder.com/32" 
            alt="Logo" 
            text="Mobile UI" 
            glow
          />
        </div>
        
        <div className="flex flex-col md:flex-row md:items-center gap-2">
          <UltimateNavbar.Item icon={<Home size={18} />} variant="glassy" active animation="elastic" hoverEffect="glow">
            Home
          </UltimateNavbar.Item>
          <UltimateNavbar.Item icon={<Layers size={18} />} variant="glassy" animation="elastic" hoverEffect="glow">
            Dashboard
          </UltimateNavbar.Item>
          <UltimateNavbar.Item icon={<Bell size={18} />} variant="glassy" animation="elastic" hoverEffect="glow" badge badgeContent="3" badgeColor="primary">
            Notifications
          </UltimateNavbar.Item>
          <UltimateNavbar.Item icon={<User size={18} />} variant="glassy" animation="elastic" hoverEffect="glow">
            Profile
          </UltimateNavbar.Item>
          <UltimateNavbar.Item icon={<Settings size={18} />} variant="glassy" animation="elastic" hoverEffect="glow">
            Settings
          </UltimateNavbar.Item>
        </div>
      </UltimateNavbar>
      
      <div className="p-4 bg-gray-800 rounded-lg border border-gray-700 shadow-lg">
        <h2 className="text-xl font-bold mb-2 text-gray-200">Mobile Responsive Demo</h2>
        <p className="text-gray-400">
          This demo shows the navbar's mobile responsive behavior. The navbar collapses into a hamburger menu on smaller screens.
        </p>
        <p className="text-gray-400 mt-4">
          Try resizing your screen or view this in different device sizes to see how the navbar adapts.
        </p>
      </div>
    </div>
  ),
};

// Pill Style Variant
export const PillStyle = {
  args: {
    theme: 'neumorphic',
    display: 'default',
    orientation: 'horizontal',
    size: 'md',
    alignment: 'start',
    padding: 'md',
    border: 'none',
    shadow: 'none',
    rounded: 'full',
    animation: 'spring',
    visualStyle: 'pill',
    density: 'default',
    dividers: false,
    responsive: false,
    collapsible: false,
    tooltipsEnabled: false,
    themeToggle: false,
    glowOnHover: true,
    sticky: false,
    backdrop: false,
  },
  render: (args) => (
    <UltimateNavbar {...args}>
      <UltimateNavbar.Logo 
        src="https://via.placeholder.com/32" 
        alt="Logo" 
        text="Pill UI" 
        glow
      />
      
      <UltimateNavbar.Divider orientation="vertical" glow />
      
      <div className="flex items-center gap-3">
        <UltimateNavbar.Item icon={<Home size={18} />} variant="pill" active rounded="full" animation="spring" hoverEffect="glow">
          Home
        </UltimateNavbar.Item>
        <UltimateNavbar.Item icon={<User size={18} />} variant="pill" rounded="full" animation="spring" hoverEffect="glow">
          Profile
        </UltimateNavbar.Item>
        <UltimateNavbar.Item icon={<Bell size={18} />} variant="pill" rounded="full" animation="spring" hoverEffect="glow" badge badgeContent="3" badgeColor="primary">
          Notifications
        </UltimateNavbar.Item>
        <UltimateNavbar.Item icon={<Settings size={18} />} variant="pill" rounded="full" animation="spring" hoverEffect="glow">
          Settings
        </UltimateNavbar.Item>
      </div>
      
      <div className="ml-auto">
        <UltimateNavbar.Search rounded="full" />
      </div>
    </UltimateNavbar>
  ),
};

// Glassmorphism Style
export const Glassmorphism = {
  args: {
    theme: 'glass',
    display: 'default',
    orientation: 'horizontal',
    size: 'md',
    alignment: 'start', 
    padding: 'md',
    border: 'none',
    shadow: 'none',
    rounded: 'xl',
    animation: 'fade',
    visualStyle: 'glassmorphism',
    density: 'default',
    dividers: true,
    responsive: false,
    collapsible: false,
    tooltipsEnabled: false,
    themeToggle: false,
    glowOnHover: true,
    sticky: false,
    backdrop: true,
  },
  render: (args) => (
    <UltimateNavbar {...args}>
      <UltimateNavbar.Logo 
        src="https://via.placeholder.com/32" 
        alt="Logo" 
        text="Glass UI" 
        glow
        textStyle="gradient"
      />
      
      <UltimateNavbar.Item icon={<Home size={18} />} variant="glassy" active hoverEffect="glow">
        Home
      </UltimateNavbar.Item>
      <UltimateNavbar.Item icon={<Star size={18} />} variant="glassy" hoverEffect="glow">
        Featured
      </UltimateNavbar.Item>
      <UltimateNavbar.Item icon={<Users size={18} />} variant="glassy" hoverEffect="glow">
        Community
      </UltimateNavbar.Item>
      <UltimateNavbar.Item icon={<Globe size={18} />} variant="glassy" hoverEffect="glow">
        Explore
      </UltimateNavbar.Item>
      
      <div className="ml-auto flex items-center gap-2">
        <UltimateNavbar.Search variant="glassy" placeholder="Search..." />
        
        <UltimateNavbar.Item icon={<Bell size={18} />} variant="glassy" hoverEffect="glow" badge badgeContent="2" badgeColor="primary">
          Notifications
        </UltimateNavbar.Item>
        
        <UltimateNavbar.Item icon={<User size={18} />} variant="glassy" hoverEffect="glow">
          Profile
        </UltimateNavbar.Item>
      </div>
    </UltimateNavbar>
  ),
};

// Animation Showcase
export const AnimationShowcase = {
  args: {
    theme: 'techDark',
    display: 'default',
    orientation: 'horizontal',
    size: 'md',
    alignment: 'center',
    padding: 'md',
    border: 'none',
    shadow: 'md',
    rounded: 'lg',
    animation: 'none',
    visualStyle: 'floating',
    density: 'default',
    dividers: false,
    responsive: false,
    collapsible: false,
    tooltipsEnabled: true,
    themeToggle: false,
    glowOnHover: true,
    sticky: false,
    backdrop: false,
  },
  render: (args) => (
    <div className="space-y-8">
      <UltimateNavbar {...args}>
        <UltimateNavbar.Logo 
          src="https://via.placeholder.com/32" 
          alt="Logo" 
          text="Animation Demo" 
          glow
        />
      </UltimateNavbar>
      
      {/* Animation examples */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-white font-medium mb-3">Elastic Animation</h3>
          <div className="flex gap-2">
            <UltimateNavbar.Item icon={<Home size={18} />} variant="glassy" theme="techDark" animation="elastic" hoverEffect="glow">
              Home
            </UltimateNavbar.Item>
            <UltimateNavbar.Item icon={<User size={18} />} variant="glassy" theme="techDark" animation="elastic" hoverEffect="glow">
              Profile
            </UltimateNavbar.Item>
          </div>
        </div>
        
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-white font-medium mb-3">Bounce Animation</h3>
          <div className="flex gap-2">
            <UltimateNavbar.Item icon={<Bell size={18} />} variant="glassy" theme="techDark" animation="bounce" hoverEffect="glow">
              Alerts
            </UltimateNavbar.Item>
            <UltimateNavbar.Item icon={<Star size={18} />} variant="glassy" theme="techDark" animation="bounce" hoverEffect="glow">
              Favorites
            </UltimateNavbar.Item>
          </div>
        </div>
        
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-white font-medium mb-3">Wobble Animation</h3>
          <div className="flex gap-2">
            <UltimateNavbar.Item icon={<Mail size={18} />} variant="glassy" theme="techDark" animation="wobble" hoverEffect="glow">
              Messages
            </UltimateNavbar.Item>
            <UltimateNavbar.Item icon={<ShoppingCart size={18} />} variant="glassy" theme="techDark" animation="wobble" hoverEffect="glow">
              Cart
            </UltimateNavbar.Item>
          </div>
        </div>
        
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-white font-medium mb-3">Spring Animation</h3>
          <div className="flex gap-2">
            <UltimateNavbar.Item icon={<Calendar size={18} />} variant="glassy" theme="techDark" animation="spring" hoverEffect="glow">
              Calendar
            </UltimateNavbar.Item>
            <UltimateNavbar.Item icon={<Globe size={18} />} variant="glassy" theme="techDark" animation="spring" hoverEffect="glow">
              Explore
            </UltimateNavbar.Item>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-800 p-4 rounded-lg">
        <h3 className="text-white font-medium mb-3">Hover Effects</h3>
        <div className="flex flex-wrap gap-4">
          <UltimateNavbar.Item theme="techDark" variant="filled" hoverEffect="glow">Glow Effect</UltimateNavbar.Item>
          <UltimateNavbar.Item theme="techDark" variant="filled" hoverEffect="grow">Grow Effect</UltimateNavbar.Item>
          <UltimateNavbar.Item theme="techDark" variant="filled" hoverEffect="shrink">Shrink Effect</UltimateNavbar.Item>
          <UltimateNavbar.Item theme="techDark" variant="filled" hoverEffect="lift">Lift Effect</UltimateNavbar.Item>
          <UltimateNavbar.Item theme="techDark" variant="filled" hoverEffect="slide">Slide Effect</UltimateNavbar.Item>
          <UltimateNavbar.Item theme="techDark" variant="filled" hoverEffect="tilt">Tilt Effect</UltimateNavbar.Item>
        </div>
      </div>
    </div>
  ),
};

// Combination Example (Marketing Site)
export const MarketingSite = {
  args: {
    theme: 'enterprise',
    display: 'default',
    orientation: 'horizontal',
    size: 'md',
    alignment: 'between',
    padding: 'md',
    border: 'none',
    shadow: 'lg',
    rounded: 'none',
    animation: 'fade',
    visualStyle: 'floating',
    density: 'default',
    dividers: false,
    responsive: true,
    collapseBreakpoint: 'lg',
    collapsible: true,
    tooltipsEnabled: false,
    themeToggle: false,
    glowOnHover: true,
    sticky: true,
    backdrop: false,
  },
  render: (args) => (
    <div className="space-y-4">
      <UltimateNavbar {...args}>
        <div className="flex items-center">
          <UltimateNavbar.Logo 
            src="https://via.placeholder.com/32" 
            alt="Logo" 
            text="CompanyName" 
            glow
          />
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <UltimateNavbar.Item variant="text" active hoverEffect="underline">
            Home
          </UltimateNavbar.Item>
          <UltimateNavbar.Item variant="text" hoverEffect="underline">
            Products
          </UltimateNavbar.Item>
          <UltimateNavbar.Item variant="text" hoverEffect="underline">
            Solutions
          </UltimateNavbar.Item>
          <UltimateNavbar.Item variant="text" hoverEffect="underline">
            Pricing
          </UltimateNavbar.Item>
          <UltimateNavbar.Item variant="text" hoverEffect="underline">
            About Us
          </UltimateNavbar.Item>
          <UltimateNavbar.Item variant="text" hoverEffect="underline">
            Contact
          </UltimateNavbar.Item>
        </div>
        
        <div className="flex items-center gap-2">
          <UltimateNavbar.Item variant="outlined" hoverEffect="glow" className="hidden md:flex">
            Sign In
          </UltimateNavbar.Item>
          <UltimateNavbar.Item variant="filled" hoverEffect="glow" animation="elastic">
            Get Started
          </UltimateNavbar.Item>
        </div>
      </UltimateNavbar>
      
      <div className="h-64 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center p-8 rounded-lg">
        <div className="text-center text-white">
          <h1 className="text-3xl font-bold mb-2">Marketing Site Example</h1>
          <p className="text-xl opacity-90">This is how the navbar would look on a typical marketing site.</p>
        </div>
      </div>
    </div>
  ),
};

// Dashboard Example
export const DashboardLayout = {
  args: {
    theme: 'techDark',
    display: 'default',
    orientation: 'vertical',
    size: 'md',
    alignment: 'start',
    padding: 'md',
    border: 'none',
    shadow: 'md',
    rounded: 'none',
    animation: 'fade',
    visualStyle: 'default',
    density: 'default',
    dividers: true,
    responsive: false,
    collapsible: false,
    tooltipsEnabled: false,
    themeToggle: false,
    glowOnHover: false,
    sticky: false,
    backdrop: false,
  },
  render: (args) => (
    <div className="flex h-screen">
      <UltimateNavbar {...args} className="h-full w-64">
        <UltimateNavbar.Logo 
          src="https://via.placeholder.com/32" 
          alt="Logo" 
          text="Admin Panel" 
        />
        
        <UltimateNavbar.Section title="Dashboard" icon={<Home size={16} />} collapsible={false}>
          <UltimateNavbar.Item icon={<PieChart size={18} />} active>
            Analytics
          </UltimateNavbar.Item>
          <UltimateNavbar.Item icon={<Globe size={18} />}>
            Traffic
          </UltimateNavbar.Item>
          <UltimateNavbar.Item icon={<Users size={18} />}>
            Users
          </UltimateNavbar.Item>
        </UltimateNavbar.Section>
        
        <UltimateNavbar.Section title="Content" icon={<FileText size={16} />} collapsible defaultCollapsed={false}>
          <UltimateNavbar.Item icon={<FileText size={18} />}>
            Pages
          </UltimateNavbar.Item>
          <UltimateNavbar.Item icon={<Mail size={18} />} badge badgeContent="8">
            Comments
          </UltimateNavbar.Item>
          <UltimateNavbar.Item icon={<Globe size={18} />}>
            Media
          </UltimateNavbar.Item>
        </UltimateNavbar.Section>
        
        <UltimateNavbar.Section title="Administration" icon={<Settings size={16} />} collapsible defaultCollapsed={true}>
          <UltimateNavbar.Item icon={<User size={18} />}>
            Users
          </UltimateNavbar.Item>
          <UltimateNavbar.Item icon={<Settings size={18} />}>
            Settings
          </UltimateNavbar.Item>
          <UltimateNavbar.Item icon={<HelpCircle size={18} />}>
            Help
          </UltimateNavbar.Item>
        </UltimateNavbar.Section>
        
        <div className="mt-auto">
          <UltimateNavbar.Item icon={<LogOut size={18} />}>
            Log Out
          </UltimateNavbar.Item>
        </div>
      </UltimateNavbar>
      
      <div className="flex-1 p-6 bg-gray-900">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4 text-white">Dashboard</h1>
          <p className="text-gray-300">
            This is an example of how the UltimateNavbar would look in a dashboard layout.
            The vertical sidebar provides navigation while this area displays the dashboard content.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-white mb-2">Users</h3>
              <p className="text-3xl font-bold text-blue-400">1,234</p>
              <p className="text-green-400 text-sm mt-1">+12% from last week</p>
            </div>
            
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-white mb-2">Revenue</h3>
              <p className="text-3xl font-bold text-blue-400">$12,345</p>
              <p className="text-green-400 text-sm mt-1">+8% from last month</p>
            </div>
            
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-white mb-2">Conversion</h3>
              <p className="text-3xl font-bold text-blue-400">3.45%</p>
              <p className="text-red-400 text-sm mt-1">-2% from last week</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Compact Density Example
export const CompactDensity = {
  args: {
    theme: 'enterprise',
    display: 'default',
    orientation: 'horizontal',
    size: 'sm',
    alignment: 'start',
    padding: 'sm',
    border: 'bottom',
    shadow: 'sm',
    rounded: 'none',
    animation: 'none',
    visualStyle: 'default',
    density: 'compact',
    dividers: false,
    responsive: false,
    collapsible: false,
    tooltipsEnabled: false,
    themeToggle: false,
    glowOnHover: false,
    sticky: false,
    backdrop: false,
  },
  render: (args) => (
    <UltimateNavbar {...args}>
      <UltimateNavbar.Logo 
        src="https://via.placeholder.com/24" 
        alt="Logo" 
        text="Compact UI" 
        width={24}
        height={24}
      />
      
      <UltimateNavbar.Item icon={<Home size={16} />} active>Home</UltimateNavbar.Item>
      <UltimateNavbar.Item icon={<PieChart size={16} />}>Dashboard</UltimateNavbar.Item>
      <UltimateNavbar.Item icon={<FileText size={16} />}>Reports</UltimateNavbar.Item>
      <UltimateNavbar.Item icon={<Users size={16} />}>Team</UltimateNavbar.Item>
      <UltimateNavbar.Item icon={<Settings size={16} />}>Settings</UltimateNavbar.Item>
      
      <div className="ml-auto flex items-center">
        <UltimateNavbar.Search size="sm" placeholder="Search..." />
        
        <UltimateNavbar.Item icon={<Bell size={16} />} badge badgeContent="3" badgeColor="primary" />
        <UltimateNavbar.Item icon={<User size={16} />} />
      </div>
    </UltimateNavbar>
  ),
};