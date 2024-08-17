/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,jsx}', './src/components/**/*.{html,js,jsx}'],
    theme: {
      extend: {
        colors: {
          primary: '#00d084',
          secondary: '#7cd3b3',
          dark: '#002215',
          danger: '#da0202'
        },
        inset: {
          '26rem' : '475px',
          '6.5': '25px'
        },
      },
    },
    plugins: [],
  };
  