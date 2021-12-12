// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      'm1': '900px',
      // => @media (min-width: 640px) { ... }

      'm2': '650px',
      // => @media (min-width: 900px) { ... }

      'md': '	768px',
      'lg': '	1024px',
      'xl': '1280px',
      '2xl': '1536px'
      // => @media (min-width: 1280px) { ... }
    },
    borderColor: theme => ({
      ...theme('colors'),
       DEFAULT: theme('colors.gray.300', 'currentColor'),
      'customBC1': 'rgb(4,40,88)',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
     }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}