import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useParams,
} from "react-router";

import type { Route } from "./+types/root";
import { buttonClass } from "./components/ui/button";
import { defaultLocale, isLocale } from "./i18n/config";
import "./styles/app.css";

export const links: Route.LinksFunction = () => [
  { rel: "icon", href: "/images/logo.png", type: "image/png" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const { lang } = useParams();

  return (
    <html lang={isLocale(lang) ? lang : defaultLocale}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "error";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center gap-6 px-4">
      <h1 className="heading">{message}</h1>
      <p className="text-gray">{details}</p>
      <a href="/" className={buttonClass("primary", "w-fit")}>
        home =&gt;
      </a>
      {stack && (
        <pre className="w-full overflow-x-auto border border-gray p-4 text-sm text-gray">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
