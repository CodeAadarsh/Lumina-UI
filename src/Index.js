// Core components
import Button from './components/ui/Button';
import Input from './components/ui/Input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './components/ui/Card';
import ThemeToggle from './components/ui/ThemeToggle';
import { UltimateNavbar, navbarVariants, navbarItemVariants } from './components/ui/UltimateNavbar';
import {TracingBeam } from './components/ui/TracingBeam';
import {TextGenerateEffect } from './components/ui/TextGenerateEffect';
import {Testimonial3D } from './components/ui/Testimonial3D';
import {Spotlight } from './components/ui/Spotlight';
import {ScratchCard } from './components/ui/ScratchCard';
import {MotionCard } from './components/ui/MotionCard';
import {Header } from './components/ui/Header';
import { ImageCard, ImageCardExample } from './components/ui/ImageCard';
import { BentoGrid, BentoGridItem } from './components/ui/BentoGrid3D';
import { BackgroundBeams } from './components/ui/BackgroundBeams';
import { AnimatedTestimonialSlider } from './components/ui/AnimatedTestimonialSlider';

import { Carousel, CarouselSlide, CarouselCaption } from './components/ui/CarouselSlide';

import { HoverCard3D, HoverCard3DWithTheme } from './components/ui/HoverCard3D';
import { HeroGrid } from './HeroGrid';


import { Modal, ModalHeader, ModalBody, ModalFooter } from './components/ui/Modal';

import { 
  ScrollMotion, 
  ScrollMotionItem, 
  ScrollMotion3D, 
  ParallaxScrollItem,
  scrollMotionStyles
} from './components/ui/ScrollMotion';

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
  UltimateNavbar,
  TracingBeam,
TextGenerateEffect,
Testimonial3D,
Spotlight,
ScratchCard,
MotionCard,
Header,
ImageCard,
ImageCardExample,
BentoGrid,
BentoGridItem,
BackgroundBeams,
AnimatedTestimonialSlider,
Carousel,
CarouselSlide,
CarouselCaption,
HoverCard3D,
HoverCard3DWithTheme,
HeroGrid,
Modal,
ModalHeader,
ModalBody,
ModalFooter,
  
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