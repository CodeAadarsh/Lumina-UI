import React from 'react';
import { 
  ThemeProvider, 
  useTheme, 
  Button, 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent,
  Input,
} from '../src/Index';
import { Moon, Sun, Palette, ChevronRight, Search, Bell, Star } from 'lucide-react';
import EnhancedModalDemo from './EnhancedModalDemo'
import ThemeShowcase from './ThemeShowcase'
import TestimonialSliderDemo from './TestimonialSliderDemo'
import BentoGrid3DDemo from './BentoGrid3DDemo'
import ScratchCardDemoWithTheme from './ScratchCardDemoWithTheme'
function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme}
      className="rounded-full"
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5" />
      ) : theme === 'pearl' ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Palette className="h-5 w-5" />
      )}
    </Button>
  );
}

function DemoApp() {
  const [switchChecked, setSwitchChecked] = React.useState(false);

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-12">
            <h1 className="text-3xl font-bold text-foreground">Lumina UI</h1>
   
        </header>

        {/* Hero Section */}
        <section className="mb-16">
          <Card variant="glass" hover className="p-8">
            <CardContent>
              <h2 className="text-4xl font-bold mb-4">Modern UI Components</h2>
              <p className="text-xl text-muted-foreground mb-6">
                Beautiful, customizable components for your next project
              </p>
              <div className="flex gap-4">
                <Button variant="gradient" size="lg">
                  Get Started
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  View Components
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Components Demo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Button Variants */}
          <Card>
            <CardHeader>
              <CardTitle>Button Variants</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Button variant="default">Default</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="gradient">Gradient</Button>
              <Button variant="shimmer">Shimmer</Button>
            </CardContent>
          </Card>

          {/* Input Variants */}
          <Card>
            <CardHeader>
              <CardTitle>Input Variants</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Default input" />
              <Input 
                variant="filled" 
                placeholder="Filled input" 
                leftIcon={<Search className="h-4 w-4" />}
              />
              <Input 
                variant="underline" 
                placeholder="Underline input" 
              />
              <Input 
                type="password" 
                placeholder="Password input" 
              />
            </CardContent>
          </Card>

          {/* Progress Variants */}
  

          {/* Switch Component */}
   

          {/* Badge Variants */}
          <Card>
            <CardHeader>
              <CardTitle>Badge Variants</CardTitle>
            </CardHeader>

          </Card>

          {/* Avatar Variants */}
    
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-muted-foreground">
          <p>Built with Lumina UI • MIT License</p>
        </footer>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <DemoApp />
      <EnhancedModalDemo/>
      <ThemeShowcase/>
      <TestimonialSliderDemo/>
      <BentoGrid3DDemo/>
      <ScratchCardDemoWithTheme/>
    </ThemeProvider>
  );
}