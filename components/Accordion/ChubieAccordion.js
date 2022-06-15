import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const style = {};

const theme = createTheme({
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
          borderTop: '1px solid #353945'
        }
      }
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          backgroundColor: '#141416',
          padding: '2rem 2.5rem 2rem 0',
          fontSize: '1rem',
          lineHeight: '1.5',
          fontWeight: '500',
          color: '#FCFCFD',
          '& .MuiAccordionSummary-expandIconWrapper': {
            color: '#777e91'
          }
        }
      }
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          paddingBottom: '2rem',
          fontSize: '1rem',
          lineHeight: '1.5',
          color: '#777E90',
          paddingLeft: '0'
        }
      }
    }
  }
});

const ChubieAccordion = ({ headerText, bodyText, panel }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Accordion expanded={expanded === panel} onChange={handleChange(panel)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${panel}bh-content`}
            id={`${panel}bh-header`}
          >
            {headerText}
          </AccordionSummary>
          <AccordionDetails>{bodyText}</AccordionDetails>
        </Accordion>
      </ThemeProvider>
    </>
  );
};

export default ChubieAccordion;
