/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      dark: {
        one: "#1C1328",
        two: "#332B3E",
      },
      yellow: "#F3782C",
      blue: "#1E5492",
      purple: "#832D70",
      pink: "#C8286A",
      white: "#ffffff",
    },
    backgroundImage: {
      gradientOne:
        "linear-gradient(180deg, #F3782C 0%, #C8286A 69.27%, #832D70 100%);",
      gradientTwo: "linear-gradient(180deg, #1388AB 0%, #1E5492 100%)",
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      md: "18px",
      lg: "20px",
      xl: "24px",
      "2xl": "28px",
      "3xl": "36px",
      "4xl": "42px",
    },
    fontWeight: {
      regular: "400",
      medium: "500",
      bold: "700",
    },
  },
  plugins: [],
};
