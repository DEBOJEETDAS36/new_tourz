'use client';

import { Award, Shield, Users, MapPin, Headphones, Zap } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      id: 1,
      icon: Award,
      title: 'Expert Guides',
      description: 'Experienced and knowledgeable local guides for authentic experiences',
    },
    {
      id: 2,
      icon: Shield,
      title: 'Safe & Secure',
      description: 'All tours are fully insured with comprehensive safety measures',
    },
    {
      id: 3,
      icon: Zap,
      title: 'Best Prices',
      description: 'Competitive rates with exclusive deals and discounts available',
    },
    {
      id: 4,
      icon: MapPin,
      title: 'Curated Itineraries',
      description: 'Handpicked destinations and experiences tailored for you',
    },
    {
      id: 5,
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock customer service during your entire journey',
    },
    {
      id: 6,
      icon: Users,
      title: 'Group Tours',
      description: 'Perfect for solo travelers, couples, families, and large groups',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#0F2942]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Why Choose <span className="text-[#14B8A6]">Tourz?</span>
          </h2>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
            We provide exceptional travel experiences with unmatched service and support
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-[#1a3a52] transition-colors duration-300 border border-[#374151] hover:border-[#14B8A6]"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#14B8A6] to-[#0d9488] rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <IconComponent size={32} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-[#94A3B8] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 bg-gradient-to-r from-[#1a3a52] to-[#0F2942] rounded-lg p-8 text-center border border-[#14B8A6]">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Start Your Adventure?
          </h3>
          <p className="text-[#94A3B8] mb-6 max-w-2xl mx-auto">
            Join thousands of happy travelers who have chosen Tourz for their unforgettable journeys
          </p>
          <button className="bg-[#FCD34D] hover:bg-[#EAB308] text-[#0F2942] font-bold py-3 px-8 rounded-lg transition">
            Start Exploring
          </button>
        </div>
      </div>
    </section>
  );
}