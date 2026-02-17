import React from 'react';
import ProcessHero from '@/components/process/ProcessHero';
import ProcessTimeline from '@/components/process/ProcessTimeline';
import ProcessCTA from '@/components/process/ProcessCTA';

export default function ProcessPage() {
  return (
    <>
      <ProcessHero />
      <ProcessTimeline />
      <ProcessCTA />
    </>
  );
}
