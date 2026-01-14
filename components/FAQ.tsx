import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does offline SOS mode work?",
      answer: "When you enable SOS mode and lose internet connection, DriveAid360 automatically sends SMS alerts to your emergency contacts with your last known location. The app also attempts to contact local emergency services via SMS with your coordinates, ensuring help can reach you even without data."
    },
    {
      question: "How are service providers verified?",
      answer: "Every mechanic and towing service undergoes a comprehensive background check, license verification, and insurance validation. We also require safety training certification and maintain an ongoing rating system. Providers must maintain a 4.0+ rating to stay active on the platform."
    },
    {
      question: "What does 'upfront cost estimate' really mean?",
      answer: "Before you confirm service, our AI analyzes your issue, location, and provider rates to give you a clear price range. You'll see the estimated cost before agreeing to help, and the final price won't exceed 10% of the estimate unless you approve additional work."
    },
    {
      question: "How do insurance claims work?",
      answer: "Upload your insurance documents, breakdown details, and provider receipts directly in the app. We automatically format the claim, track its status, and can communicate with your insurance company on your behalf. Most claims are submitted within 24 hours."
    },
    {
      question: "Who can see my location when I share it?",
      answer: "Only the contacts you explicitly choose can see your location. You control who's added to your safety circle, and you can pause or stop sharing at any time. Your location data is end-to-end encrypted and never sold or shared with third parties."
    },
    {
      question: "What happens if no providers are nearby?",
      answer: "If no providers are available within your immediate area, we expand the search radius and notify providers farther out with incentive bonuses for the extended drive. You'll see updated ETAs and can choose to wait or contact emergency services. In extreme cases, our support team will coordinate alternative solutions."
    }
  ];

  return (
    <section id="faq" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1220] via-[#111B2E] to-[#0B1220]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-[900px] mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-['Space_Grotesk'] text-[36px] md:text-[48px] leading-tight text-[#E5E7EB] mb-4">
            Questions? We've got answers.
          </h2>
          <p className="text-[18px] text-[#94A3B8]">
            Everything you need to know about staying safe on the road
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-[#111B2E] to-[#0B1220] rounded-2xl border border-[#1F2A44] hover:border-[#2563EB]/30 overflow-hidden transition-all"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.08}s backwards`
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#111B2E]/50 transition-all"
              >
                <span className="font-['Space_Grotesk'] text-[18px] text-[#E5E7EB] group-hover:text-white transition-colors pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-[#2563EB] flex-shrink-0 transition-all duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div 
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: openIndex === index ? '500px' : '0',
                  opacity: openIndex === index ? 1 : 0
                }}
              >
                <div className="px-6 pb-5">
                  <p className="text-[#94A3B8] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center p-8 bg-gradient-to-br from-[#111B2E] to-[#0B1220] rounded-2xl border border-[#1F2A44]">
          <p className="text-[#94A3B8] mb-4">Still have questions?</p>
          <button className="group relative px-8 py-3 bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] text-white rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] font-medium overflow-hidden hover:scale-105">
            <span className="relative z-10">Contact Support</span>
            <div 
              className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)'
              }}
            />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
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