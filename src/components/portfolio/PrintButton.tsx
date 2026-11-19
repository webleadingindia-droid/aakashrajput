"use client";

import { Download } from "lucide-react";

export default function PrintButton() {
  return (
    <button type="button" onClick={() => window.print()} className="no-print inline-flex items-center gap-3 border border-ink bg-ink px-7 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-ivory transition-colors duration-300 hover:bg-transparent hover:text-ink">
      <Download size={16} aria-hidden /> Download profile PDF
    </button>
  );
}
