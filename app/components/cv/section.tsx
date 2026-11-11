import type { ReactNode } from "react";
import type { SectionId } from "~/types/cv";

type SectionProps = {
  id: SectionId;
  title: string;
  children: ReactNode;
};

/** Page section with the "#title ———" heading. */
export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`}>
      <h2 id={`${id}-heading`} className="heading mb-10">
        {title}
      </h2>
      {children}
    </section>
  );
}
