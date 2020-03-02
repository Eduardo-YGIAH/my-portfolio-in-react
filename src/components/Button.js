import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export default function Button() {
  return (
    <Link to='/portfolio'>
      <button className='btn'>Portfolio</button>
    </Link>
  );
}
