import type { ComponentProps } from "react";
import { cn } from "~/lib/utils";

type Variant = "primary" | "secondary";

const base =
  "inline-flex items-center justify-center gap-2 border px-4 py-2 font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

const variants: Record<Variant, string> = {
  primary: "border-primary text-white hover:bg-primary-op",
  secondary: "border-gray text-gray hover:bg-gray-op hover:text-white",
};

export function buttonClass(variant: Variant = "primary", className?: string) {
  return cn(base, variants[variant], className);
}

export function Button({
  variant,
  className,
  type = "button",
  ...props
}: ComponentProps<"button"> & { variant?: Variant }) {
  return <button type={type} className={buttonClass(variant, className)} {...props} />;
}

/** An `<a>` styled as a button. Opens external links in a new tab. */
export function ButtonLink({
  variant,
  className,
  href = "",
  ...props
}: ComponentProps<"a"> & { variant?: Variant }) {
  const external = /^https?:\/\//.test(href);
  return (
    <a
      href={href}
      className={buttonClass(variant, className)}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      {...props}
    />
  );
}
