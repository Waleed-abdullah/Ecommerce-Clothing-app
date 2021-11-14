import React from 'react';
import Tilt from 'react-tilt';
import explore from '../../../assets/SigninAssets/ExploreLogo.png';

const Logo = () => {
  return (
    <div>
      <Tilt className="Tilt" options={{ max: 15 }}>
        <div className="Tilt-inner">
          <img
            style={{ maxWidth: '80%', height: '80%' }}
            alt="logo"
            src={explore}
          />{' '}
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
