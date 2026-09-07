# Agent Guide

## Before editing

- Read the nearest owning page, component, or library module before changing behavior.
- Check `git status` and preserve unrelated user changes.
- Keep edits scoped to the requested behavior; avoid broad refactors.

## Code conventions

- Use TypeScript and existing React patterns.
- Keep catalogue data in `lib/products.ts` rather than duplicating product objects in pages.
- Reuse shared components for navigation, product cards, section headings, and calls to action.
- Use existing CSS variables and responsive layers before introducing new styling conventions.
- Keep secrets in environment variables and never commit `.env.local` or credentials.

## Validation

Run the narrowest relevant check first, then the full checks when the change is complete:

```bash
npx tsc --noEmit
npm run build
```

For visual changes, verify desktop and mobile layouts in the local dev server. For admin or gallery changes, test both unauthenticated rejection and authenticated success paths when credentials and Blob storage are available.

## Git workflow

- Do not reset, checkout, or delete user changes.
- Do not commit generated `.next/`, `node_modules/`, or `tsconfig.tsbuildinfo` artifacts.
- Review `git diff --check` before committing.
- Use a concise commit message that describes the change.
