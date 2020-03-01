import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';

export default function Nav(props) {
  return (
    <header className='toolbar'>
      <nav className='toolbar__navegation'>
        <div className='logo'>
          <NavLink className='logo_nav-link' to='/'>
            Eduardo Neto
          </NavLink>
        </div>
        <div className='toolbar_navigation-items'>
          <NavLink className='nav-link' to='/'>
            Home
          </NavLink>
          <NavLink className='nav-link' to='/about'>
            About
          </NavLink>
          <NavLink className='nav-link' to='/portfolio'>
            Portfolio
          </NavLink>
          <NavLink className='nav-link' to='/contact'>
            Contact
          </NavLink>
        </div>
        <div className='drawer-toggle-button__container'>
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
      </nav>
    </header>
  );
}
