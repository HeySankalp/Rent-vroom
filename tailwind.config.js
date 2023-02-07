/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'booking-bg': "url('https://media.istockphoto.com/id/1172785569/vector/straight-empty-road-through-the-countryside-green-hills-blue-sky-meadow-and-mountains.jpg?s=612x612&w=0&k=20&c=NvkZeW8iDGfLiaoFfNERIOG6YFIWLOzCy54TLF1qvDs=')",
      }
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
        addUtilities({
            '.scrollbar-hide': {
                '-ms-overflow-style': 'none',

                '&::-webkit-scrollbar': {
                    display: 'none'
                }
            }
        });
    })
],
}
