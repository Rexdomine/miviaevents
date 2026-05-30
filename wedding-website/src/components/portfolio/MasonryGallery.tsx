'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { portfolioImages } from '@/data/portfolioData';
import { motion, AnimatePresence } from 'framer-motion';

interface MasonryGalleryProps {
  activeCategory: 'all' | 'grand-estates' | 'coastal-elopements' | 'destination-vows' | 'city-chic';
}

export default function MasonryGallery({ activeCategory }: MasonryGalleryProps) {
  const [filteredImages, setFilteredImages] = useState<readonly { readonly src: string; readonly category: string }[]>(portfolioImages);

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredImages(portfolioImages);
    } else {
      setFilteredImages(portfolioImages.filter((img) => img.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <section className="max-w-[1920px] mx-auto px-4 md:px-8 pb-32">
      <div className="text-center mb-20">
        <h2 className="text-sm uppercase tracking-[0.3em] text-[#9a864c] mb-4">The Gallery</h2>
        <h3 className="text-4xl md:text-5xl font-light italic text-[#1b180d] dark:text-gray-900">Captured Moments</h3>
      </div>
      
      <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredImages.map((img, index) => (
            <motion.div
              key={img.src}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="break-inside-avoid relative group overflow-hidden rounded-lg mb-6 shadow-md"
            >
              <Image
                src={img.src}
                alt={`Wedding Gallery ${index + 1}`}
                width={800}
                height={1200}
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
