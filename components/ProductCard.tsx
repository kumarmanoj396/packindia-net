import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "../lib/products";
export default function ProductCard({product}:{product:Product}){return <Link href={`/products/${product.slug}`} className="product-card"><div className="product-art"><img className="product-image" src={product.image} alt={product.name} /></div><div className="product-card-body"><h3>{product.name}</h3><p>{product.short}</p><span>VIEW PRODUCT <ArrowUpRight size={13}/></span></div></Link>}
