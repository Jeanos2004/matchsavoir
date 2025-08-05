import React from 'react';
// Composants modernes
import HeroModern from '@/components/pages/Home/HeroModern';
import FeaturesModern from '@/components/pages/Home/FeaturesModern';
import StatsModern from '@/components/pages/Home/StatsModern';
import AboutModern from '@/components/pages/Home/AboutModern';
import TestimonialsModern from '@/components/pages/Home/TestimonialsModern';
import TeamModern from '@/components/pages/Home/TeamModern';
import CTAModern from '@/components/pages/Home/CTAModern';
import ContactModern from '@/components/pages/Home/ContactModern';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background-dark">
        <HeroModern />
        <FeaturesModern />
        <StatsModern />
        <AboutModern />
        <TestimonialsModern />
        <TeamModern />
        <CTAModern />
        <ContactModern />
    </div>
  );
}
