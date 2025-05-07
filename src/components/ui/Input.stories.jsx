import React from 'react';
import { ThemeProvider } from '../../providers/ThemeProvider';
import Input from './Input';
import { 
  Mail, 
  Search, 
  Lock, 
  User, 
  Calendar, 
  CreditCard, 
  DollarSign, 
  Phone, 
  Link, 
  MapPin,
  Settings,
  AtSign,
  FileText,
  Globe,
  Hash,
  Smartphone,
  Key,
  AlertCircle,
  CheckCircle
} from 'lucide-react';

export default {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default', 
        'filled', 
        'outline', 
        'underline', 
        'glass',
        'glass-premium',
        'glass-frost',
        'glass-dark',
        'glass-gradient',
        'solid',
        'modern',
        'material',
        'neumorphic-light',
        'neumorphic-dark'
      ],
    },
    padding: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    rounded: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', 'full'],
    },
    effect: {
      control: 'select',
      options: [
        'none', 
        'glow', 
        'purple-glow',
        'cyan-glow',
        'multi-glow',
        'gradientBorder', 
        'rainbowBorder',
        'shimmer',
        'float',
        'scale',
        'focus-ring'
      ],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'date', 'search'],
    },
    disabled: { control: 'boolean' },
    floatingLabel: { control: 'boolean' },
    clearable: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    showPasswordToggle: { control: 'boolean' },
    animated: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <div className="p-8 bg-background-primary">
        <Story />
      </div>
    ),
  ],
};

// Template for stories
const Template = (args) => <Input {...args} />;

// Default input
export const Default = Template.bind({});
Default.args = {
  label: 'Username',
  placeholder: 'Enter your username',
  helperText: 'Your unique identifier for logging in',
  variant: 'default',
};

