import PageHeader from "@/components/ui/PageHeader";
import FilterGallery from "@/components/gallery/FilterGallery";
import { modeling, modelingCategories, site } from "@/data/portfolio";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Model Portfolio",
  description: `Fashion, commercial, lifestyle, traditional, fitness, portrait and full body modeling photographs of ${site.name}.`,
  path: "/modeling",
});

export default function ModelingPage() {
  return (
    <>
      <PageHeader title="Modeling" intro="Fashion, commercial, lifestyle, traditional, fitness, portrait and full body work. Select a category, then tap any photograph to view it full size." />
      <FilterGallery items={modeling} categories={modelingCategories} variant="masonry" />
    </>
  );
}
