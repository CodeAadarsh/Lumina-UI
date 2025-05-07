import React from 'react';
import { 
  Button, 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent, 
  CardDescription,
  CardFooter,
  Input,
  ThemeProvider,
  ThemeToggle
} from '../../Index';
import { 
  Sun, 
  Moon, 
  Palette, 
  ArrowRight, 
  Mail, 
  Lock, 
  Search,
  Github,
  Twitter,
  ChevronRight
} from 'lucide-react';

export default {
  title: 'Themes/Showcase',
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-background-primary text-foreground-primary p-8">
        <Story />
      </div>
    ),
  ],
};

// Theme Showcase
export const ThemeShowcase = () => {
  const [activeTheme, setActiveTheme] = React.useState('enterprise');
  
  return (
    <ThemeProvider theme={activeTheme}>
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold mb-2">Lumina UI</h1>
            <p className="text-foreground-secondary text-lg">
              A modern component library with enterprise, tech dark and glass themes
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <button
              onClick={() => setActiveTheme('enterprise')}
              className={`px-4 py-2 rounded-md flex items-center ${
                activeTheme === 'enterprise' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-background-secondary hover:bg-background-tertiary'
              }`}
            >
              <Sun className="mr-2 h-4 w-4" />
              Enterprise
            </button>
            
            <button
              onClick={() => setActiveTheme('techDark')}
              className={`px-4 py-2 rounded-md flex items-center ${
                activeTheme === 'techDark' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-background-secondary hover:bg-background-tertiary'
              }`}
            >
              <Moon className="mr-2 h-4 w-4" />
              Tech Dark
            </button>
            
            <button
              onClick={() => setActiveTheme('glass')}
              className={`px-4 py-2 rounded-md flex items-center ${
                activeTheme === 'glass' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-background-secondary hover:bg-background-tertiary'
              }`}
            >
              <Palette className="mr-2 h-4 w-4" />
              Glass
            </button>
            
            <ThemeToggle showLabel={true} />
          </div>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Card Component Demo */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Card Component</h2>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>This is a simple card with header and content</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-foreground-secondary">
                  Cards are versatile components for displaying content in a clean, organized way.
                  This card uses the default variant for the active theme.
                </p>
                <div className="flex items-center gap-2 bg-background-tertiary p-3 rounded text-sm text-foreground-tertiary">
                  <span>Current theme: </span>
                  <span className="font-bold">{activeTheme}</span>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Save</Button>
              </CardFooter>
            </Card>
            
            <div className="grid grid-cols-2 gap-4">
              <Card variant="outline" padding="sm">
                <CardContent>
                  <h3 className="font-semibold mb-2">Outline Variant</h3>
                  <p className="text-foreground-secondary text-sm">
                    Transparent background with border
                  </p>
                </CardContent>
              </Card>
              
              <Card variant="elevated" padding="sm" effect="hover">
                <CardContent>
                  <h3 className="font-semibold mb-2">Elevated + Hover</h3>
                  <p className="text-foreground-secondary text-sm">
                    With shadow and hover effect
                  </p>
                </CardContent>
              </Card>
              
              <Card variant="glass" padding="sm">
                <CardContent>
                  <h3 className="font-semibold mb-2">Glass Effect</h3>
                  <p className="text-foreground-secondary text-sm">
                    Semi-transparent with blur
                  </p>
                </CardContent>
              </Card>
              
              <Card variant="solid" padding="sm" effect="glow">
                <CardContent>
                  <h3 className="font-semibold mb-2">Solid + Glow</h3>
                  <p className="text-foreground-secondary text-sm">
                    With glowing shadow effect
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Button Component Demo */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Button Component</h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-4">Variants</h3>
              <div className="flex flex-wrap gap-3">
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="gradient">Gradient</Button>
                <Button variant="glass">Glass</Button>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-4">Special Effects</h3>
              <div className="flex flex-wrap gap-3">
                <Button effect="glow">Glow Effect</Button>
                <Button effect="float">Float Effect</Button>
                <Button effect="shimmer">Shimmer Effect</Button>
                <Button effect="gradientBorder">Gradient Border</Button>
                <Button effect="rainbowBorder">Rainbow Border</Button>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-4">With Icons</h3>
              <div className="flex flex-wrap gap-3">
                <Button leftIcon={<Search className="h-4 w-4" />}>Search</Button>
                <Button rightIcon={<ArrowRight className="h-4 w-4" />}>Next Step</Button>
                <Button size="sm" leftIcon={<Github className="h-4 w-4" />}>GitHub</Button>
                <Button size="lg" leftIcon={<Twitter className="h-5 w-5" />}>Twitter</Button>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-4">States</h3>
              <div className="flex flex-wrap gap-3">
                <Button loading>Loading</Button>
                <Button disabled>Disabled</Button>
                <Button variant="gradient" loading>Saving...</Button>
                <Button variant="outline" disabled>Not Available</Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Input Component Demo */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Input Component</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Variants</h3>
              <div className="space-y-4">
                <Input 
                  label="Default Input" 
                  placeholder="Default variant" 
                  helperText="Standard input with border"
                />
                
                <Input 
                  variant="filled" 
                  label="Filled Input" 
                  placeholder="Filled variant" 
                  helperText="Background with no visible border"
                />
                
                <Input 
                  variant="outline" 
                  label="Outline Input" 
                  placeholder="Outline variant" 
                  helperText="Transparent background with border"
                />
                
                <Input 
                  variant="underline" 
                  label="Underline Input" 
                  placeholder="Underline variant" 
                  helperText="Only bottom border is visible"
                />
                
                <Input 
                  variant="glass" 
                  label="Glass Input" 
                  placeholder="Glass variant" 
                  helperText="Semi-transparent with blur effect"
                />
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">With Icons & States</h3>
              <div className="space-y-4">
                <Input 
                  leftIcon={<Mail className="h-4 w-4" />}
                  label="Email Address" 
                  type="email" 
                  placeholder="your@email.com" 
                />
                
                <Input 
                  leftIcon={<Lock className="h-4 w-4" />}
                  label="Password" 
                  type="password" 
                  placeholder="Enter your password" 
                />
                
                <Input 
                  leftIcon={<Search className="h-4 w-4" />}
                  placeholder="Search..." 
                  variant="filled"
                />
                
                <Input 
                  label="Error State" 
                  placeholder="Invalid input" 
                  error="This field is required"
                />
                
                <Input 
                  label="Success State" 
                  placeholder="Valid input" 
                  success="Looks good!"
                  value="john.doe@example.com"
                />
                
                <Input 
                  label="Disabled State" 
                  placeholder="Cannot be edited" 
                  disabled
                  value="Disabled input"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action Card */}
        <Card variant={activeTheme === 'glass' ? 'glass' : 'elevated'} effect={activeTheme === 'techDark' ? 'glow' : 'hover'} className="mb-12">
          <CardContent className="flex flex-col items-center text-center py-8">
            <h2 className="text-3xl font-bold mb-4">Ready to use Lumina UI in your project?</h2>
            <p className="text-foreground-secondary text-lg max-w-2xl mb-6">
              Lumina UI is a modern, fully customizable component library with three beautiful themes.
              Perfect for building enterprise applications, modern tech products, and stunning websites.
            </p>
            <div className="flex gap-4">
              <Button size="lg" variant={activeTheme === 'techDark' ? 'accent-blue' : 'primary'} effect={activeTheme === 'glass' ? 'glow' : 'none'}>
                Get Started
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">View Documentation</Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Theme Comparison */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Theme Comparison</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Enterprise Theme</CardTitle>
                <CardDescription>Clean, professional design</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground-secondary mb-4">
                  Perfect for business applications, dashboards, and enterprise software.
                  Features neutral colors and conventional design patterns.
                </p>
                <Button onClick={() => setActiveTheme('enterprise')} className="w-full">
                  Activate Enterprise
                </Button>
              </CardContent>
            </Card>
            
            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Tech Dark Theme</CardTitle>
                <CardDescription>Modern, dark interface</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground-secondary mb-4">
                  Inspired by Aceternity UI and modern tech companies.
                  Features dark backgrounds, glowing accents, and gradient effects.
                </p>
                <Button onClick={() => setActiveTheme('techDark')} variant="accent-purple" effect="glow" className="w-full">
                  Activate Tech Dark
                </Button>
              </CardContent>
            </Card>
            
            <Card variant="glass" effect="glow">
              <CardHeader>
                <CardTitle>Glass Theme</CardTitle>
                <CardDescription>Elegant transparency effects</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground-secondary mb-4">
                  Modern glassmorphism design with blur effects and subtle transparencies.
                  Perfect for creative applications and innovative interfaces.
                </p>
                <Button onClick={() => setActiveTheme('glass')} variant="glass" effect="glow" className="w-full">
                  Activate Glass
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};