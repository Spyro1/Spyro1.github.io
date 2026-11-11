import { useEffect } from "react";
import { data } from "react-router";
import type { Route } from "./+types/cv";
import { About } from "~/components/cv/about";
import { Contact } from "~/components/cv/contact";
import { Hero } from "~/components/cv/hero";
import { Interests } from "~/components/cv/interests";
import { Projects } from "~/components/cv/projects";
import { Quote } from "~/components/cv/quote";
import { Skills } from "~/components/cv/skills";
import { Education, Experience } from "~/components/cv/timeline";
import { PageLayout } from "~/components/layout/page-layout";
import { ContentProvider, dictionaries } from "~/i18n";
import { isLocale, localeCookie, locales } from "~/i18n/config";

export function loader({ params }: Route.LoaderArgs) {
  const lang = params.lang;
  if (!isLocale(lang)) {
    throw data("Not Found", { status: 404 });
  }
  // Remember the choice so `/` redirects here next time.
  return data({ lang }, { headers: { "Set-Cookie": localeCookie(lang) } });
}

export function meta({ loaderData }: Route.MetaArgs) {
  if (!loaderData) return [{ title: "404 | Marton Szenes" }];
  const { meta } = dictionaries[loaderData.lang];
  return [
    { title: meta.title },
    { name: "description", content: meta.description },
    { property: "og:title", content: meta.title },
    { property: "og:description", content: meta.description },
    { property: "og:type", content: "website" },
    { property: "og:locale", content: meta.ogLocale },
    { property: "og:image", content: "/images/logo.png" },
  ];
}

export const links: Route.LinksFunction = () =>
  locales.map((locale) => ({ rel: "alternate", hrefLang: locale, href: `/${locale}` }));

export default function Cv({ loaderData }: Route.ComponentProps) {
  // Remember the choice so `/` redirects here next time.
  useEffect(() => {
    document.cookie = localeCookie(loaderData.lang);
  }, [loaderData.lang]);

  return (
    <ContentProvider lang={loaderData.lang}>
      <PageLayout>
        <Hero />
        <Quote />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Interests />
        <Contact />
      </PageLayout>
    </ContentProvider>
  );
}
