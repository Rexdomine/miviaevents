/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-montserrat)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['var(--font-cormorant)', 'ui-serif', 'Georgia', 'Cambria', 'serif'],
        display: ['var(--font-playfair)', 'ui-serif', 'Georgia', 'Cambria', 'serif'],
        'dm-serif': ['var(--font-dm-serif-display)', 'ui-serif', 'Georgia', 'Cambria', 'serif'],
      },
    },
  },
  plugins: [],
}
