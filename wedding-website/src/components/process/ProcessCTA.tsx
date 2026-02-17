import Link from 'next/link';
import React from 'react';

export default function ProcessCTA() {
  return (
    <section className="py-24 bg-[#fcfbf8] dark:bg-[#1b180d] border-t border-primary/20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="material-symbols-outlined text-primary text-5xl mb-6">auto_awesome</span>
        <h2 className="text-4xl md:text-5xl font-light italic mb-8">Ready to begin your journey?</h2>
        <p className="text-xl text-[#1b180d]/70 dark:text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            We only take on a limited number of celebrations each year to ensure every couple receives our undivided attention and the highest level of care.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="mailto:hello@miviaevents.com" className="w-full sm:w-auto min-w-[200px] bg-primary text-background-dark px-8 py-4 rounded-lg font-bold text-base uppercase tracking-widest hover:bg-primary/90 shadow-xl transition-all flex items-center justify-center">
            Schedule a Call
          </Link>
          <Link href="/portfolio" className="w-full sm:w-auto min-w-[200px] border border-primary text-primary px-8 py-4 rounded-lg font-bold text-base uppercase tracking-widest hover:bg-primary/10 transition-all flex items-center justify-center">
            View Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
