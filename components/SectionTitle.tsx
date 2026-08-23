import type { ReactNode } from "react";
export default function SectionTitle({eyebrow,title,text}:{eyebrow?:string;title:ReactNode;text?:string}){return <div className="section-title">{eyebrow&&<span>{eyebrow}</span>}<h2>{title}</h2>{text&&<p>{text}</p>}</div>}
