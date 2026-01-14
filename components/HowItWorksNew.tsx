import { useEffect, useRef, useState } from 'react';
import { MessageSquare, Brain, Navigation, Shield } from 'lucide-react';

export function HowItWorksNew() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepIndex = parseInt(entry.target.getAttribute('data-step') || '0');
            setVisibleSteps((prev) => [...new Set([...prev, stepIndex])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const steps = sectionRef.current?.querySelectorAll('.step-card');
    steps?.forEach((step) => observer.observe(step));

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Describe the issue',
      description: 'Text, photo, or record the sound. Our AI analyzes symptoms instantly.',
      icon: MessageSquare,
      color: '#2563EB',
      features: ['Voice recognition', 'Image analysis', 'Symptom matcher']
    },
    {
      number: '02',
      title: 'Get instant AI guidance',
      description: 'Receive diagnosis, severity assessment, and transparent price estimate in seconds.',
      icon: Brain,
      color: '#22C55E',
      features: ['AI diagnosis', 'Cost estimate', 'Urgency level']
    },
    {
      number: '03',
      title: 'Track mechanic live or trigger SOS',
      description: 'See your verified provider approaching in real-time. Emergency? One-tap SOS alerts contacts.',
      icon: Navigation,
      color: '#F59E0B',
      features: ['Live tracking', 'ETA updates', 'Emergency SOS']
    }
  ];

  return (
    <section ref={sectionRef} id="how-it-works" className="relative py-24 md:py-32 overflow-hidden bg-[#0B1220]">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-[#22C55E]/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2563EB]/10 border border-[#2563EB]/30 rounded-full mb-6">
            <Shield size={16} className="text-[#2563EB]" />
            <span className="text-sm text-[#94A3B8]">Simple. Fast. Reliable.</span>
          </div>
          <h2 className="font-['Space_Grotesk'] text-[36px] md:text-[48px] leading-tight text-[#E5E7EB] mb-4">
            How It Works
          </h2>
          <p className="text-[18px] text-[#94A3B8] max-w-2xl mx-auto">
            From breakdown to rescue in three effortless steps. No confusion, no waiting—just help.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-32 left-0 right-0 h-0.5 bg-gradient-to-r from-[#2563EB]/20 via-[#22C55E]/20 to-[#F59E0B]/20" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div
                key={index}
                data-step={index}
                className="step-card relative group"
              >
                {/* Connecting dot on line */}
                <div className="hidden lg:flex absolute top-[120px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-[#0B1220] z-10 transition-all duration-500"
                  style={{
                    backgroundColor: visibleSteps.includes(index) ? step.color : '#1F2A44',
                    boxShadow: visibleSteps.includes(index) ? `0 0 20px ${step.color}80` : 'none',
                    transform: visibleSteps.includes(index) 
                      ? 'translateX(-50%) scale(1.3)' 
                      : 'translateX(-50%) scale(1)'
                  }}
                />

                {/* Card */}
                <div 
                  className="relative p-8 bg-gradient-to-br from-[#111B2E] to-[#0B1220] rounded-2xl border border-[#1F2A44] transition-all duration-500 h-full"
                  style={{
                    borderColor: visibleSteps.includes(index) ? `${step.color}40` : '#1F2A44',
                    transform: visibleSteps.includes(index) ? 'translateY(0)' : 'translateY(20px)',
                    opacity: visibleSteps.includes(index) ? 1 : 0,
                    transitionDelay: `${index * 150}ms`
                  }}
                >
                  {/* Glow effect */}
                  <div 
                    className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"
                    style={{ backgroundColor: `${step.color}30` }}
                  />

                  {/* Step number */}
                  <div 
                    className="absolute -top-4 -left-4 w-14 h-14 rounded-xl flex items-center justify-center font-['Space_Grotesk'] text-2xl text-white shadow-lg transition-all group-hover:scale-110"
                    style={{ 
                      background: `linear-gradient(135deg, ${step.color}, ${step.color}cc)`,
                      boxShadow: `0 0 30px ${step.color}60`
                    }}
                  >
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all"
                    style={{ backgroundColor: `${step.color}15` }}
                  >
                    <step.icon size={32} style={{ color: step.color }} />
                  </div>

                  {/* Content */}
                  <h3 className="font-['Space_Grotesk'] text-2xl text-[#E5E7EB] mb-3 group-hover:text-white transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-[#94A3B8] leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-2">
                    {step.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-[#94A3B8]">
                        <div 
                          className="w-1.5 h-1.5 rounded-full" 
                          style={{ backgroundColor: step.color }}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-[#94A3B8] mb-4">
            Average time from issue to help arriving: <span className="text-[#22C55E] font-semibold">12 minutes</span>
          </p>
          <button className="text-[#2563EB] hover:text-[#1d4ed8] transition-colors font-medium group">
            See detailed walkthrough 
            <span className="inline-block ml-1 group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}