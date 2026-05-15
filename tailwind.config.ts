import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        antonio: ['var(--font-antonio)', 'sans-serif'],
        manrope: ['var(--font-manrope)', 'sans-serif'],
        reenie: ['var(--font-reenie)', 'cursive'],
        sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#EBF2FF',
          100: '#D6E4FF',
          200: '#8ABAFF',
          300: '#015AE0',
          400: '#003D9E',
          500: '#002570',
        },
        accent: {
          50: '#FFF5FA',
          100: '#FEE8F4',
          200: '#F5A9D0',
          300: '#DB3D8A',
          400: '#9D2661',
          500: '#6A163E',
        },
        neutral: {
          0: '#FFFFFF',
          50: '#F8F8F7',
          100: '#EBEBEA',
          200: '#DDDDDA',
          300: '#AEADA9',
          400: '#6E6D6A',
          500: '#2E2D2B',
          600: '#141413',
        },
      },
    },
  },
  plugins: [],
}

export default config
