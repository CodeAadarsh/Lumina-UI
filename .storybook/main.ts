import type { StorybookConfig } from '@storybook/react-vite';
import { resolve } from 'path';

/**
 * This is the main configuration for Storybook
 * With proper path alias resolution
 */
const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    // Keep your current addons but note they're outdated
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  // This is the key change - adding proper path resolution
  viteFinal: (config) => {
    // Make sure we have a resolve.alias object
    if (!config.resolve) {
      config.resolve = { alias: {} };
    }
    if (!config.resolve.alias) {
      config.resolve.alias = {};
    }

    // Convert to array format for aliases if it's not already
    const aliasEntries = Array.isArray(config.resolve.alias) 
      ? config.resolve.alias 
      : Object.entries(config.resolve.alias).map(([find, replacement]) => ({ find, replacement }));
    
    // Define all your path aliases
    config.resolve.alias = [
      ...aliasEntries,
      { find: '@', replacement: resolve(__dirname, '../src') },
      { find: '@/lib', replacement: resolve(__dirname, '../src/lib') },
      { find: '@/components', replacement: resolve(__dirname, '../src/components') },
      // Add any other aliases your project uses
    ];

    return config;
  },
};

export default config;