/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
      'text': '#ffffff',
        'background': '#1B1B1B',
        'primary': '#F3DC13',
        'secondary': '#898989',
        'accent': '#3D3D3D',
       },
       
       fontFamily: {
        'satoshi': ['Satoshi', 'sans-serif'],
      },
    },
  },
  plugins: [],
}