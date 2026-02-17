import React from 'react';
import Image from 'next/image';

export default function ProcessTimeline() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto relative">
      {/* Vertical Timeline Line */}
      <div className="absolute left-1/2 -translate-x-1/2 top-48 bottom-48 w-px bg-primary/30 hidden md:block"></div>

      {/* Step 01: The Consultation */}
      <div className="relative grid md:grid-cols-2 gap-12 items-center mb-32">
        <div className="md:text-right">
          <span className="text-primary text-6xl opacity-40 italic block mb-2 font-display">01</span>
          <h3 className="text-3xl font-bold mb-4">The Consultation</h3>
          <p className="text-primary/80 text-lg italic mb-6">Vision Discovery & Personal Connection</p>
          <p className="text-lg leading-relaxed text-[#1b180d]/70 dark:text-white/70">
              Every masterpiece begins with a conversation. We delve into your story, your aesthetic preferences, and the emotions you wish to evoke. This is where your dream begins to take a tangible shape.
          </p>
        </div>
        <div className="relative group">
          <div className="absolute -inset-4 bg-primary/5 rounded-xl scale-95 group-hover:scale-100 transition-transform"></div>
          <div className="relative h-80 w-full rounded-lg shadow-2xl overflow-hidden">
             <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRVRjBC2SzeruX1-7qOTLbxstfNTStGjn3Ry_50980z8cNGbXvII95v0ieZQNJZnMyqY61HV4QHve1AWEFfn1I00x0hQgK_ytAfjnFpCeSP7ykpSSeL2w9wB8E9MGlnDKTmyaV826k-20S_oOCS6t3la9qm_I-eCFU7XY0yKGdWoqgtgor-GplBYAu_lQ8ss2LkB85KEpS5F9NRx-H7NXet1hfLAhS17WE-Pg4QZCmxTYDbTyYP5XjgXAllVy4U61xHIr4NbHcJT0"
                alt="Elegant table setting"
                fill
                className="object-cover"
             />
          </div>
        </div>
        {/* Connector Dot */}
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-[#f8f7f6] dark:border-[#221d10] hidden md:block z-20"></div>
      </div>

      {/* Step 02: Design & Curation */}
      <div className="relative grid md:grid-cols-2 gap-12 items-center mb-32">
        <div className="md:order-2">
          <span className="text-primary text-6xl opacity-40 italic block mb-2 font-display">02</span>
          <h3 className="text-3xl font-bold mb-4">Design & Curation</h3>
          <p className="text-primary/80 text-lg italic mb-6">Mood Boards & Custom Palettes</p>
          <p className="text-lg leading-relaxed text-[#1b180d]/70 dark:text-white/70">
              Our creative team curates a bespoke design narrative, selecting textures, colors, and floral scents that resonate with your personality. We build a visual language that is exclusively yours.
          </p>
        </div>
        <div className="relative group md:order-1">
          <div className="absolute -inset-4 bg-primary/5 rounded-xl scale-95 group-hover:scale-100 transition-transform"></div>
           <div className="relative h-80 w-full rounded-lg shadow-2xl overflow-hidden">
             <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuArpW2C2UZcsVvT8177YluIS32jbDLNjZyKaEsFovR_czvorxq4oEIG0CvgfLFu6urin06t53JGjW3Y2VGMU03yt51sy8A2gV8rXz2JKq-c36fPUcbIawMrqmamOOj-T63n9Q8tE5ZZ1j3nXHOTl01BAw_B2g05675T02lk5ypIy6ZzjRDVktHqu2hflNCCL3i7sM7qXEXldTifnnA8qVGW3Gdz59x2e_K7wRfhdaJ53OtTfk4HkGpWcoB92LeGMLO7vwytuanyulo"
                alt="Floral design"
                fill
                className="object-cover"
             />
          </div>
        </div>
        {/* Connector Dot */}
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-[#f8f7f6] dark:border-[#221d10] hidden md:block z-20"></div>
      </div>

      {/* Step 03: Vendor Selection */}
      <div className="relative grid md:grid-cols-2 gap-12 items-center mb-32">
        <div className="md:text-right">
          <span className="text-primary text-6xl opacity-40 italic block mb-2 font-display">03</span>
          <h3 className="text-3xl font-bold mb-4">Vendor Selection</h3>
          <p className="text-primary/80 text-lg italic mb-6">Exclusive Network & Vetting Excellence</p>
          <p className="text-lg leading-relaxed text-[#1b180d]/70 dark:text-white/70">
              We connect you with our vetted network of world-class artisans, from Michelin-starred caterers to avant-garde florists. We manage the contracts and details so you only have to make the final choice.
          </p>
        </div>
        <div className="relative group">
          <div className="absolute -inset-4 bg-primary/5 rounded-xl scale-95 group-hover:scale-100 transition-transform"></div>
           <div className="relative h-80 w-full rounded-lg shadow-2xl overflow-hidden">
             <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNBrpyZ8qZXFFvVsx-sFwlvMZ6nDaehdTOOpDy_B2UGd1cJ3vw_W4Fc6ozEBje2qxbVfOLEO1qIxFNfXGdyW36YnfmLQCZWSggxC57ri8ikCePNgs-EB_Map4gQMVpxJetvAuv5F64TAlw_aZeMI6WDovLBTK2yQh0fSCDjLu655fbTfDxn_F-tIjvGMAo6VPSkdVtJZoHhl0juJO8G64aoCpgrYKnT9lJat-URa1_ATzdJ-O39-l4pRMIMiMrnCk1kMIpB7a9Tdo"
                alt="Bride preparation"
                fill
                className="object-cover"
             />
          </div>
        </div>
        {/* Connector Dot */}
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-[#f8f7f6] dark:border-[#221d10] hidden md:block z-20"></div>
      </div>

      {/* Step 04: Execution */}
      <div className="relative grid md:grid-cols-2 gap-12 items-center">
        <div className="md:order-2">
          <span className="text-primary text-6xl opacity-40 italic block mb-2 font-display">04</span>
          <h3 className="text-3xl font-bold mb-4">Execution</h3>
          <p className="text-primary/80 text-lg italic mb-6">Seamless Coordination & Day-of Management</p>
          <p className="text-lg leading-relaxed text-[#1b180d]/70 dark:text-white/70">
              On your wedding day, our team acts as the conductors of a silent orchestra. We ensure every petal is in place, every transition is seamless, and you are free to fully inhabit the joy of the moment.
          </p>
        </div>
        <div className="relative group md:order-1">
          <div className="absolute -inset-4 bg-primary/5 rounded-xl scale-95 group-hover:scale-100 transition-transform"></div>
           <div className="relative h-80 w-full rounded-lg shadow-2xl overflow-hidden">
             <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1HcmlM676l0d9Yu4GDjFlRn9PVzKWoYF-tdOZy8lLZvBv9sQOa9lzde9jtcCNkqxndK270nMUuDh2Ct9FeCyMLZ4SBLAz-ixRCuG3RUjbxkOgiYZ2fgP9eQeAaqkMKOAjIEloYnojXzyfz2x4ZtsdyvtDiuuSTTphsPrjhXiGO7nyn6tdC8tcOLPMpbT29NtMnmJbwH7BKr_NG_3X4BxJAYVQUGeo31sN0TocX7t8OidqxEaUygt084SqQI4bMx9KYpZmTNP0xY4"
                alt="Reception hall"
                fill
                className="object-cover"
             />
          </div>
        </div>
        {/* Connector Dot */}
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-[#f8f7f6] dark:border-[#221d10] hidden md:block z-20"></div>
      </div>
    </section>
  );
}
