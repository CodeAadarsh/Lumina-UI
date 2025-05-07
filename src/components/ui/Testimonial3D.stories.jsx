import React from 'react';
import { Testimonial3D } from './Testimonial3D';

export default {
  title: 'Lumina UI/Testimonial3D',
  component: Testimonial3D,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '3D Testimonial3D component with theme support for Lumina UI.',
      },
    },
  },
  argTypes: {
    theme: {
      control: 'select',
      options: ['enterprise', 'techDark', 'glass', 'neumorphicLight', 'glow', '3d'],
      description: 'Theme style for the testimonial',
      defaultValue: 'enterprise',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the testimonial',
      defaultValue: 'md',
    },
    layout: {
      control: 'select',
      options: ['default', 'horizontal', 'stacked'],
      description: 'Layout of the testimonial',
      defaultValue: 'default',
    },
    animation: {
      control: 'select',
      options: ['none', 'float', 'pulse', 'tilt', 'glow', 'shimmer'],
      description: 'Animation type',
      defaultValue: 'none',
    },
    hoverEffect: {
      control: 'select',
      options: ['none', 'lift', 'border', 'background'],
      description: 'Hover effect type',
      defaultValue: 'none',
    },
    avatarShape: {
      control: 'select',
      options: ['circle', 'square', 'hexagon'],
      description: 'Shape of the avatar',
      defaultValue: 'circle',
    },
    animated3D: {
      control: 'boolean',
      description: 'Enable 3D effect on mouse move',
      defaultValue: true,
    },
    showQuoteIcons: {
      control: 'boolean',
      description: 'Show quote icons',
      defaultValue: true,
    },
    rating: {
      control: { type: 'range', min: 0, max: 5, step: 0.5 },
      description: 'Rating (0-5)',
      defaultValue: 5,
    },
  },
};

// Sample testimonial content
const testimonialContent = {
  quote: "Lumina UI transformed our product design process. The components are beautiful, intuitive and highly responsive.",
  authorName: "Alex Johnson",
  authorTitle: "Product Designer at TechCorp",
  avatarUrl: "/api/placeholder/150/150",
  rating: 5,
};

// Template for basic testimonial story
const Template = (args) => (
  <div className="w-full max-w-2xl">
    <Testimonial3D {...args}>
      <p>This testimonial component supports rich content inside it, not just the quote property.</p>
    </Testimonial3D>
  </div>
);

// Basic story with default args
export const Default = Template.bind({});
Default.args = {
  theme: 'enterprise',
  size: 'md',
  layout: 'default',
  animation: 'none',
  hoverEffect: 'none',
  avatarUrl: testimonialContent.avatarUrl,
  authorName: testimonialContent.authorName,
  authorTitle: testimonialContent.authorTitle,
  quote: testimonialContent.quote,
  rating: testimonialContent.rating,
  showQuoteIcons: true,
  animated3D: true,
};

// Enterprise theme variant
export const EnterpriseTheme = Template.bind({});
EnterpriseTheme.args = {
  ...Default.args,
  theme: 'enterprise',
  animation: 'float',
  hoverEffect: 'lift',
};

// Tech Dark theme variant
export const TechDarkTheme = Template.bind({});
TechDarkTheme.args = {
  ...Default.args,
  theme: 'techDark',
  animation: 'shimmer',
  hoverEffect: 'border',
};
TechDarkTheme.parameters = {
  backgrounds: { default: 'dark' },
};

// Glass theme variant
export const GlassTheme = Template.bind({});
GlassTheme.args = {
  ...Default.args,
  theme: 'glass',
  animation: 'glow',
  hoverEffect: 'background',
};
GlassTheme.parameters = {
  backgrounds: { default: 'gradient' },
};

// Neumorphic Light theme variant
export const NeumorphicLightTheme = Template.bind({});
NeumorphicLightTheme.args = {
  ...Default.args,
  theme: 'neumorphicLight',
  animation: 'float',
  hoverEffect: 'lift',
};
NeumorphicLightTheme.parameters = {
  backgrounds: { default: 'light' },
};

// Glow theme variant
export const GlowTheme = Template.bind({});
GlowTheme.args = {
  ...Default.args,
  theme: 'glow',
  animation: 'shimmer',
  hoverEffect: 'border',
};
GlowTheme.parameters = {
  backgrounds: { default: 'dark' },
};

// 3D theme variant
export const ThreeDTheme = Template.bind({});
ThreeDTheme.args = {
  ...Default.args,
  theme: '3d',
  animation: 'tilt',
  hoverEffect: 'background',
};

