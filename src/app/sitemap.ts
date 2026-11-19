import type { MetadataRoute } from "next";
import { site } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/about", "/modeling", "/acting", "/showreel", "/projects", "/gallery", "/profile", "/contact"];
  return paths.map((p) => ({ url: `${site.url}${p}`, lastModified: new Date(), changeFrequency: "monthly", priority: p === "" ? 1 : 0.7 }));
}
