import { createFileRoute, Link } from "@tanstack/react-router";
import * as fluentNs from "@fluentui/react-components";
const fluent: typeof fluentNs =
  (fluentNs as unknown as { default?: typeof fluentNs }).default ?? fluentNs;
const {
  Button,
  Display,
  Title1,
  Title2,
  Title3,
  Subtitle2,
  Body1,
  Body1Strong,
  Caption1,
} = fluent;
import {
  CheckmarkCircle24Filled,
  Sparkle24Regular,
  Heart24Regular,
  Clock24Regular,
  Shield24Regular,
  Mail24Regular,
  Call24Regular,
} from "@fluentui/react-icons";
import { SiteHeader } from "@/components/SiteHeader";
import heroFamily from "@/assets/hero-family.jpg";
import youngAdult from "@/assets/young-adult.jpg";
import planning from "@/assets/planning.jpg";
import helper from "@/assets/helper.jpg";

export const Route = createFileRoute("/")({
  component: Landing,
});

const brandBg = "var(--colorNeutralBackground1)";
const softBg = "var(--colorNeutralBackground2)";
const deepBg = "var(--colorNeutralBackground3)";
const border = "1px solid var(--colorNeutralStroke2)";
const radius = "var(--borderRadiusLarge)";

// Readable body text: more line height, comfy max width
const readable: React.CSSProperties = {
  color: "var(--colorNeutralForeground2)",
  lineHeight: 1.7,
  fontSize: "var(--fontSizeBase400)",
  maxWidth: 68 + "ch",
};

