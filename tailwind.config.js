/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        portfolio: {
          bg: '#1A2433',
          surface: '#243147',
          text: '#F8FAFC',
          accent: '#00E5FF',
          muted: '#38BDF8',
        }
      }
    },
  },
  plugins: [],
}