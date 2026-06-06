# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A static website for yoga instructor **Swati**, hosted on GitHub Pages at `swatiosophy.com`. The site blends yoga instruction, philosophy, and Indian cultural heritage under the brand name **Swatiosophy** ("Self Discovery through Yoga").

## Design System

**UI style:** Glassmorphism + floating grid layout. Use [Lenis](https://lenis.darkroom.engineering/) for smooth scrolling.

**Color palette:**

| Role      | Name           | Hex       |
|-----------|----------------|-----------|
| Primary   | Soft Ivory White | `#F8F2E9` |
| Secondary | Faded Rose Red | `#B85450` |
| Accent    | Antique Gold   | `#B8860B` |
| Neutral   | Blush Parchment| `#EDE0D4` |
| Anchor    | Deep Plum      | `#3D1C2E` |

**Tone:** Modern, clean, premium. Evokes ancient philosophy with contemporary exploration.

**Tagline / motto:** *"The path begins within. Ancient philosophy. Modern exploration. A practice that moves with you — across continents, across lifetimes."*

## Content Structure

Four main content sections from `design.md`:

1. **The Practice** — Asana, Pranayama, Sadhana, Svadhyaya. Classes include original music by Michael Dwan Singh (sarangi).
2. **The Philosophy** — Svadhyaya, ancient texts, Sanskrit, cultural integrity, energetic/physical anatomy. Available as guest lecturer for YTT programs and individual mentoring.
3. **Practice in Extraordinary Places** — Retreats and immersive sessions. Available for classes, workshops, and retreat programs.
4. **About Swati** — 200-hour cert at Soma Yoga; Vipassana and Inner Engineering background; Indian cultural roots; Associate Professor of Musculoskeletal Radiology (Yale, Stanford degrees).

**Disclaimer** (must appear on site): Swatiosophy content is for general educational purposes only and does not constitute medical or therapeutic advice.

## Assets

- `images/` — Photos for use on the site; filenames describe content (e.g., `swati-doing-yogo-post-on-rock.jpg`, `music-instrument.jpg`).
- `mockups/` — Designer mockups that should guide the visual layout (check this directory for reference files as they are added).

## Deployment

Static site → GitHub Pages with custom domain `swatiosophy.com`. Keep the build output self-contained (no server-side dependencies).
