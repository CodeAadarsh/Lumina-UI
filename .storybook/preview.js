import React from 'react';
import '../src/styles/globals.css';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => React.createElement(
      'div',
      { className: 'p-6 max-w-4xl mx-auto' },
      React.createElement(Story, null)
    ),
  ],
};

export default preview;