import React from 'react';
import { TextGenerateEffect } from './TextGenerateEffect';

export default {
  title: 'Lumina UI/TextGenerateEffect',
  component: TextGenerateEffect,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Text generation effect with typing animation and theme support for Lumina UI.',
      },
    },
  },
  argTypes: {
    theme: {
      control: 'select',
      options: ['enterprise', 'techDark', 'glass', 'neumorphicLight', 'glow', '3d'],
      description: 'Theme style for the text',
      defaultValue: 'enterprise',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'],
      description: 'Size of the text',
      defaultValue: 'md',
    },
    weight: {
      control: 'select',
      options: ['light', 'normal', 'medium', 'semibold', 'bold'],
      description: 'Font weight',
      defaultValue: 'normal',
    },
    cursor: {
      control: 'select',
      options: ['bar', 'block', 'underscore', 'none'],
      description: 'Style of the cursor',
      defaultValue: 'bar',
    },
    effect: {
      control: 'select',
      options: ['none', 'glow', 'gradient', 'shadow'],
      description: 'Special effects for the text',
      defaultValue: 'none',
    },
    speed: {
      control: 'select',
      options: ['slow', 'normal', 'fast'],
      description: 'Speed of the typing effect',
      defaultValue: 'normal',
    },
    loop: {
      control: 'boolean',
      description: 'Whether to loop the animation',
      defaultValue: false,
    },
    delay: {
      control: { type: 'range', min: 0, max: 2000, step: 100 },
      description: 'Delay before starting the animation (ms)',
      defaultValue: 0,
    },
    words: {
      control: 'text',
      description: 'Text content to be animated',
      defaultValue: 'Welcome to Lumina UI - A modern React component library',
    },
  },
};

// Template for basic text generation effect
const Template = (args) => (
  <div className="p-8 rounded-xl bg-white dark:bg-gray-800 shadow-xl max-w-2xl">
    <TextGenerateEffect {...args} />
  </div>
);

// Basic story with default args
export const Default = Template.bind({});
Default.args = {
  theme: 'enterprise',
  size: 'xl',
  weight: 'semibold',
  cursor: 'bar',
  effect: 'none',
  speed: 'normal',
  loop: false,
  delay: 0,
  words: 'Welcome to Lumina UI - A modern React component library',
};

// Theme variants
export const ThemeVariants = () => (
  <div className="space-y-8 p-8 rounded-xl bg-white dark:bg-gray-800 shadow-xl max-w-2xl">
    {['enterprise', 'techDark', 'glass', 'neumorphicLight', 'glow', '3d'].map((theme) => (
      <div key={theme} className={`p-6 rounded-lg ${
        theme === 'enterprise' ? 'bg-white text-gray-900' :
        theme === 'techDark' ? 'bg-gray-900 text-white' :
        theme === 'glass' ? 'bg-gray-900/50 backdrop-blur-md text-white' :
        theme === 'neumorphicLight' ? 'bg-[#e0e5ec] text-gray-800' :
        theme === 'glow' ? 'bg-gray-900 text-white' :
        'bg-white dark:bg-gray-800 text-gray-900 dark:text-white'
      }`}>
        <h3 className="text-sm font-semibold mb-2 uppercase opacity-60">{theme} Theme</h3>
        <TextGenerateEffect
          theme={theme}
          size="xl"
          weight="semibold"
          cursor="bar"
          effect="none"
          speed="normal"
          words={`This is the ${theme} theme with a typing effect.`}
        />
      </div>
    ))}
  </div>
);

// Cursor variants
export const CursorVariants = () => (
  <div className="space-y-8 p-8 rounded-xl bg-white dark:bg-gray-800 shadow-xl max-w-2xl">
    {['bar', 'block', 'underscore', 'none'].map((cursor) => (
      <div key={cursor} className="p-6 rounded-lg bg-gray-900 text-white">
        <h3 className="text-sm font-semibold mb-2 uppercase opacity-60">{cursor} Cursor</h3>
        <TextGenerateEffect
          theme="techDark"
          size="xl"
          weight="semibold"
          cursor={cursor}
          effect="none"
          speed="normal"
          words={`This text has a ${cursor === 'none' ? 'hidden' : cursor} cursor.`}
        />
      </div>
    ))}
  </div>
);
CursorVariants.parameters = {
  backgrounds: { default: 'dark' },
};

// Effect variants
export const EffectVariants = () => (
  <div className="space-y-8 p-8 rounded-xl bg-white dark:bg-gray-800 shadow-xl max-w-2xl">
    {['none', 'glow', 'gradient', 'shadow'].map((effect) => (
      <div key={effect} className="p-6 rounded-lg bg-gray-900 text-white">
        <h3 className="text-sm font-semibold mb-2 uppercase opacity-60">{effect} Effect</h3>
        <TextGenerateEffect
          theme="techDark"
          size="xl"
          weight="semibold"
          cursor="bar"
          effect={effect}
          speed="normal"
          words={`Text with the ${effect} effect applied.`}
        />
      </div>
    ))}
  </div>
);
EffectVariants.parameters = {
  backgrounds: { default: 'dark' },
};

