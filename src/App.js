import React, { useState, useEffect } from 'react';
import Signin from './components/Signin/Signin';
import ProfileInfo from './components/ProfileInfo/ProfileInfo';
import MetaTags from 'react-meta-tags';
import HomePage from './components/HomePage/HomePage';
import Loader from './components/Loader/Loader';
import { BrowserRouter as Router } from 'react-router-dom';
import { useStateValue } from './State/StateProvider';
import { actionTypes } from './State/Reducer';

const App = () => {
  const [{ user, userExists }, dispatch] = useStateValue();
  const [goToProfile, setGoToProfile] = useState(false);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('logged-in-user'))) {
      dispatch({
        type: actionTypes.SET_USER,
        user: JSON.parse(localStorage.getItem('logged-in-user'))
      })
      dispatch({
        type: actionTypes.SET_USER_EXISTS,
        userExists: true
      })
    }
  }, [])

  if (!user && !userExists) {
    return (
      <React.Fragment>
        <MetaTags>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </MetaTags>

        <Router>
          <Signin goToProfile={goToProfile} setGoToProfile={setGoToProfile} />
        </Router>
      </React.Fragment>
    );
  } else if (user && !userExists && goToProfile) {
    return (
      <React.Fragment>
        <MetaTags>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </MetaTags>

        <Router>
          <ProfileInfo />
        </Router>
      </React.Fragment>
    );
  } else if (user && userExists) {
    return (
      <React.Fragment>
        <MetaTags>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </MetaTags>

        <Router>
          <HomePage />
        </Router>
      </React.Fragment>
    );
  } else {
    return <Loader />;
  }
};

export default App;
