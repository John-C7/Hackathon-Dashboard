/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "glow-pulse": {
          "0%, 100%": {
            textShadow:
              "0 0 5px #fff, 0 0 10px #ff007b, 0 0 15px #ff007b, 0 0 20px #ff007b, 0 0 25px #ff007b",
            color: "#fff",
          },
          "50%": {
            textShadow:
              "0 0 10px #fff, 0 0 20px #ff007b, 0 0 30px #ff007b, 0 0 40px #ff007b, 0 0 50px #ff007b",
            color: "#ff007b",
          },
        },
      },
      fontFamily: {
        "press-start": ['"Press Start 2P"', "cursive"],
        "bungee-shade": ['"Bungee Shade"', "sans-serif"],
      },

      animation: {
        "glow-pulse": "glow-pulse 2s infinite",
      },
      boxShadow: {
        glow: "0 0 20px #ff007b, 0 0 30px #ff007b, 0 0 40px #ff007b, 0 0 50px #ff007b",
      },
    },
  },
  variants: {},
  plugins: [],
};
