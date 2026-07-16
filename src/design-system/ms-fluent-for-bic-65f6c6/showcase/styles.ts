import { type ReactNode, type CSSProperties } from "react";

/* ─── Spacing shortcuts using Fluent tokens ─── */
export const sp: Record<string, string> = {
  none: "0",
  xxs: "var(--spacingHorizontalXXS)",
  xs: "var(--spacingHorizontalXS)",
  snudge: "var(--spacingHorizontalSNudge)",
  s: "var(--spacingHorizontalS)",
  mnudge: "var(--spacingHorizontalMNudge)",
  m: "var(--spacingHorizontalM)",
  l: "var(--spacingHorizontalL)",
  xl: "var(--spacingHorizontalXL)",
  xxl: "var(--spacingHorizontalXXL)",
  xxxl: "var(--spacingHorizontalXXXL)",
} as const;

/* ─── Common flex/grid style factories ─── */
export const flex = (
  direction: "row" | "column" = "row",
  gap: string = sp.m,
  extra: CSSProperties = {}
): CSSProperties => ({
  display: "flex",
  flexDirection: direction,
  gap,
  ...extra,
});

export const row = (gap = sp.m, extra: CSSProperties = {}): CSSProperties =>
  flex("row", gap, { alignItems: "center", flexWrap: "wrap" as const, ...extra });

export const col = (gap = sp.m, extra: CSSProperties = {}): CSSProperties =>
  flex("column", gap, extra);
