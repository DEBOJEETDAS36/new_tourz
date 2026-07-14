'use client';

import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 98765 43210',
      subtext: 'Available 24/7',
      color: '#14B8A6',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'support@tourz.com',
      subtext: 'Response within 24 hours',
      color: '#FCD34D',
    },
    {
      icon: MapPin,
      title: 'Office Address',
      content: 'Kolkata, India',
      subtext: 'Multiple locations across India',
      color: '#10B981',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: '9:00 AM - 10:00 PM',
      subtext: 'Monday - Sunday',
      color: '#EF4444',
    },
  ];

  return (
    <div className="space-y-6">
      
      {/* Contact Details */}
      {contactDetails.map((detail, index) => {
        const Icon = detail.icon;
        return (
          <div
            key={index}
            className="bg-[#1a3a52] rounded-lg p-6 border border-[#374151] hover:border-[#14B8A6] transition"
          >
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
              style={{ backgroundColor: `${detail.color}20` }}
            >
              <Icon size={24} style={{ color: detail.color }} />
            </div>
            <h3 className="text-white font-bold mb-2">{detail.title}</h3>
            <p className="text-white font-semibold text-lg">{detail.content}</p>
            <p className="text-[#94A3B8] text-sm mt-1">{detail.subtext}</p>
          </div>
        );
      })}

      {/* Social Links */}
      <div className="bg-[#1a3a52] rounded-lg p-6 border border-[#374151]">
        <h3 className="text-white font-bold mb-4">Follow Us</h3>
        <div className="grid grid-cols-2 gap-3">
          <a href="#" className="bg-[#0F2942] hover:bg-[#14B8A6]/20 text-[#14B8A6] font-semibold py-2 px-4 rounded-lg transition text-center">
            Facebook
          </a>
          <a href="#" className="bg-[#0F2942] hover:bg-[#14B8A6]/20 text-[#14B8A6] font-semibold py-2 px-4 rounded-lg transition text-center">
            Instagram
          </a>
          <a href="#" className="bg-[#0F2942] hover:bg-[#14B8A6]/20 text-[#14B8A6] font-semibold py-2 px-4 rounded-lg transition text-center">
            Twitter
          </a>
          <a href="#" className="bg-[#0F2942] hover:bg-[#14B8A6]/20 text-[#14B8A6] font-semibold py-2 px-4 rounded-lg transition text-center">
            YouTube
          </a>
        </div>
      </div>

      {/* Quick Support */}
      <div className="bg-gradient-to-r from-[#14B8A6] to-[#0d9488] rounded-lg p-6 text-white">
        <div className="flex items-start gap-4">
          <MessageCircle size={24} className="flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-bold mb-2">Need Quick Help?</h4>
            <p className="text-sm text-white/90 mb-4">
              Chat with our travel experts for instant answers to your questions.
            </p>
            <button className="bg-white text-[#0d9488] font-bold py-2 px-6 rounded-lg hover:bg-gray-100 transition text-sm">
              Start Live Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}