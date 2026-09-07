# PACK INDIA

PACK INDIA is a Next.js 16 website for packaging materials, flexible packaging products, strapping tools, and automatic packaging machines.

The application uses React 19, TypeScript, the App Router, and a small set of shared components and CSS files. Product catalogue data is centralized in `lib/products.ts`.

## Features

- Home, About, Services, Contact, Products, and Gallery pages
- Static product detail pages generated from the product catalogue
- Responsive desktop, tablet, and mobile layouts
- Light and dark theme support
- Shared navigation, footer, enquiry CTAs, and product cards
- Optional Vercel Blob-backed gallery uploads
- Cookie-based admin authentication for gallery management
- Metadata, sitemap, robots, and organization structured data

## Requirements

- Node.js 20 or newer
- npm

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in a browser.

Useful validation commands:

```bash
npx tsc --noEmit
npm run build
```

## Environment variables

The public site can run without environment variables. Set these variables to enable the gallery and admin manager:

```env
BLOB_READ_WRITE_TOKEN=your-vercel-blob-token
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=use-a-long-random-password
ADMIN_SESSION_SECRET=use-a-long-random-secret
```

Keep secrets in the deployment provider or a local `.env.local` file. Do not commit them.

The gallery manager is available at `/admin/gallery`. It accepts JPG, PNG, and WebP uploads up to 10 MB. Gallery API requests require a valid admin session.

## Project structure

```text
app/          App Router pages, layouts, API routes, and styles
components/   Shared React UI components
lib/          Product, gallery, and admin logic
public/       Static assets and catalogue images
memory-bank/  Project context and agent working notes
```

Main routes include `/`, `/about`, `/services`, `/contact`, `/products`, `/products/[slug]`, `/gallery`, and `/admin/gallery`.

## Deployment notes

The project is suitable for a Vercel deployment. Configure the environment variables above in the deployment project before enabling gallery administration. Update the site URL in `app/layout.tsx` if the production domain changes, and replace placeholder catalogue imagery and contact details before launch.

## Working agreements

Keep product changes in `lib/products.ts`, preserve the existing shared component patterns, and run the TypeScript check and production build after changes to routes, components, or data. See `memory-bank/` for the maintained project and agent context.
