import React from "react";
import { Box } from '@mui/system';
import logo from '../../assets/HomeAssets/logo.png';
import './Logo.css'

const Logo = () => {
    return (
        <Box className='container' sx={{ mt: 2, mb: 1, marginLeft: '80px'}}>
            <img src={logo} className='homeLogo' alt='ExploreLogo' width='250vh'/>
        </Box>
    )
}

export default Logo