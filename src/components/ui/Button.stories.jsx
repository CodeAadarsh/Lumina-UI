import React from 'react';
import { ThemeProvider } from '../../providers/ThemeProvider';
import Button from './Button';
import { 
  ArrowRight, 
  Mail, 
  Search, 
  Download, 
  Github, 
  ChevronRight,
  Play,
  Check,
  X,
  Heart,
  Settings,
  Sparkles,
  Sun,
  Moon
} from 'lucide-react';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        // Standard variants
        'primary', 
        'secondary', 
        'outline', 
        'ghost', 
        'destructive',
        
        // Glass variants
        'glass', 
        'glass-dark',
        'glass-frost',
        'glass-deep',
        'glass-premium',
        'glass-gradient',
        
        // Gradient variants
        'gradient',
        'gradient-blue-purple',
        'gradient-cyan-blue',
        'gradient-emerald-cyan',
        'gradient-amber-orange',
        
        // Accent variants
        'accent-blue',
        'accent-purple',
        'accent-cyan',
        'accent-pink',
        'accent-amber',
        'accent-emerald',
        
        // Glow variants
        'glow-blue',
        'glow-purple',
        'glow-cyan',
        'glow-emerald',
        'glow-amber',
        'glow-pink',
        'glow-white',
        
        // Premium variants
        'premium-dark',
        'premium-light',
        'premium-blue',
        'premium-purple',
        
        // Shimmer variants
        'shimmer-light',
        'shimmer-dark',
        'shimmer-blue',
        'shimmer-purple',
        
        // Neumorphic variants
        'neumorphic-light',
        'neumorphic-dark'
      ],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', 'icon', 'icon-sm', 'icon-lg'],
    },
    rounded: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl', '2xl', 'full'],
    },
    effect: {
      control: 'select',
      options: [
        'none', 
        'glow', 
        'glow-sm',
        'glow-lg',
        'glow-pulse',
        'float',
        'shimmer',
        'shimmer-fast',
        'shimmer-subtle',
        'gradientBorder',
        'rainbowBorder',
        'glassBorder',
        'glassBorder-strong',
        'scaleUp',
        'scaleDown',
        'magnetic',
        'highlight',
        'highlight-subtle'
      ],
    },
    animation: {
      control: 'select',
      options: [
        'none',
        'pulse',
        'pulse-slow',
        'float',
        'float-slow',
        'fadeIn',
        'slideUp',
        'slideDown',
        'slideIn',
        'slideRight',
        'zoomIn',
        'blurIn'
      ],
    },
    mode: {
      control: 'select',
      options: [
        'none',
        'light-only',
        'dark-only',
        'light-optimized',
        'dark-optimized'
      ],
    },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <div className="p-8 bg-background-primary">
        <Story />
      </div>
    ),
  ],
};

// Template for the stories
const Template = (args) => <Button {...args} />;

// Default button
export const Default = Template.bind({});
Default.args = {
  children: 'Button',
  variant: 'primary',
  size: 'md',
};

// Enterprise Theme
export const EnterpriseTheme = () => (
  <ThemeProvider theme="enterprise">
    <div className="space-y-8">
      <div>
        <h3 className="text-foreground-primary text-lg font-medium mb-4">Base Variants</h3>
        <div className="flex flex-wrap gap-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </div>

      <div>
        <h3 className="text-foreground-primary text-lg font-medium mb-4">Sizes</h3>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="xs">Extra Small</Button>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
          <Button size="2xl">2XL Size</Button>
        </div>
      </div>
      
      <div>
        <h3 className="text-foreground-primary text-lg font-medium mb-4">Icon Buttons</h3>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="icon-sm"><Search className="h-4 w-4" /></Button>
          <Button size="icon"><Mail className="h-5 w-5" /></Button>
          <Button size="icon-lg"><Settings className="h-6 w-6" /></Button>
          <Button size="icon" variant="outline"><Heart className="h-5 w-5" /></Button>
          <Button size="icon" variant="ghost"><Check className="h-5 w-5" /></Button>
        </div>
      </div>

      <div>
        <h3 className="text-foreground-primary text-lg font-medium mb-4">With Icons</h3>
        <div className="flex flex-wrap gap-3">
          <Button leftIcon={<Search className="h-4 w-4" />}>Search</Button>
          <Button rightIcon={<ArrowRight className="h-4 w-4" />}>Next</Button>
          <Button leftIcon={<Download className="h-4 w-4" />} variant="outline">Download</Button>
          <Button leftIcon={<Github className="h-4 w-4" />} variant="secondary">GitHub</Button>
        </div>
      </div>

      <div>
        <h3 className="text-foreground-primary text-lg font-medium mb-4">States</h3>
        <div className="flex flex-wrap gap-3">
          <Button loading>Loading</Button>
          <Button disabled>Disabled</Button>
          <Button variant="outline" loading>Saving</Button>
          <Button variant="secondary" disabled>Inactive</Button>
        </div>
      </div>
      
      <div>
        <h3 className="text-foreground-primary text-lg font-medium mb-4">Premium Variants</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="premium-light">Premium Light</Button>
          <Button variant="premium-dark">Premium Dark</Button>
          <Button variant="premium-blue">Premium Blue</Button>
          <Button variant="premium-purple">Premium Purple</Button>
        </div>
      </div>
      
      <div>
        <h3 className="text-foreground-primary text-lg font-medium mb-4">Neumorphic Design</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="neumorphic-light">Neumorphic Light</Button>
          <Button variant="neumorphic-light" leftIcon={<Sun className="h-4 w-4" />}>Light Mode</Button>
        </div>
      </div>
    </div>
  </ThemeProvider>
);

