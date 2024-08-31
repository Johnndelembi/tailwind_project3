/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      animation: {
        tilt: 'tilt 10s infinite linear'
      },
      keyframes: {
        tilt: {
          "0% 50% 100%": {
            transform: "rotate(0deg)",
          },

          "25%": {
            transform: "rotate(2deg)",
          },

          "75%": {
            transform: "rotate(-2deg)",
          },


        }
      }
    },
  },
  plugins: [],
}

