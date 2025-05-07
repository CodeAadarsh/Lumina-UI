import { useState } from 'react';
import { AnimatedTestimonialSlider } from '../src/components/ui/AnimatedTestimonialSlider';

const TestimonialSliderDemo = () => {
  const [activeTheme, setActiveTheme] = useState('techDark');
  
  // Sample themes
  const themes = [
    { id: 'enterprise', label: 'Enterprise' },
    { id: 'techDark', label: 'Tech Dark' },
    { id: 'glass', label: 'Glass' },
    { id: 'neumorphicLight', label: 'Neumorphic Light' },
    { id: 'glow', label: 'Glow' },
    { id: '3d', label: '3D' },
  ];
  
  // Sample testimonials data
  const testimonials = [
    {
      name: "Sarah Chen",
      title: "Product Manager at TechFlow",
      quote: "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      image: "/api/placeholder/500/500", // Replace with actual image path
    },
    {
      name: "David Park",
      title: "UX Designer at Innovate",
      quote: "The advanced 3D effects and animations create an immersive experience that keeps our users engaged and coming back for more.",
      image: "/api/placeholder/500/500", // Replace with actual image path
    },
    {
      name: "Emily Rodriguez",
      title: "CTO at NextLevel",
      quote: "The component library's versatility and performance have accelerated our development cycles by at least 40%. It's been a game-changer.",
      image: "/api/placeholder/500/500", // Replace with actual image path
    },
    {
      name: "Michael Lee",
      title: "Frontend Lead at PixelPerfect",
      quote: "I've worked with many UI libraries, but this one stands out with its balance of aesthetics and performance. The theming system is exceptional.",
      image: "/api/placeholder/500/500", // Replace with actual image path
    },
  ];
  
  // Get background style based on theme
  const getBackgroundStyle = () => {
    switch (activeTheme) {
      case 'techDark':
        return { 
          backgroundColor: '#121212', 
          backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(79, 70, 229, 0.15), transparent 40%)',
          color: 'white'
        };
      case 'glass':
        return { 
          backgroundImage: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.3))', 
          color: 'white'
        };
      case 'neumorphicLight':
        return { 
          backgroundColor: '#e0e5ec', 
          color: '#333'
        };
      case 'glow':
        return { 
          backgroundColor: '#0f172a', 
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.2), transparent 70%)',
          color: 'white'
        };
      case '3d':
        return { 
          backgroundColor: '#f1f5f9',
          boxShadow: 'inset 0 0 100px rgba(0, 0, 0, 0.05)',
          color: '#333'
        };
      default:
        return { 
          backgroundColor: '#ffffff', 
          color: '#333'
        };
    }
  };
  
  // Get button style based on theme and state
  const getButtonStyle = (isActive) => {
    const baseStyle = "px-4 py-2 rounded-lg font-medium transition-all";
    
    switch (activeTheme) {
      case 'techDark':
        return `${baseStyle} ${isActive 
          ? 'bg-indigo-600 text-white' 
          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`;
      case 'glass':
        return `${baseStyle} ${isActive 
          ? 'bg-white/30 text-white border border-white/30' 
          : 'bg-white/10 text-gray-200 border border-white/10 hover:bg-white/20'}`;
      case 'neumorphicLight':
        return `${baseStyle} ${isActive 
          ? 'bg-[#e0e5ec] text-blue-600 shadow-[inset_3px_3px_6px_#b8b9be,inset_-3px_-3px_6px_#ffffff]' 
          : 'bg-[#e0e5ec] text-gray-600 shadow-[3px_3px_6px_#b8b9be,-3px_-3px_6px_#ffffff] hover:shadow-[1px_1px_2px_#b8b9be,-1px_-1px_2px_#ffffff]'}`;
      case 'glow':
        return `${baseStyle} ${isActive 
          ? 'bg-blue-600 text-white shadow-[0_0_8px_rgba(59,130,246,0.6)]' 
          : 'bg-blue-900/50 text-blue-200 hover:bg-blue-800/50'}`;
      case '3d':
        return `${baseStyle} ${isActive 
          ? 'bg-white text-blue-600 shadow-md transform -translate-y-0.5' 
          : 'bg-gray-100 text-gray-700 hover:bg-white hover:shadow-sm'}`;
      default:
        return `${baseStyle} ${isActive 
          ? 'bg-blue-600 text-white' 
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`;
    }
  };
  
  return (
    <div style={getBackgroundStyle()} className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Animated Testimonials</h1>
          <p className="max-w-2xl mx-auto opacity-80">
            Interactive 3D testimonial cards with smooth animations and theme support.
            Click on the previous or next card to navigate, or use the arrow buttons.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {themes.map(theme => (
              <button
                key={theme.id}
                onClick={() => setActiveTheme(theme.id)}
                className={getButtonStyle(activeTheme === theme.id)}
              >
                {theme.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="mt-8">
          <AnimatedTestimonialSlider
            testimonials={testimonials}
            theme={activeTheme}
            autoplay={true}
            autoplaySpeed={5000}
          />
        </div>
        
        <div className="mt-20 bg-black/20 backdrop-blur-sm rounded-xl p-6 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-4">Usage Example</h3>
          <pre className="bg-black/50 p-4 rounded-lg text-gray-200 overflow-auto">
{`// Import the component
import { AnimatedTestimonialSlider } from './components/AnimatedTestimonialSlider';

// Sample testimonials data
const testimonials = [
  {
    name: "Sarah Chen",
    title: "Product Manager at TechFlow",
    quote: "The attention to detail and innovative features...",
    image: "/path/to/image.jpg", 
  },
  // More testimonials...
];

// Use in your component
const MyComponent = () => {
  return (
    <AnimatedTestimonialSlider
      testimonials={testimonials}
      theme="${activeTheme}"
      autoplay={true}
      autoplaySpeed={5000}
    />
  );
};`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSliderDemo;