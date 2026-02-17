import React from 'react';

export default function ProcessHero() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBVKWKeeEtKK4AYPCx_jDudvCC6xGOIJrLxu-L3viE2dyatDh2FE5IGQSwZybmhiZ0vjaMJ-P9Wos3wtDp-nNUYzOVnmuTvtyEFwjMuqld8Ylgojt7-25iD5PrvaSMkAKWSi4S7VVhjuQsuqv3e03RuVxrVlDpy-C0UfKVx9P7zHYGjo7GsbRbMku5aCswMMqmX_wAZN_uYIO-Q4s3d0lmrWKJpW8Zk1ZhCP7gGQCI2irI0PHzY4nji8lIVn6rQ4aGDk1c-wTsELng")' }}
      ></div>
      <div className="relative z-20 text-center px-4 max-w-3xl">
        <span className="text-primary uppercase tracking-[0.3em] text-sm mb-4 block font-bold">The Experience</span>
        <h2 className="text-5xl md:text-7xl text-white font-light italic leading-tight">Your Journey to a Flawless Celebration</h2>
        <p className="text-white/90 mt-6 text-lg max-w-xl mx-auto font-light leading-relaxed">
            A curated approach to bringing your unique vision to life with elegance, precision, and an unwavering commitment to beauty.
        </p>
      </div>
    </section>
  );
}
