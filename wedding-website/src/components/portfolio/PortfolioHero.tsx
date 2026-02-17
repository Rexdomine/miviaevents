"use client";

import React, { useState } from 'react';
import VideoModal from '@/components/ui/VideoModal';

export default function PortfolioHero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="relative h-[85vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuCm42Gn3NcYoSdL6Kb9Ta3KDa4WSqhE9ZxHryc0C1ohECJmYdI_z3bafmtaQW7p6XrYs_7VoPfMCJce7ucq3IWugKz31BpEz2jH0FjzaNqodimEP-QYxRPb1lhxVUZUP_b_5NuJKAG4-aqvEFlV-jQo79S0x5QoRspzrRGa88knkk1cS5hSQZdpI7SmrsKpd6DLy13kBWE5ELuxm_2ySOFheoADrhZ_Oo7CbEombfAZ4aUyTsfZh698KPNSohsfvr7XtnwtuTfy3pI')" }}
        ></div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <span className="text-white text-sm uppercase tracking-[0.3em] mb-4">Established 2012</span>
          <h1 className="text-white text-6xl md:text-8xl font-light italic mb-6">Our Work</h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
              A collection of thoughtfully curated celebrations, each uniquely designed and flawlessly executed.
              <br className="hidden md:block" />
              Every wedding tells a different story. Here are a few of ours.
          </p>
          <div className="mt-10 flex gap-4">
            <button className="px-8 py-4 bg-primary text-[#1b180d] font-bold uppercase tracking-widest rounded-lg hover:scale-105 transition-transform cursor-pointer">
                Explore Volumes
            </button>
            <button
                onClick={() => setIsVideoOpen(true)}
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold uppercase tracking-widest rounded-lg hover:bg-white/20 transition-all cursor-pointer flex items-center gap-2"
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
