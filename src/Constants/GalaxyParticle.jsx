import React from 'react';
import Particles from 'react-tsparticles';

const GalaxyParticle = () => {
  return (
    <div className=' absolute h-screen w-screen'>
    <Particles
      id="galaxy-particles"
      options={{
        background: {
          color: {
            value: 'black',
          },
        },
        particles: {
          number: {
            value: 1000, 
          },
          color: {
            value: 'white',
          },
          shape: {
            type: 'circle',
          },
          opacity: {
            value: 0.7,
          },
          size: {
            value: 3,
          },
          move: {
            enable: true,
            speed: 0.2,
          },
        },
      }}
    />
    </div>
  );
};

export default GalaxyParticle;
