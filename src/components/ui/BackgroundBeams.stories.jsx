import React from 'react';
import { BackgroundBeams } from './BackgroundBeams';

export default {
  title: 'Lumina UI/BackgroundBeams',
  component: BackgroundBeams,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Enhanced animated background beams with interactive cursor effects and theme support for Lumina UI.',
      },
    },
  },
  argTypes: {
    theme: {
      control: 'select',
      options: ['enterprise', 'techDark', 'glass', 'neumorphicLight', 'glow', '3d'],
      description: 'Theme style for the background beams',
      defaultValue: 'techDark',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'full'],
      description: 'Size of the container',
      defaultValue: 'full',
    },
    density: {
      control: 'select',
      options: ['low', 'medium', 'high'],
      description: 'Density of the beams',
      defaultValue: 'medium',
    },
    beamSize: {
      control: 'select',
      options: ['thin', 'medium', 'thick'],
      description: 'Size of the beams',
      defaultValue: 'medium',
    },
    cursorGlow: {
      control: 'select',
      options: ['none', 'subtle', 'medium', 'strong'],
      description: 'Intensity of cursor glow effect',
      defaultValue: 'medium',
    },
    colorScheme: {
      control: 'select',
      options: ['blue', 'purple', 'cyan', 'pink', 'amber', 'multi'],
      description: 'Color scheme for the beams',
      defaultValue: 'blue',
    },
  },
};

