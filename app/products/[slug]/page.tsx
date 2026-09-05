import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, MessageCircle, ShieldCheck, Truck, PackageCheck } from "lucide-react";
import ContactCta from "../../../components/ContactCta";
import { products } from "../../../lib/products";

const siteUrl = "https://packindia-net.vercel.app";
const whatsappNumber = "918123166638";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};

  return {
    title: product.name,
    description: product.description,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: `${product.name} | Pack India`,
      description: product.description,
      url: `${siteUrl}/products/${product.slug}`,
      type: "website",
    },
  };
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
            <div className="detail-art product-detail-image">
              <img src={product.image} alt={product.name} />
            </div>
          </div>

          <div>
            <span className="eyebrow">PACK INDIA PRODUCT</span>
            <div style={{fontSize:11,color:"#f36b21",fontWeight:800,letterSpacing:1.2,marginBottom:6}}>{product.category.toUpperCase()}</div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>

            <div className="feature-list">
              {product.features.map((feature) => <div key={feature}><span><Check size={15} /></span>{feature}</div>)}
            </div>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 22 }}>
              <Link href="/contact" className="btn btn-orange">REQUEST A QUOTE <ArrowRight size={14} /></Link>
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="btn" style={{ background: "#128c4a", color: "#fff" }}><MessageCircle size={14} /> WHATSAPP US</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section product-information" style={{ paddingTop: 45 }}>
        <div className="container">
          <div className="section-title" style={{ textAlign: "left", margin: "0 0 25px", maxWidth: 760 }}>
            <span>PRODUCT INFORMATION</span>
            <h2>BUILT FOR <span className="orange">PACKAGING REQUIREMENTS</span></h2>
            <p>Share the required size, material, quantity and application with the Pack India team for available specifications and quotation.</p>
          </div>
          <div className="service-grid">
            <div className="service-card"><ShieldCheck className="icon"/><h3>Catalogue Product</h3><p>This item is included in the Pack India product catalogue.</p></div>
            <div className="service-card"><Truck className="icon"/><h3>Requirement Based</h3><p>Contact the team to discuss the required specifications and quantity.</p></div>
            <div className="service-card"><PackageCheck className="icon"/><h3>Request a Quote</h3><p>Use the enquiry form or WhatsApp to request pricing and availability.</p></div>
          </div>
        </div>
      </section>

      <ContactCta />
    </main>
  );
}
