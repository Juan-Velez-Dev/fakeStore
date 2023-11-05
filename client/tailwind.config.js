/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'cello': {
          '50': '#f2f7fd',
          '100': '#e4ecfa',
          '200': '#c4d9f3',
          '300': '#8fbaea',
          '400': '#5495dc',
          '500': '#2e78c9',
          '600': '#1e5dab',
          '700': '#1a4a8a',
          '800': '#194173',
          '900': '#183358',
          '950': '#112340',
      },      
      },
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
        ptsans: ['PT Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