// Tech Dark Theme
export const TechDarkTheme = () => (
  <ThemeProvider theme="techDark">
    <div className="space-y-8">
      <div>
        <h3 className="text-foreground-primary text-lg font-medium mb-4">Standard Variants</h3>
        <div className="flex flex-wrap gap-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </div>

      <div>
        <h3 className="text-foreground-primary text-lg font-medium mb-4">Accent Colors</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="accent-blue">Blue</Button>
          <Button variant="accent-purple">Purple</Button>
          <Button variant="accent-cyan">Cyan</Button>
          <Button variant="accent-pink">Pink</Button>
          <Button variant="accent-emerald">Emerald</Button>
          <Button variant="accent-amber">Amber</Button>
        </div>
      </div>
      
      <div>
        <h3 className="text-foreground-primary text-lg font-medium mb-4">Gradient Buttons</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="gradient">Default Gradient</Button>
          <Button variant="gradient-blue-purple">Blue Purple</Button>
          <Button variant="gradient-cyan-blue">Cyan Blue</Button>
          <Button variant="gradient-emerald-cyan">Emerald Cyan</Button>
          <Button variant="gradient-amber-orange">Amber Orange</Button>
        </div>
      </div>

      <div>
        <h3 className="text-foreground-primary text-lg font-medium mb-4">Glow Effects</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="glow-blue">Blue Glow</Button>
          <Button variant="glow-purple">Purple Glow</Button>
          <Button variant="glow-cyan">Cyan Glow</Button>
          <Button variant="glow-emerald">Emerald Glow</Button>
          <Button variant="glow-amber">Amber Glow</Button>
          <Button variant="glow-pink">Pink Glow</Button>
        </div>
      </div>
      
      <div>
        <h3 className="text-foreground-primary text-lg font-medium mb-4">Shimmer Effects</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="shimmer-dark" effect="shimmer">Dark Shimmer</Button>
          <Button variant="shimmer-blue" effect="shimmer">Blue Shimmer</Button>
          <Button variant="shimmer-purple" effect="shimmer">Purple Shimmer</Button>
          <Button variant="accent-blue" effect="shimmer">Blue with Shimmer</Button>
          <Button variant="accent-cyan" effect="shimmer-fast">Fast Shimmer</Button>
          <Button variant="gradient-blue-purple" effect="shimmer-subtle">Subtle Shimmer</Button>
        </div>
      </div>
      
      <div>
        <h3 className="text-foreground-primary text-lg font-medium mb-4">Border Effects</h3>
        <div className="flex flex-wrap gap-3">
          <Button effect="gradientBorder">Gradient Border</Button>
          <Button effect="rainbowBorder">Rainbow Border</Button>
          <Button variant="outline" effect="gradientBorder">Outline with Gradient</Button>
          <Button variant="ghost" effect="rainbowBorder">Ghost with Rainbow</Button>
        </div>
      </div>

      <div>
        <h3 className="text-foreground-primary text-lg font-medium mb-4">Animations</h3>
        <div className="flex flex-wrap gap-3">
          <Button animation="pulse">Pulse</Button>
          <Button animation="pulse-slow">Slow Pulse</Button>
          <Button animation="float">Float</Button>
          <Button animation="float-slow">Slow Float</Button>
          <Button animation="fadeIn">Fade In</Button>
          <Button animation="slideUp">Slide Up</Button>
          <Button animation="slideIn">Slide In</Button>
        </div>
      </div>
      
      <div>
        <h3 className="text-foreground-primary text-lg font-medium mb-4">Interactive Effects</h3>
        <div className="flex flex-wrap gap-3">
          <Button effect="scaleUp">Scale Up</Button>
          <Button effect="scaleDown">Scale Down</Button>
          <Button effect="highlight">Highlight</Button>
          <Button effect="highlight-subtle">Subtle Highlight</Button>
          <Button effect="magnetic">Magnetic</Button>
        </div>
      </div>
      
      <div>
        <h3 className="text-foreground-primary text-lg font-medium mb-4">Neumorphic Dark</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="neumorphic-dark">Neumorphic Dark</Button>
          <Button variant="neumorphic-dark" leftIcon={<Moon className="h-4 w-4" />}>Dark Mode</Button>
        </div>
      </div>

      <div>
        <h3 className="text-foreground-primary text-lg font-medium mb-4">Combined Styles</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="accent-blue" effect="glow" animation="pulse-slow">Glowing Pulse</Button>
          <Button variant="accent-purple" effect="shimmer" animation="float">Shimmer Float</Button>
          <Button variant="gradient" rounded="full" animation="fadeIn">Rounded Fade</Button>
          <Button variant="glow-cyan" effect="scaleUp" animation="pulse">Multi-effect Button</Button>
          <Button variant="premium-dark" effect="highlight" animation="slideIn">Premium Highlight</Button>
        </div>
      </div>
    </div>
  </ThemeProvider>
);

