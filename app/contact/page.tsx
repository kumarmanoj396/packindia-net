"use client";

import { FormEvent, useState } from "react";
import { Mail, MapPin, Phone, Clock3, MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import ContactCta from "../../components/ContactCta";

const whatsappNumber = "918123166638";

export default function Contact(){
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const product = String(data.get("product") || "").trim();
    const quantity = String(data.get("quantity") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name || !phone || !product || !message) return;
    const whatsappMessage = [
      "*Pack India - New Enquiry*", "", `Name: ${name}`, `Email: ${email || "Not provided"}`, `Phone: ${phone}`,
      `Product: ${product}`, `Quantity: ${quantity || "Not specified"}`, `Requirement: ${message}`,
    ].join("\n");
    setSubmitted(true);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, "_blank", "noopener,noreferrer");
    form.reset();
  }

  return <main>
    <section className="page-hero contact-hero"><div className="container"><div className="breadcrumbs">Home → Contact Us</div><h1>CONTACT US</h1><p>We are here to help you. Get in touch with Pack India for your packaging requirements.</p></div></section>
    <section className="section"><div className="container contact-grid contact-enhanced">
      <div className="contact-left"><span className="eyebrow">LET'S CONNECT</span><h2>GET IN TOUCH</h2><p className="contact-intro">Tell us what you need and our team will help you find the right packaging solution for your business.</p><div className="contact-info">
        <div className="contact-item"><MapPin/><div><b>ADDRESS</b><span>Sy No.117/4, Dodda Hullur Village, Kasaba Hobli, Hoskote, Bengaluru - 562114.</span></div></div>
        <div className="contact-item"><Phone/><div><b>PHONE</b><span><a href="tel:+918123166638">+91 81231 66638</a><br/><a href="tel:+919844723888">+91 98447 23888</a></span></div></div>
        <div className="contact-item"><Mail/><div><b>EMAIL</b><span><a href="mailto:sales.packindia@gmail.com">sales.packindia@gmail.com</a><br/><a href="mailto:packindia1991@gmail.com">packindia1991@gmail.com</a></span></div></div>
        <div className="contact-item"><Clock3/><div><b>WEBSITE</b><span>www.packindia.net</span></div></div>
      </div><a className="whatsapp-contact" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer"><MessageCircle/> WhatsApp Us <ArrowRight/></a></div>
      <form className="form contact-form" onSubmit={handleSubmit}>
        <div className="form-heading"><span>QUICK ENQUIRY</span><h3>SEND US A MESSAGE</h3><p>Share your requirement and we'll open a ready-to-send WhatsApp enquiry.</p></div>
        <input name="name" placeholder="Your Name *" required /><input name="email" placeholder="Your Email" type="email" /><input name="phone" placeholder="Your Phone *" type="tel" required />
        <select name="product" defaultValue="" required aria-label="Select Product"><option value="" disabled>Select Product *</option><option>Paper & Board</option><option>Films & Pouches</option><option>Tapes</option><option>Strapping & Tools</option><option>Packaging Machines</option><option>Other Catalogue Requirement</option></select>
        <input name="quantity" placeholder="Quantity / Approx. Requirement" /><textarea name="message" placeholder="Tell us your size, material, application or other requirement *" required />
        <button className="btn btn-orange" type="submit"><MessageCircle size={15}/> SEND ENQUIRY ON WHATSAPP <ArrowRight size={15}/></button>
        {submitted && <div className="form-success"><CheckCircle2 size={17}/> WhatsApp opened with your enquiry. Please send the message to complete the request.</div>}
      </form>
    </div></section>
    <section className="section map-section" style={{paddingTop:0}}><div className="container"><div className="map-card"><div><span className="eyebrow">FIND US</span><h2>OUR LOCATION</h2><p>Our catalogue lists the business address at Hoskote, Bengaluru - 562114.</p><a className="btn btn-orange" href="https://www.google.com/maps/search/?api=1&query=Sy+No.117%2F4+Dodda+Hullur+Village+Kasaba+Hobli+Hoskote+Bengaluru+562114" target="_blank" rel="noreferrer">OPEN IN GOOGLE MAPS <ArrowRight size={15}/></a></div><div className="map-placeholder"><MapPin size={42}/><b>PACK INDIA</b><span>Hoskote, Bengaluru - 562114</span></div></div></div></section>
    <ContactCta/>
    <style jsx>{` .contact-enhanced{align-items:start}.contact-left{padding:8px 0}.contact-left h2{font-size:32px;color:#092a4c;margin:8px 0 12px}.contact-intro{color:#687786;font-size:13px;line-height:1.8;max-width:470px}.contact-info{margin-top:26px}.whatsapp-contact{display:inline-flex;align-items:center;gap:8px;margin-top:25px;background:#148f55;color:#fff;padding:12px 17px;font-size:11px;font-weight:800}.whatsapp-contact svg:last-child{margin-left:4px}.contact-form{background:#f7f9fa;padding:26px;border:1px solid #e5e9ed;box-shadow:0 12px 30px rgba(8,42,70,.06)}.form-heading{grid-column:1/-1}.form-heading span{font-size:10px;font-weight:800;color:#f36b21;letter-spacing:1.2px}.form-heading h3{font-size:22px;color:#092a4c;margin:6px 0}.form-heading p{font-size:11px;color:#687786;margin:0 0 7px}.contact-form input,.contact-form textarea,.contact-form select{background:#fff}.contact-form select{width:100%;border:1px solid #dce2e7;padding:12px;font:inherit;color:#34495e}.contact-form textarea{min-height:120px}.contact-form button{grid-column:1/-1}.form-success{grid-column:1/-1;display:flex;align-items:flex-start;gap:8px;padding:11px 13px;background:#eaf8f0;color:#167044;font-size:11px;line-height:1.5;font-weight:700}.map-card{display:grid;grid-template-columns:1fr 1.25fr;gap:28px;background:#062b50;color:#fff;padding:28px;align-items:stretch}.map-card h2{font-size:26px;margin:7px 0 10px}.map-card p{color:#cbd8e4;font-size:12px;line-height:1.7;max-width:430px}.map-placeholder{min-height:230px;background:linear-gradient(135deg,#e5ecef,#b8c9cf);color:#092a4c;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px}.map-placeholder svg{color:#f36b21}.map-placeholder b{font-size:16px}.map-placeholder span{font-size:11px}@media(max-width:700px){.map-card{grid-template-columns:1fr}.contact-form{padding:18px}} `}</style>
  </main>
}