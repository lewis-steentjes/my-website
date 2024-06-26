/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#e8e8e8", // Grey White
        secondary: "#dadada", // Greyer White
        background: "#0C2D48", // Dark Blue?
        accent: "#41aab8", // Aquamarine
        "accent-2": "#FFD53D", // Yellow?
        "content-base": "#0f110f", // Greenish Black
        "content-muted": "#676767", // Grey
        success: "#00FF00", // Green
        error: "#FF0000", // Red
      },
      boxShadow: {
        emphasis: "0 0px 10px 0px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};

// colors: {
//   primary: "#0000A3", // Blue
//   secondary: "#0067B3", // Blue Grotto
//   background: "#0C2D48", // Dark Blue
//   "accent-1": "#40B0DF", // Aquamarine
//   "accent-2": "#FFD53D", // Yellow
//   "content-base": "#FFFFFF",
//   "content-muted": "#DDDDDD",
//   success: "#00FF00",
//   error: "#FF0000",
// },
