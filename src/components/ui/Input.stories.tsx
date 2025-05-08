import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Input from './Input'; // Using default import
import { Mail, Lock, User, DollarSign, Search, Eye, Bell, Calendar } from 'lucide-react';
import { ThemeProvider } from '../../providers/ThemeProvider';

// Define the meta information for the component
const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile input component with various styles, states, and features.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    // Appearance props
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
      description: 'Visual style variant of the input'
    },
    padding: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Internal padding of the input'
    },
    rounded: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', 'full'],
      description: 'Border radius of the input'
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
      description: 'Special effect to apply on focus'
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size (height) of the input'
    },
    
    // Functional props
    type: {
      control: 'select',
      options: [
        'text',
        'password',
        'email',
        'number',
        'tel',
        'url',
        'search',
        'date',
        'time',
        'datetime-local',
        'month',
        'week',
        'color'
      ],
      description: 'HTML input type'
    },
    label: {
      control: 'text',
      description: 'Label text for the input'
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text'
    },
    helperText: {
      control: 'text',
      description: 'Helper text displayed below the input'
    },
    error: {
      control: 'text',
      description: 'Error message (also sets error state)'
    },
    success: {
      control: 'text',
      description: 'Success message (also sets success state)'
    },
    prefix: {
      control: 'text',
      description: 'Text prefix displayed inside the input'
    },
    suffix: {
      control: 'text',
      description: 'Text suffix displayed inside the input'
    },
    leftIcon: {
      control: 'boolean',
      description: 'Show a demo icon on the left'
    },
    rightIcon: {
      control: 'boolean',
      description: 'Show a demo icon on the right'
    },
    fullWidth: {
      control: 'boolean',
      description: 'Make the input take full width of container'
    },
    floatingLabel: {
      control: 'boolean',
      description: 'Enable floating label animation'
    },
    clearable: {
      control: 'boolean',
      description: 'Show clear button when input has value'
    },
    showPasswordToggle: {
      control: 'boolean',
      description: 'Show password toggle for password inputs'
    },
    animated: {
      control: 'boolean',
      description: 'Enable animations'
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the input'
    },
    required: {
      control: 'boolean',
      description: 'Mark the input as required'
    },
    autoFocus: {
      control: 'boolean',
      description: 'Autofocus the input on mount'
    }
  },
  args: {
    // Default values
    label: 'Label',
    placeholder: 'Placeholder',
    type: 'text',
    variant: 'default',
    padding: 'md',
    rounded: 'md',
    effect: 'none',
    size: 'md',
    fullWidth: true,
    floatingLabel: false,
    clearable: false,
    showPasswordToggle: true,
    animated: true,
    disabled: false,
    required: false,
    autoFocus: false,
    leftIcon: false,
    rightIcon: false
  },
  // Wrap all stories with the ThemeProvider
  decorators: [
    (Story) => (
      <ThemeProvider initialTheme="default">
        <div style={{ width: '320px' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ]
};

export default meta;
type Story = StoryObj<typeof Input>;

// Define the stories
// Basic
export const Default: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
  },
};

// With left icon
export const WithLeftIcon: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
    leftIcon: true
  },
  render: (args) => (
    <Input 
      {...args} 
      leftIcon={<Mail size={18} />}
    />
  ),
};

// With right icon
export const WithRightIcon: Story = {
  args: {
    label: 'Notification',
    placeholder: 'Set notification preferences',
    rightIcon: true
  },
  render: (args) => (
    <Input 
      {...args} 
      rightIcon={<Bell size={18} />}
    />
  ),
};

// Password input
export const Password: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
    leftIcon: true
  },
  render: (args) => (
    <Input 
      {...args} 
      leftIcon={<Lock size={18} />}
    />
  ),
};

// With error state
export const Error: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
    error: 'Please enter a valid email address',
    leftIcon: true
  },
  render: (args) => (
    <Input 
      {...args} 
      leftIcon={<Mail size={18} />}
    />
  ),
};

// With success state
export const Success: Story = {
  args: {
    label: 'Username',
    placeholder: 'Choose a username',
    success: 'Username is available',
    leftIcon: true
  },
  render: (args) => (
    <Input 
      {...args} 
      leftIcon={<User size={18} />}
    />
  ),
};

// With helper text
export const WithHelperText: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter a strong password',
    type: 'password',
    helperText: 'Password must be at least 8 characters long',
    leftIcon: true
  },
  render: (args) => (
    <Input 
      {...args} 
      leftIcon={<Lock size={18} />}
    />
  ),
};

// With prefix and suffix
export const WithPrefixSuffix: Story = {
  args: {
    label: 'Amount',
    placeholder: '0.00',
    type: 'number',
    prefix: '$',
    suffix: 'USD'
  },
};

// Floating label
export const FloatingLabel: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    floatingLabel: true,
    leftIcon: true
  },
  render: (args) => (
    <Input 
      {...args} 
      leftIcon={<Search size={18} />}
    />
  ),
};

