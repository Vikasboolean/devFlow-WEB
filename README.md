# DevFlow Website

Official marketing site for **DevFlow**, a developer-focused desktop browser built with Electron and React.

This repository is separate from the desktop application ([Vikasboolean/devflow-](https://github.com/Vikasboolean/devflow-)) so the Electron app and its release configuration stay untouched.

## Stack

- React 19
- Vite
- Plain CSS (no UI kit)
- Inline SVG icons

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

Output is written to `dist/`.

## Sections

- Hero with DevFlow branding and download CTAs
- Feature grid (API Tester, Network Monitor, Console, and more)
- Hero and screenshot gallery featuring real application captures
- Why DevFlow
- Download panel with official GitHub installer links
- Footer with repository and release links

## Download links

The primary download button points to the official installer:

https://github.com/Vikasboolean/devflow-/releases/download/v1.0.0/DevFlow-Setup-1.0.0-x64.exe

## Assets

See [ASSETS.md](./ASSETS.md) for logo sources and missing screenshot filenames.

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md). **Vercel** is the recommended default; GitHub Pages is configured via workflow but should not be enabled without approval.
