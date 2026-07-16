import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";
import * as fluentNs from "@fluentui/react-components";
const fluent: typeof fluentNs = (fluentNs as unknown as { default?: typeof fluentNs }).default ?? fluentNs;
const { FluentProvider, webLightTheme } = fluent;

// Warm coral brand palette pulled from the Ubu logo. Overrides on top of
// webLightTheme so we avoid the SSR CJS-interop issue with createLightTheme.
const ubuLightTheme = {
  ...webLightTheme,
  colorBrandBackground: "#C1524F",
  colorBrandBackgroundHover: "#D2635F",
  colorBrandBackgroundPressed: "#A2413E",
  colorBrandBackgroundSelected: "#D2635F",
  colorBrandBackground2: "#FBE9E7",
  colorBrandForeground1: "#A2413E",
  colorBrandForeground2: "#7E3230",
  colorBrandForegroundLink: "#A2413E",
  colorBrandForegroundLinkHover: "#C1524F",
  colorCompoundBrandBackground: "#C1524F",
  colorCompoundBrandBackgroundHover: "#D2635F",
  colorCompoundBrandBackgroundPressed: "#A2413E",
  colorCompoundBrandStroke: "#C1524F",
  colorNeutralBackground1: "#FFFFFF",
  colorNeutralBackground2: "#FBF6F4",
  colorNeutralBackground3: "#F3EAE7",
  colorNeutralForeground1: "#1F1412",
  colorNeutralForeground2: "#3F2A26",
  colorNeutralForeground3: "#6B534E",
};

import appCss from "../styles.css?url";


export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Ubu — Your Life with AI smarts and a Human Touch" },
      {
        name: "description",
        content:
          "Ubu blends AI smarts with a human touch to handle transportation, sitter services, home watch, and appointments — all in one place.",
      },
      { property: "og:title", content: "Ubu — Your Life with AI smarts and a Human Touch" },
      {
        property: "og:description",
        content:
          "Ubu blends AI smarts with a human touch to handle transportation, sitter services, home watch, and appointments — all in one place.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Pacifico&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <FluentProvider theme={ubuLightTheme}>
        <Outlet />
      </FluentProvider>
    </QueryClientProvider>
  );
}
