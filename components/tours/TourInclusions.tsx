'use client';

import { TourDetail } from '@/lib/data/tourDetails';
import { CheckCircle2, XCircle } from 'lucide-react';

export default function TourInclusions({ tour }: { tour: TourDetail }) {
  return (
    <section className="py-16 bg-[#1a3a52] border-t border-[#374151]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            What's <span className="text-[#14B8A6]">Included</span> & <span className="text-[#EF4444]">Excluded</span>
          </h2>
          <p className="text-[#94A3B8] max-w-2xl mx-auto">
            Know exactly what is and isn't covered in your tour package
          </p>
        </div>

        {/* Inclusions & Exclusions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Inclusions */}
          <div className="bg-[#0F2942] rounded-lg p-8 border-2 border-[#10B981]/30">
            
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle2 size={28} className="text-[#10B981]" />
              <h3 className="text-2xl font-bold text-white">Included</h3>
            </div>

            {/* Inclusions List */}
            <ul className="space-y-4">
              {tour.inclusions.map((inclusion, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 p-4 bg-[#1a3a52] rounded-lg border border-[#374151] hover:border-[#10B981] transition group"
                >
                  {/* Icon */}
                  <CheckCircle2
                    size={20}
                    className="text-[#10B981] flex-shrink-0 mt-1 group-hover:scale-110 transition"
                  />
                  
                  {/* Text */}
                  <span className="text-[#94A3B8] group-hover:text-white transition">
                    {inclusion}
                  </span>
                </li>
              ))}
            </ul>

            {/* Summary Badge */}
            <div className="mt-8 p-4 bg-[#10B981]/10 rounded-lg border border-[#10B981]/30">
              <p className="text-[#10B981] font-semibold text-sm">
                ✓ {tour.inclusions.length} things included in your package
              </p>
            </div>
          </div>

          {/* Exclusions */}
          <div className="bg-[#0F2942] rounded-lg p-8 border-2 border-[#EF4444]/30">
            
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <XCircle size={28} className="text-[#EF4444]" />
              <h3 className="text-2xl font-bold text-white">Excluded</h3>
            </div>

            {/* Exclusions List */}
            <ul className="space-y-4">
              {tour.exclusions.map((exclusion, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 p-4 bg-[#1a3a52] rounded-lg border border-[#374151] hover:border-[#EF4444] transition group"
                >
                  {/* Icon */}
                  <XCircle
                    size={20}
                    className="text-[#EF4444] flex-shrink-0 mt-1 group-hover:scale-110 transition"
                  />
                  
                  {/* Text */}
                  <span className="text-[#94A3B8] group-hover:text-white transition">
                    {exclusion}
                  </span>
                </li>
              ))}
            </ul>

            {/* Summary Badge */}
            <div className="mt-8 p-4 bg-[#EF4444]/10 rounded-lg border border-[#EF4444]/30">
              <p className="text-[#EF4444] font-semibold text-sm">
                ✗ {tour.exclusions.length} things not included
              </p>
            </div>
          </div>
        </div>

        {/* Important Note */}
        <div className="mt-12 bg-gradient-to-r from-[#14B8A6]/10 to-[#0d9488]/10 border border-[#14B8A6]/30 rounded-lg p-6">
          <p className="text-[#94A3B8] text-center">
            <span className="text-[#14B8A6] font-semibold">💡 Tip:</span> Contact us for custom packages. We can add or remove items based on your preferences and budget.
          </p>
        </div>
      </div>
    </section>
  );
}