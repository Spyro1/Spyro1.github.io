import type { Locale } from "~/i18n/config";

export type Localized<T> = Record<Locale, T>;

export type NavSectionId = "about" | "experience" | "projects" | "skills" | "contact";
export type SectionId = NavSectionId | "education" | "interests";
export type ProjectId =
  | "levlista"
  | "belepteto"
  | "becskassza"
  | "sprinkle"
  | "luxus"
  | "basicLite";
export type SkillCategoryId = "languages" | "web" | "frameworks" | "other";
export type SkillLevel = "advanced" | "intermediate" | "beginner";
export type LinkKind = "live" | "github" | "gitlab";

/** Plain text, or text rendered in the accent color. */
export type RichText = Array<string | { highlight: string }>;

type TimelineItem = {
  period: string;
  title: string;
  place: string;
  description: string;
  /** Optional technology / role tags shown under the description. */
  tags?: string[];
};

/** Every translatable string on the page. `en.ts` and `hu.ts` must both satisfy this. */
export type CvContent = {
  fullName: string;
  meta: { title: string; description: string; ogLocale: string };
  nav: Record<NavSectionId, string> & { menu: string; language: string };
  hero: {
    title: RichText;
    description: string;
    status: string;
    contactCta: string;
    downloadCv: string;
    photoAlt: string;
  };
  quote: { text: string; author: string };
  about: {
    heading: string;
    paragraphs: string[];
    stats: { yearsCoding: string; projectsCompleted: string; technologies: string };
    studying: { label: string; detail: string };
  };
  experience: { heading: string; items: TimelineItem[] };
  education: { heading: string; items: TimelineItem[] };
  projects: {
    heading: string;
    items: Record<ProjectId, { name: string; description: string }>;
    links: Record<LinkKind, string>;
  };
  skills: {
    heading: string;
    categories: Record<SkillCategoryId, string>;
    levels: Record<SkillLevel, string>;
  };
  interests: { heading: string; items: Array<{ title: string; description: string }> };
  contact: {
    heading: string;
    title: string;
    description: string;
    boxTitle: string;
  };
  footer: { description: string; links: string; copyright: (year: number) => string };
};
