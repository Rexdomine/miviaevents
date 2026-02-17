import Link from 'next/link';
import React from 'react';

export default function FeaturedPortfolio() {
  return (
    <section className="pb-32 px-6 md:px-12 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h3 className="text-4xl font-light tracking-tight">Featured Portfolio</h3>
            <p className="text-[#1b180d]/60 dark:text-white/60 mt-2 italic">A glimpse into our most prestigious events</p>
          </div>
          <Link href="/portfolio" className="text-sm uppercase tracking-widest font-bold border-b border-primary pb-1 hover:text-primary transition-colors">View All Works</Link>
        </div>
        <div className="grid grid-cols-12 gap-8">
          {/* Large Feature */}
          <div className="col-span-12 md:col-span-8 group relative overflow-hidden rounded-xl">
            <div
                className="w-full h-[600px] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: 'url("/portfolio/0U6A2604.jpg")' }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10">
              <span className="text-primary text-xs uppercase tracking-widest font-bold mb-2">Signature Weddings</span>
              <h4 className="text-white text-3xl font-light">Timeless Elegance</h4>
            </div>
          </div>
          {/* Small Vertical */}
          <div className="col-span-12 md:col-span-4 flex flex-col gap-8">
            <div className="group relative overflow-hidden rounded-xl h-full min-h-[400px]">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: 'url("/portfolio/0U6A1575.jpg")' }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                <h4 className="text-white text-xl font-light">Joyful Moments</h4>
              </div>
            </div>
          </div>
          {/* Offset Rows */}
          <div className="col-span-12 md:col-span-5 md:mt-[-100px] group relative overflow-hidden rounded-xl">
            <div
                className="w-full h-[500px] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: 'url("/portfolio/A10I0366.jpg")' }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10">
              <h4 className="text-white text-2xl font-light">Bespoke Details</h4>
            </div>
          </div>
          <div className="col-span-12 md:col-span-7 group relative overflow-hidden rounded-xl">
             <div
                className="w-full h-[400px] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: 'url("/portfolio/Tosin&Chika3768.jpg")' }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10">
              <h4 className="text-white text-2xl font-light">Celebration & Love</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