// Template for basic story
const Template = (args) => (
  <BackgroundBeams {...args} className="min-h-screen">
    <div className="flex items-center justify-center h-full">
      <div className="text-center p-10 backdrop-blur-sm bg-white/10 dark:bg-black/20 rounded-xl border border-white/10 shadow-lg max-w-lg">
        <h1 className="text-3xl font-bold mb-4">
          {args.theme === 'enterprise' || args.theme === 'neumorphicLight' 
            ? <span className="text-blue-600">Enhanced Background Beams</span>
            : <span className="text-blue-400">Enhanced Background Beams</span>
          }
        </h1>
        <p className={args.theme === 'enterprise' || args.theme === 'neumorphicLight' 
          ? "text-gray-700 mb-6" 
          : "text-gray-200 mb-6"}>
          Move your cursor around to see the interactive glow effect. The animated beams create depth and visual interest.
        </p>
        <button className={`px-4 py-2 rounded-lg ${
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
    </div>
  </BackgroundBeams>
);

// Basic story with default args
export const Default = Template.bind({});
Default.args = {
  theme: 'techDark',
  size: 'full',
  density: 'medium',
  beamSize: 'medium',
  cursorGlow: 'medium',
  colorScheme: 'blue',
};
Default.parameters = {
  backgrounds: { default: 'dark' },
};

// Theme variants
export const ThemeVariants = () => (
  <div className="w-full h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
    {['enterprise', 'techDark', 'glass', 'neumorphicLight', 'glow', '3d'].map((theme) => (
      <div key={theme} className="relative h-full overflow-hidden">
        <BackgroundBeams 
          theme={theme} 
          density="medium" 
          beamSize="medium"
          cursorGlow="medium"
          colorScheme="purple"
          className="h-full"
        >
          <div className="flex items-center justify-center h-full">
            <div className={`text-center p-6 rounded-lg ${
              theme === 'enterprise' || theme === 'neumorphicLight' || theme === '3d'
                ? 'backdrop-blur-sm bg-white/10 text-gray-800'
                : 'backdrop-blur-sm bg-black/20 text-white'
            }`}>
              <h3 className="text-xl font-semibold mb-2 capitalize">{theme} Theme</h3>
              <p className="text-sm">Move cursor to see interactive effects</p>
            </div>
          </div>
        </BackgroundBeams>
      </div>
    ))}
  </div>
);

// Density variants
export const DensityVariants = () => (
  <div className="w-full h-screen grid grid-cols-1 md:grid-cols-3 gap-2">
    {['low', 'medium', 'high'].map((density) => (
      <div key={density} className="relative h-full overflow-hidden">
        <BackgroundBeams 
          theme="techDark" 
          density={density} 
          beamSize="medium"
          cursorGlow="medium"
          colorScheme="blue"
          className="h-full"
        >
          <div className="flex items-center justify-center h-full">
            <div className="text-center p-6 backdrop-blur-sm bg-black/20 rounded-lg text-white">
              <h3 className="text-xl font-semibold mb-2 capitalize">{density} Density</h3>
              <p className="text-sm">
                {density === 'low' 
                  ? 'Fewer beams for subtle effects' 
                  : density === 'medium' 
                    ? 'Balanced beam density'
                    : 'Maximum beam density for rich visuals'
                }
              </p>
            </div>
          </div>
        </BackgroundBeams>
      </div>
    ))}
  </div>
);
DensityVariants.parameters = {
  backgrounds: { default: 'dark' },
};

// Beam Size variants
export const BeamSizeVariants = () => (
  <div className="w-full h-screen grid grid-cols-1 md:grid-cols-3 gap-2">
    {['thin', 'medium', 'thick'].map((beamSize) => (
      <div key={beamSize} className="relative h-full overflow-hidden">
        <BackgroundBeams 
          theme="glass" 
          density="medium" 
          beamSize={beamSize}
          cursorGlow="medium"
          colorScheme="cyan"
          className="h-full"
        >
          <div className="flex items-center justify-center h-full">
            <div className="text-center p-6 backdrop-blur-sm bg-white/10 rounded-lg text-white">
              <h3 className="text-xl font-semibold mb-2 capitalize">{beamSize} Beam Size</h3>
              <p className="text-sm">
                {beamSize === 'thin' 
                  ? 'Thin, subtle beam style' 
                  : beamSize === 'medium' 
                    ? 'Medium, balanced beam size'
                    : 'Thick, bold beam appearance'
                }
              </p>
            </div>
          </div>
        </BackgroundBeams>
      </div>
    ))}
  </div>
);
BeamSizeVariants.parameters = {
  backgrounds: { default: 'gradient' },
};

// Cursor Glow variants
export const CursorGlowVariants = () => (
  <div className="w-full h-screen grid grid-cols-1 md:grid-cols-2 gap-2">
    {['subtle', 'medium', 'strong', 'none'].map((cursorGlow) => (
      <div key={cursorGlow} className="relative h-full overflow-hidden">
        <BackgroundBeams 
          theme="techDark" 
          density="medium" 
          beamSize="medium"
          cursorGlow={cursorGlow}
          colorScheme="pink"
          className="h-full"
        >
          <div className="flex items-center justify-center h-full">
            <div className="text-center p-6 backdrop-blur-sm bg-black/20 rounded-lg text-white">
              <h3 className="text-xl font-semibold mb-2 capitalize">{cursorGlow} Cursor Glow</h3>
              <p className="text-sm">
                {cursorGlow === 'subtle' 
                  ? 'Subtle, gentle cursor effect' 
                  : cursorGlow === 'medium' 
                    ? 'Standard cursor glow intensity'
                    : cursorGlow === 'strong'
                      ? 'Bold, vibrant cursor glow'
                      : 'No cursor glow effect'
                }
              </p>
            </div>
          </div>
        </BackgroundBeams>
      </div>
    ))}
  </div>
);
CursorGlowVariants.parameters = {
  backgrounds: { default: 'dark' },
};

// Color Scheme variants
export const ColorSchemeVariants = () => (
  <div className="w-full h-screen grid grid-cols-2 md:grid-cols-3 gap-2">
    {['blue', 'purple', 'cyan', 'pink', 'amber', 'multi'].map((colorScheme) => (
      <div key={colorScheme} className="relative h-full overflow-hidden">
        <BackgroundBeams 
          theme="glow" 
          density="medium" 
          beamSize="medium"
          cursorGlow="medium"
          colorScheme={colorScheme}
          className="h-full"
        >
          <div className="flex items-center justify-center h-full">
            <div className="text-center p-6 backdrop-blur-sm bg-black/20 rounded-lg text-white">
              <h3 className="text-xl font-semibold mb-2 capitalize">{colorScheme} Colors</h3>
              <p className="text-sm">
                {colorScheme === 'multi' 
                  ? 'Multi-color gradient beams' 
                  : `${colorScheme.charAt(0).toUpperCase() + colorScheme.slice(1)} color scheme`
                }
              </p>
            </div>
          </div>
        </BackgroundBeams>
      </div>
    ))}
  </div>
);
ColorSchemeVariants.parameters = {
  backgrounds: { default: 'dark' },
};

// Hero section example
export const HeroSection = () => (
  <BackgroundBeams
    theme="techDark"
    density="high"
    beamSize="medium"
    cursorGlow="strong"
    colorScheme="multi"
    className="min-h-screen"
  >
    <div className="container mx-auto px-4 py-20 h-full flex flex-col items-center justify-center">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Create <span className="text-purple-400">Stunning</span> User Interfaces
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Lumina UI provides interactive and visually appealing components to create engaging user experiences.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-8 py-4 rounded-lg bg-purple-600 text-white font-medium text-lg hover:bg-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-purple-500/30">
            Get Started
          </button>
          <button className="px-8 py-4 rounded-lg bg-transparent text-white font-medium text-lg hover:bg-white/10 transform hover:scale-105 transition-all duration-200 border border-purple-500/20 hover:border-purple-500/40">
            View Components
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full max-w-5xl">
        {[
          {
            title: 'Interactive',
            description: 'Components that respond to user interactions for an engaging experience.',
          },
          {
            title: 'Customizable',
            description: 'Multiple themes and variants to match your brand and design system.',
          },
          {
            title: 'Animated',
            description: 'Subtle animations and effects that add depth and visual interest.',
          }
        ].map((item, index) => (
          <div 
            key={index} 
            className="bg-black/30 backdrop-blur-md p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 shadow-xl"
          >
            <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
            <p className="text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </BackgroundBeams>
);
HeroSection.parameters = {
  backgrounds: { default: 'dark' },
};

// Landing page example
export const LandingPage = () => (
  <BackgroundBeams
    theme="glass"
    density="high"
    beamSize="thin"
    cursorGlow="medium"
    colorScheme="multi"
    className="min-h-screen"
  >
    <div className="container mx-auto px-4 h-full">
      <header className="py-6 flex justify-between items-center border-b border-white/10">
        <div className="text-2xl font-bold text-white">Lumina UI</div>
        <nav>
          <ul className="flex gap-8">
            <li><a href="#" className="text-white/80 hover:text-white transition-colors">Components</a></li>
            <li><a href="#" className="text-white/80 hover:text-white transition-colors">Themes</a></li>
            <li><a href="#" className="text-white/80 hover:text-white transition-colors">Documentation</a></li>
            <li><a href="#" className="text-white/80 hover:text-white transition-colors">GitHub</a></li>
          </ul>
        </nav>
      </header>
      
      <main className="py-20">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Modern UI for <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">React Applications</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            A beautiful, accessible, and customizable component library with multiple themes and interactive elements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 rounded-lg glass-effect-strong text-white font-medium text-lg hover:bg-white/10 transform hover:scale-105 transition-all duration-200">
              Get Started
            </button>
            <button className="px-8 py-4 rounded-lg border border-white/20 text-white font-medium text-lg hover:bg-white/5 transform hover:scale-105 transition-all duration-200">
              View Documentation
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            {
              title: 'Accessible',
              description: 'Built with accessibility in mind, ensuring your UI works for everyone.',
            },
            {
              title: 'Interactive',
              description: 'Engaging user interactions and smooth animations for a premium feel.',
            },
            {
              title: 'Themeable',
              description: 'Multiple built-in themes and easy customization to match your brand.',
            },
            {
              title: 'Responsive',
              description: 'Works flawlessly across all devices and screen sizes.',
            },
          ].map((item, index) => (
            <div 
              key={index} 
              className="glass-effect rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-black/30 backdrop-blur-lg rounded-xl p-8 border border-white/10 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Ready to elevate your UI?</h2>
          <p className="text-gray-300 text-center mb-8">
            Start building beautiful interfaces with our component library today.
          </p>
          <div className="flex justify-center">
            <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium text-lg hover:from-cyan-400 hover:to-purple-400 transform hover:scale-105 transition-all duration-200 shadow-lg">
              Install Lumina UI
            </button>
          </div>
        </div>
      </main>
    </div>
  </BackgroundBeams>
);