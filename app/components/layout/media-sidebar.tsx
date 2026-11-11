import { SocialLinks } from "./social-links";

/** Fixed vertical social bar on the left edge, shown on wide screens only. */
export function MediaSidebar() {
  return (
    <aside className="fixed top-0 left-4 z-30 hidden flex-col items-center gap-2 xl:flex">
      <span className="h-48 w-px bg-gray" aria-hidden="true" />
      <SocialLinks vertical withCv />
    </aside>
  );
}
