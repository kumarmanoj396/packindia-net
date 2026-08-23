import SectionTitle from "../../components/SectionTitle";
import ProductCard from "../../components/ProductCard";
import ContactCta from "../../components/ContactCta";
import { products } from "../../lib/products";
export default function Products(){return <main><section className="page-hero"><div className="container"><div className="breadcrumbs">Home → Products</div><h1>OUR PRODUCTS</h1><p>Packaging products designed to meet diverse industry needs.</p></div></section><section className="section"><div className="container"><SectionTitle eyebrow="PRODUCT RANGE" title={<>PACKAGING <span className="orange">PRODUCTS</span></>} text="Explore our core packaging categories. Select a product to view its details and request a quotation."/><div className="products-grid">{products.map(p=><ProductCard key={p.slug} product={p}/>)}</div></div></section><ContactCta/></main>}
