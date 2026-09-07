import { list, put } from "@vercel/blob";

const metadataPath = "gallery/gallery-metadata.json";

export type GalleryUpload = {
  url: string;
  pathname: string;
  title: string;
  category: string;
  caption: string;
  displayOrder: number;
};

type GalleryMetadata = Record<string, Pick<GalleryUpload, "title" | "category" | "caption" | "displayOrder">>;

export function titleFromPathname(pathname: string) {
  const filename = pathname.split("/").pop() || "Pack India product";
  return decodeURIComponent(filename)
    .replace(/^\d+-/, "")
    .replace(/-[a-z0-9]{8,}(?=\.[^.]+$)/i, "")
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export async function galleryMetadata(): Promise<GalleryMetadata> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) return {};
  try {
    const { blobs } = await list({ prefix: metadataPath });
    const blob = blobs.find((item) => item.pathname === metadataPath);
    if (!blob) return {};
    const response = await fetch(blob.url, { cache: "no-store" });
    if (!response.ok) return {};
    const value: unknown = await response.json();
    return value && typeof value === "object" ? (value as GalleryMetadata) : {};
  } catch {
    return {};
  }
}

export async function saveGalleryMetadata(metadata: GalleryMetadata) {
  await put(metadataPath, JSON.stringify(metadata), { access: "public", addRandomSuffix: false, contentType: "application/json" });
}

export async function uploadedGalleryImages(): Promise<GalleryUpload[]> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) return [];
  try {
    const [{ blobs }, metadata] = await Promise.all([list({ prefix: "gallery/" }), galleryMetadata()]);
    return blobs
      .filter(
        (blob) =>
          blob.pathname !== metadataPath &&
          /\.(?:jpe?g|png|webp)$/i.test(blob.pathname),
      )
      .map((blob, index) => {
        const saved = metadata[blob.url];
        return {
          url: blob.url,
          pathname: blob.pathname,
          title: saved?.title || titleFromPathname(blob.pathname),
          category: saved?.category || "Pack India Product",
          caption: saved?.caption || "",
          displayOrder: Number.isFinite(saved?.displayOrder) ? saved.displayOrder : index + 1,
        };
      })
      .sort((a, b) => a.displayOrder - b.displayOrder || a.title.localeCompare(b.title));
  } catch {
    return [];
  }
}
