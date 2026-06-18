import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import stylex from "@stylexjs/unplugin";

export default defineConfig({
  site: "https://brand.crafter.ing",
  integrations: [react()],
  vite: {
    plugins: [
      stylex.vite({
        include: ["src/**/*.{js,jsx,ts,tsx}"],
        useCSSLayers: true,
      }),
    ],
  },
});
