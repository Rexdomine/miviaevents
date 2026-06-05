'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Duplicate brand values to ensure perfect seamless visual marquee loop
  const marqueeWords = [
    "CRAFTING EMOTIONS",
    "SEAMLESS LOGISTICS",
    "UNBOUNDED DESIGN",
    "TIMELESS LUXURY",
    "ELEGANNT CELEBRATIONS",
    "BESPOKE ARCHITECTURE",
    "MIVIA EVENTS WORLDWIDE"
  ];

  return (
    <>
      {/* Spacer in normal document flow that window-reveals the fixed footer on desktop */}
      <div className="hidden md:block h-[560px] bg-transparent pointer-events-none" />

      {/* Actual Sticky Reveal Footer */}
      <footer className="bg-[#1b180d] text-[#f8f7f6] md:fixed md:bottom-0 md:left-0 md:w-full md:h-[560px] md:z-0 flex flex-col justify-between overflow-hidden relative border-t border-white/5">
        
        {/* Continuous Horizontal Brand Marquee Scroller */}
        <div className="w-full bg-[#262215] py-4 border-b border-white/5 overflow-hidden flex items-center z-10">
          <motion.div 
            className="flex gap-16 whitespace-nowrap animate-marquee shrink-0"
            style={{ display: "flex" }}
          >
            {[...marqueeWords, ...marqueeWords, ...marqueeWords].map((word, idx) => (
              <span 
                key={idx} 
                className="font-sans text-[10px] tracking-[0.3em] font-semibold text-primary/80 uppercase select-none"
              >
                {word} •
              </span>
            ))}
          </motion.div>
        </div>

        {/* Morphing SVG Silk Waves Background */}
        {isMounted && (
          <svg 
            className="absolute bottom-0 left-0 w-full h-80 opacity-[0.08] pointer-events-none z-0" 
            viewBox="0 0 1440 240" 
            preserveAspectRatio="none"
          >
            <motion.path
              fill="#701a2c"
              animate={{
                d: [
                  "M0,60 Q360,120 720,60 T1440,60 L1440,240 L0,240 Z",
                  "M0,100 Q360,40 720,100 T1440,100 L1440,240 L0,240 Z",
                  "M0,60 Q360,120 720,60 L1440,60 L1440,240 L0,240 Z"
                ]
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.path
              fill="#D5C8BD"
              animate={{
                d: [
                  "M0,100 Q360,30 720,100 T1440,100 L1440,240 L0,240 Z",
                  "M0,50 Q360,110 720,50 T1440,50 L1440,240 L0,240 Z",
                  "M0,100 Q360,30 720,100 L1440,240 L0,240 Z"
                ]
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </svg>
        )}

        {/* Main content grid */}
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 pt-16 md:pt-20 pb-10 z-10 flex-1 flex flex-col justify-between">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
            
            {/* Left Box */}
            <div className="space-y-6">
              {/* Accepting Commissions Pulse Light */}
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-taupe opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-taupe"></span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-taupe font-sans">
                  Active Booking commissions for 2026/2027
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight font-serif text-white">
                Ready to start your <span className="italic text-taupe font-normal">journey?</span>
              </h2>
              <p className="text-[#f8f7f6]/60 text-base max-w-md font-sans font-light leading-relaxed">
                Let&apos;s create something extraordinary together. Contact our team to begin the design process.
              </p>
              <div className="pt-2">
                <Link 
                  href="mailto:hello@miviaevents.com" 
                  className="text-2xl sm:text-3xl font-light hover:text-taupe transition-colors border-b border-taupe/30 pb-1 font-serif text-white tracking-wide"
                >
                  hello@miviaevents.com
                </Link>
              </div>
            </div>

            {/* Right Box */}
            <div className="flex flex-col justify-between h-full space-y-12 md:space-y-16 items-start md:items-end">
              {/* Social Channels */}
              <div className="flex flex-wrap gap-6 md:gap-8 justify-start md:justify-end">
                {[
                  { name: "Instagram", href: "https://instagram.com/miviaevents" },
                  { name: "Pinterest", href: "#" },
                  { name: "LinkedIn", href: "#" }
                ].map((social, idx) => (
                  <motion.a 
                    key={idx}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-primary transition-colors uppercase tracking-[0.25em] text-[10px] font-bold font-sans text-white/80"
                    whileHover={{ y: -2, scale: 1.05 }}
                  >
                    {social.name}
                  </motion.a>
                ))}
              </div>

              {/* Mailing List Input */}
              <form className="w-full max-w-sm flex gap-4 border-b border-white/10 pb-2 items-center group focus-within:border-primary transition-colors">
                <input
                  type="email"
                  placeholder="JOIN OUR MAILING LIST"
                  className="bg-transparent text-xs w-full py-2 focus:outline-none placeholder:text-[#f8f7f6]/30 text-white font-sans tracking-widest border-0"
                />
                <button 
                  type="submit" 
                  className="material-symbols-outlined text-primary hover:translate-x-1 transition-transform cursor-pointer focus:outline-none"
                >
                  arrow_forward
                </button>
              </form>
            </div>

          </div>

          {/* Bottom Metabar & Interactive Back-to-Top Button */}
          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6 text-[9px] uppercase tracking-[0.35em] font-bold text-[#f8f7f6]/30 font-sans mt-12 md:mt-0">
            <span>© {new Date().getFullYear()} Mivia Events Worldwide</span>
            <div className="flex gap-8">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
            
            {/* Scroll back to top interaction */}
            <motion.button 
              onClick={handleScrollToTop}
              className="flex items-center gap-2 group cursor-pointer focus:outline-none text-[#f8f7f6]/50 hover:text-primary transition-colors py-1 px-3 border border-white/10 rounded-full hover:border-primary/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Back to Top</span>
              <span className="material-symbols-outlined text-xs group-hover:-translate-y-0.5 transition-transform">arrow_upward</span>
            </motion.button>
          </div>
        </div>
      </footer>
    </>
  );
}
