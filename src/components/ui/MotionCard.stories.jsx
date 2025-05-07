import React from 'react';
import { ThemeProvider } from '../../providers/ThemeProvider';
import { MotionCard, MotionCardContent, MotionCardLayer } from './MotionCard';
import Button from './Button';

import { 
  CreditCard, 
  Zap, 
  Shield, 
  Image, 
  UserIcon, 
  Star,
  Layers,
  Settings,
  ArrowRight,
  Tag
} from 'lucide-react';

export default {
  title: 'Lumina UI/MotionCard',
  component: MotionCard,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default', 
        'elevated', 
        'glass', 
        'glass-premium', 
        'gradient', 
        'dark', 
        'neumorphic-light', 
        'neumorphic-dark'
      ],
    },
    intensity: {
      control: 'select',
      options: ['subtle', 'medium', 'strong'],
    },
    rounded: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full'],
    },
    glow: {
      control: 'select',
      options: ['none', 'subtle', 'medium', 'strong'],
    },
    highlight: {
      control: 'select',
      options: ['none', 'subtle', 'medium', 'strong'],
    },
    effect: {
      control: 'select',
      options: ['none', 'float', 'shimmer', 'border', 'multi-border'],
    },
    glowColor: { control: 'color' },
    resetOnLeave: { control: 'boolean' },
    disableRotation: { control: 'boolean' },
    disableScale: { control: 'boolean' },
    disableGlow: { control: 'boolean' },
    disableHighlight: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <div className="p-8 bg-background-primary min-h-[500px] flex items-center justify-center">
        <div className="w-full max-w-md">
          <Story />
        </div>
      </div>
    ),
  ],
};

// Basic Example
export const Default = () => (
  <MotionCard>
    <MotionCardContent>
      <h3 className="text-xl font-semibold mb-3">3D Motion Card</h3>
      <p className="text-foreground-secondary mb-4">
        Hover over this card to see the 3D motion effect. The card will rotate based on your mouse position.
      </p>
      <Button>Learn More</Button>
    </MotionCardContent>
  </MotionCard>
);

// Card with image
export const WithImage = () => (
  <MotionCard>
    <img 
      src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" 
      alt="Coding on laptop" 
      className="w-full h-48 object-cover"
    />
    <MotionCardContent>
      <h3 className="text-xl font-semibold mb-2">Web Development</h3>
      <p className="text-foreground-secondary mb-4">
        Modern tools and frameworks for building responsive web applications.
      </p>
      <Button rightIcon={<ArrowRight size={16} />}>Explore</Button>
    </MotionCardContent>
  </MotionCard>
);

// Enterprise Theme Examples
export const EnterpriseTheme = () => (
  <ThemeProvider theme="enterprise">
    <div className="space-y-10">
      <h3 className="text-foreground-primary text-lg font-medium mb-5">Enterprise Theme Motion Cards</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MotionCard variant="default" intensity="subtle">
          <MotionCardContent>
            <h3 className="text-lg font-semibold mb-2">Standard Card</h3>
            <p className="text-foreground-secondary text-sm mb-4">
              Enterprise-themed card with subtle 3D motion effect.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-foreground-tertiary text-sm">Hover to interact</span>
              <Button size="sm" variant="primary">Action</Button>
            </div>
          </MotionCardContent>
        </MotionCard>
        
        <MotionCard variant="elevated" intensity="medium" glow="subtle">
          <MotionCardContent>
            <h3 className="text-lg font-semibold mb-2">Elevated Card</h3>
            <p className="text-foreground-secondary text-sm mb-4">
              Elevated card with medium intensity and subtle glow.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-foreground-tertiary text-sm">Hover to interact</span>
              <Button size="sm" variant="primary">Action</Button>
            </div>
          </MotionCardContent>
        </MotionCard>
        
        <MotionCard variant="neumorphic-light" intensity="medium" highlight="subtle">
          <MotionCardContent>
            <div className="flex items-start">
              <div className="bg-primary/10 p-2 rounded-full mr-4">
                <Shield className="h-8 w-8 text-primary-base" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Security First</h3>
                <p className="text-foreground-secondary text-sm">
                  Enterprise-grade security with advanced encryption.
                </p>
              </div>
            </div>
          </MotionCardContent>
        </MotionCard>
        
        <MotionCard variant="neumorphic-light" intensity="medium" highlight="subtle">
          <MotionCardContent>
            <div className="flex items-start">
              <div className="bg-primary/10 p-2 rounded-full mr-4">
                <Zap className="h-8 w-8 text-primary-base" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">High Performance</h3>
                <p className="text-foreground-secondary text-sm">
                  Optimized for speed and efficiency at scale.
                </p>
              </div>
            </div>
          </MotionCardContent>
        </MotionCard>
      </div>
      
      <MotionCard variant="default" intensity="medium" glow="medium" className="mt-8" glowColor="rgba(59, 130, 246, 0.3)">
        <MotionCardContent className="flex items-center p-6">
          <div className="bg-blue-50 p-3 rounded-xl mr-6">
            <CreditCard className="h-10 w-10 text-blue-500" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Payment Processing</h3>
            <p className="text-foreground-secondary mb-3">
              Secure, reliable payment processing for your business needs.
            </p>
            <div className="flex space-x-3">
              <Button variant="primary" size="sm">Get Started</Button>
              <Button variant="outline" size="sm">Learn More</Button>
            </div>
          </div>
        </MotionCardContent>
      </MotionCard>
    </div>
  </ThemeProvider>
);

