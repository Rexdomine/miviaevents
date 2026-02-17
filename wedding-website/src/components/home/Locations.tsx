import React from 'react';

export default function Locations() {
  return (
    <section className="py-12 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-8">
        <div className="p-10 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-[#1b180d]/5 dark:border-white/10">
          <h5 className="font-bold text-xs uppercase tracking-[0.3em] text-primary mb-4">Lagos Office</h5>
          <p className="font-light text-[#1b180d]/60 dark:text-white/60 leading-relaxed">Victoria Island<br/>Lagos, Nigeria</p>
          <div className="mt-6 w-full h-32 bg-[#1b180d]/5 dark:bg-white/5 rounded"></div>
        </div>
        <div className="p-10 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-[#1b180d]/5 dark:border-white/10">
          <h5 className="font-bold text-xs uppercase tracking-[0.3em] text-primary mb-4">London Studio</h5>
          <p className="font-light text-[#1b180d]/60 dark:text-white/60 leading-relaxed">Mayfair, W1K<br/>London, United Kingdom</p>
          <div className="mt-6 w-full h-32 bg-[#1b180d]/5 dark:bg-white/5 rounded"></div>
        </div>
        <div className="p-10 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-[#1b180d]/5 dark:border-white/10">
          <h5 className="font-bold text-xs uppercase tracking-[0.3em] text-primary mb-4">New York Suite</h5>
          <p className="font-light text-[#1b180d]/60 dark:text-white/60 leading-relaxed">Fifth Avenue<br/>New York, NY 10022</p>
          <div className="mt-6 w-full h-32 bg-[#1b180d]/5 dark:bg-white/5 rounded"></div>
        </div>
      </div>
    </section>
  );
}
