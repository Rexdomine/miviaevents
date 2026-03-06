import React from 'react';
import Image from 'next/image';

export default function InstagramFeed() {
  return (
    <section className="bg-white py-16 px-4 md:px-8">

      {/* 12-col CSS Grid — no absolute positioning, no overlap */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center max-w-7xl mx-auto py-20">

        {/* ── ROW 1 (top scatter) ── */}

        {/* Image 1 — tall portrait, pushed up */}
        <div className="md:col-span-4 md:col-start-1 md:-mt-20">
          <div className="relative w-full h-96 md:h-[480px] overflow-hidden rounded-sm">
            <Image
              src="/portfolio/Chi&RaphWhite-437.jpg"
              alt="Wedding couple"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Image 2 — medium, center */}
        <div className="md:col-span-4 md:col-start-5 md:mt-12">
          <div className="relative w-full h-64 md:h-72 overflow-hidden rounded-sm">
            <Image
              src="/portfolio/0U6A1575.jpg"
              alt="Wedding table"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Image 3 — shorter, pushed down */}
        <div className="md:col-span-3 md:col-start-10 md:mt-24">
          <div className="relative w-full h-64 overflow-hidden rounded-sm">
            <Image
              src="/portfolio/A10I0453.jpg"
              alt="Event design"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* ── CENTERPIECE TEXT ── full width, spaced out */}
        <div className="md:col-span-12 flex flex-col items-center justify-center my-16 text-center">
          <p
            className="font-serif font-light text-5xl md:text-7xl tracking-widest text-gray-900 uppercase mb-4"
          >
            Instagram
          </p>
          <a
            href="https://instagram.com/miviaevents"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm tracking-[0.2em] uppercase text-gray-500 border-b border-gray-300 pb-1 hover:text-primary transition-colors"
          >
            @miviaevents
          </a>
        </div>

        {/* ── ROW 2 (bottom scatter) ── */}

        {/* Image 4 — medium, slight push down */}
        <div className="md:col-span-3 md:col-start-2 md:mt-10">
          <div className="relative w-full h-72 overflow-hidden rounded-sm">
            <Image
              src="/portfolio/Tosin&Chika2195.jpg"
              alt="Wedding party"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Image 5 — wide, pulled up */}
        <div className="md:col-span-5 md:col-start-5 md:-mt-10">
          <div className="relative w-full h-[340px] overflow-hidden rounded-sm">
            <Image
              src="/portfolio/Tosin&Chika0308.jpg"
              alt="Wedding celebration"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Image 6 — tall portrait, far right */}
        <div className="md:col-span-3 md:col-start-10">
          <div className="relative w-full h-80 overflow-hidden rounded-sm">
            <Image
              src="/portfolio/DSC_6554.jpg"
              alt="Wedding scene"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
