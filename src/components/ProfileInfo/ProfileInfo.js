import React from 'react'
import { ThemeProvider } from "@mui/material/styles";
import { theme } from './Theme';
import CssBaseline from "@mui/material/CssBaseline";
import './ProfileInfo.css'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { StyledTextField } from './StyledTextField';
import { Region } from './Region';
import { SaveProfileButton } from './SaveProfileButton';
import { Interests } from './Interests'



const ProfileInfo = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <div className='backgroundLeft'></div>
            <div className='backgroundRight'></div>
            
            <Container maxWidth="sm">
            <Box sx={{height: '100vh', pt:3}}>
                <form>
                    <Box>
                    <Typography 
                        variant="subtitle2" 
                        ml={3} 
                        bgcolor="#D9A9FF" 
                        width='15%' 
                        textAlign='center' 
                        borderRadius="14px" 
                        color='#804FC0' 
                        fontWeight='bold'>
                        Name
                    </Typography>
                    <StyledTextField
                        fullWidth 
                        variant='outlined' 
                        type='text'
                        name='name'
                        id='name-input'>
                    </StyledTextField>
                    </Box>

                    <Box sx={{mt: 2}}>
                    <Typography 
                        variant="subtitle2" 
                        ml={3} 
                        bgcolor="#D9A9FF" 
                        width='15%' 
                        textAlign='center' 
                        borderRadius="14px" 
                        color='#804FC0' 
                        fontWeight='bold'>
                        Email
                    </Typography>
                    <StyledTextField 
                        fullWidth 
                        variant='outlined' 
                        type='email'
                        name='email'
                        id='email-input'>
                    </StyledTextField>
                    </Box>

                    <Region/>

                    <Interests/>
                    
                    <SaveProfileButton/>
                </form>
            </Box>
            </Container>
        </ThemeProvider>
    )
}

export default ProfileInfo