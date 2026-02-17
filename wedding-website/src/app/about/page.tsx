import React from 'react';
import AboutHero from '@/components/about/AboutHero';
import FounderLetter from '@/components/about/FounderLetter';
import ValuesGrid from '@/components/about/ValuesGrid';
import ImageStrip from '@/components/about/ImageStrip';
import AboutCTA from '@/components/about/AboutCTA';

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <FounderLetter />
      <ValuesGrid />
      <ImageStrip />
      <AboutCTA />
    </>
  );
}
