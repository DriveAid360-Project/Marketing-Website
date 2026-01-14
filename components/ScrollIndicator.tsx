import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight * 0.8,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToContent}
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Scroll to explore"
    >
      <div className="flex flex-col items-center gap-2 group">
        <span className="text-sm text-[#94A3B8] group-hover:text-[#E5E7EB] transition-colors">
          Scroll to explore
        </span>
        <div className="w-10 h-10 rounded-full border-2 border-[#2563EB]/30 flex items-center justify-center group-hover:border-[#2563EB] transition-all group-hover:scale-110">
          <ChevronDown 
            size={20} 
            className="text-[#2563EB] animate-bounce" 
          />
        </div>
      </div>
    </button>
  );
}
