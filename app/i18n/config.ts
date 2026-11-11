export const locales = ["en", "hu"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (locales as readonly string[]).includes(value);
}

/** Preferred locale from the `lang` cookie, then `Accept-Language`, then the default. */
export function getPreferredLocale(request: Request): Locale {
  const cookie = request.headers.get("Cookie") ?? "";
  const fromCookie = cookie.match(/(?:^|;\s*)lang=([^;]+)/)?.[1];
  if (isLocale(fromCookie)) return fromCookie;

  const accepted = (request.headers.get("Accept-Language") ?? "")
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { lang: tag.split("-")[0].toLowerCase(), q: q ? Number(q) : 1 };
    })
    .sort((a, b) => b.q - a.q)
    .find((entry) => isLocale(entry.lang));

  return isLocale(accepted?.lang) ? accepted.lang : defaultLocale;
}

export function localeCookie(lang: Locale) {
  return `lang=${lang}; Path=/; Max-Age=31536000; SameSite=Lax`;
}
