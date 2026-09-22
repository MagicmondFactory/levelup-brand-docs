/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#00205B',
          'blue-deep': '#001438',
          'blue-navy': '#000D24',
          'blue-light': '#1A3B7A',
          'blue-mist': '#E6ECF5',
          cyan: '#00C2FF',
          'cyan-deep': '#009ACC',
          'cyan-dark': '#007399',
          'cyan-tint': '#E5F9FF',
          dark: '#080B10',
          card: '#111622',
          surface: '#151C2C',
          border: '#242F45',
          muted: '#8A99AD',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
