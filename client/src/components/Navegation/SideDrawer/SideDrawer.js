import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideDrawer.css';

export default function SideDrawer(props) {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses} onClick={props.close}>
      <div className='side-drawer-items'>
        <NavLink className='side-drawer-link' to='/'>
          Home
        </NavLink>
        <NavLink className='side-drawer-link' to='/about'>
          About
        </NavLink>
        <NavLink className='side-drawer-link' to='/portfolio'>
          Portfolio
        </NavLink>
        <NavLink className='side-drawer-link' to='/contact'>
          Contact
        </NavLink>
      </div>
    </nav>
  );
}
