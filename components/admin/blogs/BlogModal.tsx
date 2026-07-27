'use client';

import { useState, useEffect } from 'react';
import { X, Loader } from 'lucide-react';

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
}

interface BlogModalProps {
  blog: Blog | null;
  onClose: () => void;
  onSave: () => void;
}

const CATEGORIES = [
  'Destinations',
  'Travel Tips',
  'Adventure',
  'Culture',
  'Budget Travel',
  'Luxury Travel',
];

export default function BlogModal({ blog, onClose, onSave }: BlogModalProps) {
  const [formData, setFormData] = useState<Partial<Blog>>({
    title: '',
    slug: '',
    category: 'Destinations',
    author: '',
    image: '',
    excerpt: '',
    content: '',
    tags: [],
    isPublished: false,
  });

  const [tagsInput, setTagsInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (blog) {
      setFormData(blog);
      setTagsInput(blog.tags.join(', '));
    }
  }, [blog]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSlugChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData(prev => ({
      ...prev,
      slug: value.toLowerCase().replace(/\s+/g, '-'),
    }));
  };

  const generateSlug = () => {
    const slug = (formData.title || '')
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');
    setFormData(prev => ({
      ...prev,
      slug,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const submitData = {
        ...formData,
        tags: tagsInput.split(',').map(t => t.trim()).filter(t => t),
      };

      const url = blog ? `/api/admin/blogs/${blog._id}` : '/api/admin/blogs';
      const method = blog ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submitData),
        credentials: 'include',
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to save blog');
      }

      onSave();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#1a3a52] rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[#374151]">
        
        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between bg-[#0F2942] border-b border-[#374151] p-6">
          <h2 className="text-2xl font-bold text-white">
            {blog ? 'Edit Blog Post' : 'New Blog Post'}
          </h2>
          <button
            onClick={onClose}
            className="text-[#94A3B8] hover:text-white transition"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          
          {error && (
            <div className="bg-[#EF4444]/20 border border-[#EF4444] rounded-lg p-4 text-[#EF4444] text-sm">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Title */}
            <div className="sm:col-span-2">
              <label className="block text-white font-semibold mb-2 text-sm">Title *</label>
              <input
                type="text"
                name="title"
                value={formData.title || ''}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#0F2942] border border-[#374151] rounded-lg text-white focus:outline-none focus:border-[#14B8A6]"
                required
              />
            </div>

            {/* Slug */}
            <div className="sm:col-span-2">
              <label className="block text-white font-semibold mb-2 text-sm">Slug *</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  name="slug"
                  value={formData.slug || ''}
                  onChange={handleSlugChange}
                  className="flex-1 px-4 py-2 bg-[#0F2942] border border-[#374151] rounded-lg text-white focus:outline-none focus:border-[#14B8A6]"
                  required
                />
                <button
                  type="button"
                  onClick={generateSlug}
                  className="px-4 py-2 bg-[#14B8A6]/20 text-[#14B8A6] rounded-lg hover:bg-[#14B8A6]/30 transition font-semibold text-sm"
                >
                  Generate
                </button>
              </div>
            </div>

            {/* Author */}
            <div>
              <label className="block text-white font-semibold mb-2 text-sm">Author *</label>
              <input
                type="text"
                name="author"
                value={formData.author || ''}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#0F2942] border border-[#374151] rounded-lg text-white focus:outline-none focus:border-[#14B8A6]"
                required
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-white font-semibold mb-2 text-sm">Category *</label>
              <select
                name="category"
                value={formData.category || 'Destinations'}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#0F2942] border border-[#374151] rounded-lg text-white focus:outline-none focus:border-[#14B8A6]"
              >
                {CATEGORIES.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Image URL */}
            <div className="sm:col-span-2">
              <label className="block text-white font-semibold mb-2 text-sm">Featured Image URL *</label>
              <input
                type="url"
                name="image"
                value={formData.image || ''}
                onChange={handleChange}
                placeholder="https://..."
                className="w-full px-4 py-2 bg-[#0F2942] border border-[#374151] rounded-lg text-white focus:outline-none focus:border-[#14B8A6]"
                required
              />
            </div>

            {/* Excerpt */}
            <div className="sm:col-span-2">
              <label className="block text-white font-semibold mb-2 text-sm">Excerpt *</label>
              <textarea
                name="excerpt"
                value={formData.excerpt || ''}
                onChange={handleChange}
                rows={2}
                className="w-full px-4 py-2 bg-[#0F2942] border border-[#374151] rounded-lg text-white focus:outline-none focus:border-[#14B8A6] resize-none"
                required
              />
            </div>

            {/* Content */}
            <div className="sm:col-span-2">
              <label className="block text-white font-semibold mb-2 text-sm">Content *</label>
              <textarea
                name="content"
                value={formData.content || ''}
                onChange={handleChange}
                rows={8}
                className="w-full px-4 py-2 bg-[#0F2942] border border-[#374151] rounded-lg text-white focus:outline-none focus:border-[#14B8A6] resize-none font-mono text-sm"
                required
              />
            </div>

            {/* Tags */}
            <div className="sm:col-span-2">
              <label className="block text-white font-semibold mb-2 text-sm">Tags (comma separated)</label>
              <input
                type="text"
                value={tagsInput}
                onChange={(e) => setTagsInput(e.target.value)}
                placeholder="e.g., Beach, Travel, Adventure"
                className="w-full px-4 py-2 bg-[#0F2942] border border-[#374151] rounded-lg text-white focus:outline-none focus:border-[#14B8A6]"
              />
            </div>

            {/* Publish */}
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="isPublished"
                  checked={formData.isPublished || false}
                  onChange={handleChange}
                  className="w-4 h-4 rounded border-[#374151] bg-[#0F2942] accent-[#14B8A6] cursor-pointer"
                />
                <span className="text-white font-semibold text-sm">Publish</span>
              </label>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-2 bg-[#1a3a52] text-white font-bold rounded-lg hover:bg-[#0F2942] transition border border-[#374151]"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-2 bg-[#14B8A6] text-white font-bold rounded-lg hover:bg-[#0d9488] transition disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <Loader size={20} className="animate-spin" />
                  Saving...
                </>
              ) : (
                'Save Blog'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}