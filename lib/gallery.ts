import { list } from "@vercel/blob";

export type GalleryUpload = { url: string; title: string };

export function titleFromPathname(pathname: string) {
  const filename = pathname.split("/").pop() || "Pack India product";
  return decodeURIComponent(filename)
    .replace(/^\d+-/, "")
    .replace(/-[a-z0-9]{8,}(?=\.[^.]+$)/i, "")
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export async function uploadedGalleryImages(): Promise<GalleryUpload[]> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) return [];
  try {
    const { blobs } = await list({ prefix: "gallery/" });
    return blobs.map((blob) => ({
      url: blob.url,
      title: titleFromPathname(blob.pathname),
    }));
  } catch {
    return [];
  }
}
