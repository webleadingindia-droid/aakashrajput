"use client";

import { useState } from "react";
import { contact, projectTypes } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type Values = { name: string; email: string; phone: string; company: string; type: string; message: string };
type Errors = Partial<Record<keyof Values, string>>;

const empty: Values = { name: "", email: "", phone: "", company: "", type: projectTypes[0], message: "" };

function validate(v: Values): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = "Enter a valid email address.";
  if (v.phone.trim() && !/^[+\d][\d\s()-]{6,}$/.test(v.phone.trim())) e.phone = "Enter a valid phone number, or leave it blank.";
  if (v.message.trim().length < 10) e.message = "Write at least 10 characters about the role or project.";
  return e;
}

const field = "w-full border-0 border-b border-ivory/30 bg-transparent px-0 py-3 text-base text-ivory placeholder:text-ivory/30 focus:border-gold focus:outline-none focus:ring-0";

export default function ContactForm() {
  const [v, setV] = useState<Values>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [opened, setOpened] = useState(false);

  const set = (k: keyof Values) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setV((p) => ({ ...p, [k]: e.target.value }));

  const body = () => {
    const lines: string[] = [`Name: ${v.name}`, `Email: ${v.email}`];
    if (v.phone.trim()) lines.push(`Phone: ${v.phone}`);
    if (v.company.trim()) lines.push(`Production house: ${v.company}`);
    lines.push(`Project type: ${v.type}`, "", v.message);
    return lines.join("\n");
  };

  const subject = () => `Casting enquiry — ${v.type} — ${v.name}`;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(v);
    setErrors(errs);
    if (Object.keys(errs).length) {
      setOpened(false);
      return;
    }
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject())}&body=${encodeURIComponent(body())}`;
    setOpened(true);
  };

  const copy = () => navigator.clipboard?.writeText(`To: ${contact.email}\nSubject: ${subject()}\n\n${body()}`);

  const Err = ({ id, msg }: { id: string; msg?: string }) => (msg ? <p id={id} role="alert" className="mt-1 text-sm text-[#e0907a]">{msg}</p> : null);
  const label = "block text-sm text-ivory/65";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-8">
      <div>
        <label htmlFor="name" className={label}>Name</label>
        <input id="name" name="name" autoComplete="name" value={v.name} onChange={set("name")} className={field} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-err" : undefined} />
        <Err id="name-err" msg={errors.name} />
      </div>
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={label}>Email</label>
          <input id="email" name="email" type="email" autoComplete="email" value={v.email} onChange={set("email")} className={field} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-err" : undefined} />
          <Err id="email-err" msg={errors.email} />
        </div>
        <div>
          <label htmlFor="phone" className={label}>Phone (optional)</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" value={v.phone} onChange={set("phone")} className={field} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-err" : undefined} />
          <Err id="phone-err" msg={errors.phone} />
        </div>
      </div>
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className={label}>Production house (optional)</label>
          <input id="company" name="company" autoComplete="organization" value={v.company} onChange={set("company")} className={field} />
        </div>
        <div>
          <label htmlFor="type" className={label}>Project type</label>
          <select id="type" name="type" value={v.type} onChange={set("type")} className={cn(field, "bg-ink")}>
            {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className={label}>Message</label>
        <textarea id="message" name="message" rows={5} value={v.message} onChange={set("message")} className={field} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-err" : undefined} />
        <Err id="message-err" msg={errors.message} />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" className="border border-gold bg-gold px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-transparent hover:text-gold">
          Open email draft
        </button>
        <p className="text-sm text-ivory/50">This opens your email app with the enquiry filled in. Nothing is sent until you press Send there.</p>
      </div>

      {opened && (
        <div role="status" className="border border-ivory/15 p-5 text-sm text-ivory/75">
          <p>Your email app should now be open. If nothing happened, copy the enquiry and email it to <a className="text-gold underline" href={`mailto:${contact.email}`}>{contact.email}</a>.</p>
          <button type="button" onClick={copy} className="link-line mt-3 text-gold">Copy enquiry text</button>
        </div>
      )}
    </form>
  );
}
