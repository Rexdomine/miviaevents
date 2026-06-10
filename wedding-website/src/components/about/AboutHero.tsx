'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AboutHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center px-6 py-20 overflow-hidden pt-32">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Heading and description */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-5 z-10"
        >
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Mivia Events</span>
          <h2 className="text-gray-900 text-5xl sm:text-6xl md:text-8xl font-light leading-[1.1] mb-8 italic">
            About <br/>
            <span className="font-bold not-italic">Us</span>
          </h2>
          <p className="text-lg md:text-xl text-[#1b180d]/70 dark:text-gray-900/70 max-w-md leading-relaxed">
            At Mivia Events, planning is more than logistics — it is the art of storytelling through design, atmosphere, and experience.
          </p>
        </motion.div>

        {/* Right Column: Creative Layered Image Collage */}
        <div className="lg:col-span-7 relative">
          {/* Main Team Photo with Interactive Tilt/Zoom Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.015 }}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-stone-200/40 cursor-pointer"
          >
            <motion.div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url("/about_us/DSC08127 (1).jpg")' }}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.8 }}
            />
            {/* Elegant luxury gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
