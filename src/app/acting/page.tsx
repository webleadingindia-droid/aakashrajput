import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import VideoCard from "@/components/video/VideoCard";
import { actingCategories, actingVideos, site } from "@/data/portfolio";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Acting Portfolio",
  description: `Acting performances by ${site.name}: emotional, romantic, dramatic, comedy, character and intense roles.`,
  path: "/acting",
});

export default function ActingPage() {
  return (
    <>
      <PageHeader title="Acting" intro="Scenes grouped by the kind of work they show. Select a thumbnail to play." />
      <div className="pb-24 md:pb-32">
        {actingCategories.map((c, i) => {
          const vids = actingVideos.filter((v) => v.category === c.name);
          if (!vids.length) return null;
          return (
            <section key={c.name} aria-labelledby={`cat-${i}`} className={`py-16 md:py-24 ${i % 2 ? "bg-charcoal" : ""}`}>
              <div className={`container-x grid gap-10 md:grid-cols-12 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div className="md:col-span-4">
                  <h2 id={`cat-${i}`} className="display text-5xl leading-none md:text-6xl">{c.name}</h2>
                  <p className="mt-4 max-w-xs text-ivory/60">{c.blurb}</p>
                </div>
                <div className="grid gap-8 sm:grid-cols-2 md:col-span-8">
                  {vids.map((v) => <Reveal key={v.id}><VideoCard video={v} /></Reveal>)}
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
