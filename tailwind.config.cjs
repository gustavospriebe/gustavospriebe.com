/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "language-inactive": "rgba(180, 198, 252, 1)",
        "link-active": "rgba(229, 231, 235, 1)",
        "link-inactive": "rgba(156, 163, 175, 1)",
        separator: "rgba(55, 65, 81, 1)",
        background: "rgba(31, 42, 55, 1)",
        header3: "#4d50f9",
        // header3: "#61e538",
        // header3: "rgba(110, 120, 220, .8)",
        whiter: "#f3f4f6",
      },
      fontFamily: {
        inter: "Inter",
      },
      width: {
        127: "30rem",
        95: "23.8rem",
      },
      height: {
        127: "30rem",
        95: "23.8rem",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
