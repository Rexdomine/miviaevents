import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import FadeIn from '@/components/FadeIn';


export default function ServicesList() {
  return (
    <section className="py-32 bg-background-dark text-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <FadeIn>
          <div>
            <h2 className="text-5xl md:text-6xl font-light leading-tight mb-12">
                Elevated Planning for <span className="italic text-primary">Extraordinary</span> Occasions.
            </h2>
            <ul className="space-y-8">
              <li className="group cursor-pointer border-b border-white/10 pb-6 hover:border-primary transition-colors">
                <Link href="#" className="flex justify-between items-center w-full">
                  <span className="text-2xl font-light group-hover:translate-x-4 transition-transform">Luxury Weddings</span>
                  <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
                </Link>
              </li>
              <li className="group cursor-pointer border-b border-white/10 pb-6 hover:border-primary transition-colors">
                 <Link href="#" className="flex justify-between items-center w-full">
                  <span className="text-2xl font-light group-hover:translate-x-4 transition-transform">Corporate Galas</span>
                  <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
                </Link>
              </li>
              <li className="group cursor-pointer border-b border-white/10 pb-6 hover:border-primary transition-colors">
                 <Link href="#" className="flex justify-between items-center w-full">
                  <span className="text-2xl font-light group-hover:translate-x-4 transition-transform">Private Celebrations</span>
                  <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
                </Link>
              </li>
              <li className="group cursor-pointer border-b border-white/10 pb-6 hover:border-primary transition-colors">
                 <Link href="#" className="flex justify-between items-center w-full">
                  <span className="text-2xl font-light group-hover:translate-x-4 transition-transform">Destination Experiences</span>
                  <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
                </Link>
              </li>
            </ul>
          </div>
          </FadeIn>
          <FadeIn delay={0.2}>
          <div className="relative">
            <div className="relative aspect-[4/5] w-full">
                <Image
                src="/images/mivia-logo.png"
                alt="Mivia Events Logo"
                fill
                className="rounded-xl object-contain transition-all duration-1000 p-8 bg-white/5"
                />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-primary p-12 hidden md:block rounded-lg text-[#1b180d]">
              <p className="font-bold text-4xl">15+</p>
              <p className="opacity-80 text-xs uppercase tracking-widest font-bold">Years of Excellence</p>
            </div>
          </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
