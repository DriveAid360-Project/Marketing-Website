import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B1220]/80 backdrop-blur-xl border-b border-[#1F2A44]/50">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <img 
              src="/logo.png"
              alt="DriveAid360"
              className="h-12 w-auto transition-transform group-hover:scale-105" 
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-[#94A3B8] hover:text-[#E5E7EB] transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <button className="px-6 py-2.5 text-[#E5E7EB] hover:text-white transition-colors font-medium">
              Sign In
            </button>
            <button className="group relative px-6 py-2.5 bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] text-white rounded-xl font-medium transition-all overflow-hidden shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:scale-105">
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div 
                className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)'
                }}
              />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-[#E5E7EB] hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-[#0B1220]/95 backdrop-blur-xl border-t border-[#1F2A44]/50 transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#94A3B8] hover:text-[#E5E7EB] transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-[#1F2A44] space-y-3">
            <button className="w-full px-6 py-3 text-[#E5E7EB] hover:text-white transition-colors font-medium text-left">
              Sign In
            </button>
            <button className="w-full px-6 py-3 bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] text-white rounded-xl font-medium shadow-[0_0_20px_rgba(37,99,235,0.3)]">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}