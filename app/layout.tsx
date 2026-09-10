import "./globals.css";
import "./brand-theme.css";
import "./responsive.css";
import "./mobile-polish.css";
import "./brand.css";
import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Analytics from "../components/Analytics";
import MobileEnquiryBar from "../components/MobileEnquiryBar";

const siteUrl = "https://www.packindia.net";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pack India | Angle Board & Packaging Machine Manufacturer in Bengaluru",
    template: "%s | Pack India",
  },
  description:
    "Pack India is an angle board, paper core and packaging machine manufacturer in Hoskote, Bengaluru, supplying industrial packaging materials across Karnataka.",
  keywords: [
    "Pack India",
    "packaging materials",
    "angle board",
    "paper core",
    "paper tube",
    "stretch film",
    "shrink film",
    "bubble film",
    "BOPP tape",
    "strapping machine",
    "packaging machines",
    "Hoskote Bengaluru packaging",
    "paper core manufacturer Hoskote",
    "edge protector machine supplier Karnataka",
    "industrial packaging materials Bangalore",
    "angle board manufacturer Bengaluru",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Pack India",
    title: "Pack India | Angle Board & Packaging Machine Manufacturer in Bengaluru",
    description:
      "Packaging materials, flexible packaging products, strapping tools and auto packaging machines.",
    url: siteUrl,
  },
  twitter: {
    card: "summary",
    title: "Pack India | Packaging Materials & Machines",
    description:
      "Packaging materials, flexible packaging products, strapping tools and auto packaging machines.",
  },
  robots: { index: true, follow: true },
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Manufacturer"],
  name: "Pack India",
  url: "https://www.packindia.net",
  email: "sales.packindia@gmail.com",
  telephone: "+91 81231 66638",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sy No.117/4, Dodda Hullur Village, Kasaba Hobli",
    addressLocality: "Hoskote",
    addressRegion: "Karnataka",
    postalCode: "562114",
    addressCountry: "IN",
  },
  description:
    "Mfg. of Angle Board, Paper Core, Packing Materials & Auto Machines.",
  areaServed: ["Bengaluru", "Karnataka", "India"],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91 81231 66638",
    contactType: "sales",
    email: "sales.packindia@gmail.com",
    availableLanguage: ["English", "Kannada", "Hindi"],
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Pack India Packaging Product Catalogue",
    url: "https://www.packindia.net/products",
    itemListElement: [
      "Paper Products", "Board Products", "Films & Pouches", "Tapes",
      "Strapping & Tools", "Packaging Machines", "Corrugation Box",
    ].map((name) => ({ "@type": "OfferCatalog", name })),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const themeScript = `try { const saved = localStorage.getItem("packindia-theme"); const theme = saved === "light" || saved === "dark" ? saved : (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"); document.documentElement.dataset.theme = theme; } catch {}`;
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <MobileEnquiryBar />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </body>
    </html>
  );
}
