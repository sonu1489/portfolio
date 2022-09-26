/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,// or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'th-background': 'var(--background)',
        'th-background-secondary': 'var(--background-secondary)',
        'th-primary-dark': 'var(--primary-dark)',
        'th-primary-medium': 'var(--primary-medium)',
        'th-primary-light': 'var(--primary-light)',
       
        
      }
    },
  },
  plugins: [],
}