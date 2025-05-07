# Lumina UI React

A modern, visually stunning UI component library for React with rich theming and interactive components.

![Lumina UI](https://via.placeholder.com/1200x300/0a0a0a/ffffff?text=Lumina+UI+React)

## Features

- 🎨 **Multiple Themes**: Enterprise, TechDark, Glass, and Neumorphic themes
- 💫 **Interactive Effects**: 3D cards, motion effects, parallax scrolling
- 🌈 **Visual Appeal**: Gradients, glows, glass effects, and more
- 💅 **Fully Customizable**: Tailwind CSS powered with CSS variables
- 📦 **Tree-shakeable**: Import only what you need
- 🚀 **Performant**: Optimized for speed and efficiency
- 📱 **Responsive**: Mobile-first design
- 🎬 **Animated**: Beautiful animations and transitions

## Installation

```bash
npm install lumina-ui-react
# or
yarn add lumina-ui-react
# or
pnpm add lumina-ui-react
```

## Important Usage Notes

### CSS Import

Make sure to import the CSS file correctly:

```jsx
import "lumina-ui-react/dist/lumina-ui-react.css";
```

### Component Usage

When using sub-components, access them through their parent component:

```jsx
// CORRECT way to use sub-components
<UltimateNavbar.Item />
<Card.Header />

// INCORRECT way
import { UltimateNavbarItem } from 'lumina-ui-react'; // This won't work!
```

## Quick Start

```jsx
import { ThemeProvider, Button, Card, HoverCard3D } from 'lumina-ui-react';
import "lumina-ui-react/dist/lumina-ui-react.css";

function App() {
  return (
    <ThemeProvider theme="techDark">
      <div className="p-8">
        <HoverCard3D size="lg" intensity="medium" hoverEffect="glow">
          <Card>
            <Card.Header>
              <Card.Title>Welcome to Lumina UI</Card.Title>
              <Card.Description>A modern UI library for React</Card.Description>
            </Card.Header>
            <Card.Content>
              <p>Build stunning interfaces with ease</p>
            </Card.Content>
            <Card.Footer>
              <Button variant="gradient">Get Started</Button>
            </Card.Footer>
          </Card>
        </HoverCard3D>
      </div>
    </ThemeProvider>
  );
}
```

## Available Themes

Lumina UI includes several beautiful themes:

- **Enterprise**: Clean, professional design for business applications
- **TechDark**: Modern dark theme perfect for developer tools
- **Glass**: Elegant glassmorphism effects with blur and transparency
- **Neumorphic**: Soft UI design with subtle shadows and highlights

```jsx
import { ThemeProvider, useTheme } from 'lumina-ui-react';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  return (
    <div>
      <button onClick={() => setTheme('enterprise')}>Enterprise</button>
      <button onClick={() => setTheme('techDark')}>Tech Dark</button>
      <button onClick={() => setTheme('glass')}>Glass</button>
      <button onClick={() => setTheme('neumorphic')}>Neumorphic</button>
    </div>
  );
}
```

## Component Showcase

### Core Components

- **Button**: Versatile button component with multiple variants and effects
- **Input**: Text input with various styles and states
- **Card**: Flexible card component with header, content, footer sub-components
- **Modal**: Customizable modal dialogs with animations
- **Header**: Responsive header component with navigation support
- **UltimateNavbar**: Advanced navbar with multiple display modes and visual styles

### Navigation Components Example

```jsx
import { UltimateNavbar } from 'lumina-ui-react';
import { Home, Dashboard, Settings } from 'some-icon-library';

// Icons-only navbar with tooltips
<UltimateNavbar
  theme="glass"
  display="iconsOnly"
  tooltipsEnabled={true}
  visualStyle="floating"
>
  <UltimateNavbar.Item icon={<Home />} tooltip="Home" active />
  <UltimateNavbar.Item icon={<Dashboard />} tooltip="Dashboard" />
  <UltimateNavbar.Item icon={<Settings />} tooltip="Settings" />
</UltimateNavbar>
```

### Visual Effect Components

- **HoverCard3D**: Interactive 3D cards with mouse tracking effects
- **MotionCard**: Card components with smooth animations
- **TextGenerateEffect**: Text animations with typewriter-like effects
- **TracingBeam**: Create following highlight effects
- **Spotlight**: Interactive spotlight effect following cursor
- **BackgroundBeams**: Animated beam effects for backgrounds

### Layout and Content Components

- **HeroGrid**: Grid-based hero sections with various layouts
- **BentoGrid**: 3D bento grid layout for showcasing content
- **ImageCard**: Card components optimized for images
- **Carousel**: Animated carousel for content rotation
- **Testimonial3D**: 3D testimonial display with hover effects
- **AnimatedTestimonialSlider**: Animated sliders for testimonials

## Troubleshooting

### Common Issues and Solutions

1. **CSS not loading**
   - Make sure to import the CSS file with the exact path: `import "lumina-ui-react/dist/lumina-ui-react.css";`

2. **Sub-component not found**
   - Always use sub-components through their parent component: `<UltimateNavbar.Item />` instead of importing `UltimateNavbarItem` directly

3. **Theme not working**
   - Verify you're using one of the supported themes: 'enterprise', 'techDark', 'glass', or 'neumorphic'
   - Ensure the ThemeProvider wraps your components

4. **Icons not displaying**
   - Make sure to import and provide the icons from your preferred icon library

5. **Component styles look incorrect**
   - Check for Tailwind CSS conflicts. Lumina UI uses Tailwind CSS internally.

## Documentation

For more detailed documentation, please visit our [GitHub repository](https://github.com/CodeAadarsh/Lumina-UI).

## Examples

Check out our example applications:

```bash
git clone https://github.com/CodeAadarsh/Lumina-UI
cd Lumina-UI
npm install
npm run storybook
```

## Contributing

We welcome contributions! Please feel free to submit a Pull Request.

## License

MIT © 2024 Lumina UI

## Support

- [GitHub Issues](https://github.com/CodeAadarsh/Lumina-UI/issues)

---

Built with ❤️ by [Aadarsh Verma](https://github.com/CodeAadarsh)