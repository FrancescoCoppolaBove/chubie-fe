import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiPickersDay: {
      styleOverrides: {
        root: {
          color: '#3772FF'
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          backgroundColor: '#353945',
          color: '#FCFCFD'
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
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: '#FCFCFD'
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          boxShadow: 'inset 0 0 0 2px #353945',
          borderRadius: '12px',
          color: '#FCFCFD',
          fontFamily: 'Poppins'
        },
        notchedOutline: {
          border: 'none'
        }
      }
    }
  }
});

const ChubieDatepicker = (props) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            disablePast
            openTo={props.openTo}
            views={['year', 'month', 'day']}
            value={props.value}
            onChange={(newValue) => {
              props.handleChange({ target: { value: newValue, name: props.name } });
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </ThemeProvider>
    </>
  );
};

export default ChubieDatepicker;
