import { useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import * as fluentNs from "@fluentui/react-components";
const fluent: typeof fluentNs =
  (fluentNs as unknown as { default?: typeof fluentNs }).default ?? fluentNs;
const {
  Button,
  Title2,
  Caption1,
  Avatar,
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuItem,
} = fluent;
import {
  Navigation24Regular,
  CalendarEdit20Regular,
  CalendarLtr20Regular,
  Box20Regular,
  Mail20Regular,
  SignOut24Regular,
  Home20Regular,
} from "@fluentui/react-icons";

import { getUser, signOut, type UbuUser } from "@/lib/auth";
const ubuLogo = { url: "/ubu-logo.png" };

const translucent = {
  background: "rgba(255,255,255,0.15)",
  color: "var(--colorNeutralForegroundOnBrand)",
  border: "1px solid rgba(255,255,255,0.35)",
} as const;

export function SiteHeader() {
  const navigate = useNavigate();
  const [user, setUser] = useState<UbuUser | null>(null);

  useEffect(() => {
    setUser(getUser());
  }, []);

  const goSchedule = () => {
    const el = typeof document !== "undefined"
      ? document.getElementById("quick-schedule")
      : null;
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else if (user) {
      navigate({ to: "/dashboard", hash: "quick-schedule" });
    } else {
      navigate({ to: "/login" });
    }
  };

  const goContact = () => {
    if (typeof window !== "undefined" && window.location.pathname === "/") {
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    navigate({ to: "/", hash: "contact" });
  };

  const handleSignOut = () => {
    signOut();
    setUser(null);
    navigate({ to: "/login" });
  };

  return (
    <header
      style={{
        position: "relative",
        zIndex: 20,
        background:
          "linear-gradient(90deg, var(--colorBrandBackgroundPressed) 0%, var(--colorBrandBackground) 100%)",
        color: "var(--colorNeutralForegroundOnBrand)",
        borderBottom: "1px solid var(--colorBrandBackgroundPressed)",
        padding: "var(--spacingHorizontalL) var(--spacingHorizontalXL)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "var(--spacingHorizontalM)",
      }}
    >
      <div style={{ flex: 1, display: "flex", justifyContent: "flex-start" }}>
        <Menu>
          <MenuTrigger disableButtonEnhancement>
            <Button
              appearance="primary"
              icon={<Navigation24Regular />}
              aria-label="Open menu"
              style={translucent}
            />
          </MenuTrigger>
          <MenuPopover>
            <MenuList>
              <MenuItem icon={<CalendarEdit20Regular />} onClick={goSchedule}>
                Schedule Services
              </MenuItem>
              <MenuItem
                icon={<Home20Regular />}
                onClick={() => navigate({ to: "/dashboard" })}
              >
                Dashboard
              </MenuItem>
              <MenuItem
                icon={<CalendarLtr20Regular />}
                onClick={() => navigate({ to: "/calendar" })}
              >
                Life Calendar
              </MenuItem>

              <MenuItem
                icon={<Box20Regular />}
                onClick={() => navigate({ to: "/pricing" })}
              >
                Packages
              </MenuItem>
              <MenuItem icon={<Mail20Regular />} onClick={goContact}>
                Contact Us
              </MenuItem>
            </MenuList>
          </MenuPopover>
        </Menu>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          cursor: "pointer",
          gap: "var(--spacingHorizontalXXS)",
        }}
        onClick={() => navigate({ to: user ? "/dashboard" : "/" })}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--spacingHorizontalS)",
          }}
        >
          <img
            src={ubuLogo.url}
            alt="Ubu logo"
            style={{ width: 40, height: 40, borderRadius: 8 }}
          />
          <Title2
            style={{
              color: "var(--colorNeutralForegroundOnBrand)",
              fontFamily: "'Pacifico', cursive",
              fontWeight: 400,
              fontSize: "2rem",
              lineHeight: 1.1,
              letterSpacing: "0.5px",
            }}
          >
            Ubu
          </Title2>
        </div>
        <Caption1
          style={{ color: "var(--colorNeutralForegroundOnBrand)", opacity: 0.9 }}
        >
          Life gets busy, Ubu makes it easy!
        </Caption1>
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: "var(--spacingHorizontalM)",
        }}
      >
        {user ? (
          <>
            <Avatar name={user.name || "You"} />
            <Button
              appearance="primary"
              icon={<SignOut24Regular />}
              onClick={handleSignOut}
              style={translucent}
            >
              Sign out
            </Button>
          </>
        ) : (
          <Button
            appearance="primary"
            onClick={() => navigate({ to: "/login" })}
            style={translucent}
          >
            Sign in
          </Button>
        )}
      </div>
    </header>
  );
}
