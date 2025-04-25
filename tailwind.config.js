/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#e6f5f0',
          100: '#cceae1',
          200: '#99d5c3',
          300: '#66c0a5',
          400: '#33ab87',
          500: '#328E6E', // Main color: #328E6E
          600: '#297257',
          700: '#1f5541',
          800: '#16392b',
          900: '#0d1c16',
          950: '#060e0b',
        },
        secondary: {
          50: '#eef7ee',
          100: '#ddf0dd',
          200: '#bbe0bb',
          300: '#90C67C', // #90C67C
          400: '#67AE6E', // #67AE6E
          500: '#4e9a4e',
          600: '#3e7b3e',
          700: '#2f5c2f',
          800: '#1f3e1f',
          900: '#101f10',
          950: '#080f08',
        },
        accent: {
          50: '#f7fbee',
          100: '#f0f8dd',
          200: '#E1EEBC', // #E1EEBC
          300: '#d2e49b',
          400: '#c3da7a',
          500: '#b4d059',
          600: '#90a647',
          700: '#6c7d35',
          800: '#485324',
          900: '#242a12',
          950: '#121509',
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'slide-down': 'slide-down 0.5s ease-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}