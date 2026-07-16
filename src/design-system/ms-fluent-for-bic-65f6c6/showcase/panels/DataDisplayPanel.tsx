import {
  Badge,
  CounterBadge,
  PresenceBadge,
  Avatar,
  AvatarGroup,
  AvatarGroupItem,
  AvatarGroupPopover,
  Tag,
  TagGroup,
  InteractionTag,
  InteractionTagPrimary,
  InteractionTagSecondary,
  Persona,
  Divider,
  Caption1,
  Body1,
  Body1Strong,
} from "@fluentui/react-components";
import { useState } from "react";
import { ExampleCard } from "../ExampleCard";
import { sp, row, col } from "../styles";

export const BadgesPanel = () => (
  <div style={col(sp.xl)}>
    <ExampleCard title="Filled Badges">
      <div style={row(sp.m)}>
        <Badge appearance="filled" color="brand">Brand</Badge>
        <Badge appearance="filled" color="success">Success</Badge>
        <Badge appearance="filled" color="warning">Warning</Badge>
        <Badge appearance="filled" color="danger">Danger</Badge>
        <Badge appearance="filled" color="informative">Info</Badge>
        <Badge appearance="filled" color="important">Important</Badge>
        <Badge appearance="filled" color="severe">Severe</Badge>
        <Badge appearance="filled" color="subtle">Subtle</Badge>
      </div>
    </ExampleCard>
    <ExampleCard title="Badge Appearances">
      <div style={row(sp.m)}>
        <Badge appearance="filled" color="brand">Filled</Badge>
        <Badge appearance="ghost" color="brand">Ghost</Badge>
        <Badge appearance="outline" color="brand">Outline</Badge>
        <Badge appearance="tint" color="brand">Tint</Badge>
      </div>
    </ExampleCard>
    <ExampleCard title="Badge Shapes & Sizes">
      <div style={row(sp.m)}>
        <Badge shape="rounded" size="small">Small Rounded</Badge>
        <Badge shape="rounded" size="medium">Medium Rounded</Badge>
        <Badge shape="rounded" size="large">Large Rounded</Badge>
        <Badge shape="circular" size="small">S</Badge>
        <Badge shape="square">Square</Badge>
      </div>
    </ExampleCard>
    <ExampleCard title="Counter Badges">
      <div style={row(sp.m)}>
        <CounterBadge count={5} />
        <CounterBadge count={42} color="brand" />
        <CounterBadge count={99} color="danger" />
        <CounterBadge count={150} overflowCount={99} />
        <CounterBadge dot />
      </div>
    </ExampleCard>
    <ExampleCard title="Presence Badges">
      <div style={row(sp.l)}>
        {(["available", "busy", "do-not-disturb", "away", "offline", "out-of-office", "unknown"] as const).map((s) => (
          <div key={s} style={col(sp.xs, { alignItems: "center" })}>
            <PresenceBadge status={s} size="large" />
            <Caption1 style={{ color: "var(--colorNeutralForeground3)", fontSize: "var(--fontSizeBase100)" }}>{s}</Caption1>
          </div>
        ))}
      </div>
    </ExampleCard>
    <ExampleCard title="Custom Status Badges (CSS)">
      <div style={row(sp.m)}>
        <span className="fluent-badge-success" style={{ padding: `${sp.xs} ${sp.s}` }}>Active</span>
        <span className="fluent-badge-warning" style={{ padding: `${sp.xs} ${sp.s}` }}>Pending</span>
        <span className="fluent-badge-danger" style={{ padding: `${sp.xs} ${sp.s}` }}>Failed</span>
        <span className="fluent-badge-info" style={{ padding: `${sp.xs} ${sp.s}` }}>Draft</span>
      </div>
    </ExampleCard>
  </div>
);

export const TagsPanel = () => {
  const [tags, setTags] = useState(["Design", "Development", "Testing"]);

  return (
    <div style={col(sp.xl)}>
      <ExampleCard title="Tag Appearances">
        <div style={row(sp.m)}>
          <Tag appearance="filled">Filled</Tag>
          <Tag appearance="outline">Outline</Tag>
          <Tag appearance="brand">Brand</Tag>
        </div>
      </ExampleCard>
      <ExampleCard title="Tag Sizes">
        <div style={row(sp.m)}>
          <Tag size="extra-small">Extra Small</Tag>
          <Tag size="small">Small</Tag>
          <Tag size="medium">Medium</Tag>
        </div>
      </ExampleCard>
      <ExampleCard title="Tag Shapes">
        <div style={row(sp.m)}>
          <Tag shape="rounded">Rounded</Tag>
          <Tag shape="circular">Circular</Tag>
        </div>
      </ExampleCard>
      <ExampleCard title="With Avatar">
        <div style={row(sp.m)}>
          <Tag media={<Avatar name="Jane Doe" size={20} />}>Jane Doe</Tag>
          <Tag media={<Avatar name="John Smith" size={20} />} appearance="brand">John Smith</Tag>
        </div>
      </ExampleCard>
      <ExampleCard title="Dismissible Tags">
        <TagGroup onDismiss={(_, d) => setTags(tags.filter((t) => t !== d.value))}>
          {tags.map((tag) => (
            <InteractionTag key={tag} value={tag}>
              <InteractionTagPrimary>{tag}</InteractionTagPrimary>
              <InteractionTagSecondary aria-label={`Remove ${tag}`} />
            </InteractionTag>
          ))}
        </TagGroup>
      </ExampleCard>
    </div>
  );
};