// Enterprise Theme
export const EnterpriseTheme = () => (
  <ThemeProvider theme="enterprise">
    <div className="space-y-10 max-w-md">
      <div>
        <h3 className="text-foreground-primary text-lg font-medium mb-4">Basic Input Variants</h3>
        <div className="space-y-4">
          <Input 
            label="Default Input" 
            placeholder="Default variant" 
            helperText="Standard input with border"
          />
          
          <Input 
            variant="filled" 
            label="Filled Input" 
            placeholder="Filled variant" 
            helperText="Background with subtle border"
          />
          
          <Input 
            variant="outline" 
            label="Outline Input" 
            placeholder="Outline variant" 
            helperText="Transparent background with border"
          />
          
          <Input 
            variant="underline" 
            label="Underline Input" 
            placeholder="Underline variant" 
            helperText="Only bottom border is visible"
          />
          
          <Input 
            variant="modern" 
            label="Modern Input" 
            placeholder="Modern minimalist style" 
            helperText="Clean design with subtle shadow"
          />
        </div>
      </div>

      <div>
        <h3 className="text-foreground-primary text-lg font-medium mb-4">Material Design & Neumorphic</h3>
        <div className="space-y-4">
          <Input 
            variant="material" 
            label="Material Design" 
            placeholder="Inspired by Material UI" 
            helperText="Bottom border with focus animation"
          />
          
          <Input 
            variant="material" 
            label="Material with Float" 
            floatingLabel
            placeholder=""
            helperText="With floating label effect"
          />
          
          <Input 
            variant="neumorphic-light" 
            label="Neumorphic Light" 
            placeholder="Soft UI design" 
            helperText="Inset shadow creates 3D effect"
          />
        </div>
      </div>

      <div>
        <h3 className="text-foreground-primary text-lg font-medium mb-4">Input Sizes</h3>
        <div className="space-y-4">
          <Input 
            size="xs"
            padding="xs" 
            label="Extra Small Input" 
            placeholder="XS size"
          />
          
          <Input 
            size="sm"
            padding="sm" 
            label="Small Input" 
            placeholder="Small size"
          />
          
          <Input 
            size="md"
            padding="md" 
            label="Medium Input" 
            placeholder="Medium size (default)"
          />
          
          <Input 
            size="lg"
            padding="lg" 
            label="Large Input" 
            placeholder="Large size"
          />
          
          <Input 
            size="xl"
            padding="xl" 
            label="Extra Large Input" 
            placeholder="XL size"
          />
        </div>
      </div>

      <div>
        <h3 className="text-foreground-primary text-lg font-medium mb-4">Input Effects</h3>
        <div className="space-y-4">
          <Input 
            effect="glow"
            label="Glow Effect" 
            placeholder="Focus to see blue glow effect"
          />
          
          <Input 
            effect="purple-glow"
            label="Purple Glow" 
            placeholder="Focus to see purple glow effect"
          />
          
          <Input 
            effect="cyan-glow"
            label="Cyan Glow" 
            placeholder="Focus to see cyan glow effect"
          />
          
          <Input 
            effect="float"
            label="Float Effect" 
            placeholder="Focus to see float animation"
          />
          
          <Input 
            effect="scale"
            label="Scale Effect" 
            placeholder="Focus to see subtle scaling"
          />
          
          <Input 
            effect="focus-ring"
            label="Focus Ring" 
            placeholder="Focus to see focus ring"
          />
          
          <Input 
            effect="gradientBorder"
            label="Gradient Border" 
            placeholder="With gradient border"
          />
          
          <Input 
            effect="rainbowBorder"
            label="Rainbow Border" 
            placeholder="With rainbow border"
          />
          
          <Input 
            effect="shimmer"
            label="Shimmer Effect" 
            placeholder="Focus to see shimmer animation"
          />
        </div>
      </div>

      <div>
        <h3 className="text-foreground-primary text-lg font-medium mb-4">With Icons</h3>
        <div className="space-y-4">
          <Input 
            leftIcon={<Mail size={16} />}
            label="Email Address" 
            type="email" 
            placeholder="your@email.com" 
          />
          
          <Input 
            leftIcon={<Lock size={16} />}
            label="Password" 
            type="password" 
            placeholder="Enter your password" 
          />
          
          <Input 
            leftIcon={<Search size={16} />}
            placeholder="Search..." 
            variant="filled"
            rounded="full"
          />
          
          <Input 
            leftIcon={<User size={16} />}
            rightIcon={<Settings size={16} />}
            label="Account Settings" 
            placeholder="Your profile information"
          />
        </div>
      </div>

      <div>
        <h3 className="text-foreground-primary text-lg font-medium mb-4">Advanced Features</h3>
        <div className="space-y-4">
          <Input 
            clearable
            label="Clearable Input" 
            placeholder="Type to see clear button"
            leftIcon={<Search size={16} />}
          />
          
          <Input 
            variant="material"
            floatingLabel
            label="Floating Label"
            placeholder=""
          />
          
          <Input 
            variant="modern"
            rounded="xl"
            label="Rounded Modern Input"
            placeholder="Extra large rounded corners"
            effect="scale"
          />
          
          <Input 
            type="password"
            label="Password Toggle"
            placeholder="With visibility toggle"
            leftIcon={<Key size={16} />}
            showPasswordToggle
          />
        </div>
      </div>

      <div>
        <h3 className="text-foreground-primary text-lg font-medium mb-4">With Prefix/Suffix</h3>
        <div className="space-y-4">
          <Input 
            prefix="$"
            label="Price" 
            type="number" 
            placeholder="0.00"
          />
          
          <Input 
            suffix=".com"
            label="Website" 
            placeholder="yourdomain"
          />
          
          <Input 
            prefix="+"
            label="Phone Number" 
            type="tel" 
            placeholder="1 123 456 7890"
          />
          
          <Input 
            prefix="@"
            label="Twitter Handle" 
            placeholder="username"
          />
        </div>
      </div>

      <div>
        <h3 className="text-foreground-primary text-lg font-medium mb-4">States</h3>
        <div className="space-y-4">
          <Input 
            label="Error State" 
            placeholder="Invalid input" 
            error="This field is required"
            value="johndoe"
          />
          
          <Input 
            label="Success State" 
            placeholder="Valid input" 
            success="Looks good!"
            value="john.doe@example.com"
          />
          
          <Input 
            label="Disabled State" 
            placeholder="Cannot be edited" 
            disabled
            value="Disabled input"
          />
        </div>
      </div>

      <div>
        <h3 className="text-foreground-primary text-lg font-medium mb-4">Input Types</h3>
        <div className="space-y-4">
          <Input 
            type="email"
            label="Email" 
            placeholder="user@example.com"
            leftIcon={<Mail size={16} />}
          />
          
          <Input 
            type="password"
            label="Password" 
            placeholder="Enter password"
            leftIcon={<Lock size={16} />}
          />
          
          <Input 
            type="number"
            label="Age" 
            placeholder="Enter your age"
          />
          
          <Input 
            type="date"
            label="Birth Date" 
            leftIcon={<Calendar size={16} />}
          />
        </div>
      </div>
    </div>
  </ThemeProvider>
);

