'use client';

import { Star, MapPin, Clock, Users, Share2, Heart } from 'lucide-react';
import { TourDetail } from '@/lib/data/tourDetails';
import { useState } from 'react';

export default function TourDetailHero({ tour }: { tour: TourDetail }) {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <section className="relative h-96 bg-cover bg-center overflow-hidden">
      {/* Background Image */}
      <img
        src={tour.mainImage}
        alt={tour.title}
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 lg:p-12">
        <div className="max-w-7xl mx-auto w-full">
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tour.tags.map((tag) => (
              <span
                key={tag}
                className="bg-[#14B8A6] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title & Location */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            {tour.title}
          </h1>
          
          <div className="flex items-center text-white text-lg mb-6">
            <MapPin size={24} className="mr-2 text-[#14B8A6]" />
            <span className="font-semibold">{tour.destination}, {tour.country}</span>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-8 text-white mb-8">
            <div className="flex items-center gap-3">
              <Clock size={24} className="text-[#FCD34D]" />
              <div>
                <p className="text-sm text-white/80">Duration</p>
                <span className="font-bold text-lg">{tour.duration}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users size={24} className="text-[#FCD34D]" />
              <div>
                <p className="text-sm text-white/80">Group Size</p>
                <span className="font-bold text-lg">{tour.groupSize.min}-{tour.groupSize.max} people</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Star size={24} className="text-[#FCD34D] fill-[#FCD34D]" />
              <div>
                <p className="text-sm text-white/80">Rating</p>
                <span className="font-bold text-lg">{tour.rating} ({tour.reviews} reviews)</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#FCD34D] hover:bg-[#EAB308] text-[#0F2942] font-bold px-8 py-3 rounded-lg transition shadow-lg">
              Book Now
            </button>
            <button 
              onClick={() => setIsSaved(!isSaved)}
              className={`${isSaved ? 'bg-[#EF4444]' : 'bg-white/20'} hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-lg transition backdrop-blur-sm flex items-center gap-2`}
            >
              <Heart size={20} fill={isSaved ? 'currentColor' : 'none'} />
              {isSaved ? 'Saved' : 'Save'}
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