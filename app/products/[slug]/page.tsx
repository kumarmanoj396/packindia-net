import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Check,
  MessageCircle,
  ShieldCheck,
  Truck,
  PackageCheck,
  Download,
} from "lucide-react";
import ContactCta from "../../../components/ContactCta";
import { products } from "../../../lib/products";

const siteUrl = "https://www.packindia.net";
const whatsappNumber = "918123166638";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};

  return {
    title: product.name,
    description: product.description,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: `${product.name} Supplier | Pack India`,
      description: `${product.description} Request specifications and a quotation from Pack India, Bengaluru.`,
      url: `${siteUrl}/products/${product.slug}`,
      type: "website",
      images: [{ url: `${siteUrl}${product.image}`, alt: product.name }],
    },
  };
}

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return notFound();
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `${siteUrl}${product.image}`,
    url: `${siteUrl}/products/${product.slug}`,
    category: product.category,
    brand: { "@type": "Brand", name: "Pack India" },
    manufacturer: { "@type": "Organization", name: "Pack India" },
    additionalProperty: product.features.map((name) => ({
      "@type": "PropertyValue",
      name: "Product feature",
      value: name,
    })),
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
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
            <div
              style={{
                fontSize: 11,
                color: "#f36b21",
                fontWeight: 800,
                letterSpacing: 1.2,
                marginBottom: 6,
              }}
            >
              {product.category.toUpperCase()}
            </div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>

            <div className="feature-list">
              {product.features.map((feature) => (
                <div key={feature}>
                  <span>
                    <Check size={15} />
                  </span>
                  {feature}
                </div>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                gap: 10,
                flexWrap: "wrap",
                marginTop: 22,
              }}
            >
              <Link href={`/contact?product=${encodeURIComponent(product.name)}`} className="btn btn-orange" data-analytics-event="quote_request" data-placement="product_page" data-product-name={product.name}>
                REQUEST A QUOTE <ArrowRight size={14} />
              </Link>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hello Pack India, I would like a quotation for ${product.name}.`)}`}
                target="_blank"
                rel="noreferrer"
                className="btn"
                style={{ background: "#128c4a", color: "#fff" }}
                data-analytics-event="whatsapp_enquiry"
                data-placement="product_page"
                data-product-name={product.name}
              >
                <MessageCircle size={14} /> WHATSAPP US
              </a>
              <a href="/pack-india-product-catalogue.pdf" download className="btn btn-outline catalogue-download-button" data-analytics-event="catalogue_download" data-placement="product_page" data-product-name={product.name}><Download size={14} /> DOWNLOAD CATALOGUE</a>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section product-information"
        style={{ paddingTop: 45 }}
      >
        <div className="container">
          <div
            className="section-title"
            style={{ textAlign: "left", margin: "0 0 25px", maxWidth: 760 }}
          >
            <span>PRODUCT INFORMATION</span>
            <h2>
              BUILT FOR <span className="orange">PACKAGING REQUIREMENTS</span>
            </h2>
            <p>
              Share the required size, material, quantity and application with
              the Pack India team for available specifications and quotation.
            </p>
          </div>
          <div className="service-grid">
            <div className="service-card">
              <ShieldCheck className="icon" />
              <h3>Catalogue Product</h3>
              <p>This item is included in the Pack India product catalogue.</p>
            </div>
            <div className="service-card">
              <Truck className="icon" />
              <h3>Requirement Based</h3>
              <p>
                Contact the team to discuss the required specifications and
                quantity.
              </p>
            </div>
            <div className="service-card">
              <PackageCheck className="icon" />
              <h3>Request a Quote</h3>
              <p>
                Use the enquiry form or WhatsApp to request pricing and
                availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section product-specifications">
        <div className="container">
          <div className="section-title" style={{ textAlign: "left", margin: "0 0 25px", maxWidth: 760 }}>
            <span>SPECIFICATIONS</span>
            <h2>PLAN YOUR <span className="orange">{product.name.toUpperCase()}</span></h2>
            <p>Every requirement is assessed by the Pack India team before quotation. Share these details for a faster response.</p>
          </div>
          <div className="product-spec-grid">
            <div><b>Size & dimensions</b><span>Required length, width, diameter or thickness.</span></div>
            <div><b>Material & finish</b><span>Material grade, colour, coating or protection requirement.</span></div>
            <div><b>Application</b><span>How and where the product will be used in your packaging process.</span></div>
            <div><b>Quantity & delivery</b><span>Approximate order quantity and delivery location or schedule.</span></div>
          </div>
        </div>
      </section>

      <section className="section product-faq">
        <div className="container product-faq-inner">
          <span className="eyebrow">PRODUCT FAQ</span>
          <h2>{product.name} — Frequently Asked Questions</h2>
          <details open><summary>Can I request a custom size or specification?</summary><p>Yes. Pack India can discuss size, material, quantity and application requirements before providing a quotation.</p></details>
          <details><summary>How do I get pricing and availability?</summary><p>Use the quote button above or WhatsApp the Pack India team with your required quantity and delivery location.</p></details>
          <details><summary>Can Pack India help choose the right product?</summary><p>Yes. Share your packaging application and the team can help identify a suitable product option.</p></details>
        </div>
      </section>

      <ContactCta />
    </main>
  );
}
