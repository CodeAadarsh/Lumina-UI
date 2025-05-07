import { useState, useRef } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from '../src/components/ui/Modal';

const EnhancedModalDemo = () => {
  const [activeTheme, setActiveTheme] = useState('techDark');
  const [activeAnimation, setActiveAnimation] = useState('zoom');
  const [isOpen, setIsOpen] = useState(false);
  const [show3DEffect, setShow3DEffect] = useState(true);
  const [showGlareEffect, setShowGlareEffect] = useState(true);
  const [effectIntensity, setEffectIntensity] = useState('medium');
  
  // Sample themes for selection
  const themes = [
    { id: 'enterprise', label: 'Enterprise' },
    { id: 'techDark', label: 'Tech Dark' },
    { id: 'glass', label: 'Glass' },
    { id: 'neumorphicLight', label: 'Neumorphic Light' },
    { id: 'glow', label: 'Glow' },
    { id: '3d', label: '3D' },
  ];
  
  // Sample animations for selection
  const animations = [
    { id: 'fade', label: 'Fade' },
    { id: 'zoom', label: 'Zoom' },
    { id: 'slide', label: 'Slide' },
    { id: 'flip', label: 'Flip' },
    { id: 'rotate', label: 'Rotate' },
    { id: 'bounce', label: 'Bounce' },
    { id: 'elastic', label: 'Elastic' },
  ];
  
  // Intensity options
  const intensities = [
    { id: 'subtle', label: 'Subtle' },
    { id: 'medium', label: 'Medium' },
    { id: 'strong', label: 'Strong' },
  ];
  
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  
  // Get background style based on theme
  const getBackgroundStyle = () => {
    switch (activeTheme) {
      case 'techDark':
        return { 
          backgroundColor: '#121212', 
          backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1), transparent 40%)',
          color: 'white'
        };
      case 'glass':
        return { 
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))', 
          color: 'white'
        };
      case 'neumorphicLight':
        return { 
          backgroundColor: '#e0e5ec', 
          color: '#333'
        };
      case 'glow':
        return { 
          backgroundColor: '#0f172a', 
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.2), transparent 70%)',
          color: 'white'
        };
      case '3d':
        return { 
          backgroundColor: '#f9fafb',
          boxShadow: 'inset 0 0 100px rgba(0, 0, 0, 0.1)',
          color: '#333'
        };
      default:
        return { 
          backgroundColor: '#f9fafb', 
          color: '#333'
        };
    }
  };
  
  // Get button style based on theme
  const getButtonStyle = () => {
    switch (activeTheme) {
      case 'techDark':
        return 'bg-blue-600 hover:bg-blue-700 text-white border border-blue-700';
      case 'glass':
        return 'bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/30';
      case 'neumorphicLight':
        return 'bg-[#e0e5ec] text-gray-700 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] transition-all';
      case 'glow':
        return 'bg-blue-600 hover:bg-blue-700 text-white border border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] hover:shadow-[0_0_15px_rgba(59,130,246,0.7)]';
      case '3d':
        return 'bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all';
      default:
        return 'bg-blue-600 hover:bg-blue-700 text-white';
    }
  };
  
  // Get toggle style based on theme and state
  const getToggleStyle = (isActive) => {
    const baseStyle = "px-3 py-1.5 text-sm font-medium rounded-md transition-all";
    
    switch (activeTheme) {
      case 'techDark':
        return `${baseStyle} ${isActive 
          ? 'bg-blue-600 text-white' 
          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`;
      case 'glass':
        return `${baseStyle} ${isActive 
          ? 'bg-white/30 text-white border border-white/30' 
          : 'bg-white/10 text-gray-200 border border-white/10 hover:bg-white/20'}`;
      case 'neumorphicLight':
        return `${baseStyle} ${isActive 
          ? 'bg-[#e0e5ec] text-blue-600 shadow-[inset_3px_3px_6px_#b8b9be,inset_-3px_-3px_6px_#ffffff]' 
          : 'bg-[#e0e5ec] text-gray-600 shadow-[3px_3px_6px_#b8b9be,-3px_-3px_6px_#ffffff] hover:shadow-[1px_1px_2px_#b8b9be,-1px_-1px_2px_#ffffff]'}`;
      case 'glow':
        return `${baseStyle} ${isActive 
          ? 'bg-blue-600 text-white shadow-[0_0_8px_rgba(59,130,246,0.6)]' 
          : 'bg-blue-900/50 text-blue-200 hover:bg-blue-800/50'}`;
      case '3d':
        return `${baseStyle} ${isActive 
          ? 'bg-white text-blue-600 shadow-md transform -translate-y-0.5' 
          : 'bg-gray-100 text-gray-700 hover:bg-white hover:shadow-sm'}`;
      default:
        return `${baseStyle} ${isActive 
          ? 'bg-blue-600 text-white' 
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`;
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col" style={getBackgroundStyle()}>
      <div className="flex-1 max-w-6xl w-full mx-auto p-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Enhanced Modal Demo</h1>
          <p className="text-lg opacity-80">
            Explore beautiful modals with 3D effects, animations, and theme variations.
          </p>
        </header>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Customize Your Modal</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Theme</h3>
              <div className="flex flex-wrap gap-2">
                {themes.map(theme => (
                  <button
                    key={theme.id}
                    onClick={() => setActiveTheme(theme.id)}
                    className={getToggleStyle(activeTheme === theme.id)}
                  >
                    {theme.label}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">Animation</h3>
              <div className="flex flex-wrap gap-2">
                {animations.map(anim => (
                  <button
                    key={anim.id}
                    onClick={() => setActiveAnimation(anim.id)}
                    className={getToggleStyle(activeAnimation === anim.id)}
                  >
                    {anim.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-3">3D Effects</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>3D Tilt Effect</span>
                  <button
                    onClick={() => setShow3DEffect(!show3DEffect)}
                    className={getToggleStyle(show3DEffect)}
                  >
                    {show3DEffect ? 'On' : 'Off'}
                  </button>
                </div>
                
                <div className="flex items-center justify-between">
                  <span>Glare Effect</span>
                  <button
                    onClick={() => setShowGlareEffect(!showGlareEffect)}
                    className={getToggleStyle(showGlareEffect)}
                  >
                    {showGlareEffect ? 'On' : 'Off'}
                  </button>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">Effect Intensity</h3>
              <div className="flex flex-wrap gap-2">
                {intensities.map(intensity => (
                  <button
                    key={intensity.id}
                    onClick={() => setEffectIntensity(intensity.id)}
                    className={getToggleStyle(effectIntensity === intensity.id)}
                  >
                    {intensity.label}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex items-end">
              <button
                onClick={openModal}
                className={`w-full py-3 px-6 rounded-lg font-medium text-center transition-all ${getButtonStyle()}`}
              >
                Open Modal
              </button>
            </div>
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Current Configuration</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Theme:</span>
                <span>{themes.find(t => t.id === activeTheme)?.label}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Animation:</span>
                <span>{animations.find(a => a.id === activeAnimation)?.label}</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">3D Effect:</span>
                <span>{show3DEffect ? 'Enabled' : 'Disabled'}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Glare Effect:</span>
                <span>{showGlareEffect ? 'Enabled' : 'Disabled'}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Effect Intensity:</span>
                <span className="capitalize">{effectIntensity}</span>
              </div>
            </div>
          </div>
          
          <div className="mt-6 bg-black/20 rounded-lg p-4 text-sm font-mono overflow-auto">
            <pre>{`<Modal
  theme="${activeTheme}"
  animation="${activeAnimation}"
  show3DEffect={${show3DEffect}}
  showGlareEffect={${showGlareEffect}}
  effectIntensity="${effectIntensity}"
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
>
  <ModalHeader>Modal Title</ModalHeader>
  <ModalBody>
    Your content here...
  </ModalBody>
  <ModalFooter>
    <button onClick={onClose}>Close</button>
  </ModalFooter>
</Modal>`}</pre>
          </div>
        </div>
      </div>
      
      {/* The enhanced modal */}
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        theme={activeTheme}
        animation={activeAnimation}
        size="md"
        show3DEffect={show3DEffect}
        showGlareEffect={showGlareEffect}
        effectIntensity={effectIntensity}
        ariaLabelledby="enhanced-modal-title"
      >
        <ModalHeader id="enhanced-modal-title" theme={activeTheme}>
          Enhanced Modal Example
        </ModalHeader>
        <ModalBody>
          <div className="space-y-4">
            <p className="lead font-medium">
              This is an enhanced modal with beautiful styling and interactive effects.
            </p>
            
            <div className="p-4 rounded-lg bg-black/10">
              <h3 className="font-medium mb-2">Current Settings:</h3>
              <ul className="space-y-1 text-sm">
                <li><span className="font-medium">Theme:</span> {themes.find(t => t.id === activeTheme)?.label}</li>
                <li><span className="font-medium">Animation:</span> {animations.find(a => a.id === activeAnimation)?.label}</li>
                <li><span className="font-medium">3D Effect:</span> {show3DEffect ? 'Enabled' : 'Disabled'}</li>
                <li><span className="font-medium">Glare Effect:</span> {showGlareEffect ? 'Enabled' : 'Disabled'}</li>
                <li><span className="font-medium">Effect Intensity:</span> {effectIntensity}</li>
              </ul>
            </div>
            
            {show3DEffect && (
              <div className="italic text-sm opacity-70">
                Pro tip: Move your mouse around to see the 3D effect in action!
              </div>
            )}
            
            <p>
              This modal adapts its styling based on the active theme, with proper contrast and appropriate effects. 
              Try different combinations to see how they work together.
            </p>
          </div>
        </ModalBody>
        <ModalFooter theme={activeTheme}>
          <button
            className={`px-4 py-2 rounded ${
              activeTheme === 'neumorphicLight'
                ? 'bg-[#e0e5ec] text-gray-700 shadow-[3px_3px_6px_#b8b9be,-3px_-3px_6px_#ffffff] hover:shadow-[inset_3px_3px_6px_#b8b9be,inset_-3px_-3px_6px_#ffffff]'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
            onClick={closeModal}
          >
            Close
          </button>
          <button
            className={`px-4 py-2 rounded ${
              activeTheme === 'glass'
                ? 'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30'
                : activeTheme === 'glow'
                  ? 'bg-blue-600 text-white shadow-[0_0_10px_rgba(59,130,246,0.5)] hover:shadow-[0_0_15px_rgba(59,130,246,0.7)] hover:bg-blue-500'
                  : activeTheme === 'neumorphicLight'
                    ? 'bg-[#e0e5ec] text-blue-600 shadow-[3px_3px_6px_#b8b9be,-3px_-3px_6px_#ffffff] hover:shadow-[inset_3px_3px_6px_#b8b9be,inset_-3px_-3px_6px_#ffffff]'
                    : 'bg-blue-600 text-white hover:bg-blue-500'
            }`}
            onClick={closeModal}
          >
            Save Changes
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default EnhancedModalDemo;