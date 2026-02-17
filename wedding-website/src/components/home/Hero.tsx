import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7p3Yv0gtyT-0yMtMEVd1wZM9UUcTkMFhhf95jVr6_xsDtQYa2Ua_mnVpgvDewo8Pjmjwx7O1K7i-pXG7madYCBe_o_TunVZ5U3CFU-xmdt6s5LctsHW-wSW4_AWY3uLFAso9ZpzF6UqZ1pZmV_k9S34DRU5o2AANyVrE3eryh4PBKyn8XT6HhRAojLGSB1dPpsLqGedOkk52rWxvP7eBD3r527C3cEuXVK1NTJkhSx6X5UKaWNTvWtf177c5dIlO2I98L7t9SpLA"
          alt="Luxury outdoor wedding setup"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <span className="block text-white/80 text-sm md:text-base mb-4 uppercase tracking-[0.2em]">Luxury event and wedding planning across Nigeria</span>
        <h1 className="text-white text-5xl md:text-7xl font-light leading-tight mb-4">
            Where Moments Become Experiences
        </h1>
        <p className="text-white/90 text-lg md:text-2xl font-light italic max-w-2xl mx-auto mb-10">
            Creating Unforgettable Moments
        </p>
        <a
            href="https://forms.gle/kRe2g3o4W7pPnWez9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-[#1b180d] px-10 py-4 rounded-lg font-bold text-sm uppercase tracking-[0.2em] hover:scale-105 transition-transform"
        >
            Book a Consultation
        </a>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <span className="material-symbols-outlined text-white text-3xl">keyboard_double_arrow_down</span>
      </div>
    </section>
  );
}
