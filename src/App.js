import React from 'react';
import Signin from './components/Signin/Signin';
import ProfileInfo from './components/ProfileInfo/ProfileInfo';
import { useStateValue } from './State/StateProvider';
import MetaTags from 'react-meta-tags';
import HomePage from './components/HomePage/HomePage';
import {Routes, Route, BrowserRouter as Router} from "react-router-dom"

const App = () => {
  //eslint-disable-next-line
  const [{ user }, dispatch] = useStateValue();

  return (
    <React.Fragment>
      <MetaTags>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </MetaTags>
    
    <Router>
    <Routes>
      <Route exact path="/profileInfo" element={<ProfileInfo/>}/>
    </Routes>
    <Routes>
      <Route exact path="/homePage" element={<HomePage/>}/>
    </Routes>
    <Routes>
      <Route exact path="/" element={<Signin/>}/>
    </Routes>
    </Router>
    </React.Fragment>
  )
};

export default App;

/*
      <MetaTags>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </MetaTags>
*/