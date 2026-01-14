import { useState, useEffect } from 'react';
import { MapPin, Navigation, Shield, Zap, Clock } from 'lucide-react';

export function PhoneMockup() {
  const [activeScreen, setActiveScreen] = useState(0);

  const screens = [
    {
      title: "AI Diagnosis",
      icon: Zap,
      color: "#2563EB",
      content: (
        <div className="p-4 space-y-4">
          <div className="bg-[#1F2A44] rounded-xl p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-[#2563EB]/20 rounded-full flex items-center justify-center">
                <Zap size={20} className="text-[#2563EB]" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-[#94A3B8]">Analyzing Issue</p>
                <div className="w-full h-1 bg-[#111B2E] rounded-full mt-1">
                  <div className="w-3/4 h-full bg-[#2563EB] rounded-full animate-pulse" />
                </div>
              </div>
            </div>
            <p className="text-sm text-[#E5E7EB]">Engine making grinding noise</p>
          </div>
          <div className="bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-xl p-3">
            <p className="text-xs text-[#22C55E] mb-1">✓ Diagnosis Complete</p>
            <p className="text-sm text-[#E5E7EB]">Likely alternator issue</p>
          </div>
        </div>
      )
    },
    {
      title: "Live Tracking",
      icon: Navigation,
      color: "#22C55E",
      content: (
        <div className="p-4 space-y-4">
          <div className="bg-[#1F2A44] rounded-xl p-4 h-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#22C55E]/10 to-transparent" />
            <div className="relative">
              <MapPin className="text-[#22C55E] animate-bounce" size={24} />
              <div className="absolute top-1/2 left-1/2 w-20 h-20 border-2 border-[#22C55E]/30 rounded-full animate-ping" />
            </div>
          </div>
          <div className="flex items-center justify-between bg-[#1F2A44] rounded-xl p-3">
            <div>
              <p className="text-xs text-[#94A3B8]">ETA</p>
              <p className="text-lg font-['Space_Grotesk'] text-[#E5E7EB]">4 min</p>
            </div>
            <div>
              <p className="text-xs text-[#94A3B8]">Distance</p>
              <p className="text-lg font-['Space_Grotesk'] text-[#E5E7EB]">1.2 mi</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "SOS Mode",
      icon: Shield,
      color: "#EF4444",
      content: (
        <div className="p-4 space-y-4">
          <div className="bg-[#EF4444]/10 border border-[#EF4444]/30 rounded-xl p-4 text-center">
            <Shield size={40} className="text-[#EF4444] mx-auto mb-3 animate-pulse" />
            <p className="text-sm text-[#E5E7EB] mb-2">Emergency Mode Active</p>
            <p className="text-xs text-[#94A3B8]">Contacts notified • Location shared</p>
          </div>
          <div className="bg-[#1F2A44] rounded-xl p-3 space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse" />
              <p className="text-xs text-[#E5E7EB]">Mom notified - 30s ago</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse" />
              <p className="text-xs text-[#E5E7EB]">Dad notified - 30s ago</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % screens.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentScreen = screens[activeScreen];

  return (
    <div className="relative">
      {/* 3D Phone Frame */}
      <div className="relative w-[300px] mx-auto" style={{ perspective: '1000px' }}>
        <div 
          className="relative transition-all duration-700"
          style={{ 
            transform: 'rotateY(-10deg) rotateX(5deg)',
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Phone body */}
          <div className="relative bg-[#0B1220] rounded-[40px] p-3 border-4 border-[#1F2A44] shadow-2xl">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#0B1220] rounded-b-3xl z-20 border-x-4 border-b-4 border-[#1F2A44]" />
            
            {/* Screen */}
            <div className="relative bg-[#111B2E] rounded-[32px] overflow-hidden h-[600px] shadow-inner">
              {/* Status bar */}
              <div className="px-6 pt-10 pb-3 flex items-center justify-between text-xs text-[#E5E7EB] bg-gradient-to-b from-[#0B1220]/50 to-transparent">
                <span>9:41</span>
                <div className="flex items-center gap-1">
                  <div className="w-4 h-3 border border-[#E5E7EB] rounded-sm">
                    <div className="w-2 h-full bg-[#22C55E] rounded-sm" />
                  </div>
                </div>
              </div>

              {/* App content */}
              <div className="px-4 pt-4">
                {/* App header */}
                <div className="mb-6 text-center">
                  <h3 className="font-['Space_Grotesk'] text-xl text-[#E5E7EB] mb-1">
                    DriveAid360
                  </h3>
                  <div className="flex items-center justify-center gap-2">
                    <currentScreen.icon size={16} style={{ color: currentScreen.color }} />
                    <p className="text-sm" style={{ color: currentScreen.color }}>
                      {currentScreen.title}
                    </p>
                  </div>
                </div>

                {/* Screen content with animation */}
                <div className="animate-fadeIn" key={activeScreen}>
                  {currentScreen.content}
                </div>

                {/* Bottom action button */}
                <div className="absolute bottom-8 left-0 right-0 px-8">
                  <button 
                    className="w-full py-4 rounded-2xl font-medium text-white transition-all"
                    style={{ 
                      backgroundColor: currentScreen.color,
                      boxShadow: `0 10px 40px ${currentScreen.color}40`
                    }}
                  >
                    {activeScreen === 0 && "Find Help Now"}
                    {activeScreen === 1 && "Call Provider"}
                    {activeScreen === 2 && "Cancel SOS"}
                  </button>
                </div>
              </div>

              {/* Screen indicator dots */}
              <div className="absolute bottom-24 left-0 right-0 flex justify-center gap-2">
                {screens.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveScreen(index)}
                    className="w-2 h-2 rounded-full transition-all"
                    style={{
                      backgroundColor: index === activeScreen ? currentScreen.color : '#1F2A44',
                      transform: index === activeScreen ? 'scale(1.2)' : 'scale(1)'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Phone shadow */}
          <div 
            className="absolute inset-0 rounded-[40px] -z-10"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${currentScreen.color}40, transparent 70%)`,
              filter: 'blur(40px)',
              transform: 'translateZ(-50px)'
            }}
          />
        </div>
      </div>

      {/* Floating feature badges */}
      <div className="absolute -left-8 top-20 animate-float">
        <div className="bg-[#111B2E] border border-[#22C55E]/50 rounded-xl px-4 py-2 shadow-lg backdrop-blur-sm">
          <p className="text-xs text-[#22C55E] flex items-center gap-2">
            <Clock size={14} />
            2.4 min avg
          </p>
        </div>
      </div>
      
      <div className="absolute -right-8 top-40 animate-float-delayed">
        <div className="bg-[#111B2E] border border-[#2563EB]/50 rounded-xl px-4 py-2 shadow-lg backdrop-blur-sm">
          <p className="text-xs text-[#2563EB] flex items-center gap-2">
            <Shield size={14} />
            100% Verified
          </p>
        </div>
      </div>

      <div className="absolute -left-12 bottom-32 animate-float-delayed-2">
        <div className="bg-[#111B2E] border border-[#F59E0B]/50 rounded-xl px-4 py-2 shadow-lg backdrop-blur-sm">
          <p className="text-xs text-[#F59E0B] flex items-center gap-2">
            <Zap size={14} />
            AI-Powered
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 3s ease-in-out infinite 1s;
        }
        .animate-float-delayed-2 {
          animation: float 3s ease-in-out infinite 2s;
        }
      `}</style>
    </div>
  );
}
