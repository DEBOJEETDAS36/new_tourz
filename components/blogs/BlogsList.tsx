'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calendar, User, Clock, Eye, ArrowRight, Search } from 'lucide-react';
import { blogPosts, blogCategories } from '@/lib/data/blogs';

export default function BlogsList() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-16 bg-[#0F2942]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Search Bar */}
        <div className="mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-3.5 text-[#94A3B8]" size={20} />
            <input
              type="text"
              placeholder="Search blog posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#1a3a52] text-white px-12 py-3 rounded-lg border border-[#374151] focus:outline-none focus:border-[#14B8A6] placeholder-[#94A3B8]"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <h3 className="text-white font-semibold mb-4">Categories</h3>
          <div className="flex flex-wrap gap-3">
            {blogCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-semibold transition ${
                  selectedCategory === category
                    ? 'bg-[#14B8A6] text-white'
                    : 'bg-[#1a3a52] text-[#94A3B8] hover:bg-[#1a3a52]/80 border border-[#374151]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts */}
        <div className="space-y-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-[#1a3a52] rounded-lg border border-[#374151] overflow-hidden hover:border-[#14B8A6] transition grid grid-cols-1 md:grid-cols-4 gap-0"
              >
                {/* Image */}
                <div className="md:col-span-1 h-48 md:h-auto overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="md:col-span-3 p-8 flex flex-col justify-between">
                  
                  {/* Category & Date */}
                  <div className="flex items-center gap-4 text-sm mb-4">
                    <span className="text-[#14B8A6] font-semibold uppercase">{post.category}</span>
                    <div className="flex items-center gap-2 text-[#94A3B8]">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-bold text-white mb-3 hover:text-[#14B8A6] transition">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-[#94A3B8] mb-6 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Meta & CTA */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-4 text-sm text-[#94A3B8]">
                      <div className="flex items-center gap-1">
                        <User size={14} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye size={14} />
                        <span>{post.views} views</span>
                      </div>
                    </div>

                    {/* Read More Button */}
                    <Link
                      href={`/blogs/${post.slug}`}
                      className="inline-flex items-center gap-2 bg-[#14B8A6] hover:bg-[#0d9488] text-white font-semibold px-6 py-2 rounded-lg transition whitespace-nowrap"
                    >
                      <span>Read More</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-[#374151]">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-[#14B8A6]/20 text-[#14B8A6] px-3 py-1 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-[#94A3B8] text-lg">No blog posts found for your search</p>
            </div>
          )}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-[#14B8A6] to-[#0d9488] rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Subscribe to Our Blog</h3>
          <p className="text-white/90 mb-6">Get travel tips and destination guides delivered to your inbox</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none"
            />
            <button className="bg-white hover:bg-gray-100 text-[#0d9488] font-bold px-6 py-3 rounded-lg transition whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}