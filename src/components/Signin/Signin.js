import React from 'react';
import './Signin.css';
import Logo from './Logo/Logo';
import { auth, provider } from '../../firebase';
import { useStateValue } from '../../State/StateProvider';
import { actionTypes } from '../../State/Reducer';

const Signin = () => {
  const [{ user, testDetails }, dispatch] = useStateValue();

  // event handler for sign in button
  const signin = async () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(user);
        console.log(testDetails);
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
    <div>
      <div className="imageContainer">
        <Logo />
      </div>
      <button type="submit" onClick={signin}>
        Signin
      </button>
    </div>
  );
};

export default Signin;
