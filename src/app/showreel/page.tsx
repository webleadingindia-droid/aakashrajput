import PageHeader from "@/components/ui/PageHeader";
import VideoCard from "@/components/video/VideoCard";
import { showreelMain, showreelSections, site } from "@/data/portfolio";
import { buildMetadata, jsonLd } from "@/lib/seo";
import { toEmbedUrl } from "@/lib/video";

export const metadata = buildMetadata({
  title: "Showreel",
  description: `Acting showreel, modeling walk, introduction video and audition clips of ${site.name}.`,
  path: "/showreel",
});

export default function ShowreelPage() {
  // VideoObject schema is emitted ONLY for real, embeddable videos that have an upload date.
  const all = [showreelMain, ...showreelSections.flatMap((s) => s.videos)];
  const schemas = all
    .filter((v) => toEmbedUrl(v.url) && v.uploadDate)
    .map((v) => ({
      "@context": "https://schema.org", "@type": "VideoObject",
      name: v.title, description: v.description, thumbnailUrl: `${site.url}${v.thumb}`,
      uploadDate: v.uploadDate, embedUrl: v.url.replace("watch?v=", "embed/"),
    }));

  return (
    <>
      <PageHeader title="Showreel" intro="The main reel first, then walks, introductions, auditions and highlights." />
      <section className="container-x pb-20 md:pb-28"><VideoCard video={showreelMain} variant="feature" /></section>
      <div className="container-x space-y-20 pb-24 md:space-y-28 md:pb-32">
        {showreelSections.map((s) => (
          <section key={s.title} aria-labelledby={s.title} className="grid gap-8 border-t border-ivory/15 pt-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <h2 id={s.title} className="display text-4xl md:text-5xl">{s.title}</h2>
              <p className="mt-3 text-ivory/55">{s.blurb}</p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 md:col-span-8">
              {s.videos.map((v) => <VideoCard key={v.id} video={v} />)}
            </div>
          </section>
        ))}
      </div>
      {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(s) }} />)}
    </>
  );
}
