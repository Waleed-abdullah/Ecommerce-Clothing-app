import React from 'react';
import { Button } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';

const useStyles = makeStyles({
  button: {
    borderRadius: 20,
    boxShadow: 10,
    padding: '7px 18px',
    backgroundImage:
      'linear-gradient( to right,#da22ff 0%,#9733ee 51%, #da22ff 100% )',
  },
});

const SignOutButton = ({ handleClick }) => {
  const classes = useStyles();

  return (
    <Button
      className={classes.button}
      variant="contained"
      size="large"
      style={{ borderRadius: 20, boxShadow: 10 }}
      onClick={handleClick}
    >
      <MeetingRoomIcon />
      Sign Out
    </Button>
  );
};

export default SignOutButton;
