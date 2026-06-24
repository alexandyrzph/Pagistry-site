// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://pagistry.com',
  // The dev toolbar injects its own markup/links (e.g. a "Learn more" to the
  // Astro docs) that shows up in dev-server audits. Off for clean audits.
  devToolbar: { enabled: false },
  build: {
    // Let Astro inline only small CSS; larger CSS stays a separate
    // (compressible, cacheable) file rather than bloating the HTML.
    inlineStylesheets: 'auto',
  },
});
