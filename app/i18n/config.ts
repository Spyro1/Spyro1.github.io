export const locales = ["en", "hu"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (locales as readonly string[]).includes(value);
}

/**
 * Preferred locale in the browser: the `lang` cookie, then the browser's
 * language list (`navigator.languages`), then the default.
 */
export function getBrowserLocale(): Locale {
  const fromCookie = document.cookie.match(/(?:^|;\s*)lang=([^;]+)/)?.[1];
  if (isLocale(fromCookie)) return fromCookie;

  const languages = navigator.languages?.length ? navigator.languages : [navigator.language];
  const preferred = languages
    .map((tag) => tag?.split("-")[0].toLowerCase())
    .find((lang) => isLocale(lang));

  return isLocale(preferred) ? preferred : defaultLocale;
}

export function localeCookie(lang: Locale) {
  return `lang=${lang}; Path=/; Max-Age=31536000; SameSite=Lax`;
}
