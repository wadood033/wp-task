module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        mont: ["Montserrat", "sans-serif"],
      },
      // Estimated from the mockups - adjust with eyedropper if needed
      colors: {
        // base colours; the pattern layer (grey, 15% opacity) lifts them to the design values
        dark: "#002b1c",   // page, header, footer  -> ~#0f372b
        brand2: "#04522c", // nav bar, read more, events head, contact -> ~#165938
        brand: "#1a843c",  // cards, events body, title bar -> ~#298346
        light: "#1f8641",  // active nav, membership button
        ink: "#111",
      },
    },
  },
  plugins: [],
};
