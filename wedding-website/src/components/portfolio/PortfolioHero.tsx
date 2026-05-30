"use client";

import React, { useState } from 'react';
import VideoModal from '@/components/ui/VideoModal';


export default function PortfolioHero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden" style={{ margin: 0, padding: 0, borderRadius: 0, border: 'none' }}>
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          style={{ objectFit: 'cover', borderRadius: 0, margin: 0, padding: 0, border: 'none' }}
          className="absolute inset-0 w-full h-full object-cover -z-20"
        >
          <source src="/hero/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Dark Readable Overlay */}
        <div className="absolute inset-0 bg-black/20 -z-10" style={{ borderRadius: 0 }}></div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <span className="text-white text-sm uppercase tracking-[0.3em] mb-4">Established 2012</span>
          <h1 className="text-white text-6xl md:text-8xl font-light italic mb-6">Our Work</h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
              A collection of thoughtfully curated celebrations, each uniquely designed and flawlessly executed.
              <br className="hidden md:block" />
              Every wedding tells a different story. Here are a few of ours.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full max-w-xs sm:max-w-none justify-center items-stretch sm:items-center px-4 sm:px-0">
            <button className="px-8 py-4 bg-primary text-[#1b180d] font-bold uppercase tracking-widest rounded-lg hover:scale-105 transition-transform cursor-pointer text-center">
                Explore Volumes
            </button>
            <button
                onClick={() => setIsVideoOpen(true)}
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold uppercase tracking-widest rounded-lg hover:bg-white/20 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
                <span className="material-symbols-outlined">play_circle</span>
                Watch Film
            </button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce">
          <span className="material-symbols-outlined">expand_more</span>
        </div>
      </section>

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl="https://drive.google.com/file/d/1gTqOWBpmaNLQtl4gi8iaIRJUyevr85ZcqFSFmHdv-KI/preview"
      />
    </>
  );
}
