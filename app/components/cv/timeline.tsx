import { Badge } from "~/components/ui/badge";
import { useContent } from "~/i18n";
import type { CvContent } from "~/types/cv";
import { Section } from "./section";

type Item = CvContent["experience"]["items"][number];

function Timeline({ items }: { items: Item[] }) {
  return (
    <ol className="space-y-10 border-l border-gray/40 pl-8">
      {items.map((item) => (
        <li key={item.title} className="relative">
          {/* Square marker centred on the vertical line. */}
          <span className="absolute top-1 -left-[40.5px] flex bg-background" aria-hidden="true">
            <span className="square-marker" />
          </span>
          <p className="text-sm text-primary">{item.period}</p>
          <h3 className="mt-1 text-xl font-medium">{item.title}</h3>
          <p className="text-gray">{item.place}</p>
          <p className="mt-3 max-w-3xl text-gray">{item.description}</p>
          {item.tags && item.tags.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <li key={tag}>
                  <Badge>{tag}</Badge>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );
}

export function Experience() {
  const { t } = useContent();
  return (
    <Section id="experience" title={t.experience.heading}>
      <Timeline items={t.experience.items} />
    </Section>
  );
}

export function Education() {
  const { t } = useContent();
  return (
    <Section id="education" title={t.education.heading}>
      <Timeline items={t.education.items} />
    </Section>
  );
}
