import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navy: {
          50: "#f0f6fc",
          100: "#e0ecf8",
          200: "#c5daf0",
          300: "#9bbcd9",
          400: "#6b94b8",
          500: "#4a7299",
          600: "#3a5a7a",
          700: "#2f4863",
          800: "#1e334a",
          900: "#0f1f33",
          950: "#0b1b32",
        },
        // Live-site primary blues
        corp: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#0b1b32",
        },
        // Live-site teal / seafoam (Opportunity gradient end)
        teal: {
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#13a295",
          700: "#0f766e",
        },
        sky: {
          400: "#38bdf8",
          500: "#2e99d4",
          600: "#0284c7",
        },
        gold: {
          400: "#d4b483",
          500: "#c9a227",
          600: "#a8841f",
        },
        // Keep emerald aliases pointing at live teal so existing classes still work
        emerald: {
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#13a295",
          700: "#0f766e",
        },
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          600: "#475569",
          800: "#1e293b",
          900: "#0f172a",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "corp-hero":
          "radial-gradient(ellipse 70% 55% at 88% 8%, rgba(56,189,248,0.28), transparent 55%), radial-gradient(ellipse 65% 50% at 8% 92%, rgba(45,212,191,0.22), transparent 55%), linear-gradient(165deg, #eef6ff 0%, #f4f9fc 40%, #f0faf7 100%)",
        "blue-gradient": "linear-gradient(90deg, #1d4ed8 0%, #3b82f6 100%)",
        "opportunity": "linear-gradient(90deg, #2e99d4 0%, #13a295 100%)",
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgba(37, 99, 235, 0.08)",
        card: "0 12px 40px -12px rgba(11, 27, 50, 0.1)",
        hover: "0 20px 48px -12px rgba(37, 99, 235, 0.22)",
        btn: "0 8px 24px -6px rgba(37, 99, 235, 0.45)",
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "float-slow": "floatSlow 8s ease-in-out infinite",
        "pulse-soft": "pulseSoft 3.5s ease-in-out infinite",
        aurora: "aurora 18s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "0.9" },
        },
        aurora: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(4%, -3%) scale(1.05)" },
          "66%": { transform: "translate(-3%, 4%) scale(0.97)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
