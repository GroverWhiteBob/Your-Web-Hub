import {
  Card,
  CardHeader,
  CardFooter,
  CardPreview,
  Button,
  Body1,
  Body2,
  Caption1,
  Body1Strong,
  Subtitle2,
  Text,
} from "@fluentui/react-components";
import {
  MoreHorizontal20Regular,
  Share20Regular,
  Heart20Regular,
  Open20Regular,
  ArrowReply20Regular,
} from "@fluentui/react-icons";
import { ExampleCard } from "../ExampleCard";
import { sp, row, col } from "../styles";

export const CardPanel = () => (
  <div style={col(sp.xl)}>
    <ExampleCard title="Basic Card">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: sp.l }}>
        <Card>
          <CardHeader
            header={<Body1Strong>Card Title</Body1Strong>}
            description={<Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>Subtitle</Caption1>}
            action={<Button appearance="transparent" icon={<MoreHorizontal20Regular />} aria-label="More" />}
          />
          <Body1>
            This is a basic Fluent UI Card component with a header, body content, and footer actions.
          </Body1>
          <CardFooter>
            <Button appearance="primary" icon={<Open20Regular />}>Open</Button>
            <Button icon={<Share20Regular />}>Share</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader
            header={<Body1Strong>Interactive Card</Body1Strong>}
            description={<Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>Click to interact</Caption1>}
          />
          <Body1>
            Cards can contain any content including text, images, actions, and other Fluent components.
          </Body1>
          <CardFooter>
            <Button icon={<Heart20Regular />}>Like</Button>
            <Button icon={<ArrowReply20Regular />}>Reply</Button>
          </CardFooter>
        </Card>

        <Card appearance="subtle">
          <CardHeader
            header={<Body1Strong>Subtle Card</Body1Strong>}
            description={<Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>appearance="subtle"</Caption1>}
          />
          <Body1>
            A subtle card blends into the background surface with minimal visual weight.
          </Body1>
        </Card>
      </div>
    </ExampleCard>
    <ExampleCard title="Card Appearances">
      <div style={row(sp.l)}>
        {(["filled", "filled-alternative", "outline", "subtle"] as const).map((appearance) => (
          <Card key={appearance} appearance={appearance} style={{ width: 200 }}>
            <CardHeader header={<Body1Strong>{appearance}</Body1Strong>} />
            <Caption1>appearance="{appearance}"</Caption1>
          </Card>
        ))}
      </div>
    </ExampleCard>
    <ExampleCard title="Card Sizes">
      <div style={col(sp.l)}>
        {(["small", "medium", "large"] as const).map((size) => (
          <Card key={size} size={size}>
            <CardHeader
              header={<Body1Strong>Size: {size}</Body1Strong>}
              description={<Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>size="{size}"</Caption1>}
            />
            <Body2>This card uses the {size} size variant for different padding.</Body2>
          </Card>
        ))}
      </div>
    </ExampleCard>
    <ExampleCard title="Selectable Card">
      <div style={row(sp.l)}>
        <Card floatingAction={<input type="checkbox" />} style={{ width: 240 }}>
          <CardHeader header={<Body1Strong>Selectable</Body1Strong>} />
          <Caption1>Click the checkbox to select</Caption1>
        </Card>
      </div>
    </ExampleCard>
  </div>
);

export const TablePanel = () => (
  <div style={col(sp.xl)}>
    <ExampleCard title="Data Table">
      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "var(--fontSizeBase300)",
            lineHeight: "var(--lineHeightBase300)",
          }}
        >
          <thead>
            <tr style={{ borderBottom: "2px solid var(--colorNeutralStroke1)" }}>
              {["Name", "Role", "Status", "Last Active"].map((h) => (
                <th
                  key={h}
                  style={{
                    textAlign: "left",
                    padding: `${sp.s} ${sp.m}`,
                    fontWeight: "var(--fontWeightSemibold)" as any,
                    color: "var(--colorNeutralForeground1)",
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              { name: "Jane Doe", role: "Admin", status: "Active", date: "2 hours ago" },
              { name: "John Smith", role: "Editor", status: "Active", date: "5 hours ago" },
              { name: "Alice Wong", role: "Viewer", status: "Inactive", date: "3 days ago" },
              { name: "Bob Chen", role: "Editor", status: "Active", date: "1 hour ago" },
              { name: "Carol Li", role: "Admin", status: "Away", date: "12 hours ago" },
            ].map((row, i) => (
              <tr
                key={i}
                style={{
                  borderBottom: "1px solid var(--colorNeutralStroke2)",
                  transition: "background-color var(--durationFast) var(--curveEasyEase)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--colorNeutralBackground1Hover)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
              >
                <td style={{ padding: `${sp.s} ${sp.m}` }}>
                  <Body1Strong>{row.name}</Body1Strong>
                </td>
                <td style={{ padding: `${sp.s} ${sp.m}` }}>
                  <Text>{row.role}</Text>
                </td>
                <td style={{ padding: `${sp.s} ${sp.m}` }}>
                  <span
                    className={`fluent-badge-${row.status === "Active" ? "success" : row.status === "Away" ? "warning" : "info"}`}
                    style={{ padding: `${sp.xxs} ${sp.s}` }}
                  >
                    {row.status}
                  </span>
                </td>
                <td style={{ padding: `${sp.s} ${sp.m}`, color: "var(--colorNeutralForeground3)" }}>
                  <Caption1>{row.date}</Caption1>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ExampleCard>
  </div>
);
