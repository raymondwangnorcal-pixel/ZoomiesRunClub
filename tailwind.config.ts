import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        zoomies: {
          gold: "#e3be6b",
          gray: "#a7adaf",
          blue: "#e0edf5",
          white: "#ffffff",
          charcoal: "#232122",
        },
      },
      boxShadow: {
        soft: "0 18px 60px rgba(35, 33, 34, 0.10)",
        sticker: "0 12px 28px rgba(35, 33, 34, 0.16)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
