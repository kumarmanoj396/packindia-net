import { ClipboardList, PackageCheck, SearchCheck, Truck } from "lucide-react";
import Reveal from "./Reveal";

const steps = [
  {
    icon: <ClipboardList />,
    title: "SHARE YOUR REQUIREMENT",
    text: "Tell us the product, size, quantity and delivery location.",
  },
  {
    icon: <SearchCheck />,
    title: "SELECT THE RIGHT PRODUCT",
    text: "Our team helps identify a practical packaging solution.",
  },
  {
    icon: <PackageCheck />,
    title: "PREPARE & CHECK",
    text: "Products are prepared to match the agreed requirement.",
  },
  {
    icon: <Truck />,
    title: "DISPATCH WITH CARE",
    text: "We coordinate dependable delivery for your business.",
  },
];

export default function PackagingProcess() {
  return (
    <section className="section packaging-process">
      <Reveal className="container">
        <div className="section-title">
          <span>HOW WE WORK</span>
          <h2>
            FROM ENQUIRY TO <span className="orange">DELIVERY</span>
          </h2>
          <p>A clear, practical process from your first message to dispatch.</p>
        </div>
        <div className="process-steps">
          {steps.map((step, index) => (
            <article className={`process-step process-step-${index + 1}`} key={step.title}>
              <div className="process-number">0{index + 1}</div>
              <div className="process-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
