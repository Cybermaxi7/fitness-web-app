/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                open: "DM sans, sans-serif",
                mont: "Montserrat Subrayada, sans-serif",
            },
            screens: {
                xsm: "480px", // or any custom value you prefer
            },
        },
    },
    plugins: [],
};
