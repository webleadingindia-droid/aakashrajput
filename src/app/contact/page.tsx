import { Instagram, Mail, MessageCircle, Phone } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";
import { contact, site } from "@/data/portfolio";
import { buildMetadata } from "@/lib/seo";
import { digitsOnly } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Casting Enquiry & Contact",
  description: `Send a casting enquiry to ${site.name}. Email, WhatsApp and Instagram contact details.`,
  path: "/contact",
});

export default function ContactPage() {
  const rows = [
    { Icon: Mail, label: contact.email, href: `mailto:${contact.email}` },
    contact.phone && { Icon: Phone, label: contact.phone, href: `tel:${contact.phone.replace(/[^\d+]/g, "")}` },
    contact.whatsapp && { Icon: MessageCircle, label: "Message on WhatsApp", href: `https://wa.me/${digitsOnly(contact.whatsapp)}` },
    contact.instagram && { Icon: Instagram, label: "Instagram", href: contact.instagram },
  ].filter(Boolean) as { Icon: typeof Mail; label: string; href: string }[];

  return (
    <div className="container-x grid gap-16 pb-24 pt-36 md:grid-cols-12 md:pb-40 md:pt-44">
      <div className="md:col-span-5">
        <h1 className="display text-6xl leading-[0.95] sm:text-7xl md:text-8xl">Casting enquiry</h1>
        <p className="mt-8 max-w-sm text-ivory/65">Tell us about the project, the role and your timeline. Direct contact details are below.</p>
        <ul className="mt-12 space-y-5">
          {rows.map(({ Icon, label, href }) => (
            <li key={label}>
              <a href={href} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="group flex items-center gap-4 text-lg">
                <Icon size={20} aria-hidden className="text-gold" />
                <span className="link-line">{label}</span>
              </a>
            </li>
          ))}
        </ul>
        {contact.representation && <p className="mt-10 text-sm text-ivory/55">Represented by {contact.representation}</p>}
      </div>
      <div className="md:col-span-7"><ContactForm /></div>
    </div>
  );
}
