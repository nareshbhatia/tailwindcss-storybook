const defaultTheme = require('tailwindcss/defaultTheme');

const colors = {
  gray: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    850: '#303030',
    900: '#212121',
  },
  blue: {
    50: '#dceefb',
    100: '#b6e0fe',
    200: '#84c5f4',
    300: '#62b0e8',
    400: '#4098d7',
    500: '#2680c2',
    600: '#186faf',
    700: '#0f609b',
    800: '#0a558c',
    900: '#003e6b',
  },
  yellow: {
    50: '#fffbea',
    100: '#fff3c4',
    200: '#fce588',
    300: '#fadb5f',
    400: '#f7c948',
    500: '#f0b429',
    600: '#de911d',
    700: '#cb6e17',
    800: '#b44d12',
    900: '#8d2b0b',
  },
  neutral: {
    50: '#f0f4f8',
    100: '#d9e2ec',
    200: '#bcccdc',
    300: '#9fb3c8',
    400: '#829ab1',
    500: '#627d98',
    600: '#486581',
    700: '#334e68',
    800: '#243b53',
    900: '#102a43',
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
        primary: {
          ...colors.blue,
          default: colors.blue['700'],
        },
        secondary: {
          ...colors.yellow,
          default: colors.yellow['400'],
        },
        neutral: {
          ...colors.neutral,
          default: colors.neutral['900'],
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
