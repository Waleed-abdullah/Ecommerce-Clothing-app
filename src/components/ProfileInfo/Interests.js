import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import InterestsButton from './InterestsButton';
import { useStateValue } from '../../State/StateProvider';
import { actionTypes } from '../../State/Reducer';

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
  });

  const[{user}, dispatch] = useStateValue();

  const handleClick = (event) => {
    console.log(event.target.getAttribute('name'));
    const interest = event.target.getAttribute('name');
    if (interest === 'sports') {
      !interests.sports ? addInterestsToUser('sports') : removeInterestsFromUser('sports')
      const tempInterests = {
        ...interests,
        sports: !interests.sports,
      };
      console.log(tempInterests);
      setInterests(tempInterests);
    } 
    else if (interest === 'politics') {
      !interests.politics ? addInterestsToUser('politics') : removeInterestsFromUser('politics')
      const tempInterests = {
        ...interests,
        politics: !interests.politics,
      };
      console.log(tempInterests);
      setInterests(tempInterests);
    } 
    else if (interest === 'travel') {
      !interests.travel ? addInterestsToUser('travel') : removeInterestsFromUser('travel')
      const tempInterests = {
        ...interests,
        travel: !interests.travel,
      };
      console.log(tempInterests);
      setInterests(tempInterests);
    } 
    else if (interest === 'gaming') {
      !interests.gaming ? addInterestsToUser('gaming') : removeInterestsFromUser('gaming')
      const tempInterests = {
        ...interests,
        gaming: !interests.gaming,
      };
      console.log(tempInterests);
      setInterests(tempInterests);
    } 
    else if (interest === 'art') {
      !interests.art ? addInterestsToUser('art') : removeInterestsFromUser('art')
      const tempInterests = {
        ...interests,
        art: !interests.art,
      };
      console.log(tempInterests);
      setInterests(tempInterests);
    } 
    else if (interest === 'food') {
      !interests.food ? addInterestsToUser('food') : removeInterestsFromUser('food')
      const tempInterests = {
        ...interests,
        food: !interests.food,
      };
      console.log(tempInterests);
      setInterests(tempInterests);
    } 
    else if (interest === 'books') {
      !interests.books ? addInterestsToUser('books') : removeInterestsFromUser('books')
      const tempInterests = {
        ...interests,
        books: !interests.books,
      };
      console.log(tempInterests);
      setInterests(tempInterests);
    } 
    else if (interest === 'tech') {
      !interests.tech ? addInterestsToUser('tech') : removeInterestsFromUser('tech')
      const tempInterests = {
        ...interests,
        tech: !interests.tech,
      };
      console.log(tempInterests);
      setInterests(tempInterests);
    } 
    else if (interest === 'movies') {
      !interests.movies ? addInterestsToUser('movies') : removeInterestsFromUser('movies')
      const tempInterests = {
        ...interests,
        movies: !interests.movies,
      };
      console.log(tempInterests);
      setInterests(tempInterests);
    } 
    else if (interest === 'health') {
      !interests.health ? addInterestsToUser('health') : removeInterestsFromUser('health')
      const tempInterests = {
        ...interests,
        health: !interests.health,
      };
      console.log(tempInterests);
      setInterests(tempInterests);
    }
  };

  const addInterestsToUser = (value) => {
    dispatch({
      type: actionTypes.SET_USER,
      user: {
        ...user,
        interests: user.interests.concat(value),
      },
    });
  }

  const removeInterestsFromUser = (value) => {
    dispatch({
      type: actionTypes.SET_USER,
      user: {
        ...user,
        interests: user.interests.find(interest => interest !== value),
      },
    });
  }

  return (
    <Box sx={{ mt: 2 }}>
      <Typography
        variant="subtitle2"
        ml={3}
        bgcolor="#D9A9FF"
        width="15%"
        textAlign="center"
        borderRadius="14px"
        color="#804FC0"
        fontWeight="bold"
      >
        Interests
      </Typography>

      <Box
        sx={{
          bgcolor: '#ffffff',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          width: '100%',
          borderRadius: '10px',
          boxShadow: 3,
        }}
      >
        <InterestsButton
          name="politics"
          displayName="politics"
          handleClick={handleClick}
          interest={interests.politics}
        />
        <InterestsButton
          name="sports"
          displayName="sports"
          handleClick={handleClick}
          interest={interests.sports}
        />
        <InterestsButton
          name="travel"
          displayName="travel"
          handleClick={handleClick}
          interest={interests.travel}
        />
        <InterestsButton
          name="gaming"
          displayName="gaming"
          handleClick={handleClick}
          interest={interests.gaming}
        />
        <InterestsButton
          name="art"
          displayName="art and design"
          handleClick={handleClick}
          interest={interests.art}
        />
        <InterestsButton
          name="food"
          displayName="food"
          handleClick={handleClick}
          interest={interests.food}
        />
        <InterestsButton
          name="books"
          displayName="books"
          handleClick={handleClick}
          interest={interests.books}
        />
        <InterestsButton
          name="tech"
          displayName="tech"
          handleClick={handleClick}
          interest={interests.tech}
        />
        <InterestsButton
          name="movies"
          displayName="movies and tv show"
          handleClick={handleClick}
          interest={interests.movies}
        />
        <InterestsButton
          name="health"
          displayName="health and fitness"
          handleClick={handleClick}
          interest={interests.health}
        />
      </Box>
    </Box>
  );
};

export default Interests;
