// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // <-- ASEGÚRATE DE QUE ESTO ESTÉ ASÍ
  theme: {
    extend: {},
  },
  plugins: [],
}