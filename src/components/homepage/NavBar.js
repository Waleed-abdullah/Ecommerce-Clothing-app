import { AppBar } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react'
import Logo from './Logo';
import './NavBar.css'
import SearchBar from "material-ui-search-bar";
import { Link } from 'react-router-dom';

const NavBar = ({search, setSearch}) => {
  const handleChangeInSearch = (value) => {
    setSearch(value)
    console.log(value)
  }

  return (
    <Box sx={{width: '100%'}}>
      <AppBar position="fixed" sx={{bgcolor: '#ffffff'}}>
        <Box sx={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
          <Logo/>

          <Box className="searchContainer" sx={{width: '25%'}}>
            <Link to='search' style={{textDecoration: 'none'}}><SearchBar value={search} className='searchBar' onChange={handleChangeInSearch} style={{borderRadius: '25px', width: '100%'}}></SearchBar></Link>
          </Box>

        </Box>
      </AppBar>
    </Box>
  )
};

export default NavBar
