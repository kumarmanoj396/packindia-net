import "./globals.css";
import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
export const metadata: Metadata={title:"Pack India | Packaging Solutions",description:"Pack India - professional packaging products and solutions."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/>{children}<Footer/></body></html>}
