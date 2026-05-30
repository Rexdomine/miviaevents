import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';

export default function MeetBrand() {
  return (
    <section className="relative w-full bg-[#FAF9F5] py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* ── Left Column: Text Content ── */}
          <div className="md:col-span-7 flex flex-col justify-center order-2 md:order-1">
            <FadeIn>
              {/* Brand Section Heading — large editorial Playfair Display serif */}
              <h2 className="font-display text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] font-light text-[#1b180d] leading-[1.15] mb-6 tracking-wide">
                Behind the Brand
              </h2>

              {/* Subtitle / Core Statement — italic serif */}
              <p className="font-serif italic text-sm sm:text-base text-[#1b180d]/60 mb-8 leading-relaxed">
                Curated Celebrations. Collaborative Excellence. Timeless Design.
              </p>

              {/* Description Paragraphs — clean, elegant, highly readable sans-serif */}
              <div className="space-y-6 mb-10 text-[#1b180d]/80 font-sans text-sm sm:text-[15px] leading-[1.8] max-w-xl">
                <p>
                  At Mivia Events, we believe that extraordinary moments are never the result of a single hand. We operate as a collective of visionaries, planners, and event designers who share a singular passion: transforming personal stories into beautiful, lived experiences.
                </p>
                <p>
                  Our team brings together diverse expertise in spatial design, high-end logistics, and sensory curation. By working collaboratively, we ensure that every wedding, corporate gala, and private celebration is approached with multiple creative perspectives and flawless structural execution.
                </p>
                <p>
                  From the initial design concept to the final candlelit toast, we are dedicated to providing a refined, highly personalized planning experience. We handle the complexity with calm grace, allowing you to fully immerse yourself in the joy of your celebration.
                </p>
              </div>

              {/* CTA Link — underlined, elegant editorial style */}
              <div className="mt-4">
                <Link
                  href="/about"
                  className="inline-block font-serif italic text-base text-[#1b180d] underline decoration-[#1b180d]/40 underline-offset-4 hover:decoration-[#1b180d] transition-all duration-300"
                >
                  Our Story & Philosophy
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* ── Right Column: Logo Display (Inset, clean, highly elegant frame) ── */}
          <div className="md:col-span-5 flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative w-full max-w-[420px] aspect-[4/5] overflow-hidden rounded-lg shadow-sm border border-[#1b180d]/10 bg-white flex items-center justify-center p-8 transition-transform duration-500 hover:scale-[1.01]">
              {/* Subtle background texture/accent ring */}
              <div className="absolute inset-4 border border-[#1b180d]/5 rounded-md pointer-events-none" />
              
              <div className="relative w-full h-full max-w-[300px] max-h-[300px] aspect-square">
                <Image
                  src="/images/mivia-logo.png"
                  alt="Mivia Events Logo"
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


