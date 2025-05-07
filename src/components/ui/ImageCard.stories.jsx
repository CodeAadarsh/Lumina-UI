import React from 'react';
import { ImageCard, ImageCardExample } from './ImageCard';

export default {
  title: 'Lumina UI/HoverCard3D/ImageCards',
  component: ImageCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Image Cards with 3D hover effects for Lumina UI.',
      },
    },
  },
  argTypes: {
    theme: {
      control: 'select',
      options: ['enterprise', 'techDark', 'glass'],
      description: 'Theme style for the card',
      defaultValue: 'techDark',
    },
    intensity: {
      control: 'select',
      options: ['subtle', 'medium', 'strong'],
      description: 'Intensity of the 3D effect',
      defaultValue: 'medium',
    },
    hoverEffect: {
      control: 'select',
      options: ['none', 'glow', 'shimmer', 'lift'],
      description: 'Additional hover effect',
      defaultValue: 'glow',
    },
    imageSrc: {
      control: 'text',
      description: 'URL of the image',
    },
    imageAlt: {
      control: 'text',
      description: 'Alt text for the image',
    },
    title: {
      control: 'text',
      description: 'Card title',
    },
    description: {
      control: 'text',
      description: 'Card description',
    },
  },
};

// Single Image Card Template
const Template = (args) => (
  <div className="w-80">
    <ImageCard {...args} />
  </div>
);

// Basic example
export const Default = Template.bind({});
Default.args = {
  imageSrc: "https://s.yimg.com/ny/api/res/1.2/D7znLdVCngRIDC1OBeB8rw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTI0MDA7aD0xNjAw/https://media.zenfs.com/en/men_s_journal_718/f1d3cf5022dae8c16400c9398cfc52c8",
  imageAlt: "Sample image",
  title: "Card Title",
  description: "This is an example description for the image card component.",
  theme: "techDark",
  hoverEffect: "glow",
  intensity: "medium",
};

// Enterprise Theme
export const EnterpriseImageCard = Template.bind({});
EnterpriseImageCard.args = {
  imageSrc: "https://s.yimg.com/ny/api/res/1.2/D7znLdVCngRIDC1OBeB8rw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTI0MDA7aD0xNjAw/https://media.zenfs.com/en/men_s_journal_718/f1d3cf5022dae8c16400c9398cfc52c8",
  imageAlt: "Enterprise solution visualization",
  title: "Business Intelligence",
  description: "Enterprise-grade analytics solution for data-driven decisions.",
  theme: "enterprise",
  hoverEffect: "glow",
  intensity: "medium",
};
EnterpriseImageCard.parameters = {
  backgrounds: { default: 'light' },
};

// Tech Dark Theme
export const TechDarkImageCard = Template.bind({});
TechDarkImageCard.args = {
  imageSrc: "https://s.yimg.com/ny/api/res/1.2/D7znLdVCngRIDC1OBeB8rw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTI0MDA7aD0xNjAw/https://media.zenfs.com/en/men_s_journal_718/f1d3cf5022dae8c16400c9398cfc52c8",
  imageAlt: "Tech dashboard visualization",
  title: "Developer Tools",
  description: "Advanced tooling with real-time feedback and monitoring.",
  theme: "techDark",
  hoverEffect: "shimmer",
  intensity: "strong",
};
TechDarkImageCard.parameters = {
  backgrounds: { default: 'dark' },
};

// Glass Theme
export const GlassImageCard = Template.bind({});
GlassImageCard.args = {
  imageSrc: "https://s.yimg.com/ny/api/res/1.2/D7znLdVCngRIDC1OBeB8rw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTI0MDA7aD0xNjAw/https://media.zenfs.com/en/men_s_journal_718/f1d3cf5022dae8c16400c9398cfc52c8",
  imageAlt: "Glass interface visualization",
  title: "Modern Interface",
  description: "Contemporary UI with glassmorphism effects and blurs.",
  theme: "glass",
  hoverEffect: "glow",
  intensity: "medium",
};
GlassImageCard.parameters = {
  backgrounds: { 
    default: 'gradient', 
    values: [
      { name: 'gradient', value: 'linear-gradient(to bottom right, #6366f1, #3b82f6)' },
    ],
  },
};

