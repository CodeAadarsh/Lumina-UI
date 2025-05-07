import React from 'react';
import { TracingBeam } from './TracingBeam';

export default {
  title: 'Lumina UI/TracingBeam',
  component: TracingBeam,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A scrolling tracing beam component with theme support for Lumina UI.',
      },
    },
  },
  argTypes: {
    theme: {
      control: 'select',
      options: ['enterprise', 'techDark', 'glass', 'neumorphicLight', 'glow', '3d'],
      description: 'Theme style for the tracing beam',
      defaultValue: 'techDark',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size and spacing of the content',
      defaultValue: 'md',
    },
    position: {
      control: 'select',
      options: ['left', 'right', 'center'],
      description: 'Position of the tracing beam',
      defaultValue: 'left',
    },
    beamStyle: {
      control: 'select',
      options: ['solid', 'gradient', 'dashed', 'dotted', 'glow'],
      description: 'Style of the beam line',
      defaultValue: 'gradient',
    },
    marker: {
      control: 'select',
      options: ['none', 'circle', 'square', 'diamond', 'dual'],
      description: 'Style of the beam markers',
      defaultValue: 'dual',
    },
    beamWidth: {
      control: { type: 'range', min: 1, max: 10, step: 1 },
      description: 'Width of the beam line',
      defaultValue: 4,
    },
    markerSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the markers',
      defaultValue: 'md',
    },
  },
};

// Default Story
const DefaultTemplate = (args) => (
  <div className={`min-h-screen py-20 px-4 ${args.theme === 'enterprise' || args.theme === 'neumorphicLight' ? 'bg-white' : 'bg-gray-950'}`}>
    <div className="max-w-3xl mx-auto">
      <TracingBeam {...args}>
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">TracingBeam Documentation</h1>
          <p className="text-lg opacity-80 mb-8">
            Learn how to implement and customize the TracingBeam component in your Lumina UI projects.
          </p>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Installation</h2>
          <p className="opacity-80 mb-6">
            First, make sure you have the Lumina UI package installed in your project:
          </p>
          <div className="p-4 rounded-lg bg-gray-800 mb-6">
            <code className="text-sm text-white">npm install @lumina-ui/react</code>
          </div>
          <p className="opacity-80">
            Once installed, you can import the TracingBeam component along with other Lumina UI components.
          </p>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
          <p className="opacity-80 mb-6">
            Here's a simple example of how to use the TracingBeam component:
          </p>
          <div className="p-4 rounded-lg bg-gray-800 mb-6">
            <code className="text-sm text-white">
              {`import { TracingBeam } from '@lumina-ui/react';

const MyComponent = () => {
  return (
    <TracingBeam theme="techDark" position="left">
      <h1>My Content</h1>
      <p>This content will have a tracing beam alongside it.</p>
      
      {/* Additional content sections */}
      <div className="my-section">
        <h2>Section Title</h2>
        <p>Section content...</p>
      </div>
    </TracingBeam>
  );
};`}
            </code>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Customization Options</h2>
          <p className="opacity-80 mb-6">
            The TracingBeam component offers several customization options:
          </p>
          
          <table className="w-full border-collapse mb-6">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="py-2 px-4 text-left">Prop</th>
                <th className="py-2 px-4 text-left">Type</th>
                <th className="py-2 px-4 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-800">
                <td className="py-2 px-4 text-blue-400">theme</td>
                <td className="py-2 px-4 opacity-80">string</td>
                <td className="py-2 px-4 opacity-80">Theme of the beam (enterprise, techDark, glass, etc.)</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-2 px-4 text-blue-400">position</td>
                <td className="py-2 px-4 opacity-80">string</td>
                <td className="py-2 px-4 opacity-80">Position of the beam (left, right, center)</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-2 px-4 text-blue-400">beamStyle</td>
                <td className="py-2 px-4 opacity-80">string</td>
                <td className="py-2 px-4 opacity-80">Style of the beam (solid, gradient, dashed, dotted, glow)</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-2 px-4 text-blue-400">marker</td>
                <td className="py-2 px-4 opacity-80">string</td>
                <td className="py-2 px-4 opacity-80">Style of the markers (none, circle, square, diamond, dual)</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-2 px-4 text-blue-400">beamWidth</td>
                <td className="py-2 px-4 opacity-80">number</td>
                <td className="py-2 px-4 opacity-80">Width of the beam line in pixels</td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-blue-400">markerSize</td>
                <td className="py-2 px-4 opacity-80">string</td>
                <td className="py-2 px-4 opacity-80">Size of the markers (sm, md, lg)</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
          <p className="opacity-80 mb-4">
            Here are some tips for using the TracingBeam component effectively:
          </p>
          <ul className="list-disc pl-6 opacity-80 space-y-2">
            <li>Use TracingBeam for long-form content like documentation, tutorials, or articles.</li>
            <li>Choose a beam style and colors that complement your content rather than distract from it.</li>
            <li>Consider the position carefully based on your layout - left is traditional, right works well for RTL layouts, and center for symmetrical designs.</li>
            <li>Adjust the beam width and marker size based on the importance and visibility you want for the tracking element.</li>
          </ul>
        </div>
      </TracingBeam>
    </div>
  </div>
);


