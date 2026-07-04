'use client';

import { TourDetail } from '@/lib/data/tourDetails';
import { CheckCircle2 } from 'lucide-react';

export default function TourHighlights({ tour }: { tour: TourDetail }) {
  return (
    <section className="py-16 bg-[#1a3a52] border-t border-[#374151]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Tour <span className="text-[#14B8A6]">Highlights</span>
          </h2>
          <p className="text-[#94A3B8] max-w-2xl mx-auto">
            Discover the best attractions and activities included in this amazing journey
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tour.highlights.map((highlight, index) => (
            <div
              key={index}
              className="flex gap-4 p-5 bg-[#0F2942] rounded-lg border border-[#374151] hover:border-[#14B8A6] transition"
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <CheckCircle2 size={24} className="text-[#14B8A6] mt-1" />
              </div>

              {/* Content */}
              <div>
                <p className="text-white font-semibold">{highlight}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}