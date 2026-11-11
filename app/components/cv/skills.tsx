import { Badge } from "~/components/ui/badge";
import { Card } from "~/components/ui/card";
import { skills } from "~/data/profile";
import { useContent } from "~/i18n";
import type { SkillLevel } from "~/types/cv";
import { Section } from "./section";

const levelTone = {
  advanced: "primary",
  intermediate: "white",
  beginner: "gray",
} as const satisfies Record<SkillLevel, string>;

export function Skills() {
  const { lang, t } = useContent();

  return (
    <Section id="skills" title={t.skills.heading}>
      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((category) => (
          <Card key={category.id} title={t.skills.categories[category.id]}>
            <ul className="-my-2 divide-y divide-gray/20">
              {category.items.map((skill) => {
                const name = typeof skill.name === "string" ? skill.name : skill.name[lang];
                return (
                  <li key={name} className="flex items-center justify-between gap-4 py-2">
                    <span className="text-white">{name}</span>
                    <Badge tone={levelTone[skill.level]}>{t.skills.levels[skill.level]}</Badge>
                  </li>
                );
              })}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
