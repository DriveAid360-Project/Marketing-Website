'use client';

import { useEffect, useRef, useState } from 'react';
import { Sparkles, Zap, Shield } from 'lucide-react';

// Pre-generate particle data with seeded values to avoid hydration mismatch
const PARTICLE_DATA = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: ((i * 17 + 5) % 100),
  top: ((i * 23 + 10) % 100),
  opacity: 0.3 + ((i * 7) % 30) / 100,
  duration: 3 + ((i * 11) % 40) / 10,
  delay: ((i * 13) % 20) / 10,
}));

export function ParallaxSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight));
        setScrollY(scrollProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden bg-gradient-to-b from-[#0B1220] via-[#111B2E] to-[#0B1220]">
      {/* Animated particles */}
      <div className="absolute inset-0">
        {PARTICLE_DATA.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-[#2563EB] rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              opacity: particle.opacity,
              animation: `float ${particle.duration}s ease-in-out infinite ${particle.delay}s`,
              transform: `translateY(${scrollY * (50 + particle.id * 5)}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          />
        ))}
      </div>

      <div className="relative max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div 
            className="relative p-8 bg-[#111B2E]/50 backdrop-blur-sm rounded-2xl border border-[#2563EB]/30"
            style={{
              transform: `translateY(${-scrollY * 50}px)`,
              opacity: 0.5 + scrollY * 0.5,
              transition: 'all 0.3s ease-out'
            }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(37,99,235,0.5)]">
              <Sparkles className="text-white" size={32} />
            </div>
            <h3 className="font-['Space_Grotesk'] text-2xl text-[#E5E7EB] mb-3">
              AI-First Approach
            </h3>
            <p className="text-[#94A3B8] leading-relaxed">
              Machine learning continuously improves diagnosis accuracy, making help faster and smarter with every breakdown.
            </p>
          </div>

          {/* Card 2 - Center (moves less) */}
          <div 
            className="relative p-8 bg-[#111B2E]/50 backdrop-blur-sm rounded-2xl border border-[#22C55E]/30"
            style={{
              transform: `translateY(${-scrollY * 30}px)`,
              opacity: 0.5 + scrollY * 0.5,
              transition: 'all 0.3s ease-out'
            }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#22C55E] to-[#16a34a] rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(34,197,94,0.5)]">
              <Zap className="text-white" size={32} />
            </div>
            <h3 className="font-['Space_Grotesk'] text-2xl text-[#E5E7EB] mb-3">
              Instant Response
            </h3>
            <p className="text-[#94A3B8] leading-relaxed">
              Average 2.4-minute response time. Our network is optimized for speed when seconds matter most.
            </p>
          </div>

          {/* Card 3 */}
          <div 
            className="relative p-8 bg-[#111B2E]/50 backdrop-blur-sm rounded-2xl border border-[#F59E0B]/30"
            style={{
              transform: `translateY(${-scrollY * 40}px)`,
              opacity: 0.5 + scrollY * 0.5,
              transition: 'all 0.3s ease-out'
            }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#F59E0B] to-[#d97706] rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(245,158,11,0.5)]">
              <Shield className="text-white" size={32} />
            </div>
            <h3 className="font-['Space_Grotesk'] text-2xl text-[#E5E7EB] mb-3">
              Safety Certified
            </h3>
            <p className="text-[#94A3B8] leading-relaxed">
              Every provider undergoes rigorous background checks and safety training. Your security is non-negotiable.
            </p>
          </div>
        </div>

        {/* Center stat */}
        <div 
          className="mt-16 text-center"
          style={{
            transform: `scale(${0.9 + scrollY * 0.1})`,
            opacity: scrollY,
            transition: 'all 0.3s ease-out'
          }}
        >
          <div className="inline-block p-8 bg-gradient-to-r from-[#2563EB]/10 via-[#22C55E]/10 to-[#F59E0B]/10 rounded-3xl border border-[#2563EB]/20 backdrop-blur-sm">
            <p className="text-6xl font-['Space_Grotesk'] bg-gradient-to-r from-[#2563EB] via-[#22C55E] to-[#F59E0B] bg-clip-text text-transparent mb-2">
              98.7%
            </p>
            <p className="text-[#94A3B8]">User satisfaction rate</p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
}
