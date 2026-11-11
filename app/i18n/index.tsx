import { createContext, useContext, type ReactNode } from "react";
import type { CvContent } from "~/types/cv";
import type { Locale } from "./config";
import en from "./en";
import hu from "./hu";

export const dictionaries: Record<Locale, CvContent> = { en, hu };

type ContentValue = { lang: Locale; t: CvContent };

const ContentContext = createContext<ContentValue | null>(null);

export function ContentProvider({ lang, children }: { lang: Locale; children: ReactNode }) {
  return (
    <ContentContext.Provider value={{ lang, t: dictionaries[lang] }}>
      {children}
    </ContentContext.Provider>
  );
}

/** Current locale and its dictionary. Must be used inside `ContentProvider`. */
export function useContent() {
  const value = useContext(ContentContext);
  if (!value) throw new Error("useContent must be used inside <ContentProvider>");
  return value;
}
