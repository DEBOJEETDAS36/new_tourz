import MiceHero from '../../components/mice/MiceHero';
import MiceToursList from '../../components/mice/MiceToursList';

export const metadata = {
  title: 'MICE Events | Tourz',
  description: 'Corporate meetings, incentive programs, conferences, and exhibitions',
};

export default function MicePage() {
  return (
    <div className="bg-[#0F2942]">
      <MiceHero />
      <MiceToursList />
    </div>
  );
}