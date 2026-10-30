import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        sec: "var(--sec)",
        light: "var(--white)",
        icon: "var(--white-icon)",
        "icon-tr": "var(--white-icon-tr)",
        surface: "var(--surface)",
        divider: "var(--divider)",
        indicator: "var(--indicator)",
      },
      backgroundImage: {
        "vignette-outer":
          "radial-gradient(circle, rgba(16,16,16,0) 60%, rgba(16,16,16,1) 100%)",
        "vignette-center":
          "radial-gradient(circle, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 60%)",
      },
      keyframes: {
        scaleAnim: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
        "heart-pulse": {
          "0%": { transform: "scale(1)" },
          "25%": { transform: "scale(1.1)" },
          "50%": { transform: "scale(1)" },
          "75%": { transform: "scale(1.06)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        scale: "scaleAnim 300ms ease-in-out",
        "heart-pulse": "heart-pulse 0.6s ease-in-out",
      },
    },
  },
  plugins: [],
} satisfies Config;
