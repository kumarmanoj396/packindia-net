import Link from "next/link";
import { ArrowRight, ShieldCheck, Clock3, HeartHandshake } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import ProductCard from "../components/ProductCard";
import LeadStrip from "../components/LeadStrip";
import ContactCta from "../components/ContactCta";
import { products } from "../lib/products";

export default function Home(){
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
      <div className="container"><SectionTitle eyebrow="PACKAGING PRODUCTS" title={<>OUR <span className="orange">PRODUCTS</span></>} text="We offer a wide range of packaging products that ensure protection, durability and cost-efficiency for your business."/><div className="products-grid">{products.map(p=><ProductCard key={p.slug} product={p}/>)}</div></div>
    </section>

    <LeadStrip/>
    <section className="section why"><div className="container why-grid"><div><SectionTitle eyebrow="WHY PACK INDIA" title={<>PACKAGING YOU CAN <span className="orange">TRUST</span></>} text="We focus on dependable products, practical solutions and service that helps businesses package, protect and move their products confidently."/><div className="checks"><div><span>✓</span> High quality raw materials</div><div><span>✓</span> Advanced manufacturing and sourcing</div><div><span>✓</span> Timely delivery</div><div><span>✓</span> Customer-first approach</div></div></div><div className="warehouse"><div className="warehouse-building"><span>PACK INDIA</span><small>PACKAGING SOLUTIONS</small></div></div></div></section>
    <section className="section" id="gallery"><div className="container"><SectionTitle eyebrow="OUR WORK" title={<>PACKAGING <span className="orange">IN FOCUS</span></>}/><div className="gallery-grid">{["Boxes","Tapes","Bubble Wrap","Stretch Film","Pouches","Sheets","Warehouse","Dispatch"].map((name,i)=><div className={`gallery-item gallery-${i+1}`} key={name}><span>{name}</span></div>)}</div></div></section>
    <ContactCta/>
  </main>
}
