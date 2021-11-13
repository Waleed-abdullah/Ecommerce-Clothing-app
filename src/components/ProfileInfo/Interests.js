import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import InterestsButton from './InterestsButton';

const Interests = () => {
    const [interests, setInterests] = useState({
        sports: false,
        politics: false,
        travel: false,
        gaming: false,
        art: false,
        food: false,
        books: false,
        tech: false,
        movies: false,
        health: false,
    })

    const handleClick = (event) => {
        console.log(event.target.getAttribute('name'))
        const interest = event.target.getAttribute('name')
        if (interest === 'sports'){
            const tempInterests = {
                ...interests,
                sports: !interests.sports
            }
            console.log(tempInterests)
            setInterests(tempInterests)
        }
        else if (interest === 'politics') {
            const tempInterests = {
                ...interests,
                politics: !interests.politics
            }
            console.log(tempInterests)
            setInterests(tempInterests)
        }
        else if (interest === 'travel') {
            const tempInterests = {
                ...interests,
                travel: !interests.travel
            }
            console.log(tempInterests)
            setInterests(tempInterests)
        }
        else if (interest === 'gaming') {
            const tempInterests = {
                ...interests,
                gaming: !interests.gaming
            }
            console.log(tempInterests)
            setInterests(tempInterests)
        }
        else if (interest === 'art') {
            const tempInterests = {
                ...interests,
                art: !interests.art
            }
            console.log(tempInterests)
            setInterests(tempInterests)
        }
        else if (interest === 'food') {
            const tempInterests = {
                ...interests,
                food: !interests.food
            }
            console.log(tempInterests)
            setInterests(tempInterests)
        }
        else if (interest === 'books') {
            const tempInterests = {
                ...interests,
                books: !interests.books
            }
            console.log(tempInterests)
            setInterests(tempInterests)
        }
        else if (interest === 'tech') {
            const tempInterests = {
                ...interests,
                tech: !interests.tech
            }
            console.log(tempInterests)
            setInterests(tempInterests)
        }
        else if (interest === 'movies') {
            const tempInterests = {
                ...interests,
                movies: !interests.movies
            }
            console.log(tempInterests)
            setInterests(tempInterests)
        }
        else if (interest === 'health') {
            const tempInterests = {
                ...interests,
                health: !interests.health
            }
            console.log(tempInterests)
            setInterests(tempInterests)
        }
    }
    
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
            <InterestsButton name='politics' handleClick={handleClick} interest={interests.politics}/>
            <InterestsButton name='sports' handleClick={handleClick} interest={interests.sports}/>
            <InterestsButton name='travel' handleClick={handleClick} interest={interests.travel}/>
            <InterestsButton name='gaming' handleClick={handleClick} interest={interests.gaming}/>
            <InterestsButton name='art' handleClick={handleClick} interest={interests.art}/>
            <InterestsButton name='food' handleClick={handleClick} interest={interests.food}/>
            <InterestsButton name='books' handleClick={handleClick} interest={interests.books}/>
            <InterestsButton name='tech' handleClick={handleClick} interest={interests.tech}/>
            <InterestsButton name='movies' handleClick={handleClick} interest={interests.movies}/>
            <InterestsButton name='health' handleClick={handleClick} interest={interests.health}/>
        </Box>
    </Box>
    )
}

export default Interests