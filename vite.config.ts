import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import { readFileSync } from 'fs';

// Read package.json
const pkg = JSON.parse(
  readFileSync('./package.json', 'utf-8')
);

// Type for the package.json dependencies
interface PackageJson {
  dependencies?: Record<string, string>;
  peerDependencies?: Record<string, string>;
  [key: string]: unknown;
}

// List of dependencies to exclude from bundle
const external: string[] = [
  ...Object.keys((pkg as PackageJson).dependencies || {}),
  ...Object.keys((pkg as PackageJson).peerDependencies || {}),
];

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      outDir: 'types', // Changed from 'dist' to 'types' to match package.json
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      exclude: ['**/*.stories.*', '**/*.test.*', '**/storybook/**'],
      // Optional: skip validation step to work around common issues
      skipDiagnostics: true,
      // Generate a single merged declaration file
      bundledPackage: 'lumina-ui-react',
      // Ensure correct paths in declaration files
      respectExternal: true,
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
    // Add extensions to resolve automatically
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  build: {
    lib: {
      // Update to handle both JS and TS entry points
      entry: resolve(__dirname, 'src/index.ts'),
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
          'lucide-react': 'LucideReact',
          '@tabler/icons-react': 'TablerIcons',
        },
        // Ensure CSS is properly extracted
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'lumina-ui-react.css';
          return assetInfo.name;
        },
        // Generate cleaner exports
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    },
    // Generate sourcemaps
    sourcemap: true,
    // Ensure styles are processed correctly
    cssCodeSplit: false,
    // Output directory
    outDir: 'dist',
  },
  // Add optimizeDeps to improve development experience
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
});