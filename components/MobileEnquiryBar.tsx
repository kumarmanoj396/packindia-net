"use client";

import Link from "next/link";
import { FileText, MessageCircle, Phone } from "lucide-react";

const whatsappMessage = encodeURIComponent(
  "Hello Pack India, I would like to discuss my packaging requirement.",
);

export default function MobileEnquiryBar() {
  return (
    <nav className="mobile-enquiry-bar" aria-label="Quick contact options">
      <a href="tel:+918123166638"><Phone size={17} /><span>CALL</span></a>
      <a className="mobile-whatsapp" href={`https://wa.me/918123166638?text=${whatsappMessage}`} target="_blank" rel="noreferrer" data-analytics-event="whatsapp_enquiry" data-placement="mobile_sticky_bar">
        <MessageCircle size={18} /><span>WHATSAPP</span>
      </a>
      <Link href="/contact"><FileText size={17} /><span>GET QUOTE</span></Link>
    </nav>
  );
}
