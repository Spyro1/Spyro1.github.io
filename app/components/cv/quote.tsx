import { useContent } from "~/i18n";

export function Quote() {
  const { t } = useContent();

  return (
    <figure className="mx-auto w-fit max-w-full">
      <blockquote className="relative border border-gray p-8 text-xl font-medium sm:text-2xl">
        <span
          aria-hidden="true"
          className="absolute -top-7 left-4 bg-background px-1 text-6xl leading-none font-bold text-gray"
        >
          "
        </span>
        {t.quote.text}
      </blockquote>
      <figcaption className="ml-auto w-fit border border-t-0 border-gray p-2 text-gray">
        - {t.quote.author}
      </figcaption>
    </figure>
  );
}