// Speed variants
export const SpeedVariants = () => (
  <div className="space-y-8 p-8 rounded-xl bg-white dark:bg-gray-800 shadow-xl max-w-2xl">
    {['slow', 'normal', 'fast'].map((speed) => (
      <div key={speed} className="p-6 rounded-lg bg-gray-900 text-white">
        <h3 className="text-sm font-semibold mb-2 uppercase opacity-60">{speed} Speed</h3>
        <TextGenerateEffect
          theme="glass"
          size="xl"
          weight="semibold"
          cursor="bar"
          effect="none"
          speed={speed}
          words={`This text types at ${speed} speed.`}
        />
      </div>
    ))}
  </div>
);
SpeedVariants.parameters = {
  backgrounds: { default: 'dark' },
};

// Size and weight variants
export const SizeAndWeightVariants = () => (
  <div className="space-y-8 p-8 rounded-xl bg-white dark:bg-gray-800 shadow-xl max-w-3xl">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {['sm', 'md', 'lg', 'xl', '2xl', '3xl'].map((size) => (
        <div key={size} className="p-6 rounded-lg bg-gray-900 text-white">
          <h3 className="text-sm font-semibold mb-2 uppercase opacity-60">Size: {size}</h3>
          <TextGenerateEffect
            theme="techDark"
            size={size}
            weight="medium"
            cursor="bar"
            effect="none"
            speed="fast"
            words="Text with different size variants."
          />
        </div>
      ))}
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      {['light', 'normal', 'medium', 'semibold', 'bold'].map((weight) => (
        <div key={weight} className="p-6 rounded-lg bg-gray-900 text-white">
          <h3 className="text-sm font-semibold mb-2 uppercase opacity-60">Weight: {weight}</h3>
          <TextGenerateEffect
            theme="techDark"
            size="xl"
            weight={weight}
            cursor="bar"
            effect="none"
            speed="fast"
            words="Text with different weights."
          />
        </div>
      ))}
    </div>
  </div>
);
SizeAndWeightVariants.parameters = {
  backgrounds: { default: 'dark' },
};

// Loop demo
export const LoopDemo = () => (
  <div className="p-8 rounded-xl bg-white dark:bg-gray-800 shadow-xl max-w-2xl">
    <TextGenerateEffect
      theme="glow"
      size="2xl"
      weight="bold"
      cursor="block"
      effect="glow"
      speed="normal"
      loop={true}
      words="This text will loop after completion..."
    />
  </div>
);
LoopDemo.parameters = {
  backgrounds: { default: 'dark' },
};

// Combined effects showcase
export const CombinedEffects = () => (
  <div className="p-8 rounded-xl bg-white dark:bg-gray-800 shadow-xl max-w-2xl space-y-8">
    <TextGenerateEffect
      theme="techDark"
      size="3xl"
      weight="bold"
      cursor="block"
      effect="gradient"
      speed="normal"
      words="Lumina UI."
    />
    
    <TextGenerateEffect
      theme="techDark"
      size="lg"
      weight="normal"
      cursor="bar"
      effect="none"
      speed="fast"
      delay={1000}
      words="Creating beautiful interfaces with modern, interactive components."
    />
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
      {['Accessible', 'Customizable', 'Interactive'].map((word, index) => (
        <div key={word} className="p-4 rounded-lg bg-gray-800 text-center">
          <TextGenerateEffect
            theme="glow"
            size="xl"
            weight="medium"
            cursor="none"
            effect="glow"
            speed="normal"
            delay={2000 + index * 500}
            words={word}
          />
        </div>
      ))}
    </div>
  </div>
);
CombinedEffects.parameters = {
  backgrounds: { default: 'dark' },
};

// Hero text example
export const HeroText = () => (
  <div className="p-8 rounded-xl bg-gray-900 shadow-xl max-w-3xl text-center">
    <div className="space-y-4">
      <TextGenerateEffect
        theme="techDark"
        size="4xl"
        weight="bold"
        cursor="block"
        effect="gradient"
        speed="normal"
        words="Build incredible UIs"
      />
      
      <TextGenerateEffect
        theme="glass"
        size="lg"
        weight="normal"
        cursor="underscore"
        effect="none"
        speed="normal"
        delay={1500}
        words="Lumina UI provides everything you need to create stunning interactive experiences."
      />
    </div>
    
    <div className="mt-8">
      <button className="px-6 py-3 rounded-lg bg-purple-600 text-white font-medium text-lg hover:bg-purple-700 transition-all duration-200">
        <TextGenerateEffect
          theme="glass"
          size="lg"
          weight="medium"
          cursor="none"
          effect="none"
          speed="fast"
          delay={3000}
          words="Get Started →"
        />
      </button>
    </div>
  </div>
);
HeroText.parameters = {
  backgrounds: { default: 'dark' },
};