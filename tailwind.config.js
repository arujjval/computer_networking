/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Arial', 'sans-serif'],
      }
    },
    colors: {
      'dark-bg': '#191919',
      'dark-text': '#EDEDED',
      'dark-link': '#FF985C',
      'darker-bg': '#161616',
      'light-bg': '#F7F7F7',
      'light-text': '#1B1B1B',
      'light-link': '#0000A3',
      'lighter-bg': '#F0F0F0',
    },
    
  },
  plugins: []
};