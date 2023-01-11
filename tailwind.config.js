module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color_01: '#0E5B9D',
        color_02: '#3c8dbc',
        text: '#666666'
      },

      boxShadow: {
        'subMenu': '0 0 5px 1px rgb(0 0 0 / 8%);',
        'login': 'box-shadow: 0 15px 25px rgba(0,0,0,.6);',
        'main': '0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%)'
      },

      fontSize: {
        'title': '30px',
        'content': '20px',
        'size-0': '14px',
        'size-1': '16px',
        'size-2': '18px',
        'size-4': '20px',
        'size-5': '22px',
        'size-6': '25px',
        'size-7': '30px',
        'price': '17px'
      }
    },
  },
  plugins: [
  ],
}