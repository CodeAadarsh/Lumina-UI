import { useState, useEffect } from 'react';
import { Testimonial } from '../src/components/ui/Testimonial3D';

const ThemeShowcase = () => {
  const [activeTheme, setActiveTheme] = useState('techDark');
  const [activeAnimation, setActiveAnimation] = useState('float');
  const [activeHoverEffect, setActiveHoverEffect] = useState('none');
  const [activeLayout, setActiveLayout] = useState('default');
  const [show3DEffect, setShow3DEffect] = useState(true);
  
  // Sample themes, animations, and hover effects
  const themes = [
    { id: 'enterprise', label: 'Enterprise' },
    { id: 'techDark', label: 'Tech Dark' },
    { id: 'glass', label: 'Glass' },
    { id: 'neumorphicLight', label: 'Neumorphic Light' },
    { id: 'glow', label: 'Glow' },
    { id: '3d', label: '3D' },
  ];
  
  const animations = [
    { id: 'none', label: 'None' },
    { id: 'float', label: 'Float' },
    { id: 'pulse', label: 'Pulse' },
    { id: 'tilt', label: 'Tilt' },
    { id: 'glow', label: 'Glow' },
    { id: 'shimmer', label: 'Shimmer' },
  ];
  
  const hoverEffects = [
    { id: 'none', label: 'None' },
    { id: 'lift', label: 'Lift' },
    { id: 'border', label: 'Border' },
    { id: 'background', label: 'Background' },
  ];
  
  const layouts = [
    { id: 'default', label: 'Default' },
    { id: 'horizontal', label: 'Horizontal' },
    { id: 'stacked', label: 'Stacked' },
  ];
  
  // Sample testimonials data
  const testimonials = [
    {
      id: 1,
      quote: "Lumina UI transformed our product design. The components are not just beautiful, they're also incredibly intuitive and responsive.",
      authorName: "Sarah Johnson",
      authorTitle: "Chief Design Officer",
      avatarUrl: "/api/placeholder/150/150",
      rating: 5,
    },
    {
      id: 2,
      quote: "The 3D effects and animations in this library bring our interface to life. Our users are amazed by the immersive experience.",
      authorName: "Michael Chen",
      authorTitle: "Frontend Developer",
      avatarUrl: "/api/placeholder/150/150",
      rating: 4.5,
    },
    {
      id: 3,
      quote: "I've worked with many UI libraries, but Lumina stands out with its perfect balance of aesthetics and performance. The themed components save us countless hours.",
      authorName: "Jessica Rodriguez",
      authorTitle: "Product Manager",
      avatarUrl: "/api/placeholder/150/150",
      rating: 5,
    },
  ];
  
  // Get background style based on theme
  const getBackgroundStyle = () => {
    switch (activeTheme) {
      case 'techDark':
        return { 
          backgroundColor: '#111827', 
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
  
  // Rotation effect for showcase testimonials
  const [rotation, setRotation] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  return (
    <div style={getBackgroundStyle()} className="min-h-screen flex flex-col">
      <div className="max-w-6xl mx-auto w-full py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-4">3D Testimonials</h1>
        <p className="text-center mb-8 opacity-80">
          Interactive showcase of themed testimonial components with animations and 3D effects
        </p>
        
        {/* Controls */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Theme</h3>
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
              <h3 className="text-lg font-medium mb-3">Animation</h3>
              <div className="flex flex-wrap gap-2">
                {animations.map(anim => (
                  <button
                    key={anim.id}
                    onClick={() => setActiveAnimation(anim.id)}
                    className={getButtonStyle(activeAnimation === anim.id)}
                  >
                    {anim.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Hover Effect</h3>
              <div className="flex flex-wrap gap-2">
                {hoverEffects.map(effect => (
                  <button
                    key={effect.id}
                    onClick={() => setActiveHoverEffect(effect.id)}
                    className={getButtonStyle(activeHoverEffect === effect.id)}
                  >
                    {effect.label}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">Layout</h3>
              <div className="flex flex-wrap gap-2">
                {layouts.map(layout => (
                  <button
                    key={layout.id}
                    onClick={() => setActiveLayout(layout.id)}
                    className={getButtonStyle(activeLayout === layout.id)}
                  >
                    {layout.label}
                  </button>
                ))}
              </div>
              
              <div className="flex items-center mt-4">
                <label className="flex items-center cursor-pointer">
                  <div className="relative">
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={show3DEffect}
                      onChange={() => setShow3DEffect(!show3DEffect)}
                    />
                    <div className={`w-10 h-6 rounded-full transition ${show3DEffect ? 'bg-blue-600' : 'bg-gray-400'}`}></div>
                    <div className={`absolute left-1 top-1 w-4 h-4 rounded-full transition transform ${show3DEffect ? 'translate-x-4 bg-white' : 'bg-white'}`}></div>
                  </div>
                  <span className="ml-3 text-sm font-medium">3D Mouse Effect</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main showcase */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Active Configuration</h2>
          <div className="max-w-3xl mx-auto">
            <Testimonial
              theme={activeTheme}
              size="md"
              layout={activeLayout}
              animation={activeAnimation}
              hoverEffect={activeHoverEffect}
              animated3D={show3DEffect}
              avatarUrl={testimonials[rotation].avatarUrl}
              authorName={testimonials[rotation].authorName}
              authorTitle={testimonials[rotation].authorTitle}
              quote={testimonials[rotation].quote}
              rating={testimonials[rotation].rating}
              showQuoteIcons={true}
            />
          </div>
        </div>
        
        {/* Theme gallery */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">Theme Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {themes.map((theme, index) => (
              <div key={theme.id} className="flex flex-col h-full">
                <h3 className="font-medium mb-3 text-center">{theme.label}</h3>
                <Testimonial
                  theme={theme.id}
                  size="md"
                  layout="default"
                  animation="none"
                  hoverEffect="lift"
                  animated3D={true}
                  avatarUrl={testimonials[index % testimonials.length].avatarUrl}
                  authorName={testimonials[index % testimonials.length].authorName}
                  authorTitle={testimonials[index % testimonials.length].authorTitle}
                  quote={testimonials[index % testimonials.length].quote}
                  rating={testimonials[index % testimonials.length].rating}
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Layout gallery */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Layout Gallery</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {layouts.map((layout, index) => (
              <div key={layout.id} className="flex flex-col h-full">
                <h3 className="font-medium mb-3 text-center">{layout.label}</h3>
                <Testimonial
                  theme={activeTheme}
                  size="md"
                  layout={layout.id}
                  animation="none"
                  hoverEffect="lift"
                  animated3D={true}
                  avatarUrl={testimonials[index % testimonials.length].avatarUrl}
                  authorName={testimonials[index % testimonials.length].authorName}
                  authorTitle={testimonials[index % testimonials.length].authorTitle}
                  quote={testimonials[index % testimonials.length].quote}
                  rating={testimonials[index % testimonials.length].rating}
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Animation gallery */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Animation Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {animations.filter(a => a.id !== 'none').map((animation, index) => (
              <div key={animation.id} className="flex flex-col h-full">
                <h3 className="font-medium mb-3 text-center">{animation.label}</h3>
                <Testimonial
                  theme={activeTheme}
                  size="md"
                  layout="default"
                  animation={animation.id}
                  hoverEffect="none"
                  animated3D={animation.id === 'tilt'}
                  avatarUrl={testimonials[index % testimonials.length].avatarUrl}
                  authorName={testimonials[index % testimonials.length].authorName}
                  authorTitle={testimonials[index % testimonials.length].authorTitle}
                  quote="Hover over me to see the animation effect in action! Each testimonial showcases a different animation style."
                  rating={4}
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Customized examples */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Special Combinations</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Glowing tech card */}
            <Testimonial
              theme="glow"
              size="lg"
              layout="horizontal"
              animation="glow"
              hoverEffect="border"
              animated3D={true}
              avatarUrl="/api/placeholder/150/150"
              authorName="Alex Morgan"
              authorTitle="CTO at TechFlow"
              quote="The glow effects and animations create a futuristic UI that perfectly matches our brand identity. Simply stunning!"
              rating={5}
              avatarShape="hexagon"
            />
            
            {/* Glass effect card */}
            <Testimonial
              theme="glass"
              size="lg"
              layout="stacked"
              animation="shimmer"
              hoverEffect="background"
              animated3D={true}
              avatarUrl="/api/placeholder/150/150"
              authorName="Emily Watson"
              authorTitle="Lead Designer"
              quote="The glass morphism components are elegant and provide a perfect balance of depth and clarity. My design team loves working with this library."
              rating={4.5}
            />
            
            {/* Neumorphic light card */}
            <Testimonial
              theme="neumorphicLight"
              size="lg"
              layout="default"
              animation="float"
              hoverEffect="lift"
              animated3D={true}
              avatarUrl="/api/placeholder/150/150"
              authorName="David Park"
              authorTitle="UX Specialist"
              quote="The soft shadows and subtle animations create a tactile, physical feel that our users love. It's refreshing to see such attention to detail."
              rating={5}
              avatarShape="square"
            />
            
            {/* 3D theme card */}
            <Testimonial
              theme="3d"
              size="lg"
              layout="horizontal"
              animation="pulse"
              hoverEffect="border"
              animated3D={true}
              avatarUrl="/api/placeholder/150/150"
              authorName="Sophia Martinez"
              authorTitle="Product Manager"
              quote="The depth and dimensionality of these components create an engaging experience that keeps users coming back. Truly next-level design."
              rating={5}
            />
          </div>
        </div>
        
        {/* Interactive gallery */}
        <div className="mt-16 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Interactive Gallery</h2>
          <p className="text-center mb-8 opacity-80">
            Hover over each card to experience the combined effects
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { theme: 'enterprise', animation: 'float', hover: 'lift' },
              { theme: 'techDark', animation: 'shimmer', hover: 'border' },
              { theme: 'glass', animation: 'glow', hover: 'background' },
              { theme: 'neumorphicLight', animation: 'pulse', hover: 'lift' },
              { theme: 'glow', animation: 'shimmer', hover: 'border' },
              { theme: '3d', animation: 'tilt', hover: 'background' },
              { theme: 'enterprise', animation: 'glow', hover: 'background' },
              { theme: 'techDark', animation: 'float', hover: 'lift' },
            ].map((config, index) => (
              <div key={index} className="h-full">
                <Testimonial
                  theme={config.theme}
                  size="sm"
                  layout="stacked"
                  animation={config.animation}
                  hoverEffect={config.hover}
                  animated3D={config.animation === 'tilt'}
                  avatarUrl="/api/placeholder/80/80"
                  authorName={testimonials[index % testimonials.length].authorName}
                  quote="Hover to see effects!"
                  rating={4 + (index % 2)}
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Code preview */}
        <div className="bg-black/80 rounded-xl p-6 mt-16">
          <h3 className="text-white text-lg font-medium mb-3">Usage Example</h3>
          <pre className="text-gray-300 text-sm overflow-auto p-4 bg-black/50 rounded-lg">
{`<Testimonial
  theme="${activeTheme}"
  layout="${activeLayout}"
  animation="${activeAnimation}"
  hoverEffect="${activeHoverEffect}"
  animated3D={${show3DEffect}}
  avatarUrl="/path/to/avatar.jpg"
  authorName="Jane Doe"
  authorTitle="CEO, Example Inc."
  rating={5}
  quote="Your testimonial text goes here..."
/>`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default ThemeShowcase;