// Layout variants
export const LayoutVariants = () => (
  <div className="space-y-12 max-w-4xl">
    <div>
      <h3 className="text-lg font-semibold mb-4">Default Layout</h3>
      <Testimonial3D
        theme="enterprise"
        size="md"
        layout="default"
        animation="none"
        hoverEffect="lift"
        avatarUrl={testimonialContent.avatarUrl}
        authorName={testimonialContent.authorName}
        authorTitle={testimonialContent.authorTitle}
        quote={testimonialContent.quote}
        rating={testimonialContent.rating}
      />
    </div>
    
    <div>
      <h3 className="text-lg font-semibold mb-4">Horizontal Layout</h3>
      <Testimonial3D
        theme="techDark"
        size="md"
        layout="horizontal"
        animation="none"
        hoverEffect="lift"
        avatarUrl={testimonialContent.avatarUrl}
        authorName={testimonialContent.authorName}
        authorTitle={testimonialContent.authorTitle}
        quote={testimonialContent.quote}
        rating={testimonialContent.rating}
      />
    </div>
    
    <div>
      <h3 className="text-lg font-semibold mb-4">Stacked Layout</h3>
      <Testimonial3D
        theme="glass"
        size="md"
        layout="stacked"
        animation="none"
        hoverEffect="lift"
        avatarUrl={testimonialContent.avatarUrl}
        authorName={testimonialContent.authorName}
        authorTitle={testimonialContent.authorTitle}
        quote={testimonialContent.quote}
        rating={testimonialContent.rating}
      />
    </div>
  </div>
);

// Size variants
export const SizeVariants = () => (
  <div className="space-y-12 max-w-4xl">
    <div>
      <h3 className="text-lg font-semibold mb-4">Small Size</h3>
      <Testimonial3D
        theme="enterprise"
        size="sm"
        layout="default"
        animation="none"
        hoverEffect="lift"
        avatarUrl={testimonialContent.avatarUrl}
        authorName={testimonialContent.authorName}
        authorTitle={testimonialContent.authorTitle}
        quote={testimonialContent.quote}
        rating={testimonialContent.rating}
      />
    </div>
    
    <div>
      <h3 className="text-lg font-semibold mb-4">Medium Size</h3>
      <Testimonial3D
        theme="enterprise"
        size="md"
        layout="default"
        animation="none"
        hoverEffect="lift"
        avatarUrl={testimonialContent.avatarUrl}
        authorName={testimonialContent.authorName}
        authorTitle={testimonialContent.authorTitle}
        quote={testimonialContent.quote}
        rating={testimonialContent.rating}
      />
    </div>
    
    <div>
      <h3 className="text-lg font-semibold mb-4">Large Size</h3>
      <Testimonial3D
        theme="enterprise"
        size="lg"
        layout="default"
        animation="none"
        hoverEffect="lift"
        avatarUrl={testimonialContent.avatarUrl}
        authorName={testimonialContent.authorName}
        authorTitle={testimonialContent.authorTitle}
        quote={testimonialContent.quote}
        rating={testimonialContent.rating}
      />
    </div>
  </div>
);

// Animation variants
export const AnimationVariants = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
    {['float', 'pulse', 'tilt', 'glow', 'shimmer'].map(animation => (
      <div key={animation} className="flex flex-col h-full">
        <h3 className="text-lg font-semibold mb-4 capitalize">{animation} Animation</h3>
        <Testimonial3D
          theme="techDark"
          size="md"
          layout="default"
          animation={animation}
          hoverEffect="none"
          animated3D={animation === 'tilt'}
          avatarUrl={testimonialContent.avatarUrl}
          authorName={testimonialContent.authorName}
          authorTitle={testimonialContent.authorTitle}
          quote="Hover over me to see the animation effect in action! Each testimonial shows a different style."
          rating={4.5}
        />
      </div>
    ))}
  </div>
);
AnimationVariants.parameters = {
  backgrounds: { default: 'dark' },
};

// Hover effect variants
export const HoverEffectVariants = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
    {['lift', 'border', 'background'].map(effect => (
      <div key={effect} className="flex flex-col h-full">
        <h3 className="text-lg font-semibold mb-4 capitalize">{effect} Effect</h3>
        <Testimonial3D
          theme="enterprise"
          size="md"
          layout="default"
          animation="none"
          hoverEffect={effect}
          avatarUrl={testimonialContent.avatarUrl}
          authorName={testimonialContent.authorName}
          authorTitle={testimonialContent.authorTitle}
          quote="Hover over me to see the effect in action! Each card demonstrates a different hover behavior."
          rating={5}
        />
      </div>
    ))}
  </div>
);

// Avatar shape variants
export const AvatarShapeVariants = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
    {['circle', 'square', 'hexagon'].map(shape => (
      <div key={shape} className="flex flex-col h-full">
        <h3 className="text-lg font-semibold mb-4 capitalize">{shape} Avatar</h3>
        <Testimonial3D
          theme="glass"
          size="md"
          layout="stacked"
          animation="none"
          hoverEffect="lift"
          avatarShape={shape}
          avatarUrl={testimonialContent.avatarUrl}
          authorName={testimonialContent.authorName}
          authorTitle={testimonialContent.authorTitle}
          quote="Different avatar shapes can help match your brand identity and design system."
          rating={4.5}
        />
      </div>
    ))}
  </div>
);
AvatarShapeVariants.parameters = {
  backgrounds: { default: 'gradient' },
};

