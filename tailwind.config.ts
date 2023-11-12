import type { Config } from "tailwindcss";
import svgToDataUri from "mini-svg-data-uri";
import plugin from "tailwindcss/plugin";

export default {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        main: "var(--main-color)",
        muted: "var(--muted)",
        inverted: "var(--inverted)",
        "text-color": "var(--text-color)",
        accent: "var(--accent)",
        "accent-hover": "var(--accent-hover)",
        "accent-faded": "var(--accent-faded)",
      },
      gradientColorStops: {
        "accent-main": "var(--accent-main)",
        "accent-secondary": "var(--accent-secondary)",
      },
      borderWidth: {
        sm: "1px",
        md: "2px",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-grid": (value: string) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" stroke="${value}" fill="none"><path d="M64 0H0V64"/></svg>`,
            )}")`,
          }),
        },
        {
          values: theme("backgroundColor"),
          type: ["color"],
        },
      );
      matchUtilities(
        {
          "bg-grid": (value: string) => ({
            backgroundSize: value,
          }),
        },
        {
          values: theme("spacing"),
          type: ["number", "length", "any"],
        },
      );
    }),
  ],
} satisfies Config;
