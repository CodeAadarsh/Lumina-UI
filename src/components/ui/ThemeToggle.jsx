import React from 'react';
import { useTheme } from '../../providers/ThemeProvider';
import { Sun, Moon, Palette } from 'lucide-react';

// Style variants for different themes
const themeIconMap = {
  enterprise: Sun,
  techDark: Moon,
  glass: Palette,
};

const ThemeToggle = ({
  className = '',
  showLabel = false,
  size = 'md',
}) => {
  const { theme, setTheme } = useTheme();
  
  // Size variants
  const sizeVariants = {
    sm: 'h-8 w-8 p-1.5',
    md: 'h-10 w-10 p-2',
    lg: 'h-12 w-12 p-2.5',
  };
  
  // Get current theme's icon
  const ThemeIcon = themeIconMap[theme] || Sun;
  
  // Get next theme in the rotation
  const getNextTheme = () => {
    const themes = ['enterprise', 'techDark', 'glass'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    return themes[nextIndex];
  };
  
  // Handle theme toggle click
  const handleToggle = () => {
    setTheme(getNextTheme());
  };
  
  // Theme specific styles
  const getThemeSpecificStyles = () => {
    switch(theme) {
      case 'techDark':
        return 'bg-background-secondary border border-border-strong text-foreground-primary hover:bg-background-tertiary shadow-blue-glow';
      case 'glass':
        return 'glass-effect backdrop-blur-sm border border-white/10 text-foreground-primary hover:bg-white/10 shadow-white-glow';
      default: // enterprise
        return 'bg-background-secondary border border-border text-foreground-primary hover:bg-background-tertiary';
    }
  };
  
  return (
    <div className="flex items-center">
      <button
        onClick={handleToggle}
        className={`rounded-full transition-all ${sizeVariants[size]} ${getThemeSpecificStyles()} ${className}`}
        title={`Toggle theme (current: ${theme})`}
      >
        <ThemeIcon className="w-full h-full" />
      </button>
      
      {showLabel && (
        <span className="ml-2 text-foreground-secondary text-sm">
          {theme.charAt(0).toUpperCase() + theme.slice(1)} Theme
        </span>
      )}
    </div>
  );
};

export default ThemeToggle;