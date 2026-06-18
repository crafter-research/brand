import * as stylex from "@stylexjs/stylex";

export const mq = stylex.defineConsts({
  phone: "@media (max-width: 700px)",
  tablet: "@media (max-width: 1100px)",
});

export const type = stylex.defineConsts({
  body: "Geist, Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
  mono: "Geist Mono, ui-monospace, SFMono-Regular, Menlo, monospace",
  titleLetterSpacing: "-0.025em",
  titleLineHeight: "1.02",
  titleSize: "clamp(2.5rem, 6.2vw, 4.75rem)",
});

export const color = stylex.defineConsts({
  card: "var(--card-bg)",
  cardStrong: "var(--card-bg-strong)",
  corpusMint: "var(--corpus-mint)",
  danger: "var(--danger)",
  graphiteGlass: "var(--graphite-glass)",
  obsidianLab: "var(--obsidian-lab)",
  paperMuted: "var(--paper-muted)",
  paperWhite: "var(--paper-white)",
  signalMoss: "var(--signal-moss)",
  surface: "var(--surface)",
  surfaceSoft: "var(--surface-soft)",
  trace: "var(--trace)",
  traceStrong: "var(--trace-strong)",
});

export const radius = stylex.defineConsts({
  lg: "var(--radius-lg)",
  md: "var(--radius-md)",
  pill: "999px",
  sm: "var(--radius-sm)",
});
