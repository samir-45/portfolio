/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        // Design system exact tokens from tokens.json & variables.css with full alpha support
        obsidian: "rgb(var(--color-obsidian-rgb, 13 13 13) / <alpha-value>)",
        "paper-white": "rgb(var(--color-paper-white-rgb, 255 255 255) / <alpha-value>)",
        "graphite-hairline": "rgb(var(--color-graphite-hairline-rgb, 227 227 227) / <alpha-value>)",
        smoke: "rgb(var(--color-smoke-rgb, 77 77 77) / <alpha-value>)",
        ash: "rgb(var(--color-ash-rgb, 107 107 107) / <alpha-value>)",
        carbon: "rgb(var(--color-carbon-rgb, 39 39 39) / <alpha-value>)",
        "plasma-violet": "rgb(var(--color-plasma-violet-rgb, 99 102 241) / <alpha-value>)",
        "cyan-pulse": "rgb(var(--color-cyan-pulse-rgb, 6 182 212) / <alpha-value>)",
        "wisteria-tint": "var(--color-wisteria-tint, #eef2ff)",
        "lilac-wash": "rgb(var(--surface-lilac-wash-rgb, 245 247 255) / <alpha-value>)",
        "deep-indigo": "rgb(var(--color-deep-indigo-rgb, 67 56 202) / <alpha-value>)",
        marigold: "rgb(var(--color-marigold-rgb, 245 158 11) / <alpha-value>)",
        coral: "rgb(var(--color-coral-rgb, 244 63 94) / <alpha-value>)",
        "mint-signal": "rgb(var(--color-mint-signal-rgb, 16 185 129) / <alpha-value>)",
        "sky-pulse": "rgb(var(--color-sky-pulse-rgb, 14 165 233) / <alpha-value>)",
        "fuchsia-pop": "rgb(var(--color-fuchsia-pop-rgb, 217 70 239) / <alpha-value>)",

        // UI semantic mappings
        border: "rgb(var(--color-graphite-hairline-rgb, 227 227 227) / <alpha-value>)",
        input: "rgb(var(--color-graphite-hairline-rgb, 227 227 227) / <alpha-value>)",
        ring: "rgb(var(--color-plasma-violet-rgb, 99 102 241) / <alpha-value>)",
        background: "rgb(var(--color-paper-white-rgb, 255 255 255) / <alpha-value>)",
        foreground: "rgb(var(--color-obsidian-rgb, 13 13 13) / <alpha-value>)",
        primary: {
          DEFAULT: "rgb(var(--color-obsidian-rgb, 13 13 13) / <alpha-value>)",
          foreground: "rgb(var(--color-paper-white-rgb, 255 255 255) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "rgb(var(--surface-lilac-wash-rgb, 244 240 255) / <alpha-value>)",
          foreground: "rgb(var(--color-obsidian-rgb, 13 13 13) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "rgb(var(--color-coral-rgb, 233 103 112) / <alpha-value>)",
          foreground: "rgb(var(--color-paper-white-rgb, 255 255 255) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "rgb(var(--surface-lilac-wash-rgb, 244 240 255) / <alpha-value>)",
          foreground: "rgb(var(--color-smoke-rgb, 77 77 77) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--color-plasma-violet-rgb, 138 5 255) / <alpha-value>)",
          foreground: "rgb(var(--color-paper-white-rgb, 255 255 255) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "var(--color-paper-white, #ffffff)",
          foreground: "var(--color-obsidian, #0d0d0d)",
        },
        card: {
          DEFAULT: "var(--color-paper-white, #ffffff)",
          foreground: "var(--color-obsidian, #0d0d0d)",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-ppneuemontreal)",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        display: [
          "var(--font-roobert)",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        mono: [
          "var(--font-ppneuemontrealmono)",
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      borderRadius: {
        DEFAULT: "2px",
        sm: "2px",
        md: "2px",
        lg: "2px",
        xl: "2px",
        "2xl": "2px",
        card: "2px",
        badge: "2px",
        button: "2px",
        pill: "937px",
        full: "937px",
      },
      boxShadow: {
        none: "none",
        subtle: "0 1px 2px rgba(13, 13, 13, 0.04)",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwind-scrollbar"),
  ],
};
