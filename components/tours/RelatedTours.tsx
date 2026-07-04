'use client';

import Link from 'next/link';
import { Star, MapPin, Clock, Users, ArrowRight } from 'lucide-react';
import { featuredTours } from '@/lib/data/tours';

export default function RelatedTours({ currentTourId }: { currentTourId: string }) {
  // Filter out current tour and get related tours
  const relatedTours = featuredTours
    .filter(tour => tour.id !== currentTourId)
    .slice(0, 4);

  return (
    <section className="py-16 bg-[#0F2942] border-t border-[#374151]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            You Might Also <span className="text-[#14B8A6]">Like</span>
          </h2>
          <p className="text-[#94A3B8] max-w-2xl mx-auto">
            Explore other amazing tours and destinations
          </p>
        </div>

        {/* Related Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {relatedTours.map((tour) => (
            <div
              key={tour.id}
              className="bg-[#1a3a52] rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group border border-[#374151] flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {tour.originalPrice > tour.price && (
                  <div className="absolute top-4 right-4 bg-[#EF4444] text-white px-3 py-1 rounded-full text-xs font-bold">
                    {Math.round(((tour.originalPrice - tour.price) / tour.originalPrice) * 100)}% OFF
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                
                {/* Location */}
                <div className="flex items-center text-[#94A3B8] mb-2 text-sm">
                  <MapPin size={16} className="mr-1" />
                  <span>{tour.destination}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                  {tour.title}
                </h3>

                {/* Description */}
                <p className="text-[#94A3B8] text-sm mb-4 line-clamp-2 flex-grow">
                  {tour.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={`${i < Math.floor(tour.rating) ? 'fill-[#FCD34D] text-[#FCD34D]' : 'text-[#374151]'}`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-[#94A3B8]">({tour.reviews})</span>
                </div>

                {/* Tour Details */}
                <div className="grid grid-cols-2 gap-2 mb-4 text-xs text-[#94A3B8]">
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users size={14} className="mr-1" />
                    <span>{tour.travelers}</span>
                  </div>
                </div>

                {/* Price */}
                <div className="border-t border-[#374151] pt-4 mb-4">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-2xl font-bold text-white">
                      ₹{tour.price.toLocaleString()}
                    </span>
                    {tour.originalPrice > tour.price && (
                      <span className="text-sm text-[#94A3B8] line-through">
                        ₹{tour.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-[#94A3B8]">per person</span>
                </div>

                {/* View Details Button */}
                <Link
                  href={`/tours/${tour.id}`}
                  className="w-full bg-[#FCD34D] hover:bg-[#EAB308] text-[#0F2942] font-semibold py-2 rounded-lg transition flex items-center justify-center space-x-2"
                >
                  <span>View</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="text-center">
          <Link
            href="/leisure"
            className="inline-flex items-center gap-3 bg-[#14B8A6] hover:bg-[#0d9488] text-white font-bold py-3 px-8 rounded-lg transition"
          >
            <span>Explore All Tours</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}