// Tech Dark Theme
export const TechDarkTheme = () => (
  <ThemeProvider theme="techDark">
    <div className="space-y-10 max-w-md">
      <div>
        <h3 className="text-foreground-primary text-lg font-medium mb-4">Input Variants</h3>
        <div className="space-y-4">
          <Input 
            variant="default"
            label="Default Input" 
            placeholder="Default variant" 
          />
          
          <Input 
            variant="filled" 
            label="Filled Input (Tech Dark Default)" 
            placeholder="Filled variant" 
          />
          
          <Input 
            variant="outline" 
            label="Outline Input" 
            placeholder="Outline variant" 
          />
          
          <Input 
            variant="underline" 
            label="Underline Input" 
            placeholder="Underline variant" 
          />
          
          <Input 
            variant="modern" 
            label="Modern Input" 
            placeholder="Modern style" 
          />
          
          <Input 
            variant="neumorphic-dark" 
            label="Neumorphic Dark" 
            placeholder="Inset shadows for depth" 
          />
        </div>
      </div>

      <div>
        <h3 className="text-foreground-primary text-lg font-medium mb-4">Glowing Inputs</h3>
        <div className="space-y-4">
          <Input 
            effect="glow"
            label="Blue Glow" 
            placeholder="Focus to see blue glow"
          />
          
          <Input 
            effect="purple-glow"
            label="Purple Glow" 
            placeholder="Focus to see purple glow"
          />
          
          <Input 
            effect="cyan-glow"
            label="Cyan Glow" 
            placeholder="Focus to see cyan glow"
          />
          
          <Input 
            effect="multi-glow"
            label="Multi Glow" 
            placeholder="Focus to see multi-color glow"
          />
        </div>
      </div>
      
      <div>
        <h3 className="text-foreground-primary text-lg font-medium mb-4">Modern Search Fields</h3>
        <div className="space-y-4">
          <Input 
            leftIcon={<Search size={16} />}
            placeholder="Search..." 
            variant="filled"
            rounded="full"
            effect="glow"
            clearable
          />
          
          <Input 
            leftIcon={<Search size={16} />}
            placeholder="Search documents..." 
            variant="modern"
            rounded="lg"
            effect="purple-glow"
            clearable
          />
          
          <Input 
            leftIcon={<Search size={16} />}
            rightIcon={<Settings size={16} />}
            placeholder="Advanced search..." 
            variant="outline"
            rounded="lg"
            effect="focus-ring"
          />
        </div>
      </div>

      <div>
        <h3 className="text-foreground-primary text-lg font-medium mb-4">Interactive Effects</h3>
        <div className="space-y-4">
          <Input 
            effect="float"
            label="Float Effect" 
            placeholder="Focus to see float animation"
            leftIcon={<User size={16} />}
          />
          
          <Input 
            effect="scale"
            label="Scale Effect" 
            placeholder="Focus to see scale animation"
            leftIcon={<Mail size={16} />}
          />
          
          <Input 
            effect="shimmer"
            label="Shimmer Effect" 
            placeholder="Focus to see shimmer effect"
            leftIcon={<Globe size={16} />}
          />
        </div>
      </div>

      <div>
        <h3 className="text-foreground-primary text-lg font-medium mb-4">Advanced Form Fields</h3>
        <div className="space-y-4">
          <Input 
            variant="material"
            floatingLabel
            label="Username"
            placeholder=""
            leftIcon={<User size={16} />}
          />
          
          <Input 
            variant="material"
            floatingLabel
            label="Email Address"
            placeholder=""
            leftIcon={<Mail size={16} />}
            type="email"
          />
          
          <Input 
            variant="material"
            floatingLabel
            label="Password"
            placeholder=""
            leftIcon={<Lock size={16} />}
            type="password"
          />
          
          <div className="flex items-center justify-between mt-2 text-sm">
            <label className="flex items-center text-foreground-secondary">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            
            <a href="#" className="text-primary-light hover:text-primary-lighter">Forgot password?</a>
          </div>
          
          <button className="w-full bg-primary-base hover:bg-primary-dark text-white font-medium rounded-lg p-2.5 mt-2">
            Sign In
          </button>
        </div>
      </div>
    </div>
  </ThemeProvider>
);

