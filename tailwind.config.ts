import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgPrimary: "var(--bg-primary)",
        bgSecondary: "var(--bg-secondary)",
        bgCard: "var(--bg-card)",
        textPrimary: "var(--text-primary)",
        textSecondary: "var(--text-secondary)",
        accent: "var(--accent)",
        accentLight: "var(--accent-light)",
        accentHover: "var(--accent-hover)",
        border: "var(--border)",
      },
      boxShadow: {
        soft: "0 18px 45px var(--shadow)",
        glow: "0 0 0 1px rgba(56, 189, 248, 0.25), 0 16px 40px rgba(56, 189, 248, 0.18)",
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top, rgba(56, 189, 248, 0.18), transparent 32%), linear-gradient(180deg, rgba(10, 15, 30, 0.96), rgba(10, 15, 30, 1))",
      },
    },
  },
  plugins: [],
};

export default config;
