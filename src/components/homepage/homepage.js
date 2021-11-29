import React, { useEffect } from 'react'
import Navbar from './NavBar';
import { Box } from '@mui/system';
import Post from './Post';
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
        <div className='sidebar'>SideBar</div>
        <div className='posts'>{postArr}</div>
        <div className='multi'>Multi</div>
      </div>
      </div>
      </React.Fragment>
    )
};

export default HomePage;