export const Default = DefaultTemplate.bind({});
Default.args = {
  theme: 'techDark',
  size: 'md',
  position: 'left',
  beamStyle: 'gradient',
  marker: 'dual',
  beamWidth: 4,
  markerSize: 'md',
};
Default.parameters = {
  backgrounds: { default: 'dark' },
};

// Theme Variants
export const ThemeVariants = () => (
  <div className="bg-gradient-to-b from-gray-900 to-gray-950 min-h-screen py-20 px-4">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      {['techDark', 'glass', 'glow', 'enterprise'].map((theme) => (
        <div key={theme} className={`rounded-lg overflow-hidden ${theme === 'enterprise' ? 'bg-white' : 'bg-gray-900/50 backdrop-blur-sm'}`}>
          <div className="p-4 border-b border-gray-200/10">
            <h3 className={`font-semibold ${theme === 'enterprise' ? 'text-gray-900' : 'text-white'}`}>{theme} Theme</h3>
          </div>
          <div className="p-2 h-96 overflow-auto">
            <TracingBeam
              theme={theme}
              size="md"
              position="left"
              beamStyle="gradient"
              marker="dual"
              beamWidth={4}
              markerSize="md"
            >
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-3">Component Documentation</h4>
                <p className="opacity-80 mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae eros nec nisl commodo ultrices.
                </p>
                <p className="opacity-80">
                  Nullam sed mi vel arcu ultrices tincidunt. Sed euismod, libero eget lacinia elementum.
                </p>
              </div>
              
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-3">Installation Guide</h4>
                <p className="opacity-80">
                  Nulla facilisi. Praesent eget justo at justo dignissim bibendum. Cras euismod turpis eu odio ultrices.
                </p>
              </div>
              
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-3">Usage Examples</h4>
                <p className="opacity-80">
                  Sed euismod ligula vel risus ultricies, vel dapibus justo faucibus. Vestibulum eget magna eget elit ultricies.
                </p>
              </div>
            </TracingBeam>
          </div>
        </div>
      ))}
    </div>
  </div>
);
ThemeVariants.parameters = {
  backgrounds: { default: 'dark' },
};

// Position Variants
export const PositionVariants = () => (
  <div className="bg-gray-950 min-h-screen py-20 px-4">
    <div className="max-w-6xl mx-auto">
      {['left', 'right', 'center'].map((position) => (
        <div key={position} className="mb-20 pb-10 border-b border-gray-800">
          <h3 className="text-white text-2xl font-semibold mb-8 text-center capitalize">{position} Position</h3>
          <TracingBeam
            theme="techDark"
            size="md"
            position={position}
            beamStyle="gradient"
            marker="dual"
            beamWidth={4}
            markerSize="md"
          >
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-3">Position: {position}</h4>
              <p className="opacity-80 mb-3">
                This example demonstrates the tracing beam with the position set to "{position}".
                The position determines where the beam appears relative to the content.
              </p>
              <p className="opacity-80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae eros nec nisl commodo ultrices.
              </p>
            </div>
            
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-3">When to use {position} position</h4>
              <p className="opacity-80">
                The {position} position works well for {
                  position === 'left' ? 'traditional documentation and article layouts.' :
                  position === 'right' ? 'alternative layouts and right-to-left language support.' :
                  'centered content and symmetrical designs.'
                }
              </p>
            </div>
          </TracingBeam>
        </div>
      ))}
    </div>
  </div>
);
PositionVariants.parameters = {
  backgrounds: { default: 'dark' },
};

