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

## Quick Start

```jsx
import { ThemeProvider, Button, Card, HoverCard3D } from 'lumina-ui-react';
import 'lumina-ui-react/styles';

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

## Component Showcase

### Core Components

- **Button**: Versatile button component with multiple variants and effects
- **Input**: Text input with various styles and states
- **Card**: Flexible card component with header, content, footer sub-components
- **Modal**: Customizable modal dialogs with animations
- **Header**: Responsive header component with navigation support
- **UltimateNavbar**: Advanced navbar with multiple display modes and visual styles

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

### Motion Components

- **ScrollMotion**: Scroll-based animations and effects
- **ScrollMotion3D**: 3D effects triggered by scrolling
- **ParallaxScrollItem**: Create parallax scrolling effects

## Themes

Lumina UI includes several beautiful themes:

### Enterprise
Clean, professional design for business applications.

### TechDark
Modern dark theme perfect for developer tools and applications.

### Glass
Elegant glassmorphism effects with blur and transparency.

### Neumorphic
Soft UI design with subtle shadows and highlights.

```jsx
import { ThemeProvider, useTheme } from 'lumina-ui-react';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  return (
    <div>
      <button onClick={() => setTheme('enterprise')}>Enterprise</button>
      <button onClick={() => setTheme('techDark')}>Tech Dark</button>
      <button onClick={() => setTheme('glass')}>Glass</button>
    </div>
  );
}
```

## Advanced Components

### Interactive Card Examples

```jsx
import { HoverCard3D, MotionCard } from 'lumina-ui-react';

// 3D hover card with glare effect
<HoverCard3D
  theme="techDark"
  size="md"
  intensity="strong"
  hoverEffect="glow"
  glareEnabled={true}
  maxRotation={25}
>
  <div className="p-6">
    <h3 className="text-xl font-bold">Interactive 3D Card</h3>
    <p>Hover over me to see the effect!</p>
  </div>
</HoverCard3D>

// Motion card with animations
<MotionCard>
  <h3>Animated Card</h3>
  <p>With smooth transitions</p>
</MotionCard>
```

### Navigation Components

```jsx
import { UltimateNavbar, Header } from 'lumina-ui-react';

// Icons-only navbar with tooltips
<UltimateNavbar
  theme="glass"
  display="iconsOnly"
  tooltipsEnabled={true}
  visualStyle="floating"
>
  <UltimateNavbar.Item icon={<HomeIcon />} tooltip="Home" active />
  <UltimateNavbar.Item icon={<DashboardIcon />} tooltip="Dashboard" />
  <UltimateNavbar.Item icon={<SettingsIcon />} tooltip="Settings" />
</UltimateNavbar>

// Full-featured header
<Header
  theme="enterprise"
  position="sticky"
  variant="elevated"
>
  <Header.NavItem active>Home</Header.NavItem>
  <Header.NavItem>Features</Header.NavItem>
  <Header.NavItem>Pricing</Header.NavItem>
  <Header.NavItem className="ml-auto">Login</Header.NavItem>
</Header>
```

### Creative Effects

```jsx
import { 
  TracingBeam, 
  Spotlight, 
  TextGenerateEffect, 
  BackgroundBeams 
} from 'lumina-ui-react';

// Text generation effect
<TextGenerateEffect text="Watch this text appear dynamically" />

// Spotlight effect
<Spotlight>
  <h1>Interactive spotlight follows your cursor</h1>
</Spotlight>

// Animated background beams
<BackgroundBeams>
  <div className="relative z-10">
    <h1>Beautiful background effects</h1>
  </div>
</BackgroundBeams>
```

## Documentation

Visit our [documentation site](https://lumina-ui.dev) for detailed guides and API reference.

## Examples

Check out our example applications:

```bash
git clone https://github.com/CodeAadarsh/Lumina-UI
cd Lumina-UI
npm install
npm run storybook
```

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## License

MIT © 2024 Lumina UI

## Support

- [GitHub Issues](https://github.com/CodeAadarsh/Lumina-UI/issues)

---

Built with ❤️ by [Aadarsh Verma](https://github.com/CodeAadarsh)