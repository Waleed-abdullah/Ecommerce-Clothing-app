import React from 'react';
import Particles from 'react-tsparticles';
import './Signin.css';
import {auth, provider} from '../../firebase';

const particleOptions = {
  background: {
    color: {
      value: '#0d47a1',
    },
  },
  fpsLimit: 90,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'push',
      },
      onHover: {
        enable: true,
        mode: 'repulse',
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: '#ffffff',
    },
    links: {
      color: '#ffffff',
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: 'none',
      enable: true,
      outMode: 'bounce',
      random: false,
      speed: 3,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: 'circle',
    },
    size: {
      random: true,
      value: 5,
    },
  },
  detectRetina: true,
};

const Signin = () => {

  // event handler for sign in button
  const signin = async () => {
    auth.signInWithPopup(provider)
    .then(result => {
      console.log(result.user)
    })
    .catch(error => alert(error.message))
  }

  return (
    <div className="Signin">
      <Particles className="particles" options={particleOptions} />
      <h1>Explore</h1>
      <button className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black" type='submit' onClick={signin}>
        Signin
      </button>
    </div>
  );
}

export default Signin;
