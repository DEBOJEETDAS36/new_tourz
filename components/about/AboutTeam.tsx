'use client';

import { LinkedIn, Twitter, Mail } from 'lucide-react';

export default function AboutTeam() {
  const teamMembers = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
      bio: '15+ years in travel and tourism industry',
      social: { linkedin: '#', twitter: '#', email: '#' },
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
      bio: 'Expert in tour coordination and logistics',
      social: { linkedin: '#', twitter: '#', email: '#' },
    },
    {
      id: 3,
      name: 'Amit Patel',
      role: 'Chief Experience Officer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop',
      bio: 'Passionate about creating unforgettable journeys',
      social: { linkedin: '#', twitter: '#', email: '#' },
    },
    {
      id: 4,
      name: 'Deepa Gupta',
      role: 'Marketing Director',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
      bio: 'Strategic marketing and brand growth specialist',
      social: { linkedin: '#', twitter: '#', email: '#' },
    },
  ];

  return (
    <section className="py-16 bg-[#0F2942] border-b border-[#374151]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Our Leadership Team</h2>
          <p className="text-[#94A3B8] max-w-2xl mx-auto">
            Dedicated professionals committed to delivering exceptional travel experiences
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-[#1a3a52] rounded-lg overflow-hidden border border-[#374151] hover:border-[#14B8A6] transition"
            >
              {/* Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-[#14B8A6] font-semibold text-sm mb-3">{member.role}</p>
                <p className="text-[#94A3B8] text-sm mb-4">{member.bio}</p>

                {/* Social Links */}
                <div className="flex gap-3">
                  <a
                    href={member.social.linkedin}
                    className="w-8 h-8 bg-[#14B8A6]/20 rounded flex items-center justify-center text-[#14B8A6] hover:bg-[#14B8A6]/30 transition"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="w-8 h-8 bg-[#14B8A6]/20 rounded flex items-center justify-center text-[#14B8A6] hover:bg-[#14B8A6]/30 transition"
                  >
                    <Twitter size={16} />
                  </a>
                  <a
                    href={member.social.email}
                    className="w-8 h-8 bg-[#14B8A6]/20 rounded flex items-center justify-center text-[#14B8A6] hover:bg-[#14B8A6]/30 transition"
                  >
                    <Mail size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}