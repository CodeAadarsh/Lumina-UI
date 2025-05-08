import React from 'react';
import { ThemeProvider } from '../../providers/ThemeProvider';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './Card';
import Button from './Button';
import {
  ArrowRight,
  Star,
  Check,
  AlertCircle,
  ChevronRight,
  User,
  Calendar,
  Clock,
  Settings,
  BarChart,
  TrendingUp,
  Download,
  Lock,
  CreditCard
} from 'lucide-react';

export default {
  title: 'UI/Card',
  component: Card,
  subcomponents: { CardHeader, CardTitle, CardDescription, CardContent, CardFooter },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        // Basic variants
        'default',
        'elevated',
        'outline',
        'solid',
        'gradient-subtle',
        
        // Glass variants
        'glass',
        'glass-premium',
        'glass-frost',
        'glass-dark',
        
        // Gradient variants
        'gradient-blue',
        'gradient-purple',
        'gradient-cyan',
        'gradient-emerald',
        'gradient-blue-purple',
        'gradient-cyan-blue',
        'gradient-emerald-cyan',
        'gradient-amber-orange',
        
        // Dark variants
        'dark-elevated',
        'dark-glass',
        'dark-gradient',
        
        // Glow variants
        'glow-blue',
        'glow-purple',
        'glow-cyan',
        'glow-emerald',
        'glow-amber',
        'glow-pink',
        
        // Premium variants
        'premium-blue',
        'premium-purple',
        'premium-cyan',
        'premium-emerald',
        
        // Shimmer variants
        'shimmer-light',
        'shimmer-dark',
        
        // Enterprise variants
        'enterprise-light',
        'enterprise-dark',
        'enterprise-blue',
        'enterprise-accent',
        
        // Neumorphic variants
        'neumorphic-light',
        'neumorphic-dark'
      ],
    },
    padding: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
    },
    rounded: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full'],
    },
    effect: {
      control: 'select',
      options: [
        'none',
        'hover',
        'hover-subtle',
        'hover-glow',
        'glow',
        'glow-sm',
        'glow-lg',
        'glow-pulse',
        'purple-glow',
        'multi-glow',
        'float',
        'shimmer',
        'shimmer-fast',
        'shimmer-subtle',
        'gradientBorder',
        'rainbowBorder',
        'pulseBorder',
        'glassBorder',
        'glassBorder-strong',
        'scaleUp',
        'scaleDown',
        'highlight',
        'highlight-subtle',
        'tilt-3d'
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
    border: {
      control: 'select',
      options: [
        'none',
        'thin',
        'default',
        'strong',
        'focus',
        'accent',
        'bottom',
        'top'
      ],
    },
  },
  decorators: [
    (Story) => (
      <div className="p-8 bg-background-primary">
        <Story />
      </div>
    ),
  ],
};

// Basic Card Examples
export const Default = () => (
  <Card className="max-w-md">
    <CardContent>
      <p>This is a basic card with just content.</p>
    </CardContent>
  </Card>
);

export const WithHeaderAndFooter = () => (
  <Card className="max-w-md">
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
      <CardDescription>Secondary information about this card</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-foreground-secondary mb-4">
        This is a card with a header and footer. Cards can be used to display
        content in a clear and organized way.
      </p>
      <div className="flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-primary"></span>
        <span className="text-sm text-foreground-tertiary">Active</span>
      </div>
    </CardContent>
    <CardFooter className="flex justify-between">
      <Button variant="ghost" size="sm">Cancel</Button>
      <Button size="sm">Save</Button>
    </CardFooter>
  </Card>
);

export const WithImage = () => (
  <Card className="max-w-sm overflow-hidden">
    <img 
      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300&q=80" 
      alt="People working on laptops" 
      className="w-full h-48 object-cover"
    />
    <CardHeader>
      <CardTitle>Team Collaboration</CardTitle>
      <CardDescription>Tools for the modern workspace</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-foreground-secondary">
        Empower your team with our collaborative tools designed for the modern workspace.
      </p>
    </CardContent>
    <CardFooter>
      <Button className="w-full" rightIcon={<ArrowRight className="h-4 w-4" />}>Learn More</Button>
    </CardFooter>
  </Card>
);

