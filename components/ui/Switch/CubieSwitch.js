import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import { useState } from 'react';

const ChubieUISwitch = styled(Switch)(({ theme }) => ({
  padding: 8,
  '& .MuiSwitch-switchBase': {
    '& .MuiSwitch-thumb': {
      boxShadow: 'none',
      width: 16,
      height: 16,
      margin: 2,
      color: '#3772FF'
    },
    '&.Mui-checked+.MuiSwitch-track': {
      opacity: 1
    },
    '&.Mui-checked .MuiSwitch-thumb': {
      color: '#FCFCFD'
    }
  },
  '& .MuiSwitch-track': {
    borderRadius: 22 / 2,
    backgroundColor: '#3772FF'
  }
}));

const ChubieSwitch = (props) => {
  return (
    <>
      <ChubieUISwitch
        className={props.className}
        checked={props.state}
        onChange={(e) => props.handleChange(e)}
        name={props.name}
        sx={{ m: 1 }}
        disabled={props.disabled}
      />
    </>
  );
};

export default ChubieSwitch;
