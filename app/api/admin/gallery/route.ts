import { del, list, put } from "@vercel/blob";
import { NextResponse } from "next/server";
import { isAdmin } from "../../../../lib/admin";
import { titleFromPathname } from "../../../../lib/gallery";

const maxImageSize = 10 * 1024 * 1024;
const validImageTypes = new Set(["image/jpeg", "image/png", "image/webp"]);

function denied() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

export async function GET() {
  if (!(await isAdmin())) return denied();
  const { blobs } = await list({ prefix: "gallery/" });
  return NextResponse.json({
    images: blobs.map((blob) => ({
      url: blob.url,
      pathname: blob.pathname,
      title: titleFromPathname(blob.pathname),
    })),
  });
}

export async function POST(request: Request) {
  if (!(await isAdmin())) return denied();
  const formData = await request.formData();
  const file = formData.get("file");
  const suppliedTitle = String(
    formData.get("title") || "Pack India product",
  ).trim();
  if (
    !(file instanceof File) ||
    !validImageTypes.has(file.type) ||
    file.size > maxImageSize
  ) {
    return NextResponse.json(
      { error: "Upload a JPG, PNG, or WebP image under 10 MB." },
      { status: 400 },
    );
  }
  const title =
    suppliedTitle
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "") || "pack-india-product";
  const extension =
    file.type === "image/jpeg" ? "jpg" : file.type.split("/")[1];
  const blob = await put(`gallery/${Date.now()}-${title}.${extension}`, file, {
    access: "public",
    addRandomSuffix: true,
    contentType: file.type,
  });
  return NextResponse.json({
    image: {
      url: blob.url,
      pathname: blob.pathname,
      title: titleFromPathname(blob.pathname),
    },
  });
}

export async function DELETE(request: Request) {
  if (!(await isAdmin())) return denied();
  const { url } = await request.json().catch(() => ({}));
  if (typeof url !== "string" || !url.startsWith("https://"))
    return NextResponse.json({ error: "Invalid image." }, { status: 400 });
  await del(url);
  return NextResponse.json({ ok: true });
}
