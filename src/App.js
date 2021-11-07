import React, {useState} from 'react'
import './App.css';
import Signin from './components/Signin/Signin';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null)

  return (
    <div>
      <Signin currentUser= {currentUser} setCurrentUser = {setCurrentUser}/>
    </div>
  );
}

export default App;
