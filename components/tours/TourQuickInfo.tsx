'use client';

import { TourDetail } from '@/lib/data/tourDetails';
import { MapPin, Calendar, Users, Zap, DollarSign, AlertCircle } from 'lucide-react';

export default function TourQuickInfo({ tour }: { tour: TourDetail }) {
  return (
    <section className="py-8 bg-[#1a3a52] border-b border-[#374151]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          
          {/* Duration */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#14B8A6]/20 rounded-lg flex items-center justify-center">
              <Calendar size={24} className="text-[#14B8A6]" />
            </div>
            <div>
              <p className="text-[#94A3B8] text-xs uppercase font-semibold">Duration</p>
              <p className="text-white font-bold">{tour.duration}</p>
            </div>
          </div>

          {/* Difficulty */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#14B8A6]/20 rounded-lg flex items-center justify-center">
              <Zap size={24} className="text-[#14B8A6]" />
            </div>
            <div>
              <p className="text-[#94A3B8] text-xs uppercase font-semibold">Difficulty</p>
              <p className="text-white font-bold">{tour.difficulty}</p>
            </div>
          </div>

          {/* Group Size */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#14B8A6]/20 rounded-lg flex items-center justify-center">
              <Users size={24} className="text-[#14B8A6]" />
            </div>
            <div>
              <p className="text-[#94A3B8] text-xs uppercase font-semibold">Group Size</p>
              <p className="text-white font-bold">{tour.groupSize.min}-{tour.groupSize.max} people</p>
            </div>
          </div>

          {/* Best Time */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#14B8A6]/20 rounded-lg flex items-center justify-center">
              <MapPin size={24} className="text-[#14B8A6]" />
            </div>
            <div>
              <p className="text-[#94A3B8] text-xs uppercase font-semibold">Best Time</p>
              <p className="text-white font-bold text-sm">{tour.bestTimeToVisit}</p>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#FCD34D]/20 rounded-lg flex items-center justify-center">
              <DollarSign size={24} className="text-[#FCD34D]" />
            </div>
            <div>
              <p className="text-[#94A3B8] text-xs uppercase font-semibold">From</p>
              <p className="text-white font-bold">₹{tour.price.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}