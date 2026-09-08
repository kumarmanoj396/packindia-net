import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ContactCta from "../../components/ContactCta";
import GalleryLightbox from "../../components/GalleryLightbox";
import { uploadedGalleryImages } from "../../lib/gallery";

export const dynamic = "force-dynamic";

export default async function Gallery() {
  const uploadedImages = await uploadedGalleryImages();
  const allImages = uploadedImages.map((image) => ({
    title: image.title,
    category: image.category,
    caption: image.caption,
    image: image.url,
    position: "center",
  }));
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">Home → Gallery</div>
          <h1>PACK INDIA GALLERY</h1>
          <p>Real product photographs from the Pack India catalogue.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-title">
            <span>REAL PRODUCT PHOTOS</span>
            <h2>
              PACK INDIA <span className="orange">CATALOGUE</span>
            </h2>
            <p>
              Browse the actual Pack India product photographs supplied for the
              website. The catalogue images cover paper products, films and
              pouches, tapes, strapping products and packaging machines.
            </p>
          </div>
          {allImages.length ? (
            <GalleryLightbox images={allImages} />
          ) : (
            <p className="gallery-empty">
              Our Gallery is being updated. Please check back soon.
            </p>
          )}
        </div>
      </section>
      <section className="section gallery-note">
        <div className="container">
          <div className="gallery-note-inner">
            <div>
              <span className="eyebrow">PACK INDIA PRODUCTS</span>
              <h2>NEED A QUOTATION?</h2>
              <p>
                Tell us the product, required size and quantity. We can help
                with your packaging requirement.
              </p>
            </div>
            <Link href="/contact" className="btn btn-orange">
              REQUEST A QUOTE <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
      <ContactCta />
    </main>
  );
}
