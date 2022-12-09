import { ThemeProvider } from 'styled-components';

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

const theme = {
  colors: {
    lightGrey: '#7e7e7e',
    grey: '#334549',
    white: 'hsl(0, 0%, 100%)',
    veryLight: 'hsl(263, 100%, 93%)',
    light: '#615eb9',
    main: '#4947a8',
    text: '#493e75',
    darkerMain: ' 	hsl(264, 98%, 53%)',
    veryDarkMain: 'hsl(264, 98%, 43%)',
  },
  fonts: ['sans-serif', 'Poppins', 'Passion One'],
  fontSizes: {
    small: '8px',
    regular: '16px',
    large: '32px',
  },
  deviceMin: {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`,
  },
  keyframes: {
    comeIn: `0% {
      opacity: 0;
    }
    
    100% {
      opacity: 1;
    }`,
  },
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
