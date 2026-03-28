/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./constants.tsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Text"', '"SF Pro Display"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#f5faff',
          100: '#e0f0ff',
          200: '#b3d9ff',
          300: '#66b3ff',
          400: '#3399ff',
          500: '#0071e3', // Apple Blue
          600: '#0071e3',
          700: '#005bb7',
          800: '#00448a',
          900: '#002d5c',
          950: '#00162e',
        },
        slate: {
          50: '#fbfbfd', // Apple off-white
          100: '#f5f5f7', // Apple light gray
          200: '#e8e8ed',
          300: '#d2d2d7',
          400: '#a1a1a6',
          500: '#86868b',
          600: '#6e6e73',
          700: '#424245',
          800: '#1d1d1f', // Apple black
          900: '#000000',
        }
      },
      letterSpacing: {
        tightest: '-.025em',
        tighter: '-.015em',
      }
    },
  },
  plugins: [
    typography,
  ],
}