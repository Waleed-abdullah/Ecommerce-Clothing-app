import React, { useEffect } from 'react'
import Navbar from './NavBar';
import Post from './Post';
import SideBar from './SideBar';
import MultiPurpose from './MultiPurpose';
import NewPost from './NewPost';
import './HomePage.css'
import { useNavigate } from 'react-router-dom'
import { useStateValue } from '../../State/StateProvider';
import { useState } from 'react';
import { Routes, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

const HomePage = () => {
  const [postArr, setPostArr] = useState([]);

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