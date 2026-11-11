import { profile } from "~/data/profile";
import { useContent } from "~/i18n";
import { cn } from "~/lib/utils";
import { DownloadIcon, GithubIcon, LinkedinIcon, MailIcon } from "~/components/ui/icons";

type SocialLinksProps = {
  vertical?: boolean;
  withCv?: boolean;
  className?: string;
};

const linkClass = "block p-1 text-gray transition-colors hover:text-white";

export function SocialLinks({ vertical = false, withCv = false, className }: SocialLinksProps) {
  const { lang, t } = useContent();

  return (
    <ul className={cn("flex gap-2", vertical && "flex-col", className)}>
      <li>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={linkClass}>
          <GithubIcon className="size-6" />
        </a>
      </li>
      <li>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={linkClass}>
          <LinkedinIcon className="size-6" />
        </a>
      </li>
      <li>
        <a href={`mailto:${profile.email}`} aria-label="Email" className={linkClass}>
          <MailIcon className="size-6" />
        </a>
      </li>
      {withCv && (
        <li>
          <a href={profile.cv[lang]} download aria-label={t.hero.downloadCv} className={linkClass}>
            <DownloadIcon className="size-6" />
          </a>
        </li>
      )}
    </ul>
  );
}
