import React from 'react';

export default function FounderLetter() {
  return (
    <section className="py-32 bg-[#f3f0e7] dark:bg-background-dark/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="w-full md:w-1/2">
            <div
              className="aspect-[3/4] bg-cover bg-center rounded-lg transition-all duration-700"
              style={{ backgroundImage: 'url("/images/our-story.jpg")' }}
            ></div>
          </div>
          <div className="w-full md:w-1/2 space-y-8 pt-10">
            <h3 className="text-4xl font-bold border-b border-primary/20 pb-6">Our Story</h3>
            <div className="space-y-6 text-lg leading-relaxed text-[#1b180d]/80 dark:text-white/80 italic">
              <p>
                <span className="text-5xl font-bold text-primary float-left mr-3 leading-[1]">M</span>ivia Events started with a simple belief: every moment, no matter how big or small, deserves to feel special.
              </p>
              <p>
                What began as a love for bringing people together soon grew into a commitment to helping others celebrate life in the most beautiful and organized way possible. We noticed that many events looked good but didn’t always feel good. That inspired us to build a company that balances professionalism with genuine care, where clients feel understood, supported, and excited every step of the way.
              </p>
              <p>
                Over time, that vision has grown. Today, Mivia Events is proud to partner with individuals, couples, brands, and organizations to create experiences that are thoughtful, seamless, and truly memorable. For us, it’s never just about planning events, it’s about creating moments that stay with you.
              </p>
              <p className="not-italic font-medium mt-4">
                 “Every event is crafted with elegance, creativity, and heart.”
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
