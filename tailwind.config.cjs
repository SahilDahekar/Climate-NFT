/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'th-bgDark': '#131316',
    },
    extend: {
      backgroundImage: {
        'forestGreen': "url('https://rare-gallery.com/uploads/posts/120599-firewatch-green-forest-mountains-minimal-4k.jpg')",
        'forestRed' : "url('./src/assets/images/forestred.jpg')",
        'iceberg' : "url('https://wallpaperaccess.com/full/1075701.jpg')",
        'extreme' : "url('https://wallpaperaccess.com/full/2898021.jpg')",
      }
    },
  },
  plugins: [],
}
