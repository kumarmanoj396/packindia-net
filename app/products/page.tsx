import SectionTitle from "../../components/SectionTitle";
import ContactCta from "../../components/ContactCta";
import ProductsExplorer from "../../components/ProductsExplorer";

export default function Products(){
  return <main>
    <section className="page-hero">
      <div className="container">
        <div className="breadcrumbs">Home → Products</div>
        <h1>OUR PRODUCTS</h1>
        <p>We offer a comprehensive range of packaging products made to protect, secure and move products safely.</p>
      </div>
    </section>
    <section className="section products-page-section">
      <div className="container">
        <SectionTitle eyebrow="PRODUCT RANGE" title={<>PACKAGING <span className="orange">PRODUCTS</span></>} text="Browse our core packaging categories. Select a category to quickly explore the products available."/>
        <ProductsExplorer />
      </div>
    </section>
    <section className="section product-assurance">
      <div className="container assurance-grid">
        <div><span className="eyebrow">PACK INDIA PROMISE</span><h2>QUALITY PACKAGING. <span className="orange">RELIABLE SERVICE.</span></h2></div>
        <div className="assurance-points"><div><b>01</b><span>Quality checked products</span></div><div><b>02</b><span>Practical packaging solutions</span></div><div><b>03</b><span>Timely delivery support</span></div></div>
      </div>
    </section>
    <ContactCta/>
  </main>
}
