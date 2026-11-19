import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";
import SmartImage from "@/components/ui/SmartImage";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";
import Button from "@/components/ui/Button";
import ScrollText from "@/components/ui/ScrollText";
import Magnetic from "@/components/ui/Magnetic";
import Marquee from "@/components/ui/Marquee";
import VideoCard from "@/components/video/VideoCard";
import { actingVideos, contact, profile, projects, showreelMain, site } from "@/data/portfolio";

export function Intro() {
  return (
    <section className="container-x grid gap-12 py-28 md:grid-cols-12 md:py-48">
      <Reveal className="md:col-span-4">
        <div data-cursor="About" className="relative aspect-[3/5] overflow-hidden bg-charcoal md:translate-y-10">
          <SmartImage src="https://plain-apac-prod-public.komododecks.com/202611/19/z95kPToDmJuCiFsjfwtH/image.webp" alt={profile.portraits[0].alt} fill sizes="(min-width:768px) 33vw, 100vw" loading="lazy" className="object-cover" />
        </div>
      </Reveal>
      <div className="md:col-span-7 md:col-start-6">
        <ScrollText text={profile.shortIntro} className="display text-3xl leading-[1.15] sm:text-4xl md:text-6xl" />
        <Link href="/about" className="link-line mt-12 text-sm tracking-wide text-gold">Read the full story</Link>
      </div>
    </section>
  );
}

export function ActingPreview() {
  return (
    <section className="bg-charcoal py-24 md:py-36">
      <div className="container-x">
        <SectionHead title="Acting" href="/acting" linkLabel="All performances" />
        <div className="grid gap-10 md:grid-cols-3">
          {actingVideos.slice(0, 3).map((v, i) => (
            <Reveal key={v.id} delay={i * 0.08}><VideoCard video={v} /></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturedShowreel() {
  return (
    <section className="container-x py-24 md:py-40">
      <SectionHead title="Showreel" href="/showreel" linkLabel="More video" />
      <Reveal><VideoCard video={showreelMain} variant="feature" /></Reveal>
    </section>
  );
}

export function SelectedProjects() {
  return (
    <section className="container-x pb-24 md:pb-40">
      <SectionHead title="Selected projects" href="/projects" linkLabel="All projects" />
      <ul className="border-t border-ivory/15">
        {projects.slice(0, 4).map((p) => (
          <li key={p.title} className="grid gap-1 border-b border-ivory/15 py-6 md:grid-cols-12 md:items-baseline md:gap-6">
            <span className="text-sm text-ivory/50 md:col-span-1">{p.year}</span>
            <span className="display text-2xl md:col-span-6 md:text-4xl">{p.title}</span>
            <span className="text-sm text-ivory/60 md:col-span-3">{p.role}</span>
            <span className="text-sm text-ivory/45 md:col-span-2 md:text-right">{p.category}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Facts() {
  const items = [
    { label: "Age", value: profile.age },
    { label: "Height", value: profile.height },
    { label: "Based in", value: profile.location },
    { label: "Languages", value: String(profile.languages.length) },
  ];
  return (
    <section aria-label="At a glance" className="container-x pb-24 md:pb-40">
      <dl className="grid grid-cols-2 border-y border-ivory/15 md:grid-cols-4">
        {items.map((f) => (
          <div key={f.label} className="border-ivory/15 p-6 md:border-r md:last:border-r-0 md:p-10">
            <dd className="display text-4xl md:text-6xl">{f.value}</dd>
            <dt className="mt-2 text-sm text-ivory/55">{f.label}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function SocialSection() {
  const items = [
    { label: "Instagram", href: contact.instagram, Icon: Instagram },
    { label: "Facebook", href: contact.facebook, Icon: Facebook },
    { label: "YouTube", href: contact.youtube, Icon: Youtube },
  ].filter((s) => s.href);
  return (
    <section className="container-x pb-24 md:pb-40">
      <SectionHead title="Follow along" />
      <ul className="grid gap-px bg-ivory/15 md:grid-cols-3">
        {items.map(({ label, href, Icon }) => (
          <li key={label} className="bg-ink">
            <a href={href} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-8 transition-colors duration-500 hover:bg-charcoal">
              <span className="display text-3xl">{label}</span>
              <Icon aria-hidden className="text-ivory/50 transition-colors group-hover:text-gold" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function CastingCTA() {
  return (
    <section className="relative overflow-hidden border-t border-ivory/10 py-28 md:py-44">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 text-[clamp(8rem,24vw,24rem)] leading-none opacity-[0.07]">
        <Marquee words={["Casting", "Enquiry", "Contact"]} outline />
      </div>
      <div className="container-x relative text-center">
        <Reveal>
          <h2 className="display mx-auto max-w-5xl text-[clamp(3.5rem,10vw,9rem)] leading-[0.9] tracking-[-0.03em]">Casting a role?</h2>
          <p className="mx-auto mt-8 max-w-md text-ivory/65">Send the project details and {site.name.split(" ")[0]} will get back to you.</p>
          <div className="mt-12"><Magnetic><Button href="/contact" variant="solid">Send a casting enquiry</Button></Magnetic></div>
        </Reveal>
      </div>
    </section>
  );
}