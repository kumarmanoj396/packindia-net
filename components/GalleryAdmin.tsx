"use client";

import { FormEvent, useEffect, useState } from "react";

type ImageItem = { url: string; pathname: string; title: string; category: string; caption: string; displayOrder: number };

export default function GalleryAdmin() {
  const [authenticated, setAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [images, setImages] = useState<ImageItem[]>([]);
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  async function refresh() {
    const response = await fetch("/api/admin/gallery");
    if (!response.ok) return setAuthenticated(false);
    const data = await response.json();
    setImages(data.images || []);
    setAuthenticated(true);
  }
  useEffect(() => {
    refresh();
  }, []);

  async function login(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setMessage("");
    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      const data = await response.json();
      setMessage(data.error || "Unable to sign in.");
      setBusy(false);
      return;
    }
    setPassword("");
    await refresh();
    setBusy(false);
  }
  async function upload(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setBusy(true);
    setMessage("");
    const response = await fetch("/api/admin/gallery", {
      method: "POST",
      body: data,
    });
    const result = await response.json();
    if (!response.ok) setMessage(result.error || "Upload failed.");
    else {
      form.reset();
      await refresh();
      setMessage("Image uploaded to the public gallery.");
    }
    setBusy(false);
  }
  async function remove(url: string) {
    if (!confirm("Remove this image from the Gallery?")) return;
    setBusy(true);
    const response = await fetch("/api/admin/gallery", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
    });
    if (response.ok)
      setImages((current) => current.filter((image) => image.url !== url));
    else setMessage("Could not remove the image.");
    setBusy(false);
  }
  async function save(image: ImageItem) {
    setBusy(true);
    setMessage("");
    const response = await fetch("/api/admin/gallery", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(image) });
    const result = await response.json();
    if (!response.ok) setMessage(result.error || "Could not save image details.");
    else { setImages((current) => current.map((item) => item.url === image.url ? { ...item, ...result.image } : item)); setMessage("Gallery details saved."); }
    setBusy(false);
  }
  function update(url: string, field: keyof ImageItem, value: string | number) {
    setImages((current) => current.map((image) => image.url === url ? { ...image, [field]: value } : image));
  }
  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    setAuthenticated(false);
    setImages([]);
  }

  if (!authenticated)
    return (
      <section className="section">
        <div className="container admin-shell">
          <div className="admin-login">
            <span className="eyebrow">PACK INDIA ADMIN</span>
            <h1>Gallery Manager</h1>
            <p>
              Only the Pack India administrator can upload or remove Gallery
              images.
            </p>
            <form onSubmit={login}>
              <label>
                Email
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  autoComplete="email"
                />
              </label>
              <label>
                Password
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                  autoComplete="current-password"
                />
              </label>
              <button className="btn btn-orange" disabled={busy}>
                {busy ? "SIGNING IN…" : "SIGN IN"}
              </button>
            </form>
            {message && <p className="admin-message">{message}</p>}
          </div>
        </div>
      </section>
    );

  return (
    <section className="section">
      <div className="container admin-shell">
        <div className="admin-heading">
          <div>
            <span className="eyebrow">PACK INDIA ADMIN</span>
            <h1>Gallery Manager</h1>
            <p>
              Upload JPG, PNG, or WebP files up to 10 MB. Add details and choose the order in which photos appear publicly.
            </p>
          </div>
          <button className="text-link" type="button" onClick={logout}>
            SIGN OUT
          </button>
        </div>
        <form className="admin-upload" onSubmit={upload}>
          <label>
            Image title
            <input
              name="title"
              placeholder="Example: New packaging machine"
              required
            />
          </label>
          <label>Product category<input name="category" placeholder="Example: Paper Products" required /></label>
          <label>Display order<input name="displayOrder" type="number" min="0" defaultValue="999" required /></label>
          <label className="admin-caption">Caption (optional)<input name="caption" placeholder="Short description for visitors" /></label>
          <label>
            Image file
            <input
              name="file"
              type="file"
              accept="image/jpeg,image/png,image/webp"
              required
            />
          </label>
          <button className="btn btn-orange" disabled={busy}>
            {busy ? "UPLOADING…" : "UPLOAD IMAGE"}
          </button>
        </form>
        {message && <p className="admin-message">{message}</p>}
        <div className="admin-images">
          {images.length ? (
            images.map((image) => (
              <article key={image.url}>
                <img src={image.url} alt={image.title} />
                <div className="admin-image-fields">
                  <label>Title<input value={image.title} onChange={(event) => update(image.url, "title", event.target.value)} /></label>
                  <label>Category<input value={image.category} onChange={(event) => update(image.url, "category", event.target.value)} /></label>
                  <label>Order<input type="number" min="0" value={image.displayOrder} onChange={(event) => update(image.url, "displayOrder", Number(event.target.value))} /></label>
                  <label>Caption<input value={image.caption} onChange={(event) => update(image.url, "caption", event.target.value)} /></label>
                  <div className="admin-image-actions"><button type="button" onClick={() => save(image)} disabled={busy}>SAVE</button><button type="button" onClick={() => remove(image.url)} disabled={busy}>REMOVE</button></div>
                </div>
              </article>
            ))
          ) : (
            <p>No additional Gallery images yet.</p>
          )}
        </div>
      </div>
    </section>
  );
}