// Card Variants by Theme
export const EnterpriseTheme = () => (
  <ThemeProvider theme="enterprise">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Default Card</CardTitle>
          <CardDescription>Standard enterprise card</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-foreground-secondary">Enterprise theme emphasizes clarity and professionalism with clean lines and subtle effects.</p>
        </CardContent>
        <CardFooter>
          <Button size="sm">Action</Button>
        </CardFooter>
      </Card>
      
      <Card variant="elevated" effect="hover-subtle">
        <CardHeader>
          <CardTitle>Elevated Card</CardTitle>
          <CardDescription>With subtle hover effect</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-foreground-secondary">Hover over this card to see a subtle elevation change, providing tactile feedback.</p>
        </CardContent>
        <CardFooter>
          <Button size="sm">Action</Button>
        </CardFooter>
      </Card>
      
      <Card variant="outline">
        <CardHeader>
          <CardTitle>Outline Card</CardTitle>
          <CardDescription>Border only variant</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-foreground-secondary">Outline cards reduce visual weight while maintaining structure, perfect for secondary information.</p>
        </CardContent>
        <CardFooter>
          <Button size="sm" variant="outline">Action</Button>
        </CardFooter>
      </Card>
      
      <Card variant="enterprise-light">
        <CardHeader>
          <CardTitle>Enterprise Light</CardTitle>
          <CardDescription>Professional light variant</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-background-secondary">Specifically designed for enterprise applications with appropriate colors and styling.</p>
        </CardContent>
        <CardFooter>
          <Button size="sm" variant="primary">Action</Button>
        </CardFooter>
      </Card>
      
      <Card variant="enterprise-accent" border="accent">
        <CardHeader>
          <CardTitle>Accent Card</CardTitle>
          <CardDescription>With colored accent border</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-foreground-secondary">The accent border helps this card stand out for important information or primary actions.</p>
        </CardContent>
        <CardFooter>
          <Button size="sm">Action</Button>
        </CardFooter>
      </Card>
      
      <Card variant="neumorphic-light" effect="scaleDown">
        <CardHeader>
          <CardTitle>Neumorphic Light</CardTitle>
          <CardDescription>Soft UI design</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-foreground-secondary">Neumorphic design creates a soft, tactile interface with subtle shadows and highlights.</p>
        </CardContent>
        <CardFooter>
          <Button size="sm" variant="neumorphic-light">Action</Button>
        </CardFooter>
      </Card>
    </div>
  </ThemeProvider>
);

export const TechDarkTheme = () => (
  <ThemeProvider theme="techDark">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Default Card</CardTitle>
          <CardDescription>Standard tech dark card</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-foreground-secondary">The tech dark theme provides a modern, sleek appearance perfect for dashboards and tech products.</p>
        </CardContent>
        <CardFooter>
          <Button size="sm">Action</Button>
        </CardFooter>
      </Card>
      
      <Card variant="dark-elevated" effect="glow-sm">
        <CardHeader>
          <CardTitle>Dark Elevated</CardTitle>
          <CardDescription>With subtle glow effect</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-foreground-secondary">The subtle glow effect adds depth and dimension to the card, making it stand out slightly.</p>
        </CardContent>
        <CardFooter>
          <Button size="sm" variant="accent-blue">Action</Button>
        </CardFooter>
      </Card>
      
      <Card variant="dark-gradient">
        <CardHeader>
          <CardTitle>Dark Gradient</CardTitle>
          <CardDescription>Subtle gradient background</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-foreground-secondary">A subtle gradient adds visual interest without compromising readability or professionalism.</p>
        </CardContent>
        <CardFooter>
          <Button size="sm" variant="gradient">Action</Button>
        </CardFooter>
      </Card>
      
      <Card variant="glow-blue" effect="glow-pulse">
        <CardHeader>
          <CardTitle>Glowing Card</CardTitle>
          <CardDescription>With pulsing effect</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-foreground-secondary">The pulsing glow effect draws attention to this card, ideal for important notifications or featured content.</p>
        </CardContent>
        <CardFooter>
          <Button size="sm" variant="glow-blue">Action</Button>
        </CardFooter>
      </Card>
      
      <Card variant="shimmer-dark" effect="shimmer">
        <CardHeader>
          <CardTitle>Shimmer Card</CardTitle>
          <CardDescription>With dynamic shimmer effect</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-foreground-secondary">The shimmer effect creates a dynamic, interactive appearance that adds visual interest.</p>
        </CardContent>
        <CardFooter>
          <Button size="sm" variant="shimmer-dark" effect="shimmer">Action</Button>
        </CardFooter>
      </Card>
      
      <Card variant="gradient-blue-purple">
        <CardHeader>
          <CardTitle className="text-white">Gradient Card</CardTitle>
          <CardDescription className="text-white/80">Vibrant background</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-white/90">The gradient background creates a visually striking card that draws attention to important content.</p>
        </CardContent>
        <CardFooter>
          <Button size="sm" variant="glass">Action</Button>
        </CardFooter>
      </Card>
    </div>
  </ThemeProvider>
);

