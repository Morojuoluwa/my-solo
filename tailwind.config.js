/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'fig':'#23252C',
        'foot': '#161619',
        'mane': '#1A1B21' 
      },
    },
  },
  plugins: [],
}
