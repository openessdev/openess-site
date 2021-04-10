import { RouteDefinition } from "solid-app-router";
import { lazy } from "solid-js";

export const routes: RouteDefinition[] =
  window.location.href.indexOf("building.") === -1
    ? [
        {
          path: "/",
          component: lazy(() => import("./pages/Home")),
        },
        {
          path: "/episodes",
          component: lazy(() => import("./pages/Episodes")),
        },
      ]
    : [
        {
          path: "/",
          component: lazy(() => import("./pages/Episodes")),
        },
      ];
