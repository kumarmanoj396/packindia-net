import Link from "next/link";
import { ArrowRight, ShieldCheck, Clock3, HeartHandshake, CheckCircle2 } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import ProductCard from "../components/ProductCard";
import LeadStrip from "../components/LeadStrip";
import ContactCta from "../components/ContactCta";
import { products } from "../lib/products";

export default function Home(){
  const featuredProducts = products.slice(0, 9);
  return <main>
    <section className="hero" style={{minHeight:"410px"}}>
      <div className="container hero-inner" style={{padding:"62px 0 54px"}}>
        <div className="hero-copy" style={{width:"53%"}}>
          <span className="eyebrow">SMART PACKAGING SOLUTIONS</span>
          <h1>SMART PACKAGING<br/><span>STRONGER BUSINESS</span></h1>
          <p>High quality packaging products for every industry. Safe. Reliable. Sustainable.</p>
          <div className="hero-points">
            <div className="hero-point"><i><ShieldCheck size={15}/></i>Premium Quality</div><div className="hero-point"><i><Clock3 size={15}/></i>Timely Delivery</div><div className="hero-point"><i><HeartHandshake size={15}/></i>Customer Satisfaction</div>
          </div>
          <div className="hero-actions"><Link href="/products" className="btn btn-orange">OUR PRODUCTS <ArrowRight size={14}/></Link><Link href="/contact" className="btn btn-outline">CONTACT US <ArrowRight size={14}/></Link></div>
        </div>
        <div className="hero-visual" aria-label="Packaging products visual">
          <div className="hero-box box-one"><span>PACK</span></div><div className="hero-box box-two"><span>INDIA</span></div>
          <div className="hero-sheet sheet-one"/><div className="hero-sheet sheet-two"/><div className="hero-roll roll-one"/><div className="hero-roll roll-two"/><div className="hero-roll roll-three"/><div className="hero-tape tape-one"/><div className="hero-tape tape-two"/>
        </div>
      </div>
    </section>

    <section className="section product-section" style={{paddingTop:"54px"}}>
      <div className="container"><SectionTitle eyebrow="PACKAGING PRODUCTS" title={<>OUR <span className="orange">PRODUCTS</span></>} text="Explore selected products from the Pack India catalogue. Visit the Products page for the complete range."/><div className="products-grid">{featuredProducts.map(p=><ProductCard key={p.slug} product={p}/>)}</div><div style={{textAlign:"center",marginTop:28}}><Link href="/products" className="btn btn-orange">VIEW COMPLETE CATALOGUE <ArrowRight size={14}/></Link></div></div>
    </section>

    <section className="section about-home" id="about-home">
      <div className="container about-home-grid">
        <div className="about-visual">
          <div className="about-building"><span>PACK INDIA</span><small>PACKAGING SOLUTIONS</small><div className="building-windows"/></div>
          <div className="about-badge"><b>PACK</b><span>PACKAGING<br/>SOLUTIONS</span></div>
        </div>
        <div className="about-copy">
          <span className="eyebrow">WHO WE ARE</span>
          <h2>PACKAGING PARTNER FOR <span className="orange">YOUR BUSINESS</span></h2>
          <p>Pack India’s catalogue covers angle board, paper core, packing materials, flexible packaging products and auto packaging machines.</p>
          <div className="about-checks">
            <div><CheckCircle2/><span>Angle board & paper core products</span></div>
            <div><CheckCircle2/><span>Films, pouches, tapes & protective materials</span></div>
            <div><CheckCircle2/><span>Strapping tools and consumables</span></div>
            <div><CheckCircle2/><span>Automatic and semi-automatic packaging machines</span></div>
          </div>
          <Link href="/about" className="text-link">MORE ABOUT US <ArrowRight size={14}/></Link>
        </div>
      </div>
    </section>

    <LeadStrip/>
    <section className="section" id="gallery"><div className="container"><SectionTitle eyebrow="OUR WORK" title={<>PACKAGING <span className="orange">IN FOCUS</span></>}/><div className="gallery-grid">{["Boxes","Tapes","Bubble Wrap","Stretch Film","Pouches","Sheets","Warehouse","Dispatch"].map((name,i)=><div className={`gallery-item gallery-${i+1}`} key={name}><span>{name}</span></div>)}</div></div></section>
    <ContactCta/>
  </main>
}
