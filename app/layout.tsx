import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const pageTitle = `${SITE.shortName} | Data Analyst (Excel, SQL, Power BI)`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: pageTitle,
    template: `%s | ${SITE.shortName}`,
  },
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: pageTitle,
    description: SITE.description,
    url: SITE.url,
    siteName: `${SITE.shortName} | Data Analyst Portfolio`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: SITE.description,
    images: ["/opengraph-image"],
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF6F0",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  alternateName: SITE.shortName,
  jobTitle: SITE.title,
  url: SITE.url,
  sameAs: [SITE.linkedin, SITE.github],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-body">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-canvas"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
