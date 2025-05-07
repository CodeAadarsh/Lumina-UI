import React from 'react';

export const TailwindTest = () => {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div className="flex-shrink-0">
        <div className="h-12 w-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">T</div>
      </div>
      <div>
        <div className="text-xl font-medium text-black">Tailwind Test</div>
        <p className="text-gray-500">This tests if Tailwind is working</p>
        <button className="mt-2 px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent">
          Tailwind Button
        </button>
        <div className="mt-20 bg-black">This text uses a custom class</div>
      </div>
    </div>
  );
};