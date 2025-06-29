// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Enable React to support React JSX components.
  integrations: [react()],
  site: "https://ErenYea.github.io",
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});