// Tech Dark Theme Examples
export const TechDarkTheme = () => (
  <ThemeProvider theme="techDark">
    <div className="space-y-10">
      <h3 className="text-foreground-primary text-lg font-medium mb-5">Tech Dark Theme Motion Cards</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MotionCard intensity="medium" glow="medium" highlight="medium">
          <MotionCardContent>
            <h3 className="text-lg font-semibold mb-2">Advanced Card</h3>
            <p className="text-foreground-secondary text-sm mb-4">
              Tech-themed card with glow and highlight effects.
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                <span className="text-foreground-tertiary text-sm">Active</span>
              </div>
              <Button size="sm" variant="accent-blue">View</Button>
            </div>
          </MotionCardContent>
        </MotionCard>
        
        <MotionCard variant="gradient" intensity="strong" glow="strong" highlight="medium">
          <MotionCardContent>
            <h3 className="text-lg font-semibold mb-2">Gradient Card</h3>
            <p className="text-foreground-secondary text-sm mb-4">
              Strong 3D effect with gradient background.
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                <span className="text-foreground-tertiary text-sm">Featured</span>
              </div>
              <Button size="sm" variant="accent-purple">Explore</Button>
            </div>
          </MotionCardContent>
        </MotionCard>
      </div>
      
      <MotionCard 
        variant="dark" 
        rounded="xl" 
        intensity="strong" 
        glow="strong" 
        glowColor="rgba(139, 92, 246, 0.5)"
        highlight="medium"
      >
        <img 
          src="https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=2074&auto=format&fit=crop" 
          alt="Night sky" 
          className="w-full h-48 object-cover rounded-t-xl"
        />
        <MotionCardContent>
          <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm">
            Featured
          </div>
          <h3 className="text-xl font-semibold mb-2">Cosmic Exploration</h3>
          <p className="text-foreground-secondary mb-4">
            Discover the wonders of the universe with our advanced telescopic tools.
          </p>
          <div className="flex space-x-3">
            <Button variant="accent-purple">Get Started</Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </MotionCardContent>
      </MotionCard>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <MotionCard variant="neumorphic-dark" intensity="medium" glow="subtle">
          <MotionCardContent className="p-4 flex flex-col items-center text-center">
            <div className="bg-accent-blue/20 p-3 rounded-full mb-3">
              <Zap className="h-6 w-6 text-accent-blue" />
            </div>
            <h3 className="font-semibold mb-1">Quick Setup</h3>
            <p className="text-foreground-tertiary text-sm">
              Get started in minutes
            </p>
          </MotionCardContent>
        </MotionCard>
        
        <MotionCard variant="neumorphic-dark" intensity="medium" glow="subtle">
          <MotionCardContent className="p-4 flex flex-col items-center text-center">
            <div className="bg-accent-purple/20 p-3 rounded-full mb-3">
              <Settings className="h-6 w-6 text-accent-purple" />
            </div>
            <h3 className="font-semibold mb-1">Customizable</h3>
            <p className="text-foreground-tertiary text-sm">
              Tailor to your needs
            </p>
          </MotionCardContent>
        </MotionCard>
        
        <MotionCard variant="neumorphic-dark" intensity="medium" glow="subtle">
          <MotionCardContent className="p-4 flex flex-col items-center text-center">
            <div className="bg-accent-cyan/20 p-3 rounded-full mb-3">
              <Shield className="h-6 w-6 text-accent-cyan" />
            </div>
            <h3 className="font-semibold mb-1">Secure</h3>
            <p className="text-foreground-tertiary text-sm">
              Enterprise-grade security
            </p>
          </MotionCardContent>
        </MotionCard>
      </div>
    </div>
  </ThemeProvider>
);

