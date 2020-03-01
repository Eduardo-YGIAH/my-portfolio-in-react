import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import * as THREE from 'three';
import DOTS from 'vanta/dist/vanta.dots.min';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Home from './pages/Home';
import Nav from './components/Navegation/Nav';
import SideDrawer from './components/Navegation/SideDrawer/SideDrawer';
import Backdrop from './components/backdrop/Backdrop';

export default function App() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  // let sideDrawer;
  let backdrop;

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

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(prevState => !prevState.sideDrawerOpen);
  };

  const sideDrawerClose = () => {
    setSideDrawerOpen(false);
  };

  if (sideDrawerOpen) {
    // sideDrawer = <SideDrawer show={sideDrawerOpen} />;
    backdrop = <Backdrop click={sideDrawerClose} />;
  }

  return (
    <div className='display-size' ref={myRef}>
      <div className='display-container'>
        <Router>
          <Nav drawerClickHandler={drawerToggleClickHandler} />
          <SideDrawer show={sideDrawerOpen} close={sideDrawerClose} />
          {backdrop}
          <main>
            <Switch>
              <Route path='/portfolio' children={<Portfolio />} />
              <Route path='/contact' children={<Contact />} />
              <Route path='/about' children={<About />} />
              <Route path='/' children={<Home />} />
            </Switch>
          </main>
        </Router>
      </div>
    </div>
  );
}
