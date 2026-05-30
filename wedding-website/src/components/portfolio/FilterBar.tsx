'use client';

import React from 'react';

interface FilterBarProps {
  activeCategory: 'all' | 'grand-estates' | 'coastal-elopements' | 'destination-vows' | 'city-chic';
  setActiveCategory: (category: 'all' | 'grand-estates' | 'coastal-elopements' | 'destination-vows' | 'city-chic') => void;
}

export default function FilterBar({ activeCategory, setActiveCategory }: FilterBarProps) {
  const categories = [
    { id: 'all', label: 'All Events' },
    { id: 'grand-estates', label: 'Grand Estates' },
    { id: 'coastal-elopements', label: 'Coastal Elopements' },
    { id: 'destination-vows', label: 'Destination Vows' },
    { id: 'city-chic', label: 'City Chic' },
  ] as const;

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-12 border-y border-primary/10 py-6">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`text-sm uppercase tracking-widest transition-all duration-300 cursor-pointer pb-1 ${
                isActive
                  ? 'font-bold border-b-2 border-primary text-[#1b180d] dark:text-gray-900'
                  : 'font-medium text-[#9a864c] hover:text-primary'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>
    </section>
  );
}
