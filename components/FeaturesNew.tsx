import { Brain, Navigation, Shield, DollarSign, AlertTriangle, History } from 'lucide-react';

export function FeaturesNew() {
  const features = [
    {
      icon: Brain,
      title: 'AI Sound & Image Diagnosis',
      description: 'Record engine sounds or snap a photo. Our AI identifies issues with 94% accuracy.',
      color: '#2563EB',
      tag: 'AI-Powered'
    },
    {
      icon: Navigation,
      title: 'Real-Time Mechanic Tracking',
      description: 'Watch your verified provider approach with live GPS. Know exactly when help arrives.',
      color: '#22C55E',
      tag: 'Live Updates'
    },
    {
      icon: Shield,
      title: 'Verified Service Providers',
      description: '100% background-checked mechanics and towing services. Safety first, always.',
      color: '#F59E0B',
      tag: 'Certified'
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'See cost estimates upfront—no surprises, no hidden fees. Fair and honest.',
      color: '#10B981',
      tag: 'No Hidden Fees'
    },
    {
      icon: AlertTriangle,
      title: 'SOS Emergency Mode',
      description: 'One-tap alerts to emergency contacts with live location sharing. Works offline.',
      color: '#EF4444',
      tag: 'Emergency'
    },
    {
      icon: History,
      title: 'Trip & Vehicle Health',
      description: 'Track service history, maintenance schedules, and vehicle insights over time.',
      color: '#8B5CF6',
      tag: 'Analytics'
    }
  ];

  return (
    <section id="features" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1220] via-[#111B2E] to-[#0B1220]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-[#2563EB]/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-[#22C55E]/20 rounded-full blur-[120px]" />
        </div>
      </div>

      <div className="relative max-w-[1280px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-['Space_Grotesk'] text-[36px] md:text-[48px] leading-tight text-[#E5E7EB] mb-4">
            Everything you need.<br />
            <span className="bg-gradient-to-r from-[#2563EB] to-[#22C55E] bg-clip-text text-transparent">
              Nothing you don't.
            </span>
          </h2>
          <p className="text-[18px] text-[#94A3B8] max-w-2xl mx-auto">
            Intelligent features designed for the moment when you need help most.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.08}s backwards`
              }}
            >
              {/* Hover glow */}
              <div 
                className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"
                style={{ backgroundColor: `${feature.color}30` }}
              />

              {/* Card */}
              <div className="relative h-full p-8 bg-gradient-to-br from-[#111B2E] to-[#0B1220] rounded-2xl border border-[#1F2A44] group-hover:border-[#2563EB]/50 transition-all duration-300 overflow-hidden">
                {/* Shine effect on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: `linear-gradient(135deg, transparent 0%, ${feature.color}08 50%, transparent 100%)`,
                  }}
                />

                {/* Tag */}
                <div 
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium"
                  style={{ 
                    backgroundColor: `${feature.color}15`,
                    color: feature.color
                  }}
                >
                  {feature.tag}
                </div>

                {/* Icon */}
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                  style={{ backgroundColor: `${feature.color}15` }}
                >
                  <feature.icon 
                    size={28} 
                    style={{ color: feature.color }}
                    className="transition-transform"
                  />
                </div>

                {/* Content */}
                <h3 className="font-['Space_Grotesk'] text-xl text-[#E5E7EB] mb-3 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-[#94A3B8] leading-relaxed group-hover:text-[#E5E7EB] transition-colors">
                  {feature.description}
                </p>

                {/* Bottom accent */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl"
                  style={{ background: `linear-gradient(90deg, ${feature.color}, transparent)` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <button className="text-[#2563EB] hover:text-[#1d4ed8] transition-colors font-medium group">
            Explore all features 
            <span className="inline-block ml-1 group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

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