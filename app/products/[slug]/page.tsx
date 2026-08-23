import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, MessageCircle, ShieldCheck, Truck, PackageCheck } from "lucide-react";
import ContactCta from "../../../components/ContactCta";
import { products } from "../../../lib/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return notFound();

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">Home → Products → {product.name}</div>
          <h1>{product.name.toUpperCase()}</h1>
          <p>{product.short}</p>
        </div>
      </section>

      <section className="section detail">
        <div className="container detail-grid">
          <div>
            <div className="detail-art" style={{ background: product.gradient, borderRadius: 2 }}>
              <div className="product-symbol">{product.icon}</div>
              <div className="product-box-shape" />
            </div>
            <div className="gallery-grid" style={{ marginTop: 10, gridTemplateColumns: "repeat(4,1fr)" }}>
              {[1, 2, 3, 4].map((item) => (
                <div className={`gallery-item gallery-${item}`} key={item} style={{ height: 78, padding: 0 }} />
              ))}
            </div>
          </div>

          <div>
            <span className="eyebrow">PACK INDIA PRODUCT</span>
            <h1>{product.name}</h1>
            <p>{product.description}</p>

            <div className="feature-list">
              {product.features.map((feature) => (
                <div key={feature}><span><Check size={15} /></span>{feature}</div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 22 }}>
              <Link href="/contact" className="btn btn-orange">REQUEST A QUOTE <ArrowRight size={14} /></Link>
              <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="btn" style={{ background: "#128c4a", color: "#fff" }}><MessageCircle size={14} /> WHATSAPP US</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "#f7f9fb", paddingTop: 45 }}>
        <div className="container">
          <div className="section-title" style={{ textAlign: "left", margin: "0 0 25px", maxWidth: 760 }}>
            <span>PRODUCT INFORMATION</span>
            <h2>BUILT FOR <span className="orange">PROTECTION & PERFORMANCE</span></h2>
            <p>Choose the right packaging format based on your product, dimensions, quantity, storage conditions and transportation requirements. Our team can help finalize the suitable material and specifications.</p>
          </div>
          <div className="service-grid">
            <div className="service-card"><ShieldCheck className="icon"/><h3>Quality Checked</h3><p>Packaging products selected with quality and consistent performance in mind.</p></div>
            <div className="service-card"><Truck className="icon"/><h3>Ready for Delivery</h3><p>Practical packaging solutions for storage, dispatch and transportation.</p></div>
            <div className="service-card"><PackageCheck className="icon"/><h3>Business Ready</h3><p>Suitable options for industrial, commercial and everyday packaging requirements.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <span>DESCRIPTION & SPECIFICATIONS</span>
            <h2>PRODUCT <span className="orange">DETAILS</span></h2>
            <p>Final specifications can be customized according to your requirement. Share your size, material, quantity and application with our team for a quotation.</p>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12, minWidth: 600 }}>
              <tbody>
                <tr><td style={{ padding: 14, border: "1px solid #e1e6ea", fontWeight: 800, width: "30%" }}>Product</td><td style={{ padding: 14, border: "1px solid #e1e6ea" }}>{product.name}</td></tr>
                <tr><td style={{ padding: 14, border: "1px solid #e1e6ea", fontWeight: 800 }}>Material</td><td style={{ padding: 14, border: "1px solid #e1e6ea" }}>To be finalized as per requirement</td></tr>
                <tr><td style={{ padding: 14, border: "1px solid #e1e6ea", fontWeight: 800 }}>Size / Dimensions</td><td style={{ padding: 14, border: "1px solid #e1e6ea" }}>Customizable</td></tr>
                <tr><td style={{ padding: 14, border: "1px solid #e1e6ea", fontWeight: 800 }}>Application</td><td style={{ padding: 14, border: "1px solid #e1e6ea" }}>Packaging, storage and transportation</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <ContactCta />
    </main>
  );
}