// Glass Theme
export const GlassTheme = () => (
  <div className="bg-gradient-to-br from-blue-900 to-purple-900 p-8 rounded-lg">
    <ThemeProvider theme="glass">
      <div className="space-y-8">
        <div>
          <h3 className="text-foreground-primary text-lg font-medium mb-4">Basic Glass Variants</h3>
          <div className="flex flex-wrap gap-3">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        </div>
        
        <div>
          <h3 className="text-foreground-primary text-lg font-medium mb-4">Enhanced Glassmorphism</h3>
          <div className="flex flex-wrap gap-3">
            <Button variant="glass">Basic Glass</Button>
            <Button variant="glass-dark">Dark Glass</Button>
            <Button variant="glass-frost">Frost Glass</Button>
            <Button variant="glass-deep">Deep Glass</Button>
            <Button variant="glass-premium">Premium Glass</Button>
            <Button variant="glass-gradient">Gradient Glass</Button>
          </div>
        </div>

        <div>
          <h3 className="text-foreground-primary text-lg font-medium mb-4">Glass with Effects</h3>
          <div className="flex flex-wrap gap-3">
            <Button variant="glass" effect="glow">Glass + Glow</Button>
            <Button variant="glass-frost" effect="shimmer">Frost + Shimmer</Button>
            <Button variant="glass-premium" effect="highlight">Premium + Highlight</Button>
            <Button variant="glass-deep" effect="scaleUp">Deep + Scale</Button>
            <Button variant="glass" effect="glassBorder-strong">Strong Glass Border</Button>
          </div>
        </div>

        <div>
          <h3 className="text-foreground-primary text-lg font-medium mb-4">Glass with Animations</h3>
          <div className="flex flex-wrap gap-3">
            <Button variant="glass" animation="float">Floating Glass</Button>
            <Button variant="glass-premium" animation="pulse-slow">Pulsing Glass</Button>
            <Button variant="glass-gradient" animation="fadeIn">Fading Glass</Button>
            <Button variant="glass-frost" animation="slideUp">Sliding Glass</Button>
            <Button variant="glass-deep" animation="zoomIn">Zooming Glass</Button>
          </div>
        </div>
        
        <div>
          <h3 className="text-foreground-primary text-lg font-medium mb-4">Complex Combinations</h3>
          <div className="flex flex-wrap gap-3">
            <Button 
              variant="glass-premium" 
              effect="shimmer" 
              animation="pulse-slow" 
              rounded="xl"
              leftIcon={<Sparkles className="h-4 w-4" />}
            >
              Premium Effect
            </Button>
            <Button
              variant="glass-gradient"
              effect="glow"
              animation="float-slow"
              rounded="full"
              rightIcon={<Play className="h-4 w-4" />}
            >
              Play Now
            </Button>
            <Button
              variant="glass-frost"
              effect="glassBorder-strong"
              animation="blurIn"
              leftIcon={<Download className="h-4 w-4" />}
            >
              Download
            </Button>
          </div>
        </div>
      </div>
    </ThemeProvider>
  </div>
);

