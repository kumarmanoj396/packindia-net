import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ContactCta from "../../components/ContactCta";

const galleryProducts = [
  { title: "Paper Core", image: "/product-images/paper-core.png" },
  { title: "Paper Tube", image: "/product-images/paper-tube.png" },
  { title: "Angle Board", image: "/product-images/angle-board.png" },
  { title: "Stretch Film", image: "/product-images/stretch-film.png" },
  { title: "BOPP Tapes", image: "/product-images/bopp-tapes.png" },
  { title: "Packaging Machines", image: "/product-images/packing-machine.png" },
];

export default function Gallery(){return <main>
  <section className="page-hero"><div className="container"><div className="breadcrumbs">Home → Gallery</div><h1>PACK INDIA GALLERY</h1><p>Real product photographs from the Pack India catalogue.</p></div></section>
  <section className="section"><div className="container"><div className="section-title"><span>REAL PRODUCT PHOTOS</span><h2>PACK INDIA <span className="orange">CATALOGUE</span></h2><p>Browse the actual Pack India product photographs supplied for the website. The catalogue images cover paper products, films and pouches, tapes, strapping products and packaging machines.</p></div>
    <div className="catalogue-gallery">{galleryProducts.map(product=><article className="catalogue-card" key={product.title}><div className="catalogue-image"><img src={product.image} alt={product.title} loading="lazy"/></div><div className="catalogue-card-body"><span>PACK INDIA PRODUCT</span><h3>{product.title}</h3></div></article>)}</div>
  </div></section>
  <section className="section gallery-note"><div className="container"><div className="gallery-note-inner"><div><span className="eyebrow">PACK INDIA PRODUCTS</span><h2>NEED A QUOTATION?</h2><p>Tell us the product, required size and quantity. We can help with your packaging requirement.</p></div><Link href="/contact" className="btn btn-orange">REQUEST A QUOTE <ArrowRight size={15}/></Link></div></div></section>
  <ContactCta/>
</main>}
