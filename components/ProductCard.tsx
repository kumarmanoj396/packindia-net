"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Check, X } from "lucide-react";
import { useState } from "react";
import { createPortal } from "react-dom";
import type { Product } from "../lib/products";

export default function ProductCard({ product }: { product: Product }) {
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const quoteHref = `/contact?product=${encodeURIComponent(product.name)}`;

  return (
    <article className="product-card">
      <Link href={`/products/${product.slug}`} className="product-card-image-link" aria-label={`View ${product.name}`}>
        <div className="product-art">
          <Image className="product-image" src={product.image} alt={product.name} fill sizes="(max-width: 600px) 92vw, (max-width: 900px) 44vw, 31vw" />
          <div className="product-hover-facts" aria-hidden="true">
            {product.features.slice(0, 2).map((feature) => <span key={feature}>{feature}</span>)}
            <b>VIEW DETAILS <ArrowUpRight size={12} /></b>
          </div>
        </div>
      </Link>
      <div className="product-card-body">
        <h3>{product.name}</h3>
        <p>{product.short}</p>
        <div className="product-card-actions">
          <button type="button" onClick={() => setIsQuickViewOpen(true)}>QUICK VIEW</button>
          <Link href={`/products/${product.slug}`}>
            VIEW PRODUCT <ArrowUpRight size={13} />
          </Link>
        </div>
        <Link href={quoteHref} className="product-card-quote">
          GET QUOTE <ArrowRight size={13} />
        </Link>
      </div>

      {isQuickViewOpen && createPortal(
        <div className="quick-view-backdrop" role="presentation" onMouseDown={() => setIsQuickViewOpen(false)}>
          <section className="quick-view-dialog" role="dialog" aria-modal="true" aria-labelledby={`quick-view-${product.slug}`} onMouseDown={(event) => event.stopPropagation()}>
            <button className="quick-view-close" type="button" onClick={() => setIsQuickViewOpen(false)} aria-label="Close quick view">
              <X size={18} />
            </button>
            <div className="quick-view-image"><Image src={product.image} alt={product.name} width={720} height={540} sizes="(max-width: 700px) 86vw, 45vw" /></div>
            <div className="quick-view-content">
              <span className="eyebrow">{product.category}</span>
              <h2 id={`quick-view-${product.slug}`}>{product.name}</h2>
              <p>{product.description}</p>
              <ul>
                {product.features.slice(0, 3).map((feature) => (
                  <li key={feature}><Check size={15} /> {feature}</li>
                ))}
              </ul>
              <div className="quick-view-actions">
                <Link href={quoteHref} className="btn btn-orange">GET QUOTATION <ArrowRight size={14} /></Link>
                <Link href={`/products/${product.slug}`} className="quick-view-link">FULL DETAILS <ArrowUpRight size={14} /></Link>
              </div>
            </div>
          </section>
        </div>
      , document.body)}
    </article>
  );
}
