"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";

type GalleryImage = {
  title: string;
  category: string;
  caption: string;
  image: string;
  position: string;
};

export default function GalleryLightbox({ images }: { images: GalleryImage[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex === null ? null : images[activeIndex];

  const close = () => setActiveIndex(null);
  const previous = () =>
    setActiveIndex((index) =>
      index === null ? null : (index - 1 + images.length) % images.length,
    );
  const next = () =>
    setActiveIndex((index) =>
      index === null ? null : (index + 1) % images.length,
    );

  useEffect(() => {
    if (!active) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [active]);

  return (
    <>
      <div className="catalogue-gallery">
        {images.map((product, index) => (
          <button
            className="catalogue-card catalogue-card-button"
            key={`${product.title}-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Open image: ${product.title}`}
          >
            <div className="catalogue-image">
              <img
                src={product.image}
                alt={product.title}
                loading="lazy"
                style={{ objectPosition: product.position }}
              />
            </div>
            <div className="catalogue-card-body">
              <span>{product.category}</span>
              <h3>{product.title}</h3>
              {product.caption && <p>{product.caption}</p>}
            </div>
          </button>
        ))}
      </div>
      {active && (
        <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label={active.title} onClick={close}>
          <div className="gallery-lightbox-content" onClick={(event) => event.stopPropagation()}>
            <button className="lightbox-close" type="button" onClick={close} aria-label="Close image"><X /></button>
            <button className="lightbox-arrow lightbox-previous" type="button" onClick={previous} aria-label="Previous image"><ChevronLeft /></button>
            <img src={active.image} alt={active.title} />
            <button className="lightbox-arrow lightbox-next" type="button" onClick={next} aria-label="Next image"><ChevronRight /></button>
            <div className="lightbox-caption"><span>{active.category}</span><b>{active.title}</b>{active.caption && <p>{active.caption}</p>}</div>
          </div>
        </div>
      )}
    </>
  );
}
