"use client";

import { FormEvent, useEffect, useState } from "react";

type ImageItem = { url: string; title: string };

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
      setImages((current) => [result.image, ...current]);
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
              Upload JPG, PNG, or WebP files up to 10 MB. Uploaded images appear
              automatically in the public Gallery.
            </p>
          </div>
          <button className="text-link" onClick={logout}>
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
                <div>
                  <b>{image.title}</b>
                  <button onClick={() => remove(image.url)} disabled={busy}>
                    REMOVE
                  </button>
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
