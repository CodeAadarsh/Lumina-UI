import React, { useState, useCallback, memo } from 'react';
import { BentoGrid, BentoGridItem } from '../src/components/ui/BentoGrid3D';
import { ThemeProvider, useTheme } from '../src/providers/ThemeProvider';

// Icons
const Icons = {
  ClipboardCopy: () => (
    <svg className="h-4 w-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
    </svg>
  ),
  FileBroken: () => (
    <svg className="h-4 w-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 14v5a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2h5m14 0L12 15m5-5v5" />
    </svg>
  ),
  Signature: () => (
    <svg className="h-4 w-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
    </svg>
  ),
  TableColumn: () => (
    <svg className="h-4 w-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>
  ),
  ArrowWaveRightUp: () => (
    <svg className="h-4 w-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  ),
  BoxAlignTopLeft: () => (
    <svg className="h-4 w-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
  ),
  BoxAlignRightFilled: () => (
    <svg className="h-4 w-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  ),
  Palette: () => (
    <svg className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>
  ),
  Mouse: () => (
    <svg className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  Settings: () => (
    <svg className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
};

// Skeleton component (memoized for performance)
const Skeleton = memo(() => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
));
Skeleton.displayName = 'Skeleton';

// Demo items data
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    icon: <Icons.ClipboardCopy />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    icon: <Icons.FileBroken />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    icon: <Icons.Signature />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    icon: <Icons.TableColumn />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    icon: <Icons.ArrowWaveRightUp />,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
    icon: <Icons.BoxAlignTopLeft />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
    icon: <Icons.BoxAlignRightFilled />,
  },
];

// Controls component for better code organization and memoization
const Controls = memo(({ 
  onEffectChange, 
  onIntensityChange, 
  activeEffect, 
  intensity 
}) => {
  const { theme, setTheme, themes } = useTheme();
  
  return (
    <div className="w-full max-w-4xl mb-8 p-4 rounded-xl bg-background-overlay backdrop-blur-sm">
      <h2 className="text-xl font-bold mb-4 text-foreground-primary">Customize BentoGrid</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Theme selector */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Icons.Palette />
            <label className="text-sm font-medium text-foreground-primary">Theme</label>
          </div>
          <div className="flex flex-wrap gap-2">
            {themes.map((themeName) => (
              <button
                key={themeName}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg capitalize transition-colors ${
                  theme === themeName 
                    ? "bg-primary-base text-primary-foreground" 
                    : "bg-background-secondary text-foreground-secondary hover:bg-background-tertiary"
                }`}
                onClick={() => setTheme(themeName)}
              >
                {themeName}
              </button>
            ))}
          </div>
        </div>
        
        {/* Effect selector */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Icons.Mouse />
            <label className="text-sm font-medium text-foreground-primary">Hover Effect</label>
          </div>
          <div className="flex flex-wrap gap-2">
            {["magnet", "tilt", "float", "glow", "none"].map((effect) => (
              <button
                key={effect}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg capitalize transition-colors ${
                  activeEffect === effect 
                    ? "bg-primary-base text-primary-foreground" 
                    : "bg-background-secondary text-foreground-secondary hover:bg-background-tertiary"
                }`}
                onClick={() => onEffectChange(effect)}
              >
                {effect}
              </button>
            ))}
          </div>
        </div>
        
        {/* Intensity control */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Icons.Settings />
            <label className="text-sm font-medium text-foreground-primary">Effect Intensity: {intensity.toFixed(1)}</label>
          </div>
          <input
            type="range"
            min="0.1"
            max="2"
            step="0.1"
            value={intensity}
            onChange={(e) => onIntensityChange(parseFloat(e.target.value))}
            className="w-full h-2 bg-background-tertiary rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
});
Controls.displayName = 'Controls';

// Main demo component
function BentoGridDemo() {
  const [activeEffect, setActiveEffect] = useState("magnet");
  const [intensity, setIntensity] = useState(1);
  
  // Memoized handlers
  const handleEffectChange = useCallback((effect) => {
    setActiveEffect(effect);
  }, []);
  
  const handleIntensityChange = useCallback((value) => {
    setIntensity(value);
  }, []);
  
  return (
    <div className="flex flex-col items-center py-12 px-4 bg-background-primary min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-foreground-primary">Lumina UI BentoGrid</h1>
      
      <Controls 
        activeEffect={activeEffect} 
        intensity={intensity} 
        onEffectChange={handleEffectChange} 
        onIntensityChange={handleIntensityChange} 
      />

      <BentoGrid className="max-w-4xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            hoverEffect={activeEffect}
            intensity={intensity}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

// Wrap the demo component with ThemeProvider
export default function BentoGridDemoWrapper() {
  return (
    <ThemeProvider>
      <BentoGridDemo />
    </ThemeProvider>
  );
}