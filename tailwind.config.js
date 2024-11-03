import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
daisyui
export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
}

