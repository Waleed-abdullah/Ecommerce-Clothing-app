import React from 'react';
import Particles from 'react-tsparticles';
import './Signin.css';
import { auth, provider } from '../../firebase';
import { particleOptions } from './particleOptions';
import { useStateValue } from '../../State/StateProvider';
import { actionTypes } from '../../State/Reducer';

const Signin = () => {
  const [{user, testDetails}, dispatch] = useStateValue()

  // event handler for sign in button
  const signin = async () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(user)
        console.log(testDetails)
        const temp = result.user.multiFactor.user;

        // sends data/state to the store
        dispatch({
          type: actionTypes.SET_USER,
          user: {
            uid: temp.uid,
            name: temp.displayName,
            email: temp.email,
          }
        })
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="Signin">
      <Particles className="particles" options={particleOptions} />
      <h1>Explore</h1>
      <button
        className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black"
        type="submit"
        onClick={signin}
      >
        Signin
      </button>
    </div>
  );
};

export default Signin;
