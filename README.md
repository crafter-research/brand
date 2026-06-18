# Crafter Research Brand

Brand system for Crafter Research, a lab for public-interest research systems, corpora, agents, and evidence trails.

Live site: [brand.crafter.ing](https://brand.crafter.ing)

Asset generator: [brand.crafter.ing/generate-assets](https://brand.crafter.ing/generate-assets)

Agent design file: [brand.crafter.ing/design.md](https://brand.crafter.ing/design.md)

Repository: [github.com/crafter-research/brand](https://github.com/crafter-research/brand)

## Identity

Crafter Research should feel like a working lab: calm, precise, inspectable, and built around evidence. The brand system keeps the Crafter mark while shifting the tone toward research infrastructure, legal corpora, applied agents, source traceability, and public-interest technical work.

## Contents

- Mark guidance
- Color system
- Typography direction
- Generated research imagery
- Application examples
- Voice principles
- Social preview
- Minimal asset generator
- Agent-readable `design.md`
- StyleX component pattern for agent-built UI

## Local Development

```bash
bun install
bun run dev
bun run build
```

## StyleX Pattern

StyleX is the source of truth for component, layout, and page styling. Global CSS only owns `@stylex`, font/base reset, and runtime theme variables consumed by StyleX.

- Configure StyleX through Astro's Vite pipeline in `astro.config.mjs`.
- Keep runtime light/dark/system tokens in `src/styles/global.css`.
- Keep reusable constants in `src/styles/brand-system.stylex.ts`.
- Put component and page styles next to React components with `stylex.create()`.
- Use StyleX for controls, panels, layout frames, stateful widgets, and agent-built product surfaces.
- Keep global CSS limited to `@stylex`, base HTML/body rules, and shared CSS variables.

## Production

The production domain is managed through the Crafter domain workflow and deployed on Vercel.

- Production: [brand.crafter.ing](https://brand.crafter.ing)
- Asset generator: [brand.crafter.ing/generate-assets](https://brand.crafter.ing/generate-assets)
- Agent design file: [brand.crafter.ing/design.md](https://brand.crafter.ing/design.md)
- Vercel fallback: [brand-5vbl6i3gv-crafter-station.vercel.app](https://brand-5vbl6i3gv-crafter-station.vercel.app)

## Assets

Generated lab visuals live in `public/gen/`. The Crafter mark is reused from the existing Crafter identity and recolored through the local brand palette.
