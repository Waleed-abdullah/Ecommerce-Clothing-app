import React from 'react';
import './Signin.css';
import Logo from './Logo/Logo';
import { auth, provider } from '../../firebase';
import { useStateValue } from '../../State/StateProvider';
import { actionTypes } from '../../State/Reducer';
import SignInButton from './SigninButton';
import axios from 'axios';

const Signin = () => {
  const [{ user }, dispatch] = useStateValue();

  // event handler for sign in button
  const signin = async () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        const temp = result.user.multiFactor.user;
        console.log(temp);

        // sends data/state to the store
        dispatch({
          type: actionTypes.SET_USER,
          user: {
            uid: temp.uid,
            name: temp.displayName,
            email: temp.email,
            region: null,
            interests: [],
          },
        });
      })
      .catch((error) => console.log(error.message))
      .then(() => {
        ApiCall();
      });
  };

  //api call to server

  const ApiCall = () => {
    console.log('Data being sent', user);
    axios({
      method: 'post',
      url: 'http://localhost:5000/signin',
      data: {
        ...user,
      },
    }).then((res) => console.log(res));
  };

  return (
    <div className="body">
      <div className="imageContainer">
        <Logo />
      </div>
      <SignInButton handleClick={signin}></SignInButton>
    </div>
  );
};

export default Signin;
