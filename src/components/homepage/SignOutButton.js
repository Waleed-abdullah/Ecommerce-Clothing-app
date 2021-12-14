import React from 'react';
import { Button } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';

const useStyles = makeStyles({
  button: {
    borderRadius: 20,
    boxShadow: 10,
    padding: '7px 18px',
    backgroundColor: '#804fc0 !important',
    '&:hover': {
      backgroundColor: '#6c3da9 !important',
      color: '#fff',
    },
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
