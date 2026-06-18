import { useEffect, useState } from "react";
import * as stylex from "@stylexjs/stylex";
import { colors } from "../lib/brand";
import { color, radius, type } from "../styles/brand-system.stylex";

import { BrandMark } from "./BrandMark";
import { ThemeSwitcher } from "./ThemeSwitcher";

const nav = [
  ["01", "Mark", "#mark"],
  ["02", "Color", "#color"],
  ["03", "Type", "#type"],
  ["04", "Applications", "#applications"],
  ["05", "Imagery", "#imagery"],
  ["06", "Voice", "#voice"],
  ["07", "Social", "#social"],
  ["+", "Generate", "/generate-assets"],
] as const;

const assetNav = [
  ["00", "Brand", "/"],
  ["01", "Prompts", "#prompts"],
  ["02", "Tokens", "#tokens"],
  ["03", "Exports", "#exports"],
] as const;

const variants = [
  { name: "Primary", tone: "primary", note: "Default mark for dark surfaces." },
  { name: "Signal", tone: "signal", note: "Thin-line interface state." },
  { name: "Evidence", tone: "evidence", note: "Muted imprint for documents." },
  { name: "Specimen", tone: "specimen", note: "Glass plate and lab material use." },
] as const;

const applicationRules = [
  ["Legal corpora", "Use the mark as a quiet provenance stamp near source material."],
  ["Agent interfaces", "Pair the mark with small mono labels, never with mascot language."],
  ["Public datasets", "Lead with method, dates, and source traceability."],
  ["Research notes", "Use muted paper and graphite before bright accents."],
] as const;

const voices = [
  ["We say", "Here is the source, here is the method, here is the limit."],
  ["We say", "Open corpus, reproducible pipeline, inspectable answer."],
  ["We avoid", "Magic AI, disruption, thought leadership, vague intelligence."],
  ["We avoid", "Claims without source links or operational evidence."],
] as const;

const brandImages = {
  applications: {
    alt: "Research brand applications on a lab table",
    darkSrc: "/gen/lab-applications.png",
    height: 1254,
    lightSrc: "/gen/lab-applications-light.png",
    width: 1254,
  },
  hero: {
    alt: "Research lab table with corpus documents and glass data panels",
    darkSrc: "/gen/lab-hero.png",
    height: 916,
    lightSrc: "/gen/lab-hero-light.png",
    width: 1717,
  },
} as const;

const socialFrames = [
  ["OG hero", "1200 x 630", brandImages.hero],
  ["Lab applications", "1 x 1", brandImages.applications],
] as const;

const prompts = [
  {
    label: "Hero Field",
    prompt:
      "Cinematic minimal research lab scene for Crafter Research, obsidian green table, legal corpus pages, glass evidence panels, subtle mint signal light, precise public-interest research atmosphere, no people, no text, no logo, no fake dashboard, premium but quiet.",
    size: "16:9",
  },
  {
    label: "Corpus Card",
    prompt:
      "Minimal square brand asset for Crafter Research, archival legal documents under translucent graphite glass, source pins, corpus index tabs, muted paper white and research green palette, evidence-first lab mood, no text, no logo, no people.",
    size: "1:1",
  },
  {
    label: "Agent Trace",
    prompt:
      "Vertical editorial asset for Crafter Research showing an inspectable agent trace, source fragments, evaluation marks, small green signal lines, physical lab materials, calm technical precision, no UI hallucinations, no text, no logo.",
    size: "4:5",
  },
  {
    label: "Launch Plate",
    prompt:
      "Open graph image background for Crafter Research, dark research bench, single evidence sheet, subtle corpus grid, mint reflection, source-verification mood, lots of negative space for small wordmark, no embedded text, no logo.",
    size: "1200 x 630",
  },
] as const;

const exports = [
  ["Design.md", "Agent design file", "/design.md"],
  ["Crafter glyph", "SVG mark", "/crafter-glyph.svg"],
  ["Open graph", "1200 x 630", "/og.png"],
  ["Hero image dark", "1717 x 916", "/gen/lab-hero.png"],
  ["Hero image light", "1717 x 916", "/gen/lab-hero-light.png"],
  ["Application dark", "1254 x 1254", "/gen/lab-applications.png"],
  ["Application light", "1254 x 1254", "/gen/lab-applications-light.png"],
  ["App icon", "1024 x 1024", "/favicon.svg"],
] as const;

const rules = [
  "Use the official Crafter mark only.",
  "Keep source material visible.",
  "Leave open space for method lines.",
  "Prefer one strong asset over a collage.",
  "Avoid mascots, neon dashboards, gold, and generic AI glow.",
] as const;

