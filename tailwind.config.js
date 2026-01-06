/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        industrial: {
          50: '#f4f6f7',
          100: '#e3e8eb',
          200: '#c9d4da',
          300: '#a4b5bf',
          400: '#788f9d',
          500: '#5d7382',
          600: '#4f606e',
          700: '#44515c',
          800: '#3c454e',
          900: '#1a1f24',
          950: '#0d1012',
        },
        accent: {
          500: '#dc2626',
          600: '#b91c1c',
        }
      },
      fontFamily: {
        display: ['Oswald', 'sans-serif'],
        body: ['Source Sans 3', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/hero-bg.jpg')",
        'metal-texture': "linear-gradient(135deg, #1a1f24 0%, #3c454e 50%, #1a1f24 100%)",
      }
    },
  },
  plugins: [],
}

