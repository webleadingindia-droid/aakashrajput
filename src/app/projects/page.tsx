import PageHeader from "@/components/ui/PageHeader";
import ProjectsList from "@/components/portfolio/ProjectsList";
import { projectCategories, projects, site } from "@/data/portfolio";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Projects & Experience",
  description: `Films, web series, advertisements, music videos, fashion campaigns and photoshoots featuring ${site.name}.`,
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHeader title="Projects" intro="Selected work across film, digital, advertising, music and fashion." />
      <ProjectsList projects={projects} categories={projectCategories} />
    </>
  );
}
