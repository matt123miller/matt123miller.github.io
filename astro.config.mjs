import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
});

// TODO: Remove react.
// I can definitely do all of this without react
// I think I was only really using it for the mobile nav menu anyway
