import {
  CheckCircle2,
  Target,
  Eye,
  ShieldCheck,
  Truck,
  Users,
  PackageCheck,
  ArrowRight,
} from "lucide-react";
import LeadStrip from "../../components/LeadStrip";
import ContactCta from "../../components/ContactCta";

export default function About() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">Home → About Us</div>
          <h1>ABOUT PACK INDIA</h1>
          <p>
            Manufacturers and suppliers of angle board, paper core, packaging
            materials and packaging machines from Hoskote, Bengaluru.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-story-grid">
          <div className="about-story-visual">
            <div className="about-story-building">
              <b>PACK INDIA</b>
              <span>PACKAGING SOLUTIONS</span>
            </div>
            <div className="about-story-badge">
              <strong>10+</strong>
              <span>
                YEARS OF
                <br />
                EXPERIENCE
              </span>
            </div>
          </div>
          <div className="about-story-copy">
            <span className="eyebrow">WHO WE ARE</span>
            <h2>PACKAGING PARTNER FOR YOUR BUSINESS</h2>
            <p>
              Pack India is focused on helping businesses protect, present and
              move their products with dependable packaging solutions. Our
              approach is straightforward: understand the requirement, recommend
              the right product and support the customer through every step.
            </p>
            <p>
              We believe good packaging should combine quality, consistency and
              value. Our product range is designed to serve everyday business
              requirements while keeping service responsive and delivery
              dependable.
            </p>
            <div className="about-checks">
              <div>
                <CheckCircle2 /> High quality raw materials
              </div>
              <div>
                <CheckCircle2 /> Practical packaging solutions
              </div>
              <div>
                <CheckCircle2 /> Timely and dependable delivery
              </div>
              <div>
                <CheckCircle2 /> Customer-first support
              </div>
            </div>
            <a className="btn btn-orange" href="/contact">
              GET IN TOUCH <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>

      <section className="about-capabilities-section">
        <div className="container">
          <div className="section-title">
            <span>WHAT WE PROVIDE</span>
            <h2>COMPLETE PACKAGING <span className="orange">CAPABILITY</span></h2>
            <p>One practical source for protective paper products, flexible packing materials, tools and machinery.</p>
          </div>
          <div className="about-capabilities-grid">
            <article><PackageCheck /><h3>Protective Paper Products</h3><p>Angle boards, edge protectors, paper cores and tube solutions for stable handling and transit.</p></article>
            <article><ShieldCheck /><h3>Packaging Materials</h3><p>Films, tapes, strapping products and practical consumables for daily packing operations.</p></article>
            <article><Truck /><h3>Machinery &amp; Support</h3><p>Packaging-machine options and responsive support from product selection through delivery coordination.</p></article>
          </div>
        </div>
      </section>

      <section className="section about-values">
        <div className="container">
          <div className="section-title">
            <span>OUR FOUNDATION</span>
            <h2>
              WHAT DRIVES <span className="orange">PACK INDIA</span>
            </h2>
            <p>
              Our values guide how we select products, serve customers and build
              long-term business relationships.
            </p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <Target />
              <h3>OUR MISSION</h3>
              <p>
                To provide reliable packaging products and responsive service
                that make everyday business operations easier.
              </p>
            </div>
            <div className="value-card">
              <Eye />
              <h3>OUR VISION</h3>
              <p>
                To become a trusted packaging partner known for consistency,
                value and customer satisfaction.
              </p>
            </div>
            <div className="value-card">
              <ShieldCheck />
              <h3>QUALITY FIRST</h3>
              <p>
                We focus on dependable materials and practical products suited
                to real packaging requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-benefits">
        <div className="container">
          <div className="section-title">
            <span>WHY CHOOSE US</span>
            <h2>
              THE PACK INDIA <span className="orange">PROMISE</span>
            </h2>
          </div>
          <div className="benefits-grid">
            <div>
              <Truck />
              <b>Timely Delivery</b>
              <span>Reliable service built around your business schedule.</span>
            </div>
            <div>
              <ShieldCheck />
              <b>Quality Products</b>
              <span>
                Packaging solutions selected for consistent performance.
              </span>
            </div>
            <div>
              <Users />
              <b>Customer Focus</b>
              <span>Helpful support from product selection to enquiry.</span>
            </div>
          </div>
        </div>
      </section>

      <LeadStrip />
      <ContactCta />
    </main>
  );
}
