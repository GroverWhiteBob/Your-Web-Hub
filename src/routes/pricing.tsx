import { createFileRoute, Link } from "@tanstack/react-router";
import * as fluentNs from "@fluentui/react-components";
const fluent: typeof fluentNs =
  (fluentNs as unknown as { default?: typeof fluentNs }).default ?? fluentNs;
const { Button, Title1, Title3, Body1, Body1Strong, Caption1 } = fluent;
import { CheckmarkCircle20Filled } from "@fluentui/react-icons";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Packages — Ubu" },
      {
        name: "description",
        content:
          "Ubu packages for families with children and young adults. Flexible monthly subscriptions built around your life.",
      },
      { property: "og:title", content: "Packages — Ubu" },
      {
        property: "og:description",
        content:
          "Ubu packages for families with children and young adults. Flexible monthly subscriptions built around your life.",
      },
    ],
  }),
  component: Pricing,
});

const border = "1px solid var(--colorNeutralStroke2)";
const radius = "var(--borderRadiusLarge)";

type Plan = {
  name: string;
  audience: string;
  price: string;
  cadence: string;
  tagline: string;
  offer: string[];
  outcomes: string[];
  cta: string;
  highlight?: boolean;
};

const plans: Plan[] = [
  {
    name: "Family Support",
    audience: "Single parents & families with children",
    price: "$100 – $200",
    cadence: "/ month",
    tagline: "A flexible monthly subscription for busy family life.",
    offer: [
      "Free in-person consultation",
      "Weekly support package",
      "Family calendar management",
      "Appointment scheduling",
      "School event reminders",
      "Travel & activity planning",
      "Research for childcare, camps, or services",
      "Bill and deadline reminders",
      "Grocery & order coordination",
      "Gift and holiday planning",
      "Household to-do list support",
      "Back-to-school package",
      "Holiday planning package",
    ],
    outcomes: [
      "Family schedule feels organized",
      "No missed appointments, deadlines, or school events",
      "Save time on repetitive planning tasks",
      "More quality time with your children",
      "Feel supported without hiring full-time help",
    ],
    cta: "Start Family Support",
    highlight: true,
  },
  {
    name: "Young Adult Essentials",
    audience: "Young adults getting life in order",
    price: "$50 – $100",
    cadence: "/ month",
    tagline: "Delegate the small stuff and stay on top of adulting.",
    offer: [
      "Free 30-minute delegation audit",
      "Calendar management",
      "Appointment booking",
      "Travel planning",
      "Reminder management",
      "Personal research",
    ],
    outcomes: [
      "Save time and money",
      "Feel more in control",
      "Stop asking parents for help as much",
    ],
    cta: "Start Essentials",
  },
];

const addOns = [
  "Gift sourcing",
  "Event coordination",
  "Inbox support",
  "Routine life admin",
];

