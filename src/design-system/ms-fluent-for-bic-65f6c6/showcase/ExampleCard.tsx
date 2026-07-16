import { Subtitle2 } from "@fluentui/react-components";
import { type ReactNode } from "react";
import { sp, col } from "./styles";

export const ExampleCard = ({ title, children }: { title?: string; children: ReactNode }) => (
  <div
    className="fluent-panel"
    style={{ padding: sp.xl, ...col(sp.l) }}
  >
    {title && <Subtitle2>{title}</Subtitle2>}
    {children}
  </div>
);
