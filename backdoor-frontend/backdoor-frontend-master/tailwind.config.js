module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'grey-darkest': '#16161C',
        'grey-darker': '#1A1C23',
        'grey': '#1C1E26',
        'grey-lighter': '#232530',
        'grey-lightest': '#2E303E',
        'grey-light': '#6C6F93',
        'red': '#F43E5C',
        'red-lighter': '#E9436F',
        'red-light': '#E95379',
        'green-darker': '#27D796',
        'green': '#09F7A0',
        'yellow': '#FAB28E',
        'syntax-purple': '#B877DB',
        'syntax-cyan': '#21BFC2',
        'syntax-red': '#E95678',
        'syntax-red-darker': '#DA103F',
        'syntax-orange': '#F09383',
        'syntax-yellow': '#FAC29A',
        'syntax-yellow-darker': '#FAB795',
        'terminal-teal': '#26BBD9',
        'terminal-cyan': '#59E3E3',
        'terminal-green': '#29D398',
        'terminal-pink': '#EE64AE',
        'terminal-red': '#E95678',
        'terminal-yellow': '#FAB795',
        'elevation-grey': '#0d0d0d'
      },
      fontFamily: {
        'display': ['Quicksand'],
        'body': ['Montserrat'],
        'logo': ['Doctor Glitch']
      },
      maxWidth: {
        '1/2': '50%',
        '1/4': '25%',
        '3/4': '75%',
      },
      minWidth: {
       '0': '0',
       '1/4': '25%',
       '1/2': '50%',
       '3/4': '75%',
       'full': '100%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
