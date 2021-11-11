import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export const Interests = () => {
    return (
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
    </Box>
    )
}