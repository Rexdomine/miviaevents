import Hero from "@/components/home/Hero";
import Philosophy from "@/components/home/Philosophy";
import FeaturedPortfolio from "@/components/home/FeaturedPortfolio";
import ServicesList from "@/components/home/ServicesList";
import Testimonials from "@/components/home/Testimonials";
import Locations from "@/components/home/Locations";

export default function Home() {
  return (
    <>
      <Hero />
      <Philosophy />
      <FeaturedPortfolio />
      <ServicesList />
      <Testimonials />
      <Locations />
    </>
  );
}
