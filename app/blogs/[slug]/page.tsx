import Link from 'next/link';
import { blogPosts } from '@/lib/data/blogs';
import { notFound } from 'next/navigation';
import { Calendar, User, Clock, Eye, ArrowLeft } from 'lucide-react';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Get related posts
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="bg-[#0F2942] min-h-screen">
      {/* Header */}
      <div className="relative h-96 bg-cover bg-center overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Back Button */}
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-[#14B8A6] hover:text-[#0d9488] font-semibold mb-6 transition"
        >
          <ArrowLeft size={20} />
          Back to Blogs
        </Link>

        {/* Article */}
        <article>
          
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6 pb-6 border-b border-[#374151]">
            <span className="text-[#14B8A6] font-semibold uppercase text-sm">{post.category}</span>
            <div className="flex items-center gap-2 text-[#94A3B8] text-sm">
              <Calendar size={16} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2 text-[#94A3B8] text-sm">
              <User size={16} />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2 text-[#94A3B8] text-sm">
              <Clock size={16} />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-2 text-[#94A3B8] text-sm">
              <Eye size={16} />
              <span>{post.views} views</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold text-white mb-6">{post.title}</h1>

          {/* Content */}
          <div className="prose prose-invert max-w-none mb-8">
            <p className="text-[#94A3B8] text-lg leading-relaxed whitespace-pre-wrap">
              {post.content}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 py-6 border-t border-b border-[#374151]">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm bg-[#14B8A6]/20 text-[#14B8A6] px-4 py-2 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relPost) => (
                <Link
                  key={relPost.id}
                  href={`/blogs/${relPost.slug}`}
                  className="bg-[#1a3a52] rounded-lg overflow-hidden border border-[#374151] hover:border-[#14B8A6] transition group"
                >
                  <div className="h-40 overflow-hidden">
                    <img
                      src={relPost.image}
                      alt={relPost.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-[#14B8A6] font-semibold text-xs uppercase">{relPost.category}</span>
                    <h3 className="text-white font-bold mt-2 group-hover:text-[#14B8A6] transition line-clamp-2">
                      {relPost.title}
                    </h3>
                    <p className="text-[#94A3B8] text-sm mt-2">{relPost.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}