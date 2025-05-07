import React from 'react';
import { HoverCard3DWithTheme } from './HoverCard3D';

// Image Card variant with proper aspect ratio and positioning
export const ImageCard = ({ 
  imageSrc, 
  imageAlt, 
  title, 
  description, 
  theme = 'techDark',
  hoverEffect = 'glow',
  intensity = 'medium',
  className,
  ...props 
}) => {
  return (
    <HoverCard3DWithTheme
      theme={theme}
      hoverEffect={hoverEffect}
      intensity={intensity}
      className={`w-full overflow-hidden ${className}`}
      glareEnabled={true}
      glareOpacity={0.15}
      {...props}
    >
      <div className="flex flex-col h-full">
        <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
          <img 
            src={imageSrc} 
            alt={imageAlt} 
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          {/* Optional overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
        </div>
        
        <div className="p-5 flex-grow">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-foreground-secondary text-sm mb-4">{description}</p>
          
          <div className="mt-auto pt-4 flex justify-between items-center">
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm">
              Learn more
            </button>
            <span className="text-xs text-foreground-tertiary">Hover to interact</span>
          </div>
        </div>
      </div>
    </HoverCard3DWithTheme>
  );
};

// Image Card story setup example
export const ImageCardExample = () => {
  const cards = [
    {
      id: 1,
      imageSrc: "/api/placeholder/800/600",
      imageAlt: "Product design visualization",
      title: "Enterprise Solutions",
      description: "Streamlined business workflows with our enterprise-grade solutions.",
      theme: "enterprise"
    },
    {
      id: 2,
      imageSrc: "/api/placeholder/800/600",
      imageAlt: "Tech dashboard visualization",
      title: "Advanced Analytics",
      description: "Powerful data visualization and real-time insights for your business.",
      theme: "techDark"
    },
    {
      id: 3,
      imageSrc: "/api/placeholder/800/600",
      imageAlt: "Glass interface visualization",
      title: "Modern Interface",
      description: "Sleek, intuitive interfaces with cutting-edge glassmorphism design.",
      theme: "glass"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {cards.map(card => (
        <ImageCard 
          key={card.id}
          imageSrc={card.imageSrc}
          imageAlt={card.imageAlt}
          title={card.title}
          description={card.description}
          theme={card.theme}
        />
      ))}
    </div>
  );
};

export default ImageCardExample;