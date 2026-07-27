'use client';

import { useState, useEffect } from 'react';
import { Search, Plus, Edit2, Trash2, Eye, EyeOff, Loader } from 'lucide-react';
import BlogModal from './BlogModal';
import DeleteModal from './DeleteModal';

interface Blog {
  _id: string;
  title: string;
  slug: string;
  category: string;
  author: string;
  image: string;
  excerpt: string;
  content: string;
  tags: string[];
  views: number;
  isPublished: boolean;
  createdAt: string;
}

const CATEGORIES = [
  'Destinations',
  'Travel Tips',
  'Adventure',
  'Culture',
  'Budget Travel',
  'Luxury Travel',
];

export default function BlogsList() {
  const [blogs, setBlog] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [publishedFilter, setPublishedFilter] = useState('All');
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({ total: 0, pages: 0 });

  useEffect(() => {
    fetchBlogs();
  }, [searchQuery, selectedCategory, publishedFilter, page]);

  const fetchBlogs = async () => {
    setIsLoading(true);
    try {
      let url = '/api/admin/blogs?page=' + page;
      if (searchQuery) url += '&search=' + searchQuery;
      if (selectedCategory !== 'All') url += '&category=' + selectedCategory;
      if (publishedFilter !== 'All') url += '&published=' + (publishedFilter === 'Published');

      const response = await fetch(url, {
        credentials: 'include',
      });

      if (!response.ok) throw new Error('Failed to fetch blogs');

      const data = await response.json();
      setBlog(data.blogs);
      setPagination(data.pagination);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddBlog = () => {
    setSelectedBlog(null);
    setShowModal(true);
  };

  const handleEditBlog = (blog: Blog) => {
    setSelectedBlog(blog);
    setShowModal(true);
  };

  const handleDeleteBlog = (blog: Blog) => {
    setSelectedBlog(blog);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = async () => {
    if (!selectedBlog) return;

    try {
      const response = await fetch(`/api/admin/blogs/${selectedBlog._id}`, {
        method: 'DELETE',
        credentials: 'include',
      });

      if (!response.ok) throw new Error('Failed to delete blog');

      setShowDeleteModal(false);
      setSelectedBlog(null);
      fetchBlogs();
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        
        {/* Search & Filters */}
        <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1 sm:flex-none">
            <Search className="absolute left-3 top-3 text-[#94A3B8]" size={20} />
            <input
              type="text"
              placeholder="Search blogs..."
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
            {CATEGORIES.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <select
            value={publishedFilter}
            onChange={(e) => {
              setPublishedFilter(e.target.value);
              setPage(1);
            }}
            className="px-4 py-2 bg-[#1a3a52] border border-[#374151] rounded-lg text-white focus:outline-none focus:border-[#14B8A6]"
          >
            <option value="All">All Status</option>
            <option value="Published">Published</option>
            <option value="Draft">Draft</option>
          </select>
        </div>

        {/* Add Button */}
        <button
          onClick={handleAddBlog}
          className="flex items-center gap-2 bg-[#14B8A6] hover:bg-[#0d9488] text-white font-bold px-6 py-2 rounded-lg transition whitespace-nowrap"
        >
          <Plus size={20} />
          New Blog Post
        </button>
      </div>

      {/* Blogs Table */}
      <div className="bg-[#1a3a52] rounded-lg border border-[#374151] overflow-hidden">
        
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader className="animate-spin text-[#14B8A6]" size={40} />
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-[#94A3B8]">No blog posts found</p>
          </div>
        ) : (
          <>
            {/* Desktop View */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#0F2942] border-b border-[#374151]">
                  <tr>
                    <th className="px-6 py-4 text-left text-white font-semibold">Title</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Category</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Author</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Views</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Status</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Date</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {blogs.map((blog) => (
                    <tr key={blog._id} className="border-b border-[#374151] hover:bg-[#0F2942]/50 transition">
                      <td className="px-6 py-4">
                        <p className="text-white font-medium max-w-xs truncate">{blog.title}</p>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-[#14B8A6] text-sm">{blog.category}</span>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-[#94A3B8] text-sm">{blog.author}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-white">{blog.views}</p>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          blog.isPublished
                            ? 'bg-[#10B981]/20 text-[#10B981]'
                            : 'bg-[#FCD34D]/20 text-[#FCD34D]'
                        }`}>
                          {blog.isPublished ? 'Published' : 'Draft'}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-[#94A3B8] text-sm">{new Date(blog.createdAt).toLocaleDateString()}</p>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEditBlog(blog)}
                            className="p-2 hover:bg-[#14B8A6]/20 text-[#14B8A6] rounded transition"
                            title="Edit"
                          >
                            <Edit2 size={18} />
                          </button>
                          <button
                            onClick={() => handleDeleteBlog(blog)}
                            className="p-2 hover:bg-[#EF4444]/20 text-[#EF4444] rounded transition"
                            title="Delete"
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
              {blogs.map((blog) => (
                <div key={blog._id} className="bg-[#0F2942] rounded-lg p-4 border border-[#374151]">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h3 className="text-white font-bold mb-1 line-clamp-2">{blog.title}</h3>
                      <p className="text-[#94A3B8] text-xs">{blog.author}</p>
                    </div>
                  </div>

                  <div className="space-y-1 text-sm mb-3 pb-3 border-b border-[#374151]">
                    <p className="text-[#94A3B8]">📚 {blog.category}</p>
                    <p className="text-[#94A3B8]">👁️ {blog.views} views</p>
                    <p className="text-[#94A3B8]">📅 {new Date(blog.createdAt).toLocaleDateString()}</p>
                  </div>

                  <div className="flex gap-2 mb-3">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      blog.isPublished
                        ? 'bg-[#10B981]/20 text-[#10B981]'
                        : 'bg-[#FCD34D]/20 text-[#FCD34D]'
                    }`}>
                      {blog.isPublished ? 'Published' : 'Draft'}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEditBlog(blog)}
                      className="flex-1 flex items-center justify-center gap-2 bg-[#14B8A6]/20 text-[#14B8A6] py-2 rounded transition hover:bg-[#14B8A6]/30"
                    >
                      <Edit2 size={16} />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteBlog(blog)}
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
        <BlogModal
          blog={selectedBlog}
          onClose={() => setShowModal(false)}
          onSave={() => {
            setShowModal(false);
            fetchBlogs();
          }}
        />
      )}

      {showDeleteModal && selectedBlog && (
        <DeleteModal
          title={selectedBlog.title}
          onConfirm={handleConfirmDelete}
          onCancel={() => setShowDeleteModal(false)}
        />
      )}
    </div>
  );
}