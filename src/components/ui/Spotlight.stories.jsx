import React from 'react';
import { Spotlight } from './Spotlight';

export default {
  title: 'Lumina UI/Spotlight',
  component: Spotlight,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Interactive spotlight effect component with theme support for Lumina UI.',
      },
    },
  },
  argTypes: {
    theme: {
      control: 'select',
      options: ['enterprise', 'techDark', 'glass', 'neumorphicLight', 'glow', '3d'],
      description: 'Theme style for the spotlight',
      defaultValue: 'techDark',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'full'],
      description: 'Size of the spotlight container',
      defaultValue: 'md',
    },
    spotSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the spotlight effect',
      defaultValue: 'md',
    },
    intensity: {
      control: 'select',
      options: ['low', 'medium', 'high'],
      description: 'Intensity of the spotlight effect',
      defaultValue: 'medium',
    },
    animation: {
      control: 'select',
      options: ['none', 'pulse', 'breathe', 'rainbow'],
      description: 'Animation type for the spotlight',
      defaultValue: 'none',
    },
    color: {
      control: 'select',
      options: ['blue', 'purple', 'cyan', 'pink', 'amber', 'multi'],
      description: 'Color of the spotlight effect',
      defaultValue: 'blue',
    },
    type: {
      control: 'select',
      options: ['radial', 'directional', 'beam'],
      description: 'Type of spotlight effect',
      defaultValue: 'radial',
    },
  },
};

// Template for basic spotlight story
const Template = (args) => (
  <Spotlight {...args} className="flex items-center justify-center p-8">
    <div className="max-w-lg backdrop-blur-sm bg-white/10 dark:bg-black/20 rounded-xl border border-white/10 p-8 shadow-lg">
      <h1 className="text-3xl font-bold mb-4">
        {args.theme === 'enterprise' || args.theme === 'neumorphicLight' 
          ? <span className="text-blue-600">Interactive Spotlight</span>
          : <span className="text-blue-400">Interactive Spotlight</span>
        }
      </h1>
      <p className={args.theme === 'enterprise' || args.theme === 'neumorphicLight' 
        ? "text-gray-700 mb-6" 
        : "text-gray-200 mb-6"}>
        Move your mouse over this container to see the spotlight effect follow your cursor. The spotlight creates an engaging interactive experience for users.
      </p>
      <button className={`px-4 py-2 rounded-lg transition-all duration-300 ${
        args.theme === 'enterprise' 
          ? "bg-blue-600 text-white hover:bg-blue-700" 
          : args.theme === 'techDark' 
            ? "bg-purple-600 text-white hover:bg-purple-700" 
            : args.theme === 'glass' 
              ? "bg-white/20 backdrop-blur-sm text-white border border-white/20 hover:bg-white/30" 
              : args.theme === 'neumorphicLight' 
                ? "bg-[#e0e5ec] text-blue-600 shadow-[3px_3px_6px_#b8b9be,-3px_-3px_6px_#ffffff] hover:shadow-[2px_2px_4px_#b8b9be,-2px_-2px_4px_#ffffff]" 
                : args.theme === 'glow' 
                  ? "bg-blue-600/80 text-white shadow-blue-glow hover:bg-blue-500/80" 
                  : "bg-blue-600 text-white hover:bg-blue-700"
      }`}>
        Explore Component
      </button>
    </div>
  </Spotlight>
);

// Basic story with default args
export const Default = Template.bind({});
Default.args = {
  theme: 'techDark',
  size: 'md',
  spotSize: 'md',
  intensity: 'medium',
  animation: 'none',
  color: 'blue',
  type: 'radial',
};
Default.parameters = {
  backgrounds: { default: 'dark' },
};

// Theme variants
export const ThemeVariants = () => (
  <div className="w-full h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
    {['enterprise', 'techDark', 'glass', 'neumorphicLight', 'glow', '3d'].map((theme) => (
      <div key={theme} className="h-full">
        <Spotlight 
          theme={theme} 
          size="full"
          spotSize="md"
          intensity="medium" 
          animation="none"
          color="blue"
          type="radial"
          className="h-full"
        >
          <div className="flex items-center justify-center h-full">
            <div className={`text-center p-6 rounded-lg ${
              theme === 'enterprise' || theme === 'neumorphicLight' || theme === '3d'
                ? 'backdrop-blur-sm bg-white/10 text-gray-800'
                : 'backdrop-blur-sm bg-black/20 text-white'
            }`}>
              <h3 className="text-xl font-semibold mb-2 capitalize">{theme} Theme</h3>
              <p className="text-sm">Move cursor to see spotlight effect</p>
            </div>
          </div>
        </Spotlight>
      </div>
    ))}
  </div>
);

