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
      backgroundImage: {
        'usa-image': 'url("/img/usa-flag.svg")',
        'bra-image': 'url("/img/brasil-flag.svg")',
      },
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
  },
  screens: {
    '3xl': '1810px',
  },
  darkMode: 'selector',
  plugins: [],
}
