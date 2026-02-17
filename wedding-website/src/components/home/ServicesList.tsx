import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export default function ServicesList() {
  return (
    <section className="py-32 bg-background-dark text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-24 items-center">
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
          <div className="relative">
            <div className="relative aspect-[4/5] w-full">
                <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXyQQCvBJRK_SLlhzWlHqUzQXg4XZArXXT7IJPZz9Ziucc75Ju3TIiyPtbdCPwgbCVcuM3O4snRIxH4_ei9w3PxJDk7T3Q1TDiopIX9rn7HqF-9BMG151fjFpPYI0ZVJ1ZkQvI18zPRLPC8CgDAjfnku52A3bF55wCTBgoT5doz2DUbUeuZEOgeXaPtbcQhb0SeBRGgNf8lrIr2QPqjXdzGfHRCxOM8560_44GUQLYEKa-7PxPgjx2gudQPvFyOFjelNmwQxFzbsk"
                alt="Event Designer"
                fill
                className="rounded-xl grayscale hover:grayscale-0 transition-all duration-1000 object-cover"
                />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-primary p-12 hidden md:block rounded-lg text-[#1b180d]">
              <p className="font-bold text-4xl">15+</p>
              <p className="opacity-80 text-xs uppercase tracking-widest font-bold">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
