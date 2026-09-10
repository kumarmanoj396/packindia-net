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
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const filters = ["All", "Machinery in Action", "Finished Products", "Factory Floor & Warehouse"];
  const imageGroup = (image: GalleryImage) => {
    const text = `${image.title} ${image.category} ${image.caption}`.toLowerCase();
    if (/(factory|warehouse|plant|dispatch|loading|truck)/.test(text)) return "Factory Floor & Warehouse";
    if (/(machine|sealer|wrapping|tunnel|strapping|winding|cutting|punching)/.test(text)) return "Machinery in Action";
    return "Finished Products";
  };
  const visibleImages = activeFilter === "All" ? images : images.filter((image) => imageGroup(image) === activeFilter);
  const active = activeIndex === null ? null : visibleImages[activeIndex];

  const close = () => setActiveIndex(null);
  const previous = () =>
    setActiveIndex((index) =>
      index === null ? null : (index - 1 + visibleImages.length) % visibleImages.length,
    );
  const next = () =>
    setActiveIndex((index) =>
      index === null ? null : (index + 1) % visibleImages.length,
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
      <div className="gallery-filters" role="group" aria-label="Filter gallery images">
        {filters.map((filter) => (
          <button
            className={activeFilter === filter ? "is-active" : ""}
            key={filter}
            type="button"
            onClick={() => { setActiveFilter(filter); setActiveIndex(null); }}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="catalogue-gallery">
        {visibleImages.map((product, index) => (
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
      {!visibleImages.length && <p className="gallery-filter-empty">No images in this group yet. Add tagged images in Gallery Admin to populate it.</p>}
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
