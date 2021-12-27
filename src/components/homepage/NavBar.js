import { AppBar } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react'
import Logo from './Logo';
import './NavBar.css'
import SearchBar from "material-ui-search-bar";
import { Link } from 'react-router-dom';
import { useStateValue } from '../../State/StateProvider';

const NavBar = ({search, setSearch}) => {
  const [{user}] = useStateValue()
  const handleChangeInSearch = (value) => {
    setSearch(value)
    console.log(value)
  }

  return (
    <Box sx={{width: '100%'}}>
      <AppBar position="fixed" sx={{bgcolor: '#ffffff'}}>
        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Link to=''><Logo/></Link>

          <Box className="searchContainer" sx={{width: '25%', marginLeft: '100px'}}>
            <Link to='search' style={{textDecoration: 'none'}}><SearchBar value={search} className='searchBar' onChange={handleChangeInSearch} style={{borderRadius: '25px', width: '100%'}}></SearchBar></Link>
          </Box>

          <div className='loggedIn'>{user.name} Logged In</div>
        </Box>
      </AppBar>
    </Box>
  )
};

export default NavBar