// Special combinations showcase
export const SpecialCombinations = () => (
  <div className="space-y-12 max-w-6xl">
    {/* Tech Dark with shimmer effect */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Tech Dark with Shimmer</h3>
      <Testimonial3D
        theme="techDark"
        size="lg"
        layout="horizontal"
        animation="shimmer"
        hoverEffect="border"
        avatarUrl={testimonialContent.avatarUrl}
        authorName="David Park"
        authorTitle="CTO, TechFlow Inc."
        quote="The shimmer effects create a futuristic UI that perfectly matches our brand. Our customers often comment on how polished our interface looks."
        rating={5}
      />
    </div>
    
    {/* Glass effect card */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Glass with Glow</h3>
      <Testimonial3D
        theme="glass"
        size="lg"
        layout="stacked"
        animation="glow"
        hoverEffect="background"
        avatarUrl={testimonialContent.avatarUrl}
        authorName="Emily Watson"
        authorTitle="Lead Designer"
        quote="The glass morphism components and subtle glow effects create a visual experience that's both elegant and modern. It's the perfect balance of style and functionality."
        rating={4.5}
        avatarShape="hexagon"
      />
    </div>
    
    {/* Neumorphic elegant card */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Neumorphic with Float</h3>
      <Testimonial3D
        theme="neumorphicLight"
        size="lg"
        layout="default"
        animation="float"
        hoverEffect="lift"
        avatarUrl={testimonialContent.avatarUrl}
        authorName="Alex Morgan"
        authorTitle="UX Specialist"
        quote="The soft shadows and floating animations create a tactile UI that our users love. It feels like interacting with physical objects rather than flat designs."
        rating={5}
        avatarShape="square"
      />
    </div>
    
    {/* Glow theme card */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Glow Theme</h3>
      <Testimonial3D
        theme="glow"
        size="lg"
        layout="horizontal"
        animation="pulse"
        hoverEffect="border"
        avatarUrl={testimonialContent.avatarUrl}
        authorName="Sophia Martinez"
        authorTitle="Product Manager"
        quote="The glowing effects and subtle animations create an engaging experience that keeps users coming back. Our engagement metrics have significantly improved since the redesign."
        rating={5}
      />
    </div>
  </div>
);
SpecialCombinations.parameters = {
  backgrounds: { default: 'dark' },
};

// Testimonial3D Grid example
export const TestimonialGrid = () => (
  <div className="max-w-6xl">
    <h2 className="text-2xl font-bold mb-6">Customer Testimonials</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {[
        {
          name: "Jennifer Lee",
          title: "Marketing Director",
          quote: "Implementing Lumina UI cut our design time in half. The themed components are incredibly versatile.",
          rating: 5,
          theme: "enterprise"
        },
        {
          name: "Mark Wilson",
          title: "Frontend Developer",
          quote: "The animations and 3D effects create an engaging experience without compromising performance.",
          rating: 4.5,
          theme: "techDark"
        },
        {
          name: "Priya Sharma",
          title: "UX Designer",
          quote: "The neumorphic components create a tactile experience that our users love interacting with.",
          rating: 5,
          theme: "neumorphicLight"
        },
        {
          name: "Carlos Rodriguez",
          title: "Product Manager",
          quote: "Our conversion rates improved by 30% after implementing the glass morphism components.",
          rating: 4.5,
          theme: "glass"
        },
        {
          name: "Sarah Johnson",
          title: "CEO, StartupX",
          quote: "The modern aesthetics of Lumina UI perfectly align with our brand identity and vision.",
          rating: 5,
          theme: "glow"
        },
        {
          name: "Michael Zhang",
          title: "Creative Director",
          quote: "The depth and dimensionality of these components create a premium feel for our application.",
          rating: 5,
          theme: "3d"
        }
      ].map((item, index) => (
        <Testimonial3D
          key={index}
          theme={item.theme}
          size="sm"
          layout="default"
          animation={index % 2 === 0 ? "float" : "pulse"}
          hoverEffect="lift"
          animated3D={true}
          avatarUrl="/api/placeholder/80/80"
          authorName={item.name}
          authorTitle={item.title}
          quote={item.quote}
          rating={item.rating}
        />
      ))}
    </div>
  </div>
);
TestimonialGrid.parameters = {
  layout: 'fullscreen',
};

// Example with ratings only
export const RatingsShowcase = () => (
  <div className="max-w-4xl">
    <h2 className="text-2xl font-bold mb-6">Customer Ratings</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[5, 4.5, 4, 3.5, 3, 2.5].map((rating, index) => (
        <Testimonial3D
          key={index}
          theme={index % 3 === 0 ? "enterprise" : index % 3 === 1 ? "techDark" : "glass"}
          size="sm"
          layout="horizontal"
          animation="none"
          hoverEffect="background"
          animated3D={true}
          avatarUrl="/api/placeholder/80/80"
          authorName={`Customer ${index + 1}`}
          authorTitle="Verified Purchase"
          quote={`This is a ${rating} star review with a brief comment about the product quality.`}
          rating={rating}
        />
      ))}
    </div>
  </div>
);
RatingsShowcase.parameters = {
  backgrounds: { default: 'light' },
};