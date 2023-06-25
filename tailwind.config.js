/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      yellow: "hsl(23, 89%, 56%)",
      pink: "hsl(335, 67%, 47%)",
      purplishPink: "hsl(313, 49%, 35%)",
      blue: "hsl(212, 66%, 35%)",
      darkPurple: {
        900: "hsl(266, 36%, 12%)",
        400: "hsl(266, 16%, 23%)",
      },
      gray: "hsl(0, 0%, 85%)",
      white: "hsl(0, 0%, 100%)",
    },
    backgroundImage: {
      gradientPrimary:
        "linear-gradient(180deg, #F3782C 0%, #C8286A 69.27%, #832D70 100%);",
      gradientSecondary: "linear-gradient(180deg, #1388AB 0%, #1E5492 100%)",
      circle:
        "radial-gradient(#1c1328 40%,transparent 41%),conic-gradient(#f3782c 0 27.5%,#832d70 27.5% 50%,#c8286a 50% 65%, #1e5492 60% 100%)",
    },
    fontSize: {
      xs: ["12px", "normal"],
      sm: ["14px", "normal"],
      base: ["16px", "normal"],
      md: ["18px", "normal"],
      lg: ["20px", "normal"],
      xl: ["24px", "normal"],
      "2xl": ["28px", "normal"],
      "3xl": ["36px", "normal"],
      "4xl": ["42px", "normal"],
    },
    fontWeight: {
      regular: "400",
      medium: "500",
      bold: "700",
    },
    fontFamily: {
      serif: ["Bai Jamjuree", "sans-serif"],
    },
  },
  plugins: [],
};
