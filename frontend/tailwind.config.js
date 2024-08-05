/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        dmsans: ['DM Sans', 'sans-serif']
      },
      keyframes: {
        pulsate: {
          '0%, 100%': {
            transform: 'scale(3)',
          },
          '50%': {
            transform: 'scale(1.1)',
          }
        }
      },
      animation: {
        pulsate: 'pulsate 4s infinite',
      }
    },
  },
  plugins: [],
}

