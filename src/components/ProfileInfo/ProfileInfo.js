import React from 'react'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import './ProfileInfo.css'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { TextField, Typography } from '@mui/material';
import { TextFieldWrapper } from './TextFieldWrapper';
import { makeStyles } from "@material-ui/core/styles";

const theme = createTheme({
    palette: {
        background: {
            default: "#E5E5E5"
        }
    }
});

const useStyles = makeStyles(theme => ({
    root: {
        borderRadius: '50px',
        backgroundColor: "#FFFFFF"
    }
}))

const StyledTextField = (props) => {
    const classes = useStyles();
    return (
      <TextField InputProps={{ classes, disableUnderline: true }} {...props} />
    );
}

const ProfileInfo = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <div className='backgroundLeft'></div>
            <div className='backgroundRight'></div>

            <Container maxWidth="sm">
            <Box sx={{height: '100vh', pt:2}}>
                <Typography 
                    variant="subtitle2" 
                    ml={3} 
                    bgcolor="#D9A9FF" 
                    width='12%' 
                    textAlign='center' 
                    borderRadius="14px" 
                    color='#804FC0' 
                    fontWeight='bold'>
                    Name
                </Typography>
                <StyledTextField 
                    fullWidth 
                    variant='outlined' 
                    style={{height:'50px'}}>
                </StyledTextField>
            </Box>
            </Container>
        </ThemeProvider>
    )
}

export default ProfileInfo