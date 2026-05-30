import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import FadeIn from '@/components/FadeIn';

export default function RoutesToIDo() {
  return (
    <section className="relative py-28 md:py-36 bg-taupe px-6 md:px-12 overflow-visible z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-center overflow-visible">
          {/* Left Column - Text Content */}
          <div className="col-span-12 md:col-span-6 flex flex-col justify-center overflow-visible text-left">
            <FadeIn>
              {/* Category Tag above title */}
              <span className="text-[#1b180d]/60 dark:text-[#1b180d]/60 uppercase tracking-[0.2em] text-xs font-semibold mb-4 block font-sans">
                TAILORED WEDDING SERVICES
              </span>
              
              {/* Elegantly styled all-caps Serif Heading using brand dark color */}
              <h2 className="text-[#1b180d] dark:text-[#1b180d] font-[var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl font-light tracking-wide leading-tight mb-8 uppercase">
                ROUTES TO &lsquo;I DO&rsquo;
              </h2>
              
              {/* High-contrast, fully legible description copy using brand dark color */}
              <p className="font-sans text-[#1b180d] dark:text-[#1b180d] text-sm md:text-base font-light leading-relaxed mb-10 max-w-xl">
                Your journey to a flawless celebration is guided by our curated four-stage creative framework: from initial Vision Discovery and custom Design Curation to vetting world-class artisans and conducting seamless Day-of Execution. We orchestrate every detail like a silent symphony, allowing you to fully inhabit the magic of your special day. Let us lead you through the collaborative path where meticulous logistics harmonize with unbounded artistic design.
              </p>
              
              {/* Redesigned rectangular button linking to process */}
              <div>
                <Link 
                  href="/process" 
                  className="inline-block border border-[#1b180d] dark:border-[#1b180d] px-10 py-4 text-xs tracking-[0.2em] uppercase text-[#1b180d] dark:text-[#1b180d] hover:bg-[#1b180d] hover:text-white dark:hover:bg-[#1b180d] dark:hover:text-white transition-all duration-300 font-medium text-center font-sans cursor-pointer"
                >
                  EXPLORE OUR PROCESS
                </Link>
              </div>
            </FadeIn>
          </div>
          
          {/* Right Column - Overlapping High-Contrast Image */}
          <div className="col-span-12 md:col-span-6 relative overflow-visible flex justify-center md:justify-end mt-12 md:mt-0">
            <FadeIn delay={0.2}>
              <div className="relative md:translate-y-16 mb-0 md:-mb-24 aspect-[4/5] w-[85vw] md:w-[450px] shadow-2xl rounded-sm overflow-hidden border border-white/20">
                <Image 
                  src="/images/luxury_table_setting.png" 
                  alt="High-contrast luxury wedding table setting featuring crystal glassware, premium white florals, and gold accents"
                  fill
                  className="object-cover"
                  sizes="(max-w-768px) 85vw, 450px"
                  priority
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
