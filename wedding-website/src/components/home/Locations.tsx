import React from 'react';
import Image from 'next/image';

export default function BookingCTA() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/portfolio/DSC_6280.jpg"
          alt="Luxury wedding celebration"
          fill
          className="object-cover object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55"></div>
        {/* Left-fade gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-24 max-w-2xl lg:max-w-3xl py-16 md:py-0">
        <p className="text-white/80 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-4 md:mb-6">
          Thoughtfully Designed, Stunning Celebrations
        </p>

        <h2
          className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] mb-6 md:mb-8"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          We&rsquo;re Currently Booking<br />
          2026 &amp; 2027 Weddings
        </h2>

        <p className="text-white/75 text-sm md:text-base lg:text-lg font-light leading-relaxed mb-8 md:mb-12 max-w-sm md:max-w-xl">
          Our bespoke wedding planning service provides expert guidance and dedicated support to ensure you feel empowered and assured every step of the way.
        </p>

        <a
          href="/contact"
          className="inline-block px-8 md:px-10 py-3 md:py-4 border border-white/50 text-white text-xs font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-[#111111] transition-all duration-300"
        >
          Enquire
        </a>
      </div>
    </section>
  );
}

