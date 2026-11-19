import SmartImage from "@/components/ui/SmartImage";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { profile, site } from "@/data/portfolio";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About",
  description: `Biography of ${site.name}: background, languages, acting abilities, modeling categories and skills.`,
  path: "/about",
  image: profile.portrait.src,
});

const Facts = () => {
  const rows: [string, string][] = [
    ["Age", profile.age], ["Height", profile.height], ["Location", profile.location], ["Languages", profile.languages.join(", ")],
  ];
  return (
    <dl className="mt-12 divide-y divide-ivory/15 border-y border-ivory/15">
      {rows.map(([k, v]) => (
        <div key={k} className="grid grid-cols-3 gap-4 py-4 text-sm"><dt className="text-ivory/50">{k}</dt><dd className="col-span-2">{v}</dd></div>
      ))}
    </dl>
  );
};

const Tags = ({ title, items }: { title: string; items: string[] }) => (
  <div className="mt-12">
    <h2 className="display text-3xl">{title}</h2>
    <ul className="mt-5 flex flex-wrap gap-2">
      {items.map((i) => <li key={i} className="border border-ivory/25 px-4 py-2 text-sm text-ivory/80">{i}</li>)}
    </ul>
  </div>
);

export default function AboutPage() {
  return (
    <div className="container-x grid gap-12 pb-24 pt-32 md:grid-cols-12 md:gap-16 md:pb-40 md:pt-44">
      <div className="md:col-span-5">
        <div className="md:sticky md:top-28">
          <div className="relative aspect-[4/5] overflow-hidden bg-charcoal">
            <SmartImage src={profile.portrait.src} alt={profile.portrait.alt} fill priority sizes="(min-width:768px) 40vw, 100vw" className="object-cover" />
          </div>
        </div>
      </div>

      <article className="md:col-span-7">
        <h1 className="display text-6xl leading-[0.95] sm:text-7xl md:text-8xl">{site.name}</h1>
        <p className="mt-4 text-sm tracking-[0.25em] text-gold">{site.designation}</p>
        <p className="display mt-10 text-3xl leading-snug md:text-4xl">{profile.shortIntro}</p>
        <div className="mt-10 max-w-xl space-y-5 leading-[1.8] text-ivory/70">
          {profile.bio.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <Facts />
        <Tags title="Acting abilities" items={profile.actingAbilities} />
        <Tags title="Modeling categories" items={profile.modelingCategories} />
        <Tags title="Special skills" items={profile.skills} />

        <div className="mt-16">
          <h2 className="display text-3xl">Professional journey</h2>
          <ol className="mt-6 border-l border-gold/40">
            {profile.journey.map((j, i) => (
              <li key={i} className="relative pb-8 pl-8 last:pb-0">
                <span aria-hidden className="absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full bg-gold" />
                <p className="text-sm text-gold">{j.year}</p>
                <p className="display text-2xl">{j.title}</p>
                <p className="mt-1 max-w-md text-sm leading-relaxed text-ivory/60">{j.text}</p>
              </li>
            ))}
          </ol>
        </div>

        <Reveal className="mt-16 flex flex-wrap gap-4">
          <Button href="/profile" variant="solid">Casting profile</Button>
          <Button href="/contact">Get in touch</Button>
        </Reveal>
      </article>
    </div>
  );
}
