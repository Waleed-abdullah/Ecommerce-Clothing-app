import React from 'react';
import './App.css';
import Signin from './components/Signin/Signin';
import ProfileInfo from './components/ProfileInfo/ProfileInfo';
import { useStateValue } from './State/StateProvider';

const App = () => {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      {!user ? <Signin /> : <ProfileInfo />}
    </div>
  );
};

export default App;
