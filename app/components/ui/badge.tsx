import type { ReactNode } from "react";
import { cn } from "~/lib/utils";

type Tone = "primary" | "white" | "gray";

const tones: Record<Tone, string> = {
  primary: "border-primary text-primary",
  white: "border-white/60 text-white",
  gray: "border-gray/60 text-gray",
};

export function Badge({ tone = "gray", children }: { tone?: Tone; children: ReactNode }) {
  return (
    <span className={cn("shrink-0 border px-2 py-0.5 text-xs whitespace-nowrap", tones[tone])}>
      {children}
    </span>
  );
}
