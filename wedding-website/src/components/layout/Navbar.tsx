'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home', icon: 'home' },
  { href: '/services', label: 'Services', icon: 'design_services' },
  { href: '/process', label: 'Process', icon: 'list_alt' },
  { href: '/portfolio', label: 'Portfolio', icon: 'photo_library' },
  { href: '/about', label: 'About', icon: 'info' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className="sticky top-0 z-50 w-full px-6 lg:px-20 py-4 flex items-center justify-between"
        style={{
          background: 'rgba(255, 252, 245, 0.15)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(231, 225, 207, 0.3)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.08)',
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary text-3xl">storm</span>
          <span className="text-xl font-bold tracking-[0.2em] uppercase">Mivia Events</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2 text-sm font-medium uppercase tracking-widest">
          {navLinks.map(({ href, label }) => {
            const active = isActive(href);
            return (
              <Link
                key={href}
                href={href}
                className="relative px-4 py-2 rounded-lg transition-all duration-300 group"
                style={{
                  color: active ? '#1b180d' : undefined,
                  background: active
                    ? 'linear-gradient(135deg, rgba(212, 175, 55, 0.9), rgba(184, 148, 30, 0.85))'
                    : 'transparent',
                  boxShadow: active
                    ? '0 4px 15px rgba(212, 175, 55, 0.35), inset 0 1px 0 rgba(255,255,255,0.3)'
                    : undefined,
                  backdropFilter: active ? 'blur(10px)' : undefined,
                  fontWeight: active ? '700' : undefined,
                }}
              >
                {!active && (
                  <span
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: 'rgba(212, 175, 55, 0.12)',
                      border: '1px solid rgba(212, 175, 55, 0.25)',
                    }}
                  />
                )}
                <span className={`relative z-10 ${!active ? 'group-hover:text-primary transition-colors duration-300' : ''}`}>
                  {label}
                </span>
                {active && (
                  <span
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
                    style={{ background: '#1b180d', opacity: 0.6 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA + Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden lg:flex items-center justify-center px-6 py-2 rounded-lg font-bold text-sm uppercase tracking-wider transition-all duration-300 cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, rgba(212,175,55,0.85), rgba(184,148,30,0.9))',
              color: '#1b180d',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 4px 15px rgba(212,175,55,0.3), inset 0 1px 0 rgba(255,255,255,0.25)',
              border: '1px solid rgba(212,175,55,0.4)',
            }}
          >
            Book Consultation
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg cursor-pointer transition-all duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              background: menuOpen ? 'rgba(212,175,55,0.15)' : 'transparent',
              border: '1px solid rgba(212,175,55,0.2)',
            }}
          >
            <span className="material-symbols-outlined text-xl">
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </header>

      {/* Full-screen Mobile Menu Overlay */}
      <div
        className="fixed inset-0 z-40 md:hidden flex flex-col transition-all duration-500"
        style={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          background: 'rgba(27, 24, 13, 0.97)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
        }}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-2xl">storm</span>
            <span className="text-lg font-bold tracking-[0.2em] uppercase text-white">Mivia Events</span>
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center w-10 h-10 rounded-lg"
            style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <span className="material-symbols-outlined text-white">close</span>
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
          {navLinks.map(({ href, label, icon }, index) => {
            const active = isActive(href);
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-5 px-6 py-5 rounded-2xl transition-all duration-300"
                style={{
                  background: active
                    ? 'linear-gradient(135deg, rgba(212,175,55,0.25), rgba(184,148,30,0.15))'
                    : 'rgba(255,255,255,0.03)',
                  border: active
                    ? '1px solid rgba(212,175,55,0.4)'
                    : '1px solid rgba(255,255,255,0.06)',
                  animationDelay: `${index * 60}ms`,
                }}
              >
                <span
                  className="material-symbols-outlined text-2xl"
                  style={{ color: active ? '#D4AF37' : 'rgba(255,255,255,0.5)' }}
                >
                  {icon}
                </span>
                <span
                  className="text-xl font-medium tracking-widest uppercase"
                  style={{
                    color: active ? '#D4AF37' : 'rgba(255,255,255,0.85)',
                    fontWeight: active ? '700' : '400',
                  }}
                >
                  {label}
                </span>
                {active && (
                  <span className="ml-auto material-symbols-outlined text-primary text-sm">
                    chevron_right
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Book Consultation CTA */}
        <div className="px-8 pb-12 pt-4 border-t border-white/10">
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-bold text-sm uppercase tracking-[0.2em] transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #D4AF37, #B89C1E)',
              color: '#1b180d',
              boxShadow: '0 6px 25px rgba(212,175,55,0.35)',
            }}
          >
            <span className="material-symbols-outlined text-lg">calendar_month</span>
            Book Consultation
          </Link>
          <p className="text-center text-white/30 text-xs mt-4 tracking-widest uppercase">
            Mivia Events · Premium Event Planning
          </p>
        </div>
      </div>
    </>
  );
}
