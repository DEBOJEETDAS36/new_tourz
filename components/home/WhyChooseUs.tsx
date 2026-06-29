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
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-blue-600">Tourz?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
                className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <IconComponent size={32} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Start Your Adventure?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands of happy travelers who have chosen Tourz for their unforgettable journeys
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-lg transition">
            Start Exploring
          </button>
        </div>
      </div>
    </section>
  );
}