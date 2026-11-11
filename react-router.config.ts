import type { Config } from "@react-router/dev/config";
import { locales } from "./app/i18n/config";

export default {
  // Static site for GitHub Pages: no runtime server, every page is
  // pre-rendered to HTML at build time into `build/client`.
  ssr: false,
  prerender: ["/", ...locales.map((locale) => `/${locale}`)],
} satisfies Config;
