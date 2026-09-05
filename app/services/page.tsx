import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock3, Leaf, PackageCheck, ShieldCheck, Truck } from "lucide-react";
import SectionTitle from "../../components/SectionTitle";
import ContactCta from "../../components/ContactCta";

const services = [
  { icon: PackageCheck, title: "Custom Packaging", text: "Practical packaging solutions tailored to your product, handling and protection requirements." },
  { icon: Truck, title: "On-Time Delivery", text: "Planned and dependable delivery support to help keep your packaging supply on schedule." },
  { icon: ShieldCheck, title: "Quality Assurance", text: "Quality-focused product selection and checks to maintain consistent packaging performance." },
  { icon: Leaf, title: "Eco-Friendly Solutions", text: "Packaging options designed to support recyclable and more sustainable business practices." },
  { icon: CheckCircle2, title: "Packaging Consultation", text: "Guidance on choosing the right packaging product, size and application for your requirement." },
  { icon: Clock3, title: "Responsive Support", text: "Clear communication from enquiry through product selection, quotation and delivery coordination." },
];

export default function Services() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">Home → Services</div>
          <h1>OUR SERVICES</h1>
          <p>We provide end-to-end packaging solutions that help businesses protect products, improve handling and deliver with confidence.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="WHAT WE DO"
            title={<>PACKAGING <span className="orange">SERVICES</span></>}
            text="From selecting the right packaging product to coordinating dependable delivery, Pack India keeps the process practical and customer-focused."
          />

          <div className="service-grid">
            {services.map(({ icon: Icon, title, text }) => (
              <article className="service-card" key={title} style={{ transition: "transform .2s, box-shadow .2s" }}>
                <div className="icon" style={{ width: 48, height: 48, borderRadius: 10, display: "grid", placeItems: "center", marginBottom: 14 }}>
                  <Icon size={25} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <Link href="/contact" style={{ color: "#ff7419", fontSize: 10, fontWeight: 800, display: "inline-flex", alignItems: "center", gap: 5, marginTop: 8 }}>
                  DISCUSS YOUR REQUIREMENT <ArrowRight size={12} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#062b50", color: "#fff", padding: "55px 0" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 45, alignItems: "center" }}>
          <div>
            <span className="eyebrow">THE PACK INDIA PROMISE</span>
            <h2 style={{ fontSize: 30, margin: "9px 0 15px" }}>PACKAGING SUPPORT THAT WORKS FOR YOUR BUSINESS</h2>
            <p style={{ color: "#cbd8e4", lineHeight: 1.8, fontSize: 13, maxWidth: 600 }}>
              We focus on quality products, practical recommendations and reliable service so your packaging requirement is handled with less friction.
            </p>
            <Link href="/contact" className="btn btn-orange" style={{ marginTop: 14 }}>GET A QUOTE <ArrowRight size={14} /></Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {["Quality Products", "Competitive Pricing", "Timely Delivery", "Customer Satisfaction"].map((item) => (
              <div key={item} style={{ border: "1px solid rgba(255,255,255,.18)", padding: "18px 15px", background: "rgba(255,255,255,.04)" }}>
                <CheckCircle2 size={18} color="#ff7419" />
                <div style={{ fontSize: 11, fontWeight: 800, marginTop: 9 }}>{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCta />
    </main>
  );
}
