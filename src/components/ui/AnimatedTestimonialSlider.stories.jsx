import React from 'react';
import { AnimatedTestimonialSlider } from './AnimatedTestimonialSlider';

export default {
  title: 'UI/AnimatedTestimonialSlider',
  component: AnimatedTestimonialSlider,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'An animated 3D testimonial slider with theme support for Lumina UI.',
      },
    },
  },
  argTypes: {
    theme: {
      control: 'select',
      options: ['enterprise', 'techDark', 'glass', 'neumorphicLight', 'glow', '3d'],
      description: 'Theme style for the testimonial slider',
      defaultValue: 'techDark',
    },
    autoplay: {
      control: 'boolean',
      description: 'Enable automatic slide advancement',
      defaultValue: true,
    },
    autoplaySpeed: {
      control: { type: 'range', min: 2000, max: 10000, step: 1000 },
      description: 'Time between slide transitions (in milliseconds)',
      defaultValue: 5000,
    },
  },
};

// Sample testimonials data
const testimonials = [
  {
    name: "Sarah Chen",
    title: "Product Manager at TechFlow",
    quote: "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    image: "https://plus.unsplash.com/premium_photo-1713200811001-af93d0dcdfc2?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image path in your project
  },
  {
    name: "David Park",
    title: "UX Designer at Innovate",
    quote: "The advanced 3D effects and animations create an immersive experience that keeps our users engaged and coming back for more.",
    image: "https://images.unsplash.com/photo-1746058370002-3f4732cf3ce7?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image path in your project
  },
  {
    name: "Emily Rodriguez",
    title: "CTO at NextLevel",
    quote: "The component library's versatility and performance have accelerated our development cycles by at least 40%. It's been a game-changer.",
    image: "https://images.unsplash.com/photo-1746365588686-a3e1846a3476?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image path in your project
  },
  {
    name: "Michael Lee",
    title: "Frontend Lead at PixelPerfect",
    quote: "I've worked with many UI libraries, but this one stands out with its balance of aesthetics and performance. The theming system is exceptional.",
    image: "https://images.unsplash.com/photo-1746469435655-00d7340ec1c4?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image path in your project
  },
];

// Template for basic slider story
const Template = (args) => {
  // Get background style based on theme
  const getBackgroundStyle = () => {
    switch (args.theme) {
      case 'techDark':
        return { 
          backgroundColor: '#121212', 
          backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(79, 70, 229, 0.15), transparent 40%)',
          minHeight: '100vh',
          padding: '3rem',
        };
      case 'glass':
        return { 
          backgroundImage: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.3))', 
          minHeight: '100vh',
          padding: '3rem',
        };
      case 'neumorphicLight':
        return { 
          backgroundColor: '#e0e5ec', 
          minHeight: '100vh',
          padding: '3rem',
        };
      case 'glow':
        return { 
          backgroundColor: '#0f172a', 
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.2), transparent 70%)',
          minHeight: '100vh',
          padding: '3rem',
        };
      case '3d':
        return { 
          backgroundColor: '#f1f5f9',
          boxShadow: 'inset 0 0 100px rgba(0, 0, 0, 0.05)',
          minHeight: '100vh',
          padding: '3rem',
        };
      default:
        return { 
          backgroundColor: '#ffffff', 
          minHeight: '100vh',
          padding: '3rem',
        };
    }
  };

  return (
    <div style={getBackgroundStyle()}>
      <h1 className={`text-4xl font-bold mb-8 text-center ${
        args.theme === 'techDark' || args.theme === 'glass' || args.theme === 'glow' 
          ? 'text-white' 
          : 'text-gray-900'
      }`}>
        {args.theme.charAt(0).toUpperCase() + args.theme.slice(1)} Theme
      </h1>
      <AnimatedTestimonialSlider 
        testimonials={testimonials} 
        {...args} 
      />
    </div>
  );
};

// Basic story with default args
export const Default = Template.bind({});
Default.args = {
  theme: 'techDark',
  autoplay: true,
  autoplaySpeed: 5000,
};

// Enterprise theme variant
export const EnterpriseTheme = Template.bind({});
EnterpriseTheme.args = {
  theme: 'enterprise',
  autoplay: true,
  autoplaySpeed: 5000,
};

// Tech Dark theme variant
export const TechDarkTheme = Template.bind({});
TechDarkTheme.args = {
  theme: 'techDark',
  autoplay: true,
  autoplaySpeed: 5000,
};

// Glass theme variant
export const GlassTheme = Template.bind({});
GlassTheme.args = {
  theme: 'glass',
  autoplay: true,
  autoplaySpeed: 5000,
};

