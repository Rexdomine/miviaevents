import Image from 'next/image';
import React from 'react';

interface ServiceItemProps {
  id: string;
  category: string;
  title: string;
  description: string;
  essentials: string[];
  experience: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
  reversed?: boolean;
}

export default function ServiceItem({
  id,
  category,
  title,
  description,
  essentials,
  experience,
  price,
  imageSrc,
  imageAlt,
  reversed = false,
}: ServiceItemProps) {
  return (
    <section className="grid md:grid-cols-2 gap-12 items-center scroll-mt-32" id={id}>
      <div className={`space-y-6 ${reversed ? 'md:order-2' : 'md:order-1 order-2'}`}>
        <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold">{category}</span>
        <h3 className="text-4xl md:text-5xl font-light text-[#1b180d] dark:text-white">{title}</h3>
        <p className="text-lg opacity-80 leading-relaxed italic text-[#1b180d]/80 dark:text-white/80">
          {description}
        </p>
        <div className="grid grid-cols-2 gap-8 pt-4">
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-3 text-primary">The Essentials</h4>
            <ul className="text-sm space-y-2 opacity-70 text-[#1b180d] dark:text-white">
              {essentials.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-3 text-primary">The Experience</h4>
            <p className="text-sm opacity-70 italic text-[#1b180d] dark:text-white">{experience}</p>
          </div>
        </div>
        <div className="pt-6 flex items-center gap-6">
          <button className="bg-primary text-background-dark px-8 py-3 rounded-lg font-bold uppercase text-xs tracking-widest hover:scale-105 transition-transform">
            Inquire Now
          </button>
          <p className="text-xs opacity-50 uppercase tracking-widest text-[#1b180d] dark:text-white">{price}</p>
        </div>
      </div>
      <div className={`aspect-[4/5] bg-neutral-200 rounded-lg overflow-hidden shadow-2xl relative ${reversed ? 'md:order-1 order-1' : 'md:order-2 order-1'}`}>
        <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
        />
      </div>
    </section>
  );
}
