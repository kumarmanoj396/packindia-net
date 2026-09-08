import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Clock3,
  HeartHandshake,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import ProductCard from "../components/ProductCard";
import LeadStrip from "../components/LeadStrip";
import ContactCta from "../components/ContactCta";
import Reveal from "../components/Reveal";
import { products } from "../lib/products";

export default function Home() {
  const featuredProducts = products.slice(0, 9);
  return (
    <main>
      <section className="hero" style={{ minHeight: "410px" }}>
        <div
          className="container hero-inner"
          style={{ padding: "62px 0 54px" }}
        >
          <div className="hero-copy" style={{ width: "53%" }}>
            <span className="eyebrow">COMPLETE PACKAGING SOLUTIONS</span>
            <h1>
              QUALITY. PRODUCTION.
              <br />
              <span>GROWTH.</span>
            </h1>
            <p>
              Manufacturers of angle board, paper core, packing materials and
              auto machines.
            </p>
            <div className="hero-points">
              <div className="hero-point">
                <i>
                  <ShieldCheck size={15} />
                </i>
                Premium Quality
              </div>
              <div className="hero-point">
                <i>
                  <Clock3 size={15} />
                </i>
                Timely Delivery
              </div>
              <div className="hero-point">
                <i>
                  <HeartHandshake size={15} />
                </i>
                Customer Satisfaction
              </div>
            </div>
            <div className="hero-actions">
              <Link href="/products" className="btn btn-orange">
                OUR PRODUCTS <ArrowRight size={14} />
              </Link>
              <a
                href="https://wa.me/918123166638?text=Hello%20Pack%20India%2C%20I%20would%20like%20to%20ask%20about%20your%20packaging%20products."
                className="btn whatsapp-home"
                target="_blank"
                rel="noreferrer"
                data-analytics-event="whatsapp_enquiry"
                data-placement="home_hero"
              >
                <MessageCircle size={14} /> WHATSAPP US
              </a>
              <Link href="/contact" className="btn btn-outline">
                CONTACT US <ArrowRight size={14} />
              </Link>
            </div>
          </div>
          <div
            className="hero-visual hero-machine"
            aria-label="Pack India packaging machine"
          >
            <img
              src="/packindia-machine-hero.png"
              alt="Pack India packaging production machine"
            />
          </div>
        </div>
      </section>

      <section
        className="section product-section"
        style={{ paddingTop: "54px" }}
      >
        <Reveal className="container">
          <SectionTitle
            eyebrow="PACKAGING PRODUCTS"
            title={
              <>
                OUR <span className="orange">PRODUCTS</span>
              </>
            }
            text="Explore selected products from the Pack India catalogue. Visit the Products page for the complete range."
          />
          <div className="products-grid">
            {featuredProducts.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 28 }}>
            <Link href="/products" className="btn btn-orange">
              VIEW COMPLETE CATALOGUE <ArrowRight size={14} />
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="section about-home" id="about-home">
        <Reveal className="container about-home-grid">
          <div className="about-visual">
            <div className="about-logo-panel">
              <img src="/packindia-logo-lockup.png" alt="Pack India" />
              <span>COMPLETE PACKAGING SOLUTIONS</span>
              <div className="about-badge">
                <b>PACK INDIA</b>
                <span>QUALITY · PRODUCTION · GROWTH</span>
              </div>
            </div>
          </div>
          <div className="about-copy">
            <span className="eyebrow">WHO WE ARE</span>
            <h2>
              PACKAGING PARTNER FOR{" "}
              <span className="orange">YOUR BUSINESS</span>
            </h2>
            <p>
              Pack India’s catalogue covers angle board, paper core, packing
              materials, flexible packaging products and auto packaging
              machines.
            </p>
            <div className="about-checks">
              <div>
                <CheckCircle2 />
                <span>Angle board & paper core products</span>
              </div>
              <div>
                <CheckCircle2 />
                <span>Films, pouches, tapes & protective materials</span>
              </div>
              <div>
                <CheckCircle2 />
                <span>Strapping tools and consumables</span>
              </div>
              <div>
                <CheckCircle2 />
                <span>Automatic and semi-automatic packaging machines</span>
              </div>
            </div>
            <Link href="/about" className="text-link">
              MORE ABOUT US <ArrowRight size={14} />
            </Link>
          </div>
        </Reveal>
      </section>

      <LeadStrip />
      <section className="section" id="gallery">
        <Reveal className="container">
          <SectionTitle
            eyebrow="OUR WORK"
            title={
              <>
                PACKAGING <span className="orange">IN FOCUS</span>
              </>
            }
          />
          <div className="home-gallery-grid">
            {[
              ["Paper Core", "/product-images/catalog/paper-core.png"],
              ["Paper Tube", "/product-images/catalog/paper-tube.png"],
              ["Angle Board", "/product-images/catalog/angle-board.png"],
              [
                "Vertical Protection",
                "/product-images/catalog/vertical-protection.png",
              ],
              [
                "Surface Protection Film",
                "/product-images/catalog/surface-protection-film.png",
              ],
              ["Corrugated Box", "/product-images/catalog/corrugated-box.png"],
            ].map(([name, image]) => (
              <Link href="/gallery" className="home-gallery-item" key={name}>
                <img src={image} alt={name} />
                <span>{name}</span>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>
      <ContactCta />
    </main>
  );
}
