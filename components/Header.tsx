"use client";

import Link from "next/link";
import { Phone, Mail, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const mobileLinks = [
  ["HOME", "/"],
  ["ABOUT US", "/about"],
  ["PRODUCTS", "/products"],
  ["SERVICES", "/services"],
  ["WHY US", "/about#why-us"],
  ["GALLERY", "/gallery"],
  ["CONTACT US", "/contact"],
] as const;

export default function Header(){
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return <header>
    <div className="topbar">
      <div className="container topbar-inner">
        <span>Welcome to Pack India - Your Trusted Packaging Partner</span>
        <div className="top-contact">
          <a href="mailto:sales.packindia@gmail.com"><Mail size={13}/> sales.packindia@gmail.com</a>
          <a href="tel:+918123166638"><Phone size={13}/> +91 81231 66638</a>
        </div>
      </div>
    </div>
    <div className="nav-wrap">
      <div className="container nav">
        <Link href="/" className="brand" onClick={closeMenu}>
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
          <ThemeToggle />
          <Link className="btn btn-orange quote-btn" href="/contact" onClick={closeMenu}>GET A QUOTE</Link>
          <div className="mobile-menu">
            <button type="button" className="mobile-menu-toggle" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen(value => !value)}>
              {menuOpen ? <X size={23}/> : <Menu size={23}/>} 
            </button>
            {menuOpen && <div className="mobile-menu-panel">
              {mobileLinks.map(([label, href]) => <Link key={href} href={href} onClick={closeMenu}>{label}</Link>)}
            </div>}
          </div>
        </div>
      </div>
    </div>
  </header>
}