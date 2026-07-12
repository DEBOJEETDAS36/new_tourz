import AboutHero from '@/components/about/AboutHero';
import AboutMission from '@/components/about/AboutMission';
import AboutStats from '@/components/about/AboutStats';
import AboutTeam from '@/components/about/AboutTeam';
// import AboutValues from '@/components/about/AboutValues';
// import AboutCTA from '@/components/about/AboutCTA';

export const metadata = {
  title: 'About Us | Tourz',
  description: 'Learn about Tourz - Your trusted travel partner for amazing adventures',
};

export default function AboutPage() {
  return (
    <div className="bg-[#0F2942]">
      <AboutHero />
      <AboutMission />
      <AboutStats />
      <AboutTeam />
      {/* <AboutValues />
      <AboutCTA /> */}
    </div>
  );
}