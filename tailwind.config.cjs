/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "language-active": "rgba(104, 117, 245, 1)",
                "language-inactive": "rgba(180, 198, 252, 1)",
                separator: "rgba(55, 65, 81, 1)",
                "link-active": "rgba(229, 231, 235, 1)",
                "link-inactive": "rgba(156, 163, 175, 1)",
                background: "rgba(31, 42, 55, 1)",
            },
            fontFamily: {
                inter: "Inter",
            },
        },
    },
    plugins: [require("flowbite/plugin")],
};
