/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
      },
      colors: {
        customBlue: {
          DEFAULT: '#1F8CD0', // Main color
          dark: '#176FA6',    // Slightly darker shade for hover
        },
        customGrayLight: {
          DEFAULT: '#E1E7EB', // Main light gray
          dark: '#CBD3D8',    // Slightly darker for hover
        },
        customGrayLighter: '#F8F8F8',  // No hover needed for this
        customBlueLight: '#ECF7FF',    // No hover needed for this
        customGrayDark: '#808080',     // No hover needed for this
        customGrayMedium: '#8C8C8C',   // No hover needed for this
        customRed: '#EE2A2A',          // No hover needed for this
      },
    },
   
  },
  plugins: [],
}

