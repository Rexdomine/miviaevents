'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const images = [
  '/hero/hero-1.jpg',
  '/hero/hero-2.jpg',
  '/hero/hero-3.jpg',
  '/hero/hero_4.jpg',
  '/hero/0U6A2604.jpg',
  '/hero/DSC_6280.jpg'
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images Crossfade */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Luxury Wedding ${currentIndex + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            className="h-screen w-full object-cover absolute top-0 left-0 -z-10"
          />
        </AnimatePresence>
        {/* Subtle Dark Overlay */}
        <div className="absolute inset-0 bg-black/45 -z-10"></div>
      </div>

      {/* Centered Minimal Content (Tagline + Enquire Now Button) */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 max-w-4xl">
        {/* Elegant 3-Word Tagline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-white text-center tracking-wide mb-12 drop-shadow-lg"
        >
          Curating <span className="font-serif italic font-light text-white/90">Timeless</span> Celebrations
        </motion.h1>

        {/* Stylish CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="z-10"
        >
          <Link
            href="/contact"
            className="inline-block px-10 py-4 border border-white/35 hover:border-white text-white text-xs uppercase tracking-[0.35em] font-medium hover:bg-white hover:text-black hover:scale-105 transition-all duration-500 rounded-full cursor-pointer shadow-xl backdrop-blur-sm bg-black/10"
          >
            Enquire Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
