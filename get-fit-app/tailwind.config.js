/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      color:{
        greenBg: '#4CAF50',
        blueBt:'#4070FF',
        lightBlBt:'#B7C8FC'
        
      },
      fontFamily:{
        Nunito: ['Nunito']
      }

    },
  },
  plugins: [],
}
