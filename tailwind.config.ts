import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      colors: {
        ink: {
          50: "#f7f7f8",
          100: "#ebebef",
          200: "#d1d1d8",
          300: "#a8a8b3",
          400: "#76767f",
          500: "#52525b",
          600: "#3f3f46",
          700: "#27272a",
          800: "#18181b",
          900: "#0a0a0b",
          950: "#050506",
        },
        accent: {
          DEFAULT: "#ff6a3d",
          hover: "#ff814f",
          soft: "#fff1ec",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        "pulse-slow": "pulse 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
