import Link from "next/link";
import { Phone, Mail, ChevronDown, Menu } from "lucide-react";

export default function Header(){
  return <header>
    <div className="topbar">
      <div className="container topbar-inner">
        <span>Welcome to Pack India - Your Trusted Packaging Partner</span>
        <div className="top-contact">
          <a href="mailto:info@packindia.net"><Mail size={13}/> info@packindia.net</a>
          <a href="tel:+919876543210"><Phone size={13}/> +91 98765 43210</a>
        </div>
      </div>
    </div>
    <div className="nav-wrap">
      <div className="container nav">
        <Link href="/" className="brand">
          <span className="brand-mark">◆</span>
          <span><b>PACK <em>INDIA</em></b><small>PACKAGING SOLUTIONS</small></span>
        </Link>
        <nav>
          <Link href="/">HOME</Link>
          <Link href="/about">ABOUT US</Link>
          <Link href="/products">PRODUCTS <ChevronDown size={12}/></Link>
          <Link href="/services">SERVICES</Link>
          <Link href="/about#why-us">WHY US</Link>
          <Link href="/gallery">GALLERY</Link>
          <Link href="/contact">CONTACT US</Link>
        </nav>
        <div className="header-actions">
          <Link className="btn btn-orange quote-btn" href="/contact">GET A QUOTE</Link>
          <details className="mobile-menu">
            <summary aria-label="Open navigation"><Menu size={23}/></summary>
            <div className="mobile-menu-panel">
              <Link href="/">HOME</Link>
              <Link href="/about">ABOUT US</Link>
              <Link href="/products">PRODUCTS</Link>
              <Link href="/services">SERVICES</Link>
              <Link href="/about#why-us">WHY US</Link>
              <Link href="/gallery">GALLERY</Link>
              <Link href="/contact">CONTACT US</Link>
            </div>
          </details>
        </div>
      </div>
    </div>
  </header>
}