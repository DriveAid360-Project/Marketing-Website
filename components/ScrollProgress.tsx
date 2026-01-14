import { useEffect, useState } from 'react';

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (window.scrollY / totalHeight) * 100;
      setProgress(scrollProgress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-[#1F2A44]">
      <div
        className="h-full bg-gradient-to-r from-[#2563EB] via-[#22C55E] to-[#F59E0B] transition-all duration-150 shadow-[0_0_10px_rgba(37,99,235,0.5)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
