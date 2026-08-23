import { Mail, MapPin, Phone, Clock3, MessageCircle, ArrowRight } from "lucide-react";
import ContactCta from "../../components/ContactCta";

export default function Contact(){
  return <main>
    <section className="page-hero contact-hero"><div className="container"><div className="breadcrumbs">Home → Contact Us</div><h1>CONTACT US</h1><p>We are here to help you. Get in touch with Pack India for your packaging requirements.</p></div></section>

    <section className="section"><div className="container contact-grid contact-enhanced">
      <div className="contact-left">
        <span className="eyebrow">LET'S CONNECT</span><h2>GET IN TOUCH</h2>
        <p className="contact-intro">Tell us what you need and our team will help you find the right packaging solution for your business.</p>
        <div className="contact-info">
          <div className="contact-item"><MapPin/><div><b>ADDRESS</b><span>Industrial Area, Bangalore – 560099, Karnataka, India</span></div></div>
          <div className="contact-item"><Phone/><div><b>PHONE</b><span>+91 98765 43210</span></div></div>
          <div className="contact-item"><Mail/><div><b>EMAIL</b><span>info@packindia.net</span></div></div>
          <div className="contact-item"><Clock3/><div><b>BUSINESS HOURS</b><span>Mon - Sat: 9:00 AM - 6:00 PM<br/>Sunday: Closed</span></div></div>
        </div>
        <a className="whatsapp-contact" href="https://wa.me/919876543210" target="_blank" rel="noreferrer"><MessageCircle/> WhatsApp Us <ArrowRight/></a>
      </div>
      <form className="form contact-form"><div className="form-heading"><span>QUICK ENQUIRY</span><h3>SEND US A MESSAGE</h3><p>Share your requirement and we'll get back to you.</p></div><input placeholder="Your Name"/><input placeholder="Your Email" type="email"/><input placeholder="Your Phone"/><input placeholder="Subject"/><textarea placeholder="Your Message"/><button className="btn btn-orange" type="button">SEND MESSAGE <ArrowRight size={15}/></button></form>
    </div></section>

    <section className="section map-section" style={{paddingTop:0}}><div className="container"><div className="map-card"><div><span className="eyebrow">FIND US</span><h2>OUR LOCATION</h2><p>Visit us or contact our team to discuss your packaging needs.</p><a className="btn btn-orange" href="https://www.google.com/maps/search/?api=1&query=Industrial+Area+Bangalore+560099" target="_blank" rel="noreferrer">OPEN IN GOOGLE MAPS <ArrowRight size={15}/></a></div><div className="map-placeholder"><MapPin size={42}/><b>PACK INDIA</b><span>Industrial Area, Bangalore</span></div></div></div></section>
    <ContactCta/>
  </main>
}