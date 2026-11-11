import { ButtonLink } from "~/components/ui/button";
import { projects } from "~/data/profile";
import { useContent } from "~/i18n";
import { Section } from "./section";

export function Projects() {
  const { t } = useContent();

  return (
    <Section id="projects" title={t.projects.heading}>
      <ul className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => {
          const text = t.projects.items[project.id];
          return (
            <li key={project.id} className="flex flex-col border border-gray">
              <img
                src={project.image}
                alt={text.name}
                loading="lazy"
                className="aspect-video w-full border-b border-gray object-cover"
              />
              <ul className="flex flex-wrap gap-x-3 gap-y-1 border-b border-gray p-2 text-sm text-gray">
                {project.techs.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <div className="flex flex-1 flex-col gap-4 p-4">
                <h3 className="text-2xl font-medium">{text.name}</h3>
                <p className="flex-1 text-gray">{text.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.links.map((link) => (
                    <ButtonLink
                      key={link.href}
                      href={link.href}
                      variant={link.kind === "live" ? "primary" : "secondary"}
                    >
                      {t.projects.links[link.kind]}
                    </ButtonLink>
                  ))}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
