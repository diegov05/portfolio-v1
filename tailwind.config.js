/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "text": "#061328",
        "bg": "#fff",
        "button-primary": "linear-gradient(90deg, #68E6E8 3.02%, #1B50EE 100%);",
        "bg-secondary": "#C6CFDD",
        "accent-color": "#1B50EE"
      },
    },
    screens: {
      'xs': '300px',
      's': '450px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
      '4xl': '3000px'
    }
  },
  plugins: [],
}

