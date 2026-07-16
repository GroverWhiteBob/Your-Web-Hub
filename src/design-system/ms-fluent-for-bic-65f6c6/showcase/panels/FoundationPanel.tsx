import {
  Title1,
  Title2,
  Title3,
  Subtitle1,
  Subtitle2,
  Body1,
  Body1Strong,
  Body2,
  Caption1,
  Caption2,
  LargeTitle,
  Display,
  Skeleton,
  SkeletonItem,
} from "@fluentui/react-components";
import { ExampleCard } from "../ExampleCard";
import { sp, row, col } from "../styles";

export const TypographyPanel = () => (
  <div style={col(sp.xl)}>
    <ExampleCard title="Fluent Type Ramp">
      <div style={col(sp.m)}>
        <Display>Display — Hero text</Display>
        <LargeTitle>LargeTitle — Page hero</LargeTitle>
        <Title1>Title1 — Page heading</Title1>
        <Title2>Title2 — Section heading</Title2>
        <Title3>Title3 — Card heading</Title3>
        <Subtitle1>Subtitle1 — Large subtitle</Subtitle1>
        <Subtitle2>Subtitle2 — Small subtitle</Subtitle2>
        <Body1>Body1 — Primary body text</Body1>
        <Body1Strong>Body1Strong — Emphasized body</Body1Strong>
        <Body2>Body2 — Secondary body text</Body2>
        <Caption1>Caption1 — Small label text</Caption1>
        <Caption2>Caption2 — Extra small text</Caption2>
      </div>
    </ExampleCard>
    <ExampleCard title="Custom Utility Classes">
      <div style={col(sp.m)}>
        <span className="fluent-section-header">fluent-section-header</span>
        <span className="fluent-label">fluent-label</span>
        <span className="fluent-caption">fluent-caption</span>
      </div>
    </ExampleCard>
  </div>
);

export const SpacingPanel = () => (
  <div style={col(sp.xl)}>
    <ExampleCard title="Fluent Spacing Scale">
      <div style={col(sp.m)}>
        {[
          { name: "XXS", token: "--spacingHorizontalXXS", label: "2px", w: 8 },
          { name: "XS", token: "--spacingHorizontalXS", label: "4px", w: 16 },
          { name: "SNudge", token: "--spacingHorizontalSNudge", label: "6px", w: 24 },
          { name: "S", token: "--spacingHorizontalS", label: "8px", w: 32 },
          { name: "MNudge", token: "--spacingHorizontalMNudge", label: "10px", w: 40 },
          { name: "M", token: "--spacingHorizontalM", label: "12px", w: 48 },
          { name: "L", token: "--spacingHorizontalL", label: "16px", w: 64 },
          { name: "XL", token: "--spacingHorizontalXL", label: "20px", w: 80 },
          { name: "XXL", token: "--spacingHorizontalXXL", label: "24px", w: 96 },
          { name: "XXXL", token: "--spacingHorizontalXXXL", label: "32px", w: 128 },
        ].map((item) => (
          <div key={item.name} style={{ display: "flex", alignItems: "center", gap: sp.m }}>
            <code
              style={{
                fontSize: "var(--fontSizeBase200)",
                color: "var(--colorNeutralForeground2)",
                width: 220,
                flexShrink: 0,
                fontFamily: "var(--fontFamilyMonospace)",
              }}
            >
              {item.token}
            </code>
            <div
              style={{
                backgroundColor: "var(--colorBrandBackground)",
                borderRadius: "var(--borderRadiusSmall)",
                height: 12,
                width: item.w,
                flexShrink: 0,
              }}
            />
            <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>{item.label}</Caption1>
          </div>
        ))}
      </div>
    </ExampleCard>
  </div>
);

export const SkeletonPanel = () => (
  <div style={col(sp.xl)}>
    <ExampleCard title="Skeleton Loading States">
      <Skeleton>
        <div style={col(sp.m)}>
          <SkeletonItem shape="rectangle" style={{ width: 200, height: 20 }} />
          <SkeletonItem shape="rectangle" style={{ width: "100%", height: 16 }} />
          <SkeletonItem shape="rectangle" style={{ width: "80%", height: 16 }} />
          <SkeletonItem shape="rectangle" style={{ width: "60%", height: 16 }} />
        </div>
      </Skeleton>
    </ExampleCard>
    <ExampleCard title="Card Skeleton">
      <Skeleton>
        <div style={row(sp.l)}>
          <SkeletonItem shape="circle" size={48} />
          <div style={col(sp.s, { flex: 1 })}>
            <SkeletonItem shape="rectangle" style={{ width: 160, height: 18 }} />
            <SkeletonItem shape="rectangle" style={{ width: 100, height: 14 }} />
          </div>
        </div>
      </Skeleton>
    </ExampleCard>
    <ExampleCard title="Skeleton Appearances">
      <div style={col(sp.l)}>
        <div style={col(sp.xs)}>
          <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>Opaque (default)</Caption1>
          <Skeleton appearance="opaque">
            <SkeletonItem shape="rectangle" style={{ width: "100%", height: 20 }} />
          </Skeleton>
        </div>
        <div style={col(sp.xs)}>
          <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>Translucent</Caption1>
          <Skeleton appearance="translucent">
            <SkeletonItem shape="rectangle" style={{ width: "100%", height: 20 }} />
          </Skeleton>
        </div>
      </div>
    </ExampleCard>
  </div>
);

