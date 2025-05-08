import React, { useState, useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { 
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter, 
  ModalProps, 
  ModalTheme
} from './Modal';
import { ThemeProvider } from '../../providers/ThemeProvider';

const meta: Meta<typeof Modal> = {
  title: 'UI/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Animated modal component with theme support for Lumina UI.',
      },
    },
  },
  argTypes: {
    theme: {
      control: 'select',
      options: ['enterprise', 'techDark', 'glass', 'neumorphicLight', 'glow', '3d'],
      description: 'Theme style for the modal',
      defaultValue: 'enterprise',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', 'full'],
      description: 'Size of the modal',
      defaultValue: 'md',
    },
    position: {
      control: 'select',
      options: ['center', 'top', 'bottom', 'left', 'right'],
      description: 'Position of the modal',
      defaultValue: 'center',
    },
    animation: {
      control: 'select',
      options: ['fade', 'zoom', 'slide', 'flip', 'rotate', 'bounce', 'elastic'],
      description: 'Animation type',
      defaultValue: 'zoom',
    },
    closeOnOutsideClick: {
      control: 'boolean',
      description: 'Close modal when clicking outside',
      defaultValue: true,
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Show close button',
      defaultValue: true,
    },
    lockScroll: {
      control: 'boolean',
      description: 'Lock body scroll when modal is open',
      defaultValue: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

// Template for basic modal story
const Template: React.FC<Partial<ModalProps>> = (args) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  const openModal = (): void => setIsOpen(true);
  const closeModal = (): void => setIsOpen(false);
  
  // Wrap the button in appropriate background for theme preview
  const getBackgroundStyle = (): React.CSSProperties => {
    switch (args.theme) {
      case 'techDark':
        return { backgroundColor: '#121212', padding: '2rem', borderRadius: '0.5rem' };
      case 'glass':
        return { 
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))', 
          padding: '2rem', 
          borderRadius: '0.5rem' 
        };
      case 'neumorphicLight':
        return { 
          backgroundColor: '#e0e5ec', 
          padding: '2rem', 
          borderRadius: '0.5rem' 
        };
      case 'glow':
        return { 
          backgroundColor: '#121212', 
          padding: '2rem', 
          borderRadius: '0.5rem' 
        };
      case '3d':
        return { 
          backgroundColor: '#f9fafb',
          padding: '2rem', 
          borderRadius: '0.5rem' 
        };
      default:
        return { backgroundColor: '#f9fafb', padding: '2rem', borderRadius: '0.5rem' };
    }
  };
  
  // Get button style based on theme
  const getButtonStyle = (): string => {
    switch (args.theme) {
      case 'techDark':
        return 'bg-blue-500 hover:bg-blue-600 text-white';
      case 'glass':
        return 'bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/30';
      case 'neumorphicLight':
        return 'bg-[#e0e5ec] text-gray-700 px-6 py-3 rounded-xl shadow-[5px_5px_10px_#b8b9be,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#b8b9be,inset_-5px_-5px_10px_#ffffff] transition-all';
      case 'glow':
        return 'bg-blue-600 hover:bg-blue-700 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]';
      case '3d':
        return 'bg-blue-500 hover:bg-blue-600 text-white transform hover:-translate-y-1 transition-all';
      default:
        return 'bg-blue-500 hover:bg-blue-600 text-white';
    }
  };
  
  return (
    <div style={getBackgroundStyle()}>
      <button 
        onClick={openModal}
        className={`px-4 py-2 rounded font-medium transition-colors ${getButtonStyle()}`}
      >
        Open Modal
      </button>
      
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        ariaLabelledby="modal-title"
        {...args}
      >
        <ModalHeader id="modal-title" theme={args.theme as ModalTheme}>
          Modal Title
        </ModalHeader>
        <ModalBody>
          <p className="mb-4">
            This is a modal dialog with {args.theme} theme styling. You can customize it with various props.
          </p>
          <p>
            The modal supports different animations, sizes, and positions. It also handles keyboard navigation and focus trapping for accessibility.
          </p>
        </ModalBody>
        <ModalFooter theme={args.theme as ModalTheme}>
          <button
            className="px-4 py-2 rounded bg-gray-200 text-gray-800 hover:bg-gray-300 transition-colors"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors"
            onClick={closeModal}
          >
            Confirm
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

// Basic story with default args
export const Default: Story = {
  render: (args) => <Template {...args} />,
  args: {
    theme: 'enterprise',
    size: 'md',
    position: 'center',
    animation: 'zoom',
    closeOnOutsideClick: true,
    showCloseButton: true,
  },
};

// Enterprise theme variant
export const EnterpriseTheme: Story = {
  render: (args) => <Template {...args} />,
  args: {
    theme: 'enterprise',
    size: 'md',
    animation: 'zoom',
  },
  parameters: {
    backgrounds: { default: 'light' },
    docs: {
      description: {
        story: 'Enterprise theme with professional styling.',
      },
    },
  },
};

// Tech Dark theme variant
export const TechDarkTheme: Story = {
  render: (args) => <Template {...args} />,
  args: {
    theme: 'techDark',
    size: 'md',
    animation: 'zoom',
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: 'Tech Dark theme with modern, sleek styling.',
      },
    },
  },
};

