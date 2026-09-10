import Link from "next/link";
import { ArrowRight, CheckCircle2, Factory, MapPin, Recycle, ShieldCheck } from "lucide-react";
import ContactCta from "../../components/ContactCta";

const comparisonRows = [
  ["Pricing", "Direct factory rates with zero distributor markups", "15%–30% markup added for brokerage"],
  ["Raw Material Control", "High-BF virgin & recycled kraft paper with strict GSM control", "Variable, unverified paper grades per batch"],
  ["Custom Profiles", "Any leg width, thickness, or notched profile made to order", "Limited to standard fast-moving catalogue sizes"],
  ["Machinery Technical Backing", "In-house engineering team designs, builds, and services units", "Third-party outsourced technicians with longer wait times"],
  ["Urgent Batches", "Priority slot allocation for urgent export dispatch deadlines", "Bound by third-party supplier lead times"],
];

const strengths = [
  { icon: MapPin, title: "Strategic Industrial Location", text: "Situated in Hoskote, Bengaluru's primary industrial cluster, enabling rapid same-day or next-day freight dispatch across Karnataka, Tamil Nadu, and Andhra Pradesh." },
  { icon: ShieldCheck, title: "High-Strength Structural Integrity", text: "Multi-layer lamination bonded with moisture-resistant adhesives delivers superior vertical compression strength, helping prevent pallet crush under double-stacked container loads." },
  { icon: Recycle, title: "100% Recyclable & Sustainable", text: "All edge boards, protectors and paper cores are manufactured using 100% eco-friendly, biodegradable kraft paper compliant with export phytosanitary standards (ISPM-15 exempt)." },
  { icon: Factory, title: "End-to-End Packaging Capability", text: "Whether you require finished consumable packaging delivered to your loading dock or automated machinery to manufacture boards in-house, we supply the complete operational ecosystem." },
];

export default function WhyUs() {
  return (
    <main>
      <section className="page-hero why-hero">
        <div className="container">
          <div className="breadcrumbs">Home → Why Us</div>
          <span className="eyebrow">THE PACK INDIA DIFFERENCE</span>
          <h1>ENGINEERED FOR LOAD STABILITY. BUILT FOR RELIABILITY.</h1>
          <p>Why leading manufacturers and logistics hubs choose Pack India over generic traders and intermediaries.</p>
        </div>
      </section>

      <section className="section why-comparison-section">
        <div className="container">
          <div className="section-title">
            <span>BUY DIRECT</span>
            <h2>DIRECT MANUFACTURER <span className="orange">VS. MIDDLEMAN</span></h2>
            <p>Understand the practical value of working directly with a packaging manufacturer.</p>
          </div>
          <div className="comparison-table-wrap">
            <table className="comparison-table">
              <thead><tr><th>Evaluation Factor</th><th>Pack India — Direct OEM &amp; Manufacturer</th><th>Middleman / Local Trader</th></tr></thead>
              <tbody>{comparisonRows.map(([factor, direct, trader]) => <tr key={factor}><th>{factor}</th><td><CheckCircle2 size={16} />{direct}</td><td>{trader}</td></tr>)}</tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section why-strength-section">
        <div className="container">
          <div className="section-title">
            <span>CORE STRENGTHS</span>
            <h2>BUILT AROUND <span className="orange">YOUR SUPPLY CHAIN</span></h2>
            <p>Focused on material reliability, practical customisation and a clear route from requirement to dispatch.</p>
          </div>
          <div className="why-strength-grid">
            {strengths.map(({ icon: Icon, title, text }) => <article key={title}><Icon /><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="custom-requirement-cta">
        <div className="container custom-requirement-inner">
          <div><span className="eyebrow">CUSTOM PACKAGING SUPPORT</span><h2>HAVE A NON-STANDARD PALLET SIZE OR CUSTOM MACHINE REQUIREMENT?</h2><p>Send your dimensional drawings or pallet specifications to our engineering desk for a same-day feasibility review and cost estimate.</p></div>
          <div className="custom-requirement-actions"><Link href="/contact" className="btn btn-orange">REQUEST CUSTOM QUOTE <ArrowRight size={14} /></Link><a href="https://wa.me/918123166638?text=Hello%20Pack%20India%2C%20I%20would%20like%20to%20discuss%20a%20custom%20packaging%20requirement." target="_blank" rel="noreferrer">CHAT ON WHATSAPP</a></div>
        </div>
      </section>
      <ContactCta />
    </main>
  );
}
