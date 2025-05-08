import React from 'react';
import type { Preview, StoryFn } from '@storybook/react';
import '../src/styles/globals.css';

/**
 * Storybook preview configuration
 * Converted from JavaScript to TypeScript
 */
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    // You can add theme configuration here if needed
    themes: {
      clearable: false,
      list: [
        { name: 'Light', class: 'light-theme', color: '#ffffff' },
        { name: 'Dark', class: 'dark-theme', color: '#222222' },
        // Add your Lumina UI themes here
      ],
    },
  },
  decorators: [
    (Story: StoryFn) => React.createElement(
      'div',
      { className: 'p-6 max-w-4xl mx-auto' },
      React.createElement(Story, null)
    ),
  ],
};

export default preview;