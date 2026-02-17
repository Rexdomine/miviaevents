import React from 'react';

export default function Philosophy() {
  return (
    <section className="py-32 px-6 md:px-12 bg-background-light dark:bg-background-dark">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-8 block">About Mivia Events</span>
        <p className="text-xl md:text-2xl leading-relaxed font-light text-[#1b180d] dark:text-white mb-6">
            "At Mivia Events, we curate moments that linger long after the last toast. Whether you’re hosting an intimate affair, milestone event or a high impact experience, our team transforms your vision into a seamless, stunning experience crafted with intention and designed to leave a lasting impression on every guest."
        </p>
        <p className="text-lg opacity-80 font-light italic">
            From concept to completion, we transform your vision into an unforgettable celebration designed with purpose and sophistication. Every detail matters. Every moment is intentional.
        </p>
        <div className="mt-12 h-px w-24 bg-primary mx-auto"></div>
      </div>
    </section>
  );
}
