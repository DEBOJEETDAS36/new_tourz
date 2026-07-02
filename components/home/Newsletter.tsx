'use client';

import { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setStatus('error');
      setMessage('Please enter your email');
      return;
    }

    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setMessage('Thank you for subscribing! Check your email for updates.');
      setEmail('');
    }, 1500);
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-[#14B8A6] to-[#0d9488]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Content Container */}
        <div className="text-center">
          
          {/* Icon */}
          <Mail size={48} className="text-white mx-auto mb-4 opacity-90" />

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Get Exclusive Travel Deals
          </h2>

          {/* Subheading */}
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and receive special discounts, travel tips, and exclusive offers directly in your inbox.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-gray-900 placeholder-gray-500"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="bg-[#FCD34D] hover:bg-[#EAB308] disabled:bg-gray-300 text-[#0F2942] font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition whitespace-nowrap"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>

            {/* Status Messages */}
            {status === 'success' && (
              <div className="flex items-center justify-center gap-2 text-white bg-green-500/20 border border-green-400 rounded-lg p-3">
                <CheckCircle size={20} />
                <span>{message}</span>
              </div>
            )}

            {status === 'error' && (
              <div className="flex items-center justify-center gap-2 text-white bg-red-500/20 border border-red-400 rounded-lg p-3">
                <AlertCircle size={20} />
                <span>{message}</span>
              </div>
            )}
          </form>

          {/* Privacy Notice */}
          <p className="text-sm text-white/80 mt-6">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}