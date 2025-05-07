import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import * as pkg from './package.json';
import dts from 'vite-plugin-dts'; 


// List of dependencies to exclude from bundle
const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
];

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      outDir: 'dist/types',
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      // Use the exact path to your index.js file
      entry: resolve(__dirname, 'src/index.js'),
      name: 'LuminaUI',
      fileName: (format) => `index.${format === 'es' ? 'esm' : format}.js`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      // Make sure to externalize deps that shouldn't be bundled
      external,
      output: {
        // Provide global variables to use in UMD build
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'framer-motion': 'FramerMotion',
          'class-variance-authority': 'ClassVarianceAuthority',
          'clsx': 'clsx',
          'tailwind-merge': 'tailwindMerge',
        },
        // Ensure CSS is properly extracted
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'lumina.css';
          return assetInfo.name;
        },
      },
    },
    // Generate sourcemaps
    sourcemap: true,
    // Ensure styles are processed correctly
    cssCodeSplit: false,
  },
});