import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          1: "#F8F6F0",
          2: "#F0EEE6",
          3: "#B3BFB9",
          4: "#938A83",
          5: "#1F1F1F",
        },
      },
    },
  },
  plugins: [],
};

export default config;
