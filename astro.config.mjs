import { defineConfig } from 'astro/config';
import bookshop from '@bookshop/astro-bookshop';

// https://astro.build/config
export default defineConfig({
  site: "http://localhost/",
  integrations: [bookshop(), {name: "Middleware", hooks: {"astro:config:setup": ({addMiddleware}) => {
    addMiddleware({order: "pre", entrypoint: "@mws-astro/middleware.ts"})
  }}}],
  redirects: {
    "/manager": "/404"
  },
  scopedStyleStrategy: "attribute"
});