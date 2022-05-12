module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',
        muted: '#4B5563',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
