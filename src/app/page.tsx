import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import HorizontalShowcase from "@/components/home/HorizontalShowcase";
import { ActingPreview, CastingCTA, Facts, FeaturedShowreel, Intro, SelectedProjects, SocialSection } from "@/components/home/HomeSections";
import { buildMetadata } from "@/lib/seo";
import { modeling, site } from "@/data/portfolio";

export const metadata: Metadata = {
  ...buildMetadata({
  title: `${site.name} — ${site.designation}`,
  description: `Official portfolio of ${site.name}: modeling photographs, acting performances, showreel, projects and casting enquiries.`,
  path: "/",
  }),
  title: { absolute: `${site.name} — ${site.designation}` },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <HorizontalShowcase items={modeling.slice(0, 8)} />
      <ActingPreview />
      <FeaturedShowreel />
      <SelectedProjects />
      <Facts />
      <SocialSection />
      <CastingCTA />
    </>
  );
}