export const GlassTheme = () => (
  <div className="bg-gradient-to-br from-blue-900 to-purple-900 p-8 rounded-lg">
    <ThemeProvider theme="glass">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card variant="glass">
          <CardHeader>
            <CardTitle>Glass Card</CardTitle>
            <CardDescription>Basic glassmorphism</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-foreground-secondary">The basic glass effect creates a translucent card that lets the background show through slightly.</p>
          </CardContent>
          <CardFooter>
            <Button size="sm" variant="glass">Action</Button>
          </CardFooter>
        </Card>
        
        <Card variant="glass-premium" effect="glow">
          <CardHeader>
            <CardTitle>Premium Glass</CardTitle>
            <CardDescription>With glow effect</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-foreground-secondary">The premium glass variant combines transparency with a subtle gradient and glow for a high-end appearance.</p>
          </CardContent>
          <CardFooter>
            <Button size="sm" variant="glass-premium">Action</Button>
          </CardFooter>
        </Card>
        
        <Card variant="glass-frost" effect="shimmer-subtle">
          <CardHeader>
            <CardTitle>Frost Glass</CardTitle>
            <CardDescription>With subtle shimmer</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-foreground-secondary">The frost effect creates a more opaque, blurred background with a subtle shimmer animation.</p>
          </CardContent>
          <CardFooter>
            <Button size="sm" variant="glass-frost">Action</Button>
          </CardFooter>
        </Card>
        
        <Card variant="premium-blue" effect="glow-pulse">
          <CardHeader>
            <CardTitle>Premium Blue</CardTitle>
            <CardDescription>With pulsing glow</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-foreground-secondary">The premium blue card with pulsing glow creates an eye-catching effect for featured content.</p>
          </CardContent>
          <CardFooter>
            <Button size="sm" variant="premium-blue">Action</Button>
          </CardFooter>
        </Card>
        
        <Card variant="glass-dark" effect="tilt-3d">
          <CardHeader>
            <CardTitle>Interactive Glass</CardTitle>
            <CardDescription>With 3D tilt effect</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-foreground-secondary">This card features a 3D tilt effect that responds to mouse movement, creating an interactive experience.</p>
          </CardContent>
          <CardFooter>
            <Button size="sm" variant="glass-dark">Action</Button>
          </CardFooter>
        </Card>
        
        <Card variant="glass-gradient" effect="float">
          <CardHeader>
            <CardTitle>Floating Glass</CardTitle>
            <CardDescription>With gradient and float animation</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-foreground-secondary">The floating animation adds a gentle movement to the card, creating a dynamic but subtle effect.</p>
          </CardContent>
          <CardFooter>
            <Button size="sm" variant="glass-gradient">Action</Button>
          </CardFooter>
        </Card>
      </div>
    </ThemeProvider>
  </div>
);

