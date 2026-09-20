"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, MessageCircle } from "lucide-react";

const whatsappNumber = "918123166638";

export default function ProductQuoteForm({ productName }: { productName: string }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const quantity = String(data.get("quantity") || "").trim();
    const city = String(data.get("city") || "").trim();
    const requirement = String(data.get("requirement") || "").trim();
    if (!name || !phone || !quantity || !city || !requirement) return;

    const message = [
      "*Pack India - Quote Request*",
      "",
      `Product: ${productName}`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Quantity: ${quantity}`,
      `Delivery city / pincode: ${city}`,
      `Requirement: ${requirement}`,
    ].join("\n");

    setSubmitted(true);
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <section className="product-quote-form" aria-labelledby="quote-form-title">
      <div className="product-quote-heading">
        <span>FAST QUOTE</span>
        <h2 id="quote-form-title">Get a quote for {productName}</h2>
        <p>Tell us the quantity and delivery location. Your enquiry opens in WhatsApp, ready to send.</p>
      </div>
      <form onSubmit={handleSubmit}>
        <input name="product" type="hidden" value={productName} readOnly />
        <input name="name" aria-label="Your name" placeholder="Your name *" required />
        <input name="phone" aria-label="Phone number" placeholder="Phone number *" inputMode="tel" type="tel" required />
        <input name="quantity" aria-label="Required quantity" placeholder="Required quantity *" required />
        <input name="city" aria-label="Delivery city or pincode" placeholder="Delivery city / pincode *" required />
        <textarea name="requirement" aria-label="Requirement details" placeholder="Size, material, application or other requirement *" required />
        <button className="btn btn-orange" type="submit"><MessageCircle size={15} /> SEND QUOTE REQUEST</button>
      </form>
      {submitted && <p className="product-quote-success"><CheckCircle2 size={16} /> WhatsApp opened with your quote request. Please send the message to complete it.</p>}
      <style jsx>{`
        .product-quote-form { margin-top: 24px; border: 1px solid var(--border); background: var(--surface-soft); padding: 18px; }
        .product-quote-heading span { color: var(--pack-orange); font-size: 10px; font-weight: 800; letter-spacing: 1.1px; }
        .product-quote-heading h2 { margin: 5px 0 6px; color: var(--heading); font-size: 18px; line-height: 1.25; }
        .product-quote-heading p { margin: 0 0 14px; color: var(--muted); font-size: 11px; line-height: 1.55; }
        form { display: grid; grid-template-columns: 1fr 1fr; gap: 9px; }
        input, textarea { width: 100%; box-sizing: border-box; border: 1px solid var(--border); background: var(--surface); color: var(--text); padding: 10px 11px; font: inherit; font-size: 12px; }
        textarea, button { grid-column: 1 / -1; }
        textarea { min-height: 70px; resize: vertical; }
        button { justify-content: center; }
        .product-quote-success { display: flex; gap: 7px; align-items: flex-start; margin: 12px 0 0; color: #167044; font-size: 11px; font-weight: 700; line-height: 1.5; }
        @media (max-width: 520px) { form { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