function Pricing() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--colorNeutralBackground1)" }}>
      <SiteHeader />

      <section
        style={{
          padding: "var(--spacingHorizontalXXXL) var(--spacingHorizontalXL)",
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        <div style={{ textAlign: "center", display: "flex", flexDirection: "column", gap: "var(--spacingHorizontalS)" }}>
          <Title1>Packages built around your life</Title1>
          <Body1 style={{ color: "var(--colorNeutralForeground2)" }}>
            Flexible monthly subscriptions — pick the one that fits where you are right now.
          </Body1>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "var(--spacingHorizontalL)",
            marginTop: "var(--spacingHorizontalXXL)",
          }}
        >
          {plans.map((p) => (
            <div
              key={p.name}
              style={{
                background: p.highlight
                  ? "var(--colorBrandBackground2)"
                  : "var(--colorNeutralBackground1)",
                border: p.highlight
                  ? "2px solid var(--colorBrandBackground)"
                  : border,
                borderRadius: radius,
                padding: "var(--spacingHorizontalXL)",
                display: "flex",
                flexDirection: "column",
                gap: "var(--spacingHorizontalM)",
                boxShadow: p.highlight ? "var(--shadow16)" : "var(--shadow4)",
                position: "relative",
              }}
            >
              {p.highlight && (
                <div
                  style={{
                    position: "absolute",
                    top: -12,
                    right: 16,
                    background: "var(--colorBrandBackground)",
                    color: "var(--colorNeutralForegroundOnBrand)",
                    padding: "4px 10px",
                    borderRadius: "var(--borderRadiusMedium)",
                    fontSize: "var(--fontSizeBase200)",
                    fontWeight: 600,
                  }}
                >
                  Most popular
                </div>
              )}
              <div>
                <Title3>{p.name}</Title3>
                <Caption1 style={{ color: "var(--colorNeutralForeground2)" }}>{p.audience}</Caption1>
              </div>
              <Body1 style={{ color: "var(--colorNeutralForeground2)" }}>{p.tagline}</Body1>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                <span
                  style={{
                    fontSize: "var(--fontSizeHero800, 40px)",
                    fontWeight: 700,
                    color: "var(--colorNeutralForeground1)",
                    lineHeight: 1,
                  }}
                >
                  {p.price}
                </span>
                <Caption1 style={{ color: "var(--colorNeutralForeground2)" }}>{p.cadence}</Caption1>
              </div>

              <Body1Strong style={{ marginTop: "var(--spacingHorizontalS)" }}>What's included</Body1Strong>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "var(--spacingHorizontalS)" }}>
                {p.offer.map((f) => (
                  <li key={f} style={{ display: "flex", gap: "var(--spacingHorizontalS)", alignItems: "flex-start" }}>
                    <CheckmarkCircle20Filled style={{ color: "var(--colorBrandForeground1)", flexShrink: 0 }} />
                    <Body1>{f}</Body1>
                  </li>
                ))}
              </ul>

              <Body1Strong style={{ marginTop: "var(--spacingHorizontalS)" }}>What you'll feel</Body1Strong>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "var(--spacingHorizontalXS)" }}>
                {p.outcomes.map((o) => (
                  <li key={o} style={{ display: "flex", gap: "var(--spacingHorizontalS)", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--colorBrandForeground1)", fontWeight: 700 }}>·</span>
                    <Caption1 style={{ color: "var(--colorNeutralForeground2)" }}>{o}</Caption1>
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: "auto", paddingTop: "var(--spacingHorizontalM)" }}>
                <Link to="/login">
                  <Button appearance={p.highlight ? "primary" : "outline"} style={{ width: "100%" }}>
                    {p.cta}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "var(--spacingHorizontalXXL)",
            padding: "var(--spacingHorizontalXL)",
            border,
            borderRadius: radius,
            background: "var(--colorNeutralBackground2)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--spacingHorizontalS)",
          }}
        >
          <Title3>Add-ons & community partnerships</Title3>
          <Caption1 style={{ color: "var(--colorNeutralForeground2)" }}>
            Available à la carte on any package, and delivered through our local community partnerships.
          </Caption1>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--spacingHorizontalS)", marginTop: "var(--spacingHorizontalXS)" }}>
            {addOns.map((a) => (
              <span
                key={a}
                style={{
                  padding: "6px 12px",
                  borderRadius: 999,
                  background: "var(--colorBrandBackground2)",
                  color: "var(--colorBrandForeground2)",
                  fontSize: "var(--fontSizeBase200)",
                  fontWeight: 600,
                }}
              >
                {a}
              </span>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "var(--spacingHorizontalXXXL)", textAlign: "center" }}>
          <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>
            All packages are flexible monthly subscriptions. Cancel or change plans anytime.
          </Caption1>
        </div>
      </section>

      <footer
        style={{
          background: "var(--colorNeutralBackground3)",
          borderTop: border,
          padding: "var(--spacingHorizontalL) var(--spacingHorizontalXL)",
          textAlign: "center",
        }}
      >
        <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>
          © {new Date().getFullYear()} Ubu · <Link to="/">Home</Link> · <Link to="/login">Sign in</Link>
        </Caption1>
      </footer>
    </div>
  );
}
