import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "accent-1": "var(--accent-1)",
        "accent-2": "var(--accent-2)",
      },
      fontFamily: {
        outfitRegular: "var(--font-outfit-regular)",
        outfitMedium: "var(--font-outfit-medium)",
        outfitBold: "var(--font-outfit-bold)",
      },
      height: {
        footerH: "calc(100vh - 6rem)",
        fullH: "calc(100svh - 9rem)",
        heroH: "calc(100svh - 6rem)",
        "50rem": "50rem",
      },
      maxWidth: {
        mdMaxW: "55rem",
        lgMaxW: "80rem",
      },
    },
  },
  plugins: [],
};
export default config;
