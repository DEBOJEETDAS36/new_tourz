'use client';

import { useState } from 'react';
import { galleryImages, galleryCategories } from '@/lib/data/gallery';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const filteredImages = galleryImages.filter(image =>
    selectedCategory === 'All' || image.category === selectedCategory
  );

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const goToPrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex === 0 ? filteredImages.length - 1 : selectedImageIndex - 1
      );
    }
  };

  const goToNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex === filteredImages.length - 1 ? 0 : selectedImageIndex + 1
      );
    }
  };

  return (
    <section className="py-16 bg-[#0F2942]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Filter */}
        <div className="mb-12">
          <h2 className="text-white font-semibold mb-4">Filter by Category</h2>
          <div className="flex flex-wrap gap-3">
            {galleryCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-semibold transition ${
                  selectedCategory === category
                    ? 'bg-[#14B8A6] text-white'
                    : 'bg-[#1a3a52] text-[#94A3B8] hover:bg-[#1a3a52]/80 border border-[#374151]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => openLightbox(index)}
              className="relative h-48 rounded-lg overflow-hidden cursor-pointer group"
            >
              <img
                src={image.thumbnail}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition text-center">
                  <h3 className="text-white font-bold text-sm mb-1">{image.title}</h3>
                  <p className="text-white/80 text-xs">{image.destination}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Count */}
        <div className="text-center text-[#94A3B8] mb-8">
          <p>Showing {filteredImages.length} images</p>
        </div>

        {/* Lightbox Modal */}
        {selectedImageIndex !== null && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
            
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 bg-white rounded-full p-2 hover:bg-gray-100 transition z-10"
            >
              <X size={24} className="text-black" />
            </button>

            {/* Main Image */}
            <div className="relative w-full max-w-4xl">
              <img
                src={filteredImages[selectedImageIndex].image}
                alt={filteredImages[selectedImageIndex].title}
                className="w-full h-auto rounded-lg"
              />

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-white text-2xl font-bold mb-2">
                  {filteredImages[selectedImageIndex].title}
                </h3>
                <p className="text-white/80 text-sm mb-2">
                  {filteredImages[selectedImageIndex].destination}
                </p>
                <p className="text-white/60 text-xs">
                  Photo by {filteredImages[selectedImageIndex].photographer}
                </p>
              </div>

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
              <div className="absolute top-6 left-6 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-semibold">
                {selectedImageIndex + 1} / {filteredImages.length}
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="absolute bottom-24 left-0 right-0 flex justify-center gap-2 px-6 overflow-x-auto pb-4">
              {filteredImages.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`relative h-16 w-16 rounded-lg overflow-hidden shrink-0 transition border-2 ${
                    selectedImageIndex === index
                      ? 'border-[#14B8A6] shadow-lg'
                      : 'border-white/30 hover:border-white/60'
                  }`}
                >
                  <img
                    src={image.thumbnail}
                    alt={`Thumbnail ${index}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-linear-to-r from-[#14B8A6] to-[#0d9488] rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Create Your Own Memories
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Every photo tells a story. Book your next adventure with Tourz and create unforgettable moments.
          </p>
          <button className="bg-white hover:bg-gray-100 text-[#0d9488] font-bold py-3 px-8 rounded-lg transition">
            Explore Tours
          </button>
        </div>
      </div>
    </section>
  );
}