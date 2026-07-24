/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./views/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
    "./index.tsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      colors: {
        stone: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        },
        sage: {
          50: '#F5F7F6',
          100: '#E8ECE9',
          200: '#CFD9D2',
          300: '#B0BEB4',
          400: '#8FA094',
          500: '#6E8074',
          600: '#4F5E4F',
          800: '#344034',
        },
        sand: {
          50: '#F9F8F6',
          100: '#F2EFEC',
          200: '#E6E2DD',
          300: '#D6CEC5',
          400: '#BDB4A8',
          500: '#9C9284',
          600: '#7D7365',
          800: '#4A453B',
          900: '#332E26',
        },
        clay: {
          50: '#FDF9F8',
          100: '#FAEFEC',
          200: '#F2DCD6',
          300: '#E6BDB3',
          400: '#D69C8F',
          500: '#C07B6B',
          600: '#A35E4F',
          700: '#8c483a', // Added deeper shade
        },
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(74, 69, 59, 0.05)',
        'medium': '0 10px 40px -4px rgba(74, 69, 59, 0.08)',
        'premium': '0 20px 40px -8px rgba(74, 69, 59, 0.12), inset 0 0 0 1px rgba(255, 255, 255, 0.6)',
        'glass': '0 8px 32px 0 rgba(74, 69, 59, 0.05), inset 0 0 0 1px rgba(255, 255, 255, 0.5)'
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.05)' }
        },
        'float-delayed': {
          '0%, 100%': { transform: 'translateY(0) scale(1.05)' },
          '50%': { transform: 'translateY(20px) scale(1)' }
        }
      },
      animation: {
        'fade-in': 'fade-in 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
        'shimmer': 'shimmer 2s infinite linear',
        'float': 'float 12s ease-in-out infinite',
        'float-delayed': 'float-delayed 15s ease-in-out infinite',
      }
    }
  },
  plugins: [],
}
