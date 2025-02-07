import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)"
      },
      keyframes:{
        active: {
          '0%': { width: '10rem', height: '3px' },
          '100%': { width: '15rem', height: '6px' },
        }
      },
      animation:{
        active: "active 1s ease-in"
      }
  
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
