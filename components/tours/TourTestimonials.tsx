'use client';

import { useState } from 'react';
import { TourDetail } from '@/lib/data/tourDetails';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function TourTestimonials({ tour }: { tour: TourDetail }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % tour.testimonials.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? tour.testimonials.length - 1 : prevIndex - 1
    );
  };

  const visibleTestimonials = [
    tour.testimonials[currentIndex],
    tour.testimonials[(currentIndex + 1) % tour.testimonials.length],
  ];

  return (
    <section className="py-16 bg-[#0F2942] border-t border-[#374151]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Traveler <span className="text-[#14B8A6]">Reviews</span>
          </h2>
          <p className="text-[#94A3B8] max-w-2xl mx-auto">
            Real experiences from travelers who've experienced this tour
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className={`bg-[#1a3a52] rounded-lg p-8 border border-[#374151] hover:border-[#14B8A6] transition-all duration-300 flex flex-col ${
                  index === 0 ? 'md:scale-105 md:shadow-2xl md:border-[#14B8A6]' : ''
                }`}
              >
                {/* Quote Icon */}
                <Quote size={32} className="text-[#14B8A6] mb-4 opacity-50" />

                {/* Review Text */}
                <p className="text-[#94A3B8] text-lg leading-relaxed mb-6 flex-grow italic">
                  "{testimonial.review}"
                </p>

                {/* Divider */}
                <div className="border-t border-[#374151] pt-6 mb-6" />

                {/* Rating */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={`${
                          i < Math.floor(testimonial.rating)
                            ? 'fill-[#FCD34D] text-[#FCD34D]'
                            : 'text-[#374151]'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-white font-bold ml-2">{testimonial.rating}</span>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#14B8A6]"
                  />
                  <div>
                    <h4 className="text-white font-bold">
                      {testimonial.name}
                    </h4>
                    <p className="text-[#94A3B8] text-sm">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-8 mb-8">
            {/* Previous Button */}
            <button
              onClick={goToPrev}
              className="bg-[#14B8A6] hover:bg-[#0d9488] text-white p-3 rounded-full transition shadow-lg"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {tour.testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition ${
                    index === currentIndex
                      ? 'bg-[#FCD34D]'
                      : 'bg-[#374151] hover:bg-[#94A3B8]'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={goToNext}
              className="bg-[#14B8A6] hover:bg-[#0d9488] text-white p-3 rounded-full transition shadow-lg"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            
            {/* Average Rating */}
            <div className="bg-[#1a3a52] rounded-lg p-6 border border-[#374151] text-center">
              <p className="text-[#94A3B8] text-sm uppercase font-semibold mb-3">Average Rating</p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-4xl font-bold text-[#FCD34D]">
                  {(
                    tour.testimonials.reduce((sum, t) => sum + t.rating, 0) /
                    tour.testimonials.length
                  ).toFixed(1)}
                </span>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={`${
                        i < Math.floor(
                          tour.testimonials.reduce((sum, t) => sum + t.rating, 0) /
                            tour.testimonials.length
                        )
                          ? 'fill-[#FCD34D] text-[#FCD34D]'
                          : 'text-[#374151]'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Total Reviews */}
            <div className="bg-[#1a3a52] rounded-lg p-6 border border-[#374151] text-center">
              <p className="text-[#94A3B8] text-sm uppercase font-semibold mb-3">Total Reviews</p>
              <p className="text-4xl font-bold text-[#14B8A6]">
                {tour.testimonials.length}
              </p>
              <p className="text-[#94A3B8] text-sm mt-2">verified travelers</p>
            </div>

            {/* Recommendation Rate */}
            <div className="bg-[#1a3a52] rounded-lg p-6 border border-[#374151] text-center">
              <p className="text-[#94A3B8] text-sm uppercase font-semibold mb-3">Would Recommend</p>
              <p className="text-4xl font-bold text-[#10B981]">
                {Math.round(
                  (tour.testimonials.filter((t) => t.rating >= 4).length /
                    tour.testimonials.length) *
                    100
                )}
                %
              </p>
              <p className="text-[#94A3B8] text-sm mt-2">highly satisfied</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-[#14B8A6]/10 to-[#0d9488]/10 border border-[#14B8A6]/30 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h3>
          <p className="text-[#94A3B8] mb-6 max-w-2xl mx-auto">
            Join thousands of satisfied travelers and experience this amazing tour for yourself
          </p>
          <button className="bg-[#FCD34D] hover:bg-[#EAB308] text-[#0F2942] font-bold py-3 px-8 rounded-lg transition">
            Book Your Adventure Now
          </button>
        </div>
      </div>
    </section>
  );
}