// Spotlight size variants
export const SpotSizeVariants = () => (
  <div className="w-full h-screen grid grid-cols-1 md:grid-cols-3 gap-2">
    {['sm', 'md', 'lg'].map((spotSize) => (
      <div key={spotSize} className="h-full">
        <Spotlight 
          theme="techDark" 
          size="full"
          spotSize={spotSize}
          intensity="medium" 
          animation="none"
          color="purple"
          type="radial"
          className="h-full"
        >
          <div className="flex items-center justify-center h-full">
            <div className="text-center p-6 backdrop-blur-sm bg-black/20 rounded-lg text-white">
              <h3 className="text-xl font-semibold mb-2 capitalize">{spotSize} Spotlight Size</h3>
              <p className="text-sm">
                {spotSize === 'sm' 
                  ? 'Small, focused spotlight effect' 
                  : spotSize === 'md' 
                    ? 'Medium, balanced spotlight size'
                    : 'Large, dramatic spotlight effect'
                }
              </p>
            </div>
          </div>
        </Spotlight>
      </div>
    ))}
  </div>
);
SpotSizeVariants.parameters = {
  backgrounds: { default: 'dark' },
};

// Intensity variants
export const IntensityVariants = () => (
  <div className="w-full h-screen grid grid-cols-1 md:grid-cols-3 gap-2">
    {['low', 'medium', 'high'].map((intensity) => (
      <div key={intensity} className="h-full">
        <Spotlight 
          theme="techDark" 
          size="full"
          spotSize="md"
          intensity={intensity}
          animation="none"
          color="blue"
          type="radial"
          className="h-full"
        >
          <div className="flex items-center justify-center h-full">
            <div className="text-center p-6 backdrop-blur-sm bg-black/20 rounded-lg text-white">
              <h3 className="text-xl font-semibold mb-2 capitalize">{intensity} Intensity</h3>
              <p className="text-sm">
                {intensity === 'low' 
                  ? 'Subtle, gentle lighting effect' 
                  : intensity === 'medium' 
                    ? 'Balanced effect intensity'
                    : 'Bold, high-impact lighting'
                }
              </p>
            </div>
          </div>
        </Spotlight>
      </div>
    ))}
  </div>
);
IntensityVariants.parameters = {
  backgrounds: { default: 'dark' },
};

// Animation variants
export const AnimationVariants = () => (
  <div className="w-full h-screen grid grid-cols-1 md:grid-cols-2 gap-2">
    {['pulse', 'breathe', 'rainbow', 'none'].map((animation) => (
      <div key={animation} className="h-full">
        <Spotlight 
          theme="glass" 
          size="full"
          spotSize="md"
          intensity="medium"
          animation={animation}
          color={animation === 'rainbow' ? 'multi' : 'blue'}
          type="radial"
          className="h-full"
        >
          <div className="flex items-center justify-center h-full">
            <div className="text-center p-6 backdrop-blur-sm bg-white/10 rounded-lg text-white">
              <h3 className="text-xl font-semibold mb-2 capitalize">{animation} Animation</h3>
              <p className="text-sm">
                {animation === 'pulse' 
                  ? 'Spotlight grows and shrinks rhythmically' 
                  : animation === 'breathe' 
                    ? 'Opacity changes create a breathing effect'
                    : animation === 'rainbow'
                      ? 'Colors transition through a spectrum'
                      : 'No animation, just follows cursor'
                }
              </p>
            </div>
          </div>
        </Spotlight>
      </div>
    ))}
  </div>
);
AnimationVariants.parameters = {
  backgrounds: { default: 'gradient' },
};

// Color variants
export const ColorVariants = () => (
  <div className="w-full h-screen grid grid-cols-2 md:grid-cols-3 gap-2">
    {['blue', 'purple', 'cyan', 'pink', 'amber', 'multi'].map((color) => (
      <div key={color} className="h-full">
        <Spotlight 
          theme="techDark" 
          size="full"
          spotSize="md"
          intensity="medium"
          animation="none"
          color={color}
          type="radial"
          className="h-full"
        >
          <div className="flex items-center justify-center h-full">
            <div className="text-center p-6 backdrop-blur-sm bg-black/20 rounded-lg text-white">
              <h3 className="text-xl font-semibold mb-2 capitalize">{color} Color</h3>
              <p className="text-sm">
                {color === 'multi' 
                  ? 'Multiple colors cycle through the spotlight' 
                  : `${color.charAt(0).toUpperCase() + color.slice(1)} tinted spotlight effect`
                }
              </p>
            </div>
          </div>
        </Spotlight>
      </div>
    ))}
  </div>
);
ColorVariants.parameters = {
  backgrounds: { default: 'dark' },
};

