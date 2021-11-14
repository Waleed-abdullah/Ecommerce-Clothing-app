import React from 'react';
import { Button } from '@mui/material';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  button: {
    padding: '7px 18px',
    backgroundImage:
      'linear-gradient( to right,#da22ff 0%,#9733ee 51%, #da22ff 100% )',
  },
});

const SignInButton = () => {
  const classes = useStyles();

  return (
    <Button
      className={classes.button}
      variant="contained"
      size="large"
      sx={{ borderRadius: 20, boxShadow: 10 }}
    >
      Sign In
    </Button>
  );
};

export default SignInButton;