// Glass Theme Examples
export const GlassTheme = () => (
  <div className="bg-gradient-to-br from-blue-900 to-purple-900 p-8 rounded-lg">
    <ThemeProvider theme="glass">
      <div className="space-y-10">
        <h3 className="text-white text-lg font-medium mb-5">Glass Theme Motion Cards</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <MotionCard intensity="medium" glow="medium" highlight="medium">
            <MotionCardContent>
              <h3 className="text-xl font-semibold text-white mb-2">Glass Card</h3>
              <p className="text-white/80 mb-4">
                Premium glass effect with 3D motion on hover.
              </p>
              <Button variant="glass">Explore</Button>
            </MotionCardContent>
          </MotionCard>
          
          <MotionCard variant="glass-premium" intensity="strong" glow="strong" highlight="strong">
            <MotionCardContent>
              <h3 className="text-xl font-semibold text-white mb-2">Premium Glass</h3>
              <p className="text-white/80 mb-4">
                Enhanced glass card with strong effects.
              </p>
              <Button variant="glass-premium">View Details</Button>
            </MotionCardContent>
          </MotionCard>
        </div>
        
        <MotionCard variant="glass-premium" intensity="medium" glow="strong" rounded="xl">
          <MotionCardContent className="p-6">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mr-4">
                <UserIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">John Davidson</h3>
                <p className="text-white/70 text-sm">Product Designer</p>
              </div>
              <div className="ml-auto flex items-center">
                <Star className="h-4 w-4 text-yellow-400 mr-1" fill="#facc15" />
                <span className="text-white">4.9</span>
              </div>
            </div>
            
            <p className="text-white/80 mb-4">
              "The 3D glass card component adds an incredible level of interactivity and polish to our dashboard. The subtle animations make the interface feel alive."
            </p>
            
            <div className="flex space-x-3 mt-6">
              <Button variant="glass">Follow</Button>
              <Button variant="glass-frost">Message</Button>
            </div>
          </MotionCardContent>
        </MotionCard>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <MotionCard variant="glass" intensity="medium" rounded="lg">
            <MotionCardContent className="p-4 flex flex-col items-center text-center">
              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full mb-3">
                <Image className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-1">Gallery</h3>
              <p className="text-white/70 text-sm">
                Browse photos
              </p>
            </MotionCardContent>
          </MotionCard>
          
          <MotionCard variant="glass" intensity="medium" rounded="lg">
            <MotionCardContent className="p-4 flex flex-col items-center text-center">
              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full mb-3">
                <Layers className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-1">Projects</h3>
              <p className="text-white/70 text-sm">
                View all projects
              </p>
            </MotionCardContent>
          </MotionCard>
          
          <MotionCard variant="glass" intensity="medium" rounded="lg">
            <MotionCardContent className="p-4 flex flex-col items-center text-center">
              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full mb-3">
                <Tag className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-1">Products</h3>
              <p className="text-white/70 text-sm">
                Discover our products
              </p>
            </MotionCardContent>
          </MotionCard>
        </div>
      </div>
    </ThemeProvider>
  </div>
);

// 3D Layers Example
export const WithLayers = () => (
  <ThemeProvider theme="techDark">
    <MotionCard 
      variant="dark" 
      rounded="xl" 
      intensity="strong" 
      glow="medium" 
      className="max-w-sm mx-auto"
    >
      <MotionCardContent className="p-6">
        <MotionCardLayer depth={60}>
          <div className="bg-accent-purple/20 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
            <Layers className="h-8 w-8 text-accent-purple" />
          </div>
        </MotionCardLayer>
        
        <MotionCardLayer depth={40}>
          <h3 className="text-xl font-semibold text-center mb-2">3D Layered Content</h3>
        </MotionCardLayer>
        
        <MotionCardLayer depth={30}>
          <p className="text-foreground-secondary text-center mb-6">
            This card uses multiple layers at different depths to create a true 3D effect when the card moves.
          </p>
        </MotionCardLayer>
        
        <MotionCardLayer depth={20}>
          <div className="bg-background-tertiary rounded-lg p-4 mb-4">
            <p className="text-sm text-foreground-tertiary">
              Different elements appear at different depths, enhancing the 3D effect as you move your mouse.
            </p>
          </div>
        </MotionCardLayer>
        
        <MotionCardLayer depth={50}>
          <Button className="w-full" variant="accent-purple">Experience 3D</Button>
        </MotionCardLayer>
      </MotionCardContent>
    </MotionCard>
  </ThemeProvider>
);

