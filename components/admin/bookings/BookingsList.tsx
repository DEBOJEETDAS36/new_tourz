'use client';

import { useState, useEffect } from 'react';
import { Search, Plus, Edit2, Trash2, Eye, Loader, Download } from 'lucide-react';
import BookingModal from './BookingModal';
import DeleteModal from './DeleteModal';

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
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  paymentStatus: 'pending' | 'completed' | 'failed' | 'refunded';
  createdAt: string;
}

export default function BookingsList() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({ total: 0, pages: 0 });

  useEffect(() => {
    fetchBookings();
  }, [searchQuery, selectedStatus, page]);

  const fetchBookings = async () => {
    setIsLoading(true);
    try {
      let url = '/api/admin/bookings?page=' + page;
      if (searchQuery) url += '&search=' + searchQuery;
      if (selectedStatus !== 'All') url += '&status=' + selectedStatus;

      const response = await fetch(url, {
        credentials: 'include',
      });

      if (!response.ok) throw new Error('Failed to fetch bookings');

      const data = await response.json();
      setBookings(data.bookings);
      setPagination(data.pagination);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditBooking = (booking: Booking) => {
    setSelectedBooking(booking);
    setShowModal(true);
  };

  const handleDeleteBooking = (booking: Booking) => {
    setSelectedBooking(booking);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = async () => {
    if (!selectedBooking) return;

    try {
      const response = await fetch(`/api/admin/bookings/${selectedBooking.bookingId}`, {
        method: 'DELETE',
        credentials: 'include',
      });

      if (!response.ok) throw new Error('Failed to delete booking');

      setShowDeleteModal(false);
      setSelectedBooking(null);
      fetchBookings();
    } catch (error) {
      console.error('Error deleting booking:', error);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-[#FCD34D]/20 text-[#FCD34D]';
      case 'confirmed':
        return 'bg-[#14B8A6]/20 text-[#14B8A6]';
      case 'completed':
        return 'bg-[#10B981]/20 text-[#10B981]';
      case 'cancelled':
        return 'bg-[#EF4444]/20 text-[#EF4444]';
      default:
        return 'bg-[#94A3B8]/20 text-[#94A3B8]';
    }
  };

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-[#FCD34D]/20 text-[#FCD34D]';
      case 'completed':
        return 'bg-[#10B981]/20 text-[#10B981]';
      case 'failed':
        return 'bg-[#EF4444]/20 text-[#EF4444]';
      case 'refunded':
        return 'bg-[#14B8A6]/20 text-[#14B8A6]';
      default:
        return 'bg-[#94A3B8]/20 text-[#94A3B8]';
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        
        {/* Search & Filter */}
        <div className="w-full sm:w-auto flex gap-4">
          <div className="relative flex-1 sm:flex-none">
            <Search className="absolute left-3 top-3 text-[#94A3B8]" size={20} />
            <input
              type="text"
              placeholder="Search bookings..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setPage(1);
              }}
              className="pl-10 pr-4 py-2 bg-[#1a3a52] border border-[#374151] rounded-lg text-white placeholder-[#94A3B8] focus:outline-none focus:border-[#14B8A6]"
            />
          </div>

          <select
            value={selectedStatus}
            onChange={(e) => {
              setSelectedStatus(e.target.value);
              setPage(1);
            }}
            className="px-4 py-2 bg-[#1a3a52] border border-[#374151] rounded-lg text-white focus:outline-none focus:border-[#14B8A6]"
          >
            <option value="All">All Status</option>
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>

        {/* Export Button */}
        <button className="flex items-center gap-2 bg-[#14B8A6] hover:bg-[#0d9488] text-white font-bold px-6 py-2 rounded-lg transition whitespace-nowrap">
          <Download size={20} />
          Export
        </button>
      </div>

      {/* Bookings Table */}
      <div className="bg-[#1a3a52] rounded-lg border border-[#374151] overflow-hidden">
        
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader className="animate-spin text-[#14B8A6]" size={40} />
          </div>
        ) : bookings.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-[#94A3B8]">No bookings found</p>
          </div>
        ) : (
          <>
            {/* Desktop View */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#0F2942] border-b border-[#374151]">
                  <tr>
                    <th className="px-6 py-4 text-left text-white font-semibold">Booking ID</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Customer</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Tour</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">People</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Price</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Status</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Payment</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking) => (
                    <tr key={booking._id} className="border-b border-[#374151] hover:bg-[#0F2942]/50 transition">
                      <td className="px-6 py-4">
                        <p className="text-white font-mono text-sm">{booking.bookingId}</p>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-white font-medium">{booking.customerName}</p>
                          <p className="text-[#94A3B8] text-xs">{booking.customerEmail}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-[#94A3B8] text-sm">{booking.tourTitle}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-white">{booking.numberOfPeople}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-white font-semibold">₹{booking.totalPrice.toLocaleString()}</p>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${getStatusColor(booking.status)}`}>
                          {booking.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${getPaymentStatusColor(booking.paymentStatus)}`}>
                          {booking.paymentStatus}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEditBooking(booking)}
                            className="p-2 hover:bg-[#14B8A6]/20 text-[#14B8A6] rounded transition"
                            title="Edit"
                          >
                            <Edit2 size={18} />
                          </button>
                          <button
                            onClick={() => handleDeleteBooking(booking)}
                            className="p-2 hover:bg-[#EF4444]/20 text-[#EF4444] rounded transition"
                            title="Delete"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile View */}
            <div className="lg:hidden space-y-4 p-4">
              {bookings.map((booking) => (
                <div key={booking._id} className="bg-[#0F2942] rounded-lg p-4 border border-[#374151]">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <p className="text-white font-bold text-sm">{booking.bookingId}</p>
                      <p className="text-[#94A3B8] text-xs">{new Date(booking.createdAt).toLocaleDateString()}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-bold">₹{booking.totalPrice.toLocaleString()}</p>
                    </div>
                  </div>

                  <div className="space-y-1 text-sm mb-3 pb-3 border-b border-[#374151]">
                    <p className="text-[#94A3B8]">👤 {booking.customerName}</p>
                    <p className="text-[#94A3B8] text-xs">{booking.customerEmail}</p>
                    <p className="text-[#94A3B8]">✈️ {booking.tourTitle}</p>
                    <p className="text-[#94A3B8]">👥 {booking.numberOfPeople} people</p>
                  </div>

                  <div className="flex gap-2 mb-3 flex-wrap">
                    <span className={`px-2 py-1 rounded text-xs font-semibold capitalize ${getStatusColor(booking.status)}`}>
                      {booking.status}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs font-semibold capitalize ${getPaymentStatusColor(booking.paymentStatus)}`}>
                      {booking.paymentStatus}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEditBooking(booking)}
                      className="flex-1 flex items-center justify-center gap-2 bg-[#14B8A6]/20 text-[#14B8A6] py-2 rounded transition hover:bg-[#14B8A6]/30"
                    >
                      <Edit2 size={16} />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteBooking(booking)}
                      className="flex-1 flex items-center justify-center gap-2 bg-[#EF4444]/20 text-[#EF4444] py-2 rounded transition hover:bg-[#EF4444]/30"
                    >
                      <Trash2 size={16} />
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Pagination */}
      {pagination.pages > 1 && (
        <div className="flex justify-center gap-2">
          {Array.from({ length: pagination.pages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                page === p
                  ? 'bg-[#14B8A6] text-white'
                  : 'bg-[#1a3a52] text-[#94A3B8] hover:text-white'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      )}

      {/* Modals */}
      {showModal && selectedBooking && (
        <BookingModal
          booking={selectedBooking}
          onClose={() => setShowModal(false)}
          onSave={() => {
            setShowModal(false);
            fetchBookings();
          }}
        />
      )}

      {showDeleteModal && selectedBooking && (
        <DeleteModal
          bookingId={selectedBooking.bookingId}
          customerName={selectedBooking.customerName}
          onConfirm={handleConfirmDelete}
          onCancel={() => setShowDeleteModal(false)}
        />
      )}
    </div>
  );
}