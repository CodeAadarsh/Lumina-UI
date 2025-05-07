// Core components
import Button from './components/ui/Button';
import Input from './components/ui/Input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './components/ui/Card';
import ThemeToggle from './components/ui/ThemeToggle';

// Theme provider
import { ThemeProvider, useTheme } from './providers/ThemeProvider';
import { themes, defaultTheme, getTheme, enterpriseTheme, techDarkTheme, glassTheme } from './themes';

// Style import
import './styles/globals.css';

// Version information
export const version = '0.1.0';

// Export all components
export {
  // Core components
  Button,
  Input,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  ThemeToggle,
  
  // Theme providers & utilities
  ThemeProvider,
  useTheme,
  themes,
  defaultTheme,
  getTheme,
  enterpriseTheme,
  techDarkTheme,
  glassTheme,
};