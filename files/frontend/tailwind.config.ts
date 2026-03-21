import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
      colors: {
        bg: "#080C14",
        surface: "#0D1320",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 3s infinite",
        "pulse-ring": "pulseRing 2s ease-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
