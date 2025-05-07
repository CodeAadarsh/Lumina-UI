import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { Search, Mail, Lock, User, AlertCircle } from 'lucide-react';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'filled', 'underline'],
    },
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'tel'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Input variant="default" placeholder="Default input" />
      <Input variant="filled" placeholder="Filled input" />
      <Input variant="underline" placeholder="Underline input" />
    </div>
  ),
};

export const WithLabels: Story = {
  render: () => (
    <div className="space-y-4">
      <Input label="Email" type="email" placeholder="Enter your email" />
      <Input label="Password" type="password" placeholder="Enter your password" />
      <Input label="Username" placeholder="Enter your username" required />
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="space-y-4">
      <Input leftIcon={<Search className="h-4 w-4" />} placeholder="Search..." />
      <Input leftIcon={<Mail className="h-4 w-4" />} type="email" placeholder="Email address" />
      <Input leftIcon={<User className="h-4 w-4" />} placeholder="Username" />
      <Input type="password" placeholder="Password" />
    </div>
  ),
};

export const WithErrors: Story = {
  render: () => (
    <div className="space-y-4">
      <Input 
        label="Email" 
        type="email" 
        error="Invalid email address" 
        defaultValue="invalidemail"
      />
      <Input 
        label="Password" 
        type="password" 
        error="Password must be at least 8 characters" 
      />
      <Input 
        label="Username" 
        error="Username already taken" 
        defaultValue="admin"
      />
    </div>
  ),
};

export const WithSuccess: Story = {
  render: () => (
    <div className="space-y-4">
      <Input 
        label="Email" 
        type="email" 
        success="Email is available" 
        defaultValue="user@example.com"
      />
      <Input 
        label="Username" 
        success="Username is available" 
        defaultValue="newuser"
      />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="space-y-4">
      <Input disabled placeholder="Disabled input" defaultValue="Can't edit this" />
      <Input disabled label="Disabled with label" placeholder="Enter value" />
    </div>
  ),
};