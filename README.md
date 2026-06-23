# ALTURA — Image Accessibility & SEO Tool

<img src="https://img.shields.io/badge/Next.js-3D1A6B?style=for-the-badge&logo=nextdotjs&logoColor=white" height="26" />
<img src="https://img.shields.io/badge/TypeScript-3D1A6B?style=for-the-badge&logo=typescript&logoColor=white" height="26" />
<img src="https://img.shields.io/badge/Node.js-3D1A6B?style=for-the-badge&logo=nodedotjs&logoColor=white" height="26" />
<img src="https://img.shields.io/badge/Hugging_Face-3D1A6B?style=for-the-badge&logo=huggingface&logoColor=white" height="26" />
<img src="https://img.shields.io/badge/Vercel-7d599b?style=for-the-badge&logo=vercel&logoColor=white" height="26" />

### Focus Areas

Accessibility · AI Integration · SEO Tooling · Full-Stack Next.js · Product Development · UX Design

---

## ✦ Overview

ALTURA is a browser-based interface for a server-side AI accessibility and SEO workflow for images. Users can upload an image file or provide a direct HTTPS image URL, and the app generates four pieces of structured metadata: alt text, a human-readable caption, an SEO-optimized title, and a meta description.

It is built for content creators, developers, and publishers who need ready-to-use image metadata without writing every description from scratch. The current implementation processes images server-side through hosted vision-language models and keeps the Hugging Face token on the server; it does not run the model fully in the browser.

For privacy and compliance purposes, ALTURA does not intentionally store uploaded images or generated metadata in its own application database. Images are sent to the app's server route and then forwarded to Hugging Face Inference Providers for the current request. The app is not designed to train on user uploads as part of the normal workflow, but provider-side processing and operational logging may still occur according to their policies.

The app is wrapped in a complete SaaS-style product presence including dedicated marketing pages, a privacy policy, and terms of use. The main studio interface is centered on a single analysis action, with results presented as four independently copyable output cards.

Visually, ALTURA uses a dark metallic and glass aesthetic to present the tool as a polished, trustworthy product rather than a raw prototype.

---

## ✦ The Problem

Images are the most under-annotated element on the web.

Missing or poor-quality alt text excludes screen reader users and fails WCAG accessibility standards. Unoptimized image metadata leaves SEO value on the table. And writing this metadata manually — across dozens or hundreds of images — is slow, inconsistent, and easy to deprioritize.

Existing solutions either lock users into closed APIs that obscure what happens to their images, or require engineering involvement to integrate. ALTURA removes that friction entirely: one image in, four outputs ready to copy, with full transparency over how the analysis is performed.

---

## ✦ How It Works

The interaction is intentionally minimal:

**1 → Input**
The user either uploads an image file via drag-and-drop or pastes a direct HTTPS image URL into the studio interface. ALTURA previews the asset in a fixed-size square frame to reduce layout shift across different image ratios and validates basic constraints such as file size and URL format before proceeding.

**2 → Analysis**
On submit, the image is sent to a Next.js App Router server route. The backend forwards the image to Hugging Face's router endpoint (router.huggingface.co/v1/chat/completions), which routes it through a prioritized list of hosted vision-language models:

```
1. HUGGINGFACE_VLM_MODEL env variable (if set)
2. CohereLabs/aya-vision-32b
3. CohereLabs/command-a-vision-07-2025
4. Qwen/Qwen3.5-9B
5. google/gemma-3n-E4B-it
```

The backend tries the models in order until one returns usable metadata. This fallback chain means ALTURA stays functional even if a specific model is rate-limited or unavailable, without any user intervention required.

In practical terms, Hugging Face is the inference layer for the current request: ALTURA sends the image and prompt to Hugging Face's router, and the router forwards the request to a compatible hosted model provider. The app itself does not expose the Hugging Face token to the browser.

**3 → Output**
Results are returned and displayed across four cards, each independently copyable:

| Output               | Description                                                            |
| -------------------- | ---------------------------------------------------------------------- |
| **Alt Text**         | Concise image description for screen readers and HTML `alt` attributes |
| **Caption**          | Natural-language description suitable for captions or figure text      |
| **SEO Title**        | Keyword-optimized title for image search and metadata                  |
| **Meta Description** | A fuller description for Open Graph tags and SEO metadata              |

A "Remove" button centered below the preview clears both the uploaded file and any URL input, resetting the studio cleanly for the next image.

---

## ✦ Site Structure

ALTURA is a complete product, not a single-page tool. The full route structure:

| Route            | Content                                                                                                 |
| ---------------- | ------------------------------------------------------------------------------------------------------- |
| `/`              | SaaS landing page — features, integrations, FAQ                                                         |
| `/how-it-works`  | Architecture overview, privacy bento, performance details                                               |
| `/accessibility` | Accessibility guide — why alt text matters, SEO copywriting                                             |
| `/about`         | Mission, vision, and product context                                                                    |
| `/studio`        | The current studio entry point; it redirects to the main tool experience at `/` with the `#tool` anchor |

All CTAs across the marketing pages route to `/studio`.

---

## ✦ Screenshots

> _Screenshots / demo GIF coming soon_

---

## ✦ Technical Highlights

- **App Router architecture** — model communication happens in server routes, keeping API keys and image data off the client
- **Model fallback chain** — no hard dependency on a single model; the backend tries a prioritized set of vision-language models until one returns usable metadata
- **Tailwind CSS v4** with inline theme tokens and `next/font` loading Inter and Space Grotesk, with Material Symbols for iconography
- **Turbopack** enabled for faster local development builds
- **Fixed-size preview frame** reduces layout shift when switching between images of different aspect ratios — a small detail with a meaningful impact on perceived stability
- **Structured output formatting** — result cards are styled by type (alt/caption in italic, SEO title in bold uppercase, description in normal weight) so users can scan and copy without reading every word
- **Operational limits** — file uploads are capped at roughly 5 MB in the UI, while remote image URLs are fetched with an 8 MB maximum payload limit on the server
- **Complete product presence** — privacy policy and terms of use written and published alongside the tool, prioritizing user trust for a free public product

---

## ✦ Status

**Currently live on Vercel**.

[![Try Live Demo](https://img.shields.io/badge/Try_Live_Demo-8741aa?style=for-the-badge&logo=vercel&logoColor=white)](https://altura-image-accessibility.vercel.app/)
