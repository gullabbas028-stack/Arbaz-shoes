/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FAF6ED",
        charcoal: "#211C18",
        leather: "#7A4B32",
        leatherDark: "#5B3623",
        gold: "#C79A45",
        olive: "#5C6B4F",
        stitch: "#D8CBB4",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Work Sans", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      backgroundImage: {
        stitchline:
          "repeating-linear-gradient(90deg, #C79A45 0, #C79A45 8px, transparent 8px, transparent 16px)",
      },
    },
  },
  plugins: [],
};
