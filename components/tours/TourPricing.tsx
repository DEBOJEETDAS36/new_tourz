'use client';

import { TourDetail } from '@/lib/data/tourDetails';
import { Calendar, Users, DollarSign, TrendingDown } from 'lucide-react';

export default function TourPricing({ tour }: { tour: TourDetail }) {
  const totalBreakdown = Object.values(tour.priceBreakdown).reduce((a, b) => a + b, 0);

  return (
    <section className="py-16 bg-[#0F2942] border-t border-[#374151]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Tour <span className="text-[#14B8A6]">Pricing</span>
          </h2>
          <p className="text-[#94A3B8] max-w-2xl mx-auto">
            Transparent pricing with detailed cost breakdown
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Price Breakdown */}
          <div className="lg:col-span-2">
            
            {/* Price Breakdown Card */}
            <div className="bg-[#1a3a52] rounded-lg p-8 border border-[#374151] mb-8">
              
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <DollarSign size={28} className="text-[#FCD34D]" />
                Price Breakdown
              </h3>

              {/* Breakdown Items */}
              <div className="space-y-4 mb-6">
                {Object.entries(tour.priceBreakdown).map(([category, amount], index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-[#0F2942] rounded-lg border border-[#374151] hover:border-[#14B8A6] transition"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-[#14B8A6] rounded-full" />
                      <span className="text-[#94A3B8] font-semibold">{category}</span>
                    </div>
                    <span className="text-white font-bold text-lg">
                      ₹{amount.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="border-t border-[#374151] pt-6">
                <div className="flex items-center justify-between">
                  <span className="text-white font-bold text-xl">Total per person</span>
                  <div className="text-right">
                    <p className="text-[#94A3B8] text-sm mb-1">Base Price</p>
                    <span className="text-3xl font-bold text-[#14B8A6]">
                      ₹{totalBreakdown.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Note */}
              <div className="mt-6 p-4 bg-[#14B8A6]/10 rounded-lg border border-[#14B8A6]/30">
                <p className="text-[#94A3B8] text-sm">
                  <span className="text-[#14B8A6] font-semibold">Note:</span> Prices may vary based on group size, seasonality, and availability. Contact us for group discounts.
                </p>
              </div>
            </div>

            {/* Pricing Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* Original Price */}
              <div className="bg-[#1a3a52] rounded-lg p-6 border border-[#374151] text-center">
                <p className="text-[#94A3B8] text-sm uppercase font-semibold mb-2">Original Price</p>
                <p className="text-white text-2xl font-bold line-through opacity-60">
                  ₹{tour.originalPrice.toLocaleString()}
                </p>
              </div>

              {/* Current Price */}
              <div className="bg-[#1a3a52] rounded-lg p-6 border-2 border-[#14B8A6] text-center">
                <p className="text-[#94A3B8] text-sm uppercase font-semibold mb-2">You Pay</p>
                <p className="text-[#14B8A6] text-3xl font-bold">
                  ₹{tour.price.toLocaleString()}
                </p>
              </div>

              {/* Savings */}
              {tour.originalPrice > tour.price && (
                <div className="bg-[#10B981]/10 rounded-lg p-6 border border-[#10B981]/30 text-center">
                  <p className="text-[#10B981] text-sm uppercase font-semibold mb-2">You Save</p>
                  <p className="text-[#10B981] text-3xl font-bold">
                    ₹{(tour.originalPrice - tour.price).toLocaleString()}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Dates & Booking */}
          <div className="lg:col-span-1">
            
            {/* Departure Dates Card */}
            <div className="bg-[#1a3a52] rounded-lg p-6 border border-[#374151] mb-6 sticky top-24">
              
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Calendar size={20} className="text-[#FCD34D]" />
                Available Dates
              </h4>

              {/* Dates List */}
              <div className="space-y-3 mb-6">
                {tour.departureDates.map((date, index) => (
                  <div
                    key={index}
                    className="p-3 bg-[#0F2942] rounded-lg border border-[#374151] hover:border-[#14B8A6] transition cursor-pointer group"
                  >
                    <p className="text-[#94A3B8] group-hover:text-white transition font-semibold text-sm">
                      {date}
                    </p>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-[#374151] py-6" />

              {/* Group Size Info */}
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Users size={20} className="text-[#14B8A6]" />
                Group Size
              </h4>

              <div className="space-y-3 mb-6">
                <div className="p-4 bg-[#0F2942] rounded-lg border border-[#374151]">
                  <p className="text-[#94A3B8] text-xs uppercase font-semibold mb-1">Minimum</p>
                  <p className="text-white font-bold text-xl">{tour.groupSize.min} people</p>
                </div>
                <div className="p-4 bg-[#0F2942] rounded-lg border border-[#374151]">
                  <p className="text-[#94A3B8] text-xs uppercase font-semibold mb-1">Maximum</p>
                  <p className="text-white font-bold text-xl">{tour.groupSize.max} people</p>
                </div>
              </div>

              {/* Discount Badge */}
              {tour.originalPrice > tour.price && (
                <div className="bg-gradient-to-r from-[#EF4444] to-[#DC2626] rounded-lg p-4 mb-6 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <TrendingDown size={20} className="text-white" />
                    <div>
                      <p className="text-white text-xs uppercase font-semibold">Limited Offer</p>
                      <p className="text-white text-2xl font-bold">
                        {Math.round(((tour.originalPrice - tour.price) / tour.originalPrice) * 100)}% OFF
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="space-y-3">
                <button className="w-full bg-[#FCD34D] hover:bg-[#EAB308] text-[#0F2942] font-bold py-3 rounded-lg transition">
                  Book Now
                </button>
                <button className="w-full bg-[#14B8A6] hover:bg-[#0d9488] text-white font-bold py-3 rounded-lg transition">
                  Get Quote
                </button>
                <button className="w-full bg-transparent border border-[#14B8A6] text-[#14B8A6] hover:bg-[#14B8A6]/10 font-bold py-3 rounded-lg transition">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Plans Section */}
        <div className="mt-12 bg-gradient-to-r from-[#1a3a52] to-[#0F2942] rounded-lg p-8 border border-[#374151]">
          <h3 className="text-2xl font-bold text-white mb-6">Flexible Payment Plans</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Full Payment */}
            <div className="bg-[#0F2942] rounded-lg p-6 border border-[#374151] hover:border-[#14B8A6] transition">
              <h4 className="text-white font-bold mb-2">Full Payment</h4>
              <p className="text-[#94A3B8] text-sm mb-4">Pay entire amount upfront</p>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-[#14B8A6]">₹{tour.price.toLocaleString()}</span>
                <span className="text-[#94A3B8] text-sm">Due now</span>
              </div>
            </div>

            {/* 50-50 Plan */}
            <div className="bg-[#0F2942] rounded-lg p-6 border-2 border-[#FCD34D]">
              <div className="absolute top-4 right-4 bg-[#FCD34D] text-[#0F2942] px-3 py-1 rounded-full text-xs font-bold">
                Popular
              </div>
              <h4 className="text-white font-bold mb-2">50% Now, 50% Later</h4>
              <p className="text-[#94A3B8] text-sm mb-4">Split payment for convenience</p>
              <div className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-bold text-white">₹{Math.ceil(tour.price / 2).toLocaleString()}</span>
                  <span className="text-[#94A3B8] text-xs">at booking</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-bold text-white">₹{Math.floor(tour.price / 2).toLocaleString()}</span>
                  <span className="text-[#94A3B8] text-xs">30 days before</span>
                </div>
              </div>
            </div>

            {/* Installment Plan */}
            <div className="bg-[#0F2942] rounded-lg p-6 border border-[#374151] hover:border-[#14B8A6] transition">
              <h4 className="text-white font-bold mb-2">Monthly Installments</h4>
              <p className="text-[#94A3B8] text-sm mb-4">Flexible payment schedule</p>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-[#14B8A6]">₹{Math.ceil(tour.price / 3).toLocaleString()}</span>
                <span className="text-[#94A3B8] text-sm">/month x3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}