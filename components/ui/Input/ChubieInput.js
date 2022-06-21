import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';

const theme = createTheme({
  components: {
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          '&.Mui-error': {
            color: '#ef466f',
            fontFamily: 'Poppins',
            fontWeight: 700
          }
        }
      }
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: '100%'
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          '&$focused $notchedOutline': {
            borderColor: 'none'
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          width: '100%',
          background: 'none',
          fontFamily: 'Poppins',
          fontSize: '0.875rem',
          lineHeight: '1.71429',
          fontWeight: '500',
          transition: 'box-shadow .2s',
          boxShadow: 'inset 0 0 0 2px #353945',
          height: '3rem',
          padding: '0 0.875rem',
          color: '#FCFCFD',
          borderRadius: '12px',
          '&.Mui-error': {
            boxShadow: 'inset 0 0 0 2px #ef466f'
          }
        },
        notchedOutline: {
          border: 'none'
        }
      }
    }
  }
});

const ChubieInput = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <FormControl className={props.classNameFormControl} sx={{ m: 1 }}>
        <TextField
          className={props.className}
          name={props.name}
          placeholder={props.placeholder}
          InputProps={props.inputProps}
          required={props.required}
          variant="outlined"
          type={props.type}
          error={props.error}
          value={props.value}
          onChange={(e) => props.handleChange(e)}
          onBlur={(e) => (props.handleBlur ? props.handleBlur(e) : null)}
          helperText={props.helperText ? props.helperText : ''}
        ></TextField>
      </FormControl>
    </ThemeProvider>
  );
};

export default ChubieInput;
