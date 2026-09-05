import "./globals.css";
import "./brand-theme.css";
import "./responsive.css";
import "./mobile-polish.css";
import "./brand.css";
import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

const siteUrl = "https://packindia-net.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pack India | Packaging Materials & Machines",
    template: "%s | Pack India",
  },
  description:
    "Pack India offers angle board, paper core, packing materials, flexible packaging products, strapping tools and auto packaging machines.",
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
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Pack India",
    title: "Pack India | Packaging Materials & Machines",
    description: "Packaging materials, flexible packaging products, strapping tools and auto packaging machines.",
    url: siteUrl,
  },
  twitter: {
    card: "summary",
    title: "Pack India | Packaging Materials & Machines",
    description: "Packaging materials, flexible packaging products, strapping tools and auto packaging machines.",
  },
  robots: { index: true, follow: true },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Pack India",
  url: "https://www.packindia.net",
  email: ["sales.packindia@gmail.com", "packindia1991@gmail.com"],
  telephone: ["+91 81231 66638", "+91 98447 23888"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sy No.117/4, Dodda Hullur Village, Kasaba Hobli",
    addressLocality: "Hoskote",
    addressRegion: "Karnataka",
    postalCode: "562114",
    addressCountry: "IN"
  },
  description: "Mfg. of Angle Board, Paper Core, Packing Materials & Auto Machines."
};

export default function RootLayout({children}:{children:React.ReactNode}){
  const themeScript = `try { const saved = localStorage.getItem("packindia-theme"); const theme = saved === "light" || saved === "dark" ? saved : (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"); document.documentElement.dataset.theme = theme; } catch {}`;
  return <html lang="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{__html: themeScript}} /></head><body><Header/>{children}<Footer/><script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(organizationSchema)}} /></body></html>
}
