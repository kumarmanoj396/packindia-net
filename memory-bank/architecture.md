# Architecture Notes

## Rendering

Pages use the Next.js App Router. Product detail routes are generated from `lib/products.ts`; server-rendered pages can load gallery data through `lib/gallery.ts`. Client-side interaction is isolated in components such as `ProductsExplorer`, `GalleryAdmin`, and `ThemeToggle`.

## Styling

`app/layout.tsx` imports the global CSS layers in this order:

1. `globals.css`
2. `brand-theme.css`
3. `responsive.css`
4. `mobile-polish.css`
5. `brand.css`

Preserve this order unless a style ownership change requires otherwise. Prefer existing CSS variables, spacing, typography, and responsive breakpoints over adding one-off values.

## Gallery and authentication

The public gallery reads Blob entries with the `gallery/` prefix. Admin API handlers first call `isAdmin()`, then list, upload, or delete Blob objects. Login signs the normalized admin email with `ADMIN_SESSION_SECRET` and stores the result in the `packindia-admin` HTTP-only cookie.

## Metadata and SEO

The root layout owns site-wide metadata, canonical URL configuration, Open Graph data, Twitter metadata, and organization JSON-LD. `app/sitemap.ts` and `app/robots.ts` own crawler configuration.
