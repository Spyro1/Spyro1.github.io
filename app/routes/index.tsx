import { redirect } from "react-router";
import type { Route } from "./+types/index";
import { getPreferredLocale } from "~/i18n/config";

/** `/` has no page of its own: send visitors to `/en` or `/hu`. */
export function loader({ request }: Route.LoaderArgs) {
  return redirect(`/${getPreferredLocale(request)}`);
}
