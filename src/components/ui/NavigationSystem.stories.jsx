import React, { useState } from 'react';
import { NavigationSystem } from './NavigationSystem';
import { Header } from './Header';
import { Navbar } from './UltimateNavbar';
import { ThemeProvider } from '../../providers/ThemeProvider';

export default {
  title: 'Lumina UI/NavigationSystem',
  component: NavigationSystem,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A comprehensive navigation system that combines Header and Navbar components for Lumina UI.',
      },
    },
  },
  argTypes: {
    theme: {
      control: 'select',
      options: ['enterprise', 'techDark', 'glass'],
      description: 'Theme style for the navigation system',
      defaultValue: 'enterprise',
    },
    layout: {
      control: 'select',
      options: ['top', 'sidebar', 'top-and-sidebar'],
      description: 'Layout of the navigation system',
      defaultValue: 'top',
    },
    sidebarCollapsible: {
      control: 'boolean',
      description: 'Whether the sidebar is collapsible',
      defaultValue: false,
    },
    sidebarDefaultOpen: {
      control: 'boolean',
      description: 'Default state of the sidebar',
      defaultValue: true,
    },
    sidebarWidth: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Width of the sidebar',
      defaultValue: 'md',
    },
  },
};

// Icons for demo
const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
  </svg>
);

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
  </svg>
);

const SettingsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
  </svg>
);

const DashboardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
  </svg>
);

const DocumentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
  </svg>
);

// Mock logo component
const MockLogo = () => (
  <div className="flex items-center">
    <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center text-white font-bold mr-2">
      L
    </div>
    <span className="font-bold text-lg">Lumina</span>
  </div>
);

