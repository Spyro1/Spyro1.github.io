import { Fragment } from "react";
import { Link, useLocation } from "react-router";
import { locales } from "~/i18n/config";
import { useContent } from "~/i18n";
import { cn } from "~/lib/utils";

/** "en | hu" toggle. Keeps the current #section and scroll position. */
export function LanguageSwitcher() {
  const { lang, t } = useContent();
  const { hash } = useLocation();

  return (
    <div
      role="group"
      aria-label={t.nav.language}
      className="flex items-center gap-1 border border-gray px-2 py-0.5 text-sm"
    >
      {locales.map((locale, i) => (
        <Fragment key={locale}>
          {i > 0 && (
            <span className="text-gray" aria-hidden="true">
              |
            </span>
          )}
          <Link
            to={`/${locale}${hash}`}
            preventScrollReset
            hrefLang={locale}
            lang={locale}
            aria-current={locale === lang ? "true" : undefined}
            className={cn(
              "px-1 transition-colors",
              locale === lang ? "font-semibold text-white" : "text-gray hover:text-white",
            )}
          >
            {locale}
          </Link>
        </Fragment>
      ))}
    </div>
  );
}
