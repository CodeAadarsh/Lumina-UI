import React, { useState, useCallback } from 'react';
import ScratchCard from '../src/components/ui/ScratchCard';
import { ThemeProvider, useTheme } from '../src/providers/ThemeProvider';

// Example icons/content components
const PrizeIcon = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
    <path d="M15 7a4 4 0 1 0 0 8 4 4 0 1 0 0-8Z" />
    <path d="M9 11h.01" />
    <rect x="1" y="3" width="22" height="8" rx="2" ry="2" />
  </svg>
);

const CouponIcon = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

const TicketIcon = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
    <path d="M13 5v2" />
    <path d="M13 17v2" />
    <path d="M13 11v2" />
  </svg>
);

const ThemeControls = ({ activeTheme, setActiveTheme, activeVariant, setActiveVariant }) => {
  const { themes } = useTheme();
  
  return (
    <div className="flex flex-col gap-4 p-4 mb-6 bg-background-tertiary rounded-lg">
      <div>
        <h3 className="text-sm font-medium mb-2 text-foreground-primary">Theme</h3>
        <div className="flex flex-wrap gap-2">
          {themes.map(theme => (
            <button
              key={theme}
              onClick={() => setActiveTheme(theme)}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                activeTheme === theme 
                  ? 'bg-primary-base text-primary-foreground' 
                  : 'bg-background-secondary text-foreground-secondary hover:bg-background-tertiary'
              }`}
            >
              {theme}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2 text-foreground-primary">Variant</h3>
        <div className="flex flex-wrap gap-2">
          {['default', 'prize', 'ticket', 'coupon'].map(variant => (
            <button
              key={variant}
              onClick={() => setActiveVariant(variant)}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                activeVariant === variant 
                  ? 'bg-primary-base text-primary-foreground' 
                  : 'bg-background-secondary text-foreground-secondary hover:bg-background-tertiary'
              }`}
            >
              {variant}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const ScratchCardDemo = () => {
  const [activeTheme, setActiveTheme] = useState('techDark');
  const [activeVariant, setActiveVariant] = useState('default');
  const [revealed, setRevealed] = useState({});
  const [resetKey, setResetKey] = useState(0); // Used to force remount

  // Handle scratch card completion
  const handleComplete = useCallback((id) => {
    setRevealed(prev => ({ ...prev, [id]: true }));
  }, []);

  // Reset all cards
  const handleReset = useCallback(() => {
    setRevealed({});
    setResetKey(prev => prev + 1);
  }, []);

  // Define example cards
  const cards = [
    {
      id: 'discount',
      width: 300,
      height: 150,
      revealContent: (
        <div className="text-center">
          <div className="text-xl font-bold mb-2">20% OFF</div>
          <div className="text-sm">Your next purchase</div>
        </div>
      ),
      icon: <CouponIcon />,
      title: 'Discount Coupon',
    },
    {
      id: 'prize',
      width: 300,
      height: 150,
      revealContent: (
        <div className="text-center">
          <div className="text-xl font-bold mb-2">YOU WON</div>
          <div className="flex items-center justify-center gap-1">
            <span className="text-yellow-500">★</span>
            <span className="font-bold">100 POINTS</span>
            <span className="text-yellow-500">★</span>
          </div>
        </div>
      ),
      icon: <PrizeIcon />,
      title: 'Prize Card',
    },
    {
      id: 'ticket',
      width: 300,
      height: 150,
      revealContent: (
        <div className="text-center">
          <div className="text-xl font-bold mb-2">FREE TICKET</div>
          <div className="text-sm">To our exclusive event</div>
        </div>
      ),
      icon: <TicketIcon />,
      title: 'Event Ticket',
    },
  ];

  return (
    <div className="p-8 bg-background-primary min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-foreground-primary">Scratch Card Component</h1>
        <p className="text-foreground-secondary mb-6">
          Interactive scratch cards with multiple themes and variants. Scratch to reveal the content underneath.
        </p>
      
        <ThemeControls 
          activeTheme={activeTheme} 
          setActiveTheme={setActiveTheme}
          activeVariant={activeVariant}
          setActiveVariant={setActiveVariant}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div key={`${card.id}-${resetKey}`} className="flex flex-col items-center">
              <h3 className="text-foreground-primary font-medium mb-4">{card.title}</h3>
              <ScratchCard
                width={card.width}
                height={card.height}
                revealContent={card.revealContent}
                onComplete={() => handleComplete(card.id)}
                theme={activeTheme}
                variant={activeVariant}
                brushSize={25}
                completionThreshold={50}
              />
              {revealed[card.id] && (
                <div className="mt-2 text-sm text-green-500 font-medium">
                  Revealed!
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-primary-base text-primary-foreground rounded-md font-medium hover:bg-primary-dark transition-colors"
          >
            Reset All Cards
          </button>
        </div>
      </div>
    </div>
  );
};

// Wrapped with ThemeProvider
const ScratchCardDemoWithTheme = () => {
  return (
    <ThemeProvider>
      <ScratchCardDemo />
    </ThemeProvider>
  );
};

export default ScratchCardDemoWithTheme;