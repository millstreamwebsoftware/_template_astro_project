import { defineConfig } from 'astro/config';
import bookshop from '@bookshop/astro-bookshop';

// https://astro.build/config
export default defineConfig({
  site: "http://localhost/",
  integrations: [bookshop()],
  redirects: {
    "/manager": "/404"
  },
  scopedStyleStrategy: "attribute"
});