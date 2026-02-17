import React from 'react';

export default function NewsletterCTA() {
  return (
    <section className="bg-background-light dark:bg-background-dark text-[#1b180d] dark:text-white py-24 px-6 text-center border-t border-primary/10">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-light italic mb-6">Begin Your Story</h2>
        <p className="text-[#1b180d]/60 dark:text-white/60 mb-10 leading-relaxed font-light">
            We only take on a limited number of weddings per year to ensure each union receives the meticulous attention and artistic care it deserves.
        </p>
        <form className="flex flex-col sm:flex-row gap-4">
            <input
                className="flex-1 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/20 text-[#1b180d] dark:text-white rounded-lg px-6 py-4 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-black/40 dark:placeholder:text-white/40"
                placeholder="Email Address"
                type="email"
            />
            <button className="bg-primary text-[#1b180d] px-10 py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-primary/90 transition-all cursor-pointer">
                Subscribe
            </button>
        </form>
      </div>
    </section>
  );
}
