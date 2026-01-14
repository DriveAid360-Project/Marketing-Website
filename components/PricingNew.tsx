import { Check, Zap, Shield, Crown } from 'lucide-react';

export function PricingNew() {
  const plans = [
    {
      name: 'Basic',
      price: 9,
      period: '/month',
      description: 'Perfect for occasional drivers',
      icon: Shield,
      iconColor: '#94A3B8',
      features: [
        'AI diagnosis (3 per month)',
        'Verified provider network',
        'Basic live tracking',
        'Email support',
        'Trip history (30 days)'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Plus',
      price: 19,
      period: '/month',
      description: 'Most popular for daily drivers',
      icon: Zap,
      iconColor: '#2563EB',
      features: [
        'Unlimited AI diagnoses',
        'Priority verified providers',
        'Real-time live tracking',
        'SOS emergency mode',
        'Priority chat support',
        'Full trip & vehicle analytics',
        'Price estimate guarantee'
      ],
      cta: 'Get Started',
      popular: true,
      badge: 'Most Popular'
    },
    {
      name: 'Pro',
      price: 39,
      period: '/month',
      description: 'For families & fleet managers',
      icon: Crown,
      iconColor: '#F59E0B',
      features: [
        'Everything in Plus',
        'Multi-vehicle management',
        'Family member accounts (up to 5)',
        'Dedicated account manager',
        '24/7 phone support',
        'Advanced analytics dashboard',
        'Custom maintenance alerts'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1220] via-[#111B2E] to-[#0B1220]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#2563EB]/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#22C55E]/20 rounded-full blur-[120px]" />
        </div>
      </div>

      <div className="relative max-w-[1280px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-['Space_Grotesk'] text-[36px] md:text-[48px] leading-tight text-[#E5E7EB] mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-[18px] text-[#94A3B8] max-w-2xl mx-auto mb-8">
            Choose the plan that fits your needs. All plans include our core safety features.
          </p>
          
          {/* Billing toggle */}
          <div className="inline-flex items-center gap-3 p-1 bg-[#111B2E] border border-[#1F2A44] rounded-xl">
            <button className="px-6 py-2 bg-[#2563EB] text-white rounded-lg text-sm font-medium transition-all">
              Monthly
            </button>
            <button className="px-6 py-2 text-[#94A3B8] hover:text-[#E5E7EB] rounded-lg text-sm font-medium transition-all">
              Annual <span className="text-[#22C55E] text-xs ml-1">Save 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative group ${plan.popular ? 'lg:-mt-4' : ''}`}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.15}s backwards`
              }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="px-4 py-1.5 bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] text-white text-sm font-medium rounded-full flex items-center gap-2 shadow-lg animate-pulse">
                    <Zap size={14} />
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Glow effect */}
              {plan.popular && (
                <div className="absolute -inset-1 bg-gradient-to-r from-[#2563EB] to-[#22C55E] rounded-2xl opacity-30 blur-xl group-hover:opacity-50 transition-opacity" />
              )}

              {/* Card */}
              <div 
                className={`relative h-full p-8 rounded-2xl border transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-[#111B2E] to-[#0B1220] border-[#2563EB] shadow-[0_0_40px_rgba(37,99,235,0.2)] lg:py-12' 
                    : 'bg-gradient-to-br from-[#111B2E] to-[#0B1220] border-[#1F2A44] hover:border-[#2563EB]/30'
                } ${!plan.popular && 'group-hover:scale-[1.02]'}`}
              >
                {/* Icon */}
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all group-hover:scale-110"
                  style={{ backgroundColor: `${plan.iconColor}15` }}
                >
                  <plan.icon size={28} style={{ color: plan.iconColor }} />
                </div>

                {/* Plan name */}
                <h3 className="font-['Space_Grotesk'] text-2xl text-[#E5E7EB] mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-[#94A3B8] mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-['Space_Grotesk'] text-[#E5E7EB]">
                      ${plan.price}
                    </span>
                    <span className="text-[#94A3B8]">{plan.period}</span>
                  </div>
                </div>

                {/* CTA */}
                <button 
                  className={`w-full px-6 py-3.5 rounded-xl font-medium mb-8 transition-all relative overflow-hidden group/btn ${
                    plan.popular
                      ? 'bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] text-white shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]'
                      : 'bg-[#111B2E] border-2 border-[#1F2A44] text-[#E5E7EB] hover:border-[#2563EB]'
                  }`}
                >
                  <span className="relative z-10">{plan.cta}</span>
                  {plan.popular && (
                    <div className="absolute inset-0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  )}
                </button>

                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[#94A3B8]">
                      <Check 
                        size={18} 
                        className={`flex-shrink-0 mt-0.5 ${
                          plan.popular ? 'text-[#2563EB]' : 'text-[#22C55E]'
                        }`} 
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Trust footer */}
        <div className="mt-16 text-center">
          <p className="text-sm text-[#94A3B8] mb-4">
            All plans include 7-day free trial • Cancel anytime • No hidden fees
          </p>
          <div className="flex justify-center gap-8 text-sm text-[#94A3B8]">
            <span className="flex items-center gap-2">
              <Shield size={16} className="text-[#22C55E]" />
              Secure payments
            </span>
            <span className="flex items-center gap-2">
              <Shield size={16} className="text-[#22C55E]" />
              Privacy-first
            </span>
            <span className="flex items-center gap-2">
              <Shield size={16} className="text-[#22C55E]" />
              Money-back guarantee
            </span>
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