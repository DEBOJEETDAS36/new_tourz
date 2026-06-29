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
    <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            What Our <span className="text-blue-400">Travelers</span> Say
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Real experiences from real adventurers who chose Tourz
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`bg-white rounded-lg shadow-lg p-6 transition-all duration-300 ${
                  index === 1 ? 'md:scale-105 md:shadow-2xl' : 'opacity-80'
                }`}
              >
                {/* Quote Icon */}
                <Quote size={32} className="text-blue-500 mb-4 opacity-50" />

                {/* Testimonial Text */}
                <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">
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
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-xs text-gray-600 ml-2">
                    {testimonial.rating}
                  </span>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 pt-4 mb-4" />

                {/* Author Info */}
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-gray-600">
                      {testimonial.location}
                    </p>
                    <p className="text-xs text-blue-600 font-semibold">
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
              className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition shadow-lg"
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
                      ? 'bg-blue-500'
                      : 'bg-gray-500 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition shadow-lg"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-blue-400 mb-2">10,000+</h3>
            <p className="text-gray-300">Happy Travelers</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-blue-400 mb-2">4.9★</h3>
            <p className="text-gray-300">Average Rating</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-blue-400 mb-2">50+</h3>
            <p className="text-gray-300">Destinations</p>
          </div>
        </div>
      </div>
    </section>
  );
}