// Glass theme variant
export const GlassTheme: Story = {
  render: (args) => <Template {...args} />,
  args: {
    theme: 'glass',
    size: 'md',
    animation: 'zoom',
  },
  parameters: {
    backgrounds: { default: 'gradient' },
    docs: {
      description: {
        story: 'Glass theme with blur effects and translucency.',
      },
    },
  },
};

// Neumorphic Light theme variant
export const NeumorphicLightTheme: Story = {
  render: (args) => <Template {...args} />,
  args: {
    theme: 'neumorphicLight',
    size: 'md',
    animation: 'zoom',
  },
  parameters: {
    backgrounds: { default: 'light' },
    docs: {
      description: {
        story: 'Neumorphic Light theme with soft shadows and subtle depth.',
      },
    },
  },
};

// Glow theme variant
export const GlowTheme: Story = {
  render: (args) => <Template {...args} />,
  args: {
    theme: 'glow',
    size: 'md',
    animation: 'zoom',
    show3DEffect: true,
    showGlareEffect: true,
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: 'Glow theme with illuminated edges and 3D effects.',
      },
    },
  },
};

// 3D theme variant
export const ThreeDTheme: Story = {
  render: (args) => <Template {...args} />,
  args: {
    theme: '3d',
    size: 'md',
    animation: 'zoom',
    depth: 'deep',
    show3DEffect: true,
    effectIntensity: 'strong',
  },
  parameters: {
    backgrounds: { default: 'light' },
    docs: {
      description: {
        story: '3D theme with perspective and depth effects.',
      },
    },
  },
};

