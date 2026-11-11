import { ButtonLink } from "~/components/ui/button";
import { Dots, DownloadIcon } from "~/components/ui/icons";
import { profile } from "~/data/profile";
import { useContent } from "~/i18n";

export function Hero() {
  const { lang, t } = useContent();

  return (
    <section id="top" className="grid items-center gap-12 md:grid-cols-2">
      <div>
        <h1 className="text-[32px] leading-snug font-semibold">
          {t.hero.title.map((part, i) =>
            typeof part === "string" ? (
              part
            ) : (
              <span key={i} className="text-primary">
                {part.highlight}
              </span>
            ),
          )}
        </h1>
        <p className="my-8 text-gray">{t.hero.description}</p>
        <div className="flex flex-wrap gap-4">
          <ButtonLink href="#contact">{t.hero.contactCta}</ButtonLink>
          <ButtonLink href={profile.cv[lang]} download variant="secondary">
            <DownloadIcon className="size-4" />
            {t.hero.downloadCv}
          </ButtonLink>
        </div>
      </div>

      <div className="relative mx-auto flex w-full max-w-sm flex-col">
        <img
          src="/images/logo.png"
          alt=""
          className="absolute top-[10%] left-0 w-1/2"
        />
        <img
          src="/images/hero.png"
          alt={t.hero.photoAlt}
          width={853}
          height={1076}
          className="relative z-10 ml-auto h-auto w-[300px] max-w-[80%] border-b border-primary"
        />
        <div className="relative z-20 mx-auto -mt-px flex w-fit items-center gap-2 border border-gray bg-background p-2 font-medium text-gray">
          <span className="square-marker" />
          {t.hero.status}
        </div>
        <Dots className="absolute right-0 bottom-16 z-20 w-16 sm:w-20" />
      </div>
    </section>
  );
}
