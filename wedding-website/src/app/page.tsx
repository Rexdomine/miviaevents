'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Hero from "@/components/home/Hero";
import Philosophy from "@/components/home/Philosophy";
import MeetBrand from "@/components/home/MeetFounder";
import FeaturedPortfolio from "@/components/home/FeaturedPortfolio";
import RoutesToIDo from "@/components/home/RoutesToIDo";
import ServicesList from "@/components/home/ServicesList";
import VideoHighlights from "@/components/home/VideoHighlights";
import JourneyCTA from "@/components/home/Testimonials";
import InstagramFeed from "@/components/home/InstagramFeed";
import Locations from "@/components/home/Locations";

const reviews = [
  { quote: "Mivia Events turned my dream destination wedding into a stunning reality. Flawless planning from across continents!", name: "A&K - Destination Experiences" },
  { quote: "Mivia Events' professionalism for our annual Corporate Gala impressed everyone. A spectacular evening and record attendance!", name: "Sarah J. - Corporate Event Lead" },
  { quote: "Personalized touches made my intimate birthday celebration truly unforgettable. A perfect execution!", name: "D. Chen - Private Celebration" },
  { quote: "Our destination elopement was worry-free and stunning. Flawless travel coordination and unique venue selection.", name: "Liam & Eva - Destination Elopement" },
  { quote: "Mivia Events helped us organize a record-breaking Charity Ball. Moving program, flawless pace, beautifully cohesive presentation.", name: "H. Patel - Fundraising Committee" },
  { quote: "The product launch was buzzworthy, with flawless technical integration and professional atmosphere. A major brand win!", name: "M. Rodriguez - Tech Product Lead" },
  { quote: "For our anniversary, Mivia Events captured romantic details and pacing perfectly. Re-lived the magic of our first day.", name: "T&M - Anniversary Celebration" },
  { quote: "Mivia Events honored my husband’s career with a dignified, joyful retirement party. Meaningful tributes and perfect honors.", name: "S. Williams - Retirement Event" },
  { quote: "The Art Exhibition opening was an elegant event with professional coordination and flawless focus.", name: "G. Rossi - Gallery Curator" },
  { quote: "Seamless logic and smooth technical transitions made our Academic Symposium a complete success.", name: "Dr. Lee - Symposium Committee" }
];

export default function Home() {
  return (
    <>
      <Hero />
      <Philosophy />
      <MeetBrand />
      <FeaturedPortfolio />
      
      {/* Editorial Routes to 'I Do' Section */}
      <RoutesToIDo />
      
      <ServicesList />
      <VideoHighlights />
      
      {/* Immersive Full-Screen Auto-scrolling Testimonials Section */}
      <section className="relative w-full h-screen flex flex-col justify-between overflow-hidden bg-[url('/portfolio/0U6A1745.jpg')] bg-cover bg-center bg-no-repeat z-0">
        {/* Dark overlay so the white text pops */}
        <div className="absolute inset-0 bg-black/70 -z-10"></div>
        
        {/* Centered Heading */}
        <div className="relative z-10 text-center pt-24 pb-8">
          <h2 className="text-sm tracking-[0.2em] uppercase text-white/70">WARMEST WORDS</h2>
        </div>
        
        {/* Seamless Horizontal Marquee */}
        <div className="relative z-10 w-full overflow-hidden flex items-center flex-1 py-12">
          <div className="flex w-full">
            <motion.div 
              className="flex gap-16 whitespace-nowrap animate-marquee hover:[animation-play-state:paused]"
              style={{ display: 'flex' }}
            >
              {/* Duplicate array to ensure endless visual loop */}
              {[...reviews, ...reviews].map((review, index) => (
                <div 
                  key={index} 
                  className="w-[85vw] md:w-[750px] shrink-0 whitespace-normal flex flex-col items-center justify-center px-4 md:px-12 select-none"
                >
                  <p className="font-[var(--font-playfair)] text-xl md:text-3xl lg:text-4xl text-white italic max-w-3xl text-center leading-relaxed mx-4 md:mx-12">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                  <span className="font-sans text-sm tracking-widest uppercase mt-8 text-white/80 font-semibold text-center">
                    {review.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        
        {/* Bottom spacing to balance top heading */}
        <div className="relative z-10 pb-20"></div>
      </section>

      <JourneyCTA />
      <InstagramFeed />
      <Locations />
    </>
  );
}
