'use client';

import { useState } from 'react';
import { TourDetail } from '@/lib/data/tourDetails';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function TourGallery({ tour }: { tour: TourDetail }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const allImages = [tour.mainImage, ...tour.galleryImages];

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const goToPrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex === 0 ? allImages.length - 1 : selectedImageIndex - 1
      );
    }
  };

  const goToNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex === allImages.length - 1 ? 0 : selectedImageIndex + 1
      );
    }
  };

  return (
    <section className="py-16 bg-[#1a3a52] border-t border-[#374151]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Photo <span className="text-[#14B8A6]">Gallery</span>
          </h2>
          <p className="text-[#94A3B8] max-w-2xl mx-auto">
            Get a glimpse of the stunning locations and experiences awaiting you
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Featured Image - Large */}
          <div
            onClick={() => openLightbox(0)}
            className="lg:col-span-2 lg:row-span-2 relative h-80 sm:h-96 rounded-lg overflow-hidden cursor-pointer group"
          >
            <img
              src={allImages[0]}
              alt="Featured"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <div className="bg-white rounded-full p-3">
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          {/* Smaller Images */}
          {allImages.slice(1, 7).map((image, index) => (
            <div
              key={index + 1}
              onClick={() => openLightbox(index + 1)}
              className="relative h-40 rounded-lg overflow-hidden cursor-pointer group"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <div className="bg-white rounded-full p-2">
                  <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          ))}

          {/* View More Card */}
          {allImages.length > 7 && (
            <div
              onClick={() => openLightbox(0)}
              className="relative h-40 rounded-lg overflow-hidden cursor-pointer group bg-[#0F2942] border-2 border-[#374151] hover:border-[#14B8A6] transition flex items-center justify-center"
            >
              <div className="text-center group-hover:scale-110 transition-transform">
                <svg className="w-12 h-12 text-[#14B8A6] mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-white font-bold">View All</p>
                <p className="text-[#94A3B8] text-sm">{allImages.length} photos</p>
              </div>
            </div>
          )}
        </div>

        {/* Lightbox Modal */}
        {selectedImageIndex !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
            
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 bg-white rounded-full p-2 hover:bg-gray-100 transition z-10"
            >
              <X size={24} className="text-black" />
            </button>

            {/* Main Image */}
            <div className="relative w-full h-full flex items-center justify-center p-6">
              <img
                src={allImages[selectedImageIndex]}
                alt={`Gallery ${selectedImageIndex}`}
                className="max-w-full max-h-full object-contain rounded-lg"
              />

              {/* Navigation Buttons */}
              <button
                onClick={goToPrevious}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 hover:bg-gray-100 transition"
              >
                <ChevronLeft size={24} className="text-black" />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 hover:bg-gray-100 transition"
              >
                <ChevronRight size={24} className="text-black" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-6 py-3 rounded-full">
                <p className="text-sm font-semibold">
                  {selectedImageIndex + 1} / {allImages.length}
                </p>
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="absolute bottom-24 left-0 right-0 flex justify-center gap-2 px-6 overflow-x-auto">
              {allImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`relative h-16 w-16 rounded-lg overflow-hidden flex-shrink-0 transition border-2 ${
                    selectedImageIndex === index
                      ? 'border-[#FCD34D] shadow-lg'
                      : 'border-white/30 hover:border-white/60'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}