import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e7e1cf] bg-background-light/80 backdrop-blur-md px-6 lg:px-20 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="material-symbols-outlined text-primary text-3xl">storm</span>
        <h1 className="text-xl font-bold tracking-[0.2em] uppercase">Mivia Events</h1>
      </div>
      <nav className="hidden md:flex items-center gap-10 text-sm font-medium uppercase tracking-widest">
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
        <Link href="/process" className="hover:text-primary transition-colors">Process</Link>
        <Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link>
        <Link href="/about" className="hover:text-primary transition-colors">About</Link>
        <Link href="/contact" className="hover:text-primary transition-colors text-primary font-bold">Contact</Link>
      </nav>
      <div className="flex items-center gap-6">
        <button className="hidden lg:flex items-center justify-center bg-primary text-[#1b180d] px-6 py-2 rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-primary/90 transition-all cursor-pointer">
          Book Consultation
        </button>
        <span className="material-symbols-outlined cursor-pointer md:hidden">menu</span>
      </div>
    </header>
  );
}
