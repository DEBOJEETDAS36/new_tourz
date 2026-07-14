'use client';

import { useState } from 'react';
import { Mail, Phone, MessageSquare } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    tourInterest: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate API call
    setTimeout(() => {
      if (formData.name && formData.email && formData.message) {
        setStatus('success');
        setMessage('Thank you for your message! We\'ll get back to you shortly.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          tourInterest: '',
        });
      } else {
        setStatus('error');
        setMessage('Please fill in all required fields.');
      }
    }, 1500);
  };

  return (
    <div className="bg-[#1a3a52] rounded-lg p-8 border border-[#374151]">
      
      <h2 className="text-3xl font-bold text-white mb-8">Send us a Message</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Name */}
        <div>
          <label className="block text-white font-semibold mb-2">Full Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full px-4 py-3 bg-[#0F2942] border border-[#374151] rounded-lg text-white placeholder-[#94A3B8] focus:outline-none focus:border-[#14B8A6]"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-white font-semibold mb-2">Email Address *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="w-full px-4 py-3 bg-[#0F2942] border border-[#374151] rounded-lg text-white placeholder-[#94A3B8] focus:outline-none focus:border-[#14B8A6]"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-white font-semibold mb-2">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className="w-full px-4 py-3 bg-[#0F2942] border border-[#374151] rounded-lg text-white placeholder-[#94A3B8] focus:outline-none focus:border-[#14B8A6]"
          />
        </div>

        {/* Subject */}
        <div>
          <label className="block text-white font-semibold mb-2">Subject *</label>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#0F2942] border border-[#374151] rounded-lg text-white focus:outline-none focus:border-[#14B8A6]"
            required
          >
            <option value="">Select a subject</option>
            <option value="tour-inquiry">Tour Inquiry</option>
            <option value="booking">Booking Question</option>
            <option value="group-booking">Group Booking</option>
            <option value="mice-event">MICE Event</option>
            <option value="feedback">Feedback</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Tour Interest */}
        <div>
          <label className="block text-white font-semibold mb-2">Interested In</label>
          <select
            name="tourInterest"
            value={formData.tourInterest}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#0F2942] border border-[#374151] rounded-lg text-white focus:outline-none focus:border-[#14B8A6]"
          >
            <option value="">Select a destination</option>
            <option value="bali">Bali Beach Paradise</option>
            <option value="swiss-alps">Swiss Alps Adventure</option>
            <option value="egypt">Egypt Ancient Wonders</option>
            <option value="paris">Paris Romance Tour</option>
            <option value="maldives">Maldives Tropical Escape</option>
            <option value="tokyo">Tokyo Tech & Culture</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="block text-white font-semibold mb-2">Message *</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your travel plans, questions, or feedback..."
            rows={6}
            className="w-full px-4 py-3 bg-[#0F2942] border border-[#374151] rounded-lg text-white placeholder-[#94A3B8] focus:outline-none focus:border-[#14B8A6] resize-none"
            required
          />
        </div>

        {/* Status Messages */}
        {status === 'success' && (
          <div className="bg-[#10B981]/20 border border-[#10B981] rounded-lg p-4 text-[#10B981]">
            <p className="font-semibold">{message}</p>
          </div>
        )}

        {status === 'error' && (
          <div className="bg-[#EF4444]/20 border border-[#EF4444] rounded-lg p-4 text-[#EF4444]">
            <p className="font-semibold">{message}</p>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-gradient-to-r from-[#14B8A6] to-[#0d9488] hover:from-[#0d9488] hover:to-[#06b494] disabled:opacity-50 text-white font-bold py-3 rounded-lg transition"
        >
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </button>

        {/* Required Note */}
        <p className="text-[#94A3B8] text-sm">* Required fields</p>
      </form>
    </div>
  );
}