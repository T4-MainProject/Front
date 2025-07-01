import React from 'react';

export default function AppHeader() {
  return (
    <header className="bg-white">
      <div className="container mx-auto flex items-center justify-between py-6 px-4">
        <div className="flex items-center space-x-4">
          <img src="/check.png" alt="Logo" className="w-12 h-auto" />
          <h1 className="text-2xl font-bold text-gray-800">Lang_Check</h1>
        </div>
        <img src="/image.png" alt="Banner" className="hidden md:block w-12 h-auto" />
      </div>
      <div className="border-b border-gray-200" />
    </header>
  );
}
