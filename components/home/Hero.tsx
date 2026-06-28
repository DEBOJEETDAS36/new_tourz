'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, MapPin, Calendar, Users } from 'lucide-react';

export default function Hero() {
  const [formData, setFormData] = useState({
    destination: '',
    checkIn: '',
    checkOut: '',
    travelers: '2',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="relative h-screen bg-cover bg-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=800&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
        
        {/* Main Heading */}
        <div className="text-center mb-12 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Explore the World with <span className="text-blue-400">Tourz</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8">
            Discover amazing destinations and create unforgettable memories with our curated travel packages
          </p>
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-lg shadow-2xl p-6 sm:p-8 w-full max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            
            {/* Destination Input */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm">
                <MapPin size={16} className="inline mr-2" />
                Destination
              </label>
              <input
                type="text"
                name="destination"
                placeholder="Where to?"
                value={formData.destination}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Check-in Date */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm">
                <Calendar size={16} className="inline mr-2" />
                Check-in
              </label>
              <input
                type="date"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Check-out Date */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm">
                <Calendar size={16} className="inline mr-2" />
                Check-out
              </label>
              <input
                type="date"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Travelers */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm">
                <Users size={16} className="inline mr-2" />
                Travelers
              </label>
              <select
                name="travelers"
                value={formData.travelers}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              >
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4 People</option>
                <option value="5">5+ People</option>
              </select>
            </div>
          </div>

          {/* Search Button */}
          <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 rounded-lg transition flex items-center justify-center space-x-2">
            <Search size={20} />
            <span>Search Tours</span>
          </button>
        </div>

        {/* Quick Links */}
        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          <Link href="/leisure" className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-full font-semibold transition backdrop-blur-sm">
            Leisure Tours
          </Link>
          <Link href="/mice" className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-full font-semibold transition backdrop-blur-sm">
            MICE Events
          </Link>
          <Link href="/gallery" className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-full font-semibold transition backdrop-blur-sm">
            View Gallery
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="text-white text-center">
          <p className="text-sm mb-2">Scroll to explore</p>
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}