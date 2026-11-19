import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  external?: boolean;
  className?: string;
}

/** Link-styled button with a fill-slide hover. */
export default function Button({ href, children, variant = "outline", external, className }: Props) {
  const solid = variant === "solid";
  const cls = cn(
    "group relative inline-flex items-center justify-center overflow-hidden border px-7 py-3.5 text-xs font-medium uppercase tracking-[0.2em] transition-colors duration-500",
    solid ? "border-gold bg-gold text-ink hover:text-ivory" : "border-ivory/40 text-ivory hover:text-ink",
    className,
  );
  const fill = (
    <span
      aria-hidden
      className={cn(
        "absolute inset-0 translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0 motion-reduce:transition-none",
        solid ? "bg-ink" : "bg-ivory",
      )}
    />
  );
  const label = <span className="relative">{children}</span>;
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{fill}{label}</a>
  ) : (
    <Link href={href} className={cls}>{fill}{label}</Link>
  );
}
