/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sky-dark': '#0B1026',
        'sky-twilight': '#1B2B52',
        'aurora-green': '#26D07C',
        'aurora-blue': '#1CA4F4',
        'sunset-orange': '#FF6B6B',
        'sunset-pink': '#FF8BA7'
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        glow: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.6 }
        }
      }
    },
  },
  plugins: [],
}