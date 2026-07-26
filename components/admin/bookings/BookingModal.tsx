'use client';

import { useState, useEffect } from 'react';
import { X, Loader } from 'lucide-react';

interface Booking {
  _id: string;
  bookingId: string;
  tourId: string;
  tourTitle: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  numberOfPeople: number;
  totalPrice: number;
  departureDate: string;
  createdAt: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  paymentStatus: 'pending' | 'completed' | 'failed' | 'refunded';
  specialRequests?: string;
}

interface BookingModalProps {
  booking: Booking;
  onClose: () => void;
  onSave: () => void;
}

export default function BookingModal({ booking, onClose, onSave }: BookingModalProps) {
  const [formData, setFormData] = useState<Partial<Booking>>(booking);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch(`/api/admin/bookings/${booking.bookingId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        credentials: 'include',
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to update booking');
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
            Edit Booking - {booking.bookingId}
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

          {/* Customer Info - Read Only */}
          <div className="bg-[#0F2942] rounded-lg p-4 border border-[#374151]">
            <h3 className="text-white font-bold mb-3">Customer Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-[#94A3B8]">Name</p>
                <p className="text-white font-semibold">{booking.customerName}</p>
              </div>
              <div>
                <p className="text-[#94A3B8]">Email</p>
                <p className="text-white font-semibold">{booking.customerEmail}</p>
              </div>
              <div>
                <p className="text-[#94A3B8]">Phone</p>
                <p className="text-white font-semibold">{booking.customerPhone}</p>
              </div>
              <div>
                <p className="text-[#94A3B8]">Booking Date</p>
                <p className="text-white font-semibold">{new Date(booking.createdAt).toLocaleDateString()}</p>
              </div>
            </div>
          </div>

          {/* Booking Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Tour Title */}
            <div>
              <label className="block text-white font-semibold mb-2 text-sm">Tour</label>
              <input
                type="text"
                value={booking.tourTitle}
                disabled
                className="w-full px-4 py-2 bg-[#0F2942] border border-[#374151] rounded-lg text-white disabled:opacity-50"
              />
            </div>

            {/* Departure Date */}
            <div>
              <label className="block text-white font-semibold mb-2 text-sm">Departure Date *</label>
              <input
                type="date"
                name="departureDate"
                value={formData.departureDate || ''}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#0F2942] border border-[#374151] rounded-lg text-white focus:outline-none focus:border-[#14B8A6]"
                required
              />
            </div>

            {/* Number of People */}
            <div>
              <label className="block text-white font-semibold mb-2 text-sm">Number of People *</label>
              <input
                type="number"
                name="numberOfPeople"
                value={formData.numberOfPeople || 0}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#0F2942] border border-[#374151] rounded-lg text-white focus:outline-none focus:border-[#14B8A6]"
                required
              />
            </div>

            {/* Total Price */}
            <div>
              <label className="block text-white font-semibold mb-2 text-sm">Total Price (₹) *</label>
              <input
                type="number"
                name="totalPrice"
                value={formData.totalPrice || 0}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#0F2942] border border-[#374151] rounded-lg text-white focus:outline-none focus:border-[#14B8A6]"
                required
              />
            </div>

            {/* Booking Status */}
            <div>
              <label className="block text-white font-semibold mb-2 text-sm">Booking Status *</label>
              <select
                name="status"
                value={formData.status || 'pending'}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#0F2942] border border-[#374151] rounded-lg text-white focus:outline-none focus:border-[#14B8A6]"
              >
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>

            {/* Payment Status */}
            <div>
              <label className="block text-white font-semibold mb-2 text-sm">Payment Status *</label>
              <select
                name="paymentStatus"
                value={formData.paymentStatus || 'pending'}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#0F2942] border border-[#374151] rounded-lg text-white focus:outline-none focus:border-[#14B8A6]"
              >
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
                <option value="failed">Failed</option>
                <option value="refunded">Refunded</option>
              </select>
            </div>
          </div>

          {/* Special Requests */}
          <div>
            <label className="block text-white font-semibold mb-2 text-sm">Special Requests</label>
            <textarea
              name="specialRequests"
              value={formData.specialRequests || ''}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 bg-[#0F2942] border border-[#374151] rounded-lg text-white focus:outline-none focus:border-[#14B8A6] resize-none"
              placeholder="Any special requests from the customer..."
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
                'Save Changes'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}