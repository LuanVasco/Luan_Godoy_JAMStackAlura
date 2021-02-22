import { typographyVariants } from './typographyVariants';

const colors = {
  background: {
    light: {
      color: '#FFFFFF',
    },
    main: {
      color: '#F2F2F2',
    },
  },
  borders: {
    main: {
      color: '#F1F1F1',
    },
  },
  primary: {
    main: {
      color: '#17001A',
      contrastText: '#fff',
    },
  },
  secondary: {
    main: {
      color: '#300F33',
      contrastText: '#fff',
    },
  },
  tertiary: {
    main: {
      color: '#A400B3',
      contrastText: '#fff',
    },
  },
  quaternary: {
    main: {
      color: '#601F66',
      contrastText: '#fff',
    },
  },
  quintenary: {
    main: {
      color: '#5D0066',
      contrastText: '#fff',
    },
  },
  modes: {
    dark: {
      colors: {
        body: '#17001A',
        primary: 'deeppink',
        background: 'white',
      },
    },
    light: {
      colors: {
        body: '#17001A',
        primary: 'lightpink',
        background: 'black',
      },
    },
  },
};

export default {
  breakpoints: {
    xs: 0,
    sm: 480,
    md: 768,
    lg: 992,
    xl: 1200,
  },
  borderRadius: '15px',
  colors,
  fontFamily: '\'Poppins\', sans-serif',
  typographyVariants,
};