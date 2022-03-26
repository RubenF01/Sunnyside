module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        softRed: "hsl(7, 99%, 70%)",
        yellow: "hsl(51, 100%, 49%)",
        darkSatCyan: "hsl(167, 40%, 24%)",
        darkBlue: "hsl(198, 62%, 26%)",
        darkLightCyan: "#90d4c5",
        darkModCyan: "#2C7566",
        veryDarkDesBlue: "hsl(212, 27%, 19%)",
        veryDarkGrayBlue: "hsl(213, 9%, 39%)",
        darkGrayBlue: "hsl(232, 10%, 55%)",
        grayishBlue: "hsl(210, 4%, 67%)",
      },
      fontFamily: {
        barlow: ["Barlow"],
        fraunces: ["Fraunces"],
      },
    },
  },
  plugins: [],
};
