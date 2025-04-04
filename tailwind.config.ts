import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "fade-in-up-strong": {
          "0%": {
            opacity: "0",
            transform: "translateY(40px)", // Pehle se zyada upar se aayegi
          },
          "50%": {
            opacity: "0.5",
            transform: "translateY(10px)", // Thodi smooth transition effect
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in-up-strong": "fade-in-up-strong 1.5s ease-out forwards", // 1.5s duration to make it slow & elegant
      },
      
    },
  },
  plugins: [],
};

export default config;
