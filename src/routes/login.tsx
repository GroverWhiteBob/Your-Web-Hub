import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import * as fluentNs from "@fluentui/react-components";
import { signIn } from "@/lib/auth";
const ubuLogo = { url: "/ubu-logo.png" };

const fluent: typeof fluentNs =
  (fluentNs as unknown as { default?: typeof fluentNs }).default ?? fluentNs;
const { Button, Field, Input, Title1, Body1, Caption1 } = fluent;

export const Route = createFileRoute("/login")({
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("sara@example.com");
  const [password, setPassword] = useState("demo");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    const name = email.split("@")[0];
    const displayName = name.charAt(0).toUpperCase() + name.slice(1);
    signIn({ name: displayName, email });
    navigate({ to: "/dashboard" });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "var(--spacingHorizontalL)",
        background: "var(--colorNeutralBackground3)",
      }}
    >
      <div
        className="fluent-panel"
        style={{
          width: "100%",
          maxWidth: 420,
          background: "var(--colorNeutralBackground1)",
          padding: "var(--spacingHorizontalXXL)",
          borderRadius: "var(--borderRadiusLarge)",
          boxShadow: "var(--shadow16)",
          display: "flex",
          flexDirection: "column",
          gap: "var(--spacingHorizontalL)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacingHorizontalXS)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--spacingHorizontalS)" }}>
            <img src={ubuLogo.url} alt="Ubu logo" style={{ width: 44, height: 44, borderRadius: 8 }} />
            <Title1>Ubu</Title1>
          </div>
          <Body1 style={{ color: "var(--colorNeutralForeground2)" }}>
            Your Life with AI smarts and a Human Touch
          </Body1>
        </div>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "var(--spacingHorizontalM)" }}>
          <Field label="Email address" required>
            <Input
              type="email"
              value={email}
              onChange={(_, d) => setEmail(d.value)}
              placeholder="you@example.com"
            />
          </Field>
          <Field label="Password" required>
            <Input
              type="password"
              value={password}
              onChange={(_, d) => setPassword(d.value)}
            />
          </Field>
          <Button type="submit" appearance="primary" size="large">
            Sign in
          </Button>
          <Caption1 style={{ color: "var(--colorNeutralForeground3)", textAlign: "center" }}>
            Demo login — any email and password will work.
          </Caption1>
        </form>
      </div>
    </div>
  );
}
