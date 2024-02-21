import { defineConfig } from "astro/config";
import bookshop from "@bookshop/astro-bookshop";
import favicon from "astro-favicons";
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
    favicon({
      masterPicture: preferences.general.favicon,
      emitAssets: false, // Output image files (can be disabled after files built and committed to git)

      appName: preferences.general.site_name,
      appShortName: null,
      appDescription: preferences.general.default_site_description,
      lang: "en-AU",
      path: "ico",

      background: "#fff",
      theme_color: "#4daaa8",

      faviconsDarkMode: false, // default `true`, Make favicon compatible with light and dark modes
      cacheBustingQueryParam: "", // update this to "v=1" or similar to encourage browsers to refresh the favicon
      appleStatusBarStyle: "default",
    }),
  ],
  redirects: {
    "/manager": "/404",
  },
  scopedStyleStrategy: "attribute",
});
