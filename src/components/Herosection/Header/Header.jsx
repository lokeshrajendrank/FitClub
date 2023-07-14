import React from 'react';
import './Header.css';
import logo from '../../../assets/logo.png';

function Header() {
  return (
    <div className='header'>
      <img src={logo} alt='logo' className='logo' />
      <ul className='header-menu'>
        <li>Home</li>
        <li>Programs</li>
        <li>Why us</li>
        <li>Plans</li>
        <li>Testimonals</li>
      </ul>
    </div>
  );
}

export default Header;
