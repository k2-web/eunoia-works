/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Plus Jakarta Sans",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "sans-serif"
        ],
        serif: [
          "Playfair Display",
          "Cormorant Garamond",
          "Georgia",
          "serif"
        ],
        display: [
          "Playfair Display",
          "Plus Jakarta Sans",
          "serif"
        ],
        mono: [
          "SF Mono",
          "Menlo",
          "monospace"
        ]
      },
      colors: {
        // Sophisticated, trustworthy, high-prestige palette
        navy: {
          950: '#071221',
          900: '#0A1A30',
          850: '#0E223D',
          800: '#142C4E',
          700: '#1B3B66',
          600: '#234C82',
        },
        slate: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        gold: {
          50: '#FDFBF7',
          100: '#F9F5EC',
          200: '#F1E6D0',
          300: '#E6D3B0',
          400: '#D5BA86',
          500: '#C29F5D',
          600: '#A98443',
          700: '#8A6931',
          800: '#6D5127',
        },
        eunoia: {
          blue: '#16527D',
          lightBlue: '#EBF4FA',
          teal: '#1A6B7A',
          cream: '#FAF9F6',
          sand: '#F4F1EA',
          charcoal: '#1A1D20',
        }
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.05), 0 20px 25px -5px rgba(0, 0, 0, 0.02)',
        'premium': '0 10px 30px -5px rgba(10, 26, 48, 0.06), 0 0 1px 1px rgba(0, 0, 0, 0.04)',
        'elevated': '0 20px 40px -10px rgba(10, 26, 48, 0.1), 0 0 1px 1px rgba(0, 0, 0, 0.04)',
        'gold-glow': '0 0 25px rgba(194, 159, 93, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.97)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        }
      }
    },
  },
  plugins: [],
}