// Type variants
export const TypeVariants = () => (
  <div className="w-full h-screen grid grid-cols-1 md:grid-cols-3 gap-2">
    {['radial', 'directional', 'beam'].map((type) => (
      <div key={type} className="h-full">
        <Spotlight 
          theme="glow" 
          size="full"
          spotSize="md"
          intensity="medium"
          animation="none"
          color="blue"
          type={type}
          className="h-full"
        >
          <div className="flex items-center justify-center h-full">
            <div className="text-center p-6 backdrop-blur-sm bg-black/20 rounded-lg text-white">
              <h3 className="text-xl font-semibold mb-2 capitalize">{type} Type</h3>
              <p className="text-sm">
                {type === 'radial' 
                  ? 'Circular spotlight radiating from center' 
                  : type === 'directional' 
                    ? 'Directional light creating depth'
                    : 'Beam of light across the container'
                }
              </p>
            </div>
          </div>
        </Spotlight>
      </div>
    ))}
  </div>
);
TypeVariants.parameters = {
  backgrounds: { default: 'dark' },
};

// Interactive card example
export const InteractiveCard = () => (
  <div className="w-full h-screen flex items-center justify-center">
    <div className="max-w-md w-full">
      <Spotlight 
        theme="techDark" 
        size="md"
        spotSize="md"
        intensity="high"
        animation="none"
        color="purple"
        type="radial"
        className="rounded-xl overflow-hidden"
      >
        <div className="p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-2">Premium Subscription</h2>
            <p className="text-purple-300 text-lg font-semibold mb-2">$49.99 / month</p>
            <div className="bg-black/30 backdrop-blur-md rounded-lg p-4 mb-6">
              <ul className="text-left space-y-3 text-gray-200">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Unlimited access to all features
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Priority customer support
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Advanced analytics and reporting
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Custom themes and branding
                </li>
              </ul>
            </div>
            <button className="w-full py-3 px-6 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-purple-500/30">
              Subscribe Now
            </button>
          </div>
        </div>
      </Spotlight>
    </div>
  </div>
);
InteractiveCard.parameters = {
  backgrounds: { default: 'dark' },
};

// Combined effects example
export const CombinedEffects = () => (
  <div className="w-full h-screen flex items-center justify-center p-8">
    <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-6">
      {[
        {
          title: "Rainbow Beam Effect",
          description: "Colorful beam animation with interactive hover effects.",
          theme: "techDark",
          animation: "rainbow",
          color: "multi",
          type: "beam",
        },
        {
          title: "Glowing Pulse",
          description: "Pulsating spotlight with high intensity glow.",
          theme: "glow",
          animation: "pulse",
          color: "blue",
          type: "radial",
        },
        {
          title: "Glass Morphism",
          description: "Subtle breathing effect with glass-like appearance.",
          theme: "glass",
          animation: "breathe",
          color: "cyan",
          type: "radial",
        },
        {
          title: "Directional Light",
          description: "Creates depth with directional lighting effect.",
          theme: "3d",
          animation: "none",
          color: "amber",
          type: "directional",
        },
      ].map((item, index) => (
        <Spotlight
          key={index}
          theme={item.theme}
          size="md"
          spotSize="md"
          intensity="medium"
          animation={item.animation}
          color={item.color}
          type={item.type}
          className="rounded-xl overflow-hidden h-64"
        >
          <div className="flex items-center justify-center h-full p-6">
            <div className="text-center backdrop-blur-sm bg-white/10 dark:bg-black/20 rounded-lg p-4 w-full">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className={item.theme === 'enterprise' || item.theme === 'neumorphicLight' 
                ? "text-gray-700" 
                : "text-gray-200"}>
                {item.description}
              </p>
            </div>
          </div>
        </Spotlight>
      ))}
    </div>
  </div>
);
CombinedEffects.parameters = {
  backgrounds: { default: 'dark' },
};

// Hero section example
export const HeroSection = () => (
  <Spotlight
    theme="techDark"
    size="full"
    spotSize="lg"
    intensity="high"
    animation="none"
    color="multi"
    type="radial"
    className="h-screen"
  >
    <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Build <span className="text-purple-400">Stunning</span> User Interfaces
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Lumina UI provides interactive and visually appealing components to create engaging user experiences that stand out.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-8 py-4 rounded-lg bg-purple-600 text-white font-medium text-lg hover:bg-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-purple-500/30">
            Get Started
          </button>
          <button className="px-8 py-4 rounded-lg bg-gray-800 text-white font-medium text-lg hover:bg-gray-700 transform hover:scale-105 transition-all duration-200 border border-purple-500/20 hover:border-purple-500/40">
            View Components
          </button>
        </div>
      </div>
    </div>
  </Spotlight>
);
HeroSection.parameters = {
  backgrounds: { default: 'dark' },
};