// Product Cards Grid Example
export const ProductCardGrid = () => {
  const products = [
    {
      id: 1,
      imageSrc: "https://s.yimg.com/ny/api/res/1.2/D7znLdVCngRIDC1OBeB8rw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTI0MDA7aD0xNjAw/https://media.zenfs.com/en/men_s_journal_718/f1d3cf5022dae8c16400c9398cfc52c8",
      imageAlt: "Enterprise software dashboard",
      title: "Project Management",
      description: "Streamline your team's workflow with our intuitive project management solution.",
      theme: "enterprise",
      badge: "Business"
    },
    {
      id: 2,
      imageSrc: "https://s.yimg.com/ny/api/res/1.2/D7znLdVCngRIDC1OBeB8rw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTI0MDA7aD0xNjAw/https://media.zenfs.com/en/men_s_journal_718/f1d3cf5022dae8c16400c9398cfc52c8",
      imageAlt: "Data visualization dashboard",
      title: "Analytics Platform",
      description: "Gain insights from your data with powerful visualization and reporting tools.",
      theme: "techDark",
      badge: "Developer"
    },
    {
      id: 3,
      imageSrc: "https://s.yimg.com/ny/api/res/1.2/D7znLdVCngRIDC1OBeB8rw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTI0MDA7aD0xNjAw/https://media.zenfs.com/en/men_s_journal_718/f1d3cf5022dae8c16400c9398cfc52c8",
      imageAlt: "Mobile app interface",
      title: "Mobile Framework",
      description: "Build beautiful cross-platform mobile applications with our modern framework.",
      theme: "glass",
      badge: "Mobile"
    }
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Product Showcase</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map(product => (
          <div key={product.id} className="relative">
            {/* Badge positioned on the card */}
            <div className="absolute top-4 right-4 z-10 px-2 py-1 text-xs font-medium rounded-full bg-primary text-primary-foreground">
              {product.badge}
            </div>
            
            <ImageCard
              imageSrc={product.imageSrc}
              imageAlt={product.imageAlt}
              title={product.title}
              description={product.description}
              theme={product.theme}
              hoverEffect="glow"
              intensity="medium"
              className="h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
ProductCardGrid.parameters = {
  layout: 'fullscreen',
};

// Featured Content Example
export const FeaturedContent = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Featured Content</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          {/* Featured (larger) card */}
          <ImageCard
            imageSrc="/api/placeholder/1200/800"
            imageAlt="Main featured image"
            title="Getting Started with Lumina UI"
            description="Learn how to implement our advanced component library in your next React project. This comprehensive guide covers everything from installation to customization."
            theme="techDark"
            hoverEffect="glow"
            intensity="medium"
            className="h-full"
          />
        </div>
        
        <div className="space-y-6">
          {/* Secondary cards (smaller) */}
          <ImageCard
            imageSrc="https://s.yimg.com/ny/api/res/1.2/D7znLdVCngRIDC1OBeB8rw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTI0MDA7aD0xNjAw/https://media.zenfs.com/en/men_s_journal_718/f1d3cf5022dae8c16400c9398cfc52c8"
            imageAlt="Secondary feature"
            title="Theme Customization"
            description="Adapt Lumina UI to match your brand identity."
            theme="glass"
            hoverEffect="shimmer"
            intensity="subtle"
          />
          
          <ImageCard
            imageSrc="https://s.yimg.com/ny/api/res/1.2/D7znLdVCngRIDC1OBeB8rw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTI0MDA7aD0xNjAw/https://media.zenfs.com/en/men_s_journal_718/f1d3cf5022dae8c16400c9398cfc52c8"
            imageAlt="Secondary feature"
            title="Performance Tips"
            description="Optimize your UI components for maximum speed."
            theme="enterprise"
            hoverEffect="glow"
            intensity="medium"
          />
        </div>
      </div>
    </div>
  );
};
FeaturedContent.parameters = {
  layout: 'fullscreen',
};

// Blog Post Cards Example with Animation Variants
export const BlogCards = () => {
  const posts = [
    {
      id: 1,
      imageSrc: "https://s.yimg.com/ny/api/res/1.2/D7znLdVCngRIDC1OBeB8rw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTI0MDA7aD0xNjAw/https://media.zenfs.com/en/men_s_journal_718/f1d3cf5022dae8c16400c9398cfc52c8",
      imageAlt: "UI design principles",
      title: "Design Principles for Modern UIs",
      description: "Exploring the fundamental principles that make interfaces intuitive and engaging.",
      theme: "enterprise",
      date: "May 2, 2025",
      category: "Design"
    },
    {
      id: 2,
      imageSrc: "https://s.yimg.com/ny/api/res/1.2/D7znLdVCngRIDC1OBeB8rw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTI0MDA7aD0xNjAw/https://media.zenfs.com/en/men_s_journal_718/f1d3cf5022dae8c16400c9398cfc52c8",
      imageAlt: "React performance",
      title: "Optimizing React Components",
      description: "Techniques to improve the performance of your React applications.",
      theme: "techDark",
      date: "April 28, 2025",
      category: "Development"
    },
    {
      id: 3,
      imageSrc: "https://s.yimg.com/ny/api/res/1.2/D7znLdVCngRIDC1OBeB8rw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTI0MDA7aD0xNjAw/https://media.zenfs.com/en/men_s_journal_718/f1d3cf5022dae8c16400c9398cfc52c8",
      imageAlt: "Glassmorphism trend",
      title: "The Rise of Glassmorphism",
      description: "How glass-inspired interfaces are shaping the future of digital design.",
      theme: "glass",
      date: "April 15, 2025",
      category: "Trends"
    }
  ];

  // Custom ImageCard with additional blog post metadata
  const BlogPostCard = ({ post, index }) => (
    <div className="relative" style={{ animationDelay: `${index * 100}ms` }}>
      <ImageCard
        imageSrc={post.imageSrc}
        imageAlt={post.imageAlt}
        title={post.title}
        description={post.description}
        theme={post.theme}
        hoverEffect="glow"
        intensity="medium"
        className="h-full"
      >
        <div className="flex justify-between items-center mt-4 pt-4 border-t border-border">
          <span className="text-xs font-medium text-primary">{post.category}</span>
          <span className="text-xs text-foreground-tertiary">{post.date}</span>
        </div>
      </ImageCard>
    </div>
  );

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Latest Blog Posts</h2>
        <button className="px-4 py-2 bg-background-secondary text-foreground-primary border border-border rounded-md">
          View All
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <BlogPostCard key={post.id} post={post} index={index} />
        ))}
      </div>
    </div>
  );
};
BlogCards.parameters = {
  layout: 'fullscreen',
};