/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-noto-sans-jp)', 'Noto Sans JP', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
        'mplus-rounded': ['var(--font-mplus-rounded)', 'M PLUS Rounded 1c', 'sans-serif'],
      },
    },
  },
  plugins: [],
}