/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'red-hat-display': ['"Red Hat Display"', 'sans-serif'],
      }
    },
    colors: {
      White: 'hsl(0, 0%, 100%)',
      PaleBlue: 'hsl(225, 100%, 94%)',
      Brightblue: 'hsl(245, 75%, 52%)',
      VeryPaleBlue: 'hsl(225, 100%, 98%)',
      DesaturatedBlue: 'hsl(224, 23%, 55%)',
      DarlBlue: 'hsl(223, 47%, 23%)'
    },
  },
  plugins: [],
}

