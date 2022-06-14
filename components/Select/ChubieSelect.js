import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          border: 'none'
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          minHeight: 'auto',
          padding: '0.625rem 0.875rem',
          fontWeight: '500',
          fontFamily: 'Poppins',
          lineHeight: '1.4',
          color: '#fcfcfd',
          fontSize: '0.875rem',
          '&:hover': {
            backgroundColor: '#23262F'
          },
          '&.Mui-selected': {
            color: '#3772FF',
            backgroundColor: '#23262F'
          }
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#141416',
          borderColor: '#353945',
          border: '2px solid #353945',
          boxShadow: '0 4px 12px rgb(20 20 22 / 10%)',
          borderRadius: '0.75rem',
          marginTop: '-0.813rem'
        }
      }
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: '0'
        }
      }
    },
    MuiSelect: {
      styleOverrides: {
        /* valueLabel: ({ ownerState, theme }) => ({
          ...(ownerState.type === 'lighter' && {
            backgroundColor: '#23262F'
          })
        }), */
        root: {
          maxWidth: '15rem',
          width: '11.25rem',
          color: '#fcfcfd',
          backgroundColor: '#141416',
          boxShadow: 'inset 0 0 0 2px #353945',
          height: '3rem',
          borderRadius: '0.75rem',
          fontFamily: 'Poppins',
          fontSize: '0.875rem',
          fontWeight: '500',
          lineHeight: '3rem',
          '&$focused $notchedOutline': {
            borderColor: 'none'
          }
        }
      }
    }
  }
});

const ChubieSelect = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <FormControl sx={{ m: 1 }}>
        <Select type={props.type} value={props.value} onChange={(e) => props.handleChange(e)}>
          {props.options?.map((option, index) => {
            return (
              <MenuItem key={index} value={option.value}>
                {option.description}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </ThemeProvider>
  );
};

export default ChubieSelect;
