import React, { useEffect } from 'react'
import Navbar from './NavBar';
import Post from './Post';
import SideBar from './SideBar';
import MultiPurpose from './MultiPurpose';
import './HomePage.css'
import { useState } from 'react';

const HomePage = () => {
  //const [postArr, setPostArr] = useState([]);

    return (
      <React.Fragment>
      <Navbar/>
      <div style={{backgroundColor: '#F8F2FF'}}>
      <div className='main'>
        <div className='sidebar'><SideBar/></div>
        <div className='posts'><Post/></div>
        <div className='multi'>
        <MultiPurpose/>
        </div>
      </div>
      </div>
      </React.Fragment>
    )
};

export default HomePage;