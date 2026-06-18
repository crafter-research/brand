import { useEffect, useState } from "react";
import * as stylex from "@stylexjs/stylex";

type ThemeMode = "light" | "system" | "dark";

const storageKey = "cr-brand-theme";
const modes: ThemeMode[] = ["light", "system", "dark"];
const labels: Record<ThemeMode, string> = {
  dark: "Dark",
  light: "Light",
  system: "System",
};

function applyTheme(mode: ThemeMode) {
  if (mode === "system") {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.dataset.theme = mode;
  }
}

export function ThemeSwitcher() {
  const [mode, setMode] = useState<ThemeMode>("system");

  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    const nextMode = modes.includes(stored as ThemeMode) ? (stored as ThemeMode) : "system";
    setMode(nextMode);
    applyTheme(nextMode);
  }, []);

  const chooseMode = (nextMode: ThemeMode) => {
    localStorage.setItem(storageKey, nextMode);
    setMode(nextMode);
    applyTheme(nextMode);
  };

  return (
    <div {...stylex.props(styles.group)} aria-label="Theme mode" role="group">
      {modes.map((item) => {
        const active = mode === item;

        return (
          <button
            {...stylex.props(styles.button, active && styles.activeButton)}
            aria-pressed={active}
            key={item}
            onClick={() => chooseMode(item)}
            type="button"
          >
            {labels[item]}
          </button>
        );
      })}
    </div>
  );
}

const styles = stylex.create({
  activeButton: {
    backgroundColor: "var(--paper-white)",
    color: "var(--obsidian-lab)",
  },
  button: {
    backgroundColor: "transparent",
    borderWidth: 0,
    borderRadius: 999,
    color: "var(--paper-muted)",
    cursor: "pointer",
    fontFamily: "inherit",
    fontSize: {
      default: 11,
      "@media (max-width: 700px)": 10,
    },
    fontWeight: 620,
    minHeight: 32,
    minWidth: 0,
    paddingBottom: 0,
    paddingLeft: {
      default: 10,
      "@media (max-width: 700px)": 7,
    },
    paddingRight: {
      default: 10,
      "@media (max-width: 700px)": 7,
    },
    paddingTop: 0,
    ":focus-visible": {
      outlineColor: "var(--corpus-mint)",
      outlineOffset: 2,
      outlineStyle: "solid",
      outlineWidth: 2,
    },
  },
  group: {
    backgroundColor: "var(--lockup-bg)",
    borderColor: "var(--trace)",
    borderRadius: 999,
    borderStyle: "solid",
    borderWidth: 1,
    display: "inline-grid",
    gap: 2,
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    justifySelf: "end",
    minWidth: {
      default: 184,
      "@media (max-width: 700px)": 150,
    },
    paddingBottom: 3,
    paddingLeft: 3,
    paddingRight: 3,
    paddingTop: 3,
  },
});
