import { notFound } from 'next/navigation';
import { tourDetailsMap } from '@/lib/data/tourDetails';
import TourDetailHero from '@/components/tours/TourDetailHero';
import TourQuickInfo from '../../../components/tours/TourQuickInfo';
import TourDescription from '@/components/tours/TourDescription';
import TourHighlights from '@/components/tours/TourHighlights';
import TourItinerary from '@/components/tours/TourItinerary';
import TourInclusions from '@/components/tours/TourInclusions';
import TourPricing from '@/components/tours/TourPricing';
import TourGallery from '@/components/tours/TourGallery';
import TourTestimonials from '@/components/tours/TourTestimonials';
// import TourImportantNotes from '@/components/tours/TourImportantNotes';
// import RelatedTours from '@/components/tours/RelatedTours';

interface TourPageProps {
  params: Promise<{ id: string }>;
}

export default async function TourDetailPage({ params }: TourPageProps) {
  const { id } = await params;
  const tour = tourDetailsMap[id];

  if (!tour) {
    notFound();
  }

  return (
    <div className="bg-[#0F2942]">
      <TourDetailHero tour={tour} />
      <TourQuickInfo tour={tour} />
      <TourDescription tour={tour} />
      <TourHighlights tour={tour} />
      <TourItinerary tour={tour} />
      <TourInclusions tour={tour} />
      <TourPricing tour={tour} />
      <TourGallery tour={tour} />
      <TourTestimonials tour={tour} />
    </div>
  );
}