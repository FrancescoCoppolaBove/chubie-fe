import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { Fragment, useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiIconButtonBase: {
      styleOverrides: {
        button: {
          color: '#FDF'
        }
      }
    },
    MuiFocused: {
      styleOverrides: {
        root: {
          '&$focused  $notchedOutline': {
            border: 'none'
          },
          borderRadius: '12px',
          border: 'none'
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          '&$focused  $notchedOutline': {
            border: 'none'
          }
        }
      }
    },
    MuiAutocomplete: {
      styleOverrides: {
        clearIndicator: {
          color: '#FCFCFD'
        },
        paper: {
          color: '#FCFCFD',
          backgroundColor: '#23262F',
          fontFamily: 'Poppins'
        },
        popupIndicator: {
          color: '#FCFCFD'
        },
        root: {
          '&$focused $notchedOutline': {
            border: 'none'
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          boxShadow: 'inset 0 0 0 2px #353945',
          color: '#FCFCFD',
          fontFamily: 'Poppins',
          borderRadius: '12px',
          '&$focused $notchedOutline': {
            border: 'none'
          }
        }
      }
    }
  }
});

const ChubieAutocomplete = (props) => {
  const [jsonResults, setJsonResults] = useState([]);

  useEffect(() => {
    fetch('https://www.balldontlie.io/api/v1/players')
      .then((res) => res.json())
      .then((json) => setJsonResults(json.data));
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Autocomplete
          id="chubie-autocomplete"
          getOptionLabel={(option) => `${option.first_name} ${option.last_name}`}
          options={jsonResults}
          autoHighlight
          isOptionEqualToValue={(option, value) => option.first_name === value.first_name}
          noOptionsText={'NO COLLECTIONS'}
          renderOption={(props, option) => {
            return (
              <Box {...props} key={option.id}>
                {option.first_name} {option.last_name}
              </Box>
            );
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </ThemeProvider>
    </>
  );
};

export default ChubieAutocomplete;
