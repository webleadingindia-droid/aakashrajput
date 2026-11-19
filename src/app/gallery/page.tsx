import PageHeader from "@/components/ui/PageHeader";
import FilterGallery from "@/components/gallery/FilterGallery";
import { gallery, galleryCategories, site } from "@/data/portfolio";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Gallery",
  description: `Portraits, fashion, lifestyle, behind-the-scenes and professional shoot photographs of ${site.name}.`,
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <PageHeader title="Gallery" intro="Portraits, shoots and moments from behind the camera." />
      <FilterGallery items={gallery} categories={galleryCategories} variant="grid" />
    </>
  );
}
