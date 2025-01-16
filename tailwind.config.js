/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        oldStandard: ['Old Standard TT', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        arial: ['Arial', 'sans-serif'],
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
      },
    },
  },
  plugins: [],
};