export const AvatarsPanel = () => (
  <div style={col(sp.xl)}>
    <ExampleCard title="Sizes">
      <div style={row(sp.l, { alignItems: "flex-end" })}>
        {[
          { name: "Jane Doe", size: 24 as const },
          { name: "John Smith", size: 32 as const },
          { name: "Alice Wong", size: 40 as const },
          { name: "Bob Chen", size: 48 as const },
          { name: "Carol Li", size: 56 as const },
          { name: "Dan Park", size: 64 as const },
          { name: "Eva Hu", size: 72 as const },
        ].map((a) => (
          <div key={a.size} style={col(sp.s, { alignItems: "center" })}>
            <Avatar name={a.name} size={a.size} />
            <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>{a.size}px</Caption1>
          </div>
        ))}
      </div>
    </ExampleCard>
    <ExampleCard title="Shapes & Colors">
      <div style={row(sp.m)}>
        <Avatar name="Square" shape="square" size={48} />
        <Avatar name="Circular" shape="circular" size={48} />
        <Avatar name="Brand" color="brand" size={48} />
        <Avatar name="Dark Red" color="dark-red" size={48} />
        <Avatar name="Cranberry" color="cranberry" size={48} />
        <Avatar name="Pumpkin" color="pumpkin" size={48} />
        <Avatar name="Forest" color="forest" size={48} />
        <Avatar name="Navy" color="navy" size={48} />
      </div>
    </ExampleCard>
    <ExampleCard title="Avatar Group">
      <AvatarGroup size={36}>
        <AvatarGroupItem name="Jane Doe" />
        <AvatarGroupItem name="John Smith" />
        <AvatarGroupItem name="Alice Wong" />
        <AvatarGroupItem name="Bob Chen" />
        <AvatarGroupPopover>
          <AvatarGroupItem name="Carol Li" />
          <AvatarGroupItem name="Dan Park" />
        </AvatarGroupPopover>
      </AvatarGroup>
    </ExampleCard>
    <ExampleCard title="Persona">
      <div style={col(sp.l)}>
        <Persona name="Jane Doe" secondaryText="Software Engineer" presence={{ status: "available" }} size="large" />
        <Persona name="John Smith" secondaryText="Product Manager" presence={{ status: "busy" }} size="large" />
        <Persona name="Alice Wong" secondaryText="Away until Monday" presence={{ status: "away" }} size="large" />
        <Persona name="Bob Chen" secondaryText="Do not disturb" presence={{ status: "do-not-disturb" }} size="large" />
      </div>
    </ExampleCard>
  </div>
);

export const DividerPanel = () => (
  <div style={col(sp.xl)}>
    <ExampleCard title="Horizontal Dividers">
      <div style={col(sp.l)}>
        <Body1>Content above</Body1>
        <Divider />
        <Body1>Default divider</Body1>
        <Divider appearance="brand" />
        <Body1>Brand divider</Body1>
        <Divider appearance="strong" />
        <Body1>Strong divider</Body1>
        <Divider appearance="subtle" />
        <Body1>Subtle divider</Body1>
      </div>
    </ExampleCard>
    <ExampleCard title="With Content">
      <div style={col(sp.l)}>
        <Divider>Section 1</Divider>
        <Body1>Content in section 1</Body1>
        <Divider>Section 2</Divider>
        <Body1>Content in section 2</Body1>
        <Divider appearance="brand">Brand Section</Divider>
      </div>
    </ExampleCard>
    <ExampleCard title="Vertical Dividers">
      <div style={row(sp.l, { height: 48 })}>
        <Body1>Left</Body1>
        <Divider vertical />
        <Body1>Center</Body1>
        <Divider vertical appearance="brand" />
        <Body1>Right</Body1>
      </div>
    </ExampleCard>
    <ExampleCard title="Alignment">
      <div style={col(sp.l)}>
        <Divider alignContent="start">Start</Divider>
        <Divider alignContent="center">Center</Divider>
        <Divider alignContent="end">End</Divider>
      </div>
    </ExampleCard>
  </div>
);
