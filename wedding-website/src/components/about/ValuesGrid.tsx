import React from 'react';

export default function ValuesGrid() {
  return (
    <section className="py-32 bg-background-light dark:bg-background-dark border-y border-primary/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h4 className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-4">Our Philosophy</h4>
          <h3 className="text-4xl font-bold">We Believe</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4 group">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-all duration-300">
              <span className="material-symbols-outlined">diamond</span>
            </div>
            <h5 className="text-xl font-bold">The Details</h5>
            <p className="opacity-70 text-sm leading-relaxed">Luxury is in the details.</p>
          </div>
          <div className="space-y-4 group">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-all duration-300">
              <span className="material-symbols-outlined">spa</span>
            </div>
            <h5 className="text-xl font-bold">The Process</h5>
            <p className="opacity-70 text-sm leading-relaxed">Planning should feel calm and organized.</p>
          </div>
          <div className="space-y-4 group">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-all duration-300">
              <span className="material-symbols-outlined">fingerprint</span>
            </div>
            <h5 className="text-xl font-bold">The Essence</h5>
            <p className="opacity-70 text-sm leading-relaxed">Your wedding should reflect you — beautifully and authentically.</p>
          </div>
          <div className="space-y-4 group">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-all duration-300">
              <span className="material-symbols-outlined">verified</span>
            </div>
            <h5 className="text-xl font-bold">The Standard</h5>
            <p className="opacity-70 text-sm leading-relaxed">Excellence is non-negotiable.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
