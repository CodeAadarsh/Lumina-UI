# Lumina UI

A modern, customizable UI component library for React with built-in dark mode and pearl white theme support.

## Features

- 🎨 **Multiple Themes**: Light, Dark, and Pearl White themes
- 💅 **Fully Customizable**: Tailwind CSS powered with CSS variables
- 📦 **Tree-shakeable**: Import only what you need
- 🚀 **Performant**: Optimized for speed and efficiency
- 🔑 **TypeScript**: Full TypeScript support
- 🎭 **Accessible**: WCAG compliant components
- 📱 **Responsive**: Mobile-first design
- 🎬 **Animated**: Beautiful animations and transitions

## Installation

```bash
npm install lumina-ui
# or
yarn add lumina-ui
# or
pnpm add lumina-ui
```

## Quick Start

```tsx
import { ThemeProvider, Button, Card, Input } from 'lumina-ui';
import 'lumina-ui/dist/style.css';

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <Card>
        <h1>Welcome to Lumina UI</h1>
        <Button variant="gradient">Get Started</Button>
        <Input placeholder="Search..." />
      </Card>
    </ThemeProvider>
  );
}
```

## Components

- **Button**: Versatile button component with multiple variants
- **Input**: Text input with various styles and states
- **Card**: Flexible card component with sub-components
- **Avatar**: User avatar with fallback support
- **Badge**: Small status indicators
- **Progress**: Progress bars with animations
- **Switch**: Toggle switch component
- ...and more!

## Theme Support

Lumina UI supports three beautiful themes out of the box:

- **Light**: Clean and minimal
- **Dark**: Easy on the eyes
- **Pearl**: Elegant shiny white theme

```tsx
import { ThemeProvider, useTheme } from 'lumina-ui';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Toggle Theme
    </button>
  );
}
```

## Documentation

Visit our [documentation site](https://lumina-ui.dev) for detailed guides and API reference.

## Examples

Check out our example applications:

```bash
git clone https://github.com/yourusername/lumina-ui
cd lumina-ui
npm install
npm run storybook
```

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## License

MIT © 2024 Lumina UI

## Support

- [Documentation](https://lumina-ui.dev)
- [GitHub Issues](https://github.com/yourusername/lumina-ui/issues)
- [Discord Community](https://discord.gg/lumina-ui)

---

Built with ❤️ using React, TypeScript, and Tailwind CSS