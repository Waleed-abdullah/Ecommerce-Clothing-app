import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@mui/material/Button';
import { useStateValue } from '../../State/StateProvider';

const useStyles = makeStyles({
  button: {
    backgroundColor: '#804FC0',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#6c3da9 !important',
      color: '#fff',
    },
  },
});

const SaveProfileButton = ({ name, region }) => {
  const classes = useStyles();
  //eslint-disable-next-line
  const [{ user }, dispatch] = useStateValue();

  const handleClick = () => {
    console.log(user);
  };

  return (
    <Button
      className={classes.button}
      type="submit"
      onClick={handleClick}
      variant="text"
      size="large"
      sx={{
        bgcolor: '#804FC0',
        width: '100%',
        color: '#ffffff',
        mt: 1,
        borderRadius: '15px',
        fontWeight: 'bold',
        fontSize: 'h6.fontSize',
        boxShadow: 10,
      }}
    >
      Save Profile
    </Button>
  );
};

export default SaveProfileButton;
