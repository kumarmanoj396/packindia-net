import { del, put } from "@vercel/blob";
import { NextResponse } from "next/server";
import { isAdmin } from "../../../../lib/admin";
import { galleryMetadata, saveGalleryMetadata, uploadedGalleryImages } from "../../../../lib/gallery";

const maxImageSize = 10 * 1024 * 1024;
const validImageTypes = new Set(["image/jpeg", "image/png", "image/webp"]);
const maxTitleLength = 100;
const maxCaptionLength = 300;
const maxCategoryLength = 60;

function denied() { return NextResponse.json({ error: "Unauthorized" }, { status: 401 }); }
function text(value: unknown, maxLength: number) { return String(value || "").trim().slice(0, maxLength); }
function displayOrder(value: unknown) {
  const parsed = Number.parseInt(String(value || ""), 10);
  return Number.isFinite(parsed) && parsed >= 0 ? Math.min(parsed, 999999) : 999999;
}

export async function GET() {
  if (!(await isAdmin())) return denied();
  return NextResponse.json({ images: await uploadedGalleryImages() });
}

export async function POST(request: Request) {
  if (!(await isAdmin())) return denied();
  const formData = await request.formData();
  const file = formData.get("file");
  const title = text(formData.get("title"), maxTitleLength) || "Pack India product";
  const category = text(formData.get("category"), maxCategoryLength) || "Pack India Product";
  const caption = text(formData.get("caption"), maxCaptionLength);
  const order = displayOrder(formData.get("displayOrder"));
  if (!(file instanceof File) || !validImageTypes.has(file.type) || file.size > maxImageSize) return NextResponse.json({ error: "Upload a JPG, PNG, or WebP image under 10 MB." }, { status: 400 });
  const filename = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "pack-india-product";
  const extension = file.type === "image/jpeg" ? "jpg" : file.type.split("/")[1];
  const blob = await put(`gallery/${Date.now()}-${filename}.${extension}`, file, { access: "public", addRandomSuffix: true, contentType: file.type });
  const metadata = await galleryMetadata();
  metadata[blob.url] = { title, category, caption, displayOrder: order };
  await saveGalleryMetadata(metadata);
  return NextResponse.json({ image: { url: blob.url, pathname: blob.pathname, title, category, caption, displayOrder: order } });
}

export async function PATCH(request: Request) {
  if (!(await isAdmin())) return denied();
  const body = await request.json().catch(() => ({}));
  const url = typeof body.url === "string" ? body.url : "";
  if (!url.startsWith("https://")) return NextResponse.json({ error: "Invalid image." }, { status: 400 });
  const metadata = await galleryMetadata();
  metadata[url] = { title: text(body.title, maxTitleLength) || "Pack India product", category: text(body.category, maxCategoryLength) || "Pack India Product", caption: text(body.caption, maxCaptionLength), displayOrder: displayOrder(body.displayOrder) };
  await saveGalleryMetadata(metadata);
  return NextResponse.json({ image: { url, ...metadata[url] } });
}

export async function DELETE(request: Request) {
  if (!(await isAdmin())) return denied();
  const { url } = await request.json().catch(() => ({}));
  if (typeof url !== "string" || !url.startsWith("https://")) return NextResponse.json({ error: "Invalid image." }, { status: 400 });
  const metadata = await galleryMetadata();
  delete metadata[url];
  await Promise.all([del(url), saveGalleryMetadata(metadata)]);
  return NextResponse.json({ ok: true });
}