// Sample content for stories
const SampleContent = () => (
  <div className="p-8">
    <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-background-secondary p-6 rounded-lg border border-border">
        <h3 className="text-lg font-medium mb-2">Users</h3>
        <p className="text-3xl font-bold">1,248</p>
        <p className="text-foreground-tertiary text-sm mt-2">+12% from last week</p>
      </div>
      
      <div className="bg-background-secondary p-6 rounded-lg border border-border">
        <h3 className="text-lg font-medium mb-2">Revenue</h3>
        <p className="text-3xl font-bold">$34,567</p>
        <p className="text-foreground-tertiary text-sm mt-2">+8% from last month</p>
      </div>
      
      <div className="bg-background-secondary p-6 rounded-lg border border-border">
        <h3 className="text-lg font-medium mb-2">Projects</h3>
        <p className="text-3xl font-bold">27</p>
        <p className="text-foreground-tertiary text-sm mt-2">5 pending approval</p>
      </div>
    </div>
    
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
      <div className="bg-background-secondary rounded-lg border border-border overflow-hidden">
        <div className="p-4 border-b border-border flex items-center">
          <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
            <UsersIcon />
          </div>
          <div>
            <p className="font-medium">New user registered</p>
            <p className="text-foreground-tertiary text-sm">2 hours ago</p>
          </div>
        </div>
        
        <div className="p-4 border-b border-border flex items-center">
          <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
            <DocumentIcon />
          </div>
          <div>
            <p className="font-medium">Project proposal submitted</p>
            <p className="text-foreground-tertiary text-sm">Yesterday</p>
          </div>
        </div>
        
        <div className="p-4 flex items-center">
          <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
            <SettingsIcon />
          </div>
          <div>
            <p className="font-medium">System update completed</p>
            <p className="text-foreground-tertiary text-sm">3 days ago</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Template for basic navigation system
const Template = (args) => {
  const [activeHeaderItem, setActiveHeaderItem] = useState('dashboard');
  const [activeSidebarItem, setActiveSidebarItem] = useState('dashboard');
  
  const handleHeaderItemClick = (item) => {
    setActiveHeaderItem(item);
  };
  
  const handleSidebarItemClick = (item) => {
    setActiveSidebarItem(item);
  };
  
  // Header navigation items
  const headerNavItems = (
    <>
      <Header.NavItem 
        active={activeHeaderItem === 'dashboard'} 
        onClick={() => handleHeaderItemClick('dashboard')} 
      >
        Dashboard
      </Header.NavItem>
      <Header.NavItem 
        active={activeHeaderItem === 'projects'} 
        onClick={() => handleHeaderItemClick('projects')} 
      >
        Projects
      </Header.NavItem>
      <Header.NavItem 
        active={activeHeaderItem === 'team'} 
        onClick={() => handleHeaderItemClick('team')} 
      >
        Team
      </Header.NavItem>
      <Header.NavItem 
        active={activeHeaderItem === 'reports'} 
        onClick={() => handleHeaderItemClick('reports')} 
      >
        Reports
      </Header.NavItem>
      <Header.NavItem 
        className="ml-auto bg-primary text-primary-foreground hover:bg-primary-dark"
      >
        New Project
      </Header.NavItem>
    </>
  );
  
  // Sidebar navigation items
  const sidebarNavItems = (
    <>
      <Navbar.Item 
        icon={<DashboardIcon />}
        active={activeSidebarItem === 'dashboard'} 
        onClick={() => handleSidebarItemClick('dashboard')} 
      >
        Dashboard
      </Navbar.Item>
      <Navbar.Item 
        icon={<DocumentIcon />}
        active={activeSidebarItem === 'projects'} 
        onClick={() => handleSidebarItemClick('projects')} 
      >
        Projects
      </Navbar.Item>
      <Navbar.Item 
        icon={<UsersIcon />}
        active={activeSidebarItem === 'team'} 
        onClick={() => handleSidebarItemClick('team')} 
      >
        Team
      </Navbar.Item>
      <Navbar.Item 
        icon={<SettingsIcon />}
        active={activeSidebarItem === 'settings'} 
        onClick={() => handleSidebarItemClick('settings')} 
      >
        Settings
      </Navbar.Item>
    </>
  );
  
  return (
    <ThemeProvider theme={args.theme}>
      <NavigationSystem
        {...args}
        logo={<MockLogo />}
        headerNavItems={headerNavItems}
        sidebarNavItems={sidebarNavItems}
        headerProps={{
          size: 'md',
          variant: 'default',
          shadow: 'sm',
        }}
        navbarProps={{
          size: 'md',
        }}
      >
        <SampleContent />
      </NavigationSystem>
    </ThemeProvider>
  );
};

// Top navigation layout
export const TopNavigation = Template.bind({});
TopNavigation.args = {
  theme: 'enterprise',
  layout: 'top',
};
TopNavigation.parameters = {
  docs: {
    description: {
      story: 'Basic top navigation layout with header.',
    },
  },
};

// Sidebar navigation layout
export const SidebarNavigation = Template.bind({});
SidebarNavigation.args = {
  theme: 'enterprise',
  layout: 'sidebar',
  sidebarCollapsible: true,
  sidebarDefaultOpen: true,
  sidebarWidth: 'md',
};
SidebarNavigation.parameters = {
  docs: {
    description: {
      story: 'Sidebar navigation layout with collapsible sidebar.',
    },
  },
};

// Combined top and sidebar navigation
export const TopAndSidebarNavigation = Template.bind({});
TopAndSidebarNavigation.args = {
  theme: 'enterprise',
  layout: 'top-and-sidebar',
  sidebarCollapsible: true,
  sidebarDefaultOpen: true,
  sidebarWidth: 'md',
};
TopAndSidebarNavigation.parameters = {
  docs: {
    description: {
      story: 'Combined top and sidebar navigation layout.',
    },
  },
};

// Tech Dark theme example
export const TechDarkTheme = Template.bind({});
TechDarkTheme.args = {
  theme: 'techDark',
  layout: 'top-and-sidebar',
  sidebarCollapsible: true,
  sidebarDefaultOpen: true,
  sidebarWidth: 'md',
};
TechDarkTheme.parameters = {
  backgrounds: { default: 'dark' },
  docs: {
    description: {
      story: 'Navigation system with Tech Dark theme.',
    },
  },
};

// Glass theme example
export const GlassTheme = Template.bind({});
GlassTheme.args = {
  theme: 'glass',
  layout: 'top',
};
GlassTheme.parameters = {
  backgrounds: { default: 'dark' },
  docs: {
    description: {
      story: 'Navigation system with Glass theme.',
    },
  },
};

// Dashboard with collapsed sidebar
export const CollapsedSidebar = Template.bind({});
CollapsedSidebar.args = {
  theme: 'techDark',
  layout: 'top-and-sidebar',
  sidebarCollapsible: true,
  sidebarDefaultOpen: false,
  sidebarWidth: 'md',
};
CollapsedSidebar.parameters = {
  backgrounds: { default: 'dark' },
  docs: {
    description: {
      story: 'Navigation system with initially collapsed sidebar.',
    },
  },
};

// Example with different widths
export const WideSidebar = Template.bind({});
WideSidebar.args = {
  theme: 'enterprise',
  layout: 'top-and-sidebar',
  sidebarCollapsible: true,
  sidebarDefaultOpen: true,
  sidebarWidth: 'lg',
};
WideSidebar.parameters = {
  docs: {
    description: {
      story: 'Navigation system with a wider sidebar.',
    },
  },
};