// Neumorphic Light theme variant
export const NeumorphicLightTheme = Template.bind({});
NeumorphicLightTheme.args = {
  theme: 'neumorphicLight',
  autoplay: true,
  autoplaySpeed: 5000,
};

// Glow theme variant
export const GlowTheme = Template.bind({});
GlowTheme.args = {
  theme: 'glow',
  autoplay: true,
  autoplaySpeed: 5000,
};

// 3D theme variant
export const ThreeDTheme = Template.bind({});
ThreeDTheme.args = {
  theme: '3d',
  autoplay: true,
  autoplaySpeed: 5000,
};

// All themes showcase
export const AllThemesShowcase = () => {
  const themes = [
    { id: 'enterprise', label: 'Enterprise' },
    { id: 'techDark', label: 'Tech Dark' },
    { id: 'glass', label: 'Glass' },
    { id: 'neumorphicLight', label: 'Neumorphic Light' },
    { id: 'glow', label: 'Glow' },
    { id: '3d', label: '3D' },
  ];
  
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-12 text-center">Themed Testimonial Sliders</h1>
      
      <div className="space-y-24">
        {themes.map(theme => {
          // Get background style based on theme
          const getBackgroundStyle = () => {
            switch (theme.id) {
              case 'techDark':
                return { 
                  backgroundColor: '#121212', 
                  backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(79, 70, 229, 0.15), transparent 40%)',
                  padding: '2rem',
                  borderRadius: '1rem',
                };
              case 'glass':
                return { 
                  backgroundImage: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.3))', 
                  padding: '2rem',
                  borderRadius: '1rem',
                };
              case 'neumorphicLight':
                return { 
                  backgroundColor: '#e0e5ec', 
                  padding: '2rem',
                  borderRadius: '1rem',
                };
              case 'glow':
                return { 
                  backgroundColor: '#0f172a', 
                  backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.2), transparent 70%)',
                  padding: '2rem',
                  borderRadius: '1rem',
                };
              case '3d':
                return { 
                  backgroundColor: '#f1f5f9',
                  boxShadow: 'inset 0 0 100px rgba(0, 0, 0, 0.05)',
                  padding: '2rem',
                  borderRadius: '1rem',
                };
              default:
                return { 
                  backgroundColor: '#ffffff', 
                  padding: '2rem',
                  borderRadius: '1rem',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                };
            }
          };
          
          return (
            <div key={theme.id} style={getBackgroundStyle()}>
              <h2 className={`text-2xl font-bold mb-6 text-center ${
                theme.id === 'techDark' || theme.id === 'glass' || theme.id === 'glow' 
                  ? 'text-white' 
                  : 'text-gray-900'
              }`}>
                {theme.label} Theme
              </h2>
              
              <AnimatedTestimonialSlider
                testimonials={testimonials.slice(0, 3)}
                theme={theme.id}
                autoplay={false}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Custom example with fewer card positions
export const CompactSlider = () => {
  // Create a custom version with only one card visible at a time
  const CustomTestimonialSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const nextSlide = () => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };
    
    const prevSlide = () => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };
    
    return (
      <div className="w-full max-w-screen-md mx-auto">
        <div className="relative flex items-center justify-center py-20">
          {/* Current testimonial */}
          <div 
            className="bg-gray-900 border border-gray-800 shadow-2xl rounded-2xl text-white aspect-square relative max-w-lg w-full transform-gpu transition-all duration-500 ease-out"
          >
            {/* Image */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col p-8 justify-between">
              <div className="space-y-1 mt-auto">
                <h3 className="text-3xl font-bold">{testimonials[currentIndex].name}</h3>
                <p className="text-lg opacity-80">{testimonials[currentIndex].title}</p>
              </div>
              
              <div className="mt-4">
                <p className="text-xl leading-relaxed">
                  {testimonials[currentIndex].quote}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <div className="flex justify-center gap-4 mt-8">
          <button 
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 text-white border border-gray-700 hover:bg-gray-700 focus:outline-none transition-all duration-300"
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          
          <button 
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 text-white border border-gray-700 hover:bg-gray-700 focus:outline-none transition-all duration-300"
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    );
  };
  
  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8 text-white text-center">Compact Testimonial Slider</h1>
      <CustomTestimonialSlider />
    </div>
  );
};