function Section({
  id,
  children,
  bg,
}: {
  id?: string;
  children: React.ReactNode;
  bg?: string;
}) {
  return (
    <section
      id={id}
      style={{
        background: bg ?? "transparent",
        padding: "var(--spacingHorizontalXXXL) var(--spacingHorizontalXL)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>{children}</div>
    </section>
  );
}

const roundedImg: React.CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: radius,
  border,
  display: "block",
};

function Landing() {
  return (
    <div style={{ minHeight: "100vh", background: brandBg }}>
      <SiteHeader />

      {/* Hero */}
      <section
        style={{
          background:
            "linear-gradient(160deg, var(--colorBrandBackground2) 0%, var(--colorNeutralBackground1) 60%)",
          padding: "var(--spacingHorizontalXXXL) var(--spacingHorizontalXL)",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 1fr)",
            gap: "var(--spacingHorizontalXXL)",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacingHorizontalL)" }}>
            <Display>Less juggling, more living.</Display>
            <Body1 style={readable}>
              Ubu blends smart scheduling with vetted humans to handle the
              everyday errands that fill your calendar — rides, sitters, home
              visits, and appointment booking — so you can focus on what
              matters.
            </Body1>
            <div style={{ display: "flex", gap: "var(--spacingHorizontalM)", marginTop: "var(--spacingHorizontalS)", flexWrap: "wrap" }}>
              <Link to="/login">
                <Button appearance="primary" size="large">Get started</Button>
              </Link>
              <a href="#how-to-start">
                <Button appearance="outline" size="large">See how Ubu works</Button>
              </a>
            </div>
          </div>
          <div style={{ aspectRatio: "5 / 4" }}>
            <img
              src={heroFamily}
              alt="A parent smiling at their phone while their two children play nearby in a bright kitchen"
              width={1280}
              height={896}
              style={roundedImg}
            />
          </div>
        </div>
      </section>

      {/* What we do */}
      <Section id="what-we-do" bg={softBg}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
            gap: "var(--spacingHorizontalXXL)",
            alignItems: "center",
          }}
          className="two-col"
        >
          <div style={{ aspectRatio: "4 / 3" }}>
            <img
              src={planning}
              alt="Overhead view of a family calendar, planner, phone, and coffee mug on a wooden table"
              width={1024}
              height={768}
              loading="lazy"
              style={roundedImg}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacingHorizontalM)" }}>
            <Title1>What we do</Title1>
            <Body1 style={readable}>
              Ubu is your behind-the-scenes life partner — blending AI smarts
              with a real human touch to take the everyday planning,
              remembering, and coordinating off your plate.
            </Body1>
            <Body1Strong style={{ marginTop: "var(--spacingHorizontalS)" }}>
              For busy families and single parents
            </Body1Strong>
            <Body1 style={readable}>
              We manage the family calendar, book appointments, keep school
              events on your radar, plan travel, research childcare and camps,
              coordinate groceries, and help with gifts and holidays — so your
              household runs smoothly.
            </Body1>
            <Body1Strong style={{ marginTop: "var(--spacingHorizontalS)" }}>
              For young adults finding their footing
            </Body1Strong>
            <Body1 style={readable}>
              Calendar management, appointment booking, travel planning,
              reminders, and personal research — the small "adulting" stuff
              that eats your week.
            </Body1>
            <Body1Strong style={{ marginTop: "var(--spacingHorizontalS)" }}>
              Add-ons, when you need them
            </Body1Strong>
            <Body1 style={readable}>
              À la carte help and local partnerships for gift sourcing, event
              coordination, inbox support, and routine life admin.
            </Body1>
            <Body1Strong style={{ marginTop: "var(--spacingHorizontalM)" }}>
              One flexible monthly subscription. No full-time hire. Just
              support, when life gets busy.
            </Body1Strong>
            <div style={{ marginTop: "var(--spacingHorizontalM)" }}>
              <Link to="/pricing">
                <Button appearance="primary">See our packages</Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>


      {/* Why hybrid is better */}
      <Section id="why-hybrid" bg={softBg}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
            gap: "var(--spacingHorizontalXXL)",
            alignItems: "center",
            marginBottom: "var(--spacingHorizontalXL)",
          }}
          className="two-col"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacingHorizontalM)" }}>
            <Title1>Why hybrid is better</Title1>
            <Body1 style={readable}>
              Pure apps are impersonal. Pure concierges don't scale. Ubu
              combines both — software for speed and transparency, humans for
              judgment and care.
            </Body1>
          </div>
          <div style={{ aspectRatio: "4 / 3" }}>
            <img
              src={helper}
              alt="A friendly helper handing over grocery bags to a smiling parent at the front door"
              width={1024}
              height={768}
              loading="lazy"
              style={roundedImg}
            />
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "var(--spacingHorizontalL)",
          }}
        >
          {[
            { icon: <Sparkle24Regular />, title: "Smart scheduling", body: "Book in seconds. Track everything in one dashboard." },
            { icon: <Heart24Regular />, title: "Real humans", body: "Vetted providers who show up and treat your family with care." },
            { icon: <Shield24Regular />, title: "Accountable", body: "Background checks, ratings, and a single point of contact when things change." },
            { icon: <Clock24Regular />, title: "Flexible", body: "One-off requests or recurring plans — no lock-in, no bloated packages." },
          ].map((s) => (
            <FeatureCard key={s.title} icon={s.icon} title={s.title} body={s.body} />
          ))}
        </div>
      </Section>

      {/* Outcomes */}
      <Section id="outcomes">
        <Title1>Outcomes clients get</Title1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "var(--spacingHorizontalL)",
            marginTop: "var(--spacingHorizontalXL)",
          }}
        >
          {[
            { stat: "8+ hrs", label: "reclaimed each week" },
            { stat: "97%", label: "on-time service rate" },
            { stat: "4.9★", label: "average provider rating" },
            { stat: "1", label: "app for every errand" },
          ].map((o) => (
            <div key={o.label} style={{ ...cardStyle, textAlign: "center" }}>
              <div
                style={{
                  fontSize: "var(--fontSizeHero800, 40px)",
                  fontWeight: 700,
                  color: "var(--colorBrandForeground1)",
                  lineHeight: 1,
                }}
              >
                {o.stat}
              </div>
              <Body1 style={{ color: "var(--colorNeutralForeground2)" }}>{o.label}</Body1>
            </div>
          ))}
        </div>
      </Section>

      {/* How to get started */}
      <Section id="how-to-start" bg={deepBg}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
            gap: "var(--spacingHorizontalXXL)",
            alignItems: "center",
            marginBottom: "var(--spacingHorizontalXL)",
          }}
          className="two-col"
        >
          <div style={{ aspectRatio: "4 / 3" }}>
            <img
              src={youngAdult}
              alt="A young adult laughing on a phone call at home with a calendar open on their laptop"
              width={1024}
              height={768}
              loading="lazy"
              style={roundedImg}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacingHorizontalM)" }}>
            <Title1>How to get started</Title1>
            <Body1 style={readable}>
              Four short steps. No credit card to browse, no long forms —
              just the help you need, when you need it.
            </Body1>
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "var(--spacingHorizontalL)",
          }}
        >
          {[
            { n: "1", title: "Create an account", body: "Takes under a minute. No credit card required to browse." },
            { n: "2", title: "Tell us what you need", body: "Pick a service, a time, and any special instructions." },
            { n: "3", title: "We match a provider", body: "A vetted human confirms the booking and stays in touch." },
            { n: "4", title: "Sit back", body: "Track it live in your dashboard. Rate and repeat." },
          ].map((s) => (
            <div key={s.n} style={cardStyle}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "var(--borderRadiusCircular)",
                  background: "var(--colorBrandBackground)",
                  color: "var(--colorNeutralForegroundOnBrand)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                }}
              >
                {s.n}
              </div>
              <Title3>{s.title}</Title3>
              <Body1 style={{ color: "var(--colorNeutralForeground2)", lineHeight: 1.6 }}>{s.body}</Body1>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "var(--spacingHorizontalXXL)" }}>
          <Link to="/login">
            <Button appearance="primary" size="large">Create your account</Button>
          </Link>
        </div>
      </Section>

      {/* About Us */}
      <Section id="about">
        <Title1>About us</Title1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "var(--spacingHorizontalL)",
            marginTop: "var(--spacingHorizontalL)",
          }}
        >
          <Body1 style={readable}>
            Ubu began as something deeply personal and quietly powerful — three
            busy moms, each navigating the daily juggle of careers, children,
            households, and endless responsibilities.
          </Body1>
          <Body1 style={readable}>
            What started as informal conversations, sharing frustrations, tips,
            and small wins, quickly revealed a bigger truth: running a family
            isn't meant to be a solo effort, yet so many parents are left to
            figure it out on their own.
          </Body1>
          <Body1 style={readable}>
            We came together with a shared purpose — to build a dependable
            support system for the kind of help every family needs but often
            struggles to access. A community where trusted assistance can be
            organized and shared in a practical, reliable way.
          </Body1>
          <Body1 style={readable}>
            At its heart, Ubu reflects the idea that "it takes a village,"
            modernized for today's world — turning everyday collaboration into
            a structured network of care, so families thrive, not just manage.
          </Body1>
          <div style={{ display: "flex", gap: "var(--spacingHorizontalL)", flexWrap: "wrap", marginTop: "var(--spacingHorizontalM)" }}>
            {[
              { k: "Founded", v: "2026" },
              { k: "Providers", v: "300+ vetted" },
              { k: "Cities", v: "Boston and Growing" },
            ].map((x) => (
              <div key={x.k} style={{ ...cardStyle, flex: "1 1 200px" }}>
                <Caption1 style={{ color: "var(--colorNeutralForeground2)" }}>{x.k}</Caption1>
                <Body1Strong>{x.v}</Body1Strong>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" bg={softBg}>
        <Title1 as="h1" block>Contact us</Title1>
        <Body1 as="p" block style={{ ...readable, marginTop: "var(--spacingHorizontalS)" }}>
          Questions, concerns, or just curious? We'd love to hear from you.
        </Body1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "var(--spacingHorizontalL)",
            marginTop: "var(--spacingHorizontalXL)",
          }}
        >
          <div style={cardStyle}>
            <Mail24Regular style={{ color: "var(--colorBrandForeground1)" }} />
            <Title3>Email</Title3>
            <a href="mailto:hello@ubu.app" style={{ color: "var(--colorBrandForeground1)" }}>
              hello@ubu.app
            </a>
          </div>
          <div style={cardStyle}>
            <Call24Regular style={{ color: "var(--colorBrandForeground1)" }} />
            <Title3>Phone</Title3>
            <a href="tel:+18005550110" style={{ color: "var(--colorBrandForeground1)" }}>
              +1 (800) 555-0110
            </a>
          </div>
          <div style={cardStyle}>
            <CheckmarkCircle24Filled style={{ color: "var(--colorBrandForeground1)" }} />
            <Title3>Hours</Title3>
            <Body1 style={{ color: "var(--colorNeutralForeground2)", lineHeight: 1.6 }}>
              Mon–Sat, 7am–9pm local. On-call support 24/7 for active bookings.
            </Body1>
          </div>
        </div>
      </Section>

      <footer
        style={{
          background: "var(--colorNeutralBackground3)",
          borderTop: border,
          padding: "var(--spacingHorizontalL) var(--spacingHorizontalXL)",
          textAlign: "center",
        }}
      >
        <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>
          © {new Date().getFullYear()} Ubu · <Link to="/pricing">Pricing</Link> · <Link to="/login">Sign in</Link>
        </Caption1>
      </footer>

      {/* Stack two-column layouts on small screens */}
      <style>{`
        @media (max-width: 820px) {
          .hero-grid, .two-col {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}


const cardStyle: React.CSSProperties = {
  background: "var(--colorNeutralBackground1)",
  border,
  borderRadius: radius,
  padding: "var(--spacingHorizontalL)",
  display: "flex",
  flexDirection: "column",
  gap: "var(--spacingHorizontalS)",
};

function FeatureCard({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div style={cardStyle}>
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: "var(--borderRadiusMedium)",
          background: "var(--colorBrandBackground2)",
          color: "var(--colorBrandForeground2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </div>
      <Title3>{title}</Title3>
      <Body1 style={{ color: "var(--colorNeutralForeground2)", lineHeight: 1.6 }}>{body}</Body1>
    </div>
  );
}

// silence unused imports in some tree-shakes
void Subtitle2;
void Title2;