// Beam Style Variants
export const BeamStyleVariants = () => (
  <div className="bg-gray-950 min-h-screen py-20 px-4">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {['solid', 'gradient', 'dashed', 'dotted', 'glow'].map((beamStyle) => (
        <div key={beamStyle} className="bg-gray-900 rounded-lg overflow-hidden h-80">
          <div className="p-3 border-b border-gray-800">
            <h3 className="text-white font-medium capitalize">{beamStyle} Beam</h3>
          </div>
          <div className="p-2 h-full overflow-auto">
            <TracingBeam
              theme="techDark"
              size="sm"
              position="left"
              beamStyle={beamStyle}
              marker="dual"
              beamWidth={4}
              markerSize="md"
            >
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">{beamStyle} Style Example</h4>
                <p className="opacity-80 text-sm">
                  This demonstrates the {beamStyle} beam style, which {
                    beamStyle === 'solid' ? 'uses a single solid color for the beam.' :
                    beamStyle === 'gradient' ? 'creates a gradient effect between two colors.' :
                    beamStyle === 'dashed' ? 'creates a dashed line effect for the beam.' :
                    beamStyle === 'dotted' ? 'creates a dotted line effect for the beam.' :
                    'adds a glowing effect to the beam for added visibility.'
                  }
                </p>
              </div>
              
              <div className="mb-6">
                <p className="opacity-80 text-sm">
                  Scroll to see the tracing beam in action as it follows your progress through the content.
                </p>
              </div>
              
              <div className="mb-6">
                <p className="opacity-80 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed mi vel arcu ultrices tincidunt.
                </p>
              </div>
            </TracingBeam>
          </div>
        </div>
      ))}
    </div>
  </div>
);
BeamStyleVariants.parameters = {
  backgrounds: { default: 'dark' },
};

// Marker Variants
export const MarkerVariants = () => (
  <div className="bg-gray-950 min-h-screen py-20 px-4">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      {['none', 'circle', 'square', 'diamond', 'dual'].map((marker) => (
        <div key={marker} className="bg-gray-900 rounded-lg overflow-hidden h-80">
          <div className="p-3 border-b border-gray-800">
            <h3 className="text-white font-medium capitalize">{marker} Marker</h3>
          </div>
          <div className="p-2 h-full overflow-auto">
            <TracingBeam
              theme="glass"
              size="sm"
              position="left"
              beamStyle="gradient"
              marker={marker}
              beamWidth={4}
              markerSize="md"
            >
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">{marker} Marker Example</h4>
                <p className="opacity-80 text-sm">
                  This demonstrates the {marker} marker style, which {
                    marker === 'none' ? 'hides the markers completely, showing only the beam.' :
                    marker === 'circle' ? 'uses circular markers at the start and end points.' :
                    marker === 'square' ? 'uses square markers at the start and end points.' :
                    marker === 'diamond' ? 'uses diamond-shaped markers at the start and end points.' :
                    'uses two distinct markers to show both the start and end positions.'
                  }
                </p>
              </div>
              
              <div className="mb-6">
                <p className="opacity-80 text-sm">
                  Scroll to see the tracing beam and markers follow your progress through the content.
                </p>
              </div>
              
              <div className="mb-6">
                <p className="opacity-80 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed mi vel arcu ultrices tincidunt.
                </p>
              </div>
            </TracingBeam>
          </div>
        </div>
      ))}
    </div>
  </div>
);
MarkerVariants.parameters = {
  backgrounds: { default: 'dark' },
};

// Size and Width Variants
export const SizeAndWidthVariants = () => (
  <div className="bg-gray-950 min-h-screen py-20 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-white text-2xl font-semibold mb-8 text-center">Beam Width and Marker Size</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {[2, 4, 8].map((width) => (
          <div key={width} className="bg-gray-900 rounded-lg overflow-hidden h-80">
            <div className="p-3 border-b border-gray-800">
              <h3 className="text-white font-medium">Beam Width: {width}px</h3>
            </div>
            <div className="p-2 h-full overflow-auto">
              <TracingBeam
                theme="glow"
                size="sm"
                position="left"
                beamStyle="gradient"
                marker="dual"
                beamWidth={width}
                markerSize="md"
              >
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2">Width: {width}px</h4>
                  <p className="opacity-80 text-sm">
                    This example shows a beam with a width of {width}px. Adjust the beam width to match your design preferences.
                  </p>
                </div>
                
                <div className="mb-6">
                  <p className="opacity-80 text-sm">
                    Thicker beams are more visible but may be more distracting, while thinner beams are more subtle.
                  </p>
                </div>
              </TracingBeam>
            </div>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {['sm', 'md', 'lg'].map((markerSize) => (
          <div key={markerSize} className="bg-gray-900 rounded-lg overflow-hidden h-80">
            <div className="p-3 border-b border-gray-800">
              <h3 className="text-white font-medium">Marker Size: {markerSize}</h3>
            </div>
            <div className="p-2 h-full overflow-auto">
              <TracingBeam
                theme="glow"
                size="sm"
                position="left"
                beamStyle="gradient"
                marker="dual"
                beamWidth={4}
                markerSize={markerSize}
              >
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2">Marker Size: {markerSize}</h4>
                  <p className="opacity-80 text-sm">
                    This example shows markers with the {markerSize} size. The marker size can be adjusted to complement the beam width.
                  </p>
                </div>
                
                <div className="mb-6">
                  <p className="opacity-80 text-sm">
                    Larger markers are more visible but may be more distracting, while smaller markers are more subtle.
                  </p>
                </div>
              </TracingBeam>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
SizeAndWidthVariants.parameters = {
  backgrounds: { default: 'dark' },
};

