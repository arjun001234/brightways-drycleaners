const plugin = require('tailwindcss/plugin')

module.exports = {
    content: ["./app/**/*.{ts,tsx,jsx,js}"],
    darkMode: 'class',
    theme: {
      extend: {
        fontFamily: {
          'text': ['Inter'],
          'heading': ['Poppins'],
          'sub-heading': []
        },
        colors: {
          'text-gray': '#7F7F7F',
          'blue': '#2C4EFF',
          'white': '#fff',
          'black': '#000',
          'hover-black': '#28231D',
          "error-red": "#FF9494"
        },
        keyframes: {
          'slide-down-in': {
            "0%": "translateY(-100%)",
            "100%": "translateY(0%)"
          },
          'slide-down-out': {
            "0%": "translateY(0%)",
            "100%": "translateY(-100%)"
          },
          'slide-up-in': {
            "0%": "translateY(100%)",
            "100%": "translateY(0%)"
          },
          'slide-up-out': {
            "0%": "translateY(0%)",
            "100%": "translateY(100%)"
          },
          'slide-right-in': {
            "0%": {transform: "translateX(-100%)"},
            "100%": {tansform: "translateX(0%)"}
          },
          'slide-right-out': {
            "0%": {tansform: "translateX(0%)"},
            "100%": {transform: "translateX(-100%)"}
          },
          'slide-left-in': {
            "0%": {transform: "translateX(100%)"},
            "100%": {tansform: "translateX(0%)"}
          },
          'slide-left-out': {
            "0%": {tansform: "translateX(0%)"},
            "100%": {transform: "translateX(100%)"}
          },
          'fade-in': {
            '0%': {opacity: 1},
            '100%': {opacity: 0}
          },
          'fade-out': {
            '0%': {opacity: 0},
            '100%': {opacity: 1}
          },
          'scale-up': {
            '0%': {transform: 'scale(0)'},
            '100%': {transform: 'scale(1)'}
          },
          'scale-down': {
            '0%': {transform: 'scale(1)'},
            '100%': {transform: 'scale(0)'}
          },
          'grow-vertical': {
            '0%': {height: '0'},
            '100%': {height: 'auto'}
          }
        },
        animation: {
          'fade-in': 'fade-in 500ms ease-out forwards',
          'fade-out': 'fade-out 500ms ease-out forwards 200ms',
          'grow-vertical': 'grow-vertical 500ms ease-out forwards'
        }
      },
    },
    variants: {},
    plugins: [
      plugin(function({addUtilities}){
          addUtilities({
            '.no-scrollbar::-webkit-scrollbar': {
              'display': 'none',
            },
            '.no-scrollbar': {
              '-ms-overflow-style': 'none',
              'scrollbar-width': 'none',
            },
          })
      })
    ],
  };