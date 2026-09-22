/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#0A0A0A",        // near-black background
        ink: "#0A0A0A",         // same near-black, used for TEXT (avoids colliding with Tailwind's built-in text-base font-size utility)
        surface: "#161616",     // section / card background
        surfaceHigh: "#212121", // elevated card / input background
        accent: "#FF6A00",      // bold orange — CTAs, highlights
        accentDark: "#E25C00",  // hover state for accent
        accentLight: "#FF9040", // lighter orange for gradients/glows
        text: "#F7F5F2",        // near-white primary text
        muted: "#A8A29B",       // warm grey — secondary text
        border: "#2A2A2A",      // hairline borders
      },
      fontFamily: {
        display: ["Anton", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        marquee: "marquee 22s linear infinite",
        "marquee-reverse": "marquee-reverse 22s linear infinite",
      },
    },
  },
  plugins: [],
};
