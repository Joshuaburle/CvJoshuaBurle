import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://Joshuaburle.github.io',
  base : 'CvJoshuaBurle', 
  trailingSlash: 'always',
  integrations: [tailwind()],
});
