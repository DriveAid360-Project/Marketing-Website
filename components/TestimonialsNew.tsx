import { Star, Quote } from 'lucide-react';

export function TestimonialsNew() {
  const testimonials = [
    {
      name: 'Shenali Wickramasinghe',
      role: 'University Student',
      location: 'Kotte, Sri Lanka',
      image: '👩‍🎓',
      rating: 5,
      content: "I broke down at midnight on a lonely highway. The SOS feature alerted my parents instantly, and help arrived in 8 minutes. Felt safe the whole time.",
      highlight: '8 minutes'
    },
    {
      name: 'Kasun Jayasinghe',
      role: 'Operations Executive',
      location: 'Colombo, Sri Lanka',
      image: '👨‍💼',
      rating: 5,
      content: "The AI diagnosed my alternator issue immediately and gave me a fair price quote. No more getting ripped off by shady mechanics. This app is essential.",
      highlight: 'Fair pricing'
    },
    {
      name: 'Priyanka Fernando',
      role: 'Mom of Three',
      location: 'Galle, Sri Lanka',
      image: '👩‍👧‍👦',
      rating: 5,
      content: "As a mom, knowing I can track the mechanic in real-time while my kids are in the car gives me incredible peace of mind. Worth every penny.",
      highlight: 'Peace of mind'
    }
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#0B1220]">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2563EB]/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full mb-6">
            <Star size={16} className="text-[#22C55E] fill-[#22C55E]" />
            <span className="text-sm text-[#94A3B8]">4.9/5 from 500+ drivers</span>
          </div>
          <h2 className="font-['Space_Grotesk'] text-[36px] md:text-[48px] leading-tight text-[#E5E7EB] mb-4">
            Real stories from real drivers
          </h2>
          <p className="text-[18px] text-[#94A3B8] max-w-2xl mx-auto">
            Join thousands who've turned panic into calm with DriveAid360.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.12}s backwards`
              }}
            >
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-[#2563EB]/30 to-[#22C55E]/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />

              {/* Card */}
              <div className="relative h-full p-8 bg-gradient-to-br from-[#111B2E] to-[#0B1220] rounded-2xl border border-[#1F2A44] group-hover:border-[#2563EB]/50 transition-all duration-300">
                {/* Quote icon */}
                <Quote 
                  size={40} 
                  className="absolute top-6 right-6 text-[#2563EB]/10 group-hover:text-[#2563EB]/20 transition-colors" 
                />

                {/* Avatar & info */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#2563EB]/20 to-[#22C55E]/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {testimonial.image}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-['Space_Grotesk'] text-[#E5E7EB] group-hover:text-white transition-colors">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-[#94A3B8]">{testimonial.role}</p>
                    <p className="text-xs text-[#94A3B8]/70">{testimonial.location}</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className="fill-[#F59E0B] text-[#F59E0B] group-hover:scale-110 transition-all"
                      style={{ transitionDelay: `${i * 40}ms` }}
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-[#94A3B8] leading-relaxed group-hover:text-[#E5E7EB] transition-colors mb-4">
                  "{testimonial.content}"
                </p>

                {/* Highlight badge */}
                <div className="inline-block px-3 py-1 bg-[#2563EB]/10 border border-[#2563EB]/30 rounded-full text-xs text-[#2563EB]">
                  {testimonial.highlight}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-gradient-to-br from-[#111B2E]/50 to-[#0B1220]/50 rounded-2xl border border-[#1F2A44] backdrop-blur-sm">
          <div className="text-center">
            <p className="font-['Space_Grotesk'] text-3xl text-[#E5E7EB] mb-1">500+</p>
            <p className="text-sm text-[#94A3B8]">Successful assists</p>
          </div>
          <div className="text-center">
            <p className="font-['Space_Grotesk'] text-3xl text-[#E5E7EB] mb-1">4.9/5</p>
            <p className="text-sm text-[#94A3B8]">User rating</p>
          </div>
          <div className="text-center">
            <p className="font-['Space_Grotesk'] text-3xl text-[#E5E7EB] mb-1">98%</p>
            <p className="text-sm text-[#94A3B8]">Would recommend</p>
          </div>
          <div className="text-center">
            <p className="font-['Space_Grotesk'] text-3xl text-[#E5E7EB] mb-1">12 min</p>
            <p className="text-sm text-[#94A3B8]">Avg response time</p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
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
