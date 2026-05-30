'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Pages that have dark background/images at the top
  const isDarkHeroPage = pathname === '/' || pathname === '/portfolio' || pathname === '/process' || pathname === '/services';

  // Dynamic navbar styling based on scroll and page background
  const navStyles = isScrolled
    ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-stone-200/20 py-5 text-stone-900'
    : isDarkHeroPage
    ? 'bg-transparent py-8 text-white'
    : 'bg-transparent py-8 text-stone-900';

  return (
    <>
      <nav className={`fixed w-full z-[50] top-0 left-0 px-4 md:px-12 flex justify-between items-center transition-all duration-300 ${navStyles}`}>
        {/* Left Button */}
        <Link
          href="/contact"
          className="text-[10px] sm:text-xs md:text-sm tracking-[0.25em] uppercase font-medium hover:opacity-75 transition-opacity z-[51] font-sans"
        >
          ENQUIRE
        </Link>

        {/* Center Logo */}
        <Link
          href="/"
          className="text-xl sm:text-2xl md:text-3xl tracking-[0.3em] font-display uppercase absolute left-1/2 -translate-x-1/2 z-[51] transition-transform duration-300 hover:scale-105 whitespace-nowrap"
        >
          MIVIA EVENTS
        </Link>

        {/* Right Button / Custom 2-Line Hamburger Menu */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="flex items-center gap-2 sm:gap-3 group focus:outline-none cursor-pointer z-[51]"
          aria-label="Toggle Menu"
        >
          <span className="text-[10px] sm:text-xs md:text-sm tracking-[0.25em] uppercase font-medium group-hover:opacity-75 transition-opacity font-sans">
            MENU
          </span>
          <div className="flex flex-col justify-center gap-1.5 w-7 h-5">
            <span className="block h-[2px] w-7 bg-current transition-all duration-300 group-hover:w-4 group-hover:translate-x-3"></span>
            <span className="block h-[2px] w-4 bg-current transition-all duration-300 self-end group-hover:w-7"></span>
          </div>
        </button>
      </nav>

      {/* The Side Drawer Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Clickable Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black z-[99] cursor-pointer"
            />

            {/* Side Drawer Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 170 }}
              className="fixed inset-y-0 right-0 w-full md:w-1/2 h-full z-[100] flex flex-col justify-between p-8 md:p-16 text-white shadow-2xl bg-[url('/portfolio/0U6A1575.jpg')] bg-cover bg-center overflow-y-auto"
            >
              {/* Premium Dark Overlay & Frosted Glass layer */}
              <div className="absolute inset-0 bg-stone-950/85 backdrop-blur-md z-[-1]" />

              {/* Drawer Top */}
              <div className="flex justify-between items-center w-full z-10">
                {/* Brand Logo in Drawer */}
                <Link
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-xl tracking-[0.3em] font-display uppercase"
                >
                  MIVIA EVENTS
                </Link>

                {/* Close Button */}
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-2 group cursor-pointer focus:outline-none"
                  aria-label="Close Menu"
                >
                  <span className="text-xs tracking-[0.25em] uppercase font-light text-white/80 group-hover:text-white transition-colors font-sans">
                    CLOSE
                  </span>
                  <div className="relative w-6 h-6 flex items-center justify-center">
                    <span className="absolute block h-[1.5px] w-5 bg-white/80 group-hover:bg-white rotate-45 transition-transform duration-300"></span>
                    <span className="absolute block h-[1.5px] w-5 bg-white/80 group-hover:bg-white -rotate-45 transition-transform duration-300"></span>
                  </div>
                </button>
              </div>

              {/* Drawer Middle Links */}
              <div className="flex flex-col space-y-6 md:space-y-8 my-auto pl-4 md:pl-12 z-10">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'Services', path: '/services' },
                  { name: 'Process', path: '/process' },
                  { name: 'Portfolio', path: '/portfolio' },
                  { name: 'About', path: '/about' },
                  { name: 'Contact', path: '/contact' },
                ].map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="font-serif text-3xl md:text-5xl tracking-wide block transition-all duration-500 hover:italic hover:translate-x-2 text-white/80 hover:text-white"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Drawer Footer info */}
              <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center text-xs tracking-widest text-white/40 uppercase gap-4 z-10 font-sans">
                <div>
                  <p>© {new Date().getFullYear()} MIVIA EVENTS</p>
                </div>
                <div className="flex gap-6">
                  <a
                    href="https://instagram.com/miviaevents"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Instagram
                  </a>
                  <a
                    href="mailto:hello@miviaevents.com"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