// Card UI Patterns
export const CardPatterns = () => (
  <ThemeProvider theme="techDark">
    <div className="space-y-8">
      <h3 className="text-foreground-primary text-xl font-medium mb-4">Common Card UI Patterns</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Card */}
        <Card variant="glow-purple" rounded="xl" className="overflow-hidden">
          <div className="h-24 bg-gradient-to-r from-purple-700 to-pink-600"></div>
          <div className="flex justify-center -mt-12">
            <div className="h-24 w-24 rounded-full border-4 border-background-primary bg-background-secondary flex items-center justify-center">
              <User className="h-12 w-12 text-foreground-secondary" />
            </div>
          </div>
          <CardHeader className="text-center pt-2">
            <CardTitle>Sarah Johnson</CardTitle>
            <CardDescription>Product Designer</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-foreground-secondary mb-4">
              UI/UX expert with 5+ years of experience in product design and user research.
            </p>
            <div className="flex justify-center gap-3">
              <Button size="sm" variant="outline" rounded="full">Message</Button>
              <Button size="sm" variant="primary" rounded="full">Follow</Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Stat Card */}
        <Card variant="dark-elevated" effect="hover-subtle">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-emerald-500" />
              Monthly Revenue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-3xl font-bold">$24,987</p>
                <p className="text-emerald-500 text-sm flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" /> +12.5% from last month
                </p>
              </div>
              <BarChart className="h-10 w-10 text-foreground-tertiary" />
            </div>
          </CardContent>
        </Card>
        
        {/* Notification Card */}
        <Card variant="gradient-subtle" border="left" className="border-l-4 border-l-amber-500">
          <CardContent className="py-4">
            <div className="flex gap-3">
              <div className="mt-1">
                <AlertCircle className="h-5 w-5 text-amber-500" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Attention Required</h3>
                <p className="text-foreground-secondary text-sm">
                  Your subscription will expire in 3 days. Please renew to avoid service interruption.
                </p>
                <div className="mt-3">
                  <Button size="sm" variant="outline">Dismiss</Button>
                  <Button size="sm" className="ml-2">Renew Now</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {/* Event Card */}
        <Card variant="dark-glass" effect="hover" rounded="lg" className="overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1522158637959-30ab5e1e76b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300&q=80" 
            alt="Conference" 
            className="w-full h-40 object-cover"
          />
          <CardHeader>
            <CardTitle>Annual Developer Conference</CardTitle>
            <CardDescription className="flex items-center gap-1">
              <Calendar className="h-3 w-3" /> June 15-17, 2025
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-foreground-secondary text-sm mb-3">
              Join us for three days of workshops, talks, and networking with the best developers in the industry.
            </p>
            <div className="flex items-center gap-4 text-sm text-foreground-tertiary">
              <div className="flex items-center gap-1">
                <User className="h-3 w-3" /> 1,200+ attendees
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" /> 09:00 - 18:00
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="gradient-blue-purple" className="w-full">
              Register Now
            </Button>
          </CardFooter>
        </Card>
        
        {/* Pricing Card */}
        <Card variant="premium-cyan" effect="glow" rounded="xl">
          <CardHeader>
            <div className="px-4 py-1 bg-cyan-900/50 text-cyan-200 text-xs rounded-full w-fit mb-2">
              MOST POPULAR
            </div>
            <CardTitle>Pro Plan</CardTitle>
            <CardDescription className="text-white/80">For growing teams</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-1 mb-6">
              <span className="text-4xl font-bold">$49</span>
              <span className="text-white/70 mb-1">/month</span>
            </div>
            <ul className="space-y-3">
              {['Unlimited projects', 'Priority support', 'Advanced analytics', 'Custom integrations', 'Team collaboration'].map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-cyan-300 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="glass" size="lg" className="w-full">
              Get Started
            </Button>
          </CardFooter>
        </Card>
        
        {/* Settings Card */}
        <Card variant="dark-elevated">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Account Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="border-b border-border py-3 px-5 flex justify-between items-center">
              <div>
                <h3 className="font-medium">Two-Factor Authentication</h3>
                <p className="text-sm text-foreground-tertiary">Add an extra layer of security</p>
              </div>
              <div className="h-6 w-11 bg-background-tertiary rounded-full p-1 flex items-center cursor-pointer">
                <div className="h-4 w-4 bg-foreground-tertiary rounded-full"></div>
              </div>
            </div>
            <div className="border-b border-border py-3 px-5 flex justify-between items-center">
              <div>
                <h3 className="font-medium">Email Notifications</h3>
                <p className="text-sm text-foreground-tertiary">Receive updates and alerts</p>
              </div>
              <div className="h-6 w-11 bg-primary rounded-full p-1 flex justify-end items-center cursor-pointer">
                <div className="h-4 w-4 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="py-3 px-5 flex justify-between items-center">
              <div>
                <h3 className="font-medium">Data Sharing</h3>
                <p className="text-sm text-foreground-tertiary">Help us improve our product</p>
              </div>
              <div className="h-6 w-11 bg-background-tertiary rounded-full p-1 flex items-center cursor-pointer">
                <div className="h-4 w-4 bg-foreground-tertiary rounded-full"></div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t border-border flex justify-between">
            <Button variant="ghost" size="sm">Cancel</Button>
            <Button size="sm">Save Changes</Button>
          </CardFooter>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {/* Feature Comparison Card */}
        <Card variant="dark-gradient" className="col-span-1">
          <CardHeader>
            <CardTitle>Plan Comparison</CardTitle>
            <CardDescription>Choose the right plan for your needs</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-5">Feature</th>
                  <th className="text-center py-3 px-2">Free</th>
                  <th className="text-center py-3 px-2">Pro</th>
                  <th className="text-center py-3 px-2">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-3 px-5">Projects</td>
                  <td className="text-center py-3 px-2">3</td>
                  <td className="text-center py-3 px-2">Unlimited</td>
                  <td className="text-center py-3 px-2">Unlimited</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-5">Team Members</td>
                  <td className="text-center py-3 px-2">1</td>
                  <td className="text-center py-3 px-2">10</td>
                  <td className="text-center py-3 px-2">Unlimited</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-5">Support</td>
                  <td className="text-center py-3 px-2">Email</td>
                  <td className="text-center py-3 px-2">Priority</td>
                  <td className="text-center py-3 px-2">Dedicated</td>
                </tr>
                <tr>
                  <td className="py-3 px-5">Analytics</td>
                  <td className="text-center py-3 px-2">Basic</td>
                  <td className="text-center py-3 px-2">Advanced</td>
                  <td className="text-center py-3 px-2">Custom</td>
                </tr>
              </tbody>
            </table>
          </CardContent>
          <CardFooter className="border-t border-border">
            <Button size="sm" className="w-full">Upgrade Now</Button>
          </CardFooter>
        </Card>
        
        {/* Payment Card */}
        <Card variant="gradient-subtle" rounded="lg" className="col-span-1">
          <CardHeader>
            <CardTitle>Payment Information</CardTitle>
            <CardDescription>Update your billing details</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-md border border-border p-3 bg-background-secondary flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CreditCard className="h-5 w-5 text-foreground-tertiary" />
                  <div>
                    <p className="font-medium">•••• •••• •••• 4242</p>
                    <p className="text-sm text-foreground-tertiary">Expires 12/25</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded">Default</span>
                  <Button size="sm" variant="ghost">Edit</Button>
                </div>
              </div>
              
              <div className="rounded-md border border-border p-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CreditCard className="h-5 w-5 text-foreground-tertiary" />
                  <div>
                    <p className="font-medium">•••• •••• •••• 7890</p>
                    <p className="text-sm text-foreground-tertiary">Expires 09/26</p>
                  </div>
                </div>
                <Button size="sm" variant="ghost">Set as default</Button>
              </div>
              
              <Button variant="outline" className="w-full" leftIcon={<CreditCard className="h-4 w-4" />}>
                Add New Payment Method
              </Button>
            </div>
          </CardContent>
          <CardFooter className="border-t border-border flex justify-between">
            <div>
              <p className="text-sm text-foreground-tertiary">Next billing date</p>
              <p className="font-medium">June 15, 2025</p>
            </div>
            <Button>Update Billing</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  </ThemeProvider>
);

