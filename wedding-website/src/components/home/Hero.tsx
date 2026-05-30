'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const images = [
  '/hero/hero-1.jpg',
  '/hero/hero-2.jpg',
  '/hero/hero-3.jpg',
  '/hero/hero_4.jpg',
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
        <div className="absolute inset-0 bg-black/50 -z-10"></div>
      </div>

      {/* Centered Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 max-w-5xl">
        {/* Editorial Subtitle Category */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-white/70 text-xs md:text-sm tracking-[0.35em] uppercase mb-5 font-sans font-semibold text-center block drop-shadow-sm"
        >
          Luxury Wedding Planning & Design
        </motion.span>

        {/* High-End Mixed Typography Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1.2, ease: 'easeOut' }}
          className="font-display text-4xl md:text-5xl lg:text-7xl text-white text-center max-w-5xl leading-tight font-medium drop-shadow-md z-10"
        >
          Creating <span className="font-serif italic font-light text-primary">bespoke celebrations</span> &amp; <span className="font-serif italic font-light text-primary">stunning destination weddings</span>
        </motion.h1>

        {/* Elegant clean subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.2, ease: 'easeOut' }}
          className="font-sans text-white/80 text-center max-w-2xl mt-8 text-sm md:text-base font-light tracking-wide leading-relaxed drop-shadow-md z-10"
        >
          Transforming modern luxury visions into timeless, flawless realities.
        </motion.p>

        {/* Stylish CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.2, ease: 'easeOut' }}
          className="mt-12 z-10"
        >
          <Link
            href="/contact"
            className="inline-block px-10 py-4 border border-white/30 hover:border-white text-white text-xs uppercase tracking-[0.3em] font-medium hover:bg-white hover:text-black hover:scale-105 transition-all duration-500 rounded-full cursor-pointer shadow-lg backdrop-blur-sm"
          >
            Enquire Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
