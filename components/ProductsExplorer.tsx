"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import { products } from "../lib/products";

const categories = ["All Products", ...products.map((product) => product.name)];

export default function ProductsExplorer() {
  const [active, setActive] = useState("All Products");
  const visibleProducts = active === "All Products" ? products : products.filter((product) => product.name === active);

  return (
    <div className="products-explorer">
      <aside className="product-sidebar">
        <div className="sidebar-title">CATEGORIES</div>
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={active === category ? "category-btn active" : "category-btn"}
            onClick={() => setActive(category)}
          >
            <span>{category}</span><b>›</b>
          </button>
        ))}
      </aside>
      <div className="products-results">
        <div className="products-results-head">
          <div><span>PRODUCT RANGE</span><h2>{active}</h2></div>
          <p>{visibleProducts.length} {visibleProducts.length === 1 ? "product" : "products"}</p>
        </div>
        <div className="products-grid products-grid-inner">
          {visibleProducts.map((product) => <ProductCard key={product.slug} product={product} />)}
        </div>
      </div>
    </div>
  );
}