// Card Effects Showcase
export const CardEffects = () => (
  <ThemeProvider theme="techDark">
    <div className="space-y-8">
      <h3 className="text-foreground-primary text-xl font-medium mb-4">Card Effects & Animations</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Hover Effects */}
        <Card variant="default" effect="hover" className="h-48 flex flex-col justify-center items-center">
          <p className="font-medium mb-2">Hover Effect</p>
          <p className="text-sm text-foreground-tertiary text-center px-4">Hover to see the card elevate and shadow increase</p>
        </Card>
        
        {/* Subtle Hover */}
        <Card variant="default" effect="hover-subtle" className="h-48 flex flex-col justify-center items-center">
          <p className="font-medium mb-2">Subtle Hover</p>
          <p className="text-sm text-foreground-tertiary text-center px-4">More gentle hover animation for less emphasis</p>
        </Card>
        
        {/* Glow Effects */}
        <Card variant="default" effect="glow" className="h-48 flex flex-col justify-center items-center">
          <p className="font-medium mb-2">Glow Effect</p>
          <p className="text-sm text-foreground-tertiary text-center px-4">Constant soft blue glow around the card</p>
        </Card>
        
        {/* Pulsing Glow */}
        <Card variant="default" effect="glow-pulse" className="h-48 flex flex-col justify-center items-center">
          <p className="font-medium mb-2">Pulsing Glow</p>
          <p className="text-sm text-foreground-tertiary text-center px-4">Glow intensity changes over time</p>
        </Card>
        
        {/* Shimmer Effect */}
        <Card variant="default" effect="shimmer" className="h-48 flex flex-col justify-center items-center">
          <p className="font-medium mb-2">Shimmer Effect</p>
          <p className="text-sm text-foreground-tertiary text-center px-4">Light moves across the card surface</p>
        </Card>
        
        {/* Fast Shimmer */}
        <Card variant="default" effect="shimmer-fast" className="h-48 flex flex-col justify-center items-center">
          <p className="font-medium mb-2">Fast Shimmer</p>
          <p className="text-sm text-foreground-tertiary text-center px-4">Faster shimmer animation for more energy</p>
        </Card>
        
        {/* Floating Animation */}
        <Card variant="default" animation="float" className="h-48 flex flex-col justify-center items-center">
          <p className="font-medium mb-2">Float Animation</p>
          <p className="text-sm text-foreground-tertiary text-center px-4">Card gently moves up and down</p>
        </Card>
        
        {/* Fade In */}
        <Card variant="default" animation="fadeIn" className="h-48 flex flex-col justify-center items-center">
          <p className="font-medium mb-2">Fade In</p>
          <p className="text-sm text-foreground-tertiary text-center px-4">Card fades in when rendered</p>
        </Card>
        
        {/* Slide Up */}
        <Card variant="default" animation="slideUp" className="h-48 flex flex-col justify-center items-center">
          <p className="font-medium mb-2">Slide Up</p>
          <p className="text-sm text-foreground-tertiary text-center px-4">Card slides up when rendered</p>
        </Card>
        
        {/* Zoom In */}
        <Card variant="default" animation="zoomIn" className="h-48 flex flex-col justify-center items-center">
          <p className="font-medium mb-2">Zoom In</p>
          <p className="text-sm text-foreground-tertiary text-center px-4">Card zooms in when rendered</p>
        </Card>
        
        {/* 3D Tilt */}
        <Card variant="default" effect="tilt-3d" className="h-48 flex flex-col justify-center items-center">
          <p className="font-medium mb-2">3D Tilt Effect</p>
          <p className="text-sm text-foreground-tertiary text-center px-4">Hover and move cursor to see 3D effect</p>
        </Card>
        
        {/* Scale Up */}
        <Card variant="default" effect="scaleUp" className="h-48 flex flex-col justify-center items-center">
          <p className="font-medium mb-2">Scale Up</p>
          <p className="text-sm text-foreground-tertiary text-center px-4">Card grows slightly on hover</p>
        </Card>
      </div>
    </div>
  </ThemeProvider>
);

