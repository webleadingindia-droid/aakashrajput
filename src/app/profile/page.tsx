import SmartImage from "@/components/ui/SmartImage";
import PrintButton from "@/components/portfolio/PrintButton";
import { contact, profile, site } from "@/data/portfolio";
import { buildMetadata, jsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Casting Profile",
  description: `Professional casting card for ${site.name}: age, height, location, languages, skills and contact details.`,
  path: "/profile",
  image: profile.portrait.src,
});

export default function ProfilePage() {
  const rows: [string, string][] = [
    ["Profession", site.designation.replace(/ \| /g, ", ")],
    ["Age", profile.age], ["Height", profile.height], ["Location", profile.location],
    ["Languages", profile.languages.join(", ")],
    ["Skin tone", profile.skinTone], ["Hair colour", profile.hairColour], ["Eye colour", profile.eyeColour],
    ["Acting skills", profile.actingAbilities.join(", ")],
    ["Modeling", profile.modelingCategories.join(", ")],
    ["Email", contact.email],
  ].filter(([, v]) => v) as [string, string][];

  const schema = {
    "@context": "https://schema.org", "@type": "ProfilePage", url: `${site.url}/profile`,
    mainEntity: { "@type": "Person", name: site.name, jobTitle: "Actor and Model", email: contact.email, height: profile.height },
  };

  return (
    <div className="bg-ink">
      <div aria-hidden className="no-print h-24" />
      <div className="bg-ivory pb-24 pt-12 text-ink print:pt-0 md:pt-16">
      <div className="container-x">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <h1 className="display text-6xl leading-none sm:text-7xl md:text-8xl">{site.name}</h1>
          <PrintButton />
        </div>

        <div className="grid gap-10 md:grid-cols-12">
          <div className="grid grid-cols-3 gap-3 md:col-span-6">
            <div className="relative col-span-3 aspect-[4/5] overflow-hidden bg-bone">
              <SmartImage src={profile.portrait.src} alt={profile.portrait.alt} fill priority sizes="(min-width:768px) 50vw, 100vw" className="object-cover" />
            </div>
            {profile.portraits.map((p) => (
              <div key={p.src} className="relative col-span-1 aspect-[4/5] overflow-hidden bg-bone">
                <SmartImage src={p.src} alt={p.alt} fill sizes="20vw" loading="lazy" className="object-cover" />
              </div>
            ))}
          </div>

          <dl className="divide-y divide-ink/15 border-y border-ink/15 md:col-span-6 md:self-start">
            {rows.map(([k, v]) => (
              <div key={k} className="grid grid-cols-3 gap-4 py-4"><dt className="text-sm text-ink/55">{k}</dt><dd className="col-span-2">{v}</dd></div>
            ))}
          </dl>
        </div>
        <p className="no-print mt-8 text-sm text-ink/55">Tip: choose “Save as PDF” in the print dialog to download this card.</p>
      </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
    </div>
  );
}
