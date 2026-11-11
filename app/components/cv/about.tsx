import { profile } from "~/data/profile";
import { useContent } from "~/i18n";
import { cn } from "~/lib/utils";
import { Section } from "./section";

export function About() {
  const { t } = useContent();
  const stats = [
    { value: profile.stats.yearsCoding, label: t.about.stats.yearsCoding },
    { value: profile.stats.projectsCompleted, label: t.about.stats.projectsCompleted },
    { value: profile.stats.technologies, label: t.about.stats.technologies },
  ];

  return (
    <Section id="about" title={t.about.heading}>
      <div className="grid gap-12 md:grid-cols-[3fr_2fr]">
        <div className="space-y-4 text-gray">
          {t.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="flex flex-col gap-4 self-start">
          <dl className="grid grid-cols-3 border border-gray">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={cn(
                  "flex flex-col-reverse items-center gap-1 p-4 text-center",
                  i > 0 && "border-l border-gray",
                )}
              >
                <dt className="text-xs text-gray">{stat.label}</dt>
                <dd className="text-2xl font-semibold text-primary">{stat.value}</dd>
              </div>
            ))}
          </dl>

          <div className="flex items-center gap-3 border border-gray p-4">
            <span className="square-marker" />
            <div>
              <div className="text-sm text-gray">{t.about.studying.label}</div>
              <a
                href={profile.university}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium transition-colors hover:text-primary"
              >
                {t.about.studying.detail}
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
