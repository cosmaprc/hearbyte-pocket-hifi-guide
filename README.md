# Hearbyte — Pocket Hi-Fi Guide

[![Deploy to GitHub Pages](https://github.com/cosmaprc/hearbyte-pocket-hifi-guide/actions/workflows/deploy.yml/badge.svg?branch=release)](https://github.com/cosmaprc/hearbyte-pocket-hifi-guide/actions/workflows/deploy.yml)

A single-page guide to budget-friendly pocket hi-fi gear. Built with Vite, React, TypeScript, Tailwind CSS, and shadcn/ui.

- Live: https://pockethifiguide.heartbyte.website/
- Built and maintained in [Lovable](https://lovable.dev)

## Tech Stack

- Vite 5 + React 18 + TypeScript 5
- Tailwind CSS v3 + shadcn/ui (Radix primitives)
- React Router, TanStack Query
- Vitest + Testing Library

## Prerequisites

- Node.js 18+ (20 LTS recommended)
- npm 9+ (or pnpm / bun / yarn — examples below use npm)
- Git

## Local Setup

```bash
# 1. Clone the repo (replace with your GitHub URL after connecting)
git clone <your-repo-url>
cd <repo-folder>

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

The app runs at http://localhost:8080 (see `vite.config.ts`).

## Environment Variables

This project is fully client-side and currently requires **no environment variables**.

If you later add Lovable Cloud / Supabase, Vite will auto-generate a `.env` file with:

```
VITE_SUPABASE_URL=...
VITE_SUPABASE_PUBLISHABLE_KEY=...
VITE_SUPABASE_PROJECT_ID=...
```

Only variables prefixed with `VITE_` are exposed to the browser. Never put secret/private keys in `VITE_*` variables — use server-side secrets instead.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Production build to `dist/` |
| `npm run build:dev` | Development-mode build (unminified, useful for debugging) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |
| `npm run test` | Run the Vitest test suite once |
| `npm run test:watch` | Run Vitest in watch mode |

## Project Structure

```
public/              Static assets (robots.txt, sitemap.xml, favicons)
src/
  components/
    hearbyte/        Page-specific sections (Hero, Footer, etc.)
    ui/              shadcn/ui primitives
  pages/             Route components (Index, NotFound)
  lib/               Utilities
  index.css          Tailwind layers + design tokens
tailwind.config.ts   Tailwind theme + tokens
vite.config.ts       Vite config (port, aliases, plugins)
```

## Deployment

Production is served by **GitHub Pages** at https://pockethifiguide.heartbyte.website/ (custom domain configured via `public/CNAME`).

Deploys are handled by the `.github/workflows/deploy.yml` GitHub Actions workflow, which builds with Bun and publishes `dist/` to the `github-pages` environment.

### Release flow

- Day-to-day edits (via Lovable, local IDE, or GitHub) land on `main`. Pushes to `main` do **not** deploy.
- To ship, fast-forward the `release` branch to the commit you want live and push it:

  ```bash
  git fetch origin
  git checkout release
  git merge --ff-only origin/main
  git push
  ```

- The workflow also supports manual runs via **Actions → Deploy to GitHub Pages → Run workflow**.

Note: the `github-pages` environment must allow the `release` branch under **Settings → Environments → github-pages → Deployment branches and tags**.

### PR previews

Pull requests trigger `.github/workflows/pr-preview.yml`, which deploys a per-PR preview to a separate repo (configured via the `PREVIEW_REPO` variable and `PREVIEW_DEPLOY_TOKEN` secret) under `/pr-preview/pr-<N>/`.

### Self-hosting

Run `npm run build` and serve the static `dist/` folder from any static host (Vercel, Netlify, Cloudflare Pages, S3+CloudFront, Nginx, etc.).

## Editing the Code

You can edit in any of these places — changes sync both ways once GitHub is connected:

1. **Lovable** — visit the project URL and prompt changes.
2. **Local IDE** — clone, edit, push to GitHub.
3. **GitHub web UI / Codespaces** — edit directly in the repo.

## License

Private project. All rights reserved unless stated otherwise.
