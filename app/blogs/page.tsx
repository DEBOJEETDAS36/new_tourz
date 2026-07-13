import BlogsHero from '@/components/blogs/BlogsHero';
import BlogsList from '@/components/blogs/BlogsList';

export const metadata = {
  title: 'Blog | Tourz',
  description: 'Travel tips, destination guides, and inspiring stories from Tourz',
};

export default function BlogsPage() {
  return (
    <div className="bg-[#0F2942]">
      <BlogsHero />
      <BlogsList />
    </div>
  );
}