/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          800: '#ffc800',
          900: '#FFD84D'
        },
        'main-background': '#f2f2f2',
        'sub-background': '#f5f5f5',
        'main-text': '#212533',
        'white-text': '#fff',
        border: '#e7e7e7',
        hover: '#eaeaea',
        'gray-text': '#868e96',
      }
    },
  },
  plugins: [],
};
