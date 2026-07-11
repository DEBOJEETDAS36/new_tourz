import LeisureHero from '../../components/leisure/LeisureHero';
import LeisureToursList from '../../components/leisure/LeisureToursList';

export const metadata = {
  title: 'Leisure Tours | Tourz',
  description: 'Explore our curated leisure tour packages to amazing destinations',
};

export default function LeisurePage() {
  return (
    <div className="bg-[#0F2942]">
      <LeisureHero />
      <LeisureToursList />
    </div>
  );
}