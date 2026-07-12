'use client';

import { Users, Globe, Award, TrendingUp } from 'lucide-react';

export default function AboutStats() {
  const stats = [
    {
      icon: Users,
      value: '10,000+',
      label: 'Happy Travelers',
      color: '#14B8A6',
    },
    {
      icon: Globe,
      value: '50+',
      label: 'Destinations',
      color: '#FCD34D',
    },
    {
      icon: Award,
      value: '4.9★',
      label: 'Average Rating',
      color: '#10B981',
    },
    {
      icon: TrendingUp,
      value: '1000+',
      label: 'Tours Organized',
      color: '#EF4444',
    },
  ];

  return (
    <section className="py-16 bg-[#1a3a52] border-b border-[#374151]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Achievements</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-[#0F2942] rounded-lg p-8 border border-[#374151] text-center hover:border-[#14B8A6] transition"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto"
                  style={{ backgroundColor: `${stat.color}20` }}
                >
                  <Icon size={24} style={{ color: stat.color }} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-[#94A3B8]">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}