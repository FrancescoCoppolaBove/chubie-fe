import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';

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
          borderRadius: '12px'
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
      <FormControl sx={{ m: 1 }}>
        <TextField
          className={props.className}
          name={props.name}
          placeholder={props.placeholder}
          InputProps={props.inputProps}
          variant="outlined"
          type={props.type}
          value={props.value}
          onChange={(e) => props.handleChange(e)}
        ></TextField>
      </FormControl>
    </ThemeProvider>
  );
};

export default ChubieInput;
