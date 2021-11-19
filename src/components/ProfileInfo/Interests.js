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

  const [{ user }, dispatch] = useStateValue();

  const handleClick = (event) => {
    const interest = event.target.getAttribute('name');

    !interests[interest]
      ? addInterestsToUser(interest)
      : removeInterestsFromUser(interest);

    const tempInterests = {
      ...interests,
      [interest]: !interests[interest],
    };
    setInterests(tempInterests);
  };

  const addInterestsToUser = (value) => {
    dispatch({
      type: actionTypes.SET_USER,
      user: {
        ...user,
        interests: user.interests.concat(value),
      },
    });
  };

  const removeInterestsFromUser = (value) => {
    dispatch({
      type: actionTypes.SET_USER,
      user: {
        ...user,
        interests: user.interests.filter((interest) => interest !== value),
      },
    });
  };

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
