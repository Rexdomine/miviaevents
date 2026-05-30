'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const highlightVideos = [
  {
    id: 1,
    title: "Volume I: The Grand Entrance",
    duration: "1:30",
    videoUrl: "/WhatsApp Video 2026-05-22 at 18.09.23.mp4",
  },
  {
    id: 2,
    title: "Volume II: Bespoke Celebrations",
    duration: "0:27",
    videoUrl: "/WhatsApp Video 2026-05-22 at 18.32.47.mp4",
  },
  {
    id: 3,
    title: "Volume III: The Reception Banquet",
    duration: "0:29",
    videoUrl: "/WhatsApp Video 2026-05-22 at 21.40.05 (1).mp4",
  }
];

export default function VideoHighlights() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Synchronize playback state across all video elements
  useEffect(() => {
    highlightVideos.forEach((_, idx) => {
      const el = videoRefs.current[idx];
      if (el) {
        if (idx === activeIndex) {
          el.muted = isMuted;
          if (isPlaying) {
            el.play().catch((err) => {
              console.log("Playback failed or was interrupted:", err);
            });
          } else {
            el.pause();
          }
        } else {
          el.pause();
          el.currentTime = 0; // Reset inactive videos to start so they play from beginning when activated
        }
      }
    });
  }, [activeIndex, isPlaying, isMuted]);

  const handlePlayPause = () => {
    const el = videoRefs.current[activeIndex];
    if (el) {
      if (isPlaying) {
        el.pause();
        setIsPlaying(false);
      } else {
        el.play().catch(() => {});
        setIsPlaying(true);
      }
    }
  };

  const handleMuteUnmute = () => {
    const el = videoRefs.current[activeIndex];
    if (el) {
      el.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleThumbnailSelect = (index: number) => {
    if (index === activeIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsTransitioning(false);
    }, 400); // match fade out duration
  };

  const handlePrev = () => {
    const prevIndex = (activeIndex - 1 + highlightVideos.length) % highlightVideos.length;
    handleThumbnailSelect(prevIndex);
  };

  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % highlightVideos.length;
    handleThumbnailSelect(nextIndex);
  };

  const activeVideo = highlightVideos[activeIndex];

  return (
    <section className="relative w-full h-[85vh] sm:h-[90vh] md:h-screen flex flex-col justify-between overflow-hidden bg-black z-10 border-y border-stone-850">
      
      {/* ── IMMERSIVE BACKGROUND VIDEO LAYER ── */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        {highlightVideos.map((video, idx) => {
          const isActive = idx === activeIndex;
          return (
            <video
              key={video.id}
              ref={(el) => {
                videoRefs.current[idx] = el;
              }}
              loop
              muted={isMuted}
              playsInline
              preload={isActive ? "auto" : "metadata"}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <source src={video.videoUrl} type="video/mp4" />
            </video>
          );
        })}
        
        {/* Soft, Luxury Editorial Dark Grid Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/60 z-20" />
      </div>

      {/* ── TOP HEADER: CATEGORY LABEL ── */}
      <div className="relative z-20 pt-16 md:pt-24 text-center px-4">
        <span className="text-[10px] sm:text-xs tracking-[0.3em] font-semibold text-primary uppercase drop-shadow-sm font-sans">
          Cinematic Highlights
        </span>
      </div>

      {/* ── CENTER EDITORIAL WRITING & BRAND CONTROLS ── */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto flex flex-col items-center justify-center flex-grow -mt-8 sm:-mt-12 md:-mt-16">
        
        {/* Video Title in Stylized DM Serif Display */}
        <AnimatePresence mode="wait">
          <motion.h2
            key={activeIndex}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-dm-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-wide leading-tight mb-8"
          >
            {activeVideo.title}
          </motion.h2>
        </AnimatePresence>

        {/* Media Controls: Play/Pause and Mute/Unmute */}
        <div className="flex items-center gap-6 sm:gap-8 z-30">
          
          {/* Play/Pause Button */}
          <button
            onClick={handlePlayPause}
            className="w-14 h-14 rounded-full border border-white/20 hover:border-primary/80 bg-white/5 backdrop-blur-md text-white flex items-center justify-center hover:scale-105 hover:bg-primary hover:text-black transition-all duration-300 cursor-pointer shadow-xl focus:outline-none"
            aria-label={isPlaying ? "Pause Video" : "Play Video"}
          >
            <span className="material-symbols-outlined text-2xl font-light">
              {isPlaying ? "pause" : "play_arrow"}
            </span>
          </button>

          {/* Mute/Unmute Button */}
          <button
            onClick={handleMuteUnmute}
            className="w-14 h-14 rounded-full border border-white/20 hover:border-primary/80 bg-white/5 backdrop-blur-md text-white flex items-center justify-center hover:scale-105 hover:bg-primary hover:text-black transition-all duration-300 cursor-pointer shadow-xl focus:outline-none"
            aria-label={isMuted ? "Unmute Video" : "Mute Video"}
          >
            <span className="material-symbols-outlined text-2xl font-light">
              {isMuted ? "volume_off" : "volume_up"}
            </span>
          </button>

        </div>
      </div>

      {/* ── BOTTOM THUMBNAIL SELECTOR CAROUSEL ── */}
      <div className="relative z-20 pb-12 sm:pb-16 w-full max-w-5xl mx-auto px-4 md:px-12">
        <div className="border-t border-white/10 pt-8 flex items-center justify-between gap-4">
          
          {/* Slide Left Arrow */}
          <button
            onClick={handlePrev}
            className="p-2 text-white/50 hover:text-primary transition-colors cursor-pointer focus:outline-none shrink-0"
            aria-label="Previous Highlight"
          >
            <span className="material-symbols-outlined text-3xl font-light">
              chevron_left
            </span>
          </button>

          {/* Scrolling Thumbnails List */}
          <div className="flex-1 overflow-x-auto no-scrollbar py-2">
            <div className="flex justify-center gap-4 sm:gap-6 min-w-max mx-auto px-4">
              {highlightVideos.map((video, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={video.id}
                    onClick={() => handleThumbnailSelect(idx)}
                    className="group relative text-left focus:outline-none cursor-pointer shrink-0 transition-transform hover:-translate-y-1 duration-300"
                  >
                    
                    {/* Thumbnail Video Preview Container */}
                    <div className={`relative w-[130px] sm:w-[150px] md:w-[170px] aspect-[16/10] overflow-hidden rounded-lg transition-all duration-500 shadow-md ${
                      isActive 
                        ? 'ring-2 ring-primary scale-105 shadow-primary/20' 
                        : 'border border-white/10 group-hover:border-white/40'
                    }`}>
                      <video
                        src={`${video.videoUrl}#t=0.5`}
                        preload="metadata"
                        muted
                        playsInline
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none"
                      />
                      
                      {/* Dark overlay inside thumbnail */}
                      <div className={`absolute inset-0 transition-opacity duration-300 ${
                        isActive ? 'bg-black/20' : 'bg-black/50 group-hover:bg-black/35'
                      }`} />

                      {/* Video Duration Pill in Bottom Right */}
                      <div className="absolute bottom-2 right-2 bg-black/75 px-1.5 py-0.5 rounded text-[8px] sm:text-[9px] tracking-wider text-white font-sans font-semibold">
                        {video.duration}
                      </div>

                      {/* Micro Active Glow Line */}
                      {isActive && (
                        <motion.div 
                          layoutId="activeGlow"
                          className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                        />
                      )}
                    </div>

                    {/* Small Sub-label */}
                    <p className={`mt-2.5 text-[9px] sm:text-[10px] tracking-wider uppercase font-semibold transition-colors duration-300 max-w-[130px] sm:max-w-[150px] md:max-w-[170px] truncate ${
                      isActive ? 'text-primary' : 'text-white/40 group-hover:text-white/80'
                    }`}>
                      {video.title.split(":")[0]}
                    </p>

                  </button>
                );
              })}
            </div>
          </div>

          {/* Slide Right Arrow */}
          <button
            onClick={handleNext}
            className="p-2 text-white/50 hover:text-primary transition-colors cursor-pointer focus:outline-none shrink-0"
            aria-label="Next Highlight"
          >
            <span className="material-symbols-outlined text-3xl font-light">
              chevron_right
            </span>
          </button>

        </div>
      </div>

    </section>
  );
}
