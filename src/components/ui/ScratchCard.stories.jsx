import React from 'react';
import ScratchCard from './ScratchCard';
import { ThemeProvider } from '../../providers/ThemeProvider';

export default {
  title: 'UI/ScratchCard',
  component: ScratchCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Interactive scratch card component with theme support for Lumina UI.',
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className="p-8 bg-background-primary">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  argTypes: {
    width: {
      control: { type: 'number', min: 100, max: 800 },
      description: 'Width of the scratch card',
      defaultValue: 300,
    },
    height: {
      control: { type: 'number', min: 100, max: 800 },
      description: 'Height of the scratch card',
      defaultValue: 150,
    },
    brushSize: {
      control: { type: 'number', min: 5, max: 50 },
      description: 'Size of the scratch brush',
      defaultValue: 20,
    },
    completionThreshold: {
      control: { type: 'number', min: 10, max: 100 },
      description: 'Percentage threshold to trigger completion',
      defaultValue: 70,
    },
    disabled: {
      control: 'boolean',
      description: 'Disable scratching interaction',
      defaultValue: false,
    },
    revealAll: {
      control: 'boolean',
      description: 'Immediately reveal the entire card',
      defaultValue: false,
    },
    theme: {
      control: 'select',
      options: ['enterprise', 'techDark', 'glass', 'neumorphic', 'glow'],
      description: 'Theme style for the scratch card',
      defaultValue: 'techDark',
    },
    variant: {
      control: 'select',
      options: ['default', 'prize', 'ticket', 'coupon'],
      description: 'Visual variant of the scratch card',
      defaultValue: 'default',
    },
    coverColor: {
      control: 'color',
      description: 'Custom color for the scratch card cover',
    },
  },
};

// Example Prize Icon
const PrizeIcon = () => (
  <svg 
    width="64" 
    height="64" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
    <path d="M15 7a4 4 0 1 0 0 8 4 4 0 1 0 0-8Z" />
    <path d="M9 11h.01" />
    <rect x="1" y="3" width="22" height="8" rx="2" ry="2" />
  </svg>
);

