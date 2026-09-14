"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    src: "/packindia-machine-hero.png",
    alt: "Pack India automatic edge board production machine",
  },
  {
    src: "/product-images/catalog/machines/angle-board-machine.jpeg",
    alt: "Pack India angle board machine",
  },
  {
    src: "/product-images/catalog/paper-core.png",
    alt: "Pack India paper core products",
  },
  {
    src: "/product-images/catalog/paper-tube.png",
    alt: "Pack India paper tubes",
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
        <img
          key={slide.src}
          className={`hero-carousel-slide${index === activeSlide ? " is-active" : ""}`}
          src={slide.src}
          alt={slide.alt}
        />
      ))}
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
