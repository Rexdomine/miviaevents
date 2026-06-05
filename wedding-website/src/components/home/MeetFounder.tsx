"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  '/about_us/DSC08002.jpg',
  '/about_us/DSC08008.jpg',
  '/about_us/DSC08016.jpg',
  '/about_us/DSC08027.jpg',
  '/about_us/DSC08058.jpg',
  '/about_us/DSC08076.jpg',
  '/about_us/DSC08097.jpg',
  '/about_us/DSC08105.jpg',
  '/about_us/DSC08127%20(1).jpg',
  '/about_us/WhatsApp%20Image%202026-06-05%20at%2022.57.12.jpeg'
];

const brandSlides = [
  {
    title: "Behind the Brand",
    subtitle: "Curated Celebrations. Collaborative Excellence. Timeless Design.",
    paragraphs: [
      "At Mivia Events, we believe that extraordinary moments are never the result of a single hand. We operate as a collective of visionaries, planners, and event designers who share a singular passion: transforming personal stories into beautiful, lived experiences.",
      "Our team brings together diverse expertise in spatial design, high-end logistics, and sensory curation. By working collaboratively, we ensure that every wedding, corporate gala, and private celebration is approached with multiple creative perspectives and flawless structural execution.",
      "From the initial design concept to the final candlelit toast, we are dedicated to providing a refined, highly personalized planning experience. We handle the complexity with calm grace, allowing you to fully immerse yourself in the joy of your celebration."
    ],
    ctaText: "Our Story & Philosophy",
    ctaLink: "/about"
  },
  {
    title: "The Art of Curation",
    subtitle: "Bespoke Details. Immersive Ambience. Unmatched Elegance.",
    paragraphs: [
      "We design with intention, ensuring every element speaks to your story. From hand-selected textures to custom spatial layouts, we curate sensory environments that leave lasting impressions.",
      "Our design ethos is anchored in balance—merging timeless aesthetics with modern design features. We collaborate with world-class artisans to orchestrate events that are both grand in vision and intimate in feel.",
      "Whether orchestrating a multi-day destination wedding or an exclusive private soirée, our focus remains on creating a flawless, stress-free experience. We transform spaces and elevate expectations at every turn."
    ],
    ctaText: "Explore Our Services",
    ctaLink: "/services"
  }
];

export default function MeetBrand() {
  const [cardStack, setCardStack] = useState([0, 1, 2]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Auto-play the image card flow every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCardStack((prev) => {
        const nextIndex = (prev[2] + 1) % images.length;
        return [prev[1], prev[2], nextIndex];
      });
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  // Auto-play the brand write-up slide every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % brandSlides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full bg-[#FAF9F5] py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* ── Left Column: Sliding Text Content ── */}
          <div className="md:col-span-7 flex flex-col justify-center order-2 md:order-1">
            <div className="relative min-h-[460px] sm:min-h-[420px] md:min-h-[500px] lg:min-h-[430px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlideIndex}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.21, 0.47, 0.32, 0.98]
                  }}
                >
                  {/* Brand Section Heading — large editorial Playfair Display serif */}
                  <h2 className="font-display text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] font-light text-[#1b180d] leading-[1.15] mb-6 tracking-wide">
                    {brandSlides[currentSlideIndex].title}
                  </h2>

                  {/* Subtitle / Core Statement — italic serif */}
                  <p className="font-serif italic text-sm sm:text-base text-[#1b180d]/60 mb-8 leading-relaxed">
                    {brandSlides[currentSlideIndex].subtitle}
                  </p>

                  {/* Description Paragraphs — clean, elegant, highly readable sans-serif */}
                  <div className="space-y-6 mb-10 text-[#1b180d]/80 font-sans text-sm sm:text-[15px] leading-[1.8] max-w-xl">
                    {brandSlides[currentSlideIndex].paragraphs.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>

                  {/* CTA Link & Page Indicators */}
                  <div className="mt-4 flex flex-row items-center justify-between max-w-xl gap-4">
                    <Link
                      href={brandSlides[currentSlideIndex].ctaLink}
                      className="inline-block font-serif italic text-base text-[#1b180d] underline decoration-[#1b180d]/40 underline-offset-4 hover:decoration-[#1b180d] transition-all duration-300"
                    >
                      {brandSlides[currentSlideIndex].ctaText}
                    </Link>

                    {/* Pagination Indicators */}
                    <div className="flex items-center gap-2.5">
                      {brandSlides.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentSlideIndex(idx)}
                          className={`h-1 transition-all duration-500 rounded-full cursor-pointer ${
                            currentSlideIndex === idx ? 'w-8 bg-[#1b180d]' : 'w-2 bg-[#1b180d]/20 hover:bg-[#1b180d]/40'
                          }`}
                          aria-label={`Go to slide ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* ── Right Column: Flowing Card Deck ── */}
          <div className="md:col-span-5 flex justify-center md:justify-end order-1 md:order-2 pr-6 pb-6">
            <div className="relative w-full max-w-[350px] aspect-[4/5] h-[440px] md:h-[480px]">
              <AnimatePresence mode="popLayout">
                {cardStack.map((imageIndex, stackPosition) => {
                  const zIndex = 30 - stackPosition * 10;
                  const positionName = stackPosition === 0 ? 'top' : stackPosition === 1 ? 'middle' : 'back';
                  
                  return (
                    <motion.div
                      key={images[imageIndex]}
                      style={{ position: 'absolute', width: '100%', height: '100%', zIndex }}
                      initial={{ opacity: 0, scale: 0.8, x: 60, rotate: 6 }}
                      animate={positionName}
                      variants={{
                        top: {
                          x: 0,
                          y: 0,
                          scale: 1,
                          rotate: 0,
                          opacity: 1,
                        },
                        middle: {
                          x: 16,
                          y: 16,
                          scale: 0.96,
                          rotate: -3,
                          opacity: 0.85,
                        },
                        back: {
                          x: 32,
                          y: 32,
                          scale: 0.92,
                          rotate: 4,
                          opacity: 0.6,
                        }
                      }}
                      exit={{
                        x: -240,
                        opacity: 0,
                        rotate: -12,
                        scale: 0.95,
                        transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 110,
                        damping: 20,
                      }}
                      className="bg-white p-4 pb-12 rounded-2xl shadow-xl border border-[#1b180d]/10 flex flex-col justify-between"
                    >
                      {/* Subtle elegant inner border frame */}
                      <div className="absolute inset-2.5 border border-[#1b180d]/5 rounded-xl pointer-events-none z-10" />

                      {/* Image Frame */}
                      <div className="relative w-full h-[88%] overflow-hidden rounded-lg bg-[#FAF9F5] shadow-inner">
                        <Image
                          src={images[imageIndex]}
                          alt={`Mivia Events Moment ${imageIndex + 1}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 350px"
                          className="object-cover transition-transform duration-700 hover:scale-105"
                          priority={stackPosition === 0}
                        />
                      </div>
                      
                      {/* Polaroid Caption */}
                      <div className="flex justify-between items-center mt-3 px-1 relative z-10">
                        <span className="font-serif italic text-xs text-[#1b180d]/70 flex items-center gap-1.5 select-none">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#701a2c]" />
                          Mivia Events
                        </span>
                        <span className="font-sans text-[9px] tracking-widest uppercase text-[#1b180d]/50 select-none">
                          0{imageIndex + 1} / 0{images.length}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
