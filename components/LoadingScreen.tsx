import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [colorPhase, setColorPhase] = useState(0);
  const [loadingText, setLoadingText] = useState('Loading AI diagnostics...');

  const loadingMessages = [
    'Loading AI diagnostics...',
    'Connecting to trusted mechanics...',
    'Preparing live tracking...',
    'Almost ready...'
  ];

  useEffect(() => {
    // Progress animation - complete in ~2 seconds
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => onLoadingComplete(), 400);
          return 100;
        }
        return prev + 1.7; // Reaches 100 in ~2s
      });
    }, 30);

    // Color phase animation (every 500ms)
    const colorInterval = setInterval(() => {
      setColorPhase((prev) => (prev + 1) % 4);
    }, 500);

    // Loading text rotation (every 600ms)
    const textInterval = setInterval(() => {
      setLoadingText((prev) => {
        const currentIndex = loadingMessages.indexOf(prev);
        return loadingMessages[(currentIndex + 1) % loadingMessages.length];
      });
    }, 600);

    return () => {
      clearInterval(progressInterval);
      clearInterval(colorInterval);
      clearInterval(textInterval);
    };
  }, [onLoadingComplete]);

  const getGradientColors = () => {
    const gradients = [
      ['#2563EB', '#1d4ed8'], // Blue
      ['#22C55E', '#16a34a'], // Green
      ['#F59E0B', '#d97706'], // Orange
      ['#EF4444', '#dc2626'], // Red
    ];
    return gradients[colorPhase];
  };

  const [color1, color2] = getGradientColors();

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0B1220] transition-all duration-500"
      style={{
        opacity: progress >= 100 ? 0 : 1,
        transform: progress >= 100 ? 'scale(0.98)' : 'scale(1)',
      }}
    >
      {/* Animated background gradient */}
      <div 
        className="absolute inset-0 transition-all duration-1000 ease-in-out"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${color1}12, transparent 70%)`,
        }}
      />

      {/* Pulsing rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(2)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border transition-all duration-1000"
            style={{
              width: `${300 + i * 120}px`,
              height: `${300 + i * 120}px`,
              borderColor: `${color1}40`,
              opacity: 0.15 - i * 0.05,
              animation: `gentlePulse ${3 + i}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4">
        {/* Logo with color-changing glow */}
        <div className="mb-12 relative">
          <div
            className="absolute inset-0 blur-[60px] transition-all duration-1000 rounded-full"
            style={{
              background: `radial-gradient(circle, ${color1}50, ${color2}30)`,
              transform: 'scale(1.3)',
            }}
          />
          <img
            src="/logo.png"
            alt="DriveAid360"
            className="relative w-56 h-56 object-contain mx-auto"
            style={{
              filter: `drop-shadow(0 0 30px ${color1}90)`,
              animation: 'float 3s ease-in-out infinite'
            }}
          />
        </div>

        {/* Loading text with fade transitions */}
        <div className="h-8 mb-6">
          <h2 
            key={loadingText}
            className="font-['Space_Grotesk'] text-xl text-[#E5E7EB] animate-textFade"
          >
            {loadingText}
          </h2>
        </div>

        {/* Premium progress bar */}
        <div className="w-[min(400px,90vw)] mx-auto">
          <div className="h-1.5 bg-[#111B2E]/80 rounded-full overflow-hidden border border-[#1F2A44]/50 backdrop-blur-sm">
            <div
              className="h-full transition-all duration-200 ease-out relative"
              style={{
                width: `${progress}%`,
                background: `linear-gradient(90deg, ${color1}, ${color2})`,
                boxShadow: `0 0 20px ${color1}60`,
              }}
            >
              <div 
                className="absolute right-0 top-0 bottom-0 w-20 opacity-60"
                style={{
                  background: `linear-gradient(90deg, transparent, ${color2})`,
                }}
              />
            </div>
          </div>
          
          {/* Progress percentage */}
          <p className="mt-3 text-sm text-[#94A3B8] font-mono tabular-nums">
            {Math.floor(progress)}%
          </p>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes gentlePulse {
          0%, 100% { transform: scale(1); opacity: 0.15; }
          50% { transform: scale(1.08); opacity: 0.08; }
        }
        @keyframes textFade {
          0% { opacity: 0; transform: translateY(8px); }
          15% { opacity: 1; transform: translateY(0); }
          85% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-8px); }
        }
        .animate-textFade {
          animation: textFade 600ms ease-in-out;
        }
      `}</style>
    </div>
  );
}