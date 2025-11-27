/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f4faf0',
          100: '#dff3d3',
          200: '#c9ecb7',
          300: '#ade49a',
          400: '#92dd7e',
          500: '#77d662',
          600: '#5cbf46',
          700: '#419d2a',
          800: '#2a7b1f',
          900: '#1B3400',
        },
        secondary: {
          50: '#f7f3f0',
          100: '#e8dcd3',
          200: '#d9c5b7',
          300: '#c9ad9a',
          400: '#A17C5B',
          500: '#946f4f',
          600: '#876244',
          700: '#6b4a32',
          800: '#4f3820',
          900: '#33260e',
        },
      },
    },
  },
  plugins: [],
};
