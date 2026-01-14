"use client";

import { useState } from 'react';
import { LoadingScreen } from '@/components/LoadingScreen';
import { ScrollProgress } from '@/components/ScrollProgress';
import { ScrollIndicator } from '@/components/ScrollIndicator';
import { BackToTop } from '@/components/BackToTop';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ProofInNumbers } from '@/components/ProofInNumbers';
import { HowItWorksNew } from '@/components/HowItWorksNew';
import { FeaturesNew } from '@/components/FeaturesNew';
import { ParallaxSection } from '@/components/ParallaxSection';
import { TestimonialsNew } from '@/components/TestimonialsNew';
import { PricingNew } from '@/components/PricingNew';
import { FAQ } from '@/components/FAQ';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
      <>
        {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}

        <div className={`min-h-screen bg-[#0B1220] text-[#E5E7EB] font-['Inter'] transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
          {!isLoading && <ScrollProgress />}
          {!isLoading && <ScrollIndicator />}
          {!isLoading && <BackToTop />}
          <Navbar />
          <main>
            <Hero />
            <ProofInNumbers />
            <HowItWorksNew />
            <FeaturesNew />
            <ParallaxSection />
            <TestimonialsNew />
            <PricingNew />
            <FAQ />
            <FinalCTA />
          </main>
          <Footer />
        </div>
      </>
  );
}