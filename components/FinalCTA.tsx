import { ArrowRight, Shield, X } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1220] via-[#111B2E] to-[#0B1220]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#2563EB]/30 to-[#22C55E]/30 rounded-full blur-[150px]" />
        </div>
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #2563EB 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative max-w-[1100px] mx-auto px-4 md:px-8">
        <div className="text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full mb-8"
            style={{
              animation: 'fadeInDown 0.8s ease-out 0.2s backwards'
            }}
          >
            <div className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse" />
            <span className="text-sm text-[#94A3B8]">Join 48,000+ drivers who feel safer</span>
          </div>

          {/* Headline */}
          <h2 
            className="font-['Space_Grotesk'] text-[40px] sm:text-[48px] md:text-[56px] leading-[1.1] text-[#E5E7EB] mb-6"
            style={{
              animation: 'fadeInUp 0.8s ease-out 0.3s backwards'
            }}
          >
            Ready to feel safe
            <br />
            <span className="bg-gradient-to-r from-[#2563EB] via-[#22C55E] to-[#2563EB] bg-clip-text text-transparent bg-[length:200%_100%]"
              style={{
                animation: 'shimmer 3s ease-in-out infinite'
              }}
            >
              on every drive?
            </span>
          </h2>

          {/* Subtext */}
          <p 
            className="text-[18px] sm:text-[20px] text-[#94A3B8] max-w-2xl mx-auto mb-10"
            style={{
              animation: 'fadeInUp 0.8s ease-out 0.4s backwards'
            }}
          >
            Start your 7-day free trial. No credit card required. Experience peace of mind from day one.
          </p>

          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
            style={{
              animation: 'fadeInUp 0.8s ease-out 0.5s backwards'
            }}
          >
            {/* Primary CTA */}
            <button className="group relative px-10 py-5 bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] text-white text-lg rounded-xl font-semibold transition-all overflow-hidden shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:shadow-[0_0_50px_rgba(37,99,235,0.6)] hover:scale-[1.03]">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Get Started Free
                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </span>
              {/* Shine effect */}
              <div 
                className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)'
                }}
              />
            </button>

            {/* Secondary CTA */}
            <button className="px-10 py-5 bg-transparent border-2 border-[#1F2A44] hover:border-[#2563EB] text-[#E5E7EB] text-lg rounded-xl font-semibold transition-all hover:bg-[#2563EB]/5">
              Contact Sales
            </button>
          </div>

          {/* Trust indicators */}
          <div 
            className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm text-[#94A3B8]"
            style={{
              animation: 'fadeInUp 0.8s ease-out 0.6s backwards'
            }}
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#22C55E]/10 flex items-center justify-center">
                <Shield size={16} className="text-[#22C55E]" />
              </div>
              <span>Secure payments</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#2563EB]/10 flex items-center justify-center">
                <Shield size={16} className="text-[#2563EB]" />
              </div>
              <span>Privacy-first</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#F59E0B]/10 flex items-center justify-center">
                <X size={16} className="text-[#F59E0B]" />
              </div>
              <span>Cancel anytime</span>
            </div>
          </div>

          {/* Social proof bar */}
          <div 
            className="mt-16 p-8 bg-gradient-to-br from-[#111B2E]/80 to-[#0B1220]/80 rounded-2xl border border-[#1F2A44] backdrop-blur-sm"
            style={{
              animation: 'fadeInUp 0.8s ease-out 0.7s backwards'
            }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <p className="font-['Space_Grotesk'] text-3xl md:text-4xl bg-gradient-to-br from-[#E5E7EB] to-[#94A3B8] bg-clip-text text-transparent mb-2">
                  4.9/5
                </p>
                <p className="text-sm text-[#94A3B8]">App Store rating</p>
              </div>
              <div className="text-center">
                <p className="font-['Space_Grotesk'] text-3xl md:text-4xl bg-gradient-to-br from-[#E5E7EB] to-[#94A3B8] bg-clip-text text-transparent mb-2">
                  48K+
                </p>
                <p className="text-sm text-[#94A3B8]">Happy drivers</p>
              </div>
              <div className="text-center">
                <p className="font-['Space_Grotesk'] text-3xl md:text-4xl bg-gradient-to-br from-[#E5E7EB] to-[#94A3B8] bg-clip-text text-transparent mb-2">
                  12 min
                </p>
                <p className="text-sm text-[#94A3B8]">Avg response</p>
              </div>
              <div className="text-center">
                <p className="font-['Space_Grotesk'] text-3xl md:text-4xl bg-gradient-to-br from-[#E5E7EB] to-[#94A3B8] bg-clip-text text-transparent mb-2">
                  24/7
                </p>
                <p className="text-sm text-[#94A3B8]">Support available</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
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
