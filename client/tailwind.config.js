/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'apple': {
          '50': '#f3fcf1',
          '100': '#e1f9df',
          '200': '#c4f2c0',
          '300': '#93e78e',
          '400': '#5dd256',
          '500': '#36b82f',
          '600': '#289b22',
          '700': '#22771e',
          '800': '#1e5f1c',
          '900': '#1a4e19',
          '950': '#082b08',
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

