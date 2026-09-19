/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#0E1B26",        // deep navy background
        panel: "#16283570",     // (unused raw, kept for reference)
        surface: "#16283A",     // section / card background
        surfaceHigh: "#1E3245", // elevated card / input background
        accent: "#4FA8C9",      // steel-blue accent (CTAs, links, highlights)
        accentDark: "#3C8BA8",  // hover state for accent
        text: "#EEF3F6",        // primary text — high contrast on navy
        muted: "#AEC0CC",       // secondary text — still readable on navy
        border: "#2B3F4F",      // hairline borders
      },
      fontFamily: {
        display: ["Sora", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
