'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function FounderLetter() {
  return (
    <section className="py-32 bg-[#f3f0e7] dark:bg-background-dark/50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          {/* Left Column: Creative Overlapping Offset Collage */}
          <div className="w-full md:w-1/2 relative h-[480px] sm:h-[580px] md:h-[520px] lg:h-[580px]">
            
            {/* Image 1 (Base - Large Landscape): Luxury Venue Completion */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.01 }}
              className="absolute top-0 right-0 w-[78%] h-[80%] bg-cover bg-center rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.06)] overflow-hidden cursor-pointer"
              style={{ backgroundImage: 'url("/portfolio/0U6A2604.jpg")' }}
            >
              <div className="absolute inset-0 bg-black/5 hover:bg-black/0 transition-colors duration-500" />
            </motion.div>

            {/* Image 2 (Overlapping Left - Small Square): Bespoke Details */}
            <motion.div
              initial={{ opacity: 0, x: -40, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              whileHover={{ y: -6, x: -2 }}
              className="absolute bottom-16 -left-2 sm:-left-4 w-[46%] aspect-square bg-cover bg-center rounded-xl border-[5px] border-[#f3f0e7] dark:border-background-dark shadow-[0_12px_28px_rgba(0,0,0,0.12)] overflow-hidden cursor-pointer"
              style={{ backgroundImage: 'url("/portfolio/A10I0366.jpg")' }}
            >
              <div className="absolute inset-0 bg-black/5 hover:bg-black/0 transition-colors duration-500" />
            </motion.div>

            {/* Image 3 (Overlapping Right - Portrait): Signature Couple */}
            <motion.div
              initial={{ opacity: 0, x: 40, y: 40 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="absolute -bottom-6 right-6 w-[46%] aspect-[3/4] bg-cover bg-center rounded-xl border-[5px] border-[#f3f0e7] dark:border-background-dark shadow-[0_15px_32px_rgba(0,0,0,0.15)] overflow-hidden cursor-pointer"
              style={{ backgroundImage: 'url("/portfolio/Tosin&Chika3768.jpg")' }}
            >
              <div className="absolute inset-0 bg-black/5 hover:bg-black/0 transition-colors duration-500" />
            </motion.div>
          </div>

          {/* Right Column: Founder Letter/Story Text */}
          <div className="w-full md:w-1/2 space-y-8 pt-6 md:pt-0">
            <motion.div
              initial={{ opacity: 0, x: 45 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <h3 className="text-gray-900 text-4xl font-bold border-b border-primary/20 pb-6">Our Story</h3>
              <div className="space-y-6 text-lg leading-relaxed text-[#1b180d]/80 dark:text-gray-900/80 italic">
                <p>
                  <span className="text-5xl font-bold text-primary float-left mr-3 leading-[1]">M</span>ivia Events started with a simple belief: every moment, no matter how big or small, deserves to feel special.
                </p>
                <p>
                  What began as a love for bringing people together soon grew into a commitment to helping others celebrate life in the most beautiful and organized way possible. We noticed that many events looked good but didn’t always feel good. That inspired us to build a company that balances professionalism with genuine care, where clients feel understood, supported, and excited every step of the way.
                </p>
                <p>
                  Over time, that vision has grown. Today, Mivia Events is proud to partner with individuals, couples, brands, and organizations to create experiences that are thoughtful, seamless, and truly memorable. For us, it’s never just about planning events, it’s about creating moments that stay with you.
                </p>
                <p className="not-italic font-medium mt-4">
                   “Every event is crafted with elegance, creativity, and heart.”
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
