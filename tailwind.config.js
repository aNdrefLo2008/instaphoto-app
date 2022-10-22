/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],

  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    themes: [{
      light: {
        ...require("daisyui/src/colors/themes")["[data-theme=light]"],
        primary: '#541271',
        secondary: '#90AECF',
        accent: '#E8D5B5',
      }
    }, {
    dark: {
      ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
      primary: '#541271',
      secondary: '#90AECF',
      accent: '#E8D5B5',
    }
    }],
  },
}
