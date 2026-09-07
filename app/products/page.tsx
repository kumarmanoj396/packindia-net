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
    <section className="section product-list-section">
      <div className="container">
        <SectionTitle eyebrow="PRODUCT LIST" title={<>OUR <span className="orange">PRODUCT RANGE</span></>} text="Explore our core machine, paper-product and corrugation-box range."/>
        <div className="product-list-grid">
          <article className="product-list-card"><span className="product-list-letter">A</span><div><h2>Machines</h2><ol type="a"><li>Angle Board Machine</li><li>Edge Board Machine</li><li>Edge Protector Machine</li><li>OD Punching Machine</li><li>Paper Core Machine</li></ol></div></article>
          <article className="product-list-card"><span className="product-list-letter">B</span><div><h2>Paper Products</h2><ol><li>Angle Board</li><li>V-Cut Paper Edge Protector</li><li>Paper Edge Protector</li><li>Paper Angle Edge Protector</li><li>High-Strength Laminated Edge Board</li><li>Spiral Edge Protector</li><li>Paper Edge Protector Covers</li></ol></div></article>
          <article className="product-list-card"><span className="product-list-letter">C</span><div><h2>Corrugation Box</h2><ol><li>Box</li><li>Two-ply Rolls</li><li>Three-ply Rolls</li></ol></div></article>
        </div>
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
