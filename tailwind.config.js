/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "green--primary": "#10A4B0",
        "green-2": "#DFF6FF",
        "blue": "#0584F9",
        "gray": "#919EAB3D",
        "gray-2": "#919EABCC",
        "gray-3": "#EBEBEB",
        "gray-4": "#6B6B6B",
        "gray-5": "#9F9F9F",
        "gray-6": "#919EAB52",
        "gray-7": "#878787",
        "gray-8": "#717984",
        "gray-9": "#F3F6F8",

        "black--primary": "#212B36",
        "black-2": "#151B26"

      },
    },
  },
  plugins: [],
}
