import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Quicksand: ["Quicksand", "sans-serif"],
      },
      colors: {
        primary: "#1145BE",
        lightBlue: "#3467A9",
        darkBlue: "#114084",
        secondary: "#81B7DB",
        white: "#FFFFFF",
        black: "#000000",
        'gradient-blue-start': '#1145be',
        'gradient-blue-end': '#00c6ff',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #4f46e5, #3b82f6)',
        'gradient-primary': 'linear-gradient(to right, #1145be, #00c6ff)',
      },
      screens: {
        mobile: "640px",
        tablet: "768px",
        pc: "1024px",
        largePc: "1280px",
      },
    },
  },
  plugins: [],
};
export default config;
