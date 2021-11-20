import React from 'react';
import './Signin.css';
import Logo from './Logo/Logo';
import { auth, provider } from '../../firebase';
import { useStateValue } from '../../State/StateProvider';
import { actionTypes } from '../../State/Reducer';
import SignInButton from './SigninButton';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const Signin = () => {
  //eslint-disable-next-line
  const [{ user }, dispatch] = useStateValue();

  let history = useNavigate()

  // event handler for sign in button
  const signin = async () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        const temp = result.user.multiFactor.user;

        const tempUser = {
          uid: temp.uid,
          name: temp.displayName,
          email: temp.email,
          region: null,
          interests: [],
        };

        // sends data/state to the store
        dispatch({
          type: actionTypes.SET_USER,
          user: {
            ...tempUser,
          },
        });

        //call the api
        apiCall(tempUser);

        

      })
      .catch((error) => console.log(error.message));
  };

  //api call to server
  const apiCall = (userData) => {
    axios({
      method: 'post',
      url: 'http://localhost:5000/signin',
      data: {
        ...userData,
      },
    })
      .then((res) => {
        console.log(res.data)
        if (res.data) {
          history('/homePage')
        }
        else {
          console.log("User does not exist")
          history('/profileInfo')
        }
      });
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