// Different Intensity Levels
export const IntensityLevels = () => (
  <ThemeProvider theme="techDark">
    <div className="space-y-8">
      <h3 className="text-foreground-primary text-lg font-medium mb-4">Motion Intensity Comparison</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <h4 className="text-foreground-secondary font-medium text-center mb-3">Subtle</h4>
          <MotionCard variant="dark" intensity="subtle" glow="subtle" className="h-52">
            <MotionCardContent className="flex flex-col items-center justify-center text-center">
              <h3 className="text-lg font-semibold mb-2">Subtle Effect</h3>
              <p className="text-foreground-tertiary text-sm">
                Gentle motion perfect for professional interfaces
              </p>
            </MotionCardContent>
          </MotionCard>
        </div>
        
        <div className="space-y-2">
          <h4 className="text-foreground-secondary font-medium text-center mb-3">Medium</h4>
          <MotionCard variant="dark" intensity="medium" glow="medium" className="h-52">
            <MotionCardContent className="flex flex-col items-center justify-center text-center">
              <h3 className="text-lg font-semibold mb-2">Medium Effect</h3>
              <p className="text-foreground-tertiary text-sm">
                Balanced motion for most user interfaces
              </p>
            </MotionCardContent>
          </MotionCard>
        </div>
        
        <div className="space-y-2">
          <h4 className="text-foreground-secondary font-medium text-center mb-3">Strong</h4>
          <MotionCard variant="dark" intensity="strong" glow="strong" className="h-52">
            <MotionCardContent className="flex flex-col items-center justify-center text-center">
              <h3 className="text-lg font-semibold mb-2">Strong Effect</h3>
              <p className="text-foreground-tertiary text-sm">
                Pronounced motion for immersive experiences
              </p>
            </MotionCardContent>
          </MotionCard>
        </div>
      </div>
    </div>
  </ThemeProvider>
);

// Product Showcase with 3D Cards
export const ProductShowcase = () => (
  <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-lg">
    <ThemeProvider theme="techDark">
      <h3 className="text-foreground-primary text-lg font-medium mb-6">Product Showcase</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MotionCard 
          variant="dark" 
          intensity="medium" 
          glow="medium" 
          highlight="medium" 
          rounded="xl"
          glowColor="rgba(59, 130, 246, 0.4)"
        >
          <img 
            src="https://images.unsplash.com/photo-1600003263720-95b45a4035d5?q=80&w=1470&auto=format&fit=crop" 
            alt="Headphones" 
            className="w-full h-48 object-cover rounded-t-xl"
          />
          <MotionCardContent>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold">Pro Headphones</h3>
              <span className="text-blue-400 font-semibold">$249</span>
            </div>
            <p className="text-foreground-tertiary text-sm mb-4">
              Premium noise-cancelling wireless headphones with spatial audio.
            </p>
            <Button variant="accent-blue" fullWidth>Add to Cart</Button>
          </MotionCardContent>
        </MotionCard>
        
        <MotionCard 
          variant="dark" 
          intensity="medium" 
          glow="medium" 
          highlight="medium" 
          rounded="xl"
          glowColor="rgba(139, 92, 246, 0.4)"
        >
          <img 
            src="https://images.unsplash.com/photo-1544866092-1677b593fa2f?q=80&w=1470&auto=format&fit=crop" 
            alt="Smart Watch" 
            className="w-full h-48 object-cover rounded-t-xl"
          />
          <MotionCardContent>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold">Smart Watch</h3>
              <span className="text-purple-400 font-semibold">$349</span>
            </div>
            <p className="text-foreground-tertiary text-sm mb-4">
              Advanced health monitoring and fitness tracking.
            </p>
            <Button variant="accent-purple" fullWidth>Add to Cart</Button>
          </MotionCardContent>
        </MotionCard>
        
        <MotionCard 
          variant="dark" 
          intensity="medium" 
          glow="medium" 
          highlight="medium" 
          rounded="xl"
          glowColor="rgba(6, 182, 212, 0.4)"
        >
          <img 
            src="https://images.unsplash.com/photo-1605464315542-bda3e2f4e605?q=80&w=1470&auto=format&fit=crop" 
            alt="Smart Speaker" 
            className="w-full h-48 object-cover rounded-t-xl"
          />
          <MotionCardContent>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold">Smart Speaker</h3>
              <span className="text-cyan-400 font-semibold">$129</span>
            </div>
            <p className="text-foreground-tertiary text-sm mb-4">
              Premium sound with built-in voice assistant.
            </p>
            <Button variant="accent-cyan" fullWidth>Add to Cart</Button>
          </MotionCardContent>
        </MotionCard>
      </div>
    </ThemeProvider>
  </div>
);

