/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'brand-purple': '#8000FF',
        'brand-pink': '#FF0055',
        'brand-orange': '#FF5500',
        'brand-cyan': '#00E0FF',
        'brand-blue': '#2400FF',
        'brand-yellow': '#CCFF00',
        'brand-dark': '#050505',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'Arial', 'sans-serif'],
        taviraj: ['var(--font-taviraj)', 'serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
