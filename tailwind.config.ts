import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
        },
        navy: {
          900: '#0a0e1a',
          800: '#0f1629',
          700: '#162035',
          600: '#1e2d47',
          500: '#263552',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
