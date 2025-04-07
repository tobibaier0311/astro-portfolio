import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import astroi18next from "astro-i18next";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ["de", "en"],
    defaultLocale: "en",
  },
  integrations: [tailwind(), react(), astroi18next()],
});
