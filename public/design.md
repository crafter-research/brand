---
version: 1
name: Crafter Research
description: Brand and design guidance for Crafter Research, a lab for public-interest research systems, corpora, agents, and evidence trails.
site: https://brand.crafter.ing
canonical: https://brand.crafter.ing/design.md
defaultTheme: system
themes:
  - system
  - light
  - dark
colors:
  research-green: "#173F31"
  corpus-mint: "#CFE7D2"
  signal-moss: "#5F8F75"
  obsidian-lab: "#07100D"
  graphite-glass: "#12231C"
  paper-white: "#EEF4EC"
typography:
  body: Geist, Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif
  mono: Geist Mono, ui-monospace, SFMono-Regular, Menlo, monospace
  title:
    weight: 600
    lineHeight: 1.02
    letterSpacing: -0.025em
styling:
  primary: StyleX
  globalCss: Only @stylex, font setup, theme variables, and base reset.
assets:
  brandSite: https://brand.crafter.ing
  assetGenerator: https://brand.crafter.ing/generate-assets
  crafterGlyph: https://brand.crafter.ing/crafter-glyph.svg
  favicon: https://brand.crafter.ing/favicon.svg
  openGraph: https://brand.crafter.ing/og.png
  heroDark: https://brand.crafter.ing/gen/lab-hero.png
  heroLight: https://brand.crafter.ing/gen/lab-hero-light.png
  applicationsDark: https://brand.crafter.ing/gen/lab-applications.png
  applicationsLight: https://brand.crafter.ing/gen/lab-applications-light.png
---

# Crafter Research Design

Crafter Research is a working lab for public-interest research systems: corpora, applied agents, evidence trails, source verification, and tools that make answers inspectable.

Use this file when building Crafter Research pages, agent interfaces, datasets, demos, social previews, and generated assets.

## Principles

- Evidence first: show the source, method, date, and limit before the claim.
- Quiet lab: prefer restrained surfaces, open space, and precise metadata.
- Shared mark: use the official Crafter glyph, recolored for the research system.
- Inspectable systems: make traces, citations, corpus IDs, and evaluation state visible.
- Public-interest tone: direct, careful, useful, and grounded in real work.

## Visual Direction

Crafter Research should feel like a calm research bench, not a generic AI product. The palette sits between paper archives and machine-readable interfaces. Mint is the signal. Obsidian is the lab bench. Graphite and glass hold layers of evidence.

Avoid neon dashboards, startup blue, gold, fantasy lab props, mascots, invented UI screenshots, and vague AI glow.

## Color Tokens

| Token | Hex | Use |
| --- | --- | --- |
| Research green | `#173F31` | Primary brand color, marks, deep accents |
| Corpus mint | `#CFE7D2` | Signal color, dark mode foreground accents |
| Signal moss | `#5F8F75` | Secondary metadata, subtle controls |
| Obsidian lab | `#07100D` | Dark mode background and lab surfaces |
| Graphite glass | `#12231C` | Panels, image frames, layered surfaces |
| Paper white | `#EEF4EC` | Light evidence surface and dark mode text |

Light mode uses the same family with higher paper contrast. Keep green as the identity anchor in both modes.

## Typography

- Use Geist for display, headings, body text, buttons, and navigation.
- Use Geist Mono for corpus IDs, dates, source handles, export dimensions, and prompt labels.
- H1 style should be balanced and breathable: weight `600`, line-height `1.02`, letter spacing `-0.025em`.
- Avoid overly heavy titles, tight vertical rhythm, and decorative serif display type.

## Layout

- Use full-width sections with constrained inner content.
- Cards are for repeated items, export tiles, prompt tiles, and contained specimens.
- Keep headings separated from body copy. Do not pack titles against paragraphs.
- Use dense metadata only when it helps scanning.
- Respect mobile first: no overlapping art, clipped titles, or horizontal page scroll.

## Theme Modes

The brand supports `system`, `light`, and `dark`.

- Store manual theme state in `localStorage` with the key `cr-brand-theme`.
- Apply manual themes through `document.documentElement.dataset.theme`.
- Leave `data-theme` unset for system mode.
- Use CSS variables for theme-dependent colors.
- Use a single `<picture>` element for theme-aware images.

```tsx
<picture>
  <source media="(prefers-color-scheme: dark)" srcSet="https://brand.crafter.ing/gen/lab-hero.png" />
  <img src="https://brand.crafter.ing/gen/lab-hero-light.png" alt="Research lab table with corpus documents and glass data panels" />
</picture>
```

For manual theme switching, update the source media and image source from the current theme state. Do not render duplicate image elements for light and dark.

## StyleX Contract

StyleX is the source of truth for component, layout, and page styling.

- Configure StyleX through Astro's Vite pipeline.
- Keep component styles next to React components with `stylex.create()`.
- Keep reusable constants in `src/styles/brand-system.stylex.ts`.
- Keep global CSS limited to `@stylex`, theme variables, font setup, and reset.
- Prefer shared token constants over one-off values.
- Do not add Tailwind, Sass, CSS modules, or ad hoc global component CSS to this brand site.

## Imagery

Use generated or photographed imagery that makes the actual research context visible: legal corpus pages, source pins, glass evidence panels, lab table surfaces, annotations, archival paper, and inspectable traces.

Required constraints:

- No embedded text inside generated images.
- No fake dashboards.
- No people unless a real editorial context requires them.
- No logos inside generated images.
- Leave negative space for real page typography.
- Create light and dark variants when the image is a primary page asset.

Approved assets:

- `https://brand.crafter.ing/crafter-glyph.svg`
- `https://brand.crafter.ing/favicon.svg`
- `https://brand.crafter.ing/og.png`
- `https://brand.crafter.ing/gen/lab-hero.png`
- `https://brand.crafter.ing/gen/lab-hero-light.png`
- `https://brand.crafter.ing/gen/lab-applications.png`
- `https://brand.crafter.ing/gen/lab-applications-light.png`

## Voice

Say:

- "Here is the source, here is the method, here is the limit."
- "Open corpus, reproducible pipeline, inspectable answer."
- "Research systems for public-interest work."

Avoid:

- "Magic AI"
- "Disruptive intelligence"
- "Autonomous thought leadership"
- Claims without source links or operational evidence.

## Copy Patterns

Short description:

> Crafter Research builds public-interest research systems with open corpora, applied agents, and inspectable evidence trails.

Product framing:

> A lab for corpora, agents, source verification, and research workflows that keep evidence visible.

CTA language:

- Use the mark
- See applications
- Generate assets
- Copy design.md

## Implementation Checklist

- Use the official Crafter glyph from `https://brand.crafter.ing/crafter-glyph.svg`.
- Use Geist and Geist Mono.
- Use StyleX for page and component styling.
- Support system, light, and dark theme modes.
- Use `<picture>` for theme-aware image assets.
- Keep source and method visible in research UI.
- Keep titles lighter, spaced, and readable on mobile.
- Export public assets from `/generate-assets`.
- Keep this file available at `/design.md`.
