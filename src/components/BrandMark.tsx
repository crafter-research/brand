import { CRAFTER_MARK_PATH, CRAFTER_MARK_VIEWBOX } from "../lib/brand";

type BrandMarkProps = {
  label?: string;
  outline?: boolean;
  size?: number | string;
};

export function BrandMark({ label, outline = false, size = "1em" }: BrandMarkProps) {
  return (
    <svg
      aria-hidden={label ? undefined : true}
      aria-label={label}
      style={{ height: size, width: size }}
      viewBox={CRAFTER_MARK_VIEWBOX}
    >
      <path
        d={CRAFTER_MARK_PATH}
        fill={outline ? "none" : "currentColor"}
        stroke={outline ? "currentColor" : undefined}
        strokeLinejoin={outline ? "round" : undefined}
        strokeWidth={outline ? 4 : undefined}
      />
    </svg>
  );
}
