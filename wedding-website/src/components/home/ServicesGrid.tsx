import React from 'react';
import Section from '@/components/ui/Section';

export default function ServicesGrid() {
  return (
    <Section className="bg-[#f3f0e7] dark:bg-[#1a160d]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Planning */}
        <div className="flex flex-col items-center text-center group">
          <div className="size-16 rounded-full border border-primary/30 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
            <span className="material-symbols-outlined text-primary text-3xl">calendar_today</span>
          </div>
          <h3 className="text-xl font-bold mb-4 uppercase tracking-widest">Full-Service Planning</h3>
          <p className="text-sm font-light leading-relaxed opacity-80">
            From initial venue scouting to final vendor selection, we orchestrate every logistical detail of your journey.
          </p>
        </div>

        {/* Design */}
        <div className="flex flex-col items-center text-center group">
          <div className="size-16 rounded-full border border-primary/30 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
            <span className="material-symbols-outlined text-primary text-3xl">palette</span>
          </div>
          <h3 className="text-xl font-bold mb-4 uppercase tracking-widest">Bespoke Design</h3>
          <p className="text-sm font-light leading-relaxed opacity-80">
            Creating visual narratives through custom floral artistry, immersive lighting, and heritage-inspired decor.
          </p>
        </div>

        {/* Management */}
        <div className="flex flex-col items-center text-center group">
          <div className="size-16 rounded-full border border-primary/30 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
            <span className="material-symbols-outlined text-primary text-3xl">verified_user</span>
          </div>
          <h3 className="text-xl font-bold mb-4 uppercase tracking-widest">Event Management</h3>
          <p className="text-sm font-light leading-relaxed opacity-80">
            Flawless on-the-day coordination to ensure your only responsibility is to embrace every joyful moment.
          </p>
        </div>
      </div>
    </Section>
  );
}
