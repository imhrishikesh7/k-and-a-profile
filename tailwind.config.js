/** @type {import('tailwindcss').Config} */
export default {
  build: {
    rollupOptions: {
      input: '/index.html',
    },
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       backgroundImage: {
        'gradient-45': 'linear-gradient(45deg, var(--tw-gradient-stops))'
       }
    },
  },
  plugins: [],
}