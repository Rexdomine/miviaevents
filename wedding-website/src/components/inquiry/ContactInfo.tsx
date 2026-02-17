import React from 'react';

export default function ContactInfo() {
  return (
    <div className="w-full md:w-5/12 lg:w-4/12 relative min-h-[400px] md:min-h-0 bg-background-dark">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDyzciXtKrDALHBj2tUnVdgwRdVm6RgDUVCowLFLq110XQKqNOEON9DZ47GhP42b_NYGNWOGUkqu4VcgnL7vpsUsrKaZpZ0BzkwybgphpbJ0z1Jp4iXp7STpcBZKIcKMst6z8RGNXs4-hMjoehZMNf8Xu3-6H4CbWeNPhnyAjDXDcFDUpJvC6NCCjCRfIF7rjHA3pXf7tJNVDpJJ8GgaH8GPVPz80V34IXNy9kBStqd0DWhf33fBJb2Rx8yUprtyKKpOqvo2cYXT4A")' }}
      ></div>
      <div className="relative h-full flex flex-col justify-end p-8 md:p-12 lg:p-16 text-white z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 italic leading-tight">Tell us your story.</h1>
        <p className="text-lg font-light opacity-90 max-w-sm mb-8 leading-relaxed">
            Crafting your legacy with bespoke wedding planning and design. Now accepting inquiries for the 2026/2027 seasons.
        </p>
        <div className="space-y-4 pt-8 border-t border-white/20">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">location_on</span>
            <span className="text-sm tracking-wide">NIGERIA | WORLDWIDE</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">mail</span>
            <span className="text-sm tracking-wide">miviaevents@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">call</span>
            <span className="text-sm tracking-wide">+234 907 570 8080</span>
          </div>
        </div>
      </div>
    </div>
  );
}
