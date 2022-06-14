import Dialog from '@mui/material/Dialog';
import { useEffect, useState } from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const style = {
  imageIcon: `h-[40px] w-[40px] mr-[0.7rem]`,
  dialog: `antialiased`,
  title: `text-center font-poppins text-[1.7rem] text-brand-light`,
  container: `mt-[2rem] flex flex-col gap-5`,
  content: `pb-[3rem]`,
  formLabel: `font-poppins font-bold text-[#777E90]`,
  formControlLabel: `text-brand-light font-poppins font-bold`
};

const LoginDialog = (props) => {
  const { onClose, selectedValue, open } = props;
  const [state, setState] = useState({
    terms: false,
    adultAge: false
  });

  const handleCancel = () => {
    onClose();
  };

  const handleOk = (value) => {
    onClose(value);
  };

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked
    });
  };
  const { terms, adultAge } = state;
  const error = [terms, adultAge].filter((v) => v).length !== 2;

  return (
    <Dialog
      className={style.dialog}
      onClose={handleCancel}
      sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 535, backgroundColor: '#23262F', borderRadius: '10px' } }}
      maxWidth="xs"
      open={open}
    >
      <DialogTitle className={style.title}>Connetti il tuo wallet</DialogTitle>
      <DialogContent className={style.content}>
        <div className={style.formContainer}>
          <FormControl error={error} required component="fieldset" sx={{ m: 2 }}>
            <FormLabel className={style.formLabel} component="legend">
              Accetta le regole:
            </FormLabel>
            <FormGroup>
              <FormControlLabel
                className={style.formControlLabel}
                label="Dichiaro di avere almeno 18 anni"
                control={
                  <Checkbox variant="primary" checked={adultAge} onChange={handleChange} name="adultAge"></Checkbox>
                }
              ></FormControlLabel>
              <FormControlLabel
                variant="primary"
                className={style.formControlLabel}
                label="Accetto i termini e le regole"
                control={<Checkbox variant="primary" checked={terms} onChange={handleChange} name="terms"></Checkbox>}
              ></FormControlLabel>
            </FormGroup>
          </FormControl>
        </div>
        <div className={style.container}>
          <Button disabled={error} variant="secondary" onClick={() => handleOk('metamask')}>
            <img className={style.imageIcon} alt="metamask icon" src="/images/metamask.png"></img>
            Connetti con Metamask
          </Button>
          <Button disabled={error} variant="secondary" onClick={() => handleOk('walletconnect')}>
            <img className={style.imageIcon} alt="metamask icon" src="/images/wallet-connect.png"></img> Connetti col
            tuo Wallet
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;

LoginDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired
};
