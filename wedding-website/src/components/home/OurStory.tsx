import React from 'react';
import Section from '@/components/ui/Section';

export default function OurStory() {
  return (
    <Section className="bg-background-light dark:bg-background-dark text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light mb-8 editorial-spacing">Our Story</h2>
        <div className="space-y-6 text-lg font-light leading-relaxed text-[#1b180d]/80 dark:text-[#f8f7f6]/80 italic">
          <p>
            Mivia Events started with a simple belief: every moment, no matter how big or small, deserves to feel special.
          </p>
          <p>
            What began as a love for bringing people together soon grew into a commitment to helping others celebrate life in the most beautiful and organized way possible. We noticed that many events looked good but didn’t always feel good. That inspired us to build a company that balances professionalism with genuine care, where clients feel understood, supported, and excited every step of the way.
          </p>
          <p>
            Over time, that vision has grown. Today, Mivia Events is proud to partner with individuals, couples, brands, and organizations to create experiences that are thoughtful, seamless, and truly memorable. For us, it’s never just about planning events, it’s about creating moments that stay with you.
          </p>
        </div>
      </div>
    </Section>
  );
}
