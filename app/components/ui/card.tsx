import type { ReactNode } from "react";
import { cn } from "~/lib/utils";

type CardProps = {
  title: ReactNode;
  children: ReactNode;
  className?: string;
};

/** Outlined box with a title row, matching the original site's cards. */
export function Card({ title, children, className }: CardProps) {
  return (
    <div className={cn("border border-gray", className)}>
      <div className="border-b border-gray px-4 py-2 font-semibold">{title}</div>
      <div className="p-4 text-gray">{children}</div>
    </div>
  );
}
