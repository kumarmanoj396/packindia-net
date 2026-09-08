"use client";

import Link from "next/link";
import { MoveHorizontal, Rotate3D } from "lucide-react";
import { PointerEvent, useState } from "react";

export default function ProductDepthViewer() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  function updateRotation(event: PointerEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
    const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;

    setRotation({ x: vertical * -12, y: horizontal * 18 });
  }

  function finishInteraction() {
    setIsDragging(false);
    setRotation({ x: 0, y: 0 });
  }

  return (
    <section className="section product-depth-section">
      <div className="container product-depth-grid">
        <div className="product-depth-copy">
          <span className="eyebrow">INTERACTIVE PRODUCT VIEW</span>
          <h2>
            EXPLORE THE <span className="orange">PAPER CORE</span>
          </h2>
          <p>
            Drag the product to view it with depth and perspective. This
            interactive preview helps customers inspect the product before
            making an enquiry.
          </p>
          <div className="product-depth-hint">
            <MoveHorizontal size={20} /> Drag or move your cursor over the
            image
          </div>
          <Link href="/products/paper-core" className="btn btn-orange">
            VIEW PAPER CORE
          </Link>
        </div>

        <div
          className={`product-depth-stage${isDragging ? " is-dragging" : ""}`}
          onPointerDown={(event) => {
            event.currentTarget.setPointerCapture(event.pointerId);
            setIsDragging(true);
            updateRotation(event);
          }}
          onPointerMove={updateRotation}
          onPointerUp={finishInteraction}
          onPointerCancel={finishInteraction}
          onPointerLeave={() => !isDragging && finishInteraction()}
          role="presentation"
        >
          <div
            className="product-depth-card"
            style={{
              transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            }}
          >
            <img
              src="/product-images/catalog/paper-core.png"
              alt="Paper Core product interactive preview"
            />
            <span className="product-depth-label">
              <Rotate3D size={16} /> INTERACTIVE VIEW
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
