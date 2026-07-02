'use client';

import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '@/lib/data/testimonials';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-[#0F2942] to-[#1a3a52]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            What Our <span className="text-[#14B8A6]">Travelers</span> Say
          </h2>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
            Real experiences from real adventurers who chose Tourz
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`bg-[#1a3a52] rounded-lg shadow-lg p-6 transition-all duration-300 border border-[#374151] ${
                  index === 1 ? 'md:scale-105 md:shadow-2xl md:border-[#14B8A6]' : 'opacity-80'
                }`}
              >
                {/* Quote Icon */}
                <Quote size={32} className="text-[#14B8A6] mb-4 opacity-50" />

                {/* Testimonial Text */}
                <p className="text-[#94A3B8] text-sm leading-relaxed mb-4 italic">
                  "{testimonial.text}"
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={`${
                        i < Math.floor(testimonial.rating)
                          ? 'fill-[#FCD34D] text-[#FCD34D]'
                          : 'text-[#374151]'
                      }`}
                    />
                  ))}
                  <span className="text-xs text-[#94A3B8] ml-2">
                    {testimonial.rating}
                  </span>
                </div>

                {/* Divider */}
                <div className="border-t border-[#374151] pt-4 mb-4" />

                {/* Author Info */}
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-white text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-[#94A3B8]">
                      {testimonial.location}
                    </p>
                    <p className="text-xs text-[#14B8A6] font-semibold">
                      {testimonial.tour}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={goToPrev}
              className="bg-[#14B8A6] hover:bg-[#0d9488] text-white p-3 rounded-full transition shadow-lg"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition ${
                    index === currentIndex
                      ? 'bg-[#FCD34D]'
                      : 'bg-[#374151] hover:bg-[#94A3B8]'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="bg-[#14B8A6] hover:bg-[#0d9488] text-white p-3 rounded-full transition shadow-lg"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg bg-[#1a3a52] border border-[#374151]">
            <h3 className="text-4xl font-bold text-[#14B8A6] mb-2">10,000+</h3>
            <p className="text-[#94A3B8]">Happy Travelers</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-[#1a3a52] border border-[#374151]">
            <h3 className="text-4xl font-bold text-[#FCD34D] mb-2">4.9★</h3>
            <p className="text-[#94A3B8]">Average Rating</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-[#1a3a52] border border-[#374151]">
            <h3 className="text-4xl font-bold text-[#14B8A6] mb-2">50+</h3>
            <p className="text-[#94A3B8]">Destinations</p>
          </div>
        </div>
      </div>
    </section>
  );
}