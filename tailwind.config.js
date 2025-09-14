import PrimeUI from 'tailwindcss-primeui';

export default {
  content: ['./src/**/*.{html,ts}', './src/**/*.component.html', './src/**/*.component.ts'],

  theme: {
    extend: {},
    screens: {
      xs: '0px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1400px',
    },
  },
  plugins: [PrimeUI],
};
