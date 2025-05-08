import React from 'react';
import { BentoGrid, BentoGridItem } from './BentoGrid';
import { ThemeProvider } from '../../providers/ThemeProvider';

export default {
  title: 'UI/BentoGrid',
  component: BentoGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Interactive 3D BentoGrid component with parallax and mouse magnetic effects for Lumina UI.',
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className="p-8 min-h-screen bg-background-primary">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  argTypes: {
    cols: {
      control: { type: 'select', options: [1, 2, 3, 4] },
      description: 'Number of columns in the grid',
      defaultValue: 3,
    },
    gap: {
      control: { type: 'select', options: [2, 4, 6, 8] },
      description: 'Gap between grid items',
      defaultValue: 4,
    },
  },
};

// Skeleton component for placeholders
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

// Demo items data
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    icon: (
      <svg className="h-4 w-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
      </svg>
    ),
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    icon: (
      <svg className="h-4 w-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 14v5a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2h5m14 0L12 15m5-5v5" />
      </svg>
    ),
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    icon: (
      <svg className="h-4 w-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
  },
  {
    title: "The Power of Communication",
    description: "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    icon: (
      <svg className="h-4 w-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    icon: (
      <svg className="h-4 w-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    ),
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
    icon: (
      <svg className="h-4 w-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    ),
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
    icon: (
      <svg className="h-4 w-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    ),
  },
];

// Template for basic usage story
const Template = (args) => (
  <BentoGrid {...args} className="max-w-4xl mx-auto">
    {items.map((item, i) => (
      <BentoGridItem
        key={i}
        title={item.title}
        description={item.description}
        header={item.header}
        icon={item.icon}
        className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        hoverEffect="magnet"
        intensity={1}
      />
    ))}
  </BentoGrid>
);

export const Default = Template.bind({});
Default.args = {
  cols: 3,
  gap: 4,
};
Default.parameters = {
  docs: {
    description: {
      story: 'Default BentoGrid with 3 columns and 3D magnetic hover effect.',
    },
  },
};

// Story for different themes
export const Themes = () => {
  const ThemeExample = ({ theme }) => (
    <div className="mb-8">
      <h2 className="text-lg font-bold mb-4 text-foreground-primary capitalize">{theme} Theme</h2>
      <ThemeProvider theme={theme}>
        <BentoGrid className="max-w-4xl" cols={3} gap={4}>
          {items.slice(0, 3).map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              hoverEffect="magnet"
              intensity={1}
            />
          ))}
        </BentoGrid>
      </ThemeProvider>
    </div>
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-foreground-primary">Theme Variants</h1>
      <ThemeExample theme="enterprise" />
      <ThemeExample theme="techDark" />
      <ThemeExample theme="glass" />
      <ThemeExample theme="neumorphic" />
      <ThemeExample theme="glow" />
    </div>
  );
};
Themes.parameters = {
  docs: {
    description: {
      story: 'BentoGrid with different theme variants.',
    },
  },
};

// Story for hover effects
export const HoverEffects = () => {
  const EffectExample = ({ effect }) => (
    <div className="mb-8">
      <h2 className="text-lg font-bold mb-4 text-foreground-primary capitalize">{effect} Effect</h2>
      <BentoGrid className="max-w-4xl" cols={3} gap={4}>
        {items.slice(0, 3).map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            hoverEffect={effect}
            intensity={1}
          />
        ))}
      </BentoGrid>
    </div>
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-foreground-primary">Hover Effect Variants</h1>
      <EffectExample effect="magnet" />
      <EffectExample effect="tilt" />
      <EffectExample effect="float" />
      <EffectExample effect="glow" />
      <EffectExample effect="none" />
    </div>
  );
};
HoverEffects.parameters = {
  docs: {
    description: {
      story: 'BentoGrid with different hover effect variants.',
    },
  },
};

