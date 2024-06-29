/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'page': 'var(--bg-color)',
      },
      textColor: {
        'primary': 'var(--text-color)',
      },
  },
  plugins: [],
}
}
