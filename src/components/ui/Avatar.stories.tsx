import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'UI/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Avatar component that displays user images with fallback options.'
      }
    }
  },
  argTypes: {
    src: {
      control: 'text',
      description: 'Image source URL'
    },
    alt: {
      control: 'text',
      description: 'Alternative text for image'
    },
    fallback: {
      control: 'text',
      description: 'Text to display when image fails to load (first two characters will be shown)'
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the avatar'
    },
    rounded: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'full'],
      description: 'Border radius style'
    },
    variant: {
      control: 'select',
      options: ['default', 'gradient', 'bordered'],
      description: 'Visual style variant'
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Avatar>;

// Base Avatar with Image
export const Default: Story = {
  args: {
    src: 'https://i.pravatar.cc/300',
    alt: 'User avatar',
    size: 'md',
    rounded: 'full',
    variant: 'default'
  },
  parameters: {
    docs: {
      description: {
        story: 'Default avatar with an image.'
      }
    }
  }
};

// Avatar with fallback text
export const WithFallback: Story = {
  args: {
    fallback: 'JD',
    size: 'md',
    rounded: 'full',
    variant: 'default'
  },
  parameters: {
    docs: {
      description: {
        story: 'Avatar with fallback text when no image is provided.'
      }
    }
  }
};

// Avatar with gradient variant
export const GradientVariant: Story = {
  args: {
    fallback: 'AB',
    size: 'md',
    rounded: 'full',
    variant: 'gradient'
  },
  parameters: {
    docs: {
      description: {
        story: 'Avatar with a gradient background.'
      }
    }
  }
};

// Avatar with border
export const BorderedVariant: Story = {
  args: {
    src: 'https://i.pravatar.cc/300',
    alt: 'User avatar',
    size: 'md',
    rounded: 'full',
    variant: 'bordered'
  },
  parameters: {
    docs: {
      description: {
        story: 'Avatar with a border.'
      }
    }
  }
};

// Different sizes showcase
export const SizesShowcase: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <Avatar size="xs" fallback="XS" />
      <Avatar size="sm" fallback="SM" />
      <Avatar size="md" fallback="MD" />
      <Avatar size="lg" fallback="LG" />
      <Avatar size="xl" fallback="XL" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different size variants of the Avatar component.'
      }
    }
  }
};

// Different rounded styles showcase
export const RoundedStylesShowcase: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar rounded="none" fallback="NO" />
      <Avatar rounded="sm" fallback="SM" />
      <Avatar rounded="md" fallback="MD" />
      <Avatar rounded="lg" fallback="LG" />
      <Avatar rounded="full" fallback="FL" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different border radius styles for the Avatar component.'
      }
    }
  }
};

// All variants showcase
export const VariantsShowcase: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar variant="default" fallback="DE" />
      <Avatar variant="gradient" fallback="GR" />
      <Avatar variant="bordered" fallback="BO" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different visual variants of the Avatar component.'
      }
    }
  }
};

// Avatar with broken image
export const BrokenImage: Story = {
  args: {
    src: 'https://broken-image-url.jpg',
    fallback: 'BR',
    size: 'lg',
    rounded: 'full',
    variant: 'default'
  },
  parameters: {
    docs: {
      description: {
        story: 'Avatar with a broken image URL, showing fallback content.'
      }
    }
  }
};

// Group of Avatars (common UI pattern)
export const AvatarGroup: Story = {
  render: () => (
    <div className="flex">
      <Avatar 
        src="https://i.pravatar.cc/300?img=1" 
        alt="User 1"
        className="border-2 border-background"
      />
      <Avatar 
        src="https://i.pravatar.cc/300?img=2" 
        alt="User 2"
        className="-ml-3 border-2 border-background"
      />
      <Avatar 
        src="https://i.pravatar.cc/300?img=3" 
        alt="User 3"
        className="-ml-3 border-2 border-background"
      />
      <Avatar 
        fallback="+5"
        className="-ml-3 border-2 border-background"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A group of avatars, useful for showing multiple users in a compact space.'
      }
    }
  }
};

// Interactive Status Indicator
export const WithStatusIndicator: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <div className="relative">
        <Avatar src="https://i.pravatar.cc/300?img=4" alt="Online user" />
        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></span>
      </div>
      
      <div className="relative">
        <Avatar src="https://i.pravatar.cc/300?img=5" alt="Busy user" />
        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-red-500 border-2 border-white"></span>
      </div>
      
      <div className="relative">
        <Avatar src="https://i.pravatar.cc/300?img=6" alt="Away user" />
        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-yellow-500 border-2 border-white"></span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Avatars with status indicators showing online/busy/away status.'
      }
    }
  }
};