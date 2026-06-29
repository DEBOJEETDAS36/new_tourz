import Hero from "@/components/home/Hero";
import FeaturedTours from "@/components/home/FeaturedTours";
import PopularDestinations from "@/components/home/PopularDestinations";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedTours />
      <PopularDestinations />
      <WhyChooseUs />
    </div>
  );
}