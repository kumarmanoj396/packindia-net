import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Leaf,
  MessageCircle,
  PackageCheck,
  ShieldCheck,
  Truck,
} from "lucide-react";
import SectionTitle from "../../components/SectionTitle";
import ContactCta from "../../components/ContactCta";

const services = [
  {
    icon: PackageCheck,
    title: "Custom Packaging",
    text: "Practical packaging solutions tailored to your product, handling and protection requirements.",
  },
  {
    icon: Truck,
    title: "On-Time Delivery",
    text: "Planned and dependable delivery support to help keep your packaging supply on schedule.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    text: "Quality-focused product selection and checks to maintain consistent packaging performance.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Solutions",
    text: "Packaging options designed to support recyclable and more sustainable business practices.",
  },
  {
    icon: CheckCircle2,
    title: "Packaging Consultation",
    text: "Guidance on choosing the right packaging product, size and application for your requirement.",
  },
  {
    icon: Clock3,
    title: "Responsive Support",
    text: "Clear communication from enquiry through product selection, quotation and delivery coordination.",
  },
];

export default function Services() {
  return (
    <main>
      <section className="page-hero services-hero">
        <div className="container services-hero-grid">
          <div>
            <div className="breadcrumbs">Home → Services</div>
            <span className="eyebrow">PACK INDIA SUPPORT</span>
            <h1>OUR SERVICES</h1>
            <p>
              We provide end-to-end packaging solutions that help businesses
              protect products, improve handling and deliver with confidence.
            </p>
            <div className="services-hero-actions">
              <Link href="/contact" className="btn btn-orange">GET A QUOTE <ArrowRight size={14} /></Link>
              <a href="https://wa.me/918123166638?text=Hello%20Pack%20India%2C%20I%20would%20like%20to%20discuss%20my%20packaging%20requirement." target="_blank" rel="noreferrer" className="services-whatsapp">
                <MessageCircle size={15} /> WHATSAPP US
              </a>
            </div>
          </div>
          <div className="service-support-panel" aria-label="Pack India service support">
            <span>YOUR REQUIREMENT, SIMPLIFIED</span>
            {[
              ["01", "Choose the right product"],
              ["02", "Confirm size & quantity"],
              ["03", "Coordinate delivery"],
            ].map(([number, text]) => (
              <div className="service-support-step" key={number}>
                <b>{number}</b><p>{text}</p><ArrowRight size={15} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="WHAT WE DO"
            title={
              <>
                PACKAGING <span className="orange">SERVICES</span>
              </>
            }
            text="From selecting the right packaging product to coordinating dependable delivery, Pack India keeps the process practical and customer-focused."
          />

          <div className="service-grid">
            {services.map(({ icon: Icon, title, text }) => (
              <article className="service-card service-card-enhanced" key={title}>
                <span className="service-card-number">{String(services.findIndex((service) => service.title === title) + 1).padStart(2, "0")}</span>
                <div className="icon">
                  <Icon size={25} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <Link href="/contact" className="service-card-link">
                  DISCUSS YOUR REQUIREMENT <ArrowRight size={12} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="service-approach-section">
        <div className="container service-approach-grid">
          <div>
            <span className="eyebrow">A PRACTICAL APPROACH</span>
            <h2>FROM REQUIREMENT TO <span className="orange">READY-TO-USE PACKAGING</span></h2>
            <p>Tell us what you are packing, how it is handled and where it needs to go. We help you select the right product and organise the next step with clarity.</p>
          </div>
          <div className="service-approach-points">
            {[
              "Share product, size and quantity details",
              "Get a practical packaging recommendation",
              "Receive quotation and delivery coordination",
            ].map((point) => <div key={point}><CheckCircle2 size={18} /> {point}</div>)}
          </div>
        </div>
      </section>

      <section
        className="promise-section"
        style={{ background: "#062b50", color: "#fff", padding: "55px 0" }}
      >
        <div className="container promise-grid">
          <div>
            <span className="eyebrow">THE PACK INDIA PROMISE</span>
            <h2 style={{ fontSize: 30, margin: "9px 0 15px" }}>
              PACKAGING SUPPORT THAT WORKS FOR YOUR BUSINESS
            </h2>
            <p
              style={{
                color: "#cbd8e4",
                lineHeight: 1.8,
                fontSize: 13,
                maxWidth: 600,
              }}
            >
              We focus on quality products, practical recommendations and
              reliable service so your packaging requirement is handled with
              less friction.
            </p>
            <Link
              href="/contact"
              className="btn btn-orange"
              style={{ marginTop: 14 }}
            >
              GET A QUOTE <ArrowRight size={14} />
            </Link>
          </div>
          <div className="promise-benefits">
            {[
              "Quality Products",
              "Competitive Pricing",
              "Timely Delivery",
              "Customer Satisfaction",
            ].map((item) => (
              <div
                key={item}
                style={{
                  border: "1px solid rgba(255,255,255,.18)",
                  padding: "18px 15px",
                  background: "rgba(255,255,255,.04)",
                }}
              >
                <CheckCircle2 size={18} color="#ff7419" />
                <div style={{ fontSize: 11, fontWeight: 800, marginTop: 9 }}>
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCta />
    </main>
  );
}
