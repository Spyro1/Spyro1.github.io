import { useState } from "react";
import { CloseIcon, MenuIcon } from "~/components/ui/icons";
import { useActiveSection } from "~/hooks/use-active-section";
import { useContent } from "~/i18n";
import { cn } from "~/lib/utils";
import type { NavSectionId } from "~/types/cv";
import { LanguageSwitcher } from "./language-switcher";

const navIds: readonly NavSectionId[] = ["about", "experience", "projects", "skills", "contact"];

export function Header() {
  const { t } = useContent();
  const active = useActiveSection(navIds);
  const [open, setOpen] = useState(false);

  const links = navIds.map((id) => (
    <a
      key={id}
      href={`#${id}`}
      onClick={() => setOpen(false)}
      aria-current={active === id ? "true" : undefined}
      className={cn(
        "transition-colors before:text-primary before:content-['#'] hover:text-white",
        active === id ? "font-semibold text-white" : "text-gray",
      )}
    >
      {t.nav[id]}
    </a>
  ));

  return (
    <header className="sticky top-0 z-40 border-b border-gray/20 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4">
        <a href="#top" className="flex items-center gap-2 font-bold">
          <img src="/images/logo.png" alt="" className="size-6" />
          {t.fullName}
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links}
          <LanguageSwitcher />
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            aria-label={t.nav.menu}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
            className="p-1 text-gray hover:text-white"
          >
            {open ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" className="flex flex-col gap-4 border-t border-gray/20 px-4 py-6 text-lg md:hidden">
          {links}
        </nav>
      )}
    </header>
  );
}
