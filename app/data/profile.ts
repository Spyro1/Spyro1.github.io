import type {
  LinkKind,
  Localized,
  ProjectId,
  SkillCategoryId,
  SkillLevel,
} from "~/types/cv";

/** Facts that are the same in every language. */
export const profile = {
  email: "szenes.marton.miklos@kszk.bme.hu",
  github: "https://github.com/Spyro1",
  linkedin: "https://www.linkedin.com/in/m%C3%A1rton-szenes-8032a433b/",
  university: "https://www.bme.hu",
  cv: {
    en: "/cv/marton-szenes-cv-en.pdf",
    hu: "/cv/marton-szenes-cv-hu.pdf",
  } satisfies Localized<string>,
  stats: { yearsCoding: "8+", projectsCompleted: "10+", technologies: "5+" },
};

export type ProjectData = {
  id: ProjectId;
  image: string;
  techs: string[];
  links: Array<{ kind: LinkKind; href: string }>;
};

export const projects: ProjectData[] = [
  {
    id: "levlista",
    image: "/images/projects/levlista-service.png",
    techs: ["Python", "FastAPI", "Google Groups API", "Micro-service"],
    links: [
      { kind: "live", href: "https://admin.sch.bme.hu/" },
      {
        kind: "gitlab",
        href: "https://git.sch.bme.hu/kszk/adminsch-ng/services/levlista-service",
      },
    ],
  },
  {
    id: "belepteto",
    image: "/images/projects/beleptetosch.png",
    techs: ["Frontend", "React", "Material UI"],
    links: [
      { kind: "live", href: "https://belepteto.sch.bme.hu/" },
      { kind: "gitlab", href: "https://git.sch.bme.hu/belepteto-sch-team/frontend" },
    ],
  },
  {
    id: "becskassza",
    image: "/images/projects/becskasszasch2_2_main.png",
    techs: ["Python", "Flask", "Jinja", "PostgreSQL", "HTML / Tailwind CSS"],
    links: [
      { kind: "live", href: "https://becskassza.kszk.bme.hu/" },
      { kind: "gitlab", href: "https://git.sch.bme.hu/kszk/devteam/becskasszasch-2" },
    ],
  },
  {
    id: "sprinkle",
    image: "/images/projects/sprinkle-system-circuit.png",
    techs: ["Arduino", "C++", "RTC", "TFT Display", "Sensors"],
    links: [{ kind: "github", href: "https://github.com/Spyro1/SprinkleSystem" }],
  },
  {
    id: "luxus",
    image: "/images/projects/luxusfinance.png",
    techs: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "PHP"],
    links: [{ kind: "live", href: "https://luxusfinance.hu" }],
  },
  {
    id: "basicLite",
    image: "/images/projects/basic-lite-interpreter.svg",
    techs: ["C++", "Interpreter", "STL", "CLI"],
    links: [{ kind: "github", href: "https://github.com/Spyro1/Basic-Lite-Interpreter" }],
  },
];

export type Skill = { name: string | Localized<string>; level: SkillLevel };

export const skills: Array<{ id: SkillCategoryId; items: Skill[] }> = [
  {
    id: "languages",
    items: [
      { name: "Java", level: "advanced" },
      { name: "Python", level: "advanced" },
      { name: "C# .NET", level: "advanced" },
      { name: "C++", level: "intermediate" },
      { name: "Kotlin", level: "beginner" },
    ],
  },
  {
    id: "web",
    items: [
      { name: "HTML5", level: "advanced" },
      { name: "CSS3", level: "advanced" },
      { name: "Bootstrap", level: "advanced" },
      { name: "JavaScript", level: "intermediate" },
    ],
  },
  {
    id: "frameworks",
    items: [
      { name: "Flask", level: "advanced" },
      { name: "Jinja2", level: "advanced" },
      { name: "Git", level: "intermediate" },
    ],
  },
  {
    id: "other",
    items: [
      { name: "SQL", level: "intermediate" },
      { name: "PostgreSQL", level: "intermediate" },
      {
        name: { en: "Project Management", hu: "Projektmenedzsment" },
        level: "intermediate",
      },
    ],
  },
];