// Roundness & Border Variations
export const CardShapes = () => (
  <ThemeProvider theme="enterprise">
    <div className="space-y-8">
      <h3 className="text-foreground-primary text-xl font-medium mb-4">Card Shapes & Borders</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Different Corner Radius */}
        <Card rounded="none" className="h-40 flex flex-col justify-center items-center">
          <p className="font-medium mb-2">No Rounded Corners</p>
          <p className="text-sm text-foreground-tertiary text-center">rounded="none"</p>
        </Card>
        
        <Card rounded="sm" className="h-40 flex flex-col justify-center items-center">
          <p className="font-medium mb-2">Small Rounded Corners</p>
          <p className="text-sm text-foreground-tertiary text-center">rounded="sm"</p>
        </Card>
        
        <Card rounded="lg" className="h-40 flex flex-col justify-center items-center">
          <p className="font-medium mb-2">Large Rounded Corners</p>
          <p className="text-sm text-foreground-tertiary text-center">rounded="lg"</p>
        </Card>
        
        <Card rounded="2xl" className="h-40 flex flex-col justify-center items-center">
          <p className="font-medium mb-2">Extra Large Rounded</p>
          <p className="text-sm text-foreground-tertiary text-center">rounded="2xl"</p>
        </Card>
        
        {/* Different Border Styles */}
        <Card border="thin" className="h-40 flex flex-col justify-center items-center">
          <p className="font-medium mb-2">Thin Border</p>
          <p className="text-sm text-foreground-tertiary text-center">border="thin"</p>
        </Card>
        
        <Card border="strong" className="h-40 flex flex-col justify-center items-center">
          <p className="font-medium mb-2">Strong Border</p>
          <p className="text-sm text-foreground-tertiary text-center">border="strong"</p>
        </Card>
        
        <Card border="accent" className="h-40 flex flex-col justify-center items-center">
          <p className="font-medium mb-2">Accent Border</p>
          <p className="text-sm text-foreground-tertiary text-center">border="accent"</p>
        </Card>
        
        <Card border="none" className="h-40 flex flex-col justify-center items-center shadow-md">
          <p className="font-medium mb-2">No Border</p>
          <p className="text-sm text-foreground-tertiary text-center">border="none"</p>
        </Card>
        
        {/* Border Position Variations */}
        <Card border="bottom" className="h-40 flex flex-col justify-center items-center">
          <p className="font-medium mb-2">Bottom Border</p>
          <p className="text-sm text-foreground-tertiary text-center">border="bottom"</p>
        </Card>
        
        <Card border="top" className="h-40 flex flex-col justify-center items-center">
          <p className="font-medium mb-2">Top Border</p>
          <p className="text-sm text-foreground-tertiary text-center">border="top"</p>
        </Card>
        
        {/* Special Border Effects */}
        <Card effect="gradientBorder" className="h-40 flex flex-col justify-center items-center">
          <p className="font-medium mb-2">Gradient Border</p>
          <p className="text-sm text-foreground-tertiary text-center">effect="gradientBorder"</p>
        </Card>
        
        <Card effect="rainbowBorder" className="h-40 flex flex-col justify-center items-center">
          <p className="font-medium mb-2">Rainbow Border</p>
          <p className="text-sm text-foreground-tertiary text-center">effect="rainbowBorder"</p>
        </Card>
      </div>
    </div>
  </ThemeProvider>
);

