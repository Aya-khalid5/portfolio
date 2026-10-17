import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#FAF6F0",
        surface: "#FFFFFF",
        ink: "#2B2420",
        "ink-soft": "#5C534B",
        border: "#E7DDD0",
        clay: "#D9723F",
        "clay-dark": "#B85A2E",
        peach: "#F2A76B",
        "peach-soft": "#FBE3C9",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      maxWidth: {
        content: "72rem",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        rise: "rise 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        fade: "fade 0.2s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
