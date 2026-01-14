import { ArrowRight, Play } from 'lucide-react';
import { PhoneMockup } from './PhoneMockup';

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Premium animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1220] via-[#111B2E]/50 to-[#0B1220]">
        {/* Soft animated blobs */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-20 left-[10%] w-[500px] h-[500px] bg-[#2563EB]/20 rounded-full blur-[120px] animate-blob" />
          <div className="absolute top-40 right-[15%] w-[400px] h-[400px] bg-[#22C55E]/15 rounded-full blur-[100px] animate-blob animation-delay-2000" />
          <div className="absolute bottom-20 left-[40%] w-[350px] h-[350px] bg-[#F59E0B]/10 rounded-full blur-[90px] animate-blob animation-delay-4000" />
        </div>

        {/* Subtle noise texture */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' /%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        />
      </div>
      
      <div className="relative max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Animated entrance elements */}
            <div className="space-y-6">
              {/* Floating status badge */}
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#2563EB]/10 border border-[#2563EB]/30 rounded-full backdrop-blur-sm"
                style={{
                  animation: 'fadeInDown 0.8s ease-out 0.2s backwards'
                }}
              >
                <div className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse" />
                <span className="text-sm text-[#94A3B8]">24/7 Emergency Support • AI-Powered</span>
              </div>

              {/* Main headline with gradient shimmer */}
              <h1 
                className="font-['Space_Grotesk'] text-[44px] sm:text-[52px] lg:text-[64px] leading-[1.1] text-[#E5E7EB]"
                style={{
                  animation: 'fadeInUp 0.8s ease-out 0.3s backwards'
                }}
              >
                Help arrives before{' '}
                <span className="relative inline-block">
                  <span 
                    className="bg-gradient-to-r from-[#2563EB] via-[#22C55E] to-[#2563EB] bg-clip-text text-transparent bg-[length:200%_100%]"
                    style={{
                      animation: 'shimmer 3s ease-in-out infinite'
                    }}
                  >
                    panic does
                  </span>
                  <div 
                    className="absolute -bottom-2 left-0 right-0 h-1 rounded-full"
                    style={{
                      background: 'linear-gradient(90deg, #2563EB, #22C55E)',
                      animation: 'shimmer 3s ease-in-out infinite',
                      backgroundSize: '200% 100%'
                    }}
                  />
                </span>
              </h1>

              {/* Subheadline */}
              <p 
                className="text-[18px] sm:text-[20px] leading-[1.6] text-[#94A3B8] font-['Inter'] max-w-xl mx-auto lg:mx-0"
                style={{
                  animation: 'fadeInUp 0.8s ease-out 0.4s backwards'
                }}
              >
                DriveAid360 detects issues, guides you instantly, and connects you to verified help—fast. AI diagnosis meets trusted mechanics.
              </p>
            </div>

            {/* CTAs */}
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              style={{
                animation: 'fadeInUp 0.8s ease-out 0.5s backwards'
              }}
            >
              {/* Primary CTA with shine effect */}
              <button className="group relative px-8 py-4 bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] text-white rounded-xl font-medium transition-all overflow-hidden shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] hover:scale-[1.02]">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Started Free
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
                {/* Shine sweep effect */}
                <div 
                  className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)'
                  }}
                />
              </button>

              {/* Secondary CTA */}
              <button className="group px-8 py-4 bg-transparent border-2 border-[#1F2A44] hover:border-[#2563EB] text-[#E5E7EB] rounded-xl font-medium transition-all hover:bg-[#2563EB]/5 flex items-center justify-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/30 flex items-center justify-center group-hover:bg-[#2563EB]/20 transition-all">
                  <Play size={16} className="text-[#2563EB] fill-[#2563EB] ml-0.5" />
                </div>
                Watch 30s Demo
              </button>
            </div>

            {/* Trust microcopy */}
            <p 
              className="text-sm text-[#94A3B8] flex items-center gap-4 justify-center lg:justify-start flex-wrap"
              style={{
                animation: 'fadeInUp 0.8s ease-out 0.6s backwards'
              }}
            >
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#22C55E]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                No credit card
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#22C55E]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Instant access
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#22C55E]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Cancel anytime
              </span>
            </p>
          </div>

          {/* Right - 3D Phone Mockup */}
          <div 
            className="relative"
            style={{
              animation: 'fadeInRight 1s ease-out 0.4s backwards'
            }}
          >
            <PhoneMockup />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -40px) scale(1.05); }
          66% { transform: translate(-20px, 30px) scale(0.95); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes shimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        .animate-blob {
          animation: blob 7s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
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