// Story for grid layouts
export const GridLayouts = () => {
  const LayoutExample = ({ cols }) => (
    <div className="mb-8">
      <h2 className="text-lg font-bold mb-4 text-foreground-primary">{cols} Column{cols > 1 ? 's' : ''}</h2>
      <BentoGrid className="max-w-4xl" cols={cols} gap={4}>
        {items.slice(0, cols * 2).map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            hoverEffect="magnet"
            intensity={1}
          />
        ))}
      </BentoGrid>
    </div>
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-foreground-primary">Grid Layout Variants</h1>
      <LayoutExample cols={1} />
      <LayoutExample cols={2} />
      <LayoutExample cols={3} />
      <LayoutExample cols={4} />
    </div>
  );
};
GridLayouts.parameters = {
  docs: {
    description: {
      story: 'BentoGrid with different grid layout configurations.',
    },
  },
};

// Story for varying intensity
export const EffectIntensity = () => {
  const IntensityExample = ({ intensity }) => (
    <div className="mb-8">
      <h2 className="text-lg font-bold mb-4 text-foreground-primary">Intensity: {intensity.toFixed(1)}</h2>
      <BentoGrid className="max-w-4xl" cols={3} gap={4}>
        {items.slice(0, 3).map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            hoverEffect="magnet"
            intensity={intensity}
          />
        ))}
      </BentoGrid>
    </div>
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-foreground-primary">Effect Intensity Variants</h1>
      <IntensityExample intensity={0.5} />
      <IntensityExample intensity={1.0} />
      <IntensityExample intensity={1.5} />
      <IntensityExample intensity={2.0} />
    </div>
  );
};
EffectIntensity.parameters = {
  docs: {
    description: {
      story: 'BentoGrid with different effect intensity values.',
    },
  },
};

// Story with custom content
export const CustomContent = () => (
  <BentoGrid className="max-w-4xl mx-auto" cols={3} gap={4}>
    <BentoGridItem
      className="md:col-span-2"
      hoverEffect="tilt"
      intensity={1}
      header={
        <div className="h-full w-full bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-2xl p-6">
          Featured Content
        </div>
      }
      title="Custom Header Content"
      description="You can customize each part of the card with your own components and content."
      icon={
        <svg className="h-5 w-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      }
    />
    
    <BentoGridItem
      hoverEffect="glow"
      intensity={1.5}
      header={
        <div className="h-full w-full rounded-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1497215842964-222b430dc094" 
            alt="Design" 
            className="h-full w-full object-cover" 
          />
        </div>
      }
      title="Image Content"
      description="Use images in your card headers for visual appeal."
      icon={
        <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      }
    />
    
    <BentoGridItem
      hoverEffect="float"
      intensity={1}
      header={
        <div className="h-full w-full bg-gray-900 rounded-lg flex items-center justify-center p-6">
          <div className="flex space-x-2">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          </div>
        </div>
      }
      title="Code Example"
      description="Use code snippets or terminal UI in your cards."
      icon={
        <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      }
    />
    
    <BentoGridItem
      className="md:col-span-3"
      hoverEffect="magnet"
      intensity={1}
      header={
        <div className="h-full w-full rounded-lg overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          <div className="h-full w-full flex items-center justify-center p-8">
            <h3 className="text-white text-3xl font-bold">Full Width Content</h3>
          </div>
        </div>
      }
      title="Responsive Layouts"
      description="Create spanning items that take full width on different breakpoints."
      icon={
        <svg className="h-5 w-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      }
    />
  </BentoGrid>
);
CustomContent.parameters = {
  docs: {
    description: {
      story: 'BentoGrid with custom content and layouts.',
    },
  },
};

// Responsive story
export const Responsive = () => (
  <div>
    <h1 className="text-2xl font-bold mb-6 text-foreground-primary">Responsive BentoGrid</h1>
    <p className="mb-4 text-foreground-secondary">Resize your browser window to see how the grid adapts to different screen sizes.</p>
    
    <BentoGrid className="max-w-4xl mx-auto" cols={3} gap={4}>
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 ? "md:col-span-2" : i === 6 ? "md:col-span-3" : ""}
          hoverEffect="magnet"
          intensity={1}
        />
      ))}
    </BentoGrid>
  </div>
);
Responsive.parameters = {
  docs: {
    description: {
      story: 'BentoGrid with responsive layout that adapts to different screen sizes.',
    },
  },
};