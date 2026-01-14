import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] text-white rounded-full shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:shadow-[0_0_40px_rgba(37,99,235,0.7)] transition-all duration-300 flex items-center justify-center group ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#22C55E] to-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10" />
    </button>
  );
}
