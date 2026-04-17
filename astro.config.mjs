import { defineConfig, envField } from "astro/config";
import editableRegions from "@cloudcannon/editable-regions/astro-integration";
import favicons from "astro-favicons";
import preferences from "/data/preferences.json";
import mwsIntegration from "@millstreamwebsoftware/mws-astro";

// https://astro.build/config
export default defineConfig({
  site: preferences.general.canonical_url,
  integrations: [mwsIntegration(), editableRegions(), favicons()],
  redirects: {
    "/manager": "/404",
  },
  scopedStyleStrategy: "attribute",
  image: {
    domains: ["dam.cms.io"],
  },
  env: {
    schema: {
      BUILDMODE: envField.enum({
        context: "client",
        access: "public",
        default: "PRODUCTION",
        values: ["PRODUCTION", "EDITOR"],
      }),
    },
  },
});
