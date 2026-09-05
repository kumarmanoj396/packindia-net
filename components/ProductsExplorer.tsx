"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { products } from "../lib/products";

const categories = ["All Products", ...Array.from(new Set(products.map((product) => product.category)))];

export default function ProductsExplorer() {
  const [active, setActive] = useState("All Products");
  useEffect(() => {
    const category = new URLSearchParams(window.location.search).get("category");
    if (category && categories.includes(category)) setActive(category);
  }, []);
  const visibleProducts = active === "All Products" ? products : products.filter((product) => product.category === active);

  return (
    <>
      <div className="products-explorer">
        <aside className="product-sidebar">
          <div className="sidebar-title">PRODUCT CATEGORIES</div>
          {categories.map((category) => (
            <button key={category} type="button" className={active === category ? "category-btn active" : "category-btn"} onClick={() => setActive(category)}>
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
      <style jsx>{`
        .products-explorer{display:grid;grid-template-columns:240px 1fr;gap:24px;align-items:start;margin-top:8px}
        .product-sidebar{border:1px solid #e4e9ed;background:#fff;box-shadow:0 6px 20px rgba(10,40,70,.05);position:sticky;top:20px}
        .sidebar-title{padding:16px 17px;background:#062b50;color:#fff;font-size:11px;font-weight:800;letter-spacing:1px}
        .category-btn{width:100%;border:0;border-bottom:1px solid #edf0f2;background:#fff;padding:13px 15px;display:flex;justify-content:space-between;align-items:center;text-align:left;font:700 11px Arial;color:#536371;cursor:pointer;transition:.2s}
        .category-btn:hover{color:#f36b21;background:#fff8f3}.category-btn b{font-size:17px;font-weight:400}.category-btn.active{background:#ff7419;color:#fff}.category-btn.active b{color:#fff}
        .products-results{min-width:0}.products-results-head{display:flex;justify-content:space-between;align-items:end;border-bottom:1px solid #e5e9ed;padding:0 0 14px;margin-bottom:16px}
        .products-results-head span{font-size:10px;font-weight:800;letter-spacing:1.2px;color:#f36b21}.products-results-head h2{margin:5px 0 0;color:#092a4c;font-size:23px}.products-results-head p{font-size:10px;color:#788692;margin:0}
        .products-grid-inner{grid-template-columns:repeat(3,1fr)!important;gap:14px!important}.products-grid-inner .product-art{height:160px}.products-grid-inner .product-card-body{padding:15px}
        @media(max-width:900px){.products-explorer{grid-template-columns:180px 1fr}.products-grid-inner{grid-template-columns:repeat(2,1fr)!important}.product-sidebar{position:static}}
        @media(max-width:600px){.products-explorer{grid-template-columns:1fr;gap:18px}.product-sidebar{display:grid;grid-template-columns:1fr 1fr}.sidebar-title{grid-column:1/-1}.category-btn{border-right:1px solid #edf0f2}.products-grid-inner{grid-template-columns:1fr!important}.products-results-head{align-items:start}.products-results-head h2{font-size:19px}}
      `}</style>
    </>
  );
}