// Glass Theme
export const GlassTheme = () => (
  <div className="bg-gradient-to-br from-blue-900 to-purple-900 p-8 rounded-lg">
    <ThemeProvider theme="glass">
      <div className="space-y-10 max-w-md">
        <div>
          <h3 className="text-foreground-primary text-lg font-medium mb-4">Glassmorphism Variants</h3>
          <div className="space-y-4">
            <Input 
              variant="glass"
              label="Basic Glass Input" 
              placeholder="Standard glass effect" 
            />
            
            <Input 
              variant="glass-premium"
              label="Premium Glass (Default)" 
              placeholder="Enhanced blur effect" 
            />
            
            <Input 
              variant="glass-frost"
              label="Frosted Glass" 
              placeholder="Higher opacity effect" 
            />
            
            <Input 
              variant="glass-dark"
              label="Dark Glass" 
              placeholder="Darker background"  
            />
            
            <Input 
              variant="glass-gradient"
              label="Gradient Glass" 
              placeholder="Subtle gradient background" 
            />
          </div>
        </div>

        <div>
          <h3 className="text-foreground-primary text-lg font-medium mb-4">Glass with Effects</h3>
          <div className="space-y-4">
            <Input 
              variant="glass-premium"
              effect="glow"
              label="Glass with Glow" 
              placeholder="Focus for glow effect" 
            />
            
            <Input 
              variant="glass-frost"
              effect="purple-glow"
              label="Frost with Purple Glow" 
              placeholder="Focus for purple glow" 
            />
            
            <Input 
              variant="glass-dark"
              effect="shimmer"
              label="Dark Glass with Shimmer" 
              placeholder="Focus for shimmer effect" 
            />
            
            <Input 
              variant="glass-gradient"
              effect="float"
              label="Gradient with Float" 
              placeholder="Focus for float animation" 
            />
          </div>
        </div>

        <div>
          <h3 className="text-foreground-primary text-lg font-medium mb-4">Full Glass Login Form</h3>
          <div className="p-8 backdrop-blur-xl bg-white/5 border border-white/20 rounded-xl space-y-5">
            <h4 className="text-xl font-semibold text-center text-white mb-6">Account Login</h4>
            
            <Input 
              variant="glass-premium"
              leftIcon={<Mail size={16} />}
              label="Email Address" 
              type="email" 
              placeholder="your@email.com" 
              effect="glow"
            />
            
            <Input 
              variant="glass-premium"
              leftIcon={<Lock size={16} />}
              label="Password" 
              type="password" 
              placeholder="Enter your password" 
              effect="glow"
            />
            
            <div className="flex items-center justify-between mt-2 text-sm">
              <label className="flex items-center text-foreground-secondary">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              
              <a href="#" className="text-primary-light hover:text-primary-lighter">Forgot password?</a>
            </div>
            
            <button className="w-full bg-primary-base hover:bg-primary-dark text-white font-medium rounded-lg p-2.5 mt-6">
              Sign In
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-foreground-primary text-lg font-medium mb-4">Glass Payment Form</h3>
          <div className="space-y-4">
            <div className="p-6 backdrop-blur-xl bg-white/5 border border-white/20 rounded-xl space-y-4">
              <h4 className="text-lg font-medium text-white mb-2">Payment Details</h4>
              
              <Input 
                variant="glass-premium"
                leftIcon={<CreditCard size={16} />}
                label="Card Number" 
                placeholder="1234 5678 9012 3456"
                effect="glow"
              />
              
              <div className="grid grid-cols-2 gap-4">
                <Input 
                  variant="glass-premium"
                  label="Expiry Date" 
                  placeholder="MM/YY"
                />
                
                <Input 
                  variant="glass-premium"
                  label="CVC" 
                  placeholder="123"
                />
              </div>
              
              <Input 
                variant="glass-premium"
                label="Cardholder Name" 
                placeholder="Name on card"
                leftIcon={<User size={16} />}
              />
              
              <button className="w-full bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg p-2.5 mt-2 backdrop-blur-sm border border-white/20">
                Complete Payment
              </button>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-foreground-primary text-lg font-medium mb-4">Floating Label Glass Fields</h3>
          <div className="space-y-4">
            <Input 
              variant="glass-premium"
              floatingLabel
              label="Name"
              placeholder=""
            />
            
            <Input 
              variant="glass-premium"
              floatingLabel
              label="Email"
              placeholder=""
              type="email"
            />
            
            <Input 
              variant="glass-frost"
              floatingLabel
              label="Message"
              placeholder=""
              effect="purple-glow"
            />
          </div>
        </div>
      </div>
    </ThemeProvider>
  </div>
);

