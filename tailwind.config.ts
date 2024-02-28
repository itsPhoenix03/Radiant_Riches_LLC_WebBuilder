import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBackground: "#FBFCFD",
        secondaryBackground: "#212731",
        primaryFontColor: "#2C384A",
        secondaryFontColor: "#4B5665",
        actionColor: "#1B88F4",
        actionColorLightShade: "#F3F9FF",
        labelColor: "#FF7724",
      },
    },
  },
  plugins: [],
};
export default config;
