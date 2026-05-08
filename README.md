# Altura Webapp (Monolith Ultra Theme)

Altura is a modern, privacy‑first SaaS landing + studio built with Next.js (App Router) and Tailwind v4.

- Dark “Monolith Ultra” metallic/glass aesthetic
- Pages: Home, How It Works, Accessibility, About
- Studio: local‑only image upload + URL preview with copyable results (Alt Text, Caption, SEO Title, SEO Description)
- All CTAs route to `/studio`

## Project Path

Folder: `altura-webapp`

```bash
cd "/Users/mariamkhan/Documents/Career Studio/Projects/altura/altura-webapp"
```

## Run Locally

```bash
npm install   # first time only
npm run dev   # starts http://localhost:3000
```

## Key Routes

- `/` — Advanced landing (Obsidian Era, features, integration, FAQ)
- `/how-it-works` — Architecture + Privacy bento + Performance
- `/accessibility` — Accessibility guide (Why Alt‑Text Matters, 01/02/03, SEO copywriting)
- `/about` — Mission, Status Quo, Obsidian AI metrics, Vision
- `/studio` — Upload/URL preview, results panel (single‑column), copy with live region + toast

## Tech

- Next.js 16 (App Router) + Turbopack
- Tailwind CSS v4 (inline theme tokens)
- `next/font` with Inter + Space Grotesk
- Material Symbols (icons)

## Notes

- The Studio preview frame is fixed‑size (square) to prevent layout shift when uploading different image ratios.
- “Remove” sits centered at the bottom of the preview and clears the file + URL.
- Result cards formatting matches the design: Alt/Caption (italic), SEO Title (bold uppercase), SEO Description (normal).

## Deploy

You can deploy to Vercel or any Node host:

```bash
npm run build
npm start   # default on port 3000
```

For Vercel, follow Next.js deployment docs: https://nextjs.org/docs/app/building-your-application/deploying
