module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './hoc/*.{js,ts,jsx,tsx}',
    './Widgets/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'dm-sans': ['DM Sans'],
        poppins: ['Poppins']
      },
      colors: {
        'brand-red': 'var(--clr-red)',
        'brand-gray': 'var(--clr-gray)',
        'brand-purple': 'var(--clr-purple)',
        'brand-cyan': 'var(--clr-cyan)',
        'brand-yellow': 'var(--clr-yellow)',
        'brand-blue': 'var(--clr-blue)',
        'brand-green': 'var(--clr-green)',
        'brand-light': 'var(--clr-light)',
        'brand-background': 'var(--clr-background)',
        'image-black': 'rgba(20, 20, 22, 0.3)'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