// Interactive example
export const InteractiveDemo = () => {
  const [activeTheme, setActiveTheme] = useState('techDark');
  const [autoplay, setAutoplay] = useState(true);
  const [autoplaySpeed, setAutoplaySpeed] = useState(5000);
  
  const themes = [
    { id: 'enterprise', label: 'Enterprise' },
    { id: 'techDark', label: 'Tech Dark' },
    { id: 'glass', label: 'Glass' },
    { id: 'neumorphicLight', label: 'Neumorphic Light' },
    { id: 'glow', label: 'Glow' },
    { id: '3d', label: '3D' },
  ];
  
  // Get background style based on theme
  const getBackgroundStyle = () => {
    switch (activeTheme) {
      case 'techDark':
        return { 
          backgroundColor: '#121212', 
          backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(79, 70, 229, 0.15), transparent 40%)',
        };
      case 'glass':
        return { 
          backgroundImage: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.3))', 
        };
      case 'neumorphicLight':
        return { 
          backgroundColor: '#e0e5ec', 
        };
      case 'glow':
        return { 
          backgroundColor: '#0f172a', 
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.2), transparent 70%)',
        };
      case '3d':
        return { 
          backgroundColor: '#f1f5f9',
          boxShadow: 'inset 0 0 100px rgba(0, 0, 0, 0.05)',
        };
      default:
        return { 
          backgroundColor: '#ffffff', 
        };
    }
  };
  
  // Get button style based on theme and state
  const getButtonStyle = (isActive) => {
    const baseStyle = "px-3 py-1.5 text-sm font-medium rounded-md transition-all";
    
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
    <div className="min-h-screen p-8" style={getBackgroundStyle()}>
      <div className="max-w-6xl mx-auto">
        <h1 className={`text-4xl font-bold mb-8 text-center ${
          activeTheme === 'techDark' || activeTheme === 'glass' || activeTheme === 'glow' 
            ? 'text-white' 
            : 'text-gray-900'
        }`}>
          Interactive Testimonial Slider
        </h1>
        
        <div className={`p-6 rounded-xl mb-8 ${
          activeTheme === 'techDark' ? 'bg-gray-800/50' : 
          activeTheme === 'glass' ? 'bg-white/10 backdrop-blur-sm' :
          activeTheme === 'neumorphicLight' ? 'bg-[#e0e5ec] shadow-[inset_3px_3px_6px_#b8b9be,inset_-3px_-3px_6px_#ffffff]' :
          activeTheme === 'glow' ? 'bg-gray-900/50' :
          activeTheme === '3d' ? 'bg-white/80 shadow-lg' :
          'bg-gray-100'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className={`text-lg font-medium mb-3 ${
                activeTheme === 'techDark' || activeTheme === 'glass' || activeTheme === 'glow' 
                  ? 'text-white' 
                  : 'text-gray-900'
              }`}>
                Theme
              </h3>
              <div className="flex flex-wrap gap-2">
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
            
            <div>
              <h3 className={`text-lg font-medium mb-3 ${
                activeTheme === 'techDark' || activeTheme === 'glass' || activeTheme === 'glow' 
                  ? 'text-white' 
                  : 'text-gray-900'
              }`}>
                Autoplay Settings
              </h3>
              <div className="flex items-center gap-4 mb-4">
                <label className="flex items-center cursor-pointer">
                  <div className="relative">
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={autoplay}
                      onChange={() => setAutoplay(!autoplay)}
                    />
                    <div className={`w-10 h-6 rounded-full transition ${autoplay ? 'bg-blue-600' : 'bg-gray-400'}`}></div>
                    <div className={`absolute left-1 top-1 w-4 h-4 rounded-full transition transform ${autoplay ? 'translate-x-4 bg-white' : 'bg-white'}`}></div>
                  </div>
                  <span className={`ml-3 text-sm font-medium ${
                    activeTheme === 'techDark' || activeTheme === 'glass' || activeTheme === 'glow' 
                      ? 'text-white' 
                      : 'text-gray-900'
                  }`}>
                    Autoplay
                  </span>
                </label>
              </div>
              
              {autoplay && (
                <div>
                  <label className={`block text-sm font-medium mb-1 ${
                    activeTheme === 'techDark' || activeTheme === 'glass' || activeTheme === 'glow' 
                      ? 'text-white' 
                      : 'text-gray-900'
                  }`}>
                    Speed: {autoplaySpeed / 1000}s
                  </label>
                  <input
                    type="range"
                    min="2000"
                    max="10000"
                    step="1000"
                    value={autoplaySpeed}
                    onChange={(e) => setAutoplaySpeed(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-400 rounded-full appearance-none cursor-pointer"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        
        <AnimatedTestimonialSlider
          testimonials={testimonials}
          theme={activeTheme}
          autoplay={autoplay}
          autoplaySpeed={autoplaySpeed}
        />
      </div>
    </div>
  );
};