// Clearable input
export const Clearable: Story = {
  args: {
    label: 'Search',
    placeholder: 'Type something and clear it',
    clearable: true,
    leftIcon: true,
    defaultValue: 'Clearable text'
  },
  render: (args) => (
    <Input 
      {...args} 
      leftIcon={<Search size={18} />}
    />
  ),
};

// Disabled input
export const Disabled: Story = {
  args: {
    label: 'Username',
    placeholder: 'This input is disabled',
    disabled: true
  },
};

// Special effect - Glow
export const GlowEffect: Story = {
  args: {
    label: 'Search with glow effect',
    placeholder: 'Focus to see the glow',
    effect: 'glow'
  },
};

// Special effect - Shimmer
export const ShimmerEffect: Story = {
  args: {
    label: 'Shimmer effect',
    placeholder: 'Focus to see the shimmer',
    effect: 'shimmer'
  },
};

// Filled variant
export const FilledVariant: Story = {
  args: {
    label: 'Filled input',
    placeholder: 'Enter text here',
    variant: 'filled'
  },
};

// Outline variant
export const OutlineVariant: Story = {
  args: {
    label: 'Outline input',
    placeholder: 'Enter text here',
    variant: 'outline'
  },
};

// Glass variant
export const GlassVariant: Story = {
  args: {
    label: 'Glass input',
    placeholder: 'Enter text here',
    variant: 'glass'
  },
  decorators: [
    (Story) => (
      <ThemeProvider initialTheme="glass">
        <div style={{ 
          width: '320px', 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '24px',
          borderRadius: '12px' 
        }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ]
};

// Glass Premium variant
export const GlassPremiumVariant: Story = {
  args: {
    label: 'Premium Glass',
    placeholder: 'Enter text here',
    variant: 'glass-premium',
    effect: 'glow'
  },
  decorators: [
    (Story) => (
      <ThemeProvider initialTheme="glass">
        <div style={{ 
          width: '320px', 
          background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)',
          padding: '24px',
          borderRadius: '12px' 
        }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ]
};

// Material variant
export const MaterialVariant: Story = {
  args: {
    label: 'Material Design',
    placeholder: 'Enter text here',
    variant: 'material'
  },
};

// Neumorphic Light variant
export const NeumorphicLightVariant: Story = {
  args: {
    label: 'Neumorphic Light',
    placeholder: 'Enter text here',
    variant: 'neumorphic-light',
    labelClassName: 'text-gray-700'
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div style={{ 
          width: '320px', 
          background: '#e0e5ec',
          padding: '24px',
          borderRadius: '12px' 
        }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ]
};

// Neumorphic Dark variant
export const NeumorphicDarkVariant: Story = {
  args: {
    label: 'Neumorphic Dark',
    placeholder: 'Enter text here',
    variant: 'neumorphic-dark',
    labelClassName: 'text-gray-100'
  },
  decorators: [
    (Story) => (
      <ThemeProvider initialTheme="dark">
        <div style={{ 
          width: '320px', 
          background: '#2a2d3e',
          padding: '24px',
          borderRadius: '12px' 
        }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ]
};

// Date input
export const DateInput: Story = {
  args: {
    label: 'Date',
    type: 'date',
    leftIcon: true
  },
  render: (args) => (
    <Input 
      {...args} 
      leftIcon={<Calendar size={18} />}
    />
  ),
};

// Full rounded
export const FullRounded: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    rounded: 'full',
    leftIcon: true
  },
  render: (args) => (
    <Input 
      {...args} 
      leftIcon={<Search size={18} />}
    />
  ),
};

// Tech Dark Theme
export const TechDarkTheme: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
  },
  decorators: [
    (Story) => (
      <ThemeProvider initialTheme="techDark">
        <div style={{ 
          width: '320px', 
          background: '#1a202c',
          padding: '24px',
          borderRadius: '12px' 
        }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ]
};

// Sizes showcase
export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Input 
        label="Extra Small"
        placeholder="Size XS"
        size="xs"
      />
      <Input 
        label="Small"
        placeholder="Size SM" 
        size="sm"
      />
      <Input 
        label="Medium (default)"
        placeholder="Size MD"
        size="md"
      />
      <Input 
        label="Large"
        placeholder="Size LG"
        size="lg"
      />
      <Input 
        label="Extra Large"
        placeholder="Size XL"
        size="xl"
      />
    </div>
  ),
};

// Form example
export const FormExample: Story = {
  render: () => (
    <form className="space-y-4">
      <Input 
        label="Username"
        placeholder="Enter your username"
        leftIcon={<User size={18} />}
        required
      />
      <Input 
        label="Email"
        placeholder="Enter your email"
        type="email"
        leftIcon={<Mail size={18} />}
        required
      />
      <Input 
        label="Password"
        placeholder="Enter your password"
        type="password"
        leftIcon={<Lock size={18} />}
        helperText="Password must be at least 8 characters"
        required
      />
      <button 
        type="submit" 
        className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Submit
      </button>
    </form>
  ),
};