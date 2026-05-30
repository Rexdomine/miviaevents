import React from 'react';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';

export default function JourneyCTA() {
  return (
    <section className="py-24 md:py-36 bg-[#FAF9F5] border-t border-[#1b180d]/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <FadeIn>
          <span className="material-symbols-outlined text-4xl text-primary/70 mb-6 block">
            auto_awesome
          </span>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-[#1b180d] leading-tight mb-8">
            Let’s Create <br />
            <span className="font-serif italic font-light text-primary">Something Extraordinary</span>
          </h2>
          
          <p className="font-sans text-[#1b180d]/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            To maintain our bespoke standard of excellence, we only accept a limited number of commissions each season. This dedication guarantees our undivided attention and a luxury of detail for every celebration.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/contact"
              className="w-full sm:w-auto min-w-[220px] bg-[#1b180d] text-white hover:bg-primary hover:text-[#1b180d] px-8 py-5 rounded-md text-sm font-sans uppercase tracking-[0.2em] font-medium shadow-md transition-all duration-300 transform hover:scale-[1.02]"
            >
              Begin Your Journey
            </Link>
            <Link
              href="/portfolio"
              className="w-full sm:w-auto min-w-[220px] border border-[#1b180d]/25 text-[#1b180d] hover:border-[#1b180d] hover:bg-[#1b180d]/5 px-8 py-5 rounded-md text-sm font-sans uppercase tracking-[0.2em] font-medium transition-all duration-300"
            >
              Explore Our Portfolio
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

