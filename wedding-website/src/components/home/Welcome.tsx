import React from 'react';
import Section from '@/components/ui/Section';

export default function Welcome() {
  return (
    <Section className="bg-background-light dark:bg-background-dark text-center">
      <div className="max-w-3xl mx-auto">
        <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Welcome</span>
        <h2 className="text-3xl md:text-5xl font-light mb-8 editorial-spacing">The Art of Celebration</h2>
        <div className="w-20 h-px bg-primary mx-auto mb-8"></div>
        <p className="text-lg md:text-xl font-light leading-relaxed text-[#1b180d]/80 dark:text-[#f8f7f6]/80 italic mb-8">
          "At Mivia Events, we curate moments that linger long after the last toast. Whether you’re hosting an intimate affair, milestone event or a high impact experience, our team transforms your vision into a seamless, stunning experience crafted with intention and designed to leave a lasting impression on every guest."
        </p>
        <p className="text-lg md:text-xl font-light leading-relaxed text-[#1b180d]/80 dark:text-[#f8f7f6]/80 italic mb-8">
           "From concept to completion, we transform your vision into an unforgettable celebration designed with purpose and sophistication."
        </p>
        <p className="text-xl font-medium tracking-wide uppercase text-primary">
            Every detail matters. Every moment is intentional.
        </p>
      </div>
    </Section>
  );
}
