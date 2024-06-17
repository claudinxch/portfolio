/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        rotate: {
          '0%': {
            transform: 'rotate(90deg)',
          },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
  },
  darkMode: 'selector',
  plugins: [],
}
