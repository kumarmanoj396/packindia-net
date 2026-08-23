import Link from "next/link";
import { ArrowRight, Boxes, CircleDot, Layers3, Package, Warehouse, Truck } from "lucide-react";
import ContactCta from "../../components/ContactCta";

const gallery = [
  { title:"Corrugated Boxes", text:"Strong and practical packaging for shipping and storage.", icon:Boxes },
  { title:"Packaging Tapes", text:"Reliable sealing solutions for everyday operations.", icon:Package },
  { title:"Bubble Wrap", text:"Protective cushioning for fragile products.", icon:CircleDot },
  { title:"Stretch Film", text:"Secure wrapping for pallets, cartons and loads.", icon:Layers3 },
  { title:"Packaging Pouches", text:"Flexible packaging options for different applications.", icon:Package },
  { title:"Corrugated Sheets", text:"Versatile protective sheets for packing requirements.", icon:Layers3 },
  { title:"Warehouse & Stock", text:"Organised packaging inventory ready for dispatch.", icon:Warehouse },
  { title:"Dispatch & Delivery", text:"Packaging solutions prepared for timely delivery.", icon:Truck },
];

export default function Gallery(){return <main>
  <section className="page-hero"><div className="container"><div className="breadcrumbs">Home → Gallery</div><h1>PACK INDIA GALLERY</h1><p>Explore our packaging products, solutions and day-to-day packaging operations.</p></div></section>
  <section className="section"><div className="container"><div className="section-title"><span>OUR WORK</span><h2>PACKAGING <span className="orange">IN FOCUS</span></h2><p>A visual showcase of the product categories and business areas we support. Real company photographs can be added here once supplied.</p></div><div className="gallery-page-grid">{gallery.map(({title,text,icon:Icon},i)=><article className={`gallery-page-card gallery-page-${i+1}`} key={title}><div className="gallery-page-art"><Icon size={58}/><span>PACK INDIA</span></div><div className="gallery-page-body"><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>
  <section className="section gallery-note"><div className="container"><div className="gallery-note-inner"><div><span className="eyebrow">NEXT VISUAL UPGRADE</span><h2>ADD YOUR REAL PACKAGING PHOTOS</h2><p>Once you provide the Pack India logo, product photographs, warehouse photos and company images, this gallery can be converted into a real company portfolio.</p></div><Link href="/contact" className="btn btn-orange">SEND YOUR REQUIREMENTS <ArrowRight size={15}/></Link></div></div></section>
  <ContactCta/>
</main>}