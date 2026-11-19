import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { contact, site } from "@/data/portfolio";

const cols = [
  { href: "/about", label: "About" },
  { href: "/modeling", label: "Modeling" },
  { href: "/acting", label: "Acting" },
  { href: "/showreel", label: "Showreel" },
  { href: "/projects", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
  { href: "/profile", label: "Casting profile" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const social = [
    { href: contact.instagram, label: "Instagram", Icon: Instagram },
    { href: contact.facebook, label: "Facebook", Icon: Facebook },
    { href: contact.youtube, label: "YouTube", Icon: Youtube },
  ].filter((s) => s.href);

  return (
    <footer className="no-print border-t border-ivory/10 bg-ink">
      <div className="container-x grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:py-24">
        <div>
          <p className="display text-4xl md:text-5xl">{site.name}</p>
          <p className="mt-3 text-sm text-ivory/60">{site.designation}</p>
          <a href={`mailto:${contact.email}`} className="link-line mt-8 text-lg text-gold">{contact.email}</a>
        </div>
        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-ivory/70">
            {cols.map((c) => (
              <li key={c.href}><Link href={c.href} className="link-line hover:text-ivory">{c.label}</Link></li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-3 md:justify-end">
          {social.map(({ href, label, Icon }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
               className="flex h-11 w-11 items-center justify-center border border-ivory/25 transition-colors duration-300 hover:border-gold hover:text-gold">
              <Icon size={18} aria-hidden />
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-ivory/10 py-6 text-center text-xs text-ivory/45">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
