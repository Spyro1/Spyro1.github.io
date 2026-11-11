import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/index.tsx"), // redirects to /en or /hu
  route(":lang", "routes/cv.tsx"),
] satisfies RouteConfig;
