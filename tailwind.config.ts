/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./core-ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        lightGray: "rgb(var(--color-lightGray) / <alpha-value>)",
        gray: "rgb(var(--color-gray) / <alpha-value>)",
        violet: "rgb(var(--color-violet) / <alpha-value>)",
        yellow: "rgb(var(--color-yellow) / <alpha-value>)",
        lightPurple: "rgb(var(--color-lightPurple) / <alpha-value>)",
        purple: "rgb(var(--color-purple) / <alpha-value>)",
        success: "rgb(var(--color-success) / <alpha-value>)",
        green: "rgb(var(--color-green) / <alpha-value>)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      fontWeight: {
        normal: "400",
      },
    },
  },
  plugins: [],
};

export default config;
