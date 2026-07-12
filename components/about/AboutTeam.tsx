'use client';

// Only import native UI icons; brand logos have been completely removed from Lucide
import { Mail } from 'lucide-react';

export default function AboutTeam() {
  const teamMembers = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      image: 'https://unsplash.com',
      bio: '15+ years in travel and tourism industry',
      social: { linkedin: '#', twitter: '#', email: 'mailto:rajesh@example.com' },
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Head of Operations',
      image: 'https://unsplash.com',
      bio: 'Expert in tour coordination and logistics',
      social: { linkedin: '#', twitter: '#', email: 'mailto:priya@example.com' },
    },
    {
      id: 3,
      name: 'Amit Patel',
      role: 'Chief Experience Officer',
      image: 'https://unsplash.com',
      bio: 'Passionate about creating unforgettable journeys',
      social: { linkedin: '#', twitter: '#', email: 'mailto:amit@example.com' },
    },
    {
      id: 4,
      name: 'Deepa Gupta',
      role: 'Marketing Director',
      image: 'https://unsplash.com',
      bio: 'Strategic marketing and brand growth specialist',
      social: { linkedin: '#', twitter: '#', email: 'mailto:deepa@example.com' },
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
                  {/* LinkedIn - Custom SVG */}
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-[#14B8A6]/20 rounded flex items-center justify-center text-[#14B8A6] hover:bg-[#14B8A6]/30 transition"
                  >
                    <svg 
                      className="w-4 h-4 fill-current" 
                      viewBox="0 0 24 24" 
                      aria-hidden="true"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>

                  {/* Twitter / X - Custom SVG */}
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-[#14B8A6]/20 rounded flex items-center justify-center text-[#14B8A6] hover:bg-[#14B8A6]/30 transition"
                  >
                    <svg 
                      className="w-4 h-4 fill-current" 
                      viewBox="0 0 24 24" 
                      aria-hidden="true"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>

                  {/* Email */}
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