// Animation variants
export const AnimationVariants: Story = {
  render: () => {
    const [openModalId, setOpenModalId] = useState<string | null>(null);
    
    const openModal = (id: string): void => setOpenModalId(id);
    const closeModal = (): void => setOpenModalId(null);
    
    const animations: Array<{id: string, label: string}> = [
      { id: 'fade', label: 'Fade' },
      { id: 'zoom', label: 'Zoom' },
      { id: 'slide', label: 'Slide' },
      { id: 'flip', label: 'Flip' },
      { id: 'rotate', label: 'Rotate' },
      { id: 'bounce', label: 'Bounce' },
      { id: 'elastic', label: 'Elastic' },
    ];
    
    return (
      <div className="p-8 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Animation Variants</h2>
        <div className="flex flex-wrap gap-4">
          {animations.map((anim) => (
            <button
              key={anim.id}
              onClick={() => openModal(anim.id)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              {anim.label} Animation
            </button>
          ))}
        </div>
        
        {animations.map((anim) => (
          <Modal
            key={anim.id}
            isOpen={openModalId === anim.id}
            onClose={closeModal}
            theme="enterprise"
            size="md"
            animation={anim.id as ModalProps['animation']}
            ariaLabelledby={`${anim.id}-title`}
          >
            <ModalHeader id={`${anim.id}-title`}>
              {anim.label} Animation
            </ModalHeader>
            <ModalBody>
              <p>This modal uses the {anim.label.toLowerCase()} animation effect.</p>
            </ModalBody>
            <ModalFooter>
              <button
                className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                onClick={closeModal}
              >
                Close
              </button>
            </ModalFooter>
          </Modal>
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Showcase of different animation types available for the modal.',
      },
    },
  },
};

// Size variants
export const SizeVariants: Story = {
  render: () => {
    const [openModalId, setOpenModalId] = useState<string | null>(null);
    
    const openModal = (id: string): void => setOpenModalId(id);
    const closeModal = (): void => setOpenModalId(null);
    
    const sizes: Array<{id: ModalProps['size'], label: string}> = [
      { id: 'xs', label: 'Extra Small' },
      { id: 'sm', label: 'Small' },
      { id: 'md', label: 'Medium' },
      { id: 'lg', label: 'Large' },
      { id: 'xl', label: 'Extra Large' },
      { id: '2xl', label: '2X Large' },
    ];
    
    return (
      <div className="p-8 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Size Variants</h2>
        <div className="flex flex-wrap gap-4">
          {sizes.map((size) => (
            <button
              key={size.id}
              onClick={() => openModal(size.id as string)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              {size.label}
            </button>
          ))}
        </div>
        
        {sizes.map((size) => (
          <Modal
            key={size.id}
            isOpen={openModalId === size.id}
            onClose={closeModal}
            theme="enterprise"
            size={size.id}
            animation="zoom"
            ariaLabelledby={`${size.id}-title`}
          >
            <ModalHeader id={`${size.id}-title`}>
              {size.label} Modal
            </ModalHeader>
            <ModalBody>
              <p>This is a {size.label.toLowerCase()} sized modal dialog.</p>
              <p className="mt-4">Size: {size.id}</p>
            </ModalBody>
            <ModalFooter>
              <button
                className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                onClick={closeModal}
              >
                Close
              </button>
            </ModalFooter>
          </Modal>
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Showcase of different size options available for the modal.',
      },
    },
  },
};

// Position variants
export const PositionVariants: Story = {
  render: () => {
    const [openModalId, setOpenModalId] = useState<string | null>(null);
    
    const openModal = (id: string): void => setOpenModalId(id);
    const closeModal = (): void => setOpenModalId(null);
    
    const positions: Array<{id: ModalProps['position'], label: string}> = [
      { id: 'center', label: 'Center' },
      { id: 'top', label: 'Top' },
      { id: 'bottom', label: 'Bottom' },
      { id: 'left', label: 'Left' },
      { id: 'right', label: 'Right' },
    ];
    
    return (
      <div className="p-8 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Position Variants</h2>
        <div className="flex flex-wrap gap-4">
          {positions.map((pos) => (
            <button
              key={pos.id}
              onClick={() => openModal(pos.id as string)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              {pos.label} Position
            </button>
          ))}
        </div>
        
        {positions.map((pos) => (
          <Modal
            key={pos.id}
            isOpen={openModalId === pos.id}
            onClose={closeModal}
            theme="techDark"
            size="md"
            position={pos.id}
            animation="slide"
            ariaLabelledby={`${pos.id}-title`}
          >
            <ModalHeader id={`${pos.id}-title`} theme="techDark">
              {pos.label} Position
            </ModalHeader>
            <ModalBody>
              <p>This modal is positioned at the {pos.label.toLowerCase()} of the screen.</p>
              <p className="mt-4">Position: {pos.id}</p>
            </ModalBody>
            <ModalFooter theme="techDark">
              <button
                className="px-4 py-2 rounded bg-gray-700 text-gray-200 hover:bg-gray-600 transition-colors"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-500 transition-colors"
                onClick={closeModal}
              >
                Confirm
              </button>
            </ModalFooter>
          </Modal>
        ))}
      </div>
    );
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: 'Showcase of different position options available for the modal.',
      },
    },
  },
};

// All themes showcase
export const ThemeShowcase: Story = {
  render: () => {
    const [openTheme, setOpenTheme] = useState<string | null>(null);
    
    const openModal = (theme: string): void => setOpenTheme(theme);
    const closeModal = (): void => setOpenTheme(null);
    
    const themes: Array<{
      id: ModalTheme, 
      label: string, 
      bg: string,
      buttonClass: string,
      description: string
    }> = [
      { 
        id: 'enterprise', 
        label: 'Enterprise', 
        bg: 'bg-gray-100',
        buttonClass: 'bg-blue-500 hover:bg-blue-600 text-white',
        description: 'Clean, professional styling optimized for business applications.'
      },
      { 
        id: 'techDark', 
        label: 'Tech Dark', 
        bg: 'bg-gray-900',
        buttonClass: 'bg-purple-600 hover:bg-purple-700 text-white',
        description: 'Modern, sleek dark interface with advanced effects.'
      },
      { 
        id: 'glass', 
        label: 'Glass', 
        bg: 'bg-gradient-to-r from-blue-500/30 to-purple-500/30',
        buttonClass: 'bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/30',
        description: 'Glassmorphism-based UI with backdrop blur effects and translucency.'
      },
      { 
        id: 'neumorphicLight', 
        label: 'Neumorphic Light', 
        bg: 'bg-[#e0e5ec]',
        buttonClass: 'bg-[#e0e5ec] text-gray-700 shadow-[5px_5px_10px_#b8b9be,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#b8b9be,inset_-5px_-5px_10px_#ffffff] transition-all',
        description: 'Soft UI with subtle shadows and depth for a tactile experience.'
      },
      { 
        id: 'glow', 
        label: 'Glow', 
        bg: 'bg-gray-900',
        buttonClass: 'bg-blue-600 hover:bg-blue-700 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]',
        description: 'Dark UI with illuminated edges that emit a subtle glow.'
      },
      { 
        id: '3d', 
        label: '3D', 
        bg: 'bg-gray-100',
        buttonClass: 'bg-blue-500 hover:bg-blue-600 text-white transform hover:-translate-y-1 transition-all',
        description: 'UI with enhanced depth perception and perspective effects.'
      },
    ];
    
    return (
      <div className="space-y-8">
        {themes.map((theme) => (
          <div key={theme.id} className={`p-8 rounded-lg ${theme.bg}`}>
            <h2 className={`text-xl font-semibold mb-2 ${
              ['techDark', 'glass', 'glow'].includes(theme.id) ? 'text-white' : 'text-gray-800'
            }`}>
              {theme.label} Theme
            </h2>
            <p className={`mb-4 ${
              ['techDark', 'glass', 'glow'].includes(theme.id) ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {theme.description}
            </p>
            <button
              onClick={() => openModal(theme.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${theme.buttonClass}`}
            >
              Open Modal
            </button>
            
            <Modal
              isOpen={openTheme === theme.id}
              onClose={closeModal}
              theme={theme.id}
              size="md"
              animation="zoom"
              ariaLabelledby={`${theme.id}-title`}
              show3DEffect={theme.id === 'glow' || theme.id === '3d'}
              showGlareEffect={theme.id === 'glow'}
            >
              <ModalHeader id={`${theme.id}-title`} theme={theme.id}>
                {theme.label} Theme Modal
              </ModalHeader>
              <ModalBody>
                <p className="mb-4">
                  This modal uses the {theme.label} theme styling.
                </p>
                <p>
                  {theme.description}
                </p>
              </ModalBody>
              <ModalFooter theme={theme.id}>
                <button
                  className={`px-4 py-2 rounded text-gray-800 transition-colors ${
                    theme.id === 'neumorphicLight' 
                      ? 'bg-[#e0e5ec] shadow-[2px_2px_5px_#b8b9be,-2px_-2px_5px_#ffffff] hover:shadow-[inset_2px_2px_5px_#b8b9be,inset_-2px_-2px_5px_#ffffff]'
                      : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  className={`px-4 py-2 rounded text-white transition-colors ${
                    theme.id === 'glass'
                      ? 'bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/30'
                      : theme.id === 'neumorphicLight'
                        ? 'bg-blue-500 hover:bg-blue-600'
                        : theme.id === 'techDark'
                          ? 'bg-purple-600 hover:bg-purple-500'
                          : theme.id === 'glow'
                            ? 'bg-blue-600 hover:bg-blue-700 shadow-[0_0_10px_rgba(59,130,246,0.5)]'
                            : 'bg-blue-500 hover:bg-blue-600'
                  }`}
                  onClick={closeModal}
                >
                  Confirm
                </button>
              </ModalFooter>
            </Modal>
          </div>
        ))}
      </div>
    );
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Showcase of all available themes for the modal component.',
      },
    },
  },
};

// Form Example
export const FormExample: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [formData, setFormData] = useState<{
      name: string;
      email: string;
      message: string;
    }>({
      name: '',
      email: '',
      message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
    
    const nameInputRef = useRef<HTMLInputElement>(null);
    
    const openModal = (): void => {
      setIsOpen(true);
      setFormData({ name: '', email: '', message: '' });
      setSubmitSuccess(false);
    };
    
    const closeModal = (): void => {
      setIsOpen(false);
    };
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
    };
    
    const handleSubmit = (e: React.FormEvent): void => {
      e.preventDefault();
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        
        // Close modal after success message
        setTimeout(() => {
          closeModal();
        }, 1500);
      }, 1000);
    };
    
    return (
      <div className="p-8 bg-gray-100 rounded-lg">
        <button
          onClick={openModal}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Open Contact Form
        </button>
        
        <Modal
          isOpen={isOpen}
          onClose={closeModal}
          theme="enterprise"
          size="md"
          animation="zoom"
          ariaLabelledby="form-title"
          initialFocus={nameInputRef}
        >
          <ModalHeader id="form-title">
            Contact Us
          </ModalHeader>
          <ModalBody>
            {submitSuccess ? (
              <div className="py-8 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-green-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-lg font-medium">Message Sent Successfully!</p>
                <p className="text-gray-500">Thank you for contacting us.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    ref={nameInputRef}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </form>
            )}
          </ModalBody>
          {!submitSuccess && (
            <ModalFooter>
              <button
                type="button"
                className="px-4 py-2 rounded bg-gray-200 text-gray-800 hover:bg-gray-300 transition-colors"
                onClick={closeModal}
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button
                type="submit"
                className={`px-4 py-2 rounded bg-blue-500 text-white transition-colors ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-600'
                }`}
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </ModalFooter>
          )}
        </Modal>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of a contact form within a modal, demonstrating form handling and success state.',
      },
    },
  },
};

// Theme Provider Example
export const WithThemeProvider: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedTheme, setSelectedTheme] = useState<ModalTheme>('enterprise');
    
    const themes: Array<{id: ModalTheme, label: string}> = [
      { id: 'enterprise', label: 'Enterprise' },
      { id: 'techDark', label: 'Tech Dark' },
      { id: 'glass', label: 'Glass' },
      { id: 'neumorphicLight', label: 'Neumorphic Light' },
      { id: 'glow', label: 'Glow' },
      { id: '3d', label: '3D' },
    ];
    
    const openModal = (): void => setIsOpen(true);
    const closeModal = (): void => setIsOpen(false);
    
    // Get background style based on theme
    const getBackgroundStyle = (): React.CSSProperties => {
      switch (selectedTheme) {
        case 'techDark':
          return { 
            backgroundColor: '#121212', 
            minHeight: '400px', 
            display: 'flex', 
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '0.5rem' 
          };
        case 'glass':
          return { 
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))', 
            minHeight: '400px', 
            display: 'flex', 
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '0.5rem' 
          };
        case 'neumorphicLight':
          return { 
            backgroundColor: '#e0e5ec', 
            minHeight: '400px', 
            display: 'flex', 
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '0.5rem' 
          };
        case 'glow':
          return { 
            backgroundColor: '#121212', 
            minHeight: '400px', 
            display: 'flex', 
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '0.5rem' 
          };
        case '3d':
          return { 
            backgroundColor: '#f9fafb', 
            minHeight: '400px', 
            display: 'flex', 
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '0.5rem' 
          };
        default:
          return { 
            backgroundColor: '#f9fafb', 
            minHeight: '400px', 
            display: 'flex', 
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '0.5rem' 
          };
      }
    };
    
    return (
      <div className="space-y-6">
        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-lg font-medium mb-2">Choose Theme</h3>
          <div className="flex flex-wrap gap-2">
            {themes.map(theme => (
              <button
                key={theme.id}
                onClick={() => setSelectedTheme(theme.id)}
                className={`px-3 py-1.5 rounded text-sm transition-colors ${
                  selectedTheme === theme.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {theme.label}
              </button>
            ))}
          </div>
        </div>
        
        <ThemeProvider theme={selectedTheme}>
          <div style={getBackgroundStyle()}>
            <h2 className={`text-xl font-semibold mb-4 ${
              ['techDark', 'glass', 'glow'].includes(selectedTheme) ? 'text-white' : 'text-gray-800'
            }`}>
              Current Theme: {themes.find(t => t.id === selectedTheme)?.label}
            </h2>
            
            <button
              onClick={openModal}
              className={`px-4 py-2 rounded transition-colors ${
                selectedTheme === 'techDark' 
                  ? 'bg-purple-600 hover:bg-purple-700 text-white'
                  : selectedTheme === 'glass'
                    ? 'bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/30'
                    : selectedTheme === 'neumorphicLight'
                      ? 'bg-[#e0e5ec] text-gray-700 shadow-[5px_5px_10px_#b8b9be,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#b8b9be,inset_-5px_-5px_10px_#ffffff]'
                      : selectedTheme === 'glow'
                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]'
                        : selectedTheme === '3d'
                          ? 'bg-blue-500 hover:bg-blue-600 text-white transform hover:-translate-y-1 transition-all'
                          : 'bg-blue-500 hover:bg-blue-600 text-white'
              }`}
            >
              Open Theme-Aware Modal
            </button>
            
            {/* Modal will inherit theme from ThemeProvider */}
            <Modal
              isOpen={isOpen}
              onClose={closeModal}
              size="md"
              animation="zoom"
              ariaLabelledby="themed-modal-title"
              show3DEffect={selectedTheme === 'glow' || selectedTheme === '3d'}
              showGlareEffect={selectedTheme === 'glow'}
            >
              <ModalHeader id="themed-modal-title">
                Theme-Aware Modal
              </ModalHeader>
              <ModalBody>
                <p>
                  This modal inherits its theme from the ThemeProvider context.
                  Current theme: <strong>{themes.find(t => t.id === selectedTheme)?.label}</strong>
                </p>
                <p className="mt-4">
                  Try changing the theme selection and opening the modal again to see it adapt.
                </p>
              </ModalBody>
              <ModalFooter>
                <button
                  className={`px-4 py-2 rounded transition-colors ${
                    selectedTheme === 'neumorphicLight' 
                      ? 'bg-[#e0e5ec] text-gray-700 shadow-[2px_2px_5px_#b8b9be,-2px_-2px_5px_#ffffff] hover:shadow-[inset_2px_2px_5px_#b8b9be,inset_-2px_-2px_5px_#ffffff]'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
                  onClick={closeModal}
                >
                  Close
                </button>
              </ModalFooter>
            </Modal>
          </div>
        </ThemeProvider>
      </div>
    );
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Example showing how the modal works with ThemeProvider context to inherit theme styling.',
      },
    },
  },
};

// Effects Example
export const EffectsExample: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [effectConfig, setEffectConfig] = useState<{
      show3D: boolean;
      showGlare: boolean;
      intensity: EffectIntensity;
    }>({
      show3D: true,
      showGlare: true,
      intensity: 'medium',
    });
    
    const openModal = (): void => setIsOpen(true);
    const closeModal = (): void => setIsOpen(false);
    
    const intensityOptions: Array<{value: EffectIntensity, label: string}> = [
      { value: 'subtle', label: 'Subtle' },
      { value: 'medium', label: 'Medium' },
      { value: 'strong', label: 'Strong' },
    ];
    
    return (
      <div className="p-8 bg-gray-900 rounded-lg text-white">
        <h2 className="text-xl font-bold mb-4">Interactive Effects</h2>
        
        <div className="mb-6 space-y-4">
          <div className="flex items-center gap-3">
            <label className="inline-flex items-center gap-2">
              <input
                type="checkbox"
                checked={effectConfig.show3D}
                onChange={(e) => setEffectConfig({...effectConfig, show3D: e.target.checked})}
                className="h-4 w-4 text-blue-600 rounded"
              />
              <span>3D Mouse Effect</span>
            </label>
            
            <label className="inline-flex items-center gap-2">
              <input
                type="checkbox"
                checked={effectConfig.showGlare}
                onChange={(e) => setEffectConfig({...effectConfig, showGlare: e.target.checked})}
                className="h-4 w-4 text-blue-600 rounded"
              />
              <span>Glare Effect</span>
            </label>
          </div>
          
          <div className="flex items-center gap-4">
            <span>Effect Intensity:</span>
            <div className="flex gap-2">
              {intensityOptions.map(option => (
                <label key={option.value} className="inline-flex items-center gap-1.5">
                  <input
                    type="radio"
                    name="intensity"
                    value={option.value}
                    checked={effectConfig.intensity === option.value}
                    onChange={() => setEffectConfig({...effectConfig, intensity: option.value})}
                    className="h-4 w-4 text-blue-600"
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
        
        <button
          onClick={openModal}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all"
        >
          Open Interactive Modal
        </button>
        
        <Modal
          isOpen={isOpen}
          onClose={closeModal}
          theme="glow"
          size="md"
          animation="zoom"
          show3DEffect={effectConfig.show3D}
          showGlareEffect={effectConfig.showGlare}
          effectIntensity={effectConfig.intensity}
          ariaLabelledby="effects-modal-title"
        >
          <ModalHeader id="effects-modal-title" theme="glow">
            Interactive Effects
          </ModalHeader>
          <ModalBody>
            <p className="mb-4">
              This modal demonstrates interactive effects. Move your mouse over the modal to see the effects in action.
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li><strong>3D Effect:</strong> {effectConfig.show3D ? 'Enabled' : 'Disabled'}</li>
              <li><strong>Glare Effect:</strong> {effectConfig.showGlare ? 'Enabled' : 'Disabled'}</li>
              <li><strong>Effect Intensity:</strong> {effectConfig.intensity.charAt(0).toUpperCase() + effectConfig.intensity.slice(1)}</li>
            </ul>
          </ModalBody>
          <ModalFooter theme="glow">
            <button
              className="px-4 py-2 rounded bg-gray-700 text-gray-200 hover:bg-gray-600 transition-colors"
              onClick={closeModal}
            >
              Close
            </button>
          </ModalFooter>
        </Modal>
      </div>
    );
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: 'Example demonstrating the 3D and glare effects with configurable intensity.',
      },
    },
  },
};