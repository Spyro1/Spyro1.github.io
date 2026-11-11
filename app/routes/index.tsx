import { redirect } from "react-router";
import { defaultLocale, getBrowserLocale } from "~/i18n/config";

/**
 * `/` has no page of its own: send visitors to `/en` or `/hu`.
 * The site is static (GitHub Pages), so the choice is made in the browser.
 */
export function clientLoader() {
  return redirect(`/${getBrowserLocale()}`);
}

/** Pre-rendered HTML for `/`, shown until the redirect above runs. */
export function HydrateFallback() {
  return (
    <noscript>
      <meta httpEquiv="refresh" content={`0; url=/${defaultLocale}`} />
      <a href={`/${defaultLocale}`}>Continue to the site</a>
    </noscript>
  );
}

export default function Index() {
  return null;
}
