"use client";

import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

export default function VideoModal({ isOpen, onClose, videoUrl }: VideoModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-primary transition-colors z-10"
      >
        <span className="material-symbols-outlined text-4xl">close</span>
      </button>

      <div className="relative w-full max-w-6xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
        <iframe
          src={videoUrl}
          className="absolute inset-0 w-full h-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Portfolio Video"
        ></iframe>
      </div>

      <div
        className="absolute inset-0 -z-10"
        onClick={onClose}
        aria-label="Close modal"
      ></div>
    </div>,
    document.body
  );
}
