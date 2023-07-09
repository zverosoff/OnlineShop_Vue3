/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    fontFamily: {
      "PT-Sans": "font-family: 'PT Sans', sans-serif;",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1700px",
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('https://img.freepik.com/free-vector/white-abstract-wallpaper_23-2148830026.jpg?w=2000')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
