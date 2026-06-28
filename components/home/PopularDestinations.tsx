'use client';

import Link from 'next/link';
import { MapPin, Compass } from 'lucide-react';
import { popularDestinations } from '@/lib/data/destinations';

export default function PopularDestinations() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Popular <span className="text-blue-600">Destinations</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the world's most sought-after travel destinations
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularDestinations.map((destination) => (
            <Link
              key={destination.id}
              href={`/destinations/${destination.id}`}
              className="group relative h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Background Image */}
              <img
                src={destination.image}
                alt={destination.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 group-hover:from-black/20 transition-all duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                
                {/* Country Badge */}
                <div className="flex items-center text-gray-200 mb-3 text-sm">
                  <Compass size={16} className="mr-2" />
                  <span>{destination.country}</span>
                </div>

                {/* Destination Name */}
                <h3 className="text-3xl font-bold text-white mb-2">
                  {destination.name}
                </h3>

                {/* Description */}
                <p className="text-gray-200 text-sm mb-4">
                  {destination.description}
                </p>

                {/* Tours Count */}
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 text-sm">
                    {destination.tours} tours available
                  </span>
                  <div className="bg-blue-600 group-hover:bg-blue-700 text-white rounded-full p-2 transition">
                    <MapPin size={18} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Explore All Button */}
        <div className="text-center mt-12">
          <Link
            href="/destinations"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition"
          >
            Explore All Destinations
          </Link>
        </div>
      </div>
    </section>
  );
}