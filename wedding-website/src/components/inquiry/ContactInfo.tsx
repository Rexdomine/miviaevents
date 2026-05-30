import React from 'react';

export default function ContactInfo() {
  return (
    <div className="w-full md:w-1/2 relative min-h-[500px] md:min-h-0 bg-stone-900">
      {/* Crystal Clear High-Resolution Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-[1.01]"
        style={{ backgroundImage: 'url("/portfolio/0U6A1745.jpg")' }}
      ></div>
      {/* Dark gradient overlay for high contrast & perfect readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent z-[1]"></div>
      
      <div className="relative h-full flex flex-col justify-end p-8 md:p-12 lg:p-16 text-white z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 italic leading-tight text-white drop-shadow-sm">Tell us your story.</h1>
        <p className="text-lg font-light text-stone-200 opacity-90 max-w-sm mb-8 leading-relaxed">
            Crafting your legacy with bespoke wedding planning and design. Now accepting inquiries for the 2026/2027 seasons.
        </p>
        <div className="space-y-4 pt-8 border-t border-white/20">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">location_on</span>
            <span className="text-sm tracking-wide text-white/90">NIGERIA | WORLDWIDE</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">mail</span>
            <span className="text-sm tracking-wide text-white/90">hello@miviaevents.com</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">call</span>
            <span className="text-sm tracking-wide text-white/90">+234 907 570 8080</span>
          </div>
        </div>
      </div>
    </div>
  );
}

