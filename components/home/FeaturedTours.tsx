'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Star, MapPin, Clock, Users, ArrowRight } from 'lucide-react';
import { featuredTours } from '@/lib/data/tours';

export default function FeaturedTours() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="text-blue-600">Tours</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Handpicked destinations and experiences curated just for you
          </p>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredTours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden group"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Discount Badge */}
                {tour.originalPrice > tour.price && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {Math.round(((tour.originalPrice - tour.price) / tour.originalPrice) * 100)}% OFF
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                
                {/* Location */}
                <div className="flex items-center text-gray-600 mb-2 text-sm">
                  <MapPin size={16} className="mr-1" />
                  <span>{tour.destination}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  {tour.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {tour.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${i < Math.floor(tour.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-gray-900">{tour.rating}</span>
                  <span className="text-xs text-gray-600">({tour.reviews})</span>
                </div>

                {/* Tour Details */}
                <div className="grid grid-cols-2 gap-2 mb-4 text-xs text-gray-600">
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
                <div className="border-t pt-4 mb-4">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-2xl font-bold text-gray-900">
                      ₹{tour.price.toLocaleString()}
                    </span>
                    {tour.originalPrice > tour.price && (
                      <span className="text-sm text-gray-500 line-through">
                        ₹{tour.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-gray-600">per person</span>
                </div>

                {/* View Details Button */}
                <Link
                  href={`/tours/${tour.id}`}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-2 rounded-lg transition flex items-center justify-center space-x-2"
                >
                  <span>View Details</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/tours"
            className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-lg transition"
          >
            View All Tours
          </Link>
        </div>
      </div>
    </section>
  );
}