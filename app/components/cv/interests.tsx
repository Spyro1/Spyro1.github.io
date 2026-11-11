import { Card } from "~/components/ui/card";
import { useContent } from "~/i18n";
import { Section } from "./section";

export function Interests() {
  const { t } = useContent();

  return (
    <Section id="interests" title={t.interests.heading}>
      <div className="grid gap-6 md:grid-cols-3">
        {t.interests.items.map((item) => (
          <Card key={item.title} title={item.title}>
            {item.description}
          </Card>
        ))}
      </div>
    </Section>
  );
}
