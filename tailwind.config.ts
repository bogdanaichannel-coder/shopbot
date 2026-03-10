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
      fontFamily: {
        unbounded: ["var(--font-unbounded)", "sans-serif"],
        manrope: ["var(--font-manrope)", "sans-serif"],
      },
      colors: {
        bg: "#080810",
        bg2: "#0f0f1a",
        card: "#13131f",
        border: "#1c1c2e",
        border2: "#252538",
        green: "#5dffb0",
        blue: "#4facfe",
        purple: "#c084fc",
        muted: "#5a5a7a",
        "text-primary": "#e8e8f8",
        "text-secondary": "#a0a0c0",
        tg: "#27A7E7",
      },
      borderRadius: {
        r: "14px",
        r2: "20px",
        r3: "28px",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(28px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pulse2: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          from: { backgroundPosition: "200% center" },
          to: { backgroundPosition: "-200% center" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        pulse2: "pulse2 2s infinite",
        float: "float 4s ease-in-out infinite",
        "float-d1": "float 4s ease-in-out 0.5s infinite",
        "float-d2": "float 4s ease-in-out 1s infinite",
        "float-d3": "float 4s ease-in-out 1.5s infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
