import React from 'react';
import Tilt from 'react-tilt';
import explore from '../images/Explore Logo.png';

const Logo = () => {
  return (
    <div>
      <Tilt
        className="Tilt"
        options={{ max: 25 }}
        style={{ height: 100, width: 100 }}
      >
        <div className="Tilt-inner">
          <img style={{ paddingTop: '5px' }} alt="logo" src={explore} />{' '}
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
