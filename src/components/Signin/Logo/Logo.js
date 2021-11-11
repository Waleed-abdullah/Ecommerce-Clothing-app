import React from 'react';
import Tilt from 'react-tilt';
import explore from '../images/Explore Logo.png';

const Logo = () => {
  return (
    <div>
      <Tilt
        className="Tilt"
        options={{ max: 15 }}
        style={{ height: 100, width: 100 }}
      >
        <div className="Tilt-inner">
          <img style={{ width: 100, height: 100 }} alt="logo" src={explore} />{' '}
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
