# Project Context

## Purpose

PACK INDIA is a packaging company website covering packaging materials, flexible packaging products, strapping tools, and automatic packaging machines.

## Stack

- Next.js 16 with the App Router
- React 19 and TypeScript with strict checking
- Vercel Blob for optional gallery storage
- `lucide-react` for interface icons
- CSS modules are not used; global and feature CSS files are imported from `app/layout.tsx`

## Routes

- `/`: home page
- `/about`: company information
- `/services`: service information
- `/contact`: contact and enquiry page
- `/products`: catalogue explorer
- `/products/[slug]`: generated product detail pages
- `/gallery`: public gallery
- `/admin/gallery`: authenticated gallery manager
- `/api/admin/login`, `/api/admin/logout`, `/api/admin/gallery`: admin API routes

## Source ownership

- `lib/products.ts` owns the product catalogue and product lookup data.
- `lib/gallery.ts` reads public gallery images from Vercel Blob.
- `lib/admin.ts` owns admin credential checks and signed session cookies.
- `components/` owns reusable site UI.
- `app/*.css` owns the global visual system and responsive refinements.

## Current operational facts

- The public gallery returns an empty list when `BLOB_READ_WRITE_TOKEN` is missing or Blob listing fails.
- Gallery uploads accept JPG, PNG, and WebP files up to 10 MB.
- Admin sessions use an HTTP-only cookie and expire after eight hours.
- The canonical site URL is currently configured in `app/layout.tsx`.
