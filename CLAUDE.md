# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A static website for yoga instructor **Swati**, hosted on GitHub Pages at `swatiosophy.com`. The site blends yoga instruction, philosophy, and Indian cultural heritage under the brand name **Swatiosophy** ("Self Discovery through Yoga").

## Development

No build system. Preview locally with any static server:

```bash
python3 -m http.server 8000
# or: npx serve .
```

No dependencies to install — CSS/JS are vanilla; Lenis is loaded via CDN (`@studio-freight/lenis@1.0.42`).

## Architecture

Single-page site: `index.html` + `style.css` + `script.js`. No framework, no bundler.

**HTML sections follow two layout patterns:**

1. **Full-width hero** (`.sec-hero`, `.sec-fullwidth`) — absolute-positioned background image, gradient overlay, text block positioned left or right.
2. **Split half-screen** (`.sec-split`) — flexbox row with two 50% children (image panel + text panel). Add `.sec-split--reverse` to swap order. Images use `position: absolute; inset: 0` inside the panel.

**CSS naming:** BEM-style (`.sec-split__img--face`). Design tokens in `:root`. Responsive breakpoints at 900px (tablet/stack) and 480px (small phone).

**JS:** Vanilla. Handles nav scroll state, mobile menu toggle, smooth anchor scrolling, and IntersectionObserver-based reveal animations (`.reveal` → `.is-visible`).

## Design System

**UI style:** Glassmorphism + floating grid layout. Use [Lenis](https://lenis.darkroom.engineering/) for smooth scrolling.

**Color palette (CSS custom properties are the source of truth in `style.css`):**

| Role      | Name           | Hex       | CSS var        |
|-----------|----------------|-----------|----------------|
| Primary   | Soft Ivory White | `#F8F4ED` | `--ivory`    |
| Secondary | Rose           | `#C4607A` | `--rose`       |
| Accent    | Gold           | `#D4A84B` | `--gold`       |
| Neutral   | Parchment      | `#F2ECE0` | `--parchment`  |
| Anchor    | Deep Plum      | `#3D1C2E` | `--plum`       |

**Typography (4 font families):**
- `--font-display` (IM Fell English) — logo, hero title
- `--font-serif` (Cormorant Garamond) — section titles, italic accents, tagline
- `--font-cinzel` (Cinzel) — hero eyebrow only
- `--font-sans` (Raleway) — body text, nav, buttons, tags, eyebrows

**Tone:** Modern, clean, premium. Evokes ancient philosophy with contemporary exploration.

**Tagline / motto:** *"The path begins within. Ancient philosophy. Modern exploration. A practice that moves with you — across continents, across lifetimes."*

## Content Structure

Seven sections in order: Hero → Marquee strip → The Practice (split) → The Philosophy (split-reverse) → About (split) → Retreats (full-width) → Connect (split-reverse) → Footer/Disclaimer.

**Disclaimer** (must appear on site): Swatiosophy content is for general educational purposes only and does not constitute medical or therapeutic advice.

## Assets

- `images/` — Photos for use on the site; filenames describe content (e.g., `swati-doing-yoga-post-on-rock.jpg`, `music-instrument.jpg`).
- `mockups/` — Designer mockups that should guide the visual layout (check this directory for reference files as they are added).

## Deployment

Static site → GitHub Pages with custom domain `swatiosophy.com`. Keep the build output self-contained (no server-side dependencies). Push to `main` deploys automatically.
