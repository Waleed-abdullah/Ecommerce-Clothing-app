import { AppBar } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import Logo from './Logo';
import './NavBar.css'
import SearchBar from "material-ui-search-bar";

const NavBar = () => {
  return (
    <Box sx={{width: '100%'}}>
      <AppBar position="static" sx={{bgcolor: '#ffffff'}}>
        <Box sx={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
          <Logo/>

          <Box className="searchContainer" sx={{width: '25%'}}>
            <SearchBar className='searchBar' style={{borderRadius: '25px', width: '100%'}}></SearchBar>
          </Box>

        </Box>
      </AppBar>
    </Box>
  )
};

export default NavBar

/*
            <StyledSearchField
                fullWidth
                size='small'
                variant="outlined"
                type="text"
                name="search"
                id="search-input"
                placeholder='Search'>
            </StyledSearchField>
            <SearchIcon color='primary'></SearchIcon>
*/