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
        'brand-blue': '#776AFF',
        'brand-purple': '#A500FF',
        'brand-pink': '#CE56CF',
        'brand-yellow': '#CE56CF',
        'brand-cyan': '#46C7DE',
        'brand-orange': '#FF6033',
        'brand-green': '#21D285',
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
