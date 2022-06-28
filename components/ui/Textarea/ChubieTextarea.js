import { FormControl, TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: '100%'
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        inputMultiline: {
          height: '100% !important',
          padding: '0.625rem 0.875rem'
        },
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
          boxShadow: 'inset 0 0 0 2px #353945',
          borderRadius: '12px',
          color: '#FCFCFD',
          fontFamily: 'Poppins',
          height: '6rem',
          padding: '0.625rem 0.875rem',
          resize: 'none',
          lineHeight: '1.71429',
          transition: 'all .2s',
          fontWeight: 500,
          overflow: 'hidden'
        },
        textarea: {
          color: 'red'
        },
        notchedOutline: {
          border: 'none'
        }
      }
    }
  }
});

const style = {};

const ChubieTextarea = (props) => {
  return (
    <>
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
            multiline
            onChange={(e) => props.handleChange(e)}
            onBlur={(e) => (props.handleBlur ? props.handleBlur(e) : null)}
            helperText={props.helperText ? props.helperText : ''}
          ></TextField>
        </FormControl>
      </ThemeProvider>
    </>
  );
};

export default ChubieTextarea;
