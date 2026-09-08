"use client";

import { Award, Boxes, Truck, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function Counter({ end }: { end: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(end);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      const start = performance.now();
      const duration = 900;
      const frame = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        setValue(Math.round(end * progress));
        if (progress < 1) requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
      observer.disconnect();
    }, { threshold: 0.3 });
    observer.observe(element);
    return () => observer.disconnect();
  }, [end]);

  return <span ref={ref}>{value}+</span>;
}

export default function LeadStrip() {
  return (
    <section className="lead-strip">
      <div className="container lead-grid">
        <div>
          <Award />
          <b><Counter end={10} /></b>
          <span>YEARS OF EXPERIENCE</span>
        </div>
        <div>
          <Users />
          <b><Counter end={500} /></b>
          <span>HAPPY CLIENTS</span>
        </div>
        <div>
          <Boxes />
          <b><Counter end={1000} /></b>
          <span>PRODUCTS</span>
        </div>
        <div>
          <Truck />
          <b>ON TIME</b>
          <span>DELIVERY</span>
        </div>
      </div>
    </section>
  );
}
