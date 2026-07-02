'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Zap, Clock, ArrowRight } from 'lucide-react';
import { specialDeals } from '@/lib/data/deals';

interface CountdownTimer {
  [key: string]: {
    hours: number;
    minutes: number;
    seconds: number;
  };
}

export default function SpecialDeals() {
  const [timers, setTimers] = useState<CountdownTimer>({});

  // Initialize timers
  useEffect(() => {
    const initialTimers: CountdownTimer = {};
    specialDeals.forEach((deal) => {
      const expiryTime = Date.now() + deal.expiryDays * 24 * 60 * 60 * 1000;
      const remaining = expiryTime - Date.now();
      initialTimers[deal.id] = {
        hours: Math.floor((remaining / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((remaining / (1000 * 60)) % 60),
        seconds: Math.floor((remaining / 1000) % 60),
      };
    });
    setTimers(initialTimers);

    // Update timers every second
    const interval = setInterval(() => {
      setTimers((prevTimers) => {
        const newTimers = { ...prevTimers };
        specialDeals.forEach((deal) => {
          const current = newTimers[deal.id];
          if (current) {
            let { hours, minutes, seconds } = current;
            seconds--;
            if (seconds < 0) {
              seconds = 59;
              minutes--;
              if (minutes < 0) {
                minutes = 59;
                hours--;
              }
            }
            newTimers[deal.id] = { hours: Math.max(0, hours), minutes, seconds };
          }
        });
        return newTimers;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getDiscountPercentage = (original: number, discounted: number) => {
    return Math.round(((original - discounted) / original) * 100);
  };

  return (
    <section className="py-16 sm:py-20 bg-[#1a3a52]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <Zap className="text-[#FCD34D]" size={24} />
          <span className="text-[#14B8A6] font-bold text-lg">SPECIAL OFFERS</span>
        </div>
        
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Limited Time <span className="text-[#EF4444]">Deals</span>
          </h2>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
            Don't miss out on our exclusive offers! Book now and save big on your dream destinations.
          </p>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialDeals.map((deal) => {
            const discount = getDiscountPercentage(deal.originalPrice, deal.discountedPrice);
            const timer = timers[deal.id];

            return (
              <div
                key={deal.id}
                className="relative bg-[#0F2942] rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group border border-[#374151] hover:border-[#14B8A6]"
              >
                {/* Image Container */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={deal.image}
                    alt={deal.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />

                  {/* Badge */}
                  <div className="absolute top-3 left-3 bg-linear-to-r from-[#EF4444] to-[#DC2626] text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Zap size={12} />
                    {deal.badge}
                  </div>

                  {/* Discount Badge */}
                  <div className="absolute top-3 right-3 bg-[#FCD34D] text-[#0F2942] px-3 py-1 rounded-full text-xs font-bold">
                    {discount}% OFF
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  
                  {/* Destination */}
                  <span className="text-xs text-[#94A3B8] font-semibold uppercase tracking-wide">
                    {deal.destination}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-1 mt-1">
                    {deal.title}
                  </h3>

                  {/* Highlight */}
                  <p className="text-sm text-[#14B8A6] font-semibold mb-3">
                    {deal.highlight}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-[#94A3B8] mb-3">
                    {deal.description}
                  </p>

                  {/* Countdown Timer */}
                  {timer && (
                    <div className="bg-[#EF4444]/10 rounded-lg p-3 mb-3 border border-[#EF4444]/30">
                      <div className="flex items-center gap-2 text-xs font-bold text-[#EF4444] mb-2">
                        <Clock size={14} />
                        Offer Expires In:
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="bg-[#1a3a52] rounded p-2 border border-[#374151]">
                          <span className="font-bold text-white">{String(timer.hours).padStart(2, '0')}</span>
                          <p className="text-xs text-[#94A3B8]">hrs</p>
                        </div>
                        <div className="bg-[#1a3a52] rounded p-2 border border-[#374151]">
                          <span className="font-bold text-white">{String(timer.minutes).padStart(2, '0')}</span>
                          <p className="text-xs text-[#94A3B8]">min</p>
                        </div>
                        <div className="bg-[#1a3a52] rounded p-2 border border-[#374151]">
                          <span className="font-bold text-white">{String(timer.seconds).padStart(2, '0')}</span>
                          <p className="text-xs text-[#94A3B8]">sec</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Price */}
                  <div className="mb-4 pb-4 border-t border-[#374151] pt-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-white">
                        ₹{deal.discountedPrice.toLocaleString()}
                      </span>
                      <span className="text-sm text-[#94A3B8] line-through">
                        ₹{deal.originalPrice.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Book Now Button */}
                  <Link
                    href={`/tours/${deal.id}`}
                    className="w-full bg-[#FCD34D] hover:bg-[#EAB308] text-[#0F2942] font-bold py-2 rounded-lg transition flex items-center justify-center space-x-2"
                  >
                    <span>Book Now</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 bg-linear-to-r from-[#EF4444]/10 to-[#F97316]/10 rounded-lg p-8 text-center border-2 border-[#EF4444]/30">
          <h3 className="text-2xl font-bold text-white mb-2">
            Hurry! Limited Slots Available
          </h3>
          <p className="text-[#94A3B8] mb-6">
            These exclusive deals won't last long. Grab your spot before it's gone!
          </p>
          <button className="bg-[#FCD34D] hover:bg-[#EAB308] text-[#0F2942] font-bold py-3 px-8 rounded-lg transition">
            View All Offers
          </button>
        </div>
      </div>
    </section>
  );
}