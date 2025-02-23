import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        involve: ["var(--font-involve)", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        gradient: "textGradient 4s linear infinite",
        wrap: "wrapSpin 10s linear infinite",
        topBottom: "topBottom 2s ease infinite",
        leftRight: "leftRight 2s ease infinite",
      },
      keyframes: {
        textGradient: {
          "0%": {
            backgroundPosition: "0% center",
            backgroundSize: "200% 100%",
          },
          "100%": {
            backgroundPosition: "200% center",
            backgroundSize: "200% 100%",
          },
        },
        wrapSpin: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        topBottom: {
          "0%": {
            top: "0",
          },
          "50%": {
            top: "-20px",
          },
          "100%": {
            top: "0",
          },
        },
        leftRight: {
          "0%": {
            left: "-30%",
          },
          "50%": {
            left: "-10%",
          },
          "100%": {
            left: "-30%",
          },
        },
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, #5f29b7, #ffffff, #ffffff, #5f29b7, #5f29b7)",
        "custom-gradient-two":
          "linear-gradient(130deg, rgba(255,255,255,1) 0%, rgba(112,97,170,1) 50%, rgba(52,14,115,1) 100%);",
        "custom-gradient-three":
          "radial-gradient(circle, rgba(98,51,172,1) 0%, rgba(0,0,0,1) 60%)",
        "custom-gradient-four":
          "linear-gradient(180deg, rgba(112,97,170,1) 0%, rgba(52,14,115,1) 50%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
