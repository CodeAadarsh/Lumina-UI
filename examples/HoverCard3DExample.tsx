import React, { useState } from 'react';
import { HoverCard3D, HoverCard3DWithTheme } from '../components/ui/HoverCard3D';
import { ThemeProvider } from '../providers/ThemeProvider';

// Example data for cards
const cardData = [
  {
    title: "Modern Design System",
    description: "A comprehensive collection of reusable components with a cohesive design language.",
    icon: "🎨",
    theme: "enterprise" as const
  },
  {
    title: "Interactive Experiences",
    description: "Create engaging user interfaces with motion and interactive effects.",
    icon: "✨",
    theme: "techDark" as const
  },
  {
    title: "Responsive & Adaptive",
    description: "Components that work seamlessly across all devices and screen sizes.",
    icon: "📱",
    theme: "glass" as const
  }
];

// Settings interface for the configuration panel
interface CardSettings {
  intensity: 'subtle' | 'medium' | 'strong';
  effect: 'none' | 'glow' | 'shimmer' | 'lift';
  glareEnabled: boolean;
  rotateReverse: boolean;
}

const HoverCard3DExample: React.FC = () => {
  // State for the interactive settings
  const [settings, setSettings] = useState<CardSettings>({
    intensity: 'medium',
    effect: 'glow',
    glareEnabled: true,
    rotateReverse: false,
  });
  
  // Handler for settings changes
  const handleSettingChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === 'checkbox' ? checked : value,
    });
  };
  
  return (
    <div className="container mx-auto p-6">
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold mb-2">HoverCard3D Component</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A showcase of the HoverCard3D component with different themes, configurations, and use cases.
        </p>
      </header>
      
      {/* Interactive Configuration Panel */}
      <div className="mb-12 p-6 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Interactive Settings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Effect Intensity</label>
            <select
              name="intensity"
              value={settings.intensity}
              onChange={handleSettingChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="subtle">Subtle</option>
              <option value="medium">Medium</option>
              <option value="strong">Strong</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Hover Effect</label>
            <select
              name="effect"
              value={settings.effect}
              onChange={handleSettingChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="none">None</option>
              <option value="glow">Glow</option>
              <option value="shimmer">Shimmer</option>
              <option value="lift">Lift</option>
            </select>
          </div>
          
          <div className="flex items-center">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="glareEnabled"
                checked={settings.glareEnabled}
                onChange={handleSettingChange}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded mr-2 focus:ring-blue-500"
              />
              <span className="text-sm font-medium text-gray-700">Glare Effect</span>
            </label>
          </div>
          
          <div className="flex items-center">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="rotateReverse"
                checked={settings.rotateReverse}
                onChange={handleSettingChange}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded mr-2 focus:ring-blue-500"
              />
              <span className="text-sm font-medium text-gray-700">Reverse Rotation</span>
            </label>
          </div>
        </div>
      </div>
      
      {/* Card Examples with Different Themes */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Theme Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <div key={index} className={`${card.theme === 'techDark' || card.theme === 'glass' ? 'bg-gray-900' : 'bg-white'} p-6 rounded-lg`}>
              <HoverCard3D
                theme={card.theme}
                size="md"
                intensity={settings.intensity}
                hoverEffect={settings.effect}
                glareEnabled={settings.glareEnabled}
                rotateReverse={settings.rotateReverse}
                className="h-full"
              >
                <div className="p-4">
                  <div className="text-4xl mb-4">{card.icon}</div>
                  <h3 className={`text-xl font-bold mb-2 ${card.theme === 'techDark' || card.theme === 'glass' ? 'text-white' : 'text-gray-800'}`}>
                    {card.title}
                  </h3>
                  <p className={card.theme === 'techDark' || card.theme === 'glass' ? 'text-gray-300' : 'text-gray-600'}>
                    {card.description}
                  </p>
                </div>
              </HoverCard3D>
            </div>
          ))}
        </div>
      </section>
      
      {/* Usage with ThemeProvider */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Using with ThemeProvider</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-4">With ThemeProvider Context</h3>
            <ThemeProvider theme="techDark">
              <div className="bg-gray-900 p-6 rounded-lg">
                <HoverCard3D
                  intensity={settings.intensity}
                  hoverEffect={settings.effect}
                  glareEnabled={settings.glareEnabled}
                  rotateReverse={settings.rotateReverse}
                >
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-white mb-2">Context-Aware Card</h3>
                    <p className="text-gray-300">
                      This card uses the theme from the ThemeProvider context. No need to specify the theme prop.
                    </p>
                  </div>
                </HoverCard3D>
              </div>
            </ThemeProvider>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Self-Contained ThemeProvider</h3>
            <div className="bg-gradient-to-br from-blue-600/30 to-purple-600/30 p-6 rounded-lg">
              <HoverCard3DWithTheme
                theme="glass"
                intensity={settings.intensity}
                hoverEffect={settings.effect}
                glareEnabled={settings.glareEnabled}
                rotateReverse={settings.rotateReverse}
              >
                <div className="p-4">
                  <h3 className="text-xl font-bold text-white mb-2">Self-Contained Theme</h3>
                  <p className="text-gray-200">
                    This card uses HoverCard3DWithTheme which includes its own ThemeProvider.
                  </p>
                </div>
              </HoverCard3DWithTheme>
            </div>
          </div>
        </div>
      </section>
      
      {/* Practical Example: Product Cards */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Product Card Example</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Premium Headphones", price: "$299", image: "https://via.placeholder.com/300x200", rating: 4.8 },
            { name: "Smart Watch", price: "$199", image: "https://via.placeholder.com/300x200", rating: 4.5 },
            { name: "Wireless Earbuds", price: "$149", image: "https://via.placeholder.com/300x200", rating: 4.6 }
          ].map((product, index) => (
            <HoverCard3D
              key={index}
              theme="techDark"
              hoverEffect="glow"
              intensity={settings.intensity}
              glareEnabled={settings.glareEnabled}
              glareColor="0, 100, 255"
              glareOpacity={0.2}
              className="h-full"
            >
              <div className="relative h-full flex flex-col">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex-grow flex flex-col">
                  <div className="flex items-center mb-2">
                    <div className="text-yellow-400 text-sm">{'★'.repeat(Math.floor(product.rating))}</div>
                    <span className="text-gray-400 text-xs ml-1">({product.rating})</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{product.name}</h3>
                  <div className="mt-auto">
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-white">{product.price}</span>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md transition-colors text-sm">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </HoverCard3D>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HoverCard3DExample;