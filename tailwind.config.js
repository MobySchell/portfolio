/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "whale-image": "url(/assets/whalebackground.jpg)",
      },
    },
  },
  plugins: [],
};
