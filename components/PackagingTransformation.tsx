"use client";

import { CheckCircle2, PackageCheck, ShieldCheck } from "lucide-react";
import { useState } from "react";
import Reveal from "./Reveal";

export default function PackagingTransformation() {
  const [secured, setSecured] = useState(true);

  return (
    <section className="section packaging-transformation">
      <Reveal className="container packaging-transformation-grid">
        <div className="transformation-copy">
          <span className="eyebrow">PROTECTION YOU CAN SEE</span>
          <h2>
            FROM PACKED TO <span className="orange">PROTECTED</span>
          </h2>
          <p>
            A few practical layers can make a load more stable during handling,
            storage and transport. Switch the view to see the difference.
          </p>
          <div className="transformation-tabs" role="group" aria-label="Packaging protection view">
            <button type="button" className={!secured ? "is-active" : ""} onClick={() => setSecured(false)} aria-pressed={!secured}>
              BEFORE
            </button>
            <button type="button" className={secured ? "is-active" : ""} onClick={() => setSecured(true)} aria-pressed={secured}>
              AFTER
            </button>
          </div>
          <ul>
            <li><ShieldCheck size={18} /> Edge protection for vulnerable corners</li>
            <li><PackageCheck size={18} /> Strapping and film for a secure load</li>
            <li><CheckCircle2 size={18} /> Packaging selected to suit the application</li>
          </ul>
        </div>
        <div className={`load-visual ${secured ? "is-secured" : "is-before"}`} aria-label={secured ? "Protected pallet load with corner boards and strapping" : "Unprotected pallet load"}>
          <div className="load-state-label">{secured ? "AFTER: SECURED LOAD" : "BEFORE: BASIC LOAD"}</div>
          <div className="load-stack">
            <i className="load-box box-one" />
            <i className="load-box box-two" />
            <i className="load-box box-three" />
            <i className="load-box box-four" />
            <i className="load-box box-five" />
            <i className="load-box box-six" />
            <b className="load-strap strap-vertical" />
            <b className="load-strap strap-horizontal" />
            <b className="load-corner corner-left" />
            <b className="load-corner corner-right" />
          </div>
          <div className="load-pallet"><i /><i /><i /></div>
          <p>{secured ? "Edge boards + strapping support a more stable shipment." : "Add protection based on your product and handling needs."}</p>
        </div>
      </Reveal>
    </section>
  );
}
