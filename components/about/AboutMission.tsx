'use client';

import { Target, Eye, Heart } from 'lucide-react';

export default function AboutMission() {
  return (
    <section className="py-16 bg-[#0F2942] border-b border-[#374151]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Story */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
          <p className="text-[#94A3B8] text-lg leading-relaxed mb-6">
            Founded in 2015, Tourz began with a simple vision: to make travel accessible, affordable, and unforgettable for everyone. What started as a small team of passionate travel enthusiasts has grown into a leading travel company trusted by thousands of travelers across India and beyond.
          </p>
          <p className="text-[#94A3B8] text-lg leading-relaxed">
            We believe that travel is not just about visiting destinations—it's about creating memories, experiencing cultures, and transforming lives. Every tour we organize is crafted with care, attention to detail, and a deep passion for delivering exceptional experiences.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Mission */}
          <div className="bg-[#1a3a52] rounded-lg p-8 border border-[#374151]">
            <div className="w-12 h-12 bg-[#14B8A6]/20 rounded-lg flex items-center justify-center mb-4">
              <Target size={24} className="text-[#14B8A6]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-[#94A3B8] leading-relaxed">
              To provide world-class travel experiences that are memorable, affordable, and transformative, while maintaining the highest standards of service and safety.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-[#1a3a52] rounded-lg p-8 border border-[#374151]">
            <div className="w-12 h-12 bg-[#FCD34D]/20 rounded-lg flex items-center justify-center mb-4">
              <Eye size={24} className="text-[#FCD34D]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-[#94A3B8] leading-relaxed">
              To be the most trusted and innovative travel company, recognized for our excellence, customer service, and commitment to creating life-changing travel experiences.
            </p>
          </div>

          {/* Values */}
          <div className="bg-[#1a3a52] rounded-lg p-8 border border-[#374151]">
            <div className="w-12 h-12 bg-[#10B981]/20 rounded-lg flex items-center justify-center mb-4">
              <Heart size={24} className="text-[#10B981]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Our Values</h3>
            <p className="text-[#94A3B8] leading-relaxed">
              Integrity, customer-centricity, innovation, and sustainability. We believe in ethical practices, delivering value, and making positive impacts on the communities we visit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}