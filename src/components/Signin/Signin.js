import React from 'react';
import './Signin.css';
import Logo from './Logo/Logo';
import { auth, provider } from '../../firebase';
import { useStateValue } from '../../State/StateProvider';
import { actionTypes } from '../../State/Reducer';
import { Button } from '@mui/material';

const Signin = () => {
  const [{ user, testDetails }, dispatch] = useStateValue();

  // event handler for sign in button
  const signin = async () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        const temp = result.user.multiFactor.user;

        // sends data/state to the store
        dispatch({
          type: actionTypes.SET_USER,
          user: {
            uid: temp.uid,
            name: temp.displayName,
            email: temp.email,
          },
        });
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className='body'>
      <div className="imageContainer">
        <Logo />
      </div>
      <Button
        style={{
          borderRadius: 20,
          padding: '7px 18px',
          backgroundImage:
            'linear-gradient( to right,#da22ff 0%,#9733ee 51%, #da22ff 100% )',
        }}
        variant="contained"
        onClick={signin}
      >
        Sign in
      </Button>
    </div>
  );
};

export default Signin;