// Floating Label Showcase
export const FloatingLabelInputs = () => (
  <ThemeProvider theme="techDark">
    <div className="space-y-8 max-w-md">
      <h3 className="text-foreground-primary text-lg font-medium mb-4">Floating Label Examples</h3>
      <div className="space-y-6">
        <Input 
          variant="default"
          floatingLabel
          label="Username"
          placeholder=""
        />
        
        <Input 
          variant="filled"
          floatingLabel
          label="Email Address"
          placeholder=""
          type="email"
        />
        
        <Input 
          variant="outline"
          floatingLabel
          label="Password"
          placeholder=""
          type="password"
        />
        
        <Input 
          variant="material"
          floatingLabel
          label="Website"
          placeholder=""
          type="url"
        />
        
        <Input 
          variant="modern"
          floatingLabel
          label="Phone Number"
          placeholder=""
          type="tel"
        />
        
        <div className="bg-gradient-to-r from-blue-900 to-purple-900 p-6 rounded-lg">
          <Input 
            variant="glass-premium"
            floatingLabel
            label="Message"
            placeholder=""
            effect="glow"
          />
        </div>
      </div>
    </div>
  </ThemeProvider>
);

// Form Validation Examples
export const ValidationStates = () => (
  <ThemeProvider theme="enterprise">
    <div className="space-y-8 max-w-md">
      <h3 className="text-foreground-primary text-lg font-medium mb-4">Form Validation States</h3>
      <div className="space-y-4 p-6 border border-border rounded-lg">
        <h4 className="text-lg font-medium mb-4">Registration Form</h4>
        
        <Input 
          label="Username" 
          placeholder="Choose a username"
          error="Username must be at least 3 characters"
          value="jo"
          leftIcon={<User size={16} />}
        />
        
        <Input 
          label="Email Address" 
          type="email" 
          placeholder="your@email.com"
          success="Email format is valid"
          value="john.doe@example.com"
          leftIcon={<Mail size={16} />}
        />
        
        <Input 
          label="Password" 
          type="password" 
          placeholder="Create a password"
          error="Password must include a number and special character"
          value="weakpassword"
          leftIcon={<Lock size={16} />}
        />
        
        <Input 
          label="Confirm Password" 
          type="password" 
          placeholder="Confirm your password"
          error="Passwords do not match"
          value="differentpassword"
          leftIcon={<Lock size={16} />}
        />
        
        <Input 
          label="Phone Number (Optional)" 
          type="tel" 
          placeholder="Enter your phone number"
          leftIcon={<Phone size={16} />}
        />
        
        <div className="mt-4">
          <button className="bg-primary-base text-white px-4 py-2 rounded-md mr-2">Register</button>
          <button className="border border-border px-4 py-2 rounded-md">Cancel</button>
        </div>
      </div>
    </div>
  </ThemeProvider>
);

