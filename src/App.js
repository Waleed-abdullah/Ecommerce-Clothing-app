import React, {useState} from 'react'
import './App.css';
import Signin from './components/Signin/Signin';
import ProfileInfo from './components/ProfileInfo/ProfileInfo';

const App = () => {
  return (
    <div>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <ProfileInfo/>
    </div>
  );
}

export default App;