// Example Coupon Icon
const CouponIcon = () => (
  <svg 
    width="64" 
    height="64" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

// Example Ticket Icon
const TicketIcon = () => (
  <svg 
    width="64" 
    height="64" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
    <path d="M13 5v2" />
    <path d="M13 17v2" />
    <path d="M13 11v2" />
  </svg>
);

// Basic template for scratch card stories
const Template = (args) => {
  const [isRevealed, setIsRevealed] = React.useState(false);
  
  return (
    <div className="flex flex-col items-center">
      <ScratchCard
        {...args}
        onComplete={() => setIsRevealed(true)}
      />
      {isRevealed && (
        <div className="mt-2 text-sm text-green-500 font-medium">
          Revealed!
        </div>
      )}
    </div>
  );
};

// Basic scratch card
export const Default = Template.bind({});
Default.args = {
  width: 300,
  height: 150,
  brushSize: 20,
  completionThreshold: 70,
  theme: 'techDark',
  variant: 'default',
  revealContent: (
    <div className="text-center">
      <div className="text-xl font-bold mb-2">YOU WON!</div>
      <div className="text-sm">Congratulations!</div>
    </div>
  ),
};

// Theme variants
export const ThemeVariants = () => {
  const themes = ['enterprise', 'techDark', 'glass', 'neumorphic', 'glow'];
  
  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-foreground-primary">Theme Variants</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {themes.map((theme) => (
          <div key={theme} className="flex flex-col items-center">
            <h3 className="text-sm font-medium mb-2 text-foreground-secondary capitalize">{theme}</h3>
            <ScratchCard
              width={240}
              height={120}
              brushSize={20}
              theme={theme}
              variant="default"
              revealContent={
                <div className="text-center">
                  <div className="font-bold">{theme.toUpperCase()}</div>
                  <div className="text-xs">Theme</div>
                </div>
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// Variant examples
export const VariantExamples = () => {
  const variants = ['default', 'prize', 'ticket', 'coupon'];
  
  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-foreground-primary">Variant Examples</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {variants.map((variant) => (
          <div key={variant} className="flex flex-col items-center">
            <h3 className="text-sm font-medium mb-2 text-foreground-secondary capitalize">{variant}</h3>
            <ScratchCard
              width={300}
              height={150}
              brushSize={20}
              theme="techDark"
              variant={variant}
              revealContent={
                <div className="text-center">
                  {variant === 'prize' && (
                    <>
                      <PrizeIcon />
                      <div className="font-bold mt-2">YOU WON!</div>
                    </>
                  )}
                  {variant === 'ticket' && (
                    <>
                      <TicketIcon />
                      <div className="font-bold mt-2">FREE TICKET</div>
                    </>
                  )}
                  {variant === 'coupon' && (
                    <>
                      <CouponIcon />
                      <div className="font-bold mt-2">20% OFF</div>
                    </>
                  )}
                  {variant === 'default' && (
                    <>
                      <div className="text-xl font-bold mb-2">DEFAULT</div>
                      <div className="text-sm">Basic variant</div>
                    </>
                  )}
                </div>
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// Different sizes
export const SizeExamples = () => {
  const sizes = [
    { width: 200, height: 100, label: 'Small' },
    { width: 300, height: 150, label: 'Medium' },
    { width: 400, height: 200, label: 'Large' },
  ];
  
  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-foreground-primary">Size Examples</h2>
      <div className="grid grid-cols-1 gap-8">
        {sizes.map((size, index) => (
          <div key={index} className="flex flex-col items-center">
            <h3 className="text-sm font-medium mb-2 text-foreground-secondary">{size.label} ({size.width}x{size.height})</h3>
            <ScratchCard
              width={size.width}
              height={size.height}
              brushSize={size.width * 0.07} // Scale brush size with card size
              theme="techDark"
              variant="prize"
              revealContent={
                <div className="text-center">
                  <div className="font-bold" style={{ fontSize: size.width * 0.07 }}>YOU WON!</div>
                  <div style={{ fontSize: size.width * 0.04 }}>A wonderful prize</div>
                </div>
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// Brush size examples
export const BrushSizeExamples = () => {
  const brushSizes = [10, 20, 40];
  
  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-foreground-primary">Brush Size Examples</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {brushSizes.map((size) => (
          <div key={size} className="flex flex-col items-center">
            <h3 className="text-sm font-medium mb-2 text-foreground-secondary">Brush Size: {size}px</h3>
            <ScratchCard
              width={250}
              height={120}
              brushSize={size}
              theme="glass"
              variant="default"
              revealContent={
                <div className="text-center">
                  <div className="font-bold">SIZE {size}</div>
                  <div className="text-xs">Scratch to reveal</div>
                </div>
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// Custom color examples
export const CustomColorExamples = () => {
  const colors = [
    { hex: '#3b82f6', name: 'Blue' },
    { hex: '#8b5cf6', name: 'Purple' },
    { hex: '#ec4899', name: 'Pink' },
    { hex: '#10b981', name: 'Green' },
    { hex: '#f59e0b', name: 'Amber' },
    { hex: '#ef4444', name: 'Red' },
  ];
  
  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-foreground-primary">Custom Color Examples</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {colors.map((color) => (
          <div key={color.name} className="flex flex-col items-center">
            <h3 className="text-sm font-medium mb-2 text-foreground-secondary" style={{ color: color.hex }}>{color.name}</h3>
            <ScratchCard
              width={220}
              height={110}
              brushSize={20}
              theme="techDark"
              variant="default"
              coverColor={color.hex}
              revealContent={
                <div className="text-center">
                  <div className="font-bold" style={{ color: color.hex }}>{color.name}</div>
                  <div className="text-xs">Custom color</div>
                </div>
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// Reveal all example
export const RevealAllExample = () => {
  const [revealed, setRevealed] = React.useState(false);
  
  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-foreground-primary">Reveal All Example</h2>
      <div className="flex flex-col items-center">
        <div className="mb-4">
          <button
            onClick={() => setRevealed(!revealed)}
            className="px-4 py-2 bg-primary-base text-primary-foreground rounded-md font-medium hover:bg-primary-dark transition-colors"
          >
            {revealed ? "Reset Card" : "Reveal Card"}
          </button>
        </div>
        
        <ScratchCard
          width={300}
          height={150}
          brushSize={20}
          theme="glow"
          variant="prize"
          revealAll={revealed}
          revealContent={
            <div className="text-center">
              <PrizeIcon />
              <div className="font-bold mt-2">GRAND PRIZE!</div>
            </div>
          }
        />
      </div>
    </div>
  );
};

// Advanced usage example
export const AdvancedUsage = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-foreground-primary">Advanced Usage</h2>
      <div className="flex flex-col items-center">
        <div className="w-full max-w-md p-4 rounded-lg" style={{ 
          background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)'
        }}>
          <div className="text-white text-center mb-4">
            <h3 className="text-xl font-bold">Win A Prize!</h3>
            <p className="opacity-80">Scratch the card below to reveal your reward</p>
          </div>
          
          <ScratchCard
            width="100%"
            height={200}
            brushSize={30}
            theme="techDark"
            variant="prize"
            revealContent={
              <div className="flex flex-col items-center justify-center h-full">
                <div className="text-2xl font-bold text-yellow-400 mb-2">CONGRATULATIONS!</div>
                <div className="text-lg">You've won a free ticket!</div>
                <div className="mt-4">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
                    Claim Now
                  </button>
                </div>
              </div>
            }
          />
          
          <div className="text-white text-center mt-4 text-sm">
            <p>Limited time offer. Terms & conditions apply.</p>
          </div>
        </div>
      </div>
    </div>
  );
};