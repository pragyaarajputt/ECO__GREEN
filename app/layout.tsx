import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/data/site";
import "./globals.css";

/** Montserrat echoes the geometric logo wordmark; Inter handles everything readable. */
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-montserrat",
  display: "swap",
});
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.name} — ${SITE.tagline}`, template: `%s | ${SITE.shortName} Foundation` },
  description: SITE.positioning,
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.positioning,
    locale: "en_IN",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: SITE.name,
    alternateName: SITE.shortName,
    url: SITE.url,
    slogan: SITE.tagline,
    description: SITE.positioning,
  };

  return (
    <html lang="en-IN" className={`${montserrat.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        {/* Lets CSS hide entrance-animated content only when JavaScript is running */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-5 focus:top-5 focus:z-100 focus:rounded-(--radius-chip) focus:bg-ink-950 focus:px-5 focus:py-3 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
