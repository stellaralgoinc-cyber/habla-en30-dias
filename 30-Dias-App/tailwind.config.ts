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
        primary: {
          DEFAULT: "var(--color-primary)",
          light:   "var(--color-primary-light)",
          dark:    "var(--color-primary-dark)",
        },
        bg:       "var(--color-bg)",
        surface:  "var(--color-surface)",
        border:   "var(--color-border)",
        text: {
          primary:   "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          muted:     "var(--color-muted)",
        },
        accent: {
          gold:     "var(--color-accent-gold)",
          green:    "var(--color-accent-green)",
          lavender: "var(--color-accent-lavender)",
          rose:     "var(--color-accent-rose)",
          sky:      "var(--color-accent-sky)",
          sage:     "var(--color-accent-sage)",
        },
        danger:  "var(--color-danger)",
        warning: "var(--color-warning)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body:    ["var(--font-body)", "system-ui", "sans-serif"],
        accent:  ["var(--font-accent)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "24px",
        "4xl": "32px",
      },
      boxShadow: {
        warm: "0 4px 24px rgba(224,123,57,0.12)",
        card: "0 2px 12px rgba(61,35,20,0.08)",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
