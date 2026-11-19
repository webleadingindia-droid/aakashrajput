import type { Metadata } from "next";
import { contact, profile, site } from "@/data/portfolio";

export function buildMetadata(opts: { title: string; description: string; path: string; image?: string }): Metadata {
  const url = `${site.url}${opts.path}`;
  const image = opts.image ?? site.ogImage;
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${opts.title} | ${site.name}`,
      description: opts.description,
      url,
      siteName: site.name,
      locale: site.locale,
      type: "website",
      images: [{ url: image, alt: `${site.name} — ${site.designation}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${opts.title} | ${site.name}`,
      description: opts.description,
      images: [image],
    },
  };
}

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  image: `${site.url}${profile.portrait.src}`,
  jobTitle: "Actor and Model",
  email: contact.email,
  sameAs: [contact.instagram, contact.facebook, contact.youtube].filter(Boolean),
};

export const jsonLd = (data: object) => JSON.stringify(data).replace(/</g, "\\u003c");
