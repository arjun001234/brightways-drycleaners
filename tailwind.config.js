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
        transitionDelay: {
          '50': '50ms',
          '250': '100ms',
          '350': '350ms'
        },
        keyframes: {
          'bounce-in-left': {
            '0%': {
              'transform': 'translateX(-600px)',
              'animation-timing-function': 'ease-in',
              'opacity': '0'
            },
            "38%": {
              'transform': 'translateX(0px)',
              'animation-timing-function': 'ease-out',
              'opacity': '1'
            },
            "55%": {
              'transform': 'translateX(-68px)',
              'animation-timing-function': 'ease-in'
            }, 
            "72%": {
              'transform': 'translateX(0px)',
              'animation-timing-function': 'ease-out'
            },
            "81%": {
              'transform': 'translateX(-28px)',
              'animation-timing-function': 'ease-in'
            },
            "90%": {
              'transform': 'translateX(0px)',
              'animation-timing-function': 'ease-out'
            },
            "95%": {
              'transform': 'translateX(-8px)',
              'animation-timing-function': 'ease-in'
            },
            "100%": {
              'transform': 'translateX(0px)',
              'animation-timing-function': 'ease-out'
            }
          },
          'bounce-in-right': {
            '0%': {
              'transform': 'translateX(600px)',
              'animation-timing-function': 'ease-in',
              'opacity': '0'
            },
            "38%": {
              'transform': 'translateX(0px)',
              'animation-timing-function': 'ease-out',
              'opacity': '1'
            },
            "55%": {
              'transform': 'translateX(68px)',
              'animation-timing-function': 'ease-in'
            }, 
            "72%": {
              'transform': 'translateX(0px)',
              'animation-timing-function': 'ease-out'
            },
            "81%": {
              'transform': 'translateX(28px)',
              'animation-timing-function': 'ease-in'
            },
            "90%": {
              'transform': 'translateX(0px)',
              'animation-timing-function': 'ease-out'
            },
            "95%": {
              'transform': 'translateX(8px)',
              'animation-timing-function': 'ease-in'
            },
            "100%": {
              'transform': 'translateX(0px)',
              'animation-timing-function': 'ease-out'
            }
          },
          'fade-in-top': {
            '0%': {
              'transform': 'translateY(-50px)',
              'opacity': '0'
            },
            '100%': {
              'transform': 'translateY(0px)',
              'opacity': '1'
            }
          },
          'role-in-left': {
            '0%': {
              'transform': 'translateX(-800px) rotate(-540deg)',
              'opacity': '0'
            },
            '100%': {
              'transform': 'translateX(0) rotate(0deg)',
              'opacity': '1'
            }
          },
          'role-in-right': {
            '0%': {
              'transform': 'translateX(800px) rotate(540deg)',
              'opacity': '0'
            },
            '100%': {
              'transform': 'translateX(0) rotate(0deg)',
              'opacity': '1'
            }
          },
          'fade-in-bck': {
            '0%': {
              'transform': 'translateZ(80px)',
              'opacity': '0'
            },
            '100%': {
              'transform': 'translateZ(0px)',
              'opacity': '1'
            }
          },
          'fade-in-fwd': {
            '0%': {
              'transform': 'translateZ(-80px)',
              'opacity': '0'
            },
            '100%': {
              'transform': 'translateZ(0px)',
              'opacity': '1'
            }
          },
          'slide-in-elliptic-bottom-fwd': {
            '0%': {
              'transform': 'translateY(600px) rotateX(30deg) scale(0)',
              'transform-origin': '50% 100%',
              'opacity': '0'
            },
            '100%': {
              'transform': 'translateY(0) rotateX(0) scale(1)',
              'transform-origin': '50% -1400px',
              'opacity': '1'
            }
          },
          'tilt-in-right-1': {
            '0%': {
              'transform': 'rotateX(-30deg) translateX(300px) skewX(30deg)',
              'opacity': '0'
            },
            '100%': {
              'transform': 'rotateX(0deg) translateX(0) skewX(0deg)',
              'opacity': '1'
            }
          },
          'tilt-in-left-1': {
            '0%': {
              'transform': 'rotateX(-30deg) translateX(-300px) skewX(-30deg)',
              'opacity': '0'
            },
            '100%': {
              'transform': 'rotateX(0deg) translateX(0) skewX(0deg)',
              'opacity': '1'
            }
          },
          'slide-in-bck-top': {
            '0%': {
              'transform': 'translateZ(700px) translateY(-300px)',
              'opacity': '0'
            },
            '100%': {
              'transform': 'translateZ(0) translateY(0)',
              'opacity': '1'
            }
          },
          'slide-in-bck-bottom': {
            '0%': {
              'transform': 'translateZ(700px) translateY(300px)',
              'opacity': '0'
            },
            '100%': {
              'transform': 'translateZ(0) translateY(0)',
              'opacity': '1'
            }
          },
          'swirl-in-fwd': {
            '0%': {
              'transform': 'rotate(-540deg) scale(0)',
              'opacity': '0'
            },
            '100%': {
              'transform': 'rotate(0) scale(1)',
              'opacity': '1'
            }
          }
        },
        animation: {
           'bounce-in-left': 'bounce-in-left 1.1s both',
           'bounce-in-right': 'bounce-in-right 1.1s both',
           'fade-in-top': 'fade-in-top 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
           'role-in-left': 'roll-in-left 0.6s ease-out both',
           'role-in-right': 'roll-in-right 0.6s ease-out both',
           'fade-in-bck': 'fade-in-bck 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
           'fade-in-fwd': 'fade-in-fwd 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
           'slide-in-elliptic-bottom-fwd': 'slide-in-elliptic-bottom-fwd 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
           'tilt-in-right-1': 'tilt-in-right-1 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
           'tilt-in-left-1': 'tilt-in-left-1 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
           'slide-in-bck-top': 'slide-in-bck-top 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
           'slide-in-bck-bottom': 'slide-in-bck-bottom 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
           'swirl-in-fwd': 'swirl-in-fwd 0.6s ease-out both'
        },
        animationDelay: {
          100: "100ms",
          200: "200ms",
          300: "300ms",
          400: "400ms",
          500: "500ms",
          600: "600ms",
          700: "700ms",
          800: "800ms",
          900: "900ms",
          1000: "1000ms"
        },
      },
    },
    variants: {},
    plugins: [
      require("tailwindcss-animation-delay"),
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