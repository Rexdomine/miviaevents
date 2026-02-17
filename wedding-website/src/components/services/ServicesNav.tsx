import Link from 'next/link';
import React from 'react';

export default function ServicesNav() {
  return (
    <div className="sticky top-[73px] z-40 bg-background-light dark:bg-background-dark border-b border-primary/10 overflow-x-auto">
      <div className="max-w-7xl mx-auto px-6 py-4 flex gap-8 whitespace-nowrap justify-center text-xs font-bold uppercase tracking-[0.2em] text-[#1b180d] dark:text-white">
        <Link href="#full-planning" className="hover:text-primary transition-colors">Full Planning</Link>
        <Link href="#partial-planning" className="hover:text-primary transition-colors">Partial</Link>
        <Link href="#day-management" className="hover:text-primary transition-colors">Day Management</Link>
        <Link href="#design-styling" className="hover:text-primary transition-colors">Design & Styling</Link>
        <Link href="#traditional" className="hover:text-primary transition-colors">Traditional</Link>
        <Link href="#destination" className="hover:text-primary transition-colors">Destination</Link>
      </div>
    </div>
  );
}
