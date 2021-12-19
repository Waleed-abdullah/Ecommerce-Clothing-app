import React, { useState } from 'react';
import Signin from './components/Signin/Signin';
import ProfileInfo from './components/ProfileInfo/ProfileInfo';
import MetaTags from 'react-meta-tags';
import HomePage from './components/HomePage/HomePage';
import Loader from './components/Loader/Loader';
import { BrowserRouter as Router } from 'react-router-dom';
import { useStateValue } from './State/StateProvider';

const App = () => {
  const [{ user, userExists }] = useStateValue();
  const [goToProfile, setGoToProfile] = useState(false);

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
  } else if (true) {
    // user && userExists
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
