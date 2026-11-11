import { profile } from "~/data/profile";
import { useContent } from "~/i18n";
import { SocialLinks } from "./social-links";

export function Footer() {
  const { t } = useContent();

  return (
    <footer className="mt-16 border-t border-gray">
      <div className="mx-auto flex max-w-5xl flex-col justify-between gap-8 px-4 py-8 md:flex-row">
        <div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href="#top" className="flex items-center gap-2 font-bold">
              <img src="/images/logo.png" alt="" className="size-6" />
              {t.fullName}
            </a>
            <a href={`mailto:${profile.email}`} className="text-gray transition-colors hover:text-white">
              {profile.email}
            </a>
          </div>
          <p className="mt-4">{t.footer.description}</p>
        </div>
        <div>
          <h2 className="text-2xl font-medium">{t.footer.links}</h2>
          <SocialLinks withCv className="mt-2 -ml-1" />
        </div>
      </div>
      <p className="px-4 pb-8 text-center text-sm text-gray">
        {t.footer.copyright(new Date().getFullYear())}
      </p>
    </footer>
  );
}
