# Deployment

This repository is the **official DevFlow website** (separate from the Electron app at [Vikasboolean/devflow-](https://github.com/Vikasboolean/devflow-)). The site lives at the repo root for the simplest Vite deploy.

## Recommendation: Vercel (simplest reliable)

Why Vercel first:

- Zero config for Vite (`vercel.json` is already included)
- Preview deployments per push
- Custom domain support without GitHub Pages `base` path issues

### Steps

1. Push this repo to GitHub.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy.

Optional: set the production domain in the Vercel project settings.

## Alternative: GitHub Pages

Works well if you want hosting next to GitHub Releases with no extra account.

### Option A — GitHub Actions (recommended for Pages)

1. In the GitHub repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Merge/push the workflow in `.github/workflows/deploy-pages.yml`.
3. After the workflow succeeds, the site is published.

For a **project site** (`https://<user>.github.io/<repo>/`), set the Pages base path when building:

```bash
# Replace with your repo name if different
VITE_BASE=/devflow-web/ npm run build
```

The included workflow sets `VITE_BASE` automatically from the repository name.

For a **user/org site** (`https://<user>.github.io/`), keep `VITE_BASE=/`.

### Option B — Manual `gh-pages` branch

```bash
npm run build
# then publish the contents of dist/ to the gh-pages branch
```

Do **not** change GitHub Pages settings without explicit approval if the repo already has Pages configured.

## Local commands

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
npm run preview  # production build locally
```
