'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import BookingsList from '../../../../components/admin/bookings/BookingsList';
import { Loader, ChevronLeft } from 'lucide-react';

export default function BookingsManagementPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/me', {
          credentials: 'include',
        });

        if (!response.ok) {
          router.push('/admin/login');
          return;
        }

        setIsAuthenticated(true);
      } catch (error) {
        router.push('/admin/login');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0F2942] flex items-center justify-center">
        <Loader className="animate-spin text-[#14B8A6]" size={40} />
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#0F2942]">
      {/* Header */}
      <div className="bg-[#1a3a52] border-b border-[#374151] px-8 py-6">
        <button
          onClick={() => router.push('/admin/dashboard')}
          className="flex items-center gap-2 text-[#14B8A6] hover:text-white transition mb-4"
        >
          <ChevronLeft size={20} />
          Back to Dashboard
        </button>
        <h1 className="text-3xl font-bold text-white">Manage Bookings</h1>
        <p className="text-[#94A3B8] mt-2">View, update, and manage customer bookings</p>
      </div>

      {/* Content */}
      <div className="p-8">
        <BookingsList />
      </div>
    </div>
  );
}