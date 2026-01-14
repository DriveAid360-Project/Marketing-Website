import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-[#0B1220] border-t border-[#1F2A44] pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand column */}
          <div className="col-span-2">
            <img src="/logo.png" alt="DriveAid360" className="h-14 w-auto mb-4" />
            <p className="text-[#94A3B8] text-sm mb-6 max-w-xs">
              AI-powered roadside assistance. Help arrives before panic does.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3 text-sm text-[#94A3B8]">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-[#2563EB]" />
                <span>1-800-DRIVE-360</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-[#2563EB]" />
                <span>help@driveaid360.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-[#2563EB]" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Footer sections */}
          <div>
            <h4 className="font-['Space_Grotesk'] text-[#E5E7EB] mb-4">
              Product
            </h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#" 
                  className="text-[#94A3B8] hover:text-[#2563EB] transition-colors text-sm"
                >
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-[#94A3B8] hover:text-[#2563EB] transition-colors text-sm"
                >
                  Safety
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-[#94A3B8] hover:text-[#2563EB] transition-colors text-sm"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-[#94A3B8] hover:text-[#2563EB] transition-colors text-sm"
                >
                  Partners
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-[#94A3B8] hover:text-[#2563EB] transition-colors text-sm"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-['Space_Grotesk'] text-[#E5E7EB] mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#" 
                  className="text-[#94A3B8] hover:text-[#2563EB] transition-colors text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-[#94A3B8] hover:text-[#2563EB] transition-colors text-sm"
                >
                  Careers
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-[#94A3B8] hover:text-[#2563EB] transition-colors text-sm"
                >
                  Press
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-[#94A3B8] hover:text-[#2563EB] transition-colors text-sm"
                >
                  Blog
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-[#94A3B8] hover:text-[#2563EB] transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-['Space_Grotesk'] text-[#E5E7EB] mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#" 
                  className="text-[#94A3B8] hover:text-[#2563EB] transition-colors text-sm"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-[#94A3B8] hover:text-[#2563EB] transition-colors text-sm"
                >
                  Safety Guidelines
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-[#94A3B8] hover:text-[#2563EB] transition-colors text-sm"
                >
                  Partner Portal
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-[#94A3B8] hover:text-[#2563EB] transition-colors text-sm"
                >
                  API Docs
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-[#94A3B8] hover:text-[#2563EB] transition-colors text-sm"
                >
                  Status
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-['Space_Grotesk'] text-[#E5E7EB] mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#" 
                  className="text-[#94A3B8] hover:text-[#2563EB] transition-colors text-sm"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-[#94A3B8] hover:text-[#2563EB] transition-colors text-sm"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-[#94A3B8] hover:text-[#2563EB] transition-colors text-sm"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-[#94A3B8] hover:text-[#2563EB] transition-colors text-sm"
                >
                  Accessibility
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-[#94A3B8] hover:text-[#2563EB] transition-colors text-sm"
                >
                  Licenses
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="py-8 border-t border-[#1F2A44] mb-8">
          <div className="max-w-md mx-auto text-center">
            <h4 className="font-['Space_Grotesk'] text-[#E5E7EB] mb-2">
              Stay updated
            </h4>
            <p className="text-[#94A3B8] text-sm mb-4">
              Get safety tips and product updates
            </p>
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]" size={18} />
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full pl-10 pr-4 py-3 bg-[#0B1220] border border-[#1F2A44] rounded-xl text-[#E5E7EB] placeholder-[#94A3B8]/50 focus:outline-none focus:border-[#2563EB] transition-colors"
                />
              </div>
              <button className="px-6 py-3 bg-[#2563EB] hover:bg-[#1d4ed8] text-white rounded-xl transition-all font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#1F2A44]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#94A3B8]">
              © {new Date().getFullYear()} DriveAid360. All rights reserved.
            </p>
            
            {/* Social links */}
            <div className="flex items-center gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-[#111B2E] border border-[#1F2A44] flex items-center justify-center text-[#94A3B8] hover:text-[#2563EB] hover:border-[#2563EB]/50 transition-all hover:scale-110"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}