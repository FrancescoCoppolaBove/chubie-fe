import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  /* breakpoints:{
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1200
    }
  }, */
  typography: {
    fontFamily: ['DM Sans', 'Poppins'].join(',')
  },
  components: {
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          fontFamily: 'Poppins'
        }
      }
    },
    MuiDialog: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent'
        }
      }
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'small' },
          style: {
            textTransform: 'capitalize',
            fontSize: '1rem',
            color: '#FCFCFD',
            height: '48px',
            boxShadow: '0 0 0 2px #353945 inset',
            borderRadius: '20px',
            padding: '0 16px',
            '&:hover': {
              boxShadow: '0 0 0 2px #3772ff inset',
              background: '#3772FF'
            }
          }
        },
        {
          props: { variant: 'secondary' },
          style: {
            textTransform: 'none',
            fontSize: '1rem',
            color: '#FCFCFD',
            height: '48px',
            fontWeight: '700',
            lineHeight: 1,
            boxShadow: '0 0 0 2px #353945 inset',
            borderRadius: '24px',
            padding: '0 24px',
            '&:hover': {
              boxShadow: '0 0 0 2px #3772ff inset',
              background: '#3772FF'
            }
          }
        },
        {
          props: { variant: 'primary' },
          style: {
            textTransform: 'none',
            lineHeight: 1,
            fontSize: '1rem',
            color: '#FCFCFD',
            backgroundColor: '#3772FF',
            height: '48px',
            fontWeight: '700',
            borderRadius: '24px',
            padding: '0 24px',
            '&:hover': {
              background: '#044eff'
            }
          }
        }
      ]
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#141416',
          boxShadow: 'none'
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderColor: '#353945',
          borderWidth: '2px',
          borderRadius: '8px',
          height: '40px',
          color: '#FCFCFD',
          padding: '0 42px 0 16px'
        }
      }
    }
  },
  palette: {
    primary: {
      light: '#fcfcfd',
      main: '#3772ff'
    },
    secondary: {
      main: '#19857b'
    },
    success: {
      main: '#35b890'
    },
    error: {
      main: '#EF466F'
    }
  }
});

export default theme;
