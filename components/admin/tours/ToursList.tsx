'use client';

import { useState, useEffect } from 'react';
import { Search, Plus, Edit2, Trash2, Eye, Loader } from 'lucide-react';
import TourModal from './TourModal';
import DeleteModal from './DeleteModal';

interface Tour {
  _id: string;
  id: string;
  title: string;
  destination: string;
  country: string;
  duration: string;
  price: number;
  originalPrice: number;
  category: 'leisure' | 'mice';
  description: string;
  daysCount: number;
  isActive: boolean;
  createdAt: string;
}

export default function ToursList() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({ total: 0, pages: 0 });

  useEffect(() => {
    fetchTours();
  }, [searchQuery, selectedCategory, page]);

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      let url = '/api/admin/tours?page=' + page;
      if (searchQuery) url += '&search=' + searchQuery;
      if (selectedCategory !== 'All') url += '&category=' + selectedCategory;

      console.log('Fetching from:', url); // Debug log

      const response = await fetch(url, {
        credentials: 'include',
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('API Error:', errorData); // See actual error
        throw new Error(errorData.error || `HTTP ${response.status}: Failed to fetch tours`);
      }

      const data = await response.json();
      console.log('Tours fetched:', data); // Debug log
      setTours(data.tours);
      setPagination(data.pagination);
    } catch (error) {
      console.error('Error fetching tours:', error);
      alert(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`); // Show error to user
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddTour = () => {
    setSelectedTour(null);
    setShowModal(true);
  };

  const handleEditTour = (tour: Tour) => {
    setSelectedTour(tour);
    setShowModal(true);
  };

  const handleDeleteTour = (tour: Tour) => {
    setSelectedTour(tour);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = async () => {
    if (!selectedTour) return;

    try {
      const response = await fetch(`/api/admin/tours/${selectedTour.id}`, {
        method: 'DELETE',
        credentials: 'include',
      });

      if (!response.ok) throw new Error('Failed to delete tour');

      setShowDeleteModal(false);
      setSelectedTour(null);
      fetchTours();
    } catch (error) {
      console.error('Error deleting tour:', error);
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
              placeholder="Search tours..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setPage(1);
              }}
              className="pl-10 pr-4 py-2 bg-[#1a3a52] border border-[#374151] rounded-lg text-white placeholder-[#94A3B8] focus:outline-none focus:border-[#14B8A6]"
            />
          </div>

          <select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setPage(1);
            }}
            className="px-4 py-2 bg-[#1a3a52] border border-[#374151] rounded-lg text-white focus:outline-none focus:border-[#14B8A6]"
          >
            <option value="All">All Categories</option>
            <option value="leisure">Leisure</option>
            <option value="mice">MICE</option>
          </select>
        </div>

        {/* Add Button */}
        <button
          onClick={handleAddTour}
          className="flex items-center gap-2 bg-[#14B8A6] hover:bg-[#0d9488] text-white font-bold px-6 py-2 rounded-lg transition whitespace-nowrap"
        >
          <Plus size={20} />
          Add New Tour
        </button>
      </div>

      {/* Tours Table */}
      <div className="bg-[#1a3a52] rounded-lg border border-[#374151] overflow-hidden">
        
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader className="animate-spin text-[#14B8A6]" size={40} />
          </div>
        ) : tours.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-[#94A3B8]">No tours found</p>
          </div>
        ) : (
          <>
            {/* Desktop View */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#0F2942] border-b border-[#374151]">
                  <tr>
                    <th className="px-6 py-4 text-left text-white font-semibold">Title</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Destination</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Category</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Days</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Price</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Status</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {tours.map((tour) => (
                    <tr key={tour._id} className="border-b border-[#374151] hover:bg-[#0F2942]/50 transition">
                      <td className="px-6 py-4">
                        <p className="text-white font-medium">{tour.title}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-[#94A3B8]">{tour.destination}</p>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          tour.category === 'leisure'
                            ? 'bg-[#14B8A6]/20 text-[#14B8A6]'
                            : 'bg-[#FCD34D]/20 text-[#FCD34D]'
                        }`}>
                          {tour.category}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-white">{tour.daysCount} days</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-white font-semibold">₹{tour.price.toLocaleString()}</p>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          tour.isActive
                            ? 'bg-[#10B981]/20 text-[#10B981]'
                            : 'bg-[#EF4444]/20 text-[#EF4444]'
                        }`}>
                          {tour.isActive ? 'Active' : 'Inactive'}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEditTour(tour)}
                            className="p-2 hover:bg-[#14B8A6]/20 text-[#14B8A6] rounded transition"
                          >
                            <Edit2 size={18} />
                          </button>
                          <button
                            onClick={() => handleDeleteTour(tour)}
                            className="p-2 hover:bg-[#EF4444]/20 text-[#EF4444] rounded transition"
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
              {tours.map((tour) => (
                <div key={tour._id} className="bg-[#0F2942] rounded-lg p-4 border border-[#374151]">
                  <h3 className="text-white font-bold mb-2">{tour.title}</h3>
                  <div className="space-y-1 text-sm mb-4">
                    <p className="text-[#94A3B8]">📍 {tour.destination}</p>
                    <p className="text-[#94A3B8]">📅 {tour.daysCount} days</p>
                    <p className="text-[#94A3B8]">💰 ₹{tour.price.toLocaleString()}</p>
                  </div>
                  <div className="flex gap-2 flex-wrap mb-4">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      tour.category === 'leisure'
                        ? 'bg-[#14B8A6]/20 text-[#14B8A6]'
                        : 'bg-[#FCD34D]/20 text-[#FCD34D]'
                    }`}>
                      {tour.category}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      tour.isActive
                        ? 'bg-[#10B981]/20 text-[#10B981]'
                        : 'bg-[#EF4444]/20 text-[#EF4444]'
                    }`}>
                      {tour.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEditTour(tour)}
                      className="flex-1 flex items-center justify-center gap-2 bg-[#14B8A6]/20 text-[#14B8A6] py-2 rounded transition hover:bg-[#14B8A6]/30"
                    >
                      <Edit2 size={16} />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteTour(tour)}
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
      {showModal && (
        <TourModal
          tour={selectedTour}
          onClose={() => setShowModal(false)}
          onSave={() => {
            setShowModal(false);
            fetchTours();
          }}
        />
      )}

      {showDeleteModal && selectedTour && (
        <DeleteModal
          tourTitle={selectedTour.title}
          onConfirm={handleConfirmDelete}
          onCancel={() => setShowDeleteModal(false)}
        />
      )}
    </div>
  );
}