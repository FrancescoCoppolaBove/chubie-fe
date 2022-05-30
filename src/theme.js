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
    MuiButton: {
      variants: [
        {
          props: { variant: 'small' },
          style: {
            textTransform: 'capitalize',
            fontSize: '1rem',
            color: '#FCFCFD',
            height: '40px',
            boxShadow: '0 0 0 2px #353945 inset',
            borderRadius: '20px',
            padding: '0 16px',
            '&:hover': {
              boxShadow: '0 0 0 2px #3772ff inset',
              background: '#3772FF'
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
      main: red.A400
    }
  }
});

export default theme;
