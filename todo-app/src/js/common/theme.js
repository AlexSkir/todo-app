/* eslint-disable prettier/prettier */
import { createTheme } from '@mui/material/styles';
import { green, grey, red } from '@mui/material/colors';

const rawTheme = {
  palette: {
    secondary: {
      light: '#ffeaed',
      main: '#f44444',
      dark: '#bc000b',
    },
    warning: {
      light: '#ffdfba',
      main: '#ffa64c',
      dark: '#dd5831',
    },
    error: {
      light: red[50],
      main: red[500],
      dark: red[700],
    },
    success: {
      light: green[50],
      main: green[500],
      dark: green[700],
    },
  },
  typography: {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: 14,
    fontWeightLight: 300, // Work Sans
    fontWeightRegular: 400, // Work Sans
    fontWeightMedium: 700, // Roboto Condensed
  },
};

const fontHeader = {
  fontWeight: rawTheme.typography.fontWeightMedium,
  fontFamily: "'Roboto Condensed', sans-serif",
  textTransform: 'uppercase',
};

const typography = {
  fontHeader,
  h1: {
    ...rawTheme.typography.h1,
    ...fontHeader,
    letterSpacing: 0,
    fontSize: 60,
  },
  h2: {
    ...rawTheme.typography.h2,
    ...fontHeader,
    fontSize: 48,
  },
  h3: {
    ...rawTheme.typography.h3,
    ...fontHeader,
    fontSize: 42,
  },
  h4: {
    ...rawTheme.typography.h4,
    ...fontHeader,
    fontSize: 36,
  },
  h5: {
    ...rawTheme.typography.h5,
    fontSize: 20,
    fontWeight: rawTheme.typography.fontWeightLight,
  },
  h6: {
    ...rawTheme.typography.h6,
    ...fontHeader,
    fontSize: 18,
  },
  subtitle1: {
    ...rawTheme.typography.subtitle1,
    fontSize: 18,
  },
  body1: {
    ...rawTheme.typography.body2,
    fontWeight: rawTheme.typography.fontWeightRegular,
    fontSize: 16,
  },
  body2: {
    ...rawTheme.typography.body1,
    fontSize: 14,
  },
}

/* const themeModeEx = (mode) => ({
  palette: {
    mode,
    ...(mode === 'dark'
      ? {
        primary: {
          light: '#d2393a',
          main: '#000000',
          dark: '#333333',
        },
        ...palette,
      }
      : {
        primary: {
          light: 'white',
          main: '#1003c70',
          dark: 'gray',
        },
        ...palette,
      }),
  },
  typography: {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: 14,
    fontWeightLight: 300, // Work Sans
    fontWeightRegular: 400, // Work Sans
    fontWeightMedium: 700, // Roboto Condensed
  },
}); */

export const darkTheme = {
  palette: {
    mode: 'dark',
    primary: {
      lighter: '#777777',
      light: '#444444',
      main: '#000000',
      dark: '#000000',
      contrastText: 'white',
    },
    ...rawTheme.palette,
    background: {
      ...rawTheme.palette.background,
      default: 'white',
      placeholder: grey[200],
    },
  },
  typography: {
    ...rawTheme.typography,
    ...typography,
  },
};

export const lightTheme = {
  palette: {
    mode: 'light',
    primary: {
      lighter: '#777777',
      light: grey[50],
      main: grey[300],
      dark: grey[700],
      contrastText: 'black',
    },
    ...rawTheme.palette,
    background: {
      ...rawTheme.palette.background,
      default: 'white',
      placeholder: grey[200],
    },
  },
  typography: {
    ...rawTheme.typography,
    ...typography,
  },
}

