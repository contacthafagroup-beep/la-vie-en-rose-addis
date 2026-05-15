import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import FounderSection from "@/components/about/FounderSection";
import OurValues from "@/components/about/OurValues";
import AtmosphereSection from "@/components/about/AtmosphereSection";
import Timeline from "@/components/about/Timeline";
import TeamSection from "@/components/about/TeamSection";

export const metadata: Metadata = {
  title: "About Us | La Vie En Rose Addis — Our Story",
  description:
    "Discover the story behind La Vie En Rose Addis — a Parisian-inspired luxury café in Bole Rwanda, Addis Ababa. Our passion for premium coffee and fine dining.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <FounderSection />
      <OurValues />
      <AtmosphereSection />
      <Timeline />
      <TeamSection />
    </>
  );
}
