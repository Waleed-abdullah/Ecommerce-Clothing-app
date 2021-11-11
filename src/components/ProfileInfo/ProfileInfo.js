import React from 'react'
import { ThemeProvider } from "@mui/material/styles";
import { theme } from './Theme';
import CssBaseline from "@mui/material/CssBaseline";
import './ProfileInfo.css'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { FormControl, MenuItem, Typography, Select, InputLabel } from '@mui/material';
import { StyledTextField } from './StyledTextField';
import { makeStyles } from '@material-ui/styles';
import { borderRadius, minWidth } from '@mui/system';
import { Region } from './Region';
import Button from '@mui/material/Button';
import { ModifiedButton, SaveProfileButton } from './SaveProfileButton';



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
                            Interests
                        </Typography>

                        <Box sx={{bgcolor: "#ffffff", display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', width: "100%", borderRadius: "10px", boxShadow: 3}}>
                            <Button
                            variant="text"
                            sx={{p: 1, m:2, bgcolor: "#FAF4FF", borderRadius: "10px", color: '#804FC0'}}>
                                Sports
                            </Button>

                            <Button
                            variant="text"
                            sx={{p: 1, m:2, bgcolor: "#FAF4FF", borderRadius: "10px", color: '#804FC0'}}>
                                Politics
                            </Button>

                            <Button
                            variant="text"
                            sx={{p: 1, m:2, bgcolor: "#FAF4FF", borderRadius: "10px", color: '#804FC0'}}>
                                Travel
                            </Button>

                            <Button
                            variant="text"
                            sx={{p: 1, m:2, bgcolor: "#FAF4FF", borderRadius: "10px", color: '#804FC0'}}>
                                Gaming
                            </Button>

                            <Button
                            variant="text"
                            sx={{p: 1, m:2, bgcolor: "#FAF4FF", borderRadius: "10px", color: '#804FC0'}}>
                                Art
                            </Button>

                            <Button
                            variant="text"
                            sx={{p: 1, m:2, bgcolor: "#FAF4FF", borderRadius: "10px", color: '#804FC0'}}>
                                Food
                            </Button>

                            <Button
                            variant="text"
                            sx={{p: 1, m:2, bgcolor: "#FAF4FF", borderRadius: "10px", color: '#804FC0'}}>
                                Books
                            </Button>

                            <Button
                            variant="text"
                            sx={{p: 1, m:2, bgcolor: "#FAF4FF", borderRadius: "10px", color: '#804FC0'}}>
                                Tech
                            </Button>

                            <Button
                            variant="text"
                            sx={{p: 1, m:2, bgcolor: "#FAF4FF", borderRadius: "10px", color: '#804FC0'}}>
                                Movies and TV
                            </Button>

                            <Button
                            variant="text"
                            sx={{p: 1, m:"auto", marginBottom: 1, bgcolor: "#FAF4FF", borderRadius: "10px", color: '#804FC0'}}>
                                Health and Fitness
                            </Button>
                        </Box>
                        
                        <SaveProfileButton/>
                    </Box>
                </form>
            </Box>
            </Container>
        </ThemeProvider>
    )
}

export default ProfileInfo