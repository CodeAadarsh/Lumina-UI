// Core components
import Button, { ButtonProps } from './components/ui/Button';
import Input, { InputProps } from './components/ui/Input';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter,
  CardProps,
  CardHeaderProps,
  CardTitleProps,
  CardDescriptionProps,
  CardContentProps,
  CardFooterProps
} from './components/ui/Card';
import ThemeToggle, { ThemeToggleProps } from './components/ui/ThemeToggle';

import { TextGenerateEffect, textGenerateVariants, TextGenerateEffectProps } from './components/ui/TextGenerateEffect';
import { Testimonial3D, Testimonial3DProps } from './components/ui/Testimonial3D';
import { Spotlight, spotlightVariants, SpotlightProps, SpotlightTheme, SpotlightSize, SpotlightSpotSize, SpotlightIntensity, SpotlightAnimation, SpotlightColor, SpotlightType } from './components/ui/Spotlight';
import { ScratchCard, ScratchCardProps } from './components/ui/ScratchCard';
import { MotionCard, MotionCardContent, MotionCardLayer, motionCardVariants, MotionCardProps, MotionCardContentProps, MotionCardLayerProps, MotionCardVariant, MotionCardIntensity, MotionCardRounded, MotionCardGlow, MotionCardHighlight, MotionCardEffect } from './components/ui/MotionCard';
import { Header, HeaderProps } from './components/ui/Header';

import { 
  BentoGrid, 
  BentoGridItem,
  BentoGridProps,
  BentoGridItemProps
} from './components/ui/BentoGrid';
import { 
  AnimatedTestimonialSlider,
  AnimatedTestimonialSliderProps
} from './components/ui/AnimatedTestimonialSlider';

import { 
  Carousel, 
  CarouselSlide, 
  CarouselCaption,
  CarouselProps,
  CarouselSlideProps,
  CarouselCaptionProps,
  CaptionPosition
} from './components/ui/CarouselSlide';

import { 
  HoverCard3D, 
  HoverCard3DWithTheme,
  HoverCard3DProps,
  HoverCard3DWithThemeProps
} from './components/ui/HoverCard3D';
import { HeroGrid, heroGridVariants, HeroGridProps, HeroGridTheme, HeroGridLayout, HeroGridSize, HeroGridSpacing, HeroGridBackground, HeroGridAlignment } from './components/ui/HeroGrid';

import { 
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter,
  ModalProps,
  ModalHeaderProps,
  ModalBodyProps,
  ModalFooterProps
} from './components/ui/Modal';

import { 
  ScrollMotion, 
  ScrollMotionItem, 
  ScrollMotion3D, 
  ParallaxScrollItem,
  scrollMotionStyles,
  ScrollMotionProps,
  ScrollMotionItemProps,
  ScrollMotion3DProps,
  ParallaxScrollItemProps
} from './components/ui/ScrollMotion';

// Theme provider
import { 
  ThemeProvider, 
  useTheme,
  ThemeProviderProps,
  ThemeContextType,
  ThemeName,
  ThemeConfig
} from './providers/ThemeProvider';
import { 
  themes, 
  defaultTheme, 
  getTheme, 
  enterpriseTheme, 
  techDarkTheme, 
  glassTheme,
  ThemeRegistry
} from './themes/themes';

// Utilities
import { cn } from './utils/cn';

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
  
  // UI components
  TextGenerateEffect,
  textGenerateVariants,
  Testimonial3D,
  Spotlight,
  spotlightVariants,
  ScratchCard,
  MotionCard,
  MotionCardContent,
  MotionCardLayer,
  motionCardVariants,
  Header,
  BentoGrid,
  BentoGridItem,
  AnimatedTestimonialSlider,
  Carousel,
  CarouselSlide,
  CarouselCaption,
  HoverCard3D,
  HoverCard3DWithTheme,
  HeroGrid,
  heroGridVariants,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ScrollMotion,
  ScrollMotionItem,
  ScrollMotion3D,
  ParallaxScrollItem,
  scrollMotionStyles,
  
  // Theme providers & utilities
  ThemeProvider,
  useTheme,
  themes,
  defaultTheme,
  getTheme,
  enterpriseTheme,
  techDarkTheme,
  glassTheme,
  
  // Utilities
  cn,
  
  // Types
  // Button types
  type ButtonProps,
  
  // Input types
  type InputProps,
  
  // Card types
  type CardProps,
  type CardHeaderProps,
  type CardTitleProps,
  type CardDescriptionProps,
  type CardContentProps,
  type CardFooterProps,
  
  // Theme toggle types
  type ThemeToggleProps,
  
  // TextGenerateEffect types
  type TextGenerateEffectProps,
  
  // Testimonial3D types
  type Testimonial3DProps,
  
  // Spotlight types
  type SpotlightProps,
  type SpotlightTheme,
  type SpotlightSize,
  type SpotlightSpotSize,
  type SpotlightIntensity,
  type SpotlightAnimation,
  type SpotlightColor,
  type SpotlightType,
  
  // ScratchCard types
  type ScratchCardProps,
  
  // MotionCard types
  type MotionCardProps,
  type MotionCardContentProps,
  type MotionCardLayerProps,
  type MotionCardVariant,
  type MotionCardIntensity,
  type MotionCardRounded,
  type MotionCardGlow,
  type MotionCardHighlight,
  type MotionCardEffect,
  
  // Header types
  type HeaderProps,
  
  // ImageCard types

  
  // BentoGrid types
  type BentoGridProps,
  type BentoGridItemProps,
  
  // AnimatedTestimonialSlider types
  type AnimatedTestimonialSliderProps,
  
  // Carousel types
  type CarouselProps,
  type CarouselSlideProps,
  type CarouselCaptionProps,
  type CaptionPosition,
  
  // HoverCard3D types
  type HoverCard3DProps,
  type HoverCard3DWithThemeProps,
  
  // HeroGrid types
  type HeroGridProps,
  type HeroGridTheme,
  type HeroGridLayout,
  type HeroGridSize,
  type HeroGridSpacing,
  type HeroGridBackground,
  type HeroGridAlignment,
  
  // Modal types
  type ModalProps,
  type ModalHeaderProps,
  type ModalBodyProps,
  type ModalFooterProps,
  
  // ScrollMotion types
  type ScrollMotionProps,
  type ScrollMotionItemProps,
  type ScrollMotion3DProps,
  type ParallaxScrollItemProps,
  
  // Theme types
  type ThemeProviderProps,
  type ThemeContextType,
  type ThemeName,
  type ThemeConfig,
  type ThemeRegistry
};