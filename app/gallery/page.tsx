import GalleryHero from '../../components/gallery/GalleryHero';
import GalleryGrid from '../../components/gallery/GalleryGrid';

export const metadata = {
  title: 'Gallery | Tourz',
  description: 'Stunning photography from our travel destinations',
};

export default function GalleryPage() {
  return (
    <div className="bg-[#0F2942]">
      <GalleryHero />
      <GalleryGrid />
    </div>
  );
}