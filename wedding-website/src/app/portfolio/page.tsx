import React from 'react';
import PortfolioHero from '@/components/portfolio/PortfolioHero';
import FilterBar from '@/components/portfolio/FilterBar';
import MasonryGallery from '@/components/portfolio/MasonryGallery';
import NewsletterCTA from '@/components/portfolio/NewsletterCTA';

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <FilterBar />
      <MasonryGallery />
      <NewsletterCTA />
    </>
  );
}
