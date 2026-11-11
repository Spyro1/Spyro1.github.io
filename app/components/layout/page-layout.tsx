import type { ReactNode } from "react";
import { Footer } from "./footer";
import { Header } from "./header";
import { MediaSidebar } from "./media-sidebar";

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <MediaSidebar />
      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-28 px-4 py-12">
        {children}
      </main>
      <Footer />
    </div>
  );
}
