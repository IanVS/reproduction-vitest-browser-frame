/// <reference types="vitest" />

// Configure Vitest (https://vitest.dev/config/)

import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    headers: {
      'X-Frame-Options': 'DENY',
    },
  },
  test: {
    /* for example, use global to avoid globals imports (describe, test, expect): */
    // globals: true,
    browser: {
      enabled: true,
      name: 'chrome',
    },
  },
});
