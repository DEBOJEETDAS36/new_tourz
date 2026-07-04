'use client';

import { useState } from 'react';
import { TourDetail } from '@/lib/data/tourDetails';
import { ChevronDown, MapPin, Utensils, Hotel } from 'lucide-react';

export default function TourItinerary({ tour }: { tour: TourDetail }) {
  const [expandedDay, setExpandedDay] = useState(0);

  return (
    <section className="py-16 bg-[#0F2942] border-t border-[#374151]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Day by Day <span className="text-[#14B8A6]">Itinerary</span>
          </h2>
          <p className="text-[#94A3B8] max-w-2xl mx-auto">
            A detailed breakdown of your {tour.daysCount}-day adventure
          </p>
        </div>

        {/* Itinerary Timeline */}
        <div className="space-y-4">
          {tour.itinerary.map((day, index) => (
            <div
              key={day.day}
              className="border border-[#374151] rounded-lg overflow-hidden hover:border-[#14B8A6] transition"
            >
              {/* Header - Click to Expand */}
              <button
                onClick={() => setExpandedDay(expandedDay === index ? -1 : index)}
                className="w-full bg-[#1a3a52] hover:bg-[#1a3a52]/80 transition p-6 flex items-center justify-between"
              >
                <div className="flex items-center gap-6 text-left flex-1">
                  {/* Day Badge */}
                  <div className="w-16 h-16 bg-gradient-to-br from-[#14B8A6] to-[#0d9488] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-2xl">Day {day.day}</span>
                  </div>

                  {/* Day Info */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {day.title}
                    </h3>
                    <p className="text-[#94A3B8] text-sm line-clamp-1">
                      {day.description}
                    </p>
                  </div>
                </div>

                {/* Expand Icon */}
                <ChevronDown
                  size={24}
                  className={`text-[#14B8A6] flex-shrink-0 transition-transform ${
                    expandedDay === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Expandable Content */}
              {expandedDay === index && (
                <div className="bg-[#0F2942] border-t border-[#374151] p-6 space-y-6">
                  
                  {/* Full Description */}
                  <div>
                    <h4 className="text-[#14B8A6] font-semibold mb-2 flex items-center gap-2">
                      <MapPin size={18} />
                      About This Day
                    </h4>
                    <p className="text-[#94A3B8] leading-relaxed">
                      {day.description}
                    </p>
                  </div>

                  {/* Activities */}
                  <div>
                    <h4 className="text-[#14B8A6] font-semibold mb-3 flex items-center gap-2">
                      <MapPin size={18} />
                      Activities
                    </h4>
                    <ul className="space-y-2">
                      {day.activities.map((activity, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-[#94A3B8]"
                        >
                          <span className="w-2 h-2 bg-[#14B8A6] rounded-full mt-2 flex-shrink-0" />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Meals & Accommodation */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    
                    {/* Meals */}
                    <div>
                      <h4 className="text-[#14B8A6] font-semibold mb-3 flex items-center gap-2">
                        <Utensils size={18} />
                        Meals Included
                      </h4>
                      <div className="space-y-2">
                        {day.meals.breakfast && (
                          <div className="flex items-center gap-3 bg-[#1a3a52] rounded-lg p-3 border border-[#374151]">
                            <div className="w-3 h-3 bg-[#FCD34D] rounded-full" />
                            <span className="text-white font-semibold">Breakfast</span>
                          </div>
                        )}
                        {day.meals.lunch && (
                          <div className="flex items-center gap-3 bg-[#1a3a52] rounded-lg p-3 border border-[#374151]">
                            <div className="w-3 h-3 bg-[#14B8A6] rounded-full" />
                            <span className="text-white font-semibold">Lunch</span>
                          </div>
                        )}
                        {day.meals.dinner && (
                          <div className="flex items-center gap-3 bg-[#1a3a52] rounded-lg p-3 border border-[#374151]">
                            <div className="w-3 h-3 bg-[#EF4444] rounded-full" />
                            <span className="text-white font-semibold">Dinner</span>
                          </div>
                        )}
                        {!day.meals.breakfast && !day.meals.lunch && !day.meals.dinner && (
                          <p className="text-[#94A3B8] italic">No meals included</p>
                        )}
                      </div>
                    </div>

                    {/* Accommodation */}
                    <div>
                      <h4 className="text-[#14B8A6] font-semibold mb-3 flex items-center gap-2">
                        <Hotel size={18} />
                        Accommodation
                      </h4>
                      <div className="bg-[#1a3a52] rounded-lg p-4 border border-[#374151]">
                        {day.accommodation !== 'N/A' ? (
                          <p className="text-white font-semibold">{day.accommodation}</p>
                        ) : (
                          <p className="text-[#94A3B8] italic">No accommodation</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Map Section */}
        <div className="mt-12 bg-[#1a3a52] rounded-lg overflow-hidden border border-[#374151] h-96">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            title="Tour Route Map"
            src={`https://maps.google.com/maps?q=${tour.destination}&t=m&z=10&output=embed&iwloc=near`}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}