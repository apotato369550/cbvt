# CBVT — Cebu Best Value Trading

Marketing site for an HVAC/general-services trading company in Cebu City, PH. Built on the "fusion-starter" template (React + Vite + Express + TypeScript) — see `AGENTS.md` for the generic template/stack docs (routing, path aliases, adding API routes, etc.). This file covers what's specific to the CBVT build.

## Where things live

- The entire public site is one page: `client/pages/Index.tsx` (nav, hero, services, why-us, about, contact, footer — all in one file, no sub-routing yet).
- `STYLE_GUIDE.md` is the source of truth for design tokens (color, type scale, spacing/radius) — check it before introducing a new one-off value. Tokens are wired up in `tailwind.config.ts`.
- Package manager is **pnpm** (`packageManager` pinned in `package.json`); use `corepack pnpm ...` if `pnpm` isn't on PATH.

## Brand assets

The logo pipeline goes source art → vector → generated icons, each step scripted so a future logo swap doesn't mean ad hoc image editing:

1. `public/new_logo.png` — original source art (drop a replacement here to update the brand mark).
2. `node scripts/vectorize-logo.mjs` — traces the source PNG into two outputs via `potrace`, snapping colors to the exact brand hex (Ink 900 / Copper 600):
   - `public/logo.svg` — the two-tone mark, transparent background.
   - `client/components/icons/LogoSilhouette.tsx` — a single-color (`currentColor`) union-shape version, for contexts that need to tint/fade the mark as one flat color (e.g. a low-opacity watermark) rather than its true two-tone colors.
   Rerun only when `new_logo.png` changes.
3. `node scripts/generate-favicons.mjs` — regenerates every favicon/app-icon file (`icon-16/32/48/192/512.png`, `apple-touch-icon.png`, `favicon.ico`, `favicon.svg`) from `public/logo.svg`, composited onto a Porcelain rounded-square backing so the navy mark stays legible at tab-icon sizes. Rerun after step 2.

`public/logo.svg` is used directly in-app (`<img src="/logo.svg">`) in the nav badge and footer badge in `Index.tsx`. `LogoSilhouette` is used for the "Why CBVT" panel's low-opacity watermark texture, the one spot that needs a single tintable color instead of the mark's real colors.

## Commands

```bash
pnpm dev        # dev server (client + server, port 8080)
pnpm build      # production build
pnpm typecheck  # tsc
pnpm test       # vitest
pnpm format.fix # prettier --write
```
