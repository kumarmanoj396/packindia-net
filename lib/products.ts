export type Product = {
  slug: string;
  name: string;
  category: string;
  short: string;
  description: string;
  features: string[];
  gradient: string;
  icon: string;
};

const makeProduct = (name: string, category: string, icon: string, gradient: string): Product => ({
  slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
  name,
  category,
  short: `${name} — listed in the Pack India product catalogue.`,
  description: `${name} is part of Pack India's packaging product range. Contact the team for available specifications, sizes, quantities and pricing.` ,
  features: ["Listed in the Pack India catalogue", "Specifications available as per requirement", "Suitable for packaging applications", "Contact Pack India for quotation"],
  gradient,
  icon,
});

export const products: Product[] = [
  // Paper, board & core products
  makeProduct("Paper Core", "Paper & Board", "◉", "linear-gradient(135deg,#d6a15f,#8b572d)"),
  makeProduct("Paper Tube", "Paper & Board", "○", "linear-gradient(135deg,#c9975c,#82502d)"),
  makeProduct("Angle Board", "Paper & Board", "◇", "linear-gradient(135deg,#d7a86b,#9a6334)"),
  makeProduct("OD Protector", "Paper & Board", "◌", "linear-gradient(135deg,#b9864b,#6f4a2d)"),
  makeProduct("Vertical Protection", "Paper & Board", "▣", "linear-gradient(135deg,#d9b078,#956037)"),
  makeProduct("ID Protectors", "Paper & Board", "◎", "linear-gradient(135deg,#a8b0b5,#596a76)"),
  makeProduct("Self Adhesive Edge Board", "Paper & Board", "▤", "linear-gradient(135deg,#d9ad73,#8c5b32)"),
  makeProduct("Angle Board Flat", "Paper & Board", "▰", "linear-gradient(135deg,#e1ba83,#9a693d)"),
  makeProduct("Paper Tube Container", "Paper & Board", "▥", "linear-gradient(135deg,#d0a06a,#83502b)"),
  makeProduct("Kraft Paper Tubes with Lid", "Paper & Board", "◎", "linear-gradient(135deg,#d8b17a,#8a5a32)"),
  makeProduct("Packing Container", "Paper & Board", "▣", "linear-gradient(135deg,#c89557,#76502e)"),
  makeProduct("Corrugated Box & Roll, 3 Ply to 9 Ply", "Paper & Board", "▤", "linear-gradient(135deg,#c98a42,#704724)"),
  makeProduct("Pallets", "Paper & Board", "▦", "linear-gradient(135deg,#b47b43,#694522)"),

  // Films, pouches & protective packaging
  makeProduct("LD, LLDPE, PP, BOPP, HM, HDPE - Film", "Films & Pouches", "◍", "linear-gradient(135deg,#b9d8e5,#4d758b)"),
  makeProduct("Stretch Film", "Films & Pouches", "◉", "linear-gradient(135deg,#e7edf0,#aeb8bf)"),
  makeProduct("Air Bubble Film", "Films & Pouches", "○", "linear-gradient(135deg,#eef4f7,#a9c0cb)"),
  makeProduct("Shrink Film", "Films & Pouches", "◌", "linear-gradient(135deg,#dfe9ee,#8298a5)"),
  makeProduct("Agriculture Film", "Films & Pouches", "▱", "linear-gradient(135deg,#b7d6a0,#537d50)"),
  makeProduct("Air Bubble Pouch", "Films & Pouches", "◇", "linear-gradient(135deg,#e7f2f5,#a5c3cf)"),
  makeProduct("Surface Protection Film", "Films & Pouches", "▱", "linear-gradient(135deg,#d6edf4,#6f9eb1)"),
  makeProduct("PVC Shrink Film", "Films & Pouches", "◍", "linear-gradient(135deg,#dfe7eb,#8799a5)"),
  makeProduct("PVC Pouches", "Films & Pouches", "◇", "linear-gradient(135deg,#d9edf2,#7ba5b4)"),
  makeProduct("Polyolefin - POF Shrink Film", "Films & Pouches", "◍", "linear-gradient(135deg,#e9edf0,#9da9b0)"),
  makeProduct("LD Shrink Film Roll", "Films & Pouches", "◎", "linear-gradient(135deg,#d9e4e8,#8b9ca5)"),
  makeProduct("LD / HM Roll", "Films & Pouches", "◉", "linear-gradient(135deg,#d7e4e9,#7d929e)"),
  makeProduct("LDPE Vacuum Bag", "Films & Pouches", "▱", "linear-gradient(135deg,#e8f0f3,#9fb4bd)"),
  makeProduct("EPE Foam Sheet and Roll", "Films & Pouches", "◍", "linear-gradient(135deg,#f0f3f4,#b6c0c5)"),
  makeProduct("Antistatic Air Bubble Roll", "Films & Pouches", "○", "linear-gradient(135deg,#d9e9ef,#8caebb)"),
  makeProduct("Courier Bag", "Films & Pouches", "◇", "linear-gradient(135deg,#e7edf1,#899ba6)"),
  makeProduct("Baby Stretch Roll", "Films & Pouches", "◎", "linear-gradient(135deg,#e8eef1,#a6b3bb)"),
  makeProduct("Paper Bag", "Films & Pouches", "▱", "linear-gradient(135deg,#d9b47a,#96643b)"),
  makeProduct("Agriculture Mulch Film", "Films & Pouches", "▱", "linear-gradient(135deg,#a8c98d,#557d4e)"),
  makeProduct("Bubble Film", "Films & Pouches", "○", "linear-gradient(135deg,#eef5f7,#aac4cf)"),
  makeProduct("VCI Film", "Films & Pouches", "◍", "linear-gradient(135deg,#cfe0e5,#668c9a)"),
  makeProduct("VCI Bag", "Films & Pouches", "◇", "linear-gradient(135deg,#d4e4e9,#73919c)"),
  makeProduct("Zip Lock", "Films & Pouches", "▱", "linear-gradient(135deg,#d7e9ee,#83a9b6)"),

  // Tapes & dispensers
  makeProduct("BOPP Self Adhesive Tape", "Tapes", "◎", "linear-gradient(135deg,#e2c37c,#a77c2e)"),
  makeProduct("BOPP Tapes", "Tapes", "◎", "linear-gradient(135deg,#e3c783,#9e752e)"),
  makeProduct("Printed Tape", "Tapes", "▰", "linear-gradient(135deg,#e5b36d,#a45d28)"),
  makeProduct("High Quality Plain Transparent Tape", "Tapes", "◎", "linear-gradient(135deg,#edf1f2,#a8b2b7)"),
  makeProduct("Brown Tape", "Tapes", "◎", "linear-gradient(135deg,#c89b58,#8b5a2c)"),
  makeProduct("Masking Tapes", "Tapes", "◎", "linear-gradient(135deg,#eee5d1,#c4b99f)"),
  makeProduct("BOPP Colour Tapes", "Tapes", "◎", "linear-gradient(135deg,#d86b54,#5b7fa1)"),
  makeProduct("Tape Dispensers", "Tapes", "▱", "linear-gradient(135deg,#d6dde1,#637681)"),

  // Strapping & tools
  makeProduct("Pet Strap", "Strapping & Tools", "◎", "linear-gradient(135deg,#b8d78a,#5b8b43)"),
  makeProduct("PP Straps", "Strapping & Tools", "◎", "linear-gradient(135deg,#c5e0a2,#6d9c4e)"),
  makeProduct("PET & PP Strapping Rolls", "Strapping & Tools", "◎", "linear-gradient(135deg,#c7d99b,#6b9442)"),
  makeProduct("Polyester Composite Cord Strap", "Strapping & Tools", "◎", "linear-gradient(135deg,#e1d7b8,#8e805d)"),
  makeProduct("Steel Strap", "Strapping & Tools", "◎", "linear-gradient(135deg,#b8c1c6,#596b76)"),
  makeProduct("Cord Strap", "Strapping & Tools", "◎", "linear-gradient(135deg,#d9d0b6,#887c5c)"),
  makeProduct("Cord Strap Buckle", "Strapping & Tools", "▣", "linear-gradient(135deg,#c2c9cc,#5d707b)"),
  makeProduct("PP Clip", "Strapping & Tools", "▣", "linear-gradient(135deg,#c7cdd0,#657681)"),
  makeProduct("PP & PET Manual Strapping Tool", "Strapping & Tools", "▱", "linear-gradient(135deg,#d1d7da,#586c78)"),
  makeProduct("Pneumatic Steel Strapping Tool", "Strapping & Tools", "▱", "linear-gradient(135deg,#b9c5ca,#4d626e)"),
  makeProduct("Pneumatic PP & PET Tool", "Strapping & Tools", "▱", "linear-gradient(135deg,#c3ced2,#5c737e)"),
  makeProduct("Battery Operated PET Tool", "Strapping & Tools", "▱", "linear-gradient(135deg,#c5cfd3,#4e6976)"),
  makeProduct("PET Strapping Roll", "Strapping & Tools", "◎", "linear-gradient(135deg,#c6d99a,#638d43)"),

  // Packaging machines
  makeProduct("Strapping Machine - Semi Auto & Automatic", "Packaging Machines", "▣", "linear-gradient(135deg,#5d9ac2,#274c6b)"),
  makeProduct("Fully Automatic Strapping Machines", "Packaging Machines", "▣", "linear-gradient(135deg,#6ca3c6,#254a68)"),
  makeProduct("Shrink Chamber Machine", "Packaging Machines", "▣", "linear-gradient(135deg,#e0a14e,#874c20)"),
  makeProduct("Flame Proof Shrink Tunnel", "Packaging Machines", "▣", "linear-gradient(135deg,#e2a451,#8a4c20)"),
  makeProduct("L-Sealer with PTA", "Packaging Machines", "▣", "linear-gradient(135deg,#5f9ac0,#274d6c)"),
  makeProduct("Web Sealer Machine", "Packaging Machines", "▣", "linear-gradient(135deg,#669fc0,#294f6c)"),
  makeProduct("Box Wrapping Machine - Pre-Stretch", "Packaging Machines", "▣", "linear-gradient(135deg,#d8893d,#70451f)"),
  makeProduct("Box Wrapping Machine - Without Pre-Stretch", "Packaging Machines", "▣", "linear-gradient(135deg,#d98c42,#70451f)"),
  makeProduct("Box Wrapping Machine - Pneumatic Stopper", "Packaging Machines", "▣", "linear-gradient(135deg,#d68a42,#71471f)"),
  makeProduct("L-Sealer", "Packaging Machines", "▣", "linear-gradient(135deg,#5f99ba,#294e68)"),
  makeProduct("Pallet Wrapping Machine", "Packaging Machines", "▣", "linear-gradient(135deg,#6c9fb9,#31546b)"),
  makeProduct("Carton Sealer Machine", "Packaging Machines", "▣", "linear-gradient(135deg,#5f9ab9,#294e68)"),
  makeProduct("Reel Wrapping Machine", "Packaging Machines", "▣", "linear-gradient(135deg,#c98a43,#70451f)"),
  makeProduct("Luggage Wrapping Machine", "Packaging Machines", "▣", "linear-gradient(135deg,#5e91ad,#2a4d60)"),
  makeProduct("Water Tank Wrapping Machine", "Packaging Machines", "▣", "linear-gradient(135deg,#5b9ab9,#294e68)"),
  makeProduct("Ring Wrapping Machine", "Packaging Machines", "◎", "linear-gradient(135deg,#d18a43,#75471f)"),
  makeProduct("Vacuum Chamber Machine", "Packaging Machines", "▣", "linear-gradient(135deg,#668ba0,#344f5d)"),
  makeProduct("Auto and Manual Machines", "Packaging Machines", "▣", "linear-gradient(135deg,#657f8d,#2e4855)"),
  makeProduct("PET Roll Dispenser", "Packaging Machines", "▱", "linear-gradient(135deg,#cf7d39,#75451f)"),
  makeProduct("Stretch Wrap Dispenser", "Packaging Machines", "▱", "linear-gradient(135deg,#5e8292,#314c58)"),
];
