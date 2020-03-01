import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import DOTS from 'vanta/dist/vanta.dots.min';
import './Home.css';

const Home = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        DOTS({
          el: myRef.current,
          THREE: THREE,
        }),
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div className='display-size' ref={myRef}>
      <div className='container'>
        <h1 className='heading'>Eduardo Neto</h1>
      </div>
    </div>
  );
};
export default Home;