// Advanced Input Features
export const AdvancedFeatures = () => (
  <ThemeProvider theme="techDark">
    <div className="space-y-8 max-w-md">
      <h3 className="text-foreground-primary text-lg font-medium mb-4">Advanced Input Features</h3>
      
      <div>
        <h4 className="text-foreground-primary text-md font-medium mb-3">Clearable Inputs</h4>
        <div className="space-y-4">
          <Input 
            clearable
            label="Search Query" 
            placeholder="Type to see clear button"
            leftIcon={<Search size={16} />}
          />
          
          <Input 
            clearable
            variant="filled"
            rounded="full"
            placeholder="Search documents..."
            leftIcon={<Search size={16} />}
          />
          
          <Input 
            clearable
            variant="modern"
            label="Email" 
            placeholder="Enter email to clear"
            leftIcon={<Mail size={16} />}
            value="example@domain.com"
          />
        </div>
      </div>
      
      <div>
        <h4 className="text-foreground-primary text-md font-medium mb-3">Password Field Options</h4>
        <div className="space-y-4">
          <Input 
            type="password"
            label="Standard Password" 
            placeholder="With toggle visibility"
            leftIcon={<Lock size={16} />}
            showPasswordToggle={true}
          />
          
          <Input 
            type="password"
            label="No Toggle Password" 
            placeholder="Without visibility toggle"
            leftIcon={<Lock size={16} />}
            showPasswordToggle={false}
          />
          
          <Input 
            type="password"
            variant="glass-premium"
            label="Glassmorphic Password" 
            placeholder="With toggle and effect"
            leftIcon={<Lock size={16} />}
            effect="glow"
            className="bg-gradient-to-r from-blue-900 to-purple-900"
          />
        </div>
      </div>
      
      <div>
        <h4 className="text-foreground-primary text-md font-medium mb-3">Specialized Input Types</h4>
        <div className="space-y-4">
          <Input 
            type="search"
            label="Search Input" 
            placeholder="Native search type"
            leftIcon={<Search size={16} />}
            clearable
          />
          
          <Input 
            type="url"
            label="URL Input" 
            placeholder="https://example.com"
            leftIcon={<Link size={16} />}
          />
          
          <Input 
            type="number"
            label="Quantity" 
            placeholder="Enter amount"
            leftIcon={<Hash size={16} />}
          />
          
          <Input 
            type="date"
            label="Date Picker" 
            leftIcon={<Calendar size={16} />}
          />
        </div>
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
        <div className="flex flex-col gap-4 p-6 bg-background-primary rounded-lg max-w-md">
          <Input 
            label="Username" 
            placeholder="Enter your username"
            leftIcon={<User size={16} />}
          />
          
          <Input 
            label="Email Address" 
            type="email" 
            placeholder="your@email.com"
            leftIcon={<AtSign size={16} />}
          />
          
          <Input 
            label="Password" 
            type="password" 
            placeholder="Enter your password"
            leftIcon={<Lock size={16} />}
          />
        </div>
      </ThemeProvider>
    </div>
    
    <div>
      <h3 className="text-xl font-bold mb-4">Glass Theme</h3>
      <div className="bg-gradient-to-br from-blue-900 to-purple-900 p-2 rounded-lg">
        <ThemeProvider theme="glass">
          <div className="flex flex-col gap-4 p-6 backdrop-blur-md bg-white/10 rounded-lg max-w-md">
            <Input 
              label="Username" 
              placeholder="Enter your username"
              leftIcon={<User size={16} />}
            />
            
            <Input 
              label="Email Address" 
              type="email" 
              placeholder="your@email.com"
              leftIcon={<AtSign size={16} />}
            />
            
            <Input 
              label="Password" 
              type="password" 
              placeholder="Enter your password"
              leftIcon={<Lock size={16} />}
            />
          </div>
        </ThemeProvider>
      </div>
    </div>
  </div>
);

