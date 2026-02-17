import React from 'react';
import Image from 'next/image';

export default function ServicesHero() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-background-dark">
      <div className="absolute inset-0 opacity-60">
        <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMfHCAd0VVNe_5FtHMVC3gM9DpusOxsYl0TCFqhwKX3dAKr__3O8PZk5qKivsEHuTCU_eQSvSSSOmGpOkpWBOjFw2-aTsFU6cb8LmYEJ4mK7zkNCxClYpwS9H9CvBcXpeoHwnHvsje2-xEBrMAwOO1t72FPFY91xagm0Rvq8w_dFpNyS30aA4dF5dc6SyFRoYCxiCr3LULco6loHsm9J4B5QGaeSa-mAda_azT3Nm7_Q0IpGdniXGe4D1ifHkB6AaawOFUPLJPUEI"
            alt="Luxury Wedding Setting"
            fill
            className="object-cover"
            priority
        />
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h2 className="text-white text-5xl md:text-7xl font-light italic mb-6 leading-tight">Curated Planning for the Modern Sophisticate</h2>
        <p className="text-white/90 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto">
            Elevated design and seamless execution for weddings across the globe.
        </p>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce">
        <span className="material-symbols-outlined text-3xl">expand_more</span>
      </div>
    </section>
  );
}
