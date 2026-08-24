import "./globals.css";
import "./responsive.css";
import "./mobile-polish.css";
import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

const siteUrl = "https://packindia-net.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pack India | Packaging Solutions",
    template: "%s | Pack India",
  },
  description:
    "Pack India provides reliable packaging products and solutions including corrugated boxes, packaging tapes, bubble wrap, stretch film, pouches and corrugated sheets.",
  keywords: [
    "Pack India",
    "packaging solutions",
    "packaging products",
    "corrugated boxes",
    "packaging tapes",
    "bubble wrap",
    "stretch film",
    "packaging pouches",
    "corrugated sheets",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Pack India",
    title: "Pack India | Packaging Solutions",
    description:
      "Reliable packaging products and solutions for protection, storage and transportation.",
    url: siteUrl,
  },
  twitter: {
    card: "summary",
    title: "Pack India | Packaging Solutions",
    description:
      "Reliable packaging products and solutions for protection, storage and transportation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><body><Header/>{children}<Footer/></body></html>
}