const SwatchRow = ({ label, tokens }: { label: string; tokens: { name: string; var: string }[] }) => (
  <div style={col(sp.s)}>
    <Subtitle2>{label}</Subtitle2>
    <div style={{ display: "flex", flexWrap: "wrap", gap: sp.s }}>
      {tokens.map((t) => (
        <div key={t.name} style={col(sp.xxs, { alignItems: "center", width: 90 })}>
          <div
            style={{
              width: 56,
              height: 40,
              borderRadius: "var(--borderRadiusMedium)",
              backgroundColor: `var(${t.var})`,
              border: "1px solid var(--colorNeutralStroke2)",
            }}
          />
          <Caption1 style={{ color: "var(--colorNeutralForeground2)", textAlign: "center", fontSize: "var(--fontSizeBase100)", wordBreak: "break-all" }}>
            {t.name}
          </Caption1>
        </div>
      ))}
    </div>
  </div>
);

export const PalettePanel = () => (
  <div style={col(sp.xl)}>
    <ExampleCard title="Neutral Backgrounds">
      <SwatchRow
        label="Surfaces"
        tokens={[
          { name: "Background1", var: "--colorNeutralBackground1" },
          { name: "Background2", var: "--colorNeutralBackground2" },
          { name: "Background3", var: "--colorNeutralBackground3" },
          { name: "Background4", var: "--colorNeutralBackground4" },
          { name: "Background5", var: "--colorNeutralBackground5" },
          { name: "Background6", var: "--colorNeutralBackground6" },
        ]}
      />
      <SwatchRow
        label="Interactive States"
        tokens={[
          { name: "Bg1 Hover", var: "--colorNeutralBackground1Hover" },
          { name: "Bg1 Pressed", var: "--colorNeutralBackground1Pressed" },
          { name: "Bg1 Selected", var: "--colorNeutralBackground1Selected" },
          { name: "Bg3 Hover", var: "--colorNeutralBackground3Hover" },
          { name: "Bg3 Pressed", var: "--colorNeutralBackground3Pressed" },
        ]}
      />
    </ExampleCard>
    <ExampleCard title="Neutral Foregrounds">
      <SwatchRow
        label="Text Colors"
        tokens={[
          { name: "Foreground1", var: "--colorNeutralForeground1" },
          { name: "Foreground2", var: "--colorNeutralForeground2" },
          { name: "Foreground3", var: "--colorNeutralForeground3" },
          { name: "Foreground4", var: "--colorNeutralForeground4" },
          { name: "FgDisabled", var: "--colorNeutralForegroundDisabled" },
          { name: "FgOnBrand", var: "--colorNeutralForegroundOnBrand" },
        ]}
      />
    </ExampleCard>
    <ExampleCard title="Brand Colors">
      <SwatchRow
        label="Brand"
        tokens={[
          { name: "Brand Bg", var: "--colorBrandBackground" },
          { name: "Brand Hover", var: "--colorBrandBackgroundHover" },
          { name: "Brand Pressed", var: "--colorBrandBackgroundPressed" },
          { name: "Brand Selected", var: "--colorBrandBackgroundSelected" },
          { name: "Brand Fg1", var: "--colorBrandForeground1" },
          { name: "Brand Fg2", var: "--colorBrandForeground2" },
        ]}
      />
    </ExampleCard>
    <ExampleCard title="Status Colors">
      <SwatchRow
        label="Success"
        tokens={[
          { name: "Bg1", var: "--colorStatusSuccessBackground1" },
          { name: "Bg2", var: "--colorStatusSuccessBackground2" },
          { name: "Bg3", var: "--colorStatusSuccessBackground3" },
          { name: "Fg1", var: "--colorStatusSuccessForeground1" },
          { name: "Fg3", var: "--colorStatusSuccessForeground3" },
          { name: "Border1", var: "--colorStatusSuccessBorder1" },
        ]}
      />
      <SwatchRow
        label="Warning"
        tokens={[
          { name: "Bg1", var: "--colorStatusWarningBackground1" },
          { name: "Bg2", var: "--colorStatusWarningBackground2" },
          { name: "Bg3", var: "--colorStatusWarningBackground3" },
          { name: "Fg1", var: "--colorStatusWarningForeground1" },
          { name: "Fg3", var: "--colorStatusWarningForeground3" },
          { name: "Border1", var: "--colorStatusWarningBorder1" },
        ]}
      />
      <SwatchRow
        label="Danger"
        tokens={[
          { name: "Bg1", var: "--colorStatusDangerBackground1" },
          { name: "Bg2", var: "--colorStatusDangerBackground2" },
          { name: "Bg3", var: "--colorStatusDangerBackground3" },
          { name: "Fg1", var: "--colorStatusDangerForeground1" },
          { name: "Fg3", var: "--colorStatusDangerForeground3" },
          { name: "Border1", var: "--colorStatusDangerBorder1" },
        ]}
      />
    </ExampleCard>
    <ExampleCard title="Strokes & Borders">
      <SwatchRow
        label="Neutral Strokes"
        tokens={[
          { name: "Stroke1", var: "--colorNeutralStroke1" },
          { name: "Stroke2", var: "--colorNeutralStroke2" },
          { name: "Stroke3", var: "--colorNeutralStroke3" },
          { name: "Accessible", var: "--colorNeutralStrokeAccessible" },
          { name: "Disabled", var: "--colorNeutralStrokeDisabled" },
        ]}
      />
    </ExampleCard>
  </div>
);
