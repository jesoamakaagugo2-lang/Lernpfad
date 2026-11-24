import { createIsomorphicFn } from "@tanstack/react-start";
import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import appCss from "../styles.css?url";

const APP_NAME = "Lernpfad";

/** Hostname suitable for absolute share-card URLs. Same guard the injector uses for og:image. */
function publicAppHost(hostHeader: string): string {
  const host = String(hostHeader ?? "")
    .split(",")[0]
    .trim()
    .split(":")[0]
    .toLowerCase();
  if (!host || !/^[a-z0-9.-]+$/.test(host) || !host.includes(".")) return "";
  if (/^\d{1,3}(?:\.\d{1,3}){3}$/.test(host)) return "";
  if (
    host === "vercel.app" ||
    host.endsWith(".vercel.app") ||
    host === "vercel.com" ||
    host.endsWith(".vercel.com")
  ) {
    return "";
  }
  return host;
}

const resolvePublicHost = createIsomorphicFn()
  .server(async () => {
    const fromEnv = publicAppHost(process.env.VITE_PUBLIC_HOSTNAME ?? "");
    if (fromEnv) return fromEnv;
    const { getRequest } = await import("@tanstack/react-start/server");
    const request = getRequest();
    const header = request?.headers.get("x-forwarded-host") ?? request?.headers.get("host") ?? "";
    return publicAppHost(header);
  })
  .client(() => publicAppHost(import.meta.env.VITE_PUBLIC_HOSTNAME ?? ""));

export const Route = createRootRoute({
  head: async () => {
    const host = (await resolvePublicHost()) || "";
    const meta: Array<
      | { charSet: string }
      | { name: string; content: string }
      | { title: string }
      | { property: string; content: string }
    > = [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content: "Lernpfad is a calm daily path from zero German to B1.",
      },
      { name: "theme-color", content: "#1e5c45" },
    ];
    if (host) {
      const xBanner = `https://${host}/x-banner.jpg`;
      meta.push({ property: "x:game:image", content: xBanner });
    }
    return {
      meta,
      links: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "stylesheet", href: appCss },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Source+Sans+3:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap",
        },
        { rel: "manifest", href: "/__grok/manifest.webmanifest" },
        { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      ],
    };
  },
  component: () => (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});