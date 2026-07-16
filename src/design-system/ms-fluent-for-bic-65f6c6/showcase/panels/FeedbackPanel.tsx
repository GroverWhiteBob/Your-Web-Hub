import {
  Spinner,
  ProgressBar,
  Body1,
  Caption1,
  Body1Strong,
  MessageBar,
  MessageBarBody,
  MessageBarTitle,
  MessageBarActions,
  Button,
  Link,
  Toaster,
  useToastController,
  Toast,
  ToastTitle,
  ToastBody,
  ToastFooter,
  useId,
} from "@fluentui/react-components";
import {
  CheckmarkCircle20Regular,
  Warning20Regular,
  ErrorCircle20Regular,
} from "@fluentui/react-icons";
import { ExampleCard } from "../ExampleCard";
import { sp, row, col } from "../styles";

export const StatusPanel = () => (
  <div style={col(sp.xl)}>
    <ExampleCard title="MessageBar">
      <div style={col(sp.m)}>
        <MessageBar intent="success">
          <MessageBarBody>
            <MessageBarTitle>Success</MessageBarTitle>
            Your changes have been saved successfully.
          </MessageBarBody>
          <MessageBarActions>
            <Button appearance="transparent" size="small">Undo</Button>
          </MessageBarActions>
        </MessageBar>
        <MessageBar intent="warning">
          <MessageBarBody>
            <MessageBarTitle>Warning</MessageBarTitle>
            Your session will expire in 5 minutes.
          </MessageBarBody>
          <MessageBarActions>
            <Button appearance="transparent" size="small">Extend</Button>
          </MessageBarActions>
        </MessageBar>
        <MessageBar intent="error">
          <MessageBarBody>
            <MessageBarTitle>Error</MessageBarTitle>
            Failed to save your changes. Please try again.
          </MessageBarBody>
          <MessageBarActions>
            <Button appearance="transparent" size="small">Retry</Button>
          </MessageBarActions>
        </MessageBar>
        <MessageBar intent="info">
          <MessageBarBody>
            <MessageBarTitle>Information</MessageBarTitle>
            A new version is available. <Link inline href="#">Learn more</Link>
          </MessageBarBody>
        </MessageBar>
      </div>
    </ExampleCard>
    <ExampleCard title="Custom Banners (CSS)">
      <div style={col(sp.m)}>
        <div className="fluent-banner-success" style={{ padding: `${sp.m} ${sp.l}`, display: "flex", alignItems: "center", gap: sp.m }}>
          <CheckmarkCircle20Regular />
          <Body1>Operation completed successfully.</Body1>
        </div>
        <div className="fluent-banner-warning" style={{ padding: `${sp.m} ${sp.l}`, display: "flex", alignItems: "center", gap: sp.m }}>
          <Warning20Regular />
          <Body1>Please review your settings.</Body1>
        </div>
        <div className="fluent-banner-danger" style={{ padding: `${sp.m} ${sp.l}`, display: "flex", alignItems: "center", gap: sp.m }}>
          <ErrorCircle20Regular />
          <Body1>Something went wrong.</Body1>
        </div>
      </div>
    </ExampleCard>
  </div>
);

export const ToastPanel = () => {
  const toasterId = useId("toaster");
  const { dispatchToast } = useToastController(toasterId);

  const showToast = (intent: "success" | "warning" | "error" | "info") => {
    dispatchToast(
      <Toast>
        <ToastTitle>{intent.charAt(0).toUpperCase() + intent.slice(1)}</ToastTitle>
        <ToastBody>This is a {intent} toast notification.</ToastBody>
        <ToastFooter>
          <Link>Action</Link>
        </ToastFooter>
      </Toast>,
      { intent, position: "bottom-end" }
    );
  };

  return (
    <div style={col(sp.xl)}>
      <Toaster toasterId={toasterId} />
      <ExampleCard title="Toast Notifications">
        <div style={row(sp.m)}>
          <Button appearance="primary" onClick={() => showToast("success")}>Success Toast</Button>
          <Button onClick={() => showToast("warning")}>Warning Toast</Button>
          <Button onClick={() => showToast("error")}>Error Toast</Button>
          <Button onClick={() => showToast("info")}>Info Toast</Button>
        </div>
      </ExampleCard>
    </div>
  );
};

export const LoadingPanel = () => (
  <div style={col(sp.xl)}>
    <ExampleCard title="Spinners">
      <div style={row(sp.xxl)}>
        {(["tiny", "small", "medium", "large", "extra-large", "huge"] as const).map((size) => (
          <div key={size} style={col(sp.s, { alignItems: "center" })}>
            <Spinner size={size} />
            <Caption1 style={{ color: "var(--colorNeutralForeground3)", textTransform: "capitalize" }}>{size}</Caption1>
          </div>
        ))}
      </div>
    </ExampleCard>
    <ExampleCard title="Spinner with Label">
      <div style={row(sp.xl)}>
        <Spinner size="medium" label="Loading..." />
        <Spinner size="medium" label="Loading..." labelPosition="below" />
      </div>
    </ExampleCard>
    <ExampleCard title="Progress Bar">
      <div style={col(sp.m, { maxWidth: 400 })}>
        <div style={col(sp.xs)}>
          <span className="fluent-label">Default: 65%</span>
          <ProgressBar value={0.65} />
        </div>
        <div style={col(sp.xs)}>
          <span className="fluent-label">Brand: 40%</span>
          <ProgressBar value={0.4} color="brand" />
        </div>
        <div style={col(sp.xs)}>
          <span className="fluent-label">Success: 100%</span>
          <ProgressBar value={1} color="success" />
        </div>
        <div style={col(sp.xs)}>
          <span className="fluent-label">Warning: 80%</span>
          <ProgressBar value={0.8} color="warning" />
        </div>
        <div style={col(sp.xs)}>
          <span className="fluent-label">Error: 20%</span>
          <ProgressBar value={0.2} color="error" />
        </div>
      </div>
    </ExampleCard>
    <ExampleCard title="Indeterminate Progress">
      <div style={col(sp.s, { maxWidth: 400 })}>
        <span className="fluent-label">Loading...</span>
        <ProgressBar />
      </div>
    </ExampleCard>
  </div>
);

export const SurfacesPanel = () => (
  <div style={col(sp.xl)}>
    <ExampleCard title="Surface Classes">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: sp.l }}>
        {[
          { cls: "fluent-panel", name: "fluent-panel", desc: "Card with border + shadow" },
          { cls: "fluent-surface-subtle", name: "fluent-surface-subtle", desc: "Secondary surface" },
          { cls: "fluent-surface-deep", name: "fluent-surface-deep", desc: "Tertiary surface" },
          { cls: "fluent-interactive", name: "fluent-interactive", desc: "Hover for state change" },
          { cls: "fluent-interactive-subtle", name: "fluent-interactive-subtle", desc: "Transparent, hover fills" },
          { cls: "fluent-brand", name: "fluent-brand", desc: "Brand colored surface" },
        ].map((item) => (
          <div key={item.name} className={item.cls} style={{ padding: sp.xl, ...col(sp.xs) }}>
            <Body1Strong>{item.name}</Body1Strong>
            <Caption1 style={{ color: "var(--colorNeutralForeground2)" }}>{item.desc}</Caption1>
          </div>
        ))}
      </div>
    </ExampleCard>
  </div>
);
