"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    src: "/packindia-machine-hero.png",
    alt: "Pack India automatic edge board production machine",
    title: "AUTOMATIC PACKAGING MACHINES",
    href: "/products?category=Packaging%20Machines",
  },
  {
    src: "/product-images/catalog/machines/angle-board-machine.jpeg",
    alt: "Pack India angle board machine",
    title: "ANGLE BOARD PRODUCTION",
    href: "/products/angle-board-machine",
  },
  {
    src: "/product-images/catalog/paper-core.png",
    alt: "Pack India paper core products",
    title: "PAPER CORE SOLUTIONS",
    href: "/products?category=Paper%20Products",
  },
  {
    src: "/product-images/catalog/paper-tube.png",
    alt: "Pack India paper tubes",
    title: "PAPER TUBE RANGE",
    href: "/products?category=Paper%20Products",
  },
];

export default function HeroImageCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="hero-visual hero-machine hero-carousel" aria-label="Pack India product showcase">
      {slides.map((slide, index) => (
        <Image
          key={slide.src}
          className={`hero-carousel-slide${index === activeSlide ? " is-active" : ""}`}
          src={slide.src}
          alt={slide.alt}
          fill
          sizes="(max-width: 700px) 92vw, 52vw"
          priority={index === 0}
        />
      ))}
      <div className="hero-carousel-caption" aria-live="polite">
        <span>PACK INDIA SHOWCASE</span>
        <strong>{slides[activeSlide].title}</strong>
        <Link href={slides[activeSlide].href}>EXPLORE <span aria-hidden="true">→</span></Link>
      </div>
      <div className="hero-carousel-dots" aria-label="Product showcase slides">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            className={index === activeSlide ? "is-active" : ""}
            onClick={() => setActiveSlide(index)}
            aria-label={`Show slide ${index + 1}`}
            aria-current={index === activeSlide ? "true" : undefined}
          />
        ))}
      </div>
    </div>
  );
}
