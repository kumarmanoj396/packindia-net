import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ContactCta from "../../components/ContactCta";

const catalogueSheets = [
  { page: 2, title: "Product Catalogue — Page 2", image: "/packindia-page2.svg" },
  { page: 3, title: "Product Catalogue — Page 3", image: "/packindia-page3.svg" },
  { page: 4, title: "Product Catalogue — Page 4", image: "/packindia-page4.svg" },
];

export default function Gallery(){return <main>
  <section className="page-hero"><div className="container"><div className="breadcrumbs">Home → Gallery</div><h1>PACK INDIA GALLERY</h1><p>Real product photographs from the Pack India catalogue.</p></div></section>
  <section className="section"><div className="container"><div className="section-title"><span>REAL PRODUCT PHOTOS</span><h2>PACK INDIA <span className="orange">CATALOGUE</span></h2><p>Browse the actual Pack India product photographs supplied for the website. The catalogue images cover paper products, films and pouches, tapes, strapping products and packaging machines.</p></div>
    <div className="catalogue-gallery">{catalogueSheets.map(sheet=><article className="catalogue-card" key={sheet.page}><div className="catalogue-image"><img src={sheet.image} alt={sheet.title} loading="lazy"/></div><div className="catalogue-card-body"><span>CATALOGUE PAGE {sheet.page}</span><h3>{sheet.title}</h3></div></article>)}</div>
  </div></section>
  <section className="section gallery-note"><div className="container"><div className="gallery-note-inner"><div><span className="eyebrow">PACK INDIA PRODUCTS</span><h2>NEED A QUOTATION?</h2><p>Tell us the product, required size and quantity. We can help with your packaging requirement.</p></div><Link href="/contact" className="btn btn-orange">REQUEST A QUOTE <ArrowRight size={15}/></Link></div></div></section>
  <ContactCta/>
</main>}