import { Card } from "~/components/ui/card";
import { GithubIcon, LinkedinIcon, MailIcon } from "~/components/ui/icons";
import { profile } from "~/data/profile";
import { useContent } from "~/i18n";
import { Section } from "./section";

export function Contact() {
  const { t } = useContent();
  const rows = [
    { href: `mailto:${profile.email}`, label: profile.email, Icon: MailIcon },
    { href: profile.github, label: "github.com/Spyro1", Icon: GithubIcon },
    { href: profile.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  ];

  return (
    <Section id="contact" title={t.contact.heading}>
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
        <div className="max-w-xl">
          <h3 className="text-2xl font-medium">{t.contact.title}</h3>
          <p className="mt-4 text-gray">{t.contact.description}</p>
        </div>

        <Card title={t.contact.boxTitle} className="w-full md:w-auto md:min-w-80">
          <ul className="space-y-3">
            {rows.map(({ href, label, Icon }) => (
              <li key={href}>
                <a
                  href={href}
                  {...(href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                  className="flex items-center gap-3 break-all transition-colors hover:text-white"
                >
                  <Icon />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  );
}
