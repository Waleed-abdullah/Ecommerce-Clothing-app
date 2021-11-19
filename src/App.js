import React from 'react';
import Signin from './components/Signin/Signin';
import ProfileInfo from './components/ProfileInfo/ProfileInfo';
import { useStateValue } from './State/StateProvider';
import MetaTags from 'react-meta-tags';

const App = () => {
  //eslint-disable-next-line
  const [{ user }, dispatch] = useStateValue();
  return (
    <React.Fragment>
      <MetaTags>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </MetaTags>

      <div>{!user ? <Signin /> : <ProfileInfo />}</div>
    </React.Fragment>
  );
};

export default App;
