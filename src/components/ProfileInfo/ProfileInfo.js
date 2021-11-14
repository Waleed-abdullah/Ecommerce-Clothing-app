import React, { useState } from 'react';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './ProfileInfo.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';

import StyledTextField from './StyledTextField';
import Region from './Region';
import SaveProfileButton from './SaveProfileButton';
import Interests from './Interests';
import { theme } from './Theme';
import { useStateValue } from '../../State/StateProvider';

const ProfileInfo = () => {
  const [name, setName] = useState('');
  const [region, setRegion] = useState(1);
  const [{ user }, dispatch] = useStateValue();

  const handleChangeInName = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="backgroundLeft"></div>
      <div className="backgroundRight"></div>

      <Container maxWidth="sm">
        <Box sx={{ height: '100vh', pt: 3 }}>
          <form>
            <Box>
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
                Name
              </Typography>
              <StyledTextField
                fullWidth
                variant="outlined"
                type="text"
                name="name"
                id="name-input"
                onChange={handleChangeInName}
                value={name}
              ></StyledTextField>
            </Box>

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
                Email
              </Typography>
              <StyledTextField
                fullWidth
                disabled
                variant="outlined"
                type="email"
                name="email"
                id="email-input"
                defaultValue={user.email}
              ></StyledTextField>
            </Box>

            <Region region={region} setRegion={setRegion} />

            <Interests />

            <SaveProfileButton />
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default ProfileInfo;
