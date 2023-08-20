/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkslategray: "#323233",
        gray: {
          "100": "#1d1918",
          "200": "#19191a",
        },
        white: "#fff",
        gainsboro: "#dad7d5",
        palegoldenrod: "rgba(234, 231, 177, 0.5)",
      },
      fontFamily: {
        inter: "Inter",
        "lexend-giga": "'Lexend Giga'",
      },
    },
    fontSize: {
      mini: "15px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