// Dark Mode vs Light Mode
export const DarkLightModeComparison = () => (
  <div className="space-y-12">
    <div>
      <h3 className="text-xl font-bold mb-4">Light Mode Optimized Buttons</h3>
      <ThemeProvider theme="enterprise">
        <div className="flex flex-wrap gap-3 p-6 bg-background-primary rounded-lg">
          <Button mode="light-optimized">Light Optimized</Button>
          <Button variant="outline" mode="light-optimized">Outline</Button>
          <Button variant="premium-light" mode="light-only">Light Only</Button>
          <Button variant="neumorphic-light">Neumorphic Light</Button>
          <Button variant="shimmer-light" effect="shimmer">Shimmer Light</Button>
        </div>
      </ThemeProvider>
    </div>
    
    <div>
      <h3 className="text-xl font-bold mb-4">Dark Mode Optimized Buttons</h3>
      <ThemeProvider theme="techDark">
        <div className="flex flex-wrap gap-3 p-6 bg-background-primary rounded-lg">
          <Button mode="dark-optimized">Dark Optimized</Button>
          <Button variant="outline" mode="dark-optimized">Outline</Button>
          <Button variant="premium-dark" mode="dark-only">Dark Only</Button>
          <Button variant="neumorphic-dark">Neumorphic Dark</Button>
          <Button variant="shimmer-dark" effect="shimmer">Shimmer Dark</Button>
        </div>
      </ThemeProvider>
    </div>
    
    <div>
      <h3 className="text-xl font-bold mb-4">Adaptive Buttons</h3>
      <div className="grid grid-cols-2 gap-6">
        <ThemeProvider theme="enterprise">
          <div className="flex flex-wrap gap-3 p-6 bg-background-primary rounded-lg">
            <Button>Default Button</Button>
            <Button variant="glass-frost">Adaptive Glass</Button>
            <Button variant="glow-blue">Glow Button</Button>
            <Button variant="premium-light">Premium</Button>
          </div>
        </ThemeProvider>
        
        <ThemeProvider theme="techDark">
          <div className="flex flex-wrap gap-3 p-6 bg-background-primary rounded-lg">
            <Button>Default Button</Button>
            <Button variant="glass-frost">Adaptive Glass</Button>
            <Button variant="glow-blue">Glow Button</Button>
            <Button variant="premium-dark">Premium</Button>
          </div>
        </ThemeProvider>
      </div>
    </div>
  </div>
);

// All Themes Comparison
export const ThemeComparison = () => (
  <div className="space-y-12">
    <div>
      <h3 className="text-xl font-bold mb-4">Enterprise Theme</h3>
      <ThemeProvider theme="enterprise">
        <div className="flex flex-wrap gap-3 p-6 bg-background-primary rounded-lg">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="premium-light">Premium</Button>
        </div>
      </ThemeProvider>
    </div>
    
    <div>
      <h3 className="text-xl font-bold mb-4">Tech Dark Theme</h3>
      <ThemeProvider theme="techDark">
        <div className="flex flex-wrap gap-3 p-6 bg-background-primary rounded-lg">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="accent-purple">Accent</Button>
          <Button variant="gradient" effect="glow">Gradient + Glow</Button>
          <Button variant="premium-dark">Premium</Button>
        </div>
      </ThemeProvider>
    </div>
    
    <div>
      <h3 className="text-xl font-bold mb-4">Glass Theme</h3>
      <div className="bg-gradient-to-br from-blue-900 to-black-900 p-2 rounded-lg">
        <ThemeProvider theme="glass">
          <div className="flex flex-wrap gap-3 p-6 backdrop-blur-md bg-white/10 rounded-lg">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="glass">Glass</Button>
            <Button variant="glass-premium">Premium Glass</Button>
            <Button variant="glass-gradient" effect="glow">Gradient + Glow</Button>
            <Button variant="outline" effect="glassBorder">Glass Border</Button>
          </div>
        </ThemeProvider>
      </div>
    </div>
  </div>
);