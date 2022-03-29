module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['"Poppins"']
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
