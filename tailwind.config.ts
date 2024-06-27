import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%, -40%) scale(1)",
          },
        },
      },
      colors:{
        green: {
          600: '#16a34a', // Tailwind's default green-600 color
        },
        customBlue: {
          light: '#4D73FF',  // Light shade of custom blue
          DEFAULT: '#1649FF',  // Default custom blue
          dark: '#0027CC',  // Dark shade of custom blue
        },
        customBlack: {
          DEFAULT: '#0B0B0E',
        }
      },
    },
  },
  plugins: [],
};
export default config;