// Different Input Variants Side by Side
export const VariantComparison = () => (
  <ThemeProvider theme="techDark">
    <div className="space-y-8">
      <h3 className="text-foreground-primary text-lg font-medium mb-4">Input Variant Comparison</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-foreground-primary text-md font-medium mb-3">Standard Variants</h4>
          <div className="space-y-4">
            <Input 
              variant="default"
              label="Default Variant" 
              placeholder="Standard input"
            />
            
            <Input 
              variant="filled"
              label="Filled Variant" 
              placeholder="Filled background"
            />
            
            <Input 
              variant="outline"
              label="Outline Variant" 
              placeholder="Transparent with border"
            />
            
            <Input 
              variant="underline"
              label="Underline Variant" 
              placeholder="Bottom border only"
            />
          </div>
        </div>
        
        <div>
          <h4 className="text-foreground-primary text-md font-medium mb-3">Modern Variants</h4>
          <div className="space-y-4">
            <Input 
              variant="modern"
              label="Modern Variant" 
              placeholder="Minimalist style"
            />
            
            <Input 
              variant="material"
              label="Material Variant" 
              placeholder="Material Design inspired"
            />
            
            <Input 
              variant="neumorphic-light"
              label="Neumorphic Light" 
              placeholder="Soft UI - light"
            />
            
            <Input 
              variant="neumorphic-dark"
              label="Neumorphic Dark" 
              placeholder="Soft UI - dark"
            />
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-blue-800 to-purple-800 p-6 rounded-lg">
          <h4 className="text-white text-md font-medium mb-3">Glass Variants</h4>
          <div className="space-y-4">
            <Input 
              variant="glass"
              label="Glass Variant" 
              placeholder="Basic glass effect"
            />
            
            <Input 
              variant="glass-premium"
              label="Premium Glass" 
              placeholder="Enhanced glassmorphism"
            />
            
            <Input 
              variant="glass-frost"
              label="Frosted Glass" 
              placeholder="Frosted effect"
            />
            
            <Input 
              variant="glass-dark"
              label="Dark Glass" 
              placeholder="Darker glass effect"
            />
          </div>
        </div>
      </div>
    </div>
  </ThemeProvider>
);

// All Effects Showcase
export const EffectsShowcase = () => (
  <ThemeProvider theme="techDark">
    <div className="space-y-8">
      <h3 className="text-foreground-primary text-lg font-medium mb-4">Input Effects Showcase</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-foreground-primary text-md font-medium mb-3">Glow Effects</h4>
          <div className="space-y-4">
            <Input 
              effect="glow"
              label="Blue Glow" 
              placeholder="Focus to see blue glow"
            />
            
            <Input 
              effect="purple-glow"
              label="Purple Glow" 
              placeholder="Focus to see purple glow"
            />
            
            <Input 
              effect="cyan-glow"
              label="Cyan Glow" 
              placeholder="Focus to see cyan glow"
            />
            
            <Input 
              effect="multi-glow"
              label="Multi Glow" 
              placeholder="Focus to see rainbow glow"
            />
          </div>
        </div>
        
        <div>
          <h4 className="text-foreground-primary text-md font-medium mb-3">Border Effects</h4>
          <div className="space-y-4">
            <Input 
              effect="gradientBorder"
              label="Gradient Border" 
              placeholder="With gradient border"
            />
            
            <Input 
              effect="rainbowBorder"
              label="Rainbow Border" 
              placeholder="With rainbow border"
            />
            
            <Input 
              effect="focus-ring"
              label="Focus Ring" 
              placeholder="With offset focus ring"
            />
          </div>
        </div>
        
        <div>
          <h4 className="text-foreground-primary text-md font-medium mb-3">Animation Effects</h4>
          <div className="space-y-4">
            <Input 
              effect="float"
              label="Float Effect" 
              placeholder="Focus to see float animation"
            />
            
            <Input 
              effect="scale"
              label="Scale Effect" 
              placeholder="Focus to see scale animation"
            />
            
            <Input 
              effect="shimmer"
              label="Shimmer Effect" 
              placeholder="Focus to see shimmer animation"
            />
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg">
          <h4 className="text-white text-md font-medium mb-3">Glass with Effects</h4>
          <div className="space-y-4">
            <Input 
              variant="glass-premium"
              effect="glow"
              label="Glass + Glow" 
              placeholder="Combined effects"
            />
            
            <Input 
              variant="glass-frost"
              effect="shimmer"
              label="Glass + Shimmer" 
              placeholder="Combined effects"
            />
            
            <Input 
              variant="glass-dark"
              effect="float"
              label="Glass + Float" 
              placeholder="Combined effects"
            />
          </div>
        </div>
      </div>
    </div>
  </ThemeProvider>
);

