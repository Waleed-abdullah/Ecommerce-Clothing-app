import React, { useEffect } from 'react'
import Navbar from './NavBar';
import Post from './Post';
import SideBar from './SideBar';
import MultiPurpose from './MultiPurpose';
import './HomePage.css'
import { useNavigate } from 'react-router-dom'
import { useStateValue } from '../../State/StateProvider';
import { useState } from 'react';

const HomePage = () => {
  const [{ user }] = useStateValue()
  const history = useNavigate()
  const [postArr, setPostArr] = useState([]);

  useEffect(() => {
    user ? history('/homePage') : history('/')
  },[user])

  useEffect(() => {
    let posts = [...postArr];
    for(let i = 0; i <= 10; i++) {
      posts.push(<Post/>);
    }
    setPostArr(posts);
  }, [])

    return (
      <React.Fragment>
      <Navbar/>
      <div style={{backgroundColor: '#F8F2FF'}}>
      <div className='main'>
        <div className='sidebar'><SideBar/></div>
        <div className='posts'>{postArr}</div>
        <div className='multi'>
          <MultiPurpose/>
        </div>
      </div>
      </div>
      </React.Fragment>
    )
};

export default HomePage;

/*
.sidebar{
    margin-top: 4.8%;
    background-color: white;
    height: 100%;
}
*/