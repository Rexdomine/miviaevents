import Link from 'next/link';
import React from 'react';

export default function FilterBar() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-12 border-y border-primary/10 py-6">
        <Link href="#" className="text-sm font-bold uppercase tracking-widest border-b-2 border-primary pb-1">All Weddings</Link>
        <Link href="#" className="text-sm font-medium text-[#9a864c] uppercase tracking-widest hover:text-primary transition-colors">Grand Estates</Link>
        <Link href="#" className="text-sm font-medium text-[#9a864c] uppercase tracking-widest hover:text-primary transition-colors">Coastal Elopements</Link>
        <Link href="#" className="text-sm font-medium text-[#9a864c] uppercase tracking-widest hover:text-primary transition-colors">Destination Vows</Link>
        <Link href="#" className="text-sm font-medium text-[#9a864c] uppercase tracking-widest hover:text-primary transition-colors">City Chic</Link>
      </div>
    </section>
  );
}