// Interactive Dashboard Example
export const DashboardCards = () => (
  <ThemeProvider theme="enterprise">
    <div className="space-y-6">
      <h3 className="text-foreground-primary text-lg font-medium mb-4">Dashboard Cards</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <MotionCard variant="elevated" intensity="subtle" glow="subtle" glowColor="rgba(59, 130, 246, 0.3)">
          <MotionCardContent className="p-4">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-semibold">Total Revenue</h3>
              <div className="p-2 bg-blue-50 rounded-full">
                <CreditCard className="h-4 w-4 text-blue-500" />
              </div>
            </div>
            <div className="mb-2">
              <span className="text-2xl font-bold">$84,254</span>
              <span className="text-green-500 text-sm ml-2">+8.4%</span>
            </div>
            <p className="text-foreground-tertiary text-sm">
              Compared to $77,651 last month
            </p>
          </MotionCardContent>
        </MotionCard>
        
        <MotionCard variant="elevated" intensity="subtle" glow="subtle" glowColor="rgba(16, 185, 129, 0.3)">
          <MotionCardContent className="p-4">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-semibold">New Customers</h3>
              <div className="p-2 bg-green-50 rounded-full">
                <UserIcon className="h-4 w-4 text-green-500" />
              </div>
            </div>
            <div className="mb-2">
              <span className="text-2xl font-bold">1,432</span>
              <span className="text-green-500 text-sm ml-2">+12.2%</span>
            </div>
            <p className="text-foreground-tertiary text-sm">
              Compared to 1,276 last month
            </p>
          </MotionCardContent>
        </MotionCard>
        
        <MotionCard variant="elevated" intensity="subtle" glow="subtle" glowColor="rgba(245, 158, 11, 0.3)">
          <MotionCardContent className="p-4">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-semibold">Avg. Order Value</h3>
              <div className="p-2 bg-amber-50 rounded-full">
                <Tag className="h-4 w-4 text-amber-500" />
              </div>
            </div>
            <div className="mb-2">
              <span className="text-2xl font-bold">$59.32</span>
              <span className="text-amber-500 text-sm ml-2">+5.3%</span>
            </div>
            <p className="text-foreground-tertiary text-sm">
              Compared to $56.34 last month
            </p>
          </MotionCardContent>
        </MotionCard>
      </div>
      
      <MotionCard variant="elevated" intensity="subtle" className="p-2">
        <MotionCardContent>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Recent Transactions</h3>
            <Button size="sm" variant="ghost">View All</Button>
          </div>
          
          <div className="space-y-3">
            {[
              { name: 'Sarah Johnson', amount: '$245.00', status: 'Completed', date: 'Today, 2:34 PM' },
              { name: 'Michael Chen', amount: '$1,024.00', status: 'Processing', date: 'Today, 11:15 AM' },
              { name: 'Emily Davis', amount: '$530.50', status: 'Completed', date: 'Yesterday, 4:56 PM' },
              { name: 'Alex Thompson', amount: '$99.99', status: 'Failed', date: 'Yesterday, 2:23 PM' }
            ].map((transaction, index) => (
              <div key={index} className="flex items-center p-3 rounded-lg hover:bg-background-secondary">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <UserIcon className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">{transaction.name}</p>
                  <p className="text-foreground-tertiary text-sm">{transaction.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{transaction.amount}</p>
                  <p className={`text-sm ${
                    transaction.status === 'Completed' ? 'text-green-500' : 
                    transaction.status === 'Failed' ? 'text-red-500' : 'text-amber-500'
                  }`}>
                    {transaction.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MotionCardContent>
      </MotionCard>
    </div>
  </ThemeProvider>
);