export function BrandGuidePage() {
  const [copiedDesign, setCopiedDesign] = useState(false);

  const copyDesign = async () => {
    const response = await fetch("/design.md");
    const design = await response.text();

    await navigator.clipboard.writeText(design);
    setCopiedDesign(true);
    window.setTimeout(() => setCopiedDesign(false), 1300);
  };

  return (
    <PageShell>
      <Topbar items={nav} />
      <main {...stylex.props(styles.main)} id="top">
        <section {...stylex.props(styles.frame, styles.cover)} aria-labelledby="cover-title">
          <div {...stylex.props(styles.coverCopy)}>
            <p {...stylex.props(styles.monoLabel)}>Brand system v1</p>
            <h1 {...stylex.props(styles.title)} id="cover-title">
              Crafter Research
            </h1>
            <p {...stylex.props(styles.coverIntro)}>
              A lab for public-interest research systems: corpora, agents, evidence trails, and tools that make
              sources inspectable.
            </p>
            <div {...stylex.props(styles.actions)} aria-label="Primary brand references">
              <a {...stylex.props(styles.primaryAction)} href="#mark">
                Use the mark
              </a>
              <a {...stylex.props(styles.action)} href="#applications">
                See applications
              </a>
              <a {...stylex.props(styles.action)} href="/generate-assets">
                Generate assets
              </a>
              <button {...stylex.props(styles.action, styles.actionButton)} onClick={copyDesign} type="button">
                {copiedDesign ? "Copied design.md" : "Copy design.md"}
              </button>
            </div>
          </div>
          <figure {...stylex.props(styles.coverArt)} aria-label="Generated laboratory brand visual">
            <ThemePicture image={brandImages.hero} imgStyle={styles.coverImage} pictureStyle={styles.pictureFill} />
            <div {...stylex.props(styles.coverOverlay)} />
          </figure>
          <dl {...stylex.props(styles.coverMeta)}>
            <MetaItem label="Domain" value="brand.crafter.ing" />
            <MetaItem label="Accent" value="Corpus mint" />
            <MetaItem label="Mode" value="Lab guide" />
          </dl>
        </section>

        <Section
          body="Crafter Research uses the shared Crafter mark, but strips it out of forged gold and places it in a quieter system: green signal, paper evidence, glass layers, and source-first interfaces."
          id="mark"
          kicker="Main mark"
          number="01"
          title="Same glyph. Different discipline."
        >
          <div {...stylex.props(styles.markStage)}>
            <BrandMark label="Crafter Research primary mark" size={320} />
          </div>
          <aside {...stylex.props(styles.specPanel)}>
            <dl {...stylex.props(styles.specList)}>
              <SpecItem label="Type" value="Shared Crafter glyph" />
              <SpecItem label="Primary color" value="#EEF4EC on #07100D" />
              <SpecItem label="Behavior" value="Source stamp, app icon, lab signal" />
              <SpecItem label="Do not" value="Use gold, stretch, rotate, or redraw" />
            </dl>
          </aside>
          <div {...stylex.props(styles.variantGrid)}>
            {variants.map((variant) => (
              <article {...stylex.props(styles.card, styles.variantCard)} key={variant.name}>
                <div
                  {...stylex.props(
                    styles.variantMark,
                    variant.tone === "signal" && styles.variantSignal,
                    variant.tone === "evidence" && styles.variantEvidence,
                    variant.tone === "specimen" && styles.variantSpecimen,
                  )}
                >
                  <BrandMark outline={variant.tone === "signal"} size={78} />
                </div>
                <h3 {...stylex.props(styles.cardTitle)}>{variant.name}</h3>
                <p {...stylex.props(styles.cardBody)}>{variant.note}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          body="The palette sits between paper archives and machine-readable interfaces. Mint is the signal. Obsidian is the lab bench."
          id="color"
          kicker="Color system"
          number="02"
          title="Research green, not startup blue."
        >
          <div {...stylex.props(styles.colorGrid)}>
            {colors.map((item) => (
              <article {...stylex.props(styles.card, styles.swatch)} key={item.name}>
                <div {...stylex.props(styles.swatchBlock(item.hex))} />
                <h3 {...stylex.props(styles.swatchTitle)}>{item.name}</h3>
                <p {...stylex.props(styles.swatchMeta)}>{item.token}</p>
                <code {...stylex.props(styles.swatchCode)}>{item.hex}</code>
              </article>
            ))}
          </div>
        </Section>

        <Section
          body="Prose needs to feel calm and exact. Metadata, source IDs, dates, and corpus references move to mono so they scan like lab records."
          id="type"
          kicker="Typography"
          number="03"
          title="Geist for clarity. Mono for evidence."
        >
          <div {...stylex.props(styles.typeBoard)}>
            <TypeSample label="Display">Investigación con fuentes al frente.</TypeSample>
            <TypeSample label="Metadata" mono>
              LAW.CORPUS/PE/2026 - SOURCE VERIFIED
            </TypeSample>
            <div {...stylex.props(styles.typeRow)}>
              <p {...stylex.props(styles.typeNote)}>
                Use tight, readable type. Avoid brand theater. If the sentence cannot survive a footnote, rewrite it.
              </p>
              <p {...stylex.props(styles.typeNote, styles.monoNote)}>
                12px mono labels - 0.16em tracking - uppercase only for metadata.
              </p>
            </div>
          </div>
        </Section>

        <Section
          body="Crafter Research shows up in corpus tools, agent UIs, legal research products, and public-interest data systems. The mark never competes with the evidence."
          id="applications"
          kicker="Applications"
          number="04"
          title="Brand in use."
        >
          <figure {...stylex.props(styles.applicationImage)}>
            <ThemePicture image={brandImages.applications} imgStyle={styles.mediaImage} loading="lazy" pictureStyle={styles.pictureFill} />
          </figure>
          <div {...stylex.props(styles.rulesGrid)}>
            {applicationRules.map(([title, body]) => (
              <article {...stylex.props(styles.card, styles.ruleCard)} key={title}>
                <h3 {...stylex.props(styles.cardTitle)}>{title}</h3>
                <p {...stylex.props(styles.cardBody)}>{body}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          body="Visuals should reveal the work: source documents, field notes, graph traces, evaluation sheets, and instruments. No stock teams, no random neon, no fake dashboards."
          id="imagery"
          kicker="Imagery"
          number="05"
          title="Show the research apparatus."
        >
          <div {...stylex.props(styles.imageryBoard)}>
            <ThemePicture
              image={brandImages.hero}
              imgStyle={[styles.mediaImage, styles.imageryImage]}
              loading="lazy"
              pictureStyle={styles.pictureFill}
            />
            <div {...stylex.props(styles.imageryCaption)}>
              <span {...stylex.props(styles.smallCaps)}>Imagegen asset</span>
              <p {...stylex.props(styles.captionTitle)}>
                Use as hero or campaign background when the page needs atmosphere without inventing product UI.
              </p>
            </div>
          </div>
        </Section>

        <Section
          body="The voice is direct, bilingual when useful, and method-led. We are a lab, so confidence comes from what can be inspected."
          id="voice"
          kicker="Voice"
          number="06"
          title="Evidence first. Claims second."
        >
          <div {...stylex.props(styles.voiceGrid)}>
            {voices.map(([label, text], index) => (
              <article {...stylex.props(styles.card, styles.voiceCard)} key={`${label}-${index}`}>
                <span {...stylex.props(styles.voiceLabel, label === "We avoid" && styles.avoidLabel)}>{label}</span>
                <p {...stylex.props(styles.voiceBody)}>{text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          body="Keep share images spare. Mark, domain, method line, and one quiet visual field. If the asset needs copy, make it short enough to cite."
          id="social"
          kicker="Social assets"
          number="07"
          title="Export frames."
        >
          <div {...stylex.props(styles.socialGrid)}>
            {socialFrames.map(([title, size, image]) => (
              <article {...stylex.props(styles.card, styles.socialCard)} key={title}>
                <ThemePicture image={image} imgStyle={styles.socialImage} loading="lazy" />
                <div {...stylex.props(styles.socialBody)}>
                  <h3 {...stylex.props(styles.cardTitle)}>{title}</h3>
                  <p {...stylex.props(styles.socialMeta)}>{size}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>
      </main>
      <Wordmark />
    </PageShell>
  );
}

export function AssetGeneratorPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyPrompt = async (label: string, prompt: string) => {
    await navigator.clipboard.writeText(prompt);
    setCopied(label);
    window.setTimeout(() => setCopied(null), 1300);
  };

  return (
    <PageShell assetPage>
      <Topbar items={assetNav} homeHref="/" />
      <main {...stylex.props(styles.main, styles.assetMain)}>
        <section {...stylex.props(styles.frame, styles.assetHero)} aria-labelledby="asset-title">
          <div {...stylex.props(styles.assetHeroCopy)}>
            <p {...stylex.props(styles.monoLabel)}>Asset generator</p>
            <h1 {...stylex.props(styles.title)} id="asset-title">
              Quiet assets for a working lab.
            </h1>
            <p {...stylex.props(styles.assetIntro)}>
              Prompt set, export sizes, and visual constraints for Crafter Research. Minimal by default, evidence
              visible, no invented interface theater.
            </p>
          </div>
          <div {...stylex.props(styles.assetHeroMark)} aria-hidden="true">
            <BrandMark size={300} />
            <span {...stylex.props(styles.verticalMeta)}>research.build.advance</span>
          </div>
        </section>

        <AssetSection id="prompts" number="01" title="Prompt Set">
          <div {...stylex.props(styles.promptGrid)}>
            {prompts.map((item) => (
              <article {...stylex.props(styles.promptCard)} key={item.label}>
                <div {...stylex.props(styles.promptHead)}>
                  <p {...stylex.props(styles.promptMeta)}>{item.size}</p>
                  <h3 {...stylex.props(styles.promptTitle)}>{item.label}</h3>
                </div>
                <pre {...stylex.props(styles.promptText)}>{item.prompt}</pre>
                <button {...stylex.props(styles.copyButton)} onClick={() => copyPrompt(item.label, item.prompt)} type="button">
                  {copied === item.label ? "Copied" : "Copy prompt"}
                </button>
              </article>
            ))}
          </div>
        </AssetSection>

        <AssetSection id="tokens" number="02" title="Brand Tokens">
          <div {...stylex.props(styles.tokenBoard)}>
            <div {...stylex.props(styles.tokenMark)}>
              <BrandMark label="Crafter Research mark" size={220} />
            </div>
            <div {...stylex.props(styles.tokenList)}>
              {colors.map((item) => (
                <article {...stylex.props(styles.tokenItem)} key={item.name}>
                  <span {...stylex.props(styles.tokenDot(item.hex))} />
                  <div>
                    <h3 {...stylex.props(styles.tokenTitle)}>{item.name}</h3>
                    <p {...stylex.props(styles.tokenCode)}>{item.hex}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </AssetSection>

        <AssetSection id="exports" number="03" title="Exports">
          <div {...stylex.props(styles.exportGrid)}>
            {exports.map(([name, size, href]) => (
              <a {...stylex.props(styles.exportCard)} href={href} key={name} rel="noreferrer" target="_blank">
                <span {...stylex.props(styles.exportMeta)}>{size}</span>
                <strong {...stylex.props(styles.exportTitle)}>{name}</strong>
                <small {...stylex.props(styles.exportPath)}>{href}</small>
              </a>
            ))}
          </div>
          <ul {...stylex.props(styles.assetRules)}>
            {rules.map((rule) => (
              <li {...stylex.props(styles.assetRule)} key={rule}>
                {rule}
              </li>
            ))}
          </ul>
        </AssetSection>
      </main>
    </PageShell>
  );
}

function PageShell({ assetPage, children }: { assetPage?: boolean; children: React.ReactNode }) {
  return (
    <div {...stylex.props(styles.shell, assetPage && styles.assetShell)}>
      <div {...stylex.props(styles.gridLayer)} />
      {children}
    </div>
  );
}

function Topbar({ homeHref = "#top", items }: { homeHref?: string; items: readonly (readonly [string, string, string])[] }) {
  return (
    <header {...stylex.props(styles.topbar)} aria-label="Brand guide header">
      <a {...stylex.props(styles.lockup)} aria-label="Crafter Research brand" href={homeHref}>
        <BrandMark size={30} />
        <span>Crafter Research</span>
      </a>
      <nav {...stylex.props(styles.nav)} aria-label="Brand sections">
        {items.map(([num, label, href]) => (
          <a {...stylex.props(styles.navLink)} href={href} key={`${num}-${label}`}>
            <span {...stylex.props(styles.navNumber)}>{num}</span>
            {label}
          </a>
        ))}
      </nav>
      <div {...stylex.props(styles.themeSlot)}>
        <ThemeSwitcher />
      </div>
    </header>
  );
}

function Section({
  body,
  children,
  id,
  kicker,
  number,
  title,
}: {
  body: React.ReactNode;
  children: React.ReactNode;
  id: string;
  kicker: string;
  number: string;
  title: string;
}) {
  return (
    <section {...stylex.props(styles.frame, styles.sectionGrid)} id={id}>
      <div {...stylex.props(styles.sectionKicker)}>
        <span {...stylex.props(styles.kickerNumber)}>{number}</span>
        <p>{kicker}</p>
      </div>
      <div {...stylex.props(styles.sectionCopy)}>
        <h2 {...stylex.props(styles.title)}>{title}</h2>
        <p {...stylex.props(styles.sectionBody)}>{body}</p>
      </div>
      {children}
    </section>
  );
}

function AssetSection({ children, id, number, title }: { children: React.ReactNode; id: string; number: string; title: string }) {
  return (
    <section {...stylex.props(styles.frame, styles.assetSection)} id={id}>
      <div {...stylex.props(styles.assetSectionHeading)}>
        <span {...stylex.props(styles.assetNumber)}>{number}</span>
        <h2 {...stylex.props(styles.assetHeading)}>{title}</h2>
      </div>
      {children}
    </section>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div {...stylex.props(styles.metaBlock)}>
      <dt {...stylex.props(styles.metaLabel)}>{label}</dt>
      <dd {...stylex.props(styles.metaValue)}>{value}</dd>
    </div>
  );
}

function SpecItem({ label, value }: { label: string; value: string }) {
  return (
    <div {...stylex.props(styles.specItem)}>
      <dt {...stylex.props(styles.specLabel)}>{label}</dt>
      <dd {...stylex.props(styles.specValue)}>{value}</dd>
    </div>
  );
}

function TypeSample({ children, label, mono }: { children: React.ReactNode; label: string; mono?: boolean }) {
  return (
    <div {...stylex.props(styles.typeSample)}>
      <span {...stylex.props(styles.typeLabel)}>{label}</span>
      <strong {...stylex.props(styles.typeDisplay, mono && styles.typeMono)}>{children}</strong>
    </div>
  );
}

function ThemePicture({
  image,
  imgStyle,
  loading,
  pictureStyle,
}: {
  image: (typeof brandImages)[keyof typeof brandImages];
  imgStyle: stylex.StyleXStyles;
  loading?: "eager" | "lazy";
  pictureStyle?: stylex.StyleXStyles;
}) {
  const [mode, setMode] = useState<"dark" | "light" | "system">("system");

  useEffect(() => {
    const readTheme = () => {
      const theme = document.documentElement.dataset.theme;
      setMode(theme === "dark" || theme === "light" ? theme : "system");
    };
    const observer = new MutationObserver(readTheme);

    readTheme();
    observer.observe(document.documentElement, { attributeFilter: ["data-theme"], attributes: true });

    return () => observer.disconnect();
  }, []);

  const media = mode === "dark" ? "all" : mode === "light" ? "not all" : "(prefers-color-scheme: dark)";
  const src = mode === "dark" ? image.darkSrc : image.lightSrc;

  return (
    <picture {...stylex.props(pictureStyle)}>
      <source media={media} srcSet={image.darkSrc} />
      <img
        {...stylex.props(imgStyle)}
        alt={image.alt}
        decoding="async"
        height={image.height}
        loading={loading}
        src={src}
        width={image.width}
      />
    </picture>
  );
}

function Wordmark() {
  return (
    <footer {...stylex.props(styles.wordmark)}>
      <div>
        <strong {...stylex.props(styles.wordmarkTitle)}>
          Crafter<span {...stylex.props(styles.wordmarkAccent)}>Research</span>
        </strong>
        <p {...stylex.props(styles.wordmarkMeta)}>Research. Build. Advance.</p>
      </div>
      <div {...stylex.props(styles.wordmarkMark)}>
        <BrandMark size={120} />
      </div>
    </footer>
  );
}

const styles = stylex.create({
  action: {
    alignItems: "center",
    backgroundColor: "var(--button-ghost-bg)",
    borderColor: color.traceStrong,
    borderRadius: radius.pill,
    borderStyle: "solid",
    borderWidth: 1,
    color: color.paperWhite,
    display: "inline-flex",
    fontSize: 13,
    fontWeight: 560,
    minHeight: 44,
    paddingBottom: 0,
    paddingLeft: 18,
    paddingRight: 18,
    paddingTop: 0,
  },
  actionButton: {
    cursor: "pointer",
    fontFamily: "inherit",
  },
  actions: {
    display: "flex",
    flexWrap: "wrap",
    gap: 12,
    marginTop: 38,
  },
  applicationImage: {
    backgroundColor: color.graphiteGlass,
    borderColor: color.trace,
    borderRadius: radius.lg,
    borderStyle: "solid",
    borderWidth: 1,
    gridColumn: 1,
    margin: 0,
    minHeight: {
      default: "auto",
      "@media (max-width: 1100px)": 420,
    },
    overflow: "hidden",
  },
  assetHeading: {
    color: color.paperWhite,
    flexGrow: 1,
    flexShrink: 1,
    fontSize: type.titleSize,
    fontWeight: 600,
    letterSpacing: type.titleLetterSpacing,
    lineHeight: type.titleLineHeight,
    textAlign: {
      default: "right",
      "@media (max-width: 700px)": "left",
    },
    textWrap: "balance",
  },
  assetHero: {
    alignItems: "stretch",
    display: "grid",
    gridTemplateColumns: {
      default: "minmax(0, 1fr) minmax(280px, 0.48fr)",
      "@media (max-width: 1100px)": "1fr",
    },
    minHeight: "calc(100svh - 120px)",
  },
  assetHeroCopy: {
    alignSelf: "end",
    maxWidth: 980,
    paddingBottom: {
      default: "clamp(34px, 7vw, 104px)",
      "@media (max-width: 700px)": 28,
    },
    paddingLeft: {
      default: "clamp(34px, 7vw, 104px)",
      "@media (max-width: 700px)": 28,
    },
    paddingRight: {
      default: "clamp(34px, 7vw, 104px)",
      "@media (max-width: 700px)": 28,
    },
    paddingTop: {
      default: "clamp(34px, 7vw, 104px)",
      "@media (max-width: 700px)": 28,
    },
  },
  assetHeroMark: {
    alignItems: "center",
    backgroundColor: "var(--asset-mark-bg)",
    backgroundImage: "linear-gradient(180deg, var(--asset-mark-highlight), transparent 44%)",
    borderLeftColor: {
      default: color.trace,
      "@media (max-width: 1100px)": "transparent",
    },
    borderLeftStyle: {
      default: "solid",
      "@media (max-width: 1100px)": "none",
    },
    borderLeftWidth: {
      default: 1,
      "@media (max-width: 1100px)": 0,
    },
    borderTopColor: {
      default: "transparent",
      "@media (max-width: 1100px)": color.trace,
    },
    borderTopStyle: {
      default: "none",
      "@media (max-width: 1100px)": "solid",
    },
    borderTopWidth: {
      default: 0,
      "@media (max-width: 1100px)": 1,
    },
    display: "grid",
    minHeight: {
      default: 520,
      "@media (max-width: 1100px)": 360,
    },
    placeItems: "center",
    position: "relative",
  },
  assetIntro: {
    color: color.paperMuted,
    fontSize: "clamp(18px, 1.7vw, 25px)",
    lineHeight: 1.38,
    marginTop: 30,
    maxWidth: 720,
  },
  assetMain: {
    gap: 18,
  },
  assetNumber: {
    borderColor: color.traceStrong,
    borderRadius: radius.pill,
    borderStyle: "solid",
    borderWidth: 1,
    color: color.corpusMint,
    display: "grid",
    fontFamily: type.mono,
    fontSize: 12,
    height: 42,
    placeItems: "center",
    width: 42,
  },
  assetRule: {
    alignItems: "end",
    backgroundColor: "var(--rule-bg)",
    color: color.paperMuted,
    display: "flex",
    fontSize: 14,
    lineHeight: 1.35,
    minHeight: {
      default: 120,
      "@media (max-width: 700px)": 88,
    },
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
  assetRules: {
    backgroundColor: color.trace,
    borderColor: color.trace,
    borderRadius: radius.md,
    borderStyle: "solid",
    borderWidth: 1,
    display: "grid",
    gap: 1,
    gridTemplateColumns: {
      default: "repeat(5, minmax(0, 1fr))",
      "@media (max-width: 1100px)": "repeat(2, minmax(0, 1fr))",
      "@media (max-width: 700px)": "1fr",
    },
    listStyleType: "none",
    margin: "14px 0 0",
    overflow: "hidden",
    paddingBottom: 1,
    paddingLeft: 1,
    paddingRight: 1,
    paddingTop: 1,
  },
  assetSection: {
    paddingBottom: {
      default: "clamp(24px, 5vw, 72px)",
      "@media (max-width: 700px)": 28,
    },
    paddingLeft: {
      default: "clamp(24px, 5vw, 72px)",
      "@media (max-width: 700px)": 28,
    },
    paddingRight: {
      default: "clamp(24px, 5vw, 72px)",
      "@media (max-width: 700px)": 28,
    },
    paddingTop: {
      default: "clamp(24px, 5vw, 72px)",
      "@media (max-width: 700px)": 28,
    },
  },
  assetSectionHeading: {
    alignItems: {
      default: "center",
      "@media (max-width: 700px)": "flex-start",
    },
    display: "flex",
    flexDirection: {
      default: "row",
      "@media (max-width: 700px)": "column",
    },
    gap: 22,
    justifyContent: "space-between",
    marginBottom: "clamp(22px, 4vw, 44px)",
  },
  assetShell: {},
  avoidLabel: {
    color: color.danger,
  },
  captionTitle: {
    color: color.paperWhite,
    fontSize: "clamp(24px, 3vw, 50px)",
    fontWeight: 600,
    letterSpacing: type.titleLetterSpacing,
    lineHeight: 1.08,
    marginTop: 18,
    textWrap: "balance",
  },
  card: {
    backgroundColor: color.card,
    borderColor: color.trace,
    borderRadius: radius.md,
    borderStyle: "solid",
    borderWidth: 1,
  },
  cardBody: {
    color: color.paperMuted,
    fontSize: 13,
    lineHeight: 1.45,
  },
  cardTitle: {
    color: color.paperWhite,
    fontSize: 17,
    letterSpacing: "-0.02em",
  },
  colorGrid: {
    display: "grid",
    gap: 14,
    gridColumn: "1 / -1",
    gridTemplateColumns: {
      default: "repeat(3, minmax(0, 1fr))",
      "@media (max-width: 1100px)": "repeat(2, minmax(0, 1fr))",
      "@media (max-width: 700px)": "1fr",
    },
  },
  copyButton: {
    backgroundColor: color.paperWhite,
    borderColor: color.traceStrong,
    borderRadius: radius.pill,
    borderStyle: "solid",
    borderWidth: 1,
    color: color.obsidianLab,
    cursor: "pointer",
    fontFamily: "inherit",
    fontSize: 13,
    fontWeight: 650,
    minHeight: 42,
    width: "100%",
  },
  cover: {
    alignItems: "stretch",
    display: "grid",
    gridTemplateColumns: {
      default: "minmax(0, 0.92fr) minmax(0, 1.08fr)",
      "@media (max-width: 1100px)": "1fr",
    },
    minHeight: {
      default: "calc(100svh - 120px)",
      "@media (max-width: 700px)": "auto",
    },
  },
  coverArt: {
    isolation: "isolate",
    margin: 0,
    minHeight: {
      default: 460,
      "@media (max-width: 1100px)": 420,
      "@media (max-width: 700px)": 340,
    },
    position: "relative",
  },
  coverCopy: {
    alignSelf: "center",
    maxWidth: 760,
    paddingBottom: {
      default: "clamp(36px, 7vw, 104px)",
      "@media (max-width: 700px)": 28,
    },
    paddingLeft: {
      default: "clamp(36px, 7vw, 104px)",
      "@media (max-width: 700px)": 28,
    },
    paddingRight: {
      default: "clamp(36px, 7vw, 104px)",
      "@media (max-width: 700px)": 28,
    },
    paddingTop: {
      default: "clamp(36px, 7vw, 104px)",
      "@media (max-width: 700px)": 28,
    },
    position: "relative",
    zIndex: 2,
  },
  coverImage: {
    display: "block",
    filter: "saturate(0.95) contrast(1.06)",
    height: "100%",
    objectFit: "cover",
    width: "100%",
  },
  coverIntro: {
    color: color.paperMuted,
    fontSize: "clamp(16px, 1.25vw, 18px)",
    lineHeight: 1.56,
    marginTop: 28,
    maxWidth: 576,
    textWrap: "pretty",
  },
  coverMeta: {
    bottom: {
      default: 26,
      "@media (max-width: 1100px)": "auto",
    },
    display: "grid",
    gap: 10,
    gridColumn: {
      default: "auto",
      "@media (max-width: 1100px)": "1 / -1",
    },
    gridTemplateColumns: {
      default: "repeat(3, minmax(0, 1fr))",
      "@media (max-width: 700px)": "1fr",
    },
    left: "clamp(24px, 7vw, 104px)",
    maxWidth: 760,
    paddingBottom: {
      default: 0,
      "@media (max-width: 1100px)": 28,
    },
    paddingLeft: {
      default: 0,
      "@media (max-width: 1100px)": "clamp(24px, 7vw, 104px)",
    },
    paddingRight: {
      default: 0,
      "@media (max-width: 1100px)": "clamp(24px, 7vw, 104px)",
    },
    paddingTop: {
      default: 0,
      "@media (max-width: 1100px)": 0,
    },
    position: {
      default: "absolute",
      "@media (max-width: 1100px)": "static",
    },
    right: "clamp(24px, 7vw, 104px)",
    zIndex: 3,
  },
  coverOverlay: {
    backgroundImage: {
      default:
        "linear-gradient(90deg, var(--cover-overlay-solid) 0%, var(--cover-overlay-strong) 18%, var(--cover-overlay-clear) 44%), linear-gradient(180deg, var(--cover-overlay-top), var(--cover-overlay-bottom))",
      "@media (max-width: 1100px)": "linear-gradient(180deg, var(--cover-overlay-clear), var(--cover-overlay-bottom))",
    },
    inset: 0,
    position: "absolute",
  },
  exportCard: {
    backgroundColor: color.cardStrong,
    borderColor: color.trace,
    borderRadius: radius.md,
    borderStyle: "solid",
    borderWidth: 1,
    display: "flex",
    flexDirection: "column",
    gap: 18,
    justifyContent: "space-between",
    minHeight: 180,
    paddingBottom: 18,
    paddingLeft: 18,
    paddingRight: 18,
    paddingTop: 18,
  },
  exportGrid: {
    display: "grid",
    gap: 12,
    gridTemplateColumns: {
      default: "repeat(4, minmax(0, 1fr))",
      "@media (max-width: 1100px)": "repeat(2, minmax(0, 1fr))",
      "@media (max-width: 700px)": "1fr",
    },
  },
  exportMeta: {
    color: color.signalMoss,
    fontFamily: type.mono,
    fontSize: 11,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
  },
  exportPath: {
    color: color.paperMuted,
    fontFamily: type.mono,
    fontSize: 11,
    letterSpacing: 0,
    overflowWrap: "anywhere",
    textTransform: "none",
  },
  exportTitle: {
    color: color.paperWhite,
    display: "block",
    fontSize: 26,
    fontWeight: 600,
    letterSpacing: type.titleLetterSpacing,
    lineHeight: 1.08,
  },
  frame: {
    backgroundColor: "var(--frame-bg)",
    backgroundImage: "linear-gradient(180deg, var(--frame-highlight), transparent 30%)",
    borderColor: color.trace,
    borderRadius: radius.lg,
    borderStyle: "solid",
    borderWidth: 1,
    boxShadow: "var(--shadow)",
    overflow: "hidden",
    position: "relative",
  },
  gridLayer: {
    backgroundImage:
      "linear-gradient(var(--trace) 1px, transparent 1px), linear-gradient(90deg, var(--trace) 1px, transparent 1px)",
    backgroundSize: "72px 72px",
    inset: 0,
    maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), transparent 82%)",
    pointerEvents: "none",
    position: "fixed",
    zIndex: -1,
  },
  imageryBoard: {
    backgroundColor: color.graphiteGlass,
    borderColor: color.trace,
    borderRadius: radius.lg,
    borderStyle: "solid",
    borderWidth: 1,
    display: "grid",
    gridColumn: "1 / -1",
    gridTemplateColumns: {
      default: "1.1fr 0.9fr",
      "@media (max-width: 1100px)": "1fr",
    },
    minHeight: {
      default: 460,
      "@media (max-width: 700px)": "auto",
    },
    overflow: "hidden",
  },
  imageryCaption: {
    alignSelf: "center",
    paddingBottom: "clamp(28px, 5vw, 72px)",
    paddingLeft: "clamp(28px, 5vw, 72px)",
    paddingRight: "clamp(28px, 5vw, 72px)",
    paddingTop: "clamp(28px, 5vw, 72px)",
  },
  imageryImage: {
    aspectRatio: {
      default: "auto",
      "@media (max-width: 700px)": "1.2 / 1",
    },
  },
  kickerNumber: {
    borderColor: color.traceStrong,
    borderRadius: "50%",
    borderStyle: "solid",
    borderWidth: 1,
    color: color.paperWhite,
    display: "grid",
    height: 38,
    letterSpacing: 0,
    placeItems: "center",
    width: 38,
  },
  lockup: {
    alignItems: "center",
    backgroundColor: "var(--lockup-bg)",
    borderRadius: radius.pill,
    color: color.paperWhite,
    display: "inline-flex",
    fontSize: {
      default: 13,
      "@media (max-width: 700px)": 12,
    },
    fontWeight: 640,
    gap: {
      default: 12,
      "@media (max-width: 700px)": 8,
    },
    letterSpacing: "0.02em",
    minHeight: 42,
    paddingBottom: 0,
    paddingLeft: 8,
    paddingRight: {
      default: 14,
      "@media (max-width: 700px)": 10,
    },
    paddingTop: 0,
  },
  main: {
    display: "grid",
    gap: 22,
    paddingTop: 24,
  },
  markStage: {
    backgroundImage:
      "radial-gradient(circle at 50% 42%, var(--mark-stage-glow), transparent 45%), linear-gradient(180deg, var(--mark-stage-start), var(--mark-stage-end))",
    borderColor: color.trace,
    borderRadius: radius.lg,
    borderStyle: "solid",
    borderWidth: 1,
    display: "grid",
    gridColumn: 1,
    minHeight: {
      default: 420,
      "@media (max-width: 700px)": 300,
    },
    placeItems: "center",
  },
  mediaImage: {
    display: "block",
    height: "100%",
    objectFit: "cover",
    width: "100%",
  },
  pictureFill: {
    display: "block",
    height: "100%",
    width: "100%",
  },
  metaBlock: {
    borderTopColor: color.traceStrong,
    borderTopStyle: "solid",
    borderTopWidth: 1,
    minWidth: 0,
    paddingTop: 12,
  },
  metaLabel: {
    color: color.signalMoss,
    fontSize: 10,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
  },
  metaValue: {
    color: color.paperWhite,
    fontSize: 13,
    margin: "5px 0 0",
    overflowWrap: "anywhere",
  },
  monoLabel: {
    color: color.corpusMint,
    fontFamily: type.mono,
    fontSize: 12,
    fontWeight: 620,
    letterSpacing: "0.2em",
    margin: "0 0 28px",
    textTransform: "uppercase",
  },
  monoNote: {
    fontFamily: type.mono,
    letterSpacing: "0.02em",
  },
  nav: {
    alignItems: "center",
    display: "flex",
    gap: 4,
    gridColumn: {
      default: "auto",
      "@media (max-width: 1100px)": "1 / -1",
    },
    gridRow: {
      default: "auto",
      "@media (max-width: 1100px)": 2,
    },
    justifyContent: {
      default: "flex-end",
      "@media (max-width: 1100px)": "flex-start",
    },
    minWidth: 0,
    overflowX: {
      default: "visible",
      "@media (max-width: 1100px)": "auto",
    },
    paddingBottom: {
      default: 0,
      "@media (max-width: 1100px)": 2,
    },
  },
  navLink: {
    alignItems: "center",
    borderRadius: radius.pill,
    color: {
      default: color.paperMuted,
      ":hover": color.paperWhite,
    },
    display: "inline-flex",
    fontSize: 12,
    gap: 7,
    minHeight: 38,
    paddingBottom: 0,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 0,
    whiteSpace: "nowrap",
    backgroundColor: {
      default: "transparent",
      ":hover": "var(--nav-hover-bg)",
    },
  },
  navNumber: {
    color: color.signalMoss,
    fontFamily: type.mono,
    fontSize: 10,
  },
  primaryAction: {
    alignItems: "center",
    backgroundColor: color.paperWhite,
    borderColor: color.traceStrong,
    borderRadius: radius.pill,
    borderStyle: "solid",
    borderWidth: 1,
    color: color.obsidianLab,
    display: "inline-flex",
    fontSize: 13,
    fontWeight: 560,
    minHeight: 44,
    paddingBottom: 0,
    paddingLeft: 18,
    paddingRight: 18,
    paddingTop: 0,
  },
  promptCard: {
    backgroundColor: color.cardStrong,
    borderColor: color.trace,
    borderRadius: radius.md,
    borderStyle: "solid",
    borderWidth: 1,
    display: "grid",
    gap: 18,
    gridTemplateRows: "auto 1fr auto",
    minHeight: {
      default: 420,
      "@media (max-width: 700px)": 340,
    },
    paddingBottom: 18,
    paddingLeft: 18,
    paddingRight: 18,
    paddingTop: 18,
  },
  promptGrid: {
    display: "grid",
    gap: 12,
    gridTemplateColumns: {
      default: "repeat(4, minmax(0, 1fr))",
      "@media (max-width: 1100px)": "repeat(2, minmax(0, 1fr))",
      "@media (max-width: 700px)": "1fr",
    },
  },
  promptHead: {
    alignItems: "start",
    display: "flex",
    gap: 14,
    justifyContent: "space-between",
  },
  promptMeta: {
    color: color.signalMoss,
    fontFamily: type.mono,
    fontSize: 11,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
  },
  promptText: {
    color: color.paperMuted,
    fontFamily: type.body,
    fontSize: 15,
    lineHeight: 1.48,
    margin: 0,
    minWidth: 0,
    overflow: "hidden",
    whiteSpace: "pre-wrap",
  },
  promptTitle: {
    color: color.paperWhite,
    fontSize: 24,
    fontWeight: 600,
    letterSpacing: type.titleLetterSpacing,
    lineHeight: 1.08,
    textAlign: "right",
  },
  ruleCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: 180,
    paddingBottom: 22,
    paddingLeft: 22,
    paddingRight: 22,
    paddingTop: 22,
  },
  rulesGrid: {
    alignSelf: "stretch",
    display: "grid",
    gap: 14,
    gridTemplateColumns: {
      default: "repeat(2, minmax(0, 1fr))",
      "@media (max-width: 700px)": "1fr",
    },
  },
  sectionBody: {
    color: color.paperMuted,
    fontSize: "clamp(17px, 1.45vw, 22px)",
    lineHeight: 1.45,
    marginTop: 20,
    maxWidth: 720,
  },
  sectionCopy: {
    maxWidth: 850,
  },
  sectionGrid: {
    display: "grid",
    gap: "clamp(24px, 4vw, 72px)",
    gridTemplateColumns: {
      default: "0.36fr 0.64fr",
      "@media (max-width: 1100px)": "1fr",
    },
    paddingBottom: {
      default: "clamp(28px, 5vw, 76px)",
      "@media (max-width: 700px)": 28,
    },
    paddingLeft: {
      default: "clamp(28px, 5vw, 76px)",
      "@media (max-width: 700px)": 28,
    },
    paddingRight: {
      default: "clamp(28px, 5vw, 76px)",
      "@media (max-width: 700px)": 28,
    },
    paddingTop: {
      default: "clamp(28px, 5vw, 76px)",
      "@media (max-width: 700px)": 28,
    },
  },
  sectionKicker: {
    alignItems: "center",
    alignSelf: "start",
    color: color.corpusMint,
    display: "flex",
    fontFamily: type.mono,
    fontSize: 12,
    fontWeight: 620,
    gap: 12,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
  },
  shell: {
    marginInline: "auto",
    paddingBottom: 48,
    paddingLeft: {
      default: "clamp(16px, 3vw, 48px)",
      "@media (max-width: 700px)": 12,
    },
    paddingRight: {
      default: "clamp(16px, 3vw, 48px)",
      "@media (max-width: 700px)": 12,
    },
    paddingTop: {
      default: 24,
      "@media (max-width: 700px)": 12,
    },
    width: "min(1560px, 100%)",
  },
  smallCaps: {
    color: color.corpusMint,
    fontFamily: type.mono,
    fontSize: 12,
    fontWeight: 680,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
  },
  socialBody: {
    borderTopColor: color.trace,
    borderTopStyle: "solid",
    borderTopWidth: 1,
    display: "flex",
    gap: 16,
    justifyContent: "space-between",
    paddingBottom: 18,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 18,
  },
  socialCard: {
    overflow: "hidden",
  },
  socialGrid: {
    display: "grid",
    gap: 14,
    gridColumn: "1 / -1",
    gridTemplateColumns: {
      default: "repeat(2, minmax(0, 1fr))",
      "@media (max-width: 700px)": "1fr",
    },
  },
  socialImage: {
    aspectRatio: "16 / 9",
    display: "block",
    height: "100%",
    objectFit: "cover",
    width: "100%",
  },
  socialMeta: {
    color: color.paperMuted,
    fontFamily: type.mono,
    fontSize: 13,
  },
  specItem: {
    alignItems: "center",
    borderBottomColor: color.trace,
    borderBottomStyle: "solid",
    borderBottomWidth: 1,
    display: "grid",
    gap: 18,
    gridTemplateColumns: {
      default: "140px 1fr",
      "@media (max-width: 700px)": "1fr",
    },
    paddingBottom: 22,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 22,
  },
  specLabel: {
    color: color.signalMoss,
    fontSize: 11,
    fontWeight: 680,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
  },
  specList: {
    display: "grid",
    height: "100%",
    margin: 0,
  },
  specPanel: {
    alignSelf: "stretch",
    backgroundColor: color.surface,
    borderColor: color.trace,
    borderRadius: radius.lg,
    borderStyle: "solid",
    borderWidth: 1,
  },
  specValue: {
    color: color.paperWhite,
    fontSize: 15,
    margin: 0,
  },
  swatch: {
    alignItems: "center",
    display: "grid",
    gap: 18,
    gridTemplateColumns: {
      default: "96px 1fr",
      "@media (max-width: 700px)": "1fr",
    },
    minHeight: 120,
    paddingBottom: 18,
    paddingLeft: 18,
    paddingRight: 18,
    paddingTop: 18,
  },
  swatchBlock: (hex: string) => ({
    backgroundColor: hex,
    borderRadius: 14,
    boxShadow: "inset 0 0 0 1px var(--swatch-ring)",
    height: 78,
    width: 96,
  }),
  swatchCode: {
    color: color.corpusMint,
    fontSize: 12,
    gridColumn: {
      default: 2,
      "@media (max-width: 700px)": "auto",
    },
  },
  swatchMeta: {
    color: color.paperMuted,
    fontSize: 12,
    gridColumn: {
      default: 2,
      "@media (max-width: 700px)": "auto",
    },
  },
  swatchTitle: {
    alignSelf: "end",
    color: color.paperWhite,
    fontSize: 15,
  },
  title: {
    color: color.paperWhite,
    fontSize: type.titleSize,
    fontWeight: 600,
    letterSpacing: type.titleLetterSpacing,
    lineHeight: type.titleLineHeight,
    margin: 0,
    maxWidth: 768,
    textWrap: "balance",
  },
  tokenBoard: {
    display: "grid",
    gap: 12,
    gridTemplateColumns: {
      default: "minmax(280px, 0.42fr) 1fr",
      "@media (max-width: 1100px)": "1fr",
    },
  },
  tokenCode: {
    color: color.corpusMint,
    fontFamily: type.mono,
    fontSize: 12,
    marginTop: 8,
  },
  tokenDot: (hex: string) => ({
    backgroundColor: hex,
    borderRadius: "50%",
    boxShadow: "inset 0 0 0 1px var(--swatch-ring)",
    height: 86,
    width: 86,
  }),
  tokenItem: {
    alignItems: "center",
    backgroundColor: color.cardStrong,
    borderColor: color.trace,
    borderRadius: radius.md,
    borderStyle: "solid",
    borderWidth: 1,
    display: "grid",
    gap: 18,
    gridTemplateColumns: {
      default: "86px 1fr",
      "@media (max-width: 700px)": "1fr",
    },
    minHeight: 132,
    paddingBottom: 18,
    paddingLeft: 18,
    paddingRight: 18,
    paddingTop: 18,
  },
  tokenList: {
    display: "grid",
    gap: 12,
    gridTemplateColumns: {
      default: "repeat(2, minmax(0, 1fr))",
      "@media (max-width: 700px)": "1fr",
    },
  },
  tokenMark: {
    backgroundColor: "var(--muted-panel-bg)",
    borderColor: color.trace,
    borderRadius: radius.md,
    borderStyle: "solid",
    borderWidth: 1,
    display: "grid",
    minHeight: 430,
    placeItems: "center",
  },
  tokenTitle: {
    color: color.paperWhite,
    fontSize: 17,
    letterSpacing: "-0.02em",
  },
  themeSlot: {
    display: "grid",
    gridColumn: {
      default: "auto",
      "@media (max-width: 1100px)": 2,
    },
    gridRow: {
      default: "auto",
      "@media (max-width: 1100px)": 1,
    },
    justifySelf: "end",
    minWidth: 0,
  },
  topbar: {
    alignItems: "center",
    backdropFilter: "blur(20px)",
    backgroundColor: "var(--topbar-bg)",
    borderColor: color.trace,
    borderRadius: {
      default: radius.pill,
      "@media (max-width: 1100px)": radius.md,
    },
    borderStyle: "solid",
    borderWidth: 1,
    boxShadow: "0 16px 50px var(--topbar-shadow)",
    display: "grid",
    gap: {
      default: 24,
      "@media (max-width: 1100px)": 12,
    },
    gridTemplateColumns: {
      default: "auto 1fr auto",
      "@media (max-width: 1100px)": "minmax(0, 1fr) auto",
    },
    paddingBottom: 10,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 10,
    position: {
      default: "sticky",
      "@media (max-width: 700px)": "relative",
    },
    top: {
      default: 16,
      "@media (max-width: 700px)": "auto",
    },
    zIndex: 20,
  },
  typeBoard: {
    display: "grid",
    gap: 14,
    gridColumn: "1 / -1",
  },
  typeDisplay: {
    display: "block",
    fontSize: type.titleSize,
    fontWeight: 600,
    letterSpacing: type.titleLetterSpacing,
    lineHeight: type.titleLineHeight,
    maxWidth: 768,
    textWrap: "balance",
  },
  typeLabel: {
    color: color.signalMoss,
    display: "block",
    fontSize: 12,
    fontWeight: 680,
    letterSpacing: "0.16em",
    marginBottom: 18,
    textTransform: "uppercase",
  },
  typeMono: {
    fontFamily: type.mono,
    fontSize: "clamp(18px, 3.2vw, 52px)",
    letterSpacing: "0.02em",
    lineHeight: 1.05,
  },
  typeNote: {
    backgroundColor: color.card,
    borderColor: color.trace,
    borderRadius: radius.md,
    borderStyle: "solid",
    borderWidth: 1,
    color: color.paperMuted,
    lineHeight: 1.5,
    paddingBottom: 22,
    paddingLeft: 22,
    paddingRight: 22,
    paddingTop: 22,
  },
  typeRow: {
    display: "grid",
    gap: 14,
    gridTemplateColumns: {
      default: "1fr 1fr",
      "@media (max-width: 700px)": "1fr",
    },
  },
  typeSample: {
    backgroundColor: "var(--sample-bg)",
    borderColor: color.trace,
    borderRadius: radius.lg,
    borderStyle: "solid",
    borderWidth: 1,
    paddingBottom: "clamp(24px, 4vw, 48px)",
    paddingLeft: "clamp(24px, 4vw, 48px)",
    paddingRight: "clamp(24px, 4vw, 48px)",
    paddingTop: "clamp(24px, 4vw, 48px)",
  },
  variantCard: {
    display: "grid",
    gap: 10,
    gridTemplateRows: "1fr auto auto",
    minHeight: 270,
    paddingBottom: 18,
    paddingLeft: 18,
    paddingRight: 18,
    paddingTop: 18,
  },
  variantEvidence: {
    backgroundColor: "var(--evidence-bg)",
    color: "var(--evidence-mark)",
  },
  variantGrid: {
    display: "grid",
    gap: 14,
    gridColumn: "1 / -1",
    gridTemplateColumns: {
      default: "repeat(4, minmax(0, 1fr))",
      "@media (max-width: 1100px)": "repeat(2, minmax(0, 1fr))",
      "@media (max-width: 700px)": "1fr",
    },
  },
  variantMark: {
    backgroundColor: "var(--muted-panel-bg)",
    borderRadius: radius.sm,
    color: color.paperWhite,
    display: "grid",
    minHeight: 142,
    placeItems: "center",
  },
  variantSignal: {
    color: "transparent",
    stroke: color.corpusMint,
  },
  variantSpecimen: {
    backgroundColor: "var(--specimen-bg)",
    backgroundImage: "linear-gradient(135deg, var(--specimen-highlight-a), var(--specimen-highlight-b))",
    boxShadow: "inset 0 0 0 1px var(--specimen-line)",
    color: color.corpusMint,
  },
  verticalMeta: {
    bottom: 28,
    color: color.signalMoss,
    fontFamily: type.mono,
    fontSize: 11,
    letterSpacing: "0.18em",
    position: "absolute",
    right: 28,
    textTransform: "uppercase",
    writingMode: "vertical-rl",
  },
  voiceBody: {
    color: color.paperWhite,
    fontSize: 19,
    letterSpacing: "-0.02em",
    lineHeight: 1.25,
  },
  voiceCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: 210,
    paddingBottom: 22,
    paddingLeft: 22,
    paddingRight: 22,
    paddingTop: 22,
  },
  voiceGrid: {
    display: "grid",
    gap: 14,
    gridColumn: "1 / -1",
    gridTemplateColumns: {
      default: "repeat(4, minmax(0, 1fr))",
      "@media (max-width: 1100px)": "repeat(2, minmax(0, 1fr))",
      "@media (max-width: 700px)": "1fr",
    },
  },
  voiceLabel: {
    color: color.corpusMint,
    fontFamily: type.mono,
    fontSize: 11,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
  },
  wordmark: {
    alignItems: "end",
    display: "grid",
    gap: 32,
    gridTemplateColumns: {
      default: "1fr auto",
      "@media (max-width: 700px)": "1fr",
    },
    paddingBottom: 8,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: "clamp(42px, 7vw, 96px)",
  },
  wordmarkAccent: {
    color: color.corpusMint,
  },
  wordmarkMark: {
    color: color.paperWhite,
    width: "clamp(60px, 8vw, 120px)",
  },
  wordmarkMeta: {
    color: color.paperMuted,
    fontFamily: type.mono,
    fontSize: 13,
    letterSpacing: "0.18em",
    marginTop: 18,
    textTransform: "uppercase",
  },
  wordmarkTitle: {
    color: color.paperWhite,
    display: "block",
    fontSize: "clamp(2.75rem, 8vw, 7.5rem)",
    fontWeight: 600,
    letterSpacing: type.titleLetterSpacing,
    lineHeight: type.titleLineHeight,
    textWrap: "balance",
  },
});
