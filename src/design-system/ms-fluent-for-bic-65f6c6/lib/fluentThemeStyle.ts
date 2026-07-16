import type { CSSProperties } from "react";
import type { Theme } from "@fluentui/react-components";

export const themeToStyleVars = (theme: Theme): CSSProperties => {
  return Object.fromEntries(
    Object.entries(theme).map(([token, value]) => [`--${token}`, value]),
  ) as CSSProperties;
};
