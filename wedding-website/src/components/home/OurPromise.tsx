import React from 'react';
import Section from '@/components/ui/Section';

export default function OurPromise() {
  return (
    <Section className="bg-[#f3f0e7] dark:bg-[#1a160d] text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light mb-8 editorial-spacing">Our Promise</h2>
        <p className="text-lg md:text-xl font-light leading-relaxed text-[#1b180d]/80 dark:text-[#f8f7f6]/80 italic">
          "We believe your event should feel effortless, personal, and extraordinary. With thoughtful planning, creative direction, and meticulous coordination, we ensure you are fully present to experience the joy of your event."
        </p>
      </div>
    </Section>
  );
}
