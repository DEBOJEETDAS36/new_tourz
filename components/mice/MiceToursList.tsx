'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Star, MapPin, Clock, Users, ArrowRight, Filter, X } from 'lucide-react';
import { miceTours, miceTags } from '@/lib/data/miceTours';

export default function MiceToursList() {
  const [selectedTags, setSelectedTags] = useState<string[]>(['All']);
  const [sortBy, setSortBy] = useState('popularity');
  const [showFilters, setShowFilters] = useState(false);

  const toggleTag = (tag: string) => {
    if (tag === 'All') {
      setSelectedTags(['All']);
    } else {
      let newTags = selectedTags.filter(t => t !== 'All');
      
      if (newTags.includes(tag)) {
        newTags = newTags.filter(t => t !== tag);
      } else {
        newTags = [...newTags, tag];
      }
      
      setSelectedTags(newTags.length === 0 ? ['All'] : newTags);
    }
  };

  const filteredTours = miceTours.filter(tour => {
    if (selectedTags.includes('All')) return true;
    return selectedTags.some(tag => tour.tags.includes(tag));
  });

  const sortedTours = [...filteredTours].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <section className="py-16 bg-[#0F2942]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Filters Header */}
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <h2 className="text-2xl font-bold text-white">
            {filteredTours.length} Programs Found
          </h2>
          
          {/* Sort Dropdown */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex lg:hidden items-center gap-2 bg-[#14B8A6] hover:bg-[#0d9488] text-white font-semibold px-4 py-2 rounded-lg transition"
            >
              <Filter size={20} />
              Filters
            </button>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#1a3a52] text-white px-4 py-2 rounded-lg border border-[#374151] focus:outline-none focus:border-[#14B8A6]"
            >
              <option value="popularity">Popularity</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar Filters */}
          <div className={`lg:col-span-1 ${showFilters ? 'block' : 'hidden'} lg:block`}>
            <div className="bg-[#1a3a52] rounded-lg p-6 border border-[#374151] sticky top-24">
              
              {/* Close button for mobile */}
              <button
                onClick={() => setShowFilters(false)}
                className="lg:hidden absolute top-4 right-4"
              >
                <X size={24} className="text-white" />
              </button>

              <h3 className="text-lg font-bold text-white mb-6">Filters</h3>

              {/* Tags Filter */}
              <div>
                <h4 className="text-[#14B8A6] font-semibold mb-4 text-sm uppercase">Event Type</h4>
                <div className="space-y-3">
                  {miceTags.map((tag) => (
                    <label key={tag} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={selectedTags.includes(tag)}
                        onChange={() => toggleTag(tag)}
                        className="w-4 h-4 rounded border-[#374151] bg-[#0F2942] accent-[#14B8A6] cursor-pointer"
                      />
                      <span className="text-[#94A3B8] group-hover:text-white transition text-sm">
                        {tag}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {!selectedTags.includes('All') && (
                <button
                  onClick={() => setSelectedTags(['All'])}
                  className="mt-6 w-full bg-transparent border border-[#14B8A6] text-[#14B8A6] hover:bg-[#14B8A6]/10 py-2 rounded-lg transition text-sm font-semibold"
                >
                  Clear All
                </button>
              )}
            </div>
          </div>

          {/* Programs Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sortedTours.map((tour) => (
                <div
                  key={tour.id}
                  className="bg-[#1a3a52] rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group border border-[#374151] flex flex-col"
                >
                  {/* Image */}
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

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {tour.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="bg-[#FCD34D]/20 text-[#FCD34D] px-2 py-1 rounded text-xs font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

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
                      <span className="text-xs text-[#94A3B8]">({tour.reviews} reviews)</span>
                    </div>

                    {/* Program Details */}
                    <div className="grid grid-cols-2 gap-2 mb-4 text-xs text-[#94A3B8]">
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        <span>{tour.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Users size={14} className="mr-1" />
                        <span>{tour.capacity}</span>
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
                      <span>View Details</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {sortedTours.length === 0 && (
              <div className="text-center py-12">
                <p className="text-[#94A3B8] text-lg">No programs found for selected filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}