import React from 'react';

export default {
  title: 'Test/TailwindCSS',
  parameters: {
    layout: 'centered',
  },
};

export const TailwindTest = () => (
  <div className="p-8 max-w-md mx-auto bg-white rounded-lg shadow-md">
    <h1 className="text-2xl font-bold text-blue-600 mb-4">Tailwind CSS Test</h1>
    
    <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
      <div className="bg-blue-500 text-white p-4">
        <h2 className="text-xl font-semibold">Card Header</h2>
      </div>
      <div className="p-6">
        <p className="text-gray-700 mb-4">
          This card is styled entirely with Tailwind CSS classes.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Click me
        </button>
      </div>
    </div>
    
    <div className="grid grid-cols-2 gap-4 mb-6">
      <div className="bg-red-100 p-4 rounded-lg text-red-800">Red</div>
      <div className="bg-green-100 p-4 rounded-lg text-green-800">Green</div>
      <div className="bg-blue-100 p-4 rounded-lg text-blue-800">Blue</div>
      <div className="bg-yellow-100 p-4 rounded-lg text-yellow-800">Yellow</div>
    </div>
    
    {/* Test the custom class defined in your globals.css */}
    <div className="tailwind-test p-4 mt-4">
      This uses the custom .tailwind-test class
    </div>
  </div>
);