'use client';

import { AlertCircle, Loader } from 'lucide-react';
import { useState } from 'react';

interface DeleteModalProps {
  bookingId: string;
  customerName: string;
  onConfirm: () => Promise<void>;
  onCancel: () => void;
}

export default function DeleteModal({ bookingId, customerName, onConfirm, onCancel }: DeleteModalProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleConfirm = async () => {
    setIsLoading(true);
    try {
      await onConfirm();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#1a3a52] rounded-lg max-w-md w-full border border-[#374151]">
        
        {/* Content */}
        <div className="p-6">
          
          {/* Icon */}
          <div className="w-12 h-12 bg-[#EF4444]/20 rounded-lg flex items-center justify-center mb-4">
            <AlertCircle size={24} className="text-[#EF4444]" />
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-2">Delete Booking?</h3>

          {/* Message */}
          <p className="text-[#94A3B8] mb-2">
            Are you sure you want to delete booking <span className="font-semibold text-white">{bookingId}</span>?
          </p>
          <p className="text-[#94A3B8] mb-6">
            Customer: <span className="font-semibold text-white">{customerName}</span>
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              onClick={onCancel}
              disabled={isLoading}
              className="flex-1 px-4 py-2 bg-[#0F2942] text-white font-bold rounded-lg hover:bg-[#1a3a52] transition border border-[#374151] disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirm}
              disabled={isLoading}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#EF4444] text-white font-bold rounded-lg hover:bg-[#DC2626] transition disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <Loader size={18} className="animate-spin" />
                  Deleting...
                </>
              ) : (
                'Delete'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}