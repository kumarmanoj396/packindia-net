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

const productLinks = ["Paper & Board", "Films & Pouches", "Tapes", "Strapping & Tools", "Packaging Machines"] as const;

export default function Header(){
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const closeMenu = () => { setMenuOpen(false); setProductsOpen(false); };

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
        <Link href="/" className="brand" onClick={closeMenu} aria-label="Pack India home">
          <img className="brand-logo" src="/packindia-logo-lockup.png" alt="Pack India - manufacturer of angle board, paper core, packing materials and auto machines" />
        </Link>
        <nav>
          <Link href="/">HOME</Link>
          <Link href="/about">ABOUT US</Link>
          <div className="products-menu">
            <button type="button" className="products-menu-toggle" aria-expanded={productsOpen} aria-controls="products-dropdown" onClick={() => setProductsOpen(value => !value)}>PRODUCTS <ChevronDown size={12} className={productsOpen ? "chevron-open" : undefined}/></button>
            {productsOpen && <div id="products-dropdown" className="products-dropdown">
              <a href="/products" className="all-products-link">VIEW ALL PRODUCTS</a>
              {productLinks.map((label) => <a key={label} href={`/products?category=${encodeURIComponent(label)}`}>{label}</a>)}
            </div>}
          </div>
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
