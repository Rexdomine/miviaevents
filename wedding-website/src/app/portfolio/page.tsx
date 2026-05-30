'use client';

import React, { useState } from 'react';
import PortfolioHero from '@/components/portfolio/PortfolioHero';
import FilterBar from '@/components/portfolio/FilterBar';
import MasonryGallery from '@/components/portfolio/MasonryGallery';
import InstagramFeed from '@/components/home/InstagramFeed';
import NewsletterCTA from '@/components/portfolio/NewsletterCTA';

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'grand-estates' | 'coastal-elopements' | 'destination-vows' | 'city-chic'>('all');

  return (
    <>
      <PortfolioHero />
      <FilterBar activeCategory={selectedCategory} setActiveCategory={setSelectedCategory} />
      <MasonryGallery activeCategory={selectedCategory} />
      <InstagramFeed />
      <NewsletterCTA />
    </>
  );
}
