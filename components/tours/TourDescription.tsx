'use client';

import { TourDetail } from '@/lib/data/tourDetails';

export default function TourDescription({ tour }: { tour: TourDetail }) {
  return (
    <section className="py-16 bg-[#0F2942]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-white mb-6">About This Tour</h2>
            <p className="text-[#94A3B8] text-lg leading-relaxed">
              {tour.overview}
            </p>
          </div>

          {/* Quick Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-[#1a3a52] rounded-lg p-6 border border-[#14B8A6] sticky top-24">
              
              {/* Price Section */}
              <div className="mb-6">
                <p className="text-[#94A3B8] text-sm mb-2">Starting From</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-[#14B8A6]">
                    ₹{tour.price.toLocaleString()}
                  </span>
                  {tour.originalPrice > tour.price && (
                    <span className="text-[#94A3B8] line-through text-sm">
                      ₹{tour.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                <p className="text-[#94A3B8] text-xs mt-1">Per Person</p>
              </div>

              {/* Divider */}
              <div className="border-t border-[#374151] py-6" />

              {/* CTA Buttons */}
              <div className="space-y-3 mb-6">
                <button className="w-full bg-[#FCD34D] hover:bg-[#EAB308] text-[#0F2942] font-bold py-3 rounded-lg transition">
                  Book Now
                </button>
                <button className="w-full bg-[#14B8A6] hover:bg-[#0d9488] text-white font-bold py-3 rounded-lg transition">
                  Check Availability
                </button>
                <button className="w-full bg-transparent border border-[#14B8A6] text-[#14B8A6] hover:bg-[#14B8A6]/10 font-bold py-3 rounded-lg transition">
                  Send Inquiry
                </button>
              </div>

              {/* Divider */}
              <div className="border-t border-[#374151] py-6" />

              {/* Contact Info */}
              <div>
                <p className="text-[#94A3B8] text-xs uppercase font-semibold mb-3">Need Help?</p>
                <p className="text-white font-semibold text-lg mb-1">+91 98765 43210</p>
                <p className="text-[#94A3B8] text-sm">support@tourz.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}