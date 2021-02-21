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
  colors,
  borderRadius: '15px',
  typographyVariants,
  fontFamily: '\'Poppins\', sans-serif',
};