// Form Patterns
export const FormPatterns = () => (
  <ThemeProvider theme="enterprise">
    <div className="space-y-10">
      <h3 className="text-foreground-primary text-lg font-medium mb-4">Common Form Patterns</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 border border-border rounded-lg">
          <h4 className="text-lg font-medium mb-4">Login Form</h4>
          <div className="space-y-4">
            <Input 
              label="Email or Username" 
              placeholder="Enter your email or username"
              leftIcon={<User size={16} />}
            />
            
            <Input 
              label="Password" 
              type="password" 
              placeholder="Enter your password"
              leftIcon={<Lock size={16} />}
            />
            
            <div className="flex items-center justify-between mt-2 text-sm">
              <label className="flex items-center text-foreground-secondary">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              
              <a href="#" className="text-primary-base hover:text-primary-dark">Forgot password?</a>
            </div>
            
            <button className="w-full bg-primary-base hover:bg-primary-dark text-white font-medium rounded-md p-2.5 mt-2">
              Sign In
            </button>
          </div>
        </div>
        
        <div className="p-6 border border-border rounded-lg">
          <h4 className="text-lg font-medium mb-4">Contact Form</h4>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Input 
                label="First Name" 
                placeholder="John"
              />
              
              <Input 
                label="Last Name" 
                placeholder="Doe"
              />
            </div>
            
            <Input 
              label="Email Address" 
              type="email" 
              placeholder="your@email.com"
              leftIcon={<Mail size={16} />}
            />
            
            <Input 
              label="Phone Number" 
              type="tel" 
              placeholder="+1 (123) 456-7890"
              leftIcon={<Phone size={16} />}
            />
            
            <div>
              <label className="block text-foreground-secondary text-sm font-medium mb-1">
                Message
              </label>
              <textarea 
                className="w-full bg-background-secondary border border-border rounded-md p-3 focus:outline-none focus:border-border-focus"
                rows="4"
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            <button className="bg-primary-base hover:bg-primary-dark text-white font-medium rounded-md px-4 py-2">
              Send Message
            </button>
          </div>
        </div>
        
        <div className="p-6 border border-border rounded-lg">
          <h4 className="text-lg font-medium mb-4">Payment Information</h4>
          <div className="space-y-4">
            <Input 
              label="Card Number" 
              placeholder="1234 5678 9012 3456"
              leftIcon={<CreditCard size={16} />}
            />
            
            <div className="grid grid-cols-2 gap-4">
              <Input 
                label="Expiration Date" 
                placeholder="MM/YY"
              />
              
              <Input 
                label="CVC" 
                placeholder="123"
                helperText="3-digit code on back"
              />
            </div>
            
            <Input 
              label="Cardholder Name" 
              placeholder="Name as it appears on card"
              leftIcon={<User size={16} />}
            />
            
            <div className="grid grid-cols-2 gap-4">
              <Input 
                label="Postal Code" 
                placeholder="90210"
                leftIcon={<MapPin size={16} />}
              />
              
              <Input 
                label="Country" 
                placeholder="United States"
                leftIcon={<Globe size={16} />}
              />
            </div>
            
            <button className="w-full bg-primary-base hover:bg-primary-dark text-white font-medium rounded-md p-2.5">
              Pay Now
            </button>
          </div>
        </div>
        
        <div className="p-6 border border-border rounded-lg">
          <h4 className="text-lg font-medium mb-4">Search Filters</h4>
          <div className="space-y-4">
            <Input 
              placeholder="Search..."
              leftIcon={<Search size={16} />}
              variant="filled"
              rounded="full"
              clearable
            />
            
            <div className="grid grid-cols-2 gap-4">
              <Input 
                label="Min Price" 
                type="number"
                placeholder="0"
                prefix="$"
              />
              
              <Input 
                label="Max Price" 
                type="number"
                placeholder="1000"
                prefix="$"
              />
            </div>
            
            <Input 
              label="Location" 
              placeholder="Enter city or zip code"
              leftIcon={<MapPin size={16} />}
            />
            
            <div className="grid grid-cols-2 gap-4">
              <Input 
                label="From Date" 
                type="date"
                leftIcon={<Calendar size={16} />}
              />
              
              <Input 
                label="To Date" 
                type="date"
                leftIcon={<Calendar size={16} />}
              />
            </div>
            
            <div className="flex items-center gap-2 mt-2">
              <button className="bg-background-tertiary hover:bg-background-secondary text-foreground-primary font-medium rounded-md px-4 py-2">
                Reset
              </button>
              
              <button className="bg-primary-base hover:bg-primary-dark text-white font-medium rounded-md px-4 py-2 ml-2">
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ThemeProvider>
);