// Theme Comparison
export const ThemeComparison = () => (
  <div className="space-y-12">
    <div>
      <h3 className="text-xl font-bold mb-4">Enterprise Theme</h3>
      <ThemeProvider theme="enterprise">
        <div className="flex flex-wrap gap-4 p-6 bg-background-primary rounded-lg">
          <Card className="w-64">
            <CardHeader>
              <CardTitle>Default Card</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground-secondary">Enterprise theme default card styling.</p>
            </CardContent>
          </Card>
          
          <Card variant="elevated" effect="hover" className="w-64">
            <CardHeader>
              <CardTitle>Elevated Card</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground-secondary">With elevation and hover effect.</p>
            </CardContent>
          </Card>
          
          <Card variant="outline" className="w-64">
            <CardHeader>
              <CardTitle>Outline Card</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground-secondary">Transparent with border only.</p>
            </CardContent>
          </Card>
        </div>
      </ThemeProvider>
    </div>
    
    <div>
      <h3 className="text-xl font-bold mb-4">Tech Dark Theme</h3>
      <ThemeProvider theme="techDark">
        <div className="flex flex-wrap gap-4 p-6 bg-background-primary rounded-lg">
          <Card className="w-64">
            <CardHeader>
              <CardTitle>Default Card</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground-secondary">Tech dark theme default card styling.</p>
            </CardContent>
          </Card>
          
          <Card variant="dark-elevated" effect="glow" className="w-64">
            <CardHeader>
              <CardTitle>Elevated Card</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground-secondary">With elevation and glow effect.</p>
            </CardContent>
          </Card>
          
          <Card variant="gradient-blue-purple" className="w-64">
            <CardHeader>
              <CardTitle className="text-white">Gradient Card</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/80">Blue-purple gradient background.</p>
            </CardContent>
          </Card>
        </div>
      </ThemeProvider>
    </div>
    
    <div>
      <h3 className="text-xl font-bold mb-4">Glass Theme</h3>
      <div className="bg-gradient-to-br from-blue-900 to-purple-900 p-2 rounded-lg">
        <ThemeProvider theme="glass">
          <div className="flex flex-wrap gap-4 p-6 backdrop-blur-md bg-white/10 rounded-lg">
            <Card className="w-64">
              <CardHeader>
                <CardTitle>Default Card</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground-secondary">Glass theme default card styling.</p>
              </CardContent>
            </Card>
            
            <Card variant="glass-premium" effect="glow" className="w-64">
              <CardHeader>
                <CardTitle>Premium Glass</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground-secondary">Premium glass with glow effect.</p>
              </CardContent>
            </Card>
            
            <Card variant="glass-frost" effect="shimmer" className="w-64">
              <CardHeader>
                <CardTitle>Frost Glass</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground-secondary">Frosted glass with shimmer effect.</p>
              </CardContent>
            </Card>
          </div>
        </ThemeProvider>
      </div>
    </div>
  </div>
);