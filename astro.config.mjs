import { defineConfig } from "astro/config";
import bookshop from "@bookshop/astro-bookshop";
import favicons from "astro-favicons";
import preferences from "/data/preferences.json";

// https://astro.build/config
export default defineConfig({
  site: preferences.general.canonical_url,
  integrations: [
    bookshop(),
    {
      name: "Middleware",
      hooks: {
        "astro:config:setup": ({ addMiddleware }) => {
          addMiddleware({
            order: "pre",
            entrypoint: "@mws-astro/middleware.ts",
          });
        },
      },
    },
    favicons(),
  ],
  redirects: {
    "/manager": "/404",
  },
  scopedStyleStrategy: "attribute",
  image: {
    domains: ["dam.cms.io"],
  },
});
