/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#2764FF',
        bgDark: {
          500: '#394047',
          600: '#262932',
          700: '#20252B',
          800: '#1C2127',
          900: '#12171D',
        },
      },
      fontFamily: {
        body: ['Kanit'],
      },
    },
  },
  plugins: [require("daisyui")],
}

