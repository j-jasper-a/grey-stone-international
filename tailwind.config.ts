import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      light: "#f9f9f9",
      dark: "#1c1c1c",
      brand: {
        1: "#1c67c7",
        2: "2fcb6c",
      },
    },
    extend: {
      fontFamily: {
        regular: "var(--font-regular)",
        special: "var(--font-special)",
      },
    },
  },

  plugins: [require("@tailwindcss/forms")],
};
export default config;
