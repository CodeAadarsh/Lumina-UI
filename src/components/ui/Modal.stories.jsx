import React, { useState, useRef } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from './Modal';
import { ThemeProvider } from '../../providers/ThemeProvider';

export default {
  title: 'Lumina UI/Modal',
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
      options: ['enterprise', 'techDark', 'glass', 'neumorphicLight'],
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
      options: ['fade', 'zoom', 'slide', 'flip'],
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

// Template for basic modal story
const Template = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  
  // Wrap the button in appropriate background for theme preview
  const getBackgroundStyle = () => {
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
      default:
        return { backgroundColor: '#f9fafb', padding: '2rem', borderRadius: '0.5rem' };
    }
  };
  
  // Get button style based on theme
  const getButtonStyle = () => {
    switch (args.theme) {
      case 'techDark':
        return 'bg-blue-500 hover:bg-blue-600 text-white';
      case 'glass':
        return 'bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/30';
      case 'neumorphicLight':
        return 'bg-[#e0e5ec] text-gray-700 px-6 py-3 rounded-xl shadow-[5px_5px_10px_#b8b9be,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#b8b9be,inset_-5px_-5px_10px_#ffffff] transition-all';
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
        <ModalHeader id="modal-title" theme={args.theme}>
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
        <ModalFooter theme={args.theme}>
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
export const Default = Template.bind({});
Default.args = {
  theme: 'enterprise',
  size: 'md',
  position: 'center',
  animation: 'zoom',
  closeOnOutsideClick: true,
  showCloseButton: true,
};

// Enterprise theme variant
export const EnterpriseTheme = Template.bind({});
EnterpriseTheme.args = {
  theme: 'enterprise',
  size: 'md',
  animation: 'zoom',
};
EnterpriseTheme.parameters = {
  backgrounds: { default: 'light' },
  docs: {
    description: {
      story: 'Enterprise theme with professional styling.',
    },
  },
};

// Tech Dark theme variant
export const TechDarkTheme = Template.bind({});
TechDarkTheme.args = {
  theme: 'techDark',
  size: 'md',
  animation: 'zoom',
};
TechDarkTheme.parameters = {
  backgrounds: { default: 'dark' },
  docs: {
    description: {
      story: 'Tech Dark theme with modern, sleek styling.',
    },
  },
};

// Glass theme variant
export const GlassTheme = Template.bind({});
GlassTheme.args = {
  theme: 'glass',
  size: 'md',
  animation: 'zoom',
};
GlassTheme.parameters = {
  backgrounds: { default: 'gradient' },
  docs: {
    description: {
      story: 'Glass theme with blur effects and translucency.',
    },
  },
};

// Neumorphic Light theme variant
export const NeumorphicLightTheme = Template.bind({});
NeumorphicLightTheme.args = {
  theme: 'neumorphicLight',
  size: 'md',
  animation: 'zoom',
};
NeumorphicLightTheme.parameters = {
  backgrounds: { default: 'light' },
  docs: {
    description: {
      story: 'Neumorphic Light theme with soft shadows and subtle depth.',
    },
  },
};

// Animation variants
export const AnimationVariants = () => {
  const [openModalId, setOpenModalId] = useState(null);
  
  const openModal = (id) => setOpenModalId(id);
  const closeModal = () => setOpenModalId(null);
  
  const animations = [
    { id: 'fade', label: 'Fade' },
    { id: 'zoom', label: 'Zoom' },
    { id: 'slide', label: 'Slide' },
    { id: 'flip', label: 'Flip' },
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
          animation={anim.id}
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
};
AnimationVariants.parameters = {
  docs: {
    description: {
      story: 'Showcase of different animation types available for the modal.',
    },
  },
};

// Size variants
export const SizeVariants = () => {
  const [openModalId, setOpenModalId] = useState(null);
  
  const openModal = (id) => setOpenModalId(id);
  const closeModal = () => setOpenModalId(null);
  
  const sizes = [
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
            onClick={() => openModal(size.id)}
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
};
SizeVariants.parameters = {
  docs: {
    description: {
      story: 'Showcase of different size options available for the modal.',
    },
  },
};

// Position variants
export const PositionVariants = () => {
  const [openModalId, setOpenModalId] = useState(null);
  
  const openModal = (id) => setOpenModalId(id);
  const closeModal = () => setOpenModalId(null);
  
  const positions = [
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
            onClick={() => openModal(pos.id)}
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
};
PositionVariants.parameters = {
  backgrounds: { default: 'dark' },
  docs: {
    description: {
      story: 'Showcase of different position options available for the modal.',
    },
  },
};

// All themes showcase
export const ThemeShowcase = () => {
  const [openTheme, setOpenTheme] = useState(null);
  
  const openModal = (theme) => setOpenTheme(theme);
  const closeModal = () => setOpenTheme(null);
  
  const themes = [
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
  ];
  
  return (
    <div className="space-y-8">
      {themes.map((theme) => (
        <div key={theme.id} className={`p-8 rounded-lg ${theme.bg}`}>
          <h2 className={`text-xl font-semibold mb-2 ${theme.id === 'techDark' || theme.id === 'glass' ? 'text-white' : 'text-gray-800'}`}>
            {theme.label} Theme
          </h2>
          <p className={`mb-4 ${theme.id === 'techDark' || theme.id === 'glass' ? 'text-gray-300' : 'text-gray-600'}`}>
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
};
ThemeShowcase.parameters = {
  layout: 'fullscreen',
  docs: {
    description: {
      story: 'Showcase of all available themes for the modal component.',
    },
  },
};

// Form Example
export const FormExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const nameInputRef = useRef(null);
  
  const openModal = () => {
    setIsOpen(true);
    setFormData({ name: '', email: '', message: '' });
    setSubmitSuccess(false);
  };
  
  const closeModal = () => {
    setIsOpen(false);
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
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
};
FormExample.parameters = {
  docs: {
    description: {
      story: 'Example of a contact form within a modal, demonstrating form handling and success state.',
    },
  },
};

// Theme Provider Example
export const WithThemeProvider = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState('enterprise');
  
  const themes = [
    { id: 'enterprise', label: 'Enterprise' },
    { id: 'techDark', label: 'Tech Dark' },
    { id: 'glass', label: 'Glass' },
    { id: 'neumorphicLight', label: 'Neumorphic Light' },
  ];
  
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  
  // Get background style based on theme
  const getBackgroundStyle = () => {
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
            selectedTheme === 'techDark' || selectedTheme === 'glass' ? 'text-white' : 'text-gray-800'
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
};
WithThemeProvider.parameters = {
  layout: 'fullscreen',
  docs: {
    description: {
      story: 'Example showing how the modal works with ThemeProvider context to inherit theme styling.',
    },
  },
};