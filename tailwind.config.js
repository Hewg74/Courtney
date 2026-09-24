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
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Figtree"', 'system-ui', 'sans-serif'],
      },
      // Palette pulled from her Maui photography: warm paper, forest shade, clay earth, sage leaf.
      colors: {
        paper: { DEFAULT: '#F7F3EC', 2: '#FBF8F3', 3: '#EFE8DC' },
        ink: { DEFAULT: '#2B2A24', 2: '#5E5A50' },
        forest: { DEFAULT: '#1E2B23', 2: '#2A3A2F' },
        mist: { DEFAULT: '#F2EEE6', 2: '#B9C2B5' },
        clay: { DEFAULT: '#B8674F', deep: '#94503C', soft: '#E9C9BC', wash: '#F3E6DE', glow: '#D9957C' },
        sage: { DEFAULT: '#7D8F7F', soft: '#DDE3DA' },
        line: { DEFAULT: 'rgba(43, 42, 36, 0.12)', strong: 'rgba(43, 42, 36, 0.22)', dark: 'rgba(242, 238, 230, 0.14)' },
      },
      borderRadius: {
        sm: '10px',
        md: '18px',
        lg: '28px',
      },
      fontSize: {
        // Display sizes: line-height held tight per craft floors.
        'display-xl': ['clamp(3rem, 6.4vw, 6.25rem)', { lineHeight: '0.98', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.5rem, 4.8vw, 4.5rem)', { lineHeight: '1.02', letterSpacing: '-0.018em' }],
        'display-md': ['clamp(2rem, 3.4vw, 3.25rem)', { lineHeight: '1.05', letterSpacing: '-0.012em' }],
        'display-sm': ['clamp(1.6rem, 2.3vw, 2.125rem)', { lineHeight: '1.12', letterSpacing: '-0.005em' }],
        'body-lg': ['1.1875rem', { lineHeight: '1.65' }],
        body: ['1.0625rem', { lineHeight: '1.7' }],
      },
      spacing: {
        section: 'clamp(88px, 12vw, 168px)',
      },
      boxShadow: {
        lift: '0 1px 2px rgba(43, 42, 36, 0.04), 0 12px 32px -12px rgba(43, 42, 36, 0.14)',
        photo: '0 30px 60px -30px rgba(30, 43, 35, 0.45)',
      },
      transitionTimingFunction: {
        calm: 'cubic-bezier(0.22, 1, 0.36, 1)',
        breath: 'cubic-bezier(0.45, 0, 0.55, 1)',
      },
      transitionDuration: {
        feedback: '150ms',
      },
    }
  },
  plugins: [],
}
