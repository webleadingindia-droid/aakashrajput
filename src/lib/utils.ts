import type { Orientation } from "@/data/portfolio";

export const cn = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(" ");

export const dims = (o: Orientation) =>
  o === "portrait" ? { width: 800, height: 1000 } : o === "landscape" ? { width: 1200, height: 800 } : { width: 1000, height: 1000 };

export const digitsOnly = (s: string) => s.replace(/\D/g, "");
