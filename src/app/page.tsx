import HeroSection from "@/components/home/HeroSection";
import FeaturesBar from "@/components/home/FeaturesBar";
import AboutPreview from "@/components/home/AboutPreview";
import FeaturedMenu from "@/components/home/FeaturedMenu";
import SpecialOffers from "@/components/home/SpecialOffers";
import CoffeeCulture from "@/components/home/CoffeeCulture";
import StatsSection from "@/components/home/StatsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import AwardsStrip from "@/components/home/AwardsStrip";
import GalleryPreview from "@/components/home/GalleryPreview";
import ReservationCTA from "@/components/home/ReservationCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesBar />
      <AboutPreview />
      <FeaturedMenu />
      <SpecialOffers />
      <CoffeeCulture />
      <StatsSection />
      <TestimonialsSection />
      <AwardsStrip />
      <GalleryPreview />
      <ReservationCTA />
    </>
  );
}
