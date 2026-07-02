'use client';

import { Star, MapPin, Clock, Users, Share2, Heart } from 'lucide-react';
import { TourDetail } from '@/lib/data/tourDetails';

export default function TourDetailHero({ tour }: { tour: TourDetail }) {
  return (
    <section className="relative h-96 bg-cover bg-center">
      {/* Background Image */}
      <img
        src={tour.image}
        alt={tour.title}
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 lg:p-12">
        <div className="max-w-7xl mx-auto w-full">
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tour.tags.map((tag) => (
              <span
                key={tag}
                className="bg-[#14B8A6] text-white px-3 py-1 rounded-full text-xs font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title & Location */}
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">
            {tour.title}
          </h1>
          
          <div className="flex items-center text-white text-lg mb-4">
            <MapPin size={20} className="mr-2" />
            {tour.destination}
          </div>

          {/* Quick Info */}
          <div className="flex flex-wrap gap-6 text-white mb-6">
            <div className="flex items-center gap-2">
              <Clock size={20} />
              <span className="font-semibold">{tour.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={20} />
              <span className="font-semibold">Max {tour.maxGroupSize} people</span>
            </div>
            <div className="flex items-center gap-2">
              <Star size={20} className="fill-[#FCD34D]" />
              <span className="font-semibold">{tour.rating} ({tour.reviews} reviews)</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button className="bg-[#FCD34D] hover:bg-[#EAB308] text-[#0F2942] font-bold px-6 py-3 rounded-lg transition">
              Book Now
            </button>
            <button className="bg-white/20 hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-lg transition backdrop-blur-sm flex items-center gap-2">
              <Heart size={20} />
              Save
            </button>
            <button className="bg-white/20 hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-lg transition backdrop-blur-sm flex items-center gap-2">
              <Share2 size={20} />
              Share
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}