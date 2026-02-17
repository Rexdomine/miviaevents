import React from 'react';

export default function AboutHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center px-6 py-20 overflow-hidden pt-32">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 z-10">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Mivia Events</span>
          <h2 className="text-6xl md:text-8xl font-light leading-[1.1] mb-8 italic">
            About <br/>
            <span className="font-bold not-italic">Us</span>
          </h2>
          <p className="text-lg md:text-xl text-[#1b180d]/70 dark:text-white/70 max-w-md leading-relaxed">
            At Mivia events, planning is more than logistics — it is the art of storytelling through design, atmosphere, and experience.
          </p>
        </div>
        <div className="lg:col-span-7 relative">
          <div
            className="aspect-[4/5] bg-cover bg-center rounded-xl shadow-2xl"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD5v8yRtptXbQ5efCjPr-eVFLoOWV6qU4c9eOl4NG5sgSXuZdiMRJsq4hnYoxHQKlZw7IL_z4te9_nlHvDgXzEe3pjU3BuCQsBChlxsjvWTRlBS_xwTSSqR1fOriPkl40SDf1qRrVBi-_ya_PG8EokEi5y5T1B4tVQ4N2CaiUh9IzHi4BMf2O9PkP_YJv7ySKuE5VTqNW4V4MHezdihfNL-yIKnnrTtNxVVVemnuW3ut90J8lEGXrvFY1v4zJXJsLDRdoHuTgnzwS8")' }}
          ></div>
          <div
            className="absolute -bottom-10 -left-10 hidden md:block w-64 aspect-square bg-cover bg-center rounded-lg border-8 border-background-light dark:border-background-dark shadow-2xl"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB0ONy0zyXHMBitlkMxtnzY8Rq8Nmiti9NiJO3SslEUD-HUdY2VwZPSovGWteIdLpDn-XWzx57ZvYcZ3OzH0bm67KAu7YbDiJECARsLwF1Jty692thU8VAEPXhHdDJbm0L1T1Tz623RQVGhM_CyIbSGDj6kKCoupjy-DRmjFsoEak_aE3QwWnzQlX9eM6aG12b4hzwNhWbzdBLRF9Wr7NESBTafcRm7GZwiGA7-GvABLbt1aoDtsQN7CGZ_QZhRDlqc2yVcoPB1ZuA")' }}
          ></div>
        </div>
      </div>
    </section>
  );
}
