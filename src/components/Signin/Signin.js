import React from 'react';
import './Signin.css';
import Logo from './Logo/Logo';
import { auth, provider } from '../../firebase';
import { useStateValue } from '../../State/StateProvider';
import { actionTypes } from '../../State/Reducer';
import SignInButton from './SigninButton';
import { checkIfUserExists } from '../../Controllers/apiCalls';

const Signin = ({goToProfile, setGoToProfile}) => {
  //eslint-disable-next-line
  const [{ user }, dispatch] = useStateValue();

  // event handler for sign in button
  const signin = async () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        const temp = result.user.multiFactor.user;
        console.log(temp)

        const tempUser = {
          uid: temp.uid,
          name: temp.displayName,
          email: temp.email,
          region: null,
          interests: [],
          photoURL: temp.photoURL
        };

        // sends data/state to the store
        dispatch({
          type: actionTypes.SET_USER,
          user: {
            ...tempUser,
          },
        });

        //call the api
        checkIfUserExists(tempUser, dispatch, setGoToProfile);
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="body">
      <div className="imageContainer">
        <Logo />
      </div>
      <SignInButton handleClick={signin}/>
    </div>
  );
};

export default Signin;
