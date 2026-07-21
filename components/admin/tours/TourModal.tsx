'use client';

import { useState, useEffect } from 'react';
import { X, Loader } from 'lucide-react';

interface Tour {
  _id: string;
  id: string;
  title: string;
  destination: string;
  country: string;
  duration: string;
  daysCount: number;
  price: number;
  originalPrice: number;
  category: 'leisure' | 'mice';
  description: string;
  isActive: boolean;
}

interface TourModalProps {
  tour: Tour | null;
  onClose: () => void;
  onSave: () => void;
}

export default function TourModal({ tour, onClose, onSave }: TourModalProps) {
  const [formData, setFormData] = useState<Partial<Tour>>({
    id: '',
    title: '',
    destination: '',
    country: '',
    duration: '',
    daysCount: 0,
    price: 0,
    originalPrice: 0,
    category: 'leisure',
    description: '',
    isActive: true,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (tour) {
      setFormData(tour);
    }
  }, [tour]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : type === 'number' ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const url = tour ? `/api/admin/tours/${tour.id}` : '/api/admin/tours';
      const method = tour ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        credentials: 'include',
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to save tour');
      }

      onSave();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#1a3a52] rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#374151]">
        
        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between bg-[#0F2942] border-b border-[#374151] p-6">
          <h2 className="text-2xl font-bold text-white">
            {tour ? 'Edit Tour' : 'Add New Tour'}
          </h2>
          <button
            onClick={onClose}
            className="text-[#94A3B8] hover:text-white transition"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          
          {error && (
            <div className="bg-[#EF4444]/20 border border-[#EF4444] rounded-lg p-4 text-[#EF4444] text-sm">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Tour ID */}
            <div>
              <label className="block text-white font-semibold mb-2 text-sm">Tour ID *</label>
              <input
                type="text"
                name="id"
                value={formData.id || ''}
                onChange={handleChange}
                disabled={!!tour}
                className="w-full px-4 py-2 bg-[#0F2942] border border-[#374151] rounded-lg text-white focus:outline-none focus:border-[#14B8A6] disabled:opacity-50"
                required
              />
            </div>

            {/* Title */}
            <div>
              <label className="block text-white font-semibold mb-2 text-sm">Title *</label>
              <input
                type="text"
                name="title"
                value={formData.title || ''}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#0F2942] border border-[#374151] rounded-lg text-white focus:outline-none focus:border-[#14B8A6]"
                required
              />
            </div>

            {/* Destination */}
            <div>
              <label className="block text-white font-semibold mb-2 text-sm">Destination *</label>
              <input
                type="text"
                name="destination"
                value={formData.destination || ''}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#0F2942] border border-[#374151] rounded-lg text-white focus:outline-none focus:border-[#14B8A6]"
                required
              />
            </div>

            {/* Country */}
            <div>
              <label className="block text-white font-semibold mb-2 text-sm">Country *</label>
              <input
                type="text"
                name="country"
                value={formData.country || ''}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#0F2942] border border-[#374151] rounded-lg text-white focus:outline-none focus:border-[#14B8A6]"
                required
              />
            </div>

            {/* Duration */}
            <div>
              <label className="block text-white font-semibold mb-2 text-sm">Duration *</label>
              <input
                type="text"
                name="duration"
                value={formData.duration || ''}
                onChange={handleChange}
                placeholder="e.g., 5 Days / 4 Nights"
                className="w-full px-4 py-2 bg-[#0F2942] border border-[#374151] rounded-lg text-white focus:outline-none focus:border-[#14B8A6]"
                required
              />
            </div>

            {/* Days Count */}
            <div>
              <label className="block text-white font-semibold mb-2 text-sm">Days Count *</label>
              <input
                type="number"
                name="daysCount"
                value={formData.daysCount || 0}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#0F2942] border border-[#374151] rounded-lg text-white focus:outline-none focus:border-[#14B8A6]"
                required
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-white font-semibold mb-2 text-sm">Price *</label>
              <input
                type="number"
                name="price"
                value={formData.price || 0}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#0F2942] border border-[#374151] rounded-lg text-white focus:outline-none focus:border-[#14B8A6]"
                required
              />
            </div>

            {/* Original Price */}
            <div>
              <label className="block text-white font-semibold mb-2 text-sm">Original Price *</label>
              <input
                type="number"
                name="originalPrice"
                value={formData.originalPrice || 0}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#0F2942] border border-[#374151] rounded-lg text-white focus:outline-none focus:border-[#14B8A6]"
                required
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-white font-semibold mb-2 text-sm">Category *</label>
              <select
                name="category"
                value={formData.category || 'leisure'}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#0F2942] border border-[#374151] rounded-lg text-white focus:outline-none focus:border-[#14B8A6]"
              >
                <option value="leisure">Leisure</option>
                <option value="mice">MICE</option>
              </select>
            </div>

            {/* Active Status */}
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="isActive"
                  checked={formData.isActive || false}
                  onChange={handleChange}
                  className="w-4 h-4 rounded border-[#374151] bg-[#0F2942] accent-[#14B8A6] cursor-pointer"
                />
                <span className="text-white font-semibold text-sm">Active</span>
              </label>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-white font-semibold mb-2 text-sm">Description</label>
            <textarea
              name="description"
              value={formData.description || ''}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 bg-[#0F2942] border border-[#374151] rounded-lg text-white focus:outline-none focus:border-[#14B8A6] resize-none"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-2 bg-[#1a3a52] text-white font-bold rounded-lg hover:bg-[#0F2942] transition border border-[#374151]"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-2 bg-[#14B8A6] text-white font-bold rounded-lg hover:bg-[#0d9488] transition disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <Loader size={20} className="animate-spin" />
                  Saving...
                </>
              ) : (
                'Save Tour'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}