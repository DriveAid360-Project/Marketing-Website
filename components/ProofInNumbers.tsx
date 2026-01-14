import { Clock, Users, CheckCircle, Star } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';

export function ProofInNumbers() {
  const stats = [
    {
      icon: Clock,
      value: 12,
      prefix: '',
      suffix: 's',
      label: 'Avg Response Time',
      sublabel: 'Industry avg: 45min',
      color: '#2563EB',
      isTime: false,
      showCountdown: true
    },
    {
      icon: Users,
      value: 1250,
      prefix: '',
      suffix: '+',
      label: 'Verified Providers',
      sublabel: 'Background checked',
      color: '#22C55E',
      isTime: false
    },
    {
      icon: CheckCircle,
      value: 500,
      prefix: '',
      suffix: '+',
      label: 'Successful Assists',
      sublabel: 'This year alone',
      color: '#F59E0B',
      isTime: false
    },
    {
      icon: Star,
      value: 4.9,
      prefix: '',
      suffix: '/5',
      label: 'User Satisfaction',
      sublabel: '98% would recommend',
      color: '#EF4444',
      isTime: false,
      decimals: 1
    }
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1220] via-[#111B2E] to-[#0B1220]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#2563EB]/30 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#22C55E]/30 rounded-full blur-3xl" />
        </div>
      </div>

      <div className="relative max-w-[1280px] mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-['Space_Grotesk'] text-[36px] md:text-[48px] leading-tight text-[#E5E7EB] mb-4">
            Trusted by drivers everywhere
          </h2>
          <p className="text-[18px] text-[#94A3B8] max-w-2xl mx-auto">
            Real numbers from real rescues. Our AI-powered network delivers help faster than anyone else.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group"
              style={{
                animation: `fadeInUp 0.8s ease-out ${index * 0.1}s forwards`,
                opacity: 0
              }}
            >
              {/* Glow effect */}
              <div 
                className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{ backgroundColor: `${stat.color}40` }}
              />
              
              {/* Card */}
              <div className="relative h-full p-8 bg-gradient-to-br from-[#111B2E] to-[#0B1220] rounded-2xl border border-[#1F2A44] group-hover:border-[#2563EB]/50 transition-all">
                {/* Icon */}
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all"
                  style={{ backgroundColor: `${stat.color}15` }}
                >
                  <stat.icon size={28} style={{ color: stat.color }} />
                </div>

                {/* Animated number */}
                <div className="mb-2">
                  <AnimatedCounter
                    end={stat.value}
                    duration={1200}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                    isTime={stat.isTime}
                    className="font-['Space_Grotesk'] text-[42px] md:text-[48px] leading-none bg-gradient-to-br from-[#E5E7EB] to-[#94A3B8] bg-clip-text text-transparent"
                  />
                </div>

                {/* Label */}
                <p className="text-[16px] text-[#E5E7EB] mb-1 font-medium">
                  {stat.label}
                </p>
                <p className="text-[14px] text-[#94A3B8]">
                  {stat.sublabel}
                </p>

                {/* Decorative element */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ 
                    background: `linear-gradient(90deg, ${stat.color}, transparent)` 
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-[#94A3B8]">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse" />
            <span>Real-time data</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#2563EB] rounded-full animate-pulse" />
            <span>Verified metrics</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#F59E0B] rounded-full animate-pulse" />
            <span>Updated daily</span>
          </div>
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
