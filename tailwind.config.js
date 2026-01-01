/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4CAF50', // Muted teal
        secondary: '#F5F5F5', // Light gray
        accent: '#FF9800', // Subtle orange
        gray: {
          '800': '#2c2c2c',
          '700': '#4a4a4a',
          '600': '#6a6a6a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
