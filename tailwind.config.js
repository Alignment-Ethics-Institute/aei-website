/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.md",
    "./assets/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'blue-deep': '#1e3a5f',
        'blue-light': '#4a90c2',
        'gold': '#d4a84b',
        'gold-light': '#f0d78c'
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
