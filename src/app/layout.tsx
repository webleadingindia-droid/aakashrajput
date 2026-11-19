import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { site } from "@/data/portfolio";
import { jsonLd, personSchema } from "@/lib/seo";
import SmoothScroll from "@/components/ui/SmoothScroll";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Cursor from "@/components/ui/Cursor";
import Preloader from "@/components/ui/Preloader";

const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["300", "400", "500", "600"], style: ["normal", "italic"], variable: "--font-display", display: "swap" });
const body = Manrope({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — ${site.designation}`, template: `%s | ${site.name}` },
  description: `Official portfolio of ${site.name}, ${site.designation.replace(/ \| /g, ", ")}. Modeling photographs, acting showreel, projects and casting enquiries.`,
  alternates: { canonical: "/" },
  icons: { icon: "/icons/favicon.svg" },
  openGraph: { type: "website", siteName: site.name, locale: site.locale, images: [site.ogImage] },
  twitter: { card: "summary_large_image", images: [site.ogImage] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#060606", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="grain">
        <Preloader />
        <SmoothScroll />
        <ScrollProgress />
        <Cursor />
        <a href="#main" className="sr-only z-[100] bg-gold px-4 py-2 text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(personSchema) }} />
      </body>
    </html>
  );
}
