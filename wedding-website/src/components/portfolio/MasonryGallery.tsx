"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { portfolioImages } from '@/data/portfolioData';

export default function MasonryGallery() {
  const [images] = useState(portfolioImages);

  return (
    <section className="max-w-[1920px] mx-auto px-4 md:px-8 pb-32">
        <div className="text-center mb-20">
            <h2 className="text-sm uppercase tracking-[0.3em] text-[#9a864c] mb-4">The Gallery</h2>
            <h3 className="text-4xl md:text-5xl font-light italic text-[#1b180d] dark:text-white">Captured Moments</h3>
        </div>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {images.map((src, index) => (
          <div key={index} className="break-inside-avoid relative group overflow-hidden rounded-lg">
            <Image
              src={src}
              alt={`Wedding Gallery ${index + 1}`}
              width={800}
              height